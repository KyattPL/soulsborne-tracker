(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87],{9260:e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=9260,e.exports=t},1888:(e,t,a)=>{"use strict";a.d(t,{default:()=>u});var s=a(5155),r=a(5565),n=a(8209),l=a(4683),i=a(9749),o=a(7995),c=a(8361);let d={ds1:{soulLevel:"Soul level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vitality:"Vitality",attunement:"Attunement",endurance:"Endurance",strength:"Strength",dexterity:"Dexterity",resistance:"Resistance",intelligence:"Intelligence",faith:"Faith"},ds2:{soulLevel:"Soul level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vitality:"Vitality",attunement:"Attunement",endurance:"Endurance",strength:"Strength",dexterity:"Dexterity",adaptability:"Adaptability",intelligence:"Intelligence",faith:"Faith",vigor:"Vigor",estusAmount:"Estus shards",estusUpgrade:"Estus lvl"},ds3:{soulLevel:"Soul level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vitality:"Vitality",attunement:"Attunement",endurance:"Endurance",strength:"Strength",dexterity:"Dexterity",luck:"Luck",intelligence:"Intelligence",faith:"Faith",vigor:"Vigor",estusAmount:"Estus shards",estusUpgrade:"Estus lvl"},bb:{soulLevel:"Level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vitality:"Vitality",endurance:"Endurance",strength:"Strength",insight:"Insight",skill:"Skill",bloodtinge:"Bloodtinge",arcane:"Arcane"},elden:{soulLevel:"Soul level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vigor:"Vigor",mind:"Mind",endurance:"Endurance",strength:"Strength",dexterity:"Dexterity",intelligence:"Intelligence",faith:"Faith",arcane:"Arcane",flaskAmount:"Flask shards",flaskUpgrade:"Flask lvl",spiritAshUpgradeLvl:"Spirit Ash lvl"},des:{soulLevel:"Soul level",newGamePlusCount:"NG+ count",weaponUpgradeLvl:"Weapon lvl",vitality:"Vitality",intelligence:"Intelligence",endurance:"Endurance",strength:"Strength",dexterity:"Dexterity",magic:"Magic",faith:"Faith",luck:"Luck",charTendency:"Char Tendency"}};var m=a(2209);function u(e){let{gameKey:t}=e,{progress:a,isSharedLink:u,updateProgress:p}=(0,c.p)(),h=(e,t)=>{u||(0,m.cA)(e,a,t,p)},x=(e,t)=>{u||(0,m.FA)(e,a,t,p)},f=e=>{let{onClick:t,icon:a}=e;return(0,s.jsx)("button",{onClick:t,className:"bg-zinc-700/50 hover:bg-zinc-600/50 p-1.5 rounded transition-colors duration-200 text-zinc-400 hover:text-zinc-200 \n                ".concat(u?"opacity-50 cursor-not-allowed":""),disabled:u,children:(0,s.jsx)(a,{size:14})})};return(0,s.jsx)(o.ScrollArea,{type:"always",className:"h-full",children:(0,s.jsxs)(i.Zp,{className:"bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm",children:[(0,s.jsx)(i.aR,{className:"border-b border-zinc-700/50 p-2",children:(0,s.jsxs)(i.ZB,{className:"text-xl font-ancient-runes tracking-wider text-amber-500/90 flex justify-center items-center gap-4",children:[(0,s.jsx)(r.default,{src:"/soulsborne-tracker/images/".concat(t,"/charStats.jpg"),alt:"".concat(t," stats logo"),style:{width:60,height:80},width:60,height:80}),"Character Stats",u&&(0,s.jsx)("span",{className:"text-sm font-normal text-zinc-400",children:"(Viewing Shared Progress)"})]})}),(0,s.jsx)(i.Wu,{className:"p-6",children:(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-6",children:[(0,s.jsx)("div",{className:"space-y-8",children:Object.keys(a.playerStats).map(e=>(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)(r.default,{src:"/soulsborne-tracker/images/".concat(t,"/stat_").concat(e,".jpg"),alt:"".concat(e," stat icon"),width:32,height:32}),(0,s.jsx)("span",{className:"text-zinc-300",children:d[t][e]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(f,{onClick:()=>x(e,-1),icon:n.A}),(0,s.jsxs)("span",{className:"text-amber-500 w-8 text-center",children:["weaponUpgradeLvl"===e||"estusUpgrade"===e||"spiritAshUpgradeLvl"===e?"+":"",a.playerStats[e]]}),(0,s.jsx)(f,{onClick:()=>x(e,1),icon:l.A})]})]})},e))}),(0,s.jsx)("div",{className:"space-y-8",children:Object.keys(a.charStats).map(e=>(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)(r.default,{src:"/soulsborne-tracker/images/".concat(t,"/stat_").concat(e,".jpg"),alt:"".concat(e," stat icon"),width:32,height:32}),(0,s.jsx)("span",{className:"text-zinc-300",children:d[t][e]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(f,{onClick:()=>h(e,-1),icon:n.A}),(0,s.jsx)("span",{className:"text-amber-500 w-8 text-center",children:a.charStats[e]}),(0,s.jsx)(f,{onClick:()=>h(e,1),icon:l.A})]})]})},e))})]})})]})})}},3277:(e,t,a)=>{"use strict";a.d(t,{default:()=>h});var s=a(5155),r=a(2115),n=a(4683),l=a(8209),i=a(5524),o=a(1344),c=a(3312),d=a(3900),m=a(8986),u=a(8361);let p=["emerald","blue","purple","amber","rose"];function h(){let{progress:e,isSharedLink:t,updateProgress:a}=(0,u.p)(),[h,x]=(0,r.useState)(!1),[f,g]=(0,r.useState)({name:"",total:0,color:"emerald"}),b=(s,r)=>{if(t)return;let n=e.customTrackers.map(e=>{if(e.id===s){let t=r?Math.min(e.current+1,e.total):Math.max(e.current-1,0);return{...e,current:t}}return e});a({...e,customTrackers:[...n]})},v=s=>{if(t)return;let r=e.customTrackers.filter(e=>e.id!==s);a({...e,customTrackers:[...r]})};return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)(o.lG,{open:h,onOpenChange:x,children:[(0,s.jsx)(o.zM,{asChild:!0,children:(0,s.jsxs)(c.$,{variant:"outline",className:"w-full bg-zinc-800/50 border-dashed border-zinc-700/50 text-zinc-400",children:[(0,s.jsx)(n.A,{className:"mr-2 h-4 w-4"}),"Add Custom Tracker"]})}),(0,s.jsxs)(o.Cf,{className:"bg-zinc-900 border-zinc-800",children:[(0,s.jsx)(o.c7,{children:(0,s.jsx)(o.L3,{children:"Add New Tracker"})}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(m.J,{htmlFor:"name",children:"Tracker Name"}),(0,s.jsx)(d.p,{id:"name",value:f.name,onChange:e=>g(t=>({...t,name:e.target.value})),placeholder:"e.g., Spells Collected",className:"bg-zinc-800 border-zinc-700"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(m.J,{htmlFor:"total",children:"Total Items"}),(0,s.jsx)(d.p,{id:"total",type:"number",value:f.total||"",onChange:e=>g(t=>({...t,total:parseInt(e.target.value)>0?parseInt(e.target.value):0})),className:"bg-zinc-800 border-zinc-700"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(m.J,{children:"Color"}),(0,s.jsx)("div",{className:"flex gap-2",children:p.map(e=>(0,s.jsx)("button",{onClick:()=>g(t=>({...t,color:e})),className:"w-8 h-8 rounded-full border-2 bg-".concat(e,"-500 ").concat(f.color===e?"border-white":"border-transparent")},e))})]}),(0,s.jsx)(c.$,{onClick:()=>{if(t||!f.name||f.total<=0)return;let s={id:"tracker-"+(e.customTrackers.length+1),name:f.name,total:f.total,current:0,color:f.color};a({...e,customTrackers:[...e.customTrackers,s]}),g({name:"",total:0,color:"emerald"}),x(!1)},className:"w-full",children:"Add Tracker"})]})]})]}),(0,s.jsx)("div",{className:"space-y-4",children:e.customTrackers.map(e=>{let t=e.current/e.total*100;return(0,s.jsxs)("div",{className:"border border-zinc-700/50 rounded-lg p-4 bg-zinc-800/30",children:[(0,s.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"font-semibold text-zinc-200",children:e.name}),(0,s.jsxs)("p",{className:"text-sm text-zinc-400",children:[e.current," / ",e.total]})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(c.$,{variant:"ghost",size:"icon",onClick:()=>b(e.id,!1),className:"h-8 w-8 text-zinc-400",children:(0,s.jsx)(l.A,{className:"h-4 w-4"})}),(0,s.jsx)(c.$,{variant:"ghost",size:"icon",onClick:()=>b(e.id,!0),className:"h-8 w-8 text-zinc-400",children:(0,s.jsx)(n.A,{className:"h-4 w-4"})}),(0,s.jsx)(c.$,{variant:"ghost",size:"icon",onClick:()=>v(e.id),className:"h-8 w-8 text-red-400 hover:text-red-300",children:(0,s.jsx)(i.A,{className:"h-4 w-4"})})]})]}),(0,s.jsx)("div",{className:"w-full bg-zinc-700/30 rounded-full h-2",children:(0,s.jsx)("div",{className:"bg-".concat(e.color,"-500 h-2 rounded-full transition-all duration-300"),style:{width:"".concat(t,"%")}})})]},e.id)})})]})}},8361:(e,t,a)=>{"use strict";a.d(t,{ProgressProvider:()=>m,p:()=>u});var s=a(5155),r=a(2115),n=a(6046),l=a(3830),i=a(4496),o=a(9113),c=a.n(o);let d=(0,r.createContext)(null);function m(e){let{children:t,gameKey:a="ds1"}=e,o=(0,n.useSearchParams)(),[m,u]=(0,r.useState)(i.I[a]),[p,h]=(0,r.useState)(!1),[x,f]=(0,r.useState)(!1),[g,b]=(0,r.useState)(!1),[v,N]=(0,r.useState)(""),[j,y]=(0,r.useState)("");(0,r.useEffect)(()=>{let e=o.get("p");if(e)h(!0),w(e);else{let e=localStorage.getItem("".concat(a,"-progress"));e&&u(JSON.parse(e))}},[a,o]);let w=e=>{try{let t=JSON.parse((0,l.D4)(e));u(t)}catch(e){console.error("Failed to load shared progress: ",e)}};return(0,s.jsx)(d.Provider,{value:{progress:m,isSharedLink:p,isUnsavedProgress:x,isTwitchConnected:g,twitchChannel:v,twitchToken:j,updateProgress:e=>{let t=c().cloneDeep({...m,...e});u(t);let s=localStorage.getItem("".concat(a,"-progress"));s&&c().isEqual(JSON.parse(s),t)?f(!1):f(!0)},getShareableLink:()=>{let e=(0,l.lF)(JSON.stringify(m),!0);return"".concat(window.location.origin).concat(window.location.pathname,"?p=").concat(e)},loadSharedProgress:w,saveProgress:()=>{localStorage.setItem("".concat(a,"-progress"),JSON.stringify(m)),f(!1)},resetProgress:()=>{localStorage.removeItem("".concat(a,"-progress")),u(i.I[a]),f(!1)},setIsTwitchConnected:b,setTwitchChannel:N,setTwitchToken:y},children:t})}function u(){let e=(0,r.useContext)(d);if(!e)throw Error("useProgress must be used within a ProgressProvider");return e}},3158:(e,t,a)=>{"use strict";a.d(t,{default:()=>i});var s=a(5155),r=a(2115),n=a(7995),l=a(9749);let i=e=>{let{title:t,isElden:a=!1,children:i}=e,[o,c]=(0,r.useState)(!1),[d,m]=(0,r.useState)(!0),u=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var e;let t=null===(e=u.current)||void 0===e?void 0:e.querySelector("[data-radix-scroll-area-viewport]");((null==t?void 0:t.scrollHeight)||0)===((null==t?void 0:t.clientHeight)||0)&&m(!1)},[]),(0,s.jsxs)(n.ScrollArea,{type:"always",ref:u,onScrollCapture:()=>{if(u.current){var e;let t=null===(e=u.current)||void 0===e?void 0:e.querySelector("[data-radix-scroll-area-viewport]"),a=(null==t?void 0:t.scrollTop)||0,s=(null==t?void 0:t.scrollHeight)||0,r=(null==t?void 0:t.clientHeight)||0;c(a>20),m(a+r+20<s)}},className:"w-full ".concat(a?"h-[20rem]":"h-[46rem]"),children:[(0,s.jsx)("div",{className:"absolute top-0 h-4 w-full bg-gradient-to-b from-black to-transparent pointer-events-none z-10 transition-opacity duration-300",style:{opacity:o?1:0}}),(0,s.jsx)("div",{className:"absolute bottom-0 h-4 w-full bg-gradient-to-t from-black to-transparent pointer-events-none z-10 transition-opacity duration-300",style:{opacity:d?1:0}}),(0,s.jsxs)(l.Zp,{className:"bg-zinc-800/50 border-zinc-700/50 backdrop-blur-sm",children:[(0,s.jsx)(l.aR,{className:"pb-4",children:(0,s.jsx)(l.ZB,{className:"text-zinc-100",children:t})}),(0,s.jsx)(l.Wu,{children:i})]})]})}},588:(e,t,a)=>{"use strict";a.d(t,{default:()=>m});var s=a(5155),r=a(2115),n=a(3830),l=a(3312),i=a(1344),o=a(3900),c=a(6758),d=a(8361);function m(e){let{gameKey:t}=e,{isSharedLink:a,progress:m}=(0,d.p)(),[u,p]=(0,r.useState)(""),[h,x]=(0,r.useState)(!1);return a?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)(i.lG,{children:[(0,s.jsx)(i.zM,{asChild:!0,children:(0,s.jsx)(l.$,{variant:"destructive",size:"lg",className:"bg-amber-800 hover:bg-amber-600 text-amber-100 border    border-amber-800 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2",children:"Generate Shareable Link"})}),(0,s.jsxs)(i.Cf,{className:"bg-zinc-900 border-zinc-800",children:[(0,s.jsx)(i.c7,{children:(0,s.jsx)(i.L3,{className:"text-amber-500",children:"Shareable Progress Link"})}),(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsx)(o.p,{value:u,readOnly:!0,className:"flex-grow text-zinc-800",placeholder:"Your shareable link will appear here"}),(0,s.jsx)(l.$,{className:"".concat(h?"text-zinc-200":"text-zinc-800"),onClick:()=>{navigator.clipboard.writeText(u),x(!0),setTimeout(()=>x(!1),2e3)},variant:h?"default":"outline",children:h?"Copied!":(0,s.jsx)(c.A,{})})]}),(0,s.jsx)(l.$,{onClick:()=>{let e=(0,n.lF)(JSON.stringify(m),!0);p("".concat(window.location.origin,"/").concat(t,"?p=").concat(e))},className:"w-full bg-amber-900 hover:bg-amber-800 text-amber-100 border-amber-800",children:"Generate Link"})]})]})}},2409:(e,t,a)=>{"use strict";a.d(t,{default:()=>j});var s=a(5155),r=a(6694),n=a(2115),l=a(3312),i=a(3572),o=a(1567);let c=i.bL,d=i.l9,m=i.ZL,u=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.hJ,{className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r,ref:t})});u.displayName=i.hJ.displayName;let p=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsxs)(m,{children:[(0,s.jsx)(u,{}),(0,s.jsx)(i.UC,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...r})]})});p.displayName=i.UC.displayName;let h=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};h.displayName="AlertDialogHeader";let x=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};x.displayName="AlertDialogFooter";let f=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.hE,{ref:t,className:(0,o.cn)("text-lg font-semibold",a),...r})});f.displayName=i.hE.displayName;let g=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.VY,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...r})});g.displayName=i.VY.displayName;let b=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.rc,{ref:t,className:(0,o.cn)((0,l.r)(),a),...r})});b.displayName=i.rc.displayName;let v=n.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.ZD,{ref:t,className:(0,o.cn)((0,l.r)({variant:"outline"}),"mt-2 sm:mt-0",a),...r})});v.displayName=i.ZD.displayName;var N=a(8361);let j=()=>{let{resetProgress:e,isSharedLink:t}=(0,N.p)();return t?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)(c,{children:[(0,s.jsx)(d,{asChild:!0,children:(0,s.jsxs)(l.$,{variant:"destructive",size:"lg",className:"bg-amber-800 hover:bg-amber-600 text-amber-100 border    border-amber-800 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2",children:[(0,s.jsx)(r.A,{className:"w-4 h-4"}),"Reset Progress"]})}),(0,s.jsxs)(p,{className:"bg-zinc-900 border-zinc-800",children:[(0,s.jsxs)(h,{children:[(0,s.jsx)(f,{className:"text-amber-500",children:"Reset All Progress?"}),(0,s.jsx)(g,{className:"text-lg text-zinc-400",children:"This action cannot be undone. This will permanently delete all your tracked progress including boss defeats, custom trackers, and character stats."})]}),(0,s.jsxs)(x,{children:[(0,s.jsx)(v,{className:"bg-zinc-800 hover:bg-zinc-700 border-zinc-700",children:"Cancel"}),(0,s.jsx)(b,{onClick:e,className:"bg-amber-900 hover:bg-amber-800 text-amber-100 border-amber-800",children:"Reset Progress"})]})]})]})}},6991:(e,t,a)=>{"use strict";a.d(t,{default:()=>i});var s=a(5155);a(2115);var r=a(8361),n=a(3312),l=a(6426);let i=()=>{let{isSharedLink:e,isUnsavedProgress:t,saveProgress:a}=(0,r.p)();return e?(0,s.jsx)(s.Fragment,{}):(0,s.jsxs)(n.$,{onClick:a,disabled:!t,className:"bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700/50 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2",size:"lg",children:[(0,s.jsx)(l.A,{className:"w-4 h-4"}),"Save Progress"]})}},8254:(e,t,a)=>{"use strict";a.d(t,{default:()=>v});var s=a(5155),r=a(5565),n=a(2645),l=a(2115),i=a(8361),o=a(3312),c=a(4831),d=a(2458),m=a(1567);let u=d.bL,p=d.l9,h=l.forwardRef((e,t)=>{let{className:a,align:r="center",sideOffset:n=4,...l}=e;return(0,s.jsx)(d.ZL,{children:(0,s.jsx)(d.UC,{ref:t,align:r,sideOffset:n,className:(0,m.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",a),...l})})});h.displayName=d.UC.displayName;var x=a(7995),f=a(4946),g=a(2209);function b(e){let{gameKey:t,slotKey:a,label:d,category:m}=e,[b,v]=(0,l.useState)(!1),{progress:N,isSharedLink:j,updateProgress:y}=(0,i.p)(),w=e=>{let t;if(j)return;let s={...N};s.equipment||(s.equipment={}),t="none"===e?void 0:e,s.equipment={...N.equipment,[a]:t},y(s)},S=(0,g.Dv)(N,a),z=function(e,t,a){let s=f._[e];return"armor"===t?s.filter(e=>e.optionalKey===a):s.filter(e=>e.category===t)}(t,m,a),k=null==z?void 0:z.find(e=>e.id===S);return z=[{category:"armor",id:"none",name:"None"}].concat(z),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("span",{className:"text-zinc-400 text-sm",children:d}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("div",{className:"w-12 h-12 bg-zinc-700/50 rounded-md overflow-hidden flex items-center justify-center",children:S&&"none"!==S?(0,s.jsx)(r.default,{src:"/soulsborne-tracker/images/".concat(t,"/eqItems/").concat(m,"/").concat(S,".jpg"),alt:"".concat(d," icon"),width:48,height:48}):(0,s.jsx)("span",{className:"text-xs text-zinc-500",children:"-"})}),(0,s.jsxs)(u,{open:b,onOpenChange:v,children:[(0,s.jsx)(p,{asChild:!0,disabled:j,children:(0,s.jsxs)(o.$,{variant:"outline",className:"flex-1 justify-between bg-zinc-700/30 border-zinc-600/50 hover:bg-zinc-600/50 hover:text-zinc-200\n                ".concat(j?"opacity-50 cursor-not-allowed":""),children:[(0,s.jsx)("span",{className:"truncate text-zinc-200",children:(null==k?void 0:k.name)||"None"}),(0,s.jsx)(n.A,{size:16})]})}),(0,s.jsx)(h,{className:"bg-zinc-800 border-zinc-700",children:(0,s.jsxs)(c.uB,{className:"bg-zinc-700 text-zinc-100",children:[(0,s.jsx)(c.G7,{placeholder:"Search"}),(0,s.jsxs)(c.oI,{children:[(0,s.jsx)(c.xL,{children:"No item found"}),(0,s.jsx)(c.L$,{children:(0,s.jsx)(x.ScrollArea,{className:"h-48",children:null==z?void 0:z.map(e=>(0,s.jsx)(c.h_,{value:e.id,onSelect:()=>{w(e.id),v(!1)},className:"text-zinc-300 hover:text-amber-500 hover:bg-zinc-700/70",children:e.name},e.id))})})]})]})})]})]})]})}function v(e){let{gameKey:t,category:a,slots:r,hasBorder:n}=e;return(0,s.jsxs)("div",{className:"".concat(n?"border-b border-zinc-700/50 pb-4":""),children:[(0,s.jsx)("h3",{className:"text-zinc-300 font-semibold mb-2",children:a[0].toUpperCase()+a.slice(1)}),(0,s.jsx)("div",{className:"grid ".concat(1===r.length?"grid-cols-1":2===r.length?"grid-cols-2":3===r.length?"grid-cols-3":4===r.length?"grid-cols-2 md:grid-cols-4":6===r.length?"grid-cols-2 md:grid-cols-3":"grid-cols-2"," gap-4"),children:r.map(e=>(0,s.jsx)(b,{gameKey:t,slotKey:e.key,label:e.label,category:a},e.key))})]})}},7111:(e,t,a)=>{"use strict";a.d(t,{TwitchChatMonitor:()=>m});var s=a(5155),r=a(2115),n=a(5651),l=a.n(n),i=a(8361),o=a(2209),c=a(6606),d=a(3830);let m=(0,r.memo)(function(){let e=(0,r.useRef)(null),{isTwitchConnected:t,twitchChannel:a}=(0,i.p)(),[n,m]=(0,r.useState)(""),u=function(){let{progress:e,updateProgress:t}=(0,i.p)();return{modifyCharStat:function(a,s){(0,o.cA)(a,e,s,t)},modifyPlayerStat:function(a,s){(0,o.FA)(a,e,s,t)},modifyBossAttempt:function(a,s){let r=e.bossesAttempts,n=r.findIndex(e=>e.id===a);if(-1!==n)r[n].attempts=r[n].attempts+s,r[n].attempts<0&&(r[n].attempts=0);else{let e=Object.values(c.I).find(e=>e.find(e=>e.id===a)),t=null==e?void 0:e.find(e=>e.id===a);r.push({id:a,attempts:s<0?0:s,name:t.name,defeated:!1})}t({...e,bossesAttempts:r})},toggleBossDone:function(a){let s=e.bossesAttempts,r=s.findIndex(e=>e.id===a);if(-1!==r)s[r].defeated=!s[r].defeated;else{let e=Object.values(c.I).find(e=>e.find(e=>e.id===a)),t=null==e?void 0:e.find(e=>e.id===a);s.push({id:a,attempts:0,name:t.name,defeated:!0})}t({...e,bossesAttempts:s})},modifyCustomTracker:function(a,s){let r=Number(a),n=e.customTrackers;n[r].current+=s,n[r].current<0&&(n[r].current=0),n[r].current>n[r].total&&(n[r].current=n[r].total),t({...e,customTrackers:[...n]})},sendShareableLink:function(){l().Say((0,d.lF)(JSON.stringify(e),!0),null)}}}(),p=(0,r.useRef)(u),h=(0,r.useRef)(!1);return((0,r.useEffect)(()=>{p.current=u},[u]),(0,r.useEffect)(()=>{{let e=sessionStorage.getItem("twitchToken");e&&m(e)}},[]),(0,r.useEffect)(()=>{if(!t||!a||h.current)return;h.current=!0,console.log("Connecting to Twitch chat for channel: ".concat(a));let e=0,s=()=>{if(e>=5){console.error("Max reconnect attempts reached");return}let t=Math.min(1e3*Math.pow(2,e),3e4);console.log("Attempting to reconnect in ".concat(t,"ms (attempt ").concat(e+1,")")),setTimeout(()=>{e+=1,n?l().Init(a,n):l().Init(a)},t)};return l().onError=e=>{console.error("Connection error:",e),s()},l().onCommand=(e,t,a,s)=>{if(s.mod||s.broadcaster){var r;let s=(r=p.current,[{name:"charstat",description:"Modify a character stat. Usage: !charstat vitality +2",execute:(e,t)=>{let[a,s]=t;!a||isNaN(Number(s))||r.modifyCharStat(a,Number(s))}},{name:"playerstat",description:"Modify a player stat. Usage: !playerstat soulLevel +2",execute:(e,t)=>{let[a,s]=t;!a||isNaN(Number(s))||r.modifyPlayerStat(a,Number(s))}},{name:"boss",description:"Modify boss attempts. Usage: !boss Artorias +1",execute:(e,t)=>{let[a,s]=t;!a||isNaN(Number(s))||r.modifyBossAttempt(a,Number(s))}},{name:"bossdone",description:"Toggle boss completion. Usage: !bossdone Artorias",execute:(e,t)=>{let[a]=t;a&&r.toggleBossDone(a)}},{name:"track",description:"Modify custom tracker. Usage: !track 1 +1",execute:(e,t)=>{let[a,s]=t;!a||isNaN(Number(s))||isNaN(Number(a))||r.modifyCustomTracker(a,Number(s))}},{name:"getprogress",description:"Get shareable link for streamer's progress. Usage: !getprogress",execute:(e,t)=>{r.sendShareableLink()}}]).find(e=>e.name===t);if(s){let t=a.split(" ");s.execute(e,t)}}},n?(l().Init(a,"oauth:".concat(n)),console.log("Connected with authorization token - chat messages can be sent")):(l().Init(a),console.log("Connected without authorization token - can only receive messages")),()=>{console.log("Disconnecting from Twitch chat for channel: ".concat(a)),h.current=!1,l().Disconnect()}},[t,a,n]),(0,r.useEffect)(()=>{let e=()=>{let e=sessionStorage.getItem("twitchToken");m(e||""),h.current&&t&&a&&(l().Disconnect(),h.current=!1,setTimeout(()=>{e?l().Init(a,e):l().Init(a),h.current=!0},100))};return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[t,a]),t)?(0,s.jsx)("iframe",{className:"hidden",ref:e,src:"https://www.twitch.tv/embed/".concat(a,"/chat?parent=").concat(window.location.hostname),height:"800",width:"300"}):null})},2870:(e,t,a)=>{"use strict";a.d(t,{default:()=>u});var s=a(5155),r=a(2115),n=a(689),l=a(6822),i=a(3312),o=a(1344),c=a(3900),d=a(8986),m=a(8361);let u=()=>{let{isTwitchConnected:e,twitchChannel:t,isSharedLink:a,setIsTwitchConnected:u,setTwitchChannel:p}=(0,m.p)(),[h,x]=(0,r.useState)(""),[f,g]=(0,r.useState)(!1),b=e?(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)(i.$,{variant:"destructive",size:"lg",onClick:()=>{u(!1),p("")},className:"bg-purple-900/80 hover:bg-purple-800 text-purple-100 border border-purple-800/50 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2",children:[(0,s.jsx)(n.A,{className:"w-4 h-4"}),"Disconnect Twitch"]}),(0,s.jsxs)("div",{className:"text-sm text-zinc-400",children:["Connected to Twitch chat: ",(0,s.jsx)("span",{className:"text-purple-400",children:t})]})]}):(0,s.jsxs)(o.lG,{open:f,onOpenChange:g,children:[(0,s.jsx)(o.zM,{asChild:!0,children:(0,s.jsxs)(i.$,{size:"lg",className:"bg-purple-900/80 hover:bg-purple-800 text-purple-100 border border-purple-800/50 shadow-lg backdrop-blur-sm transition-all duration-200 gap-2",children:[(0,s.jsx)(l.A,{className:"w-4 h-4"}),"Connect Twitch Chat"]})}),(0,s.jsx)(o.Cf,{className:"bg-zinc-900 border-zinc-800",children:(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),g(!1),u(!0),p(h)},children:[(0,s.jsxs)(o.c7,{children:[(0,s.jsx)(o.L3,{className:"text-purple-400",children:"Connect to Twitch Chat"}),(0,s.jsx)(o.rr,{className:"text-zinc-400",children:"Enter your Twitch channel name to enable chat commands for tracking progress."})]}),(0,s.jsxs)("div",{className:"py-4",children:[(0,s.jsx)(d.J,{htmlFor:"channel",className:"text-zinc-200",children:"Channel Name"}),(0,s.jsx)(c.p,{id:"channel",value:h,onChange:e=>x(e.target.value),className:"bg-zinc-800 border-zinc-700 text-zinc-100",placeholder:"Enter your channel name",required:!0})]}),(0,s.jsxs)(o.Es,{children:[(0,s.jsx)(i.$,{type:"button",variant:"ghost",onClick:()=>g(!1),className:"bg-zinc-800 hover:bg-zinc-700 border-zinc-700",children:"Cancel"}),(0,s.jsx)(i.$,{type:"submit",className:"bg-purple-900 hover:bg-purple-800 text-purple-100 border-purple-800",children:"Connect"})]})]})})]});return a?(0,s.jsx)(s.Fragment,{}):b}},4831:(e,t,a)=>{"use strict";a.d(t,{G7:()=>c,L$:()=>u,h_:()=>p,oI:()=>d,uB:()=>o,xL:()=>m});var s=a(5155),r=a(2115),n=a(6982),l=a(2591),i=a(1567);a(1344);let o=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.uB,{ref:t,className:(0,i.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",a),...r})});o.displayName=n.uB.displayName;let c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,s.jsx)(l.A,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,s.jsx)(n.uB.Input,{ref:t,className:(0,i.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",a),...r})]})});c.displayName=n.uB.Input.displayName;let d=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.uB.List,{ref:t,className:(0,i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",a),...r})});d.displayName=n.uB.List.displayName;let m=r.forwardRef((e,t)=>(0,s.jsx)(n.uB.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));m.displayName=n.uB.Empty.displayName;let u=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.uB.Group,{ref:t,className:(0,i.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",a),...r})});u.displayName=n.uB.Group.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.uB.Separator,{ref:t,className:(0,i.cn)("-mx-1 h-px bg-border",a),...r})}).displayName=n.uB.Separator.displayName;let p=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.uB.Item,{ref:t,className:(0,i.cn)("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",a),...r})});p.displayName=n.uB.Item.displayName},1344:(e,t,a)=>{"use strict";a.d(t,{Cf:()=>u,Es:()=>h,L3:()=>x,c7:()=>p,lG:()=>o,rr:()=>f,zM:()=>c});var s=a(5155),r=a(2115),n=a(8622),l=a(689),i=a(1567);let o=n.bL,c=n.l9,d=n.ZL;n.bm;let m=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.hJ,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});m.displayName=n.hJ.displayName;let u=r.forwardRef((e,t)=>{let{className:a,children:r,...o}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(m,{}),(0,s.jsxs)(n.UC,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...o,children:[r,(0,s.jsxs)(n.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(l.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=n.UC.displayName;let p=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};p.displayName="DialogHeader";let h=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};h.displayName="DialogFooter";let x=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.hE,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})});x.displayName=n.hE.displayName;let f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.VY,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",a),...r})});f.displayName=n.VY.displayName},8986:(e,t,a)=>{"use strict";a.d(t,{J:()=>c});var s=a(5155),r=a(2115),n=a(6195),l=a(1027),i=a(1567);let o=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.b,{ref:t,className:(0,i.cn)(o(),a),...r})});c.displayName=n.b.displayName},3601:(e,t,a)=>{"use strict";a.d(t,{Bc:()=>i,ZI:()=>d,k$:()=>c,m_:()=>o});var s=a(5155),r=a(2115),n=a(34),l=a(1567);let i=n.Kq,o=n.bL,c=n.l9,d=r.forwardRef((e,t)=>{let{className:a,sideOffset:r=4,...i}=e;return(0,s.jsx)(n.UC,{ref:t,sideOffset:r,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...i})});d.displayName=n.UC.displayName},2209:(e,t,a)=>{"use strict";a.d(t,{Dv:()=>m,FA:()=>d,GS:()=>l,cA:()=>c,u4:()=>o});let s=e=>"Dark Souls 1"===e.game,r=e=>"Dark Souls 2"===e.game,n=e=>"Dark Souls 3"===e.game,l=e=>"Bloodborne"===e.game,i=e=>"Elden Ring"===e.game,o=e=>"Demon's Souls"===e.game,c=(e,t,a,c)=>{let d;if(s(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},c({...t,charStats:d});else if(r(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},c({...t,charStats:d});else if(n(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},c({...t,charStats:d});else if(l(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},c({...t,charStats:d});else if(i(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},c({...t,charStats:d});else if(o(t)&&e in t.charStats)d={...t.charStats,[e]:Math.max(0,t.charStats[e]+a)},c({...t,charStats:d});else{console.error("Invalid stat update attempt: ".concat(e));return}},d=(e,t,a,c)=>{let d;if(s(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},c({...t,playerStats:d});else if(r(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},c({...t,playerStats:d});else if(n(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},c({...t,playerStats:d});else if(l(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},c({...t,playerStats:d});else if(i(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},c({...t,playerStats:d});else if(o(t)&&e in t.playerStats)d={...t.playerStats,[e]:Math.max(0,t.playerStats[e]+a)},c({...t,playerStats:d});else{console.error("Invalid stat update attempt: ".concat(e));return}},m=(e,t)=>{var a,c,d,m,u,p;return s(e)?(null===(a=e.equipment)||void 0===a?void 0:a[t])||"none":r(e)?(null===(c=e.equipment)||void 0===c?void 0:c[t])||"none":n(e)?(null===(d=e.equipment)||void 0===d?void 0:d[t])||"none":o(e)?(null===(m=e.equipment)||void 0===m?void 0:m[t])||"none":l(e)?(null===(u=e.equipment)||void 0===u?void 0:u[t])||"none":i(e)?(null===(p=e.equipment)||void 0===p?void 0:p[t])||"none":"BAD_SLOT_KEY"}}}]);