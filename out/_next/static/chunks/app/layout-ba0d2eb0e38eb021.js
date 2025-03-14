(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5733:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,7919,23)),Promise.resolve().then(s.t.bind(s,347,23)),Promise.resolve().then(s.bind(s,2179)),Promise.resolve().then(s.bind(s,6007)),Promise.resolve().then(s.bind(s,8361))},2179:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var a=s(5155),r=s(8173),n=s.n(r),o=s(2115);let i=(0,s(4057).A)("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);var l=s(3312),c=s(1344);function d(){let[e,t]=(0,o.useState)(!1);return(0,a.jsx)("div",{className:"fixed bottom-20 right-16 z-50 hidden md:block",children:(0,a.jsxs)(c.lG,{open:e,onOpenChange:t,children:[(0,a.jsx)(c.zM,{asChild:!0,children:(0,a.jsx)(l.$,{size:"icon",className:"rounded-full w-12 h-12 bg-amber-800 hover:bg-amber-600 text-amber-100 border border-amber-800 shadow-lg backdrop-blur-sm transition-all duration-200","aria-label":"Help",children:(0,a.jsx)(i,{className:"w-6 h-6"})})}),(0,a.jsxs)(c.Cf,{className:"bg-zinc-900 border-zinc-800 max-w-2xl",children:[(0,a.jsxs)(c.c7,{children:[(0,a.jsx)(c.L3,{className:"text-amber-400 text-xl",children:"Twitch Integration Help"}),(0,a.jsx)(c.rr,{className:"text-zinc-400",children:"Learn how to use the Twitch features in the Soulsborne Tracker"})]}),(0,a.jsxs)("div",{className:"space-y-6 py-4 text-zinc-200",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold text-amber-300",children:"Home Page: Twitch Authorization"}),(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("span",{className:"font-medium text-amber-300",children:"Authorize Twitch"})," button on the home page connects your Twitch account to the Soulsborne Tracker using Twitch's OAuth system."]}),(0,a.jsx)("p",{children:"Authorizing your Twitch account allows the tracker to integrate with your Twitch channel, enabling enhanced features like sending messages to a specific chatroom."}),(0,a.jsx)("div",{className:"bg-zinc-800 p-3 rounded-md border border-zinc-700 mt-2",children:(0,a.jsxs)("p",{className:"text-sm text-zinc-400",children:[(0,a.jsx)("span",{className:"font-medium text-amber-300",children:"Note:"})," Authentication is required only once and grants the tracker permission to interact with Twitch chat. You can disconnect at any time by clicking the ",(0,a.jsx)("span",{className:"font-medium text-amber-300",children:"Disconnect Twitch"})," button."]})})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold text-amber-300",children:"Game Pages: Twitch Chat Connection"}),(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("span",{className:"font-medium text-amber-300",children:"Connect Twitch Chat"})," button on individual game pages allows you to link your progress tracker to a specific Twitch channel."]}),(0,a.jsx)("p",{children:"This enables the tracker to receive commands sent via chat:"}),(0,a.jsxs)("ul",{className:"list-disc pl-6 space-y-1 text-zinc-300",children:[(0,a.jsx)("li",{children:"!charstat - Modify a character stat. Usage: !charstat vitality +2"}),(0,a.jsx)("li",{children:"!playerstat - Modify a player stat. Usage: !playerstat soulLevel +2"}),(0,a.jsx)("li",{children:"!boss - Modify boss attempts. Usage: !boss asylum-demon +1"}),(0,a.jsx)("li",{children:"!bossdone - Toggle boss completion. Usage: !bossdone asylum-demon"}),(0,a.jsx)("li",{children:"!track - Modify custom tracker. Usage: !track 1 +1"}),(0,a.jsxs)("li",{children:["!getprogress - Get shareable link for streamer's progress. Usage: !getprogress",(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"(WARNING: Requires Home Page Twitch Auth to send progress back to the chat)"})]})]}),(0,a.jsx)("div",{className:"bg-zinc-800 p-3 rounded-md border border-zinc-700 mt-2",children:(0,a.jsxs)("p",{className:"text-sm text-zinc-400",children:[(0,a.jsx)("span",{className:"font-medium text-amber-300",children:"Note:"})," This works more like a chat listener. You can listen to ANY chatroom you want, but the commands will only work on the tracker if they are issued by a moderator or a broadcaster (So in practice you'd probably only use it for your own chat)."]})})]}),(0,a.jsx)("div",{className:"mt-4 pt-4 border-t border-zinc-800",children:(0,a.jsxs)("p",{className:"text-sm text-zinc-400",children:["For more detailed instruction on commands (such as boss ids), go",(0,a.jsx)(n(),{className:"font-medium text-amber-300",href:"/commands",children:" here"})]})})]})]})]})})}},8361:(e,t,s)=>{"use strict";s.d(t,{ProgressProvider:()=>m,p:()=>u});var a=s(5155),r=s(2115),n=s(6046),o=s(3830),i=s(4496),l=s(9113),c=s.n(l);let d=(0,r.createContext)(null);function m(e){let{children:t,gameKey:s="ds1"}=e,l=(0,n.useSearchParams)(),[m,u]=(0,r.useState)(i.I[s]),[h,g]=(0,r.useState)(!1),[p,x]=(0,r.useState)(!1),[f,b]=(0,r.useState)(!1),[y,v]=(0,r.useState)(""),[N,j]=(0,r.useState)("");(0,r.useEffect)(()=>{let e=l.get("p");if(e)g(!0),k(e);else{let e=localStorage.getItem("".concat(s,"-progress"));e&&u(JSON.parse(e))}},[s,l]);let k=e=>{try{let t=JSON.parse((0,o.D4)(e));u(t)}catch(e){console.error("Failed to load shared progress: ",e)}};return(0,a.jsx)(d.Provider,{value:{progress:m,isSharedLink:h,isUnsavedProgress:p,isTwitchConnected:f,twitchChannel:y,twitchToken:N,updateProgress:e=>{let t=c().cloneDeep({...m,...e});u(t);let a=localStorage.getItem("".concat(s,"-progress"));a&&c().isEqual(JSON.parse(a),t)?x(!1):x(!0)},getShareableLink:()=>{let e=(0,o.lF)(JSON.stringify(m),!0);return"".concat(window.location.origin).concat(window.location.pathname,"?p=").concat(e)},loadSharedProgress:k,saveProgress:()=>{localStorage.setItem("".concat(s,"-progress"),JSON.stringify(m)),x(!1)},resetProgress:()=>{localStorage.removeItem("".concat(s,"-progress")),u(i.I[s]),x(!1)},setIsTwitchConnected:b,setTwitchChannel:v,setTwitchToken:j},children:t})}function u(){let e=(0,r.useContext)(d);if(!e)throw Error("useProgress must be used within a ProgressProvider");return e}},6007:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var a=s(5155),r=s(8173),n=s.n(r);let o=(0,s(4057).A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var i=s(3312),l=s(5565);let c=[{name:"Demon's Souls",href:"/des"},{name:"Dark Souls",href:"/ds1"},{name:"Dark Souls II",href:"/ds2"},{name:"Bloodborne",href:"/bb"},{name:"Dark Souls III",href:"/ds3"},{name:"Elden Ring",href:"/elden"}];function d(){return(0,a.jsx)("header",{className:"bg-zinc-800 border-b border-zinc-700 h-16",children:(0,a.jsx)("nav",{className:"container mx-auto px-4",children:(0,a.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsxs)(n(),{href:"/",className:"flex items-center space-x-2",children:[(0,a.jsx)(l.default,{src:"/soulsborne-tracker/images/tracker-logo.png",alt:"Soulsborne tracker logo",height:64,width:64}),(0,a.jsx)("span",{className:"text-xl font-bold",children:"Soulsborne Tracker"})]})}),(0,a.jsx)("div",{className:"hidden lg:flex items-center space-x-4",children:c.map(e=>(0,a.jsx)(n(),{href:e.href,className:"px-3 py-2 rounded-md hover:bg-zinc-700 transition-colors",children:e.name},e.href))}),(0,a.jsx)("div",{className:"lg:hidden",children:(0,a.jsx)(i.$,{variant:"ghost",size:"icon",children:(0,a.jsx)(o,{className:"h-6 w-6"})})})]})})})}},3312:(e,t,s)=>{"use strict";s.d(t,{$:()=>c,r:()=>l});var a=s(5155),r=s(2115),n=s(2317),o=s(1027),i=s(1567);let l=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:s,variant:r,size:o,asChild:c=!1,...d}=e,m=c?n.DX:"button";return(0,a.jsx)(m,{className:(0,i.cn)(l({variant:r,size:o,className:s})),ref:t,...d})});c.displayName="Button"},1344:(e,t,s)=>{"use strict";s.d(t,{Cf:()=>u,Es:()=>g,L3:()=>p,c7:()=>h,lG:()=>l,rr:()=>x,zM:()=>c});var a=s(5155),r=s(2115),n=s(6115),o=s(689),i=s(1567);let l=n.bL,c=n.l9,d=n.ZL;n.bm;let m=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.hJ,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...r})});m.displayName=n.hJ.displayName;let u=r.forwardRef((e,t)=>{let{className:s,children:r,...l}=e;return(0,a.jsxs)(d,{children:[(0,a.jsx)(m,{}),(0,a.jsxs)(n.UC,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...l,children:[r,(0,a.jsxs)(n.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(o.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=n.UC.displayName;let h=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...s})};h.displayName="DialogHeader";let g=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s})};g.displayName="DialogFooter";let p=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.hE,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",s),...r})});p.displayName=n.hE.displayName;let x=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.VY,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",s),...r})});x.displayName=n.VY.displayName},4496:(e,t,s)=>{"use strict";s.d(t,{I:()=>a});let a={ds1:{game:"Dark Souls 1",playerStats:{soulLevel:1,newGamePlusCount:0,maxWeaponUpgrade:0},charStats:{vitality:10,attunement:10,endurance:10,strength:10,dexterity:10,resistance:10,intelligence:10,faith:10},bossesAttempts:[],customTrackers:[]},ds2:{game:"Dark Souls 2",playerStats:{soulLevel:1,newGamePlusCount:0,maxWeaponUpgrade:0,estusAmount:0,estusUpgrade:0},charStats:{vigor:10,vitality:10,attunement:10,endurance:10,strength:10,dexterity:10,adaptability:10,intelligence:10,faith:10},bossesAttempts:[],customTrackers:[]},ds3:{game:"Dark Souls 3",playerStats:{soulLevel:1,newGamePlusCount:0,maxWeaponUpgrade:0,estusAmount:3,estusUpgrade:0},charStats:{vigor:10,vitality:10,attunement:10,endurance:10,strength:10,dexterity:10,luck:10,intelligence:10,faith:10},bossesAttempts:[],customTrackers:[]},bb:{game:"Bloodborne",playerStats:{soulLevel:1,newGamePlusCount:0,maxWeaponUpgrade:0,insight:0},charStats:{vitality:10,strength:10,endurance:10,skill:10,bloodtinge:10,arcane:10},bossesAttempts:[],customTrackers:[]},elden:{game:"Elden Ring",playerStats:{soulLevel:1,newGamePlusCount:0,maxWeaponUpgrade:0,flaskAmount:3,flaskUpgrade:0},charStats:{vigor:10,endurance:10,strength:10,dexterity:10,mind:10,intelligence:10,faith:10,arcane:10},bossesAttempts:[],customTrackers:[]},des:{game:"Demon's Souls",playerStats:{soulLevel:1,newGamePlusCount:0,maxWeaponUpgrade:0,charTendency:3},charStats:{vitality:10,endurance:10,strength:10,dexterity:10,magic:10,intelligence:10,faith:10,luck:10},bossesAttempts:[],customTrackers:[]}}},1567:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var a=s(3463),r=s(9795);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.QP)((0,a.$)(t))}},347:()=>{},7919:e=>{e.exports={style:{fontFamily:"'EB Garamond', 'EB Garamond Fallback'",fontWeight:400,fontStyle:"normal"},className:"__className_ef1c5c",variable:"__variable_ef1c5c"}}},e=>{var t=t=>e(e.s=t);e.O(0,[333,935,365,565,375,173,441,517,358],()=>t(5733)),_N_E=e.O()}]);