(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{6058:(e,i,s)=>{Promise.resolve().then(s.bind(s,588)),Promise.resolve().then(s.bind(s,2409)),Promise.resolve().then(s.bind(s,6991)),Promise.resolve().then(s.bind(s,1888)),Promise.resolve().then(s.bind(s,3277)),Promise.resolve().then(s.bind(s,1906)),Promise.resolve().then(s.bind(s,4826)),Promise.resolve().then(s.bind(s,581)),Promise.resolve().then(s.bind(s,83)),Promise.resolve().then(s.bind(s,8361)),Promise.resolve().then(s.bind(s,3158)),Promise.resolve().then(s.bind(s,7111)),Promise.resolve().then(s.bind(s,2870)),Promise.resolve().then(s.bind(s,1265)),Promise.resolve().then(s.bind(s,3695)),Promise.resolve().then(s.bind(s,2884))},1906:(e,i,s)=>{"use strict";s.d(i,{default:()=>h});var t=s(5155),n=s(3601),l=s(7193),d=s(689),a=s(639),r=s(8361),o=s(3158),c=s(3312),m=s(2115);function h(){let{progress:e,isSharedLink:i,updateProgress:s}=(0,r.p)(),[h,x]=(0,m.useState)(!1),b=(t,n,l)=>{if(i)return;let d=e.bonfires.findIndex(e=>e.id===t),a=e.bonfires;-1!==d?a[d].unlocked=!a[d].unlocked:a.push({id:t,name:n,unlocked:!0,location:l}),s({...e,bonfires:a})},u=[...new Set(a.D.elden.map(e=>e.location))],f=0;return h?(u=u.filter(e=>["Shadow Keep","Scadu Altus","Land of the Tower","Gravesite Plain"].includes(e)),f=a.D.elden.filter(e=>["Shadow Keep","Scadu Altus","Land of the Tower","Gravesite Plain"].includes(e.location)).length):(u=u.filter(e=>!["Shadow Keep","Scadu Altus","Land of the Tower","Gravesite Plain"].includes(e)),f=a.D.elden.filter(e=>!["Shadow Keep","Scadu Altus","Land of the Tower","Gravesite Plain"].includes(e.location)).length),(0,t.jsx)(n.Bc,{children:(0,t.jsxs)("div",{className:"flex flex-col space-y-6",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,t.jsx)(c.$,{variant:"outline",onClick:()=>{x(!h)},className:"\n                            text-lg font-semibold px-6 py-2\n                            ".concat(h?"bg-amber-500/20 text-amber-500 border-amber-500/50 hover:bg-amber-500/30":"bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-700","\n                        "),children:h?"Shadow of the Erdtree":"Main Game"}),(0,t.jsxs)("div",{className:"text-sm text-zinc-400",children:[f," sites"]})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",children:u.map(s=>(0,t.jsx)(o.default,{title:s,isElden:!0,children:a.D.elden.filter(e=>e.location===s).map(s=>{var a,r,o;return(0,t.jsx)("div",{className:"\n                                            border border-zinc-700/50 rounded-lg p-3 \n                                            transition-all duration-300\n                                            ".concat((null===(a=e.bonfires.find(e=>e.id===s.id))||void 0===a?void 0:a.unlocked)?"bg-emerald-900/30":"hover:bg-zinc-700/30","\n                                        "),children:(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsx)("div",{className:"flex-grow",children:(0,t.jsx)("h3",{className:"font-bold text-zinc-200",children:s.name})}),(0,t.jsx)("div",{className:"flex items-center space-x-3",children:(0,t.jsxs)(n.m_,{children:[(0,t.jsx)(n.k$,{asChild:!0,children:(0,t.jsx)("button",{onClick:()=>b(s.id,s.name,s.location),className:"\n                                                                p-2 rounded-full transition-all duration-200\n                                                                ".concat((null===(r=e.bonfires.find(e=>e.id===s.id))||void 0===r?void 0:r.unlocked)?"bg-emerald-500/80 hover:bg-emerald-500 text-white":"bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-400 hover:text-zinc-200","\n                                                            "),disabled:i,children:(null===(o=e.bonfires.find(e=>e.id===s.id))||void 0===o?void 0:o.unlocked)?(0,t.jsx)(l.A,{}):(0,t.jsx)(d.A,{})})}),(0,t.jsx)(n.ZI,{children:(0,t.jsx)("p",{children:"Toggle unlocked"})})]})})]})},s.id)})},s))})]})})}},4826:(e,i,s)=>{"use strict";s.d(i,{default:()=>b});var t=s(5155),n=s(2115),l=s(3601),d=s(8209),a=s(4683),r=s(7193),o=s(689),c=s(6606),m=s(8361),h=s(3312),x=s(3158);function b(){let{progress:e,isSharedLink:i,updateProgress:s}=(0,m.p)(),[b,u]=(0,n.useState)(!1),f=(t,n)=>{if(i)return;let l=e.bossesAttempts.findIndex(e=>e.id===t),d=[...e.bossesAttempts];-1!==l?d[l]={...d[l],defeated:!d[l].defeated}:d.push({id:t,attempts:0,name:n,defeated:!0}),s({...e,bossesAttempts:d})},v=(t,n,l)=>{if(i)return;let d=[...e.bossesAttempts],a=d.findIndex(e=>e.id===t);-1!==a?d[a]={...d[a],attempts:n?d[a].attempts+1:Math.max(0,d[a].attempts-1)}:d.push({id:t,attempts:n?1:0,name:l,defeated:!1}),s({...e,bossesAttempts:d})},p=c.I.elden.filter(e=>!!e.sote===b),j=p.reduce((e,i)=>(e[i.location]||(e[i.location]=[]),e[i.location].push(i),e),{}),g=Object.keys(j).sort();return(0,t.jsx)(l.Bc,{children:(0,t.jsxs)("div",{className:"flex flex-col space-y-6",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,t.jsx)(h.$,{variant:"outline",onClick:()=>{u(!b)},className:"\n                            text-lg font-semibold px-6 py-2\n                            ".concat(b?"bg-amber-500/20 text-amber-500 border-amber-500/50 hover:bg-amber-500/30":"bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-700","\n                        "),children:b?"Shadow of the Erdtree":"Main Game"}),(0,t.jsxs)("div",{className:"text-sm text-zinc-400",children:[p.length," bosses"]})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",children:g.map(s=>(0,t.jsx)(x.default,{title:s,isElden:!0,children:j[s].map(s=>{var n,c,m,h;return(0,t.jsx)("div",{className:"\n                                            border border-zinc-700/50 rounded-lg p-3 \n                                            transition-all duration-300\n                                            ".concat((null===(n=e.bossesAttempts.find(e=>e.id===s.id))||void 0===n?void 0:n.defeated)?"bg-emerald-900/30":"hover:bg-zinc-700/30","\n                                        "),children:(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsx)("div",{className:"flex-grow",children:(0,t.jsx)("h3",{className:"font-bold text-zinc-200",children:s.name})}),(0,t.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,t.jsxs)("div",{className:"flex flex-col items-end",children:[(0,t.jsx)("span",{className:"text-zinc-400 text-xs mb-1",children:"Attempts"}),(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)("button",{onClick:()=>v(s.id,!1,s.name),className:"text-zinc-400 hover:text-white transition-colors",disabled:i,children:(0,t.jsx)(d.A,{size:16})}),(0,t.jsx)("span",{className:"text-amber-500 w-8 text-center",children:(null===(c=e.bossesAttempts.find(e=>e.id===s.id))||void 0===c?void 0:c.attempts)||0}),(0,t.jsx)("button",{onClick:()=>v(s.id,!0,s.name),className:"text-zinc-400 hover:text-white transition-colors",disabled:i,children:(0,t.jsx)(a.A,{size:16})})]})]}),(0,t.jsxs)(l.m_,{children:[(0,t.jsx)(l.k$,{asChild:!0,children:(0,t.jsx)("button",{onClick:()=>f(s.id,s.name),className:"\n                                                                p-2 rounded-full transition-all duration-200\n                                                                ".concat((null===(m=e.bossesAttempts.find(e=>e.id===s.id))||void 0===m?void 0:m.defeated)?"bg-emerald-500/80 hover:bg-emerald-500 text-white":"bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-400 hover:text-zinc-200","\n                                                            "),disabled:i,children:(null===(h=e.bossesAttempts.find(e=>e.id===s.id))||void 0===h?void 0:h.defeated)?(0,t.jsx)(r.A,{}):(0,t.jsx)(o.A,{})})}),(0,t.jsx)(l.ZI,{children:(0,t.jsx)("p",{children:"Toggle defeated"})})]})]})]})},s.id)})},s))})]})})}},581:(e,i,s)=>{"use strict";s.d(i,{default:()=>m});var t=s(5155),n=s(2115),l=s(9124),d=s(5683),a=s(7650),r=s(689),o=s(8694);let c=e=>{let{isOpen:i,onClose:s,children:n}=e;return i?(0,a.createPortal)((0,t.jsxs)(l.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-0 z-[9999] flex items-center justify-center",onClick:e=>{e.target===e.currentTarget&&s()},style:{position:"fixed",top:0,left:0,right:0,bottom:0},children:[(0,t.jsx)(l.P.div,{className:"absolute inset-0 bg-black/80",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),(0,t.jsxs)(l.P.div,{className:"relative bg-zinc-800 rounded-lg overflow-hidden z-[9999] w-[90vw] h-[90vh]",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{type:"spring",duration:.3},children:[(0,t.jsx)("button",{onClick:s,className:"absolute top-4 right-4 z-[9999] bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors","aria-label":"Close fullscreen",children:(0,t.jsx)(r.A,{size:20,className:"text-white"})}),n]})]}),document.body):null};function m(){let[e,i]=(0,n.useState)(!1);return(0,t.jsxs)("div",{className:"w-full space-y-4",children:[(0,t.jsxs)("div",{className:"relative bg-zinc-800 rounded-lg overflow-hidden",children:[!e&&(0,t.jsx)("button",{onClick:()=>i(!0),className:"bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition-colors","aria-label":"Enter fullscreen",children:(0,t.jsx)(o.A,{size:20,className:"text-white"})}),(0,t.jsx)("iframe",{src:"https://mapgenie.io/elden-ring/maps/the-lands-between?embed=light",className:"relative w-full md:h-[400px] lg:h-[440px] xl:h-[620px]"})]}),(0,t.jsx)(d.N,{children:e&&(0,t.jsx)(c,{isOpen:e,onClose:()=>i(!1),children:(0,t.jsx)("iframe",{src:"https://mapgenie.io/elden-ring/maps/the-lands-between?embed=light",className:"relative w-full h-full"})})})]})}}},e=>{var i=i=>e(e.s=i);e.O(0,[935,440,610,565,868,124,170,770,80,645,106,441,517,358],()=>i(6058)),_N_E=e.O()}]);