(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{9260:e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=9260,e.exports=t},5821:(e,t,a)=>{"use strict";a.d(t,{default:()=>g});var s=a(5155),r=a(2115),n=a(34),l=a(1567);let i=n.Kq,c=n.bL,o=n.l9,d=r.forwardRef((e,t)=>{let{className:a,sideOffset:r=4,...i}=e;return(0,s.jsx)(n.UC,{ref:t,sideOffset:r,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...i})});d.displayName=n.UC.displayName;var m=a(8209),u=a(4683),h=a(7193),p=a(689),x=a(6606),f=a(8361);function g(e){let{gameKey:t}=e,{progress:a,isSharedLink:r,updateProgress:n}=(0,f.p)(),l=(e,t)=>{if(r)return;let s=a.bossesAttempts.findIndex(t=>t.id===e),l=a.bossesAttempts;-1!==s?l[s].defeated=!l[s].defeated:l.push({id:e,attempts:0,name:t,defeated:!0}),n({...a,bossesAttempts:l})},g=(e,t,s)=>{if(r)return;let l=a.bossesAttempts,i=l.findIndex(t=>t.id===e);-1!==i?l[i].attempts=t?l[i].attempts+1:Math.max(0,l[i].attempts-1):l.push({id:e,attempts:t?1:0,name:s,defeated:!1}),n({...a,bossesAttempts:l})};return(0,s.jsx)(i,{children:(0,s.jsx)("div",{className:"space-y-4",children:x.I[t].map(e=>{var t,r,n,i;return(0,s.jsx)("div",{className:"\n                            border border-zinc-700/50 rounded-lg p-4 \n                            transition-all duration-300\n                            ".concat((null===(t=a.bossesAttempts.find(t=>t.id===e.id))||void 0===t?void 0:t.defeated)?"bg-emerald-900/30":"hover:bg-zinc-700/30","\n                        "),children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsxs)("div",{className:"flex-grow",children:[(0,s.jsx)("h3",{className:"font-bold text-zinc-200 text-lg",children:e.name}),(0,s.jsx)("p",{className:"text-zinc-400 text-sm",children:e.location})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsxs)("div",{className:"flex flex-col items-end",children:[(0,s.jsx)("span",{className:"text-zinc-400 text-xs mb-1",children:"Attempts"}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("button",{onClick:()=>g(e.id,!1,e.name),className:"text-zinc-400 hover:text-white transition-colors",children:(0,s.jsx)(m.A,{size:16})}),(0,s.jsx)("span",{className:"text-amber-500 w-8 text-center",children:(null===(r=a.bossesAttempts.find(t=>t.id===e.id))||void 0===r?void 0:r.attempts)||0}),(0,s.jsx)("button",{onClick:()=>g(e.id,!0,e.name),className:"text-zinc-400 hover:text-white transition-colors",children:(0,s.jsx)(u.A,{size:16})})]})]}),(0,s.jsxs)(c,{children:[(0,s.jsx)(o,{asChild:!0,children:(0,s.jsx)("button",{onClick:()=>l(e.id,e.name),className:"\n                                                p-2 rounded-full ml-4 transition-all duration-200\n                                                ".concat((null===(n=a.bossesAttempts.find(t=>t.id===e.id))||void 0===n?void 0:n.defeated)?"bg-emerald-500/80 hover:bg-emerald-500 text-white":"bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-400 hover:text-zinc-200","\n                                            "),children:(null===(i=a.bossesAttempts.find(t=>t.id===e.id))||void 0===i?void 0:i.defeated)?(0,s.jsx)(h.A,{}):(0,s.jsx)(p.A,{})})}),(0,s.jsx)(d,{children:(0,s.jsx)("p",{children:"Toggle defeated"})})]})]})]})},e.id)})})})}},1888:(e,t,a)=>{"use strict";a.d(t,{default:()=>u});var s=a(5155),r=a(5565),n=a(8209),l=a(4683),i=a(9749),c=a(7995),o=a(8361);let d={ds1:{soulLevel:"Soul level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vitality:"Vitality",attunement:"Attunement",endurance:"Endurance",strength:"Strength",dexterity:"Dexterity",resistance:"Resistance",intelligence:"Intelligence",faith:"Faith"},ds2:{soulLevel:"Soul level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vitality:"Vitality",attunement:"Attunement",endurance:"Endurance",strength:"Strength",dexterity:"Dexterity",adaptability:"Adaptability",intelligence:"Intelligence",faith:"Faith",vigor:"Vigor",estusAmount:"Estus shards",estusUpgrade:"Estus lvl"},ds3:{soulLevel:"Soul level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vitality:"Vitality",attunement:"Attunement",endurance:"Endurance",strength:"Strength",dexterity:"Dexterity",luck:"Luck",intelligence:"Intelligence",faith:"Faith",vigor:"Vigor",estusAmount:"Estus shards",estusUpgrade:"Estus lvl"},bb:{soulLevel:"Level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vitality:"Vitality",endurance:"Endurance",strength:"Strength",insight:"Insight",skill:"Skill",bloodtinge:"Bloodtinge",arcane:"Arcane"},elden:{soulLevel:"Soul level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vigor:"Vigor",mind:"Mind",endurance:"Endurance",strength:"Strength",dexterity:"Dexterity",intelligence:"Intelligence",faith:"Faith",arcane:"Arcane",flaskAmount:"Flask shards",flaskUpgrade:"Flask lvl",spiritAshUpgradeLvl:"Spirit Ash lvl"},des:{soulLevel:"Soul level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vitality:"Vitality",intelligence:"Intelligence",endurance:"Endurance",strength:"Strength",dexterity:"Dexterity",magic:"Magic",faith:"Faith",luck:"Luck",charTendency:"Char Tendency"}};var m=a(2209);function u(e){let{gameKey:t}=e,{progress:a,isSharedLink:u,updateProgress:h}=(0,o.p)(),p=(e,t)=>{u||(0,m.cA)(e,a,t,h)},x=(e,t)=>{u||(0,m.FA)(e,a,t,h)},f=e=>{let{onClick:t,icon:a}=e;return(0,s.jsx)("button",{onClick:t,className:"bg-zinc-700/50 hover:bg-zinc-600/50 p-1.5 rounded transition-colors duration-200 text-zinc-400 hover:text-zinc-200 \n                ".concat(u?"opacity-50 cursor-not-allowed":""),disabled:u,children:(0,s.jsx)(a,{size:14})})};return(0,s.jsx)(c.ScrollArea,{type:"always",className:"h-full",children:(0,s.jsxs)(i.Zp,{className:"bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm",children:[(0,s.jsx)(i.aR,{className:"border-b border-zinc-700/50 p-2",children:(0,s.jsxs)(i.ZB,{className:"text-xl font-ancient-runes tracking-wider text-amber-500/90 flex justify-center items-center gap-4",children:[(0,s.jsx)(r.default,{src:"/soulsborne-tracker/images/".concat(t,"/charStats.jpg"),alt:"".concat(t," stats logo"),style:{width:60,height:80},width:60,height:80}),"Character Stats",u&&(0,s.jsx)("span",{className:"text-sm font-normal text-zinc-400",children:"(Viewing Shared Progress)"})]})}),(0,s.jsx)(i.Wu,{className:"p-6",children:(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-6",children:[(0,s.jsx)("div",{className:"space-y-8",children:Object.keys(a.playerStats).map(e=>(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)(r.default,{src:"/soulsborne-tracker/images/".concat(t,"/stat_").concat(e,".jpg"),alt:"".concat(e," stat icon"),width:32,height:32}),(0,s.jsx)("span",{className:"text-zinc-300",children:d[t][e]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(f,{onClick:()=>x(e,-1),icon:n.A}),(0,s.jsxs)("span",{className:"text-amber-500 w-8 text-center",children:["weaponUpgradeLvl"===e||"estusUpgrade"===e||"spiritAshUpgradeLvl"===e?"+":"",a.playerStats[e]]}),(0,s.jsx)(f,{onClick:()=>x(e,1),icon:l.A})]})]})},e))}),(0,s.jsx)("div",{className:"space-y-8",children:Object.keys(a.charStats).map(e=>(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)(r.default,{src:"/soulsborne-tracker/images/".concat(t,"/stat_").concat(e,".jpg"),alt:"".concat(e," stat icon"),width:32,height:32}),(0,s.jsx)("span",{className:"text-zinc-300",children:d[t][e]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(f,{onClick:()=>p(e,-1),icon:n.A}),(0,s.jsx)("span",{className:"text-amber-500 w-8 text-center",children:a.charStats[e]}),(0,s.jsx)(f,{onClick:()=>p(e,1),icon:l.A})]})]})},e))})]})})]})})}},3277:(e,t,a)=>{"use strict";a.d(t,{default:()=>p});var s=a(5155),r=a(2115),n=a(4683),l=a(8209),i=a(5524),c=a(1344),o=a(3312),d=a(3900),m=a(8986),u=a(8361);let h=["emerald","blue","purple","amber","rose"];function p(){let{progress:e,isSharedLink:t,updateProgress:a}=(0,u.p)(),[p,x]=(0,r.useState)(!1),[f,g]=(0,r.useState)({name:"",total:0,color:"emerald"}),b=(s,r)=>{if(t)return;let n=e.customTrackers.map(e=>{if(e.id===s){let t=r?Math.min(e.current+1,e.total):Math.max(e.current-1,0);return{...e,current:t}}return e});a({...e,customTrackers:[...n]})},v=s=>{if(t)return;let r=e.customTrackers.filter(e=>e.id!==s);a({...e,customTrackers:[...r]})};return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)(c.lG,{open:p,onOpenChange:x,children:[(0,s.jsx)(c.zM,{asChild:!0,children:(0,s.jsxs)(o.$,{variant:"outline",className:"w-full bg-zinc-800/50 border-dashed border-zinc-700/50 text-zinc-400",children:[(0,s.jsx)(n.A,{className:"mr-2 h-4 w-4"}),"Add Custom Tracker"]})}),(0,s.jsxs)(c.Cf,{className:"bg-zinc-900 border-zinc-800",children:[(0,s.jsx)(c.c7,{children:(0,s.jsx)(c.L3,{children:"Add New Tracker"})}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(m.J,{htmlFor:"name",children:"Tracker Name"}),(0,s.jsx)(d.p,{id:"name",value:f.name,onChange:e=>g(t=>({...t,name:e.target.value})),placeholder:"e.g., Spells Collected",className:"bg-zinc-800 border-zinc-700"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(m.J,{htmlFor:"total",children:"Total Items"}),(0,s.jsx)(d.p,{id:"total",type:"number",value:f.total||"",onChange:e=>g(t=>({...t,total:parseInt(e.target.value)>0?parseInt(e.target.value):0})),className:"bg-zinc-800 border-zinc-700"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(m.J,{children:"Color"}),(0,s.jsx)("div",{className:"flex gap-2",children:h.map(e=>(0,s.jsx)("button",{onClick:()=>g(t=>({...t,color:e})),className:"w-8 h-8 rounded-full border-2 bg-".concat(e,"-500 ").concat(f.color===e?"border-white":"border-transparent")},e))})]}),(0,s.jsx)(o.$,{onClick:()=>{if(t||!f.name||f.total<=0)return;let s={id:"tracker-"+(e.customTrackers.length+1),name:f.name,total:f.total,current:0,color:f.color};a({...e,customTrackers:[...e.customTrackers,s]}),g({name:"",total:0,color:"emerald"}),x(!1)},className:"w-full",children:"Add Tracker"})]})]})]}),(0,s.jsx)("div",{className:"space-y-4",children:e.customTrackers.map(e=>{let t=e.current/e.total*100;return(0,s.jsxs)("div",{className:"border border-zinc-700/50 rounded-lg p-4 bg-zinc-800/30",children:[(0,s.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-semibold text-zinc-200",children:e.name}),(0,s.jsxs)("p",{className:"text-sm text-zinc-400",children:[e.current," / ",e.total]})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(o.$,{variant:"ghost",size:"icon",onClick:()=>b(e.id,!1),className:"h-8 w-8 text-zinc-400",children:(0,s.jsx)(l.A,{className:"h-4 w-4"})}),(0,s.jsx)(o.$,{variant:"ghost",size:"icon",onClick:()=>b(e.id,!0),className:"h-8 w-8 text-zinc-400",children:(0,s.jsx)(n.A,{className:"h-4 w-4"})}),(0,s.jsx)(o.$,{variant:"ghost",size:"icon",onClick:()=>v(e.id),className:"h-8 w-8 text-red-400 hover:text-red-300",children:(0,s.jsx)(i.A,{className:"h-4 w-4"})})]})]}),(0,s.jsx)("div",{className:"w-full bg-zinc-700/30 rounded-full h-2",children:(0,s.jsx)("div",{className:"bg-".concat(e.color,"-500 h-2 rounded-full transition-all duration-300"),style:{width:"".concat(t,"%")}})})]},e.id)})})]})}},8361:(e,t,a)=>{"use strict";a.d(t,{ProgressProvider:()=>m,p:()=>u});var s=a(5155),r=a(2115),n=a(6046),l=a(3830),i=a(4496),c=a(9113),o=a.n(c);let d=(0,r.createContext)(null);function m(e){let{children:t,gameKey:a="ds1"}=e,c=(0,n.useSearchParams)(),[m,u]=(0,r.useState)(i.I[a]),[h,p]=(0,r.useState)(!1),[x,f]=(0,r.useState)(!1),[g,b]=(0,r.useState)(!1),[v,N]=(0,r.useState)(""),[j,y]=(0,r.useState)("");(0,r.useEffect)(()=>{let e=c.get("p");if(e)p(!0),w(e);else{let e=localStorage.getItem("".concat(a,"-progress"));e&&u(JSON.parse(e))}},[a,c]);let w=e=>{try{let t=JSON.parse((0,l.D4)(e));u(t)}catch(e){console.error("Failed to load shared progress: ",e)}};return(0,s.jsx)(d.Provider,{value:{progress:m,isSharedLink:h,isUnsavedProgress:x,isTwitchConnected:g,twitchChannel:v,twitchToken:j,updateProgress:e=>{let t=o().cloneDeep({...m,...e});u(t);let s=localStorage.getItem("".concat(a,"-progress"));s&&o().isEqual(JSON.parse(s),t)?f(!1):f(!0)},getShareableLink:()=>{let e=(0,l.lF)(JSON.stringify(m),!0);return"".concat(window.location.origin).concat(window.location.pathname,"?p=").concat(e)},loadSharedProgress:w,saveProgress:()=>{localStorage.setItem("".concat(a,"-progress"),JSON.stringify(m)),f(!1)},resetProgress:()=>{localStorage.removeItem("".concat(a,"-progress")),u(i.I[a]),f(!1)},setIsTwitchConnected:b,setTwitchChannel:N,setTwitchToken:y},children:t})}function u(){let e=(0,r.useContext)(d);if(!e)throw Error("useProgress must be used within a ProgressProvider");return e}},3158:(e,t,a)=>{"use strict";a.d(t,{default:()=>i});var s=a(5155),r=a(2115),n=a(7995),l=a(9749);let i=e=>{let{title:t,children:a}=e,[i,c]=(0,r.useState)(!1),[o,d]=(0,r.useState)(!0),m=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var e;let t=null===(e=m.current)||void 0===e?void 0:e.querySelector("[data-radix-scroll-area-viewport]");((null==t?void 0:t.scrollHeight)||0)===((null==t?void 0:t.clientHeight)||0)&&d(!1)},[]),(0,s.jsxs)(n.ScrollArea,{type:"always",ref:m,onScrollCapture:()=>{if(m.current){var e;let t=null===(e=m.current)||void 0===e?void 0:e.querySelector("[data-radix-scroll-area-viewport]"),a=(null==t?void 0:t.scrollTop)||0,s=(null==t?void 0:t.scrollHeight)||0,r=(null==t?void 0:t.clientHeight)||0;c(a>20),d(a+r+20<s)}},className:"w-full h-[46rem]",children:[(0,s.jsx)("div",{className:"absolute top-0 h-4 w-full bg-gradient-to-b from-black to-transparent pointer-events-none z-10 transition-opacity duration-300",style:{opacity:i?1:0}}),(0,s.jsx)("div",{className:"absolute bottom-0 h-4 w-full bg-gradient-to-t from-black to-transparent pointer-events-none z-10 transition-opacity duration-300",style:{opacity:o?1:0}}),(0,s.jsxs)(l.Zp,{className:"bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm",children:[(0,s.jsx)(l.aR,{className:"pb-4",children:(0,s.jsx)(l.ZB,{className:"text-zinc-100",children:t})}),(0,s.jsx)(l.Wu,{children:a})]})]})}},588:(e,t,a)=>{"use strict";a.d(t,{default:()=>m});var s=a(5155),r=a(2115),n=a(3830),l=a(3312),i=a(1344),c=a(3900),o=a(6758),d=a(8361);function m(e){let{gameKey:t}=e,{isSharedLink:a,progress:m}=(0,d.p)(),[u,h]=(0,r.useState)(""),[p,x]=(0,r.useState)(!1);return a?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)(i.lG,{children:[(0,s.jsx)(i.zM,{asChild:!0,children:(0,s.jsx)(l.$,{variant:"destructive",size:"lg",className:"bg-amber-800 hover:bg-amber-600 text-amber-100 border    border-amber-800 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2",children:"Generate Shareable Link"})}),(0,s.jsxs)(i.Cf,{className:"bg-zinc-900 border-zinc-800",children:[(0,s.jsx)(i.c7,{children:(0,s.jsx)(i.L3,{className:"text-amber-500",children:"Shareable Progress Link"})}),(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsx)(c.p,{value:u,readOnly:!0,className:"flex-grow text-zinc-800",placeholder:"Your shareable link will appear here"}),(0,s.jsx)(l.$,{className:"".concat(p?"text-zinc-200":"text-zinc-800"),onClick:()=>{navigator.clipboard.writeText(u),x(!0),setTimeout(()=>x(!1),2e3)},variant:p?"default":"outline",children:p?"Copied!":(0,s.jsx)(o.A,{})})]}),(0,s.jsx)(l.$,{onClick:()=>{let e=(0,n.lF)(JSON.stringify(m),!0);h("".concat(window.location.origin,"/").concat(t,"?p=").concat(e))},className:"w-full bg-amber-900 hover:bg-amber-800 text-amber-100 border-amber-800",children:"Generate Link"})]})]})}},2409:(e,t,a)=>{"use strict";a.d(t,{default:()=>j});var s=a(5155),r=a(6694),n=a(2115),l=a(3312),i=a(3572),c=a(1567);let o=i.bL,d=i.l9,m=i.ZL,u=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.hJ,{className:(0,c.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r,ref:t})});u.displayName=i.hJ.displayName;let h=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsxs)(m,{children:[(0,s.jsx)(u,{}),(0,s.jsx)(i.UC,{ref:t,className:(0,c.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...r})]})});h.displayName=i.UC.displayName;let p=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,c.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};p.displayName="AlertDialogHeader";let x=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,c.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};x.displayName="AlertDialogFooter";let f=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.hE,{ref:t,className:(0,c.cn)("text-lg font-semibold",a),...r})});f.displayName=i.hE.displayName;let g=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.VY,{ref:t,className:(0,c.cn)("text-sm text-muted-foreground",a),...r})});g.displayName=i.VY.displayName;let b=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.rc,{ref:t,className:(0,c.cn)((0,l.r)(),a),...r})});b.displayName=i.rc.displayName;let v=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.ZD,{ref:t,className:(0,c.cn)((0,l.r)({variant:"outline"}),"mt-2 sm:mt-0",a),...r})});v.displayName=i.ZD.displayName;var N=a(8361);let j=()=>{let{resetProgress:e,isSharedLink:t}=(0,N.p)();return t?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)(o,{children:[(0,s.jsx)(d,{asChild:!0,children:(0,s.jsxs)(l.$,{variant:"destructive",size:"lg",className:"bg-amber-800 hover:bg-amber-600 text-amber-100 border    border-amber-800 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2",children:[(0,s.jsx)(r.A,{className:"w-4 h-4"}),"Reset Progress"]})}),(0,s.jsxs)(h,{className:"bg-zinc-900 border-zinc-800",children:[(0,s.jsxs)(p,{children:[(0,s.jsx)(f,{className:"text-amber-500",children:"Reset All Progress?"}),(0,s.jsx)(g,{className:"text-lg text-zinc-400",children:"This action cannot be undone. This will permanently delete all your tracked progress including boss defeats, custom trackers, and character stats."})]}),(0,s.jsxs)(x,{children:[(0,s.jsx)(v,{className:"bg-zinc-800 hover:bg-zinc-700 border-zinc-700",children:"Cancel"}),(0,s.jsx)(b,{onClick:e,className:"bg-amber-900 hover:bg-amber-800 text-amber-100 border-amber-800",children:"Reset Progress"})]})]})]})}},6991:(e,t,a)=>{"use strict";a.d(t,{default:()=>i});var s=a(5155);a(2115);var r=a(8361),n=a(3312),l=a(6426);let i=()=>{let{isSharedLink:e,isUnsavedProgress:t,saveProgress:a}=(0,r.p)();return e?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)(n.$,{onClick:a,disabled:!t,className:"bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700/50 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2",size:"lg",children:[(0,s.jsx)(l.A,{className:"w-4 h-4"}),"Save Progress"]})}},7111:(e,t,a)=>{"use strict";a.d(t,{TwitchChatMonitor:()=>m});var s=a(5155),r=a(2115),n=a(5651),l=a.n(n),i=a(8361),c=a(2209),o=a(6606),d=a(3830);let m=(0,r.memo)(function(){let e=(0,r.useRef)(null),{isTwitchConnected:t,twitchChannel:a}=(0,i.p)(),[n,m]=(0,r.useState)(""),u=function(){let{progress:e,updateProgress:t}=(0,i.p)();return{modifyCharStat:function(a,s){(0,c.cA)(a,e,s,t)},modifyPlayerStat:function(a,s){(0,c.FA)(a,e,s,t)},modifyBossAttempt:function(a,s){let r=e.bossesAttempts,n=r.findIndex(e=>e.id===a);if(-1!==n)r[n].attempts=r[n].attempts+s,r[n].attempts<0&&(r[n].attempts=0);else{let e=Object.values(o.I).find(e=>e.find(e=>e.id===a)),t=null==e?void 0:e.find(e=>e.id===a);r.push({id:a,attempts:s<0?0:s,name:t.name,defeated:!1})}t({...e,bossesAttempts:r})},toggleBossDone:function(a){let s=e.bossesAttempts,r=s.findIndex(e=>e.id===a);if(-1!==r)s[r].defeated=!s[r].defeated;else{let e=Object.values(o.I).find(e=>e.find(e=>e.id===a)),t=null==e?void 0:e.find(e=>e.id===a);s.push({id:a,attempts:0,name:t.name,defeated:!0})}t({...e,bossesAttempts:s})},modifyCustomTracker:function(a,s){let r=Number(a),n=e.customTrackers;n[r].current+=s,n[r].current<0&&(n[r].current=0),n[r].current>n[r].total&&(n[r].current=n[r].total),t({...e,customTrackers:[...n]})},sendShareableLink:function(){l().Say((0,d.lF)(JSON.stringify(e),!0),null)}}}(),h=(0,r.useRef)(u),p=(0,r.useRef)(!1);return((0,r.useEffect)(()=>{h.current=u},[u]),(0,r.useEffect)(()=>{{let e=sessionStorage.getItem("twitchToken");e&&m(e)}},[]),(0,r.useEffect)(()=>{if(!t||!a||p.current)return;p.current=!0,console.log("Connecting to Twitch chat for channel: ".concat(a));let e=0,s=()=>{if(e>=5){console.error("Max reconnect attempts reached");return}let t=Math.min(1e3*Math.pow(2,e),3e4);console.log("Attempting to reconnect in ".concat(t,"ms (attempt ").concat(e+1,")")),setTimeout(()=>{e+=1,n?l().Init(a,n):l().Init(a)},t)};return l().onError=e=>{console.error("Connection error:",e),s()},l().onCommand=(e,t,a,s)=>{if(s.mod||s.broadcaster){var r;let s=(r=h.current,[{name:"charstat",description:"Modify a character stat. Usage: !charstat vitality +2",execute:(e,t)=>{let[a,s]=t;!a||isNaN(Number(s))||r.modifyCharStat(a,Number(s))}},{name:"playerstat",description:"Modify a player stat. Usage: !playerstat soulLevel +2",execute:(e,t)=>{let[a,s]=t;!a||isNaN(Number(s))||r.modifyPlayerStat(a,Number(s))}},{name:"boss",description:"Modify boss attempts. Usage: !boss Artorias +1",execute:(e,t)=>{let[a,s]=t;!a||isNaN(Number(s))||r.modifyBossAttempt(a,Number(s))}},{name:"bossdone",description:"Toggle boss completion. Usage: !bossdone Artorias",execute:(e,t)=>{let[a]=t;a&&r.toggleBossDone(a)}},{name:"track",description:"Modify custom tracker. Usage: !track 1 +1",execute:(e,t)=>{let[a,s]=t;!a||isNaN(Number(s))||isNaN(Number(a))||r.modifyCustomTracker(a,Number(s))}},{name:"getprogress",description:"Get shareable link for streamer's progress. Usage: !getprogress",execute:(e,t)=>{r.sendShareableLink()}}]).find(e=>e.name===t);if(s){let t=a.split(" ");s.execute(e,t)}}},n?(l().Init(a,"oauth:".concat(n)),console.log("Connected with authorization token - chat messages can be sent")):(l().Init(a),console.log("Connected without authorization token - can only receive messages")),()=>{console.log("Disconnecting from Twitch chat for channel: ".concat(a)),p.current=!1,l().Disconnect()}},[t,a,n]),(0,r.useEffect)(()=>{let e=()=>{let e=sessionStorage.getItem("twitchToken");m(e||""),p.current&&t&&a&&(l().Disconnect(),p.current=!1,setTimeout(()=>{e?l().Init(a,e):l().Init(a),p.current=!0},100))};return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[t,a]),t)?(0,s.jsx)("iframe",{className:"hidden",ref:e,src:"https://www.twitch.tv/embed/".concat(a,"/chat?parent=").concat(window.location.hostname),height:"800",width:"300"}):null})},2870:(e,t,a)=>{"use strict";a.d(t,{default:()=>u});var s=a(5155),r=a(2115),n=a(689),l=a(6822),i=a(3312),c=a(1344),o=a(3900),d=a(8986),m=a(8361);let u=()=>{let{isTwitchConnected:e,twitchChannel:t,isSharedLink:a,setIsTwitchConnected:u,setTwitchChannel:h}=(0,m.p)(),[p,x]=(0,r.useState)(""),[f,g]=(0,r.useState)(!1),b=e?(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)(i.$,{variant:"destructive",size:"lg",onClick:()=>{u(!1),h("")},className:"bg-purple-900/80 hover:bg-purple-800 text-purple-100 border border-purple-800/50 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2",children:[(0,s.jsx)(n.A,{className:"w-4 h-4"}),"Disconnect Twitch"]}),(0,s.jsxs)("div",{className:"text-sm text-zinc-400",children:["Connected to Twitch chat: ",(0,s.jsx)("span",{className:"text-purple-400",children:t})]})]}):(0,s.jsxs)(c.lG,{open:f,onOpenChange:g,children:[(0,s.jsx)(c.zM,{asChild:!0,children:(0,s.jsxs)(i.$,{size:"lg",className:"bg-purple-900/80 hover:bg-purple-800 text-purple-100 border border-purple-800/50 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2",children:[(0,s.jsx)(l.A,{className:"w-4 h-4"}),"Connect Twitch Chat"]})}),(0,s.jsx)(c.Cf,{className:"bg-zinc-900 border-zinc-800",children:(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),g(!1),u(!0),h(p)},children:[(0,s.jsxs)(c.c7,{children:[(0,s.jsx)(c.L3,{className:"text-purple-400",children:"Connect to Twitch Chat"}),(0,s.jsx)(c.rr,{className:"text-zinc-400",children:"Enter your Twitch channel name to enable chat commands for tracking progress."})]}),(0,s.jsxs)("div",{className:"py-4",children:[(0,s.jsx)(d.J,{htmlFor:"channel",className:"text-zinc-200",children:"Channel Name"}),(0,s.jsx)(o.p,{id:"channel",value:p,onChange:e=>x(e.target.value),className:"bg-zinc-800 border-zinc-700 text-zinc-100",placeholder:"Enter your channel name",required:!0})]}),(0,s.jsxs)(c.Es,{children:[(0,s.jsx)(i.$,{type:"button",variant:"ghost",onClick:()=>g(!1),className:"bg-zinc-800 hover:bg-zinc-700 border-zinc-700",children:"Cancel"}),(0,s.jsx)(i.$,{type:"submit",className:"bg-purple-900 hover:bg-purple-800 text-purple-100 border-purple-800",children:"Connect"})]})]})})]});return a?(0,s.jsx)(s.Fragment,{}):b}},1344:(e,t,a)=>{"use strict";a.d(t,{Cf:()=>u,Es:()=>p,L3:()=>x,c7:()=>h,lG:()=>c,rr:()=>f,zM:()=>o});var s=a(5155),r=a(2115),n=a(8622),l=a(689),i=a(1567);let c=n.bL,o=n.l9,d=n.ZL;n.bm;let m=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.hJ,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});m.displayName=n.hJ.displayName;let u=r.forwardRef((e,t)=>{let{className:a,children:r,...c}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(m,{}),(0,s.jsxs)(n.UC,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...c,children:[r,(0,s.jsxs)(n.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(l.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=n.UC.displayName;let h=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};h.displayName="DialogHeader";let p=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};p.displayName="DialogFooter";let x=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.hE,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})});x.displayName=n.hE.displayName;let f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.VY,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",a),...r})});f.displayName=n.VY.displayName},3900:(e,t,a)=>{"use strict";a.d(t,{p:()=>l});var s=a(5155),r=a(2115),n=a(1567);let l=r.forwardRef((e,t)=>{let{className:a,type:r,...l}=e;return(0,s.jsx)("input",{type:r,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...l})});l.displayName="Input"},8986:(e,t,a)=>{"use strict";a.d(t,{J:()=>o});var s=a(5155),r=a(2115),n=a(6195),l=a(1027),i=a(1567);let c=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.b,{ref:t,className:(0,i.cn)(c(),a),...r})});o.displayName=n.b.displayName},2209:(e,t,a)=>{"use strict";a.d(t,{Dv:()=>m,FA:()=>d,cA:()=>o});let s=e=>"Dark Souls 1"===e.game,r=e=>"Dark Souls 2"===e.game,n=e=>"Dark Souls 3"===e.game,l=e=>"Bloodborne"===e.game,i=e=>"Elden Ring"===e.game,c=e=>"Demon's Souls"===e.game,o=(e,t,a,o)=>{let d;if(s(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},o({...t,charStats:d});else if(r(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},o({...t,charStats:d});else if(n(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},o({...t,charStats:d});else if(l(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},o({...t,charStats:d});else if(i(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},o({...t,charStats:d});else if(c(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},o({...t,charStats:d});else{console.error("Invalid stat update attempt: ".concat(e));return}},d=(e,t,a,o)=>{let d;if(s(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},o({...t,playerStats:d});else if(r(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},o({...t,playerStats:d});else if(n(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},o({...t,playerStats:d});else if(l(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},o({...t,playerStats:d});else if(i(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},o({...t,playerStats:d});else if(c(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},o({...t,playerStats:d});else{console.error("Invalid stat update attempt: ".concat(e));return}},m=(e,t)=>{var a;return s(e)?(null===(a=e.equipment)||void 0===a?void 0:a[t])||"none":"BAD_SLOT_KEY"}}}]);