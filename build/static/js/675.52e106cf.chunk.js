"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[675],{1675:function(e,i,a){a.r(i),a.d(i,{default:function(){return Z}});var t=a(4165),n=a(5861),r=a(9439),s=a(2791),l=a(4345),u=a(1453),o=a(5094),c=a(1595),d=a(7689),p=a(7212),f=a(8556),v=a(8888),h=a(9434),V=a(184);function Z(){var e=(0,s.useState)(!1),i=(0,r.Z)(e,2),a=i[0],Z=i[1],x=(0,s.useState)(null),y=(0,r.Z)(x,2),m=y[0],b=y[1],C=(0,d.UO)().caseID,g=(0,d.s0)(),T=(0,h.v9)((function(e){return e.userAccount.UserId})),j=(0,o.c)({cardNo:{value:" ",isValid:!1},description:{value:" ",isValid:!1}},!1),N=(0,r.Z)(j,2),k=N[0],w=N[1],I=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(i){var a,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.preventDefault(),Z(!0),a={cardNo:k.inputs.cardNo.value,description:k.inputs.description.value},e.prev=3,e.next=6,p.Z.post("/public/update/".concat(C),a);case 6:n=e.sent,console.log(n.data.message),Z(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),Z(!1),e.t0.response?(b(e.t0.response.data.message),console.log(e.t0.response.status),console.log(m)):b(e.t0.message);case 15:null===m&&g("/".concat(T,"/cases"));case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(i){return e.apply(this,arguments)}}();return(0,V.jsxs)(s.Fragment,{children:[a&&(0,V.jsx)(f.Z,{asOverlay:!0}),(0,V.jsx)(v.Z,{error:m,onClear:function(){b(null)}}),(0,V.jsxs)("form",{className:"case-form",onSubmit:I,children:[(0,V.jsx)(l.Z,{id:"cardNo",type:"text",label:"ID-Card No. :",element:"input",errorText:"This is a required field. Please Enter a valid 12 digit ID Card No.",validators:[(0,c.CP)(12),(0,c.hg)()],onInput:w,initialValue:k.inputs.cardNo.value,initialValidity:k.inputs.cardNo.isValid}),(0,V.jsx)(l.Z,{id:"description",type:"text",label:"Case Description:  ",element:"textarea",errorText:"This is a required Field.",validators:[(0,c.hg)()],onInput:w,initialValue:k.inputs.description.value,initialValidity:k.inputs.description.isValid}),(0,V.jsx)(u.Z,{type:"submit",disabled:!k.isValid,children:"Update"})]})]})}},4345:function(e,i,a){a.d(i,{Z:function(){return o}});var t=a(9439),n=a(1413),r=a(2791),s=a(1595),l=a(184);function u(e,i){switch(i.type){case"ALTER":return(0,n.Z)((0,n.Z)({},e),{},{value:i.val,isValid:(0,s.Gu)(i.val,i.validators)});case"TOUCH":return(0,n.Z)((0,n.Z)({},e),{},{isTouched:!0});default:return e}}function o(e){var i=(0,r.useReducer)(u,{isValid:e.initialValid||!1,value:e.initialValue||"",isTouched:!1}),a=(0,t.Z)(i,2),n=a[0],s=a[1];function o(i){s({type:"ALTER",val:i.target.value,validators:e.validators})}function c(e){s({type:"TOUCH"})}var d=e.id,p=e.onInput,f=n.isValid,v=n.value;(0,r.useEffect)((function(){p(d,v,f)}),[d,f,v,p]);var h="input"===e.element?(0,l.jsx)("input",{type:e.type,placeholder:e.placeholder,id:e.id,onChange:o,onBlur:c,value:n.value,autoComplete:"off"}):(0,l.jsx)("textarea",{type:e.type,placeholder:e.placeholder,id:e.id,rows:e.rows||3,onChange:o,onBlur:c,value:n.value,autoComplete:"off"});return(0,l.jsxs)("div",{className:"form-control ".concat(!n.isValid&&n.isTouched&&"form-control--invalid"),children:[(0,l.jsx)("label",{htmlFor:e.id,children:e.label}),h,!n.isValid&&n.isTouched&&(0,l.jsx)("p",{children:e.errorText})]})}},5094:function(e,i,a){a.d(i,{c:function(){return u}});var t=a(9439),n=a(4942),r=a(1413),s=a(2791);function l(e,i){switch(i.type){case"bhardiya":var a,t=!0;for(a in e.inputs)if(a===i.id){if(!e.inputs[a])continue;t=t&&i.isValid}else t=t&&e.inputs[a].isValid;return(0,r.Z)((0,r.Z)({},e),{},{inputs:(0,r.Z)((0,r.Z)({},e.inputs),{},(0,n.Z)({},i.id,{value:i.val,isValid:i.isValid})),isValid:t});case"nayiParchi":return{inputs:i.inputs,isValid:i.isValid};default:return e}}function u(e,i){var a=(0,s.useReducer)(l,{inputs:e,isValid:i}),n=(0,t.Z)(a,2),r=n[0],u=n[1];return[r,(0,s.useCallback)((function(e,i,a){u({type:"bhardiya",val:i,isValid:a,id:e})}),[]),(0,s.useCallback)((function(e,i){u({type:"nayiParchi",inputs:e,isValid:i})}),[])]}}}]);
//# sourceMappingURL=675.52e106cf.chunk.js.map