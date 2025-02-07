import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    // if "next" is in param, use it as the redirect URL
    const next = searchParams.get('next') ?? '/'

    if (code) {
        const supabase = await createClient()
        const { data, error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
            const isLocalEnv = process.env.NODE_ENV === 'development'

            if (data.session?.provider_token) {
                // Call Twitch API to get channels where user is mod
                const response = await fetch('https://api.twitch.tv/helix/moderation/moderators', {
                    headers: {
                        'Authorization': `Bearer ${data.session.provider_token}`,
                        'Client-Id': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID!
                    }
                });

                if (response.ok) {
                    const { data: modChannels } = await response.json();

                    // For each channel, create mod relationship
                    for (const channel of modChannels) {
                        // You'll need to get or create the streamer's profile first
                        const { data: streamerProfile } = await supabase
                            .from('profiles')
                            .select('id')
                            .eq('twitch_id', channel.broadcaster_id)
                            .single();

                        if (streamerProfile) {
                            await supabase
                                .from('moderator_relationships')
                                .upsert({
                                    mod_id: data.session.user.id,
                                    streamer_id: streamerProfile.id
                                });
                        }
                    }
                }
            }

            if (isLocalEnv) {
                // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
                return NextResponse.redirect(`${origin}${next}`)
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`)
            } else {
                return NextResponse.redirect(`${origin}${next}`)
            }
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}