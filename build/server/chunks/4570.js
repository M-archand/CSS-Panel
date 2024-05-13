"use strict";exports.id=4570,exports.ids=[4570],exports.modules={34371:(e,r,a)=>{a.d(r,{Z:()=>i});var i=(0,a(60719).Z)("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},26233:(e,r,a)=>{a.d(r,{K:()=>M});var i=a(37307);function t(e){let{isSelected:r,disableAnimation:a,...t}=e;return(0,i.jsx)("svg",{"aria-hidden":"true",role:"presentation",viewBox:"0 0 17 18",...t,children:(0,i.jsx)("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:r?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,style:!a&&r?{transition:"stroke-dashoffset 250ms linear 0.2s"}:{}})})}function l(e){let{isSelected:r,disableAnimation:a,...t}=e;return(0,i.jsx)("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...t,children:(0,i.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function n(e){let{isIndeterminate:r,...a}=e;return(0,i.jsx)(r?l:t,{...a})}var[o,d]=(0,a(71526).k)({name:"CheckboxGroupContext",strict:!1}),s=a(23169),u=a(15010),c=a(97872),b=a(84821),f=(0,c.tv)({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",wrapper:["relative","inline-flex","items-center","justify-center","flex-shrink-0","overflow-hidden","before:content-['']","before:absolute","before:inset-0","before:border-solid","before:border-2","before:box-border","before:border-default","after:content-['']","after:absolute","after:inset-0","after:scale-50","after:opacity-0","after:origin-center","group-data-[selected=true]:after:scale-100","group-data-[selected=true]:after:opacity-100","group-data-[hover=true]:before:bg-default-100",...b.ID],icon:"z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:"after:bg-default after:text-default-foreground text-default-foreground"},primary:{wrapper:"after:bg-primary after:text-primary-foreground text-primary-foreground"},secondary:{wrapper:"after:bg-secondary after:text-secondary-foreground text-secondary-foreground"},success:{wrapper:"after:bg-success after:text-success-foreground text-success-foreground"},warning:{wrapper:"after:bg-warning after:text-warning-foreground text-warning-foreground"},danger:{wrapper:"after:bg-danger after:text-danger-foreground text-danger-foreground"}},size:{sm:{wrapper:["w-4 h-4 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"],label:"text-small",icon:"w-3 h-2"},md:{wrapper:["w-5 h-5 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"],label:"text-medium",icon:"w-4 h-3"},lg:{wrapper:["w-6 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"],label:"text-large",icon:"w-5 h-4"}},radius:{none:{wrapper:"rounded-none before:rounded-none after:rounded-none"},sm:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"]},md:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"]},lg:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"]},full:{wrapper:"rounded-full before:rounded-full after:rounded-full"}},lineThrough:{true:{label:["inline-flex","items-center","justify-center","before:content-['']","before:absolute","before:bg-foreground","before:w-0","before:h-0.5","group-data-[selected=true]:opacity-60","group-data-[selected=true]:before:w-full"]}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isInvalid:{true:{wrapper:"before:border-danger",label:"text-danger"}},disableAnimation:{true:{wrapper:"transition-none",icon:"transition-none",label:"transition-none"},false:{wrapper:["before:transition-colors","group-data-[pressed=true]:scale-95","transition-transform","after:transition-transform-opacity","after:!ease-linear","after:!duration-200","motion-reduce:transition-none"],icon:"transition-opacity motion-reduce:transition-none",label:"transition-colors-opacity before:transition-width motion-reduce:transition-none"}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,lineThrough:!1,disableAnimation:!1}});(0,c.tv)({slots:{base:"relative flex flex-col gap-2",label:"relative text-medium text-foreground-500",wrapper:"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",description:"text-small text-foreground-400",errorMessage:"text-small text-danger"},variants:{isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5"}},isInvalid:{true:{description:"text-danger"}},disableAnimation:{true:{},false:{description:"transition-colors !duration-150 motion-reduce:transition-none"}}},defaultVariants:{isInvalid:!1,isRequired:!1,disableAnimation:!1}});var p=a(62782),m=a(8629),v=a(2825),h=a(5918),g=a(63793),x=a(83877),y=a(41118),w=a(89729),k=a(65637),R=a(58462),P=a(49492),C=a(53781),D=a(47715);function I(e,r,a){let i=(0,C.Q3)({...e,value:r.isSelected}),{isInvalid:t,validationErrors:l,validationDetails:n}=i.displayValidation,{labelProps:o,inputProps:d,isSelected:u,isPressed:c,isDisabled:b,isReadOnly:f}=(0,D.O)({...e,isInvalid:t},r,a);(0,P.Q)(e,i,a);let{isIndeterminate:p,isRequired:m,validationBehavior:v="aria"}=e;return(0,s.useEffect)(()=>{a.current&&(a.current.indeterminate=!!p)}),{labelProps:o,inputProps:{...d,checked:u,"aria-required":m&&"aria"===v||void 0,required:m&&"native"===v},isSelected:u,isPressed:c,isDisabled:b,isReadOnly:f,isInvalid:t,validationErrors:l,validationDetails:n}}let S=new WeakMap;var B=a(88346),j=a(69206),V=a(58181),O=(0,j.Gp)((e,r)=>{let{Component:a,children:t,icon:l=(0,i.jsx)(n,{}),getBaseProps:o,getWrapperProps:c,getInputProps:b,getIconProps:P,getLabelProps:D}=function(e={}){var r,a,i,t,l,n;let o=d(),c=!!o,{as:b,ref:P,value:D="",children:j,icon:V,name:O,isRequired:M,isReadOnly:T=!1,autoFocus:q=!1,isSelected:G,validationState:N,size:z=null!=(r=null==o?void 0:o.size)?r:"md",color:A=null!=(a=null==o?void 0:o.color)?a:"primary",radius:E=null==o?void 0:o.radius,lineThrough:W=null!=(i=null==o?void 0:o.lineThrough)&&i,isDisabled:L=null!=(t=null==o?void 0:o.isDisabled)&&t,disableAnimation:Z=null!=(l=null==o?void 0:o.disableAnimation)&&l,isInvalid:F=N?"invalid"===N:null!=(n=null==o?void 0:o.isInvalid)&&n,isIndeterminate:Q=!1,defaultSelected:U,classNames:K,className:X,onValueChange:H,...J}=e;o&&y.Ts&&(G&&(0,w.Z)("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.","Checkbox"),U&&(0,w.Z)("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.","Checkbox"));let Y=(0,s.useRef)(null),$=(0,s.useRef)(null),_=e.onChange;c&&(_=(0,g.t)(()=>{o.groupState.resetValidation()},_));let ee=(0,s.useId)(),er=(0,s.useMemo)(()=>({name:O,value:D,children:j,autoFocus:q,defaultSelected:U,isIndeterminate:Q,isRequired:M,isInvalid:F,isSelected:G,isDisabled:L,isReadOnly:T,"aria-label":(0,k.x)(J["aria-label"],j),"aria-labelledby":J["aria-labelledby"]||ee,onChange:H}),[D,O,ee,j,q,F,Q,L,T,G,U,J["aria-label"],J["aria-labelledby"],H]),ea=(0,u.l)(er),{inputProps:ei,isSelected:et,isDisabled:el,isReadOnly:en,isPressed:eo}=c?function(e,r,a){var i,t;let l=(0,u.l)({isReadOnly:e.isReadOnly||r.isReadOnly,isSelected:r.isSelected(e.value),onChange(a){a?r.addValue(e.value):r.removeValue(e.value),e.onChange&&e.onChange(a)}}),{name:n,descriptionId:o,errorMessageId:d,validationBehavior:c}=S.get(r);c=null!==(i=e.validationBehavior)&&void 0!==i?i:c;let{realtimeValidation:b}=(0,C.Q3)({...e,value:l.isSelected,name:void 0,validationBehavior:"aria"}),f=(0,s.useRef)(C.PS),p=()=>{r.setInvalid(e.value,b.isInvalid?b:f.current)};(0,s.useEffect)(p);let m=r.realtimeValidation.isInvalid?r.realtimeValidation:b,v="native"===c?r.displayValidation:m,h=I({...e,isReadOnly:e.isReadOnly||r.isReadOnly,isDisabled:e.isDisabled||r.isDisabled,name:e.name||n,isRequired:null!==(t=e.isRequired)&&void 0!==t?t:r.isRequired,validationBehavior:c,[C.tL]:{realtimeValidation:m,displayValidation:v,resetValidation:r.resetValidation,commitValidation:r.commitValidation,updateValidation(e){f.current=e,p()}}},l,a);return{...h,inputProps:{...h.inputProps,"aria-describedby":[e["aria-describedby"],r.isInvalid?d:null,o].filter(Boolean).join(" ")||void 0}}}({...er,isInvalid:F,validationBehavior:"native"},o.groupState,$):I({...er,validationBehavior:"native"},ea,$),ed=el||en,[es,eu]=(0,s.useState)(!1),{pressProps:ec}=(0,m.r)({isDisabled:ed,onPressStart(e){"keyboard"!==e.pointerType&&eu(!0)},onPressEnd(e){"keyboard"!==e.pointerType&&eu(!1)}}),eb=!ed&&(es||eo);M&&(ei.required=!0);let{hoverProps:ef,isHovered:ep}=(0,v.X)({isDisabled:ei.disabled}),{focusProps:em,isFocused:ev,isFocusVisible:eh}=(0,h.F)({autoFocus:ei.autoFocus}),eg=(0,s.useMemo)(()=>f({color:A,size:z,radius:E,isInvalid:F,lineThrough:W,isDisabled:el,disableAnimation:Z}),[A,z,E,F,W,el,Z]);(0,p.G)(()=>{if(!$.current)return;let e=!!$.current.checked;ea.setSelected(e)},[$.current]);let ex=function(e,r=[]){let a=(0,s.useRef)(e);return(0,p.G)(()=>{a.current=e}),(0,s.useCallback)((...e)=>{var r;return null==(r=a.current)?void 0:r.call(a,...e)},r)}(_),ey=(0,s.useCallback)(e=>{if(en||el){e.preventDefault();return}null==ex||ex(e)},[en,el,ex]),ew=(0,R.W)(null==K?void 0:K.base,X),ek=(0,s.useCallback)(()=>({ref:Y,className:eg.base({class:ew}),"data-disabled":(0,y.PB)(el),"data-selected":(0,y.PB)(et||Q),"data-invalid":(0,y.PB)(F),"data-hover":(0,y.PB)(ep),"data-focus":(0,y.PB)(ev),"data-pressed":(0,y.PB)(eb),"data-readonly":(0,y.PB)(ei.readOnly),"data-focus-visible":(0,y.PB)(eh),"data-indeterminate":(0,y.PB)(Q),...(0,x.d)(ef,ec,J)}),[eg,ew,el,et,Q,F,ep,ev,eb,ei.readOnly,eh,ef,ec,J]),eR=(0,s.useCallback)((e={})=>({...e,"aria-hidden":!0,className:(0,R.W)(eg.wrapper({class:(0,R.W)(null==K?void 0:K.wrapper,null==e?void 0:e.className)}))}),[eg,null==K?void 0:K.wrapper]),eP=(0,s.useCallback)(()=>({ref:(0,B.l)($,P),...(0,x.d)(ei,em),onChange:(0,g.t)(ei.onChange,ey)}),[ei,em,ey]),eC=(0,s.useCallback)(()=>({id:ee,className:eg.label({class:null==K?void 0:K.label})}),[eg,null==K?void 0:K.label,el,et,F]),eD=(0,s.useCallback)(()=>({isSelected:et,isIndeterminate:!!Q,disableAnimation:!!Z,className:eg.icon({class:null==K?void 0:K.icon})}),[eg,null==K?void 0:K.icon,et,Q,Z]);return{Component:b||"label",icon:V,children:j,isSelected:et,isDisabled:el,isInvalid:F,isFocused:ev,isHovered:ep,isFocusVisible:eh,getBaseProps:ek,getWrapperProps:eR,getInputProps:eP,getLabelProps:eC,getIconProps:eD}}({...e,ref:r}),j="function"==typeof l?l(P()):(0,s.cloneElement)(l,P());return(0,i.jsxs)(a,{...o(),children:[(0,i.jsx)(V.T,{children:(0,i.jsx)("input",{...b()})}),(0,i.jsx)("span",{...c(),children:j}),t&&(0,i.jsx)("span",{...D(),children:t})]})});O.displayName="NextUI.Checkbox";var M=O},25323:(e,r,a)=>{a.d(r,{v:()=>t});var i=a(37307),t=({strokeWidth:e=1.5,...r})=>(0,i.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e,viewBox:"0 0 24 24",width:"1em",...r,children:(0,i.jsx)("path",{d:"m6 9 6 6 6-6"})})},47715:(e,r,a)=>{a.d(r,{O:()=>d});var i=a(83877),t=a(7679),l=a(52956),n=a(67165),o=a(8629);function d(e,r,a){let{isDisabled:d=!1,isReadOnly:s=!1,value:u,name:c,children:b,"aria-label":f,"aria-labelledby":p,validationState:m="valid",isInvalid:v}=e;null!=b||null!=f||null!=p||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:h,isPressed:g}=(0,o.r)({isDisabled:d}),{pressProps:x,isPressed:y}=(0,o.r)({isDisabled:d||s,onPress(){r.toggle()}}),{focusableProps:w}=(0,n.k)(e,a),k=(0,i.d)(h,w),R=(0,t.z)(e,{labelable:!0});return(0,l.y)(a,r.isSelected,r.setSelected),{labelProps:(0,i.d)(x,{onClick:e=>e.preventDefault()}),inputProps:(0,i.d)(R,{"aria-invalid":v||"invalid"===m||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":s||void 0,onChange:e=>{e.stopPropagation(),r.setSelected(e.target.checked)},disabled:d,...null==u?{}:{value:u},name:c,type:"checkbox",...k}),isSelected:r.isSelected,isPressed:g||y,isDisabled:d,isReadOnly:s,isInvalid:v||"invalid"===m}}}};