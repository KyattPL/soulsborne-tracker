"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{5164:(e,a,s)=>{s.d(a,{default:()=>g});var r=s(5155),n=s(3601),t=s(8209),i=s(4683),o=s(7193),m=s(689),d=s(6606),l=s(8361);function g(e){let{gameKey:a}=e,{progress:s,isSharedLink:g,updateProgress:_}=(0,l.p)(),h=(e,a)=>{if(g)return;let r=s.bossesAttempts.findIndex(a=>a.id===e),n=s.bossesAttempts;-1!==r?n[r].defeated=!n[r].defeated:n.push({id:e,attempts:0,name:a,defeated:!0}),_({...s,bossesAttempts:n})},p=(e,a,r)=>{if(g)return;let n=s.bossesAttempts,t=n.findIndex(a=>a.id===e);-1!==t?n[t].attempts=a?n[t].attempts+1:Math.max(0,n[t].attempts-1):n.push({id:e,attempts:a?1:0,name:r,defeated:!1}),_({...s,bossesAttempts:n})};return(0,r.jsx)(n.Bc,{children:(0,r.jsx)("div",{className:"space-y-4",children:d.I[a].map(e=>{var a,d,l,g;return(0,r.jsx)("div",{className:"\n                            border border-zinc-700/50 rounded-lg p-4 \n                            transition-all duration-300\n                            ".concat((null===(a=s.bossesAttempts.find(a=>a.id===e.id))||void 0===a?void 0:a.defeated)?"bg-emerald-900/30":"hover:bg-zinc-700/30","\n                        "),children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex-grow",children:[(0,r.jsx)("h3",{className:"font-bold text-zinc-200 text-lg",children:e.name}),(0,r.jsx)("p",{className:"text-zinc-400 text-sm",children:e.location})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsxs)("div",{className:"flex flex-col items-end",children:[(0,r.jsx)("span",{className:"text-zinc-400 text-xs mb-1",children:"Attempts"}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("button",{onClick:()=>p(e.id,!1,e.name),className:"text-zinc-400 hover:text-white transition-colors",children:(0,r.jsx)(t.A,{size:16})}),(0,r.jsx)("span",{className:"text-amber-500 w-8 text-center",children:(null===(d=s.bossesAttempts.find(a=>a.id===e.id))||void 0===d?void 0:d.attempts)||0}),(0,r.jsx)("button",{onClick:()=>p(e.id,!0,e.name),className:"text-zinc-400 hover:text-white transition-colors",children:(0,r.jsx)(i.A,{size:16})})]})]}),(0,r.jsxs)(n.m_,{children:[(0,r.jsx)(n.k$,{asChild:!0,children:(0,r.jsx)("button",{onClick:()=>h(e.id,e.name),className:"\n                                                p-2 rounded-full ml-4 transition-all duration-200\n                                                ".concat((null===(l=s.bossesAttempts.find(a=>a.id===e.id))||void 0===l?void 0:l.defeated)?"bg-emerald-500/80 hover:bg-emerald-500 text-white":"bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-400 hover:text-zinc-200","\n                                            "),children:(null===(g=s.bossesAttempts.find(a=>a.id===e.id))||void 0===g?void 0:g.defeated)?(0,r.jsx)(o.A,{}):(0,r.jsx)(m.A,{})})}),(0,r.jsx)(n.ZI,{children:(0,r.jsx)("p",{children:"Toggle defeated"})})]})]})]})},e.id)})})})}},873:(e,a,s)=>{s.d(a,{default:()=>u});var r=s(5155),n=s(2115),t=s(9124),i=s(5683),o=s(4703),m=s(5565),d=s(7650),l=s(689),g=s(2852),_=s(3025),h=s(6235),p=s(8694);let c={ds1:[{id:"Anor_Londo",name:"Anor Londo",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Anor_Londo.png"},{id:"Anor_Londo_Castle",name:"Anor Londo Castle",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Anor_Londo_Castle.png"},{id:"Ash_Lake",name:"Ash Lake",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Ash_Lake.png"},{id:"Blighttown_Swamp",name:"Blighttown Swamp",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Blighttown_Swamp.png"},{id:"Blighttown_Upper",name:"Blighttown Upper",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Blighttown_Upper.png"},{id:"Crystal_Cave",name:"Crystal Cave",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Crystal_Cave.png"},{id:"Darkroot_Basin",name:"Darkroot Basin",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Darkroot_Basin.png"},{id:"Darkroot_Garden",name:"Darkroot Garden",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Darkroot_Garden.png"},{id:"Demon_Ruins",name:"Demon Ruins",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Demon_Ruins.png"},{id:"Duke%27s_Archives",name:"Duke's Archives",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Duke%27s_Archives.png"},{id:"Firelink_Shrine",name:"Firelink Shrine",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Firelink_Shrine.png"},{id:"Great_Hollow",name:"Great Hollow",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Great_Hollow.png"},{id:"Lost_Izalith",name:"Lost Izalith",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Lost_Izalith.png"},{id:"Lower_Undead_Burg",name:"Lower Undead Burg",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Lower_Undead_Burg.png"},{id:"New_Londo",name:"New Londo",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/New_Londo.png"},{id:"Painted_World",name:"Painted World",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Painted_World.png"},{id:"Quelaag%27s_Domain",name:"Quelaag's Domain",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Quelaag%27s_Domain.png"},{id:"Sen%27s_Fortress",name:"Sen's Fortress",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Sen%27s_Fortress.png"},{id:"Sen%27s_Fortress_Roof",name:"Sen's Fortress Roof",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Sen%27s_Fortress_Roof.png"},{id:"The_Catacombs",name:"The Catacombs",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/The_Catacombs.png"},{id:"The_Depths",name:"The Depths",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/The_Depths.png"},{id:"Tomb_of_the_Giants",name:"Tomb of the Giants",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Tomb_of_the_Giants.png"},{id:"Undead_Asylum",name:"Undead Asylum",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Undead_Asylum.png"},{id:"Undead_Burg",name:"Undead Burg",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Undead_Burg.png"},{id:"Undead_Parish",name:"Undead Parish",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Undead_Parish.png"},{id:"Undead_Parish_Int",name:"Undead Parish Int",imagePath:"/soulsborne-tracker/images/ds1/ds1-maps/Undead_Parish_Int.png"}],ds2:[{id:"Aldias_Keep",name:"Aldias Keep ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Aldias_Keep.png"},{id:"Brightstone_Cove_Tseldora",name:"Brightstone Cove Tseldora ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Brightstone_Cove_Tseldora.png"},{id:"Dark_Chasm_of_Old",name:"Dark Chasm Of Old ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Dark_Chasm_of_Old.png"},{id:"Doors_of_Pharros",name:"Doors Of Pharros ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Doors_of_Pharros.png"},{id:"Dragons_Sanctum",name:"Dragons Sanctum ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Dragons_Sanctum.png"},{id:"Dragon_Aerie_and_Dragon_Shrine",name:"Dragon Aerie And Dragon Shrine ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Dragon_Aerie_and_Dragon_Shrine.png"},{id:"Drangleic_Castle",name:"Drangleic Castle ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Drangleic_Castle.png"},{id:"Earthen_Peak",name:"Earthen Peak ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Earthen_Peak.png"},{id:"Forest_of__Fallen_Giants",name:"Forest Of  Fallen Giants ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Forest_of__Fallen_Giants.png"},{id:"Frigid_Outskirts",name:"Frigid Outskirts ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Frigid_Outskirts.png"},{id:"Grave_of_Giants",name:"Grave Of Giants ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Grave_of_Giants.png"},{id:"Harvest_Valley",name:"Harvest Valley ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Harvest_Valley.png"},{id:"Heides_Tower_of_Flame",name:"Heides Tower Of Flame ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Heides_Tower_of_Flame.png"},{id:"Huntsmans_Copse",name:"Huntsmans Copse ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Huntsmans_Copse.png"},{id:"Iron_Keep",name:"Iron Keep ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Iron_Keep.png"},{id:"Lost_Bastille",name:"Lost Bastille ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Lost_Bastille.png"},{id:"Majula",name:"Majula ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Majula.png"},{id:"Memories",name:"Memories ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Memories.png"},{id:"No_Mans_Wharf",name:"No Mans Wharf ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/No_Mans_Wharf.png"},{id:"Shaded_Woods",name:"Shaded Woods ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Shaded_Woods.png"},{id:"Shrine_of_Amana",name:"Shrine Of Amana ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Shrine_of_Amana.png"},{id:"Shulva_Sanctum_City",name:"Shulva Sanctum City ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Shulva_Sanctum_City.png"},{id:"Sinner'S_Rise",name:"Sinner's Rise ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Sinner'S_Rise.png"},{id:"The_Gutter",name:"The Gutter ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/The_Gutter.png"},{id:"Things_Betwixt",name:"Things Betwixt ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Things_Betwixt.png"},{id:"Undead_Crypt",name:"Undead Crypt ",imagePath:"/soulsborne-tracker/images/ds2/ds2-maps/Undead_Crypt.png"}],ds3:[{id:"Anor Londo",name:"Anor londo ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Anor Londo.png"},{id:"Archdragon Peak 1",name:"Archdragon peak 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Archdragon Peak 1.png"},{id:"Archdragon Peak 2",name:"Archdragon peak 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Archdragon Peak 2.png"},{id:"Catacombs of Carthus",name:"Catacombs of carthus ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Catacombs of Carthus.png"},{id:"Cathedral of the Deep 1",name:"Cathedral of the deep 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Cathedral of the Deep 1.png"},{id:"Cathedral of the Deep 2",name:"Cathedral of the deep 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Cathedral of the Deep 2.png"},{id:"Cathedral of the Deep 3",name:"Cathedral of the deep 3 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Cathedral of the Deep 3.png"},{id:"Cathedral of the Deep 4",name:"Cathedral of the deep 4 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Cathedral of the Deep 4.png"},{id:"Cemetery of Ash",name:"Cemetery of ash ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Cemetery of Ash.png"},{id:"Consumed Kings Garden",name:"Consumed kings garden ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Consumed Kings Garden.png"},{id:"Dreg Heap 1",name:"Dreg heap 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Dreg Heap 1.png"},{id:"Dreg Heap 2",name:"Dreg heap 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Dreg Heap 2.png"},{id:"Dreg Heap 3",name:"Dreg heap 3 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Dreg Heap 3.png"},{id:"Farron Keep 1",name:"Farron keep 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Farron Keep 1.png"},{id:"Farron Keep 2",name:"Farron keep 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Farron Keep 2.png"},{id:"Firelink Shrine",name:"Firelink shrine ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Firelink Shrine.png"},{id:"Grand Archives 1",name:"Grand archives 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Grand Archives 1.png"},{id:"Grand Archives 2",name:"Grand archives 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Grand Archives 2.png"},{id:"Grand Archives 3",name:"Grand archives 3 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Grand Archives 3.png"},{id:"High Wall of Lothric 1",name:"High wall of lothric 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/High Wall of Lothric 1.png"},{id:"High Wall of Lothric 2",name:"High wall of lothric 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/High Wall of Lothric 2.png"},{id:"Irithyll Dungeon 1",name:"Irithyll dungeon 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Irithyll Dungeon 1.png"},{id:"Irithyll Dungeon 2",name:"Irithyll dungeon 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Irithyll Dungeon 2.png"},{id:"Irithyll of the Boreal Valley 1",name:"Irithyll of the boreal valley 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Irithyll of the Boreal Valley 1.png"},{id:"Irithyll of the Boreal Valley 2",name:"Irithyll of the boreal valley 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Irithyll of the Boreal Valley 2.png"},{id:"Irithyll of the Boreal Valley 3",name:"Irithyll of the boreal valley 3 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Irithyll of the Boreal Valley 3.png"},{id:"Irithyll of the Boreal Valley 4",name:"Irithyll of the boreal valley 4 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Irithyll of the Boreal Valley 4.png"},{id:"Kiln of the First Flame",name:"Kiln of the first flame ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Kiln of the First Flame.png"},{id:"Lothric Castle 1",name:"Lothric castle 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Lothric Castle 1.png"},{id:"Lothric Castle 2",name:"Lothric castle 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Lothric Castle 2.png"},{id:"Lothric Castle 3",name:"Lothric castle 3 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Lothric Castle 3.png"},{id:"Painted World of Ariandel 1",name:"Painted world of ariandel 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Painted World of Ariandel 1.png"},{id:"Painted World of Ariandel 2",name:"Painted world of ariandel 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Painted World of Ariandel 2.png"},{id:"Painted World of Ariandel 3",name:"Painted world of ariandel 3 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Painted World of Ariandel 3.png"},{id:"Painted World of Ariandel 4",name:"Painted world of ariandel 4 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Painted World of Ariandel 4.png"},{id:"Profaned Capital 1",name:"Profaned capital 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Profaned Capital 1.png"},{id:"Profaned Capital 2",name:"Profaned capital 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Profaned Capital 2.png"},{id:"Ringed City 1",name:"Ringed city 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Ringed City 1.png"},{id:"Ringed City 2",name:"Ringed city 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Ringed City 2.png"},{id:"Ringed City 3",name:"Ringed city 3 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Ringed City 3.png"},{id:"Road of Sacrifices ",name:"Road of sacrifices  ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Road of Sacrifices .png"},{id:"Smouldering Lake 1",name:"Smouldering lake 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Smouldering Lake 1.png"},{id:"Smouldering Lake 2",name:"Smouldering lake 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Smouldering Lake 2.png"},{id:"Undead Settlement 1",name:"Undead settlement 1 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Undead Settlement 1.png"},{id:"Undead Settlement 2",name:"Undead settlement 2 ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Undead Settlement 2.png"},{id:"Untended Graves",name:"Untended graves ",imagePath:"/soulsborne-tracker/images/ds3/ds3-maps/Untended Graves.png"}],des:[{id:"Boletarian_Palace_1_1_Part1",name:"Boletarian Palace 1 1 Part1 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Boletarian_Palace_1_1_Part1.png"},{id:"Boletarian_Palace_1_1_Part2",name:"Boletarian Palace 1 1 Part2 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Boletarian_Palace_1_1_Part2.png"},{id:"Boletarian_Palace_1_1_Part3",name:"Boletarian Palace 1 1 Part3 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Boletarian_Palace_1_1_Part3.png"},{id:"Boletarian_Palace_1_1_Part4",name:"Boletarian Palace 1 1 Part4 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Boletarian_Palace_1_1_Part4.png"},{id:"Boletarian_Palace_1_2_Part1",name:"Boletarian Palace 1 2 Part1 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Boletarian_Palace_1_2_Part1.png"},{id:"Boletarian_Palace_1_2_Part2",name:"Boletarian Palace 1 2 Part2 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Boletarian_Palace_1_2_Part2.png"},{id:"Boletarian_Palace_1_3_Part1",name:"Boletarian Palace 1 3 Part1 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Boletarian_Palace_1_3_Part1.png"},{id:"Boletarian_Palace_1_3_Part2",name:"Boletarian Palace 1 3 Part2 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Boletarian_Palace_1_3_Part2.png"},{id:"Boletarian_Palace_1_3_Part3",name:"Boletarian Palace 1 3 Part3 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Boletarian_Palace_1_3_Part3.png"},{id:"Boletarian_Palace_1_4",name:"Boletarian Palace 1 4 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Boletarian_Palace_1_4.png"},{id:"Shrine_of_Storms_4_1_Part1",name:"Shrine Of Storms 4 1 Part1 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Shrine_of_Storms_4_1_Part1.png"},{id:"Shrine_of_Storms_4_1_Part2",name:"Shrine Of Storms 4 1 Part2 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Shrine_of_Storms_4_1_Part2.png"},{id:"Shrine_of_Storms_4_2_Part1",name:"Shrine Of Storms 4 2 Part1 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Shrine_of_Storms_4_2_Part1.png"},{id:"Shrine_of_Storms_4_2_Part2",name:"Shrine Of Storms 4 2 Part2 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Shrine_of_Storms_4_2_Part2.png"},{id:"Shrine_of_Storms_4_3",name:"Shrine Of Storms 4 3 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Shrine_of_Storms_4_3.png"},{id:"Stonefang_Tunnel_2_1_Part1",name:"Stonefang Tunnel 2 1 Part1 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Stonefang_Tunnel_2_1_Part1.png"},{id:"Stonefang_Tunnel_2_1_Part2",name:"Stonefang Tunnel 2 1 Part2 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Stonefang_Tunnel_2_1_Part2.png"},{id:"Stonefang_Tunnel_2_1_Part3",name:"Stonefang Tunnel 2 1 Part3 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Stonefang_Tunnel_2_1_Part3.png"},{id:"Stonefang_Tunnel_2_2_Part1",name:"Stonefang Tunnel 2 2 Part1 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Stonefang_Tunnel_2_2_Part1.png"},{id:"Stonefang_Tunnel_2_2_Part2",name:"Stonefang Tunnel 2 2 Part2 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Stonefang_Tunnel_2_2_Part2.png"},{id:"Stonefang_Tunnel_2_2_Part3",name:"Stonefang Tunnel 2 2 Part3 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Stonefang_Tunnel_2_2_Part3.png"},{id:"Stonefang_Tunnel_2_3",name:"Stonefang Tunnel 2 3 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Stonefang_Tunnel_2_3.png"},{id:"The_Nexus",name:"The Nexus ",imagePath:"/soulsborne-tracker/images/des/des-maps/The_Nexus.png"},{id:"Tower_of_Latria_3_1_Part1",name:"Tower Of Latria 3 1 Part1 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Tower_of_Latria_3_1_Part1.png"},{id:"Tower_of_Latria_3_1_Part2",name:"Tower Of Latria 3 1 Part2 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Tower_of_Latria_3_1_Part2.png"},{id:"Tower_of_Latria_3_1_Part3",name:"Tower Of Latria 3 1 Part3 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Tower_of_Latria_3_1_Part3.png"},{id:"Tower_of_Latria_3_1_Part4",name:"Tower Of Latria 3 1 Part4 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Tower_of_Latria_3_1_Part4.png"},{id:"Tower_of_Latria_3_2_Part1",name:"Tower Of Latria 3 2 Part1 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Tower_of_Latria_3_2_Part1.png"},{id:"Tower_of_Latria_3_2_Part2",name:"Tower Of Latria 3 2 Part2 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Tower_of_Latria_3_2_Part2.png"},{id:"Tower_of_Latria_3_2_Part3",name:"Tower Of Latria 3 2 Part3 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Tower_of_Latria_3_2_Part3.png"},{id:"Tower_of_Latria_3_3",name:"Tower Of Latria 3 3 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Tower_of_Latria_3_3.png"},{id:"Valley_of_Defilement_5_1_Part1",name:"Valley Of Defilement 5 1 Part1 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Valley_of_Defilement_5_1_Part1.png"},{id:"Valley_of_Defilement_5_1_Part2",name:"Valley Of Defilement 5 1 Part2 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Valley_of_Defilement_5_1_Part2.png"},{id:"Valley_of_Defilement_5_1_Part3",name:"Valley Of Defilement 5 1 Part3 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Valley_of_Defilement_5_1_Part3.png"},{id:"Valley_of_Defilement_5_2_Part1",name:"Valley Of Defilement 5 2 Part1 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Valley_of_Defilement_5_2_Part1.png"},{id:"Valley_of_Defilement_5_2_Part2",name:"Valley Of Defilement 5 2 Part2 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Valley_of_Defilement_5_2_Part2.png"},{id:"Valley_of_Defilement_5_3",name:"Valley Of Defilement 5 3 ",imagePath:"/soulsborne-tracker/images/des/des-maps/Valley_of_Defilement_5_3.png"}],bb:[{id:"Byrgenwerth",name:"Byrgenwerth ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Byrgenwerth.png"},{id:"Cathedral_Ward",name:"Cathedral Ward ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Cathedral_Ward.png"},{id:"Central_Yharnam",name:"Central Yharnam ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Central_Yharnam.png"},{id:"Fishing_Hamlet",name:"Fishing Hamlet ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Fishing_Hamlet.png"},{id:"Forbidden_Woods",name:"Forbidden Woods ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Forbidden_Woods.png"},{id:"Forsaken_Castle_Cainhurst",name:"Forsaken Castle Cainhurst ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Forsaken_Castle_Cainhurst.png"},{id:"Healing_Church_and_Abandoned_Old_Workshop",name:"Healing Church And Abandoned Old Workshop ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Healing_Church_and_Abandoned_Old_Workshop.png"},{id:"Hemwick_Charnel_Lane",name:"Hemwick Charnel Lane ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Hemwick_Charnel_Lane.png"},{id:"Hunters_Dream",name:"Hunters Dream ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Hunters_Dream.png"},{id:"Hunter_Nightmare",name:"Hunter Nightmare ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Hunter_Nightmare.png"},{id:"Hypogean_Gaol",name:"Hypogean Gaol ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Hypogean_Gaol.png"},{id:"Lecture_Building",name:"Lecture Building ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Lecture_Building.png"},{id:"Nightmare_Frontier_Part1",name:"Nightmare Frontier Part1 ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Nightmare_Frontier_Part1.png"},{id:"Nightmare_Frontier_Part2",name:"Nightmare Frontier Part2 ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Nightmare_Frontier_Part2.png"},{id:"Nightmare_of_Mensis",name:"Nightmare Of Mensis ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Nightmare_of_Mensis.png"},{id:"Old_Yharnam_Part1",name:"Old Yharnam Part1 ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Old_Yharnam_Part1.png"},{id:"Old_Yharnam_Part2",name:"Old Yharnam Part2 ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Old_Yharnam_Part2.png"},{id:"Research_Hall_Part1",name:"Research Hall Part1 ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Research_Hall_Part1.png"},{id:"Research_Hall_Part2",name:"Research Hall Part2 ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Research_Hall_Part2.png"},{id:"Yahargul_Unseen_Village_Part1",name:"Yahargul Unseen Village Part1 ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Yahargul_Unseen_Village_Part1.png"},{id:"Yahargul_Unseen_Village_Part2",name:"Yahargul Unseen Village Part2 ",imagePath:"/soulsborne-tracker/images/bb/bb-maps/Yahargul_Unseen_Village_Part2.png"}]},P=e=>{let{isOpen:a,onClose:s,children:n}=e;return a?(0,d.createPortal)((0,r.jsxs)(t.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-0 z-[9999] flex items-center justify-center",onClick:e=>{e.target===e.currentTarget&&s()},style:{position:"fixed",top:0,left:0,right:0,bottom:0},children:[(0,r.jsx)(t.P.div,{className:"absolute inset-0 bg-black/80",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),(0,r.jsxs)(t.P.div,{className:"relative bg-zinc-800 rounded-lg overflow-hidden z-[9999] w-[90vw] h-[90vh]",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{type:"spring",duration:.3},children:[(0,r.jsx)("button",{onClick:s,className:"absolute top-4 right-4 z-[9999] bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors","aria-label":"Close fullscreen",children:(0,r.jsx)(l.A,{size:20,className:"text-white"})}),n]})]}),document.body):null};function u(e){let{gameKey:a}=e,[s,t]=(0,n.useState)(c[a][0]),[d,l]=(0,n.useState)(!1),u=e=>{let{isModalView:a=!1}=e;return(0,r.jsx)(o.GT,{initialScale:1.5,minScale:1,maxScale:7,centerOnInit:!0,panning:{velocityDisabled:!0},wheel:{step:.5},children:e=>{let{zoomIn:n,zoomOut:t,resetTransform:i}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"absolute ".concat(a?"top-16":"top-4"," right-4 z-50 flex flex-col space-y-2"),children:[(0,r.jsx)("button",{onClick:()=>n(),className:"bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors","aria-label":"Zoom in",children:(0,r.jsx)(g.A,{size:20,className:"text-white"})}),(0,r.jsx)("button",{onClick:()=>t(),className:"bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors","aria-label":"Zoom out",children:(0,r.jsx)(_.A,{size:20,className:"text-white"})}),(0,r.jsx)("button",{onClick:()=>i(),className:"bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors","aria-label":"Reset zoom",children:(0,r.jsx)(h.A,{size:20,className:"text-white"})}),!a&&(0,r.jsx)("button",{onClick:()=>l(!0),className:"bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors","aria-label":"Enter fullscreen",children:(0,r.jsx)(p.A,{size:20,className:"text-white"})})]}),(0,r.jsx)(o.WZ,{wrapperStyle:{height:"100%",width:"100%"},contentStyle:{height:"100%",width:"100%"},children:(0,r.jsx)("div",{className:"w-full h-full relative",children:(0,r.jsx)(m.default,{src:s.imagePath,alt:"".concat(s.name," Map"),className:"object-contain",fill:!0})})})]})}})};return(0,r.jsxs)("div",{className:"w-full space-y-4",children:[(0,r.jsx)("select",{value:s.id,onChange:e=>{let s=c[a].find(a=>a.id===e.target.value);s&&t(s)},className:"w-full bg-zinc-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-600",children:c[a].map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))}),(0,r.jsx)("div",{className:"relative bg-zinc-800 rounded-lg overflow-hidden md:h-[380px] lg:h-[420px] xl:h-[600px]",children:(0,r.jsx)(u,{})}),(0,r.jsx)(i.N,{children:d&&(0,r.jsx)(P,{isOpen:d,onClose:()=>l(!1),children:(0,r.jsx)(u,{isModalView:!0})})})]})}}}]);