"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[401],{7401:function(e,t,i){i.r(t),i.d(t,{default:function(){return y}});var n=i(1413),a=i(4165),r=i(5861),s=i(9439),l=i(2791),o=i(5094),c=i(9434),u=i(7689),d=i(7391),p=i(7212),f=i(4345),h=i(1453),v=i(2777),x=i(1595),m=(i(8768),i(8888)),j=i(8556),Z=i(184);function y(){var e=(0,c.v9)((function(e){return e.userAccount.UserId})),t=(0,c.v9)((function(e){return e.userAccount.userName})),i=(0,l.useState)(!1),y=(0,s.Z)(i,2),C=y[0],b=y[1],V=(0,l.useState)(!1),g=(0,s.Z)(V,2),w=g[0],A=g[1],D=function(){J(" Application Not Submitted! Recheck your Application and ADD CASE again."),b(!1),A(!1)},T=(0,o.c)({aadhar_no:{value:"",isValid:!1},courtName:{value:"",isValid:!1},caseDesc:{value:"",isValid:!1}},!1),N=(0,s.Z)(T,2),S=N[0],k=N[1],I=function(){b((function(e){return!e}))},_=(0,l.useState)({court:"",description:"",judge:""}),B=(0,s.Z)(_,2),E=B[0],R=B[1],H=(0,l.useState)(!1),O=(0,s.Z)(H,2),P=O[0],U=O[1],F=(0,l.useState)(!1),M=(0,s.Z)(F,2),Y=M[0],q=M[1],G=(0,l.useState)(""),L=(0,s.Z)(G,2),z=L[0],J=L[1],K=(0,u.s0)(),Q=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(i){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.preventDefault(),R({court:S.inputs.courtName.value,description:S.inputs.caseDesc.value,location_city:"Delhi",location_pincode:1100998,judge:"To Be Decided",plaintiff:e}),A(!0),I();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function W(e){return(0,Z.jsx)(d.Z,(0,n.Z)({elevation:6,variant:"filled"},e))}var X=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(),q(!0),e.prev=2,e.next=5,p.Z.post("/admin/newcase",E);case 5:t=e.sent,console.log(t.data.added_NewCase),q(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),q(!1),e.t0.response?(J(e.t0.response.data.message),console.log(e.t0.response.status),console.log(z)):J(e.t0.message);case 14:U(!0),""===z&&K("/");case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return(0,Z.jsxs)(l.Fragment,{children:[P&&(0,Z.jsx)(W,{severity:"success",color:"info",children:"Success! New Case registered. Check out in My Cases tab"}),(0,Z.jsxs)(v.Z,{show:w&&C,closeBox:D,header:"Confirm Your New Case Application ",contentClass:"case-item__modal-content",footerClass:"case-item__modal-actions",footer:(0,Z.jsxs)("span",{children:[(0,Z.jsx)("p",{style:{fontSize:13,textAlign:"left"},children:" I hereby confirm all above details for my new case application. Correctness of all details while verification is my responsibility. "}),(0,Z.jsx)(h.Z,{onClick:X,children:"SUBMIT"}),(0,Z.jsx)(h.Z,{danger:!0,onClick:D,children:"GO BACK "})]}),children:[(0,Z.jsxs)("h5",{children:[(0,Z.jsx)("b",{children:"Registered User-ID : "}),(0,Z.jsx)("tt",{children:e})]}),(0,Z.jsxs)("h4",{children:[(0,Z.jsx)("b",{children:"Your Full Name : "}),(0,Z.jsx)("em",{children:t})]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"Court Name : "}),(0,Z.jsx)("em",{children:E.court})]}),(0,Z.jsxs)("h4",{children:[(0,Z.jsx)("b",{children:"Description : "}),(0,Z.jsx)("em",{children:E.description})]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"Judge : "}),(0,Z.jsx)("em",{children:E.judge})]})]}),Y&&(0,Z.jsx)(j.Z,{asOverlay:!0}),(0,Z.jsx)(m.Z,{error:z,onClear:function(){J(null)}}),(0,Z.jsxs)("form",{className:"case-form",onSubmit:Q,children:[(0,Z.jsx)(f.Z,{id:"aadhar_no",element:"input",type:"text",label:"Your AADHAR/ID card no. ",placeHolder:"Enter your Aadhar Card NO. / Voter ID no. ",errorText:"Please Enter a valid no. ",validators:[(0,x.CP)(12)],onInput:k}),(0,Z.jsx)(f.Z,{id:"courtName",element:"textarea",type:"text",label:"Court Name",placeHolder:"Name of your Court",errorText:"This is a required field. ",validators:[(0,x.hg)()],onInput:k}),(0,Z.jsx)(f.Z,{id:"caseDesc",element:"textarea",type:"text",label:"Case Description",placeHolder:" Brief Summary of your case Application (200 words ).",errorText:"This is a required field! Minimum 10 words. ",validators:[(0,x.hg)(),(0,x.CP)(10)],onInput:k}),(0,Z.jsx)(h.Z,{type:"submit",disabled:!S.isValid,children:"ADD CASE"})]})]})}},4345:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(9439),a=i(1413),r=i(2791),s=i(1595),l=i(184);function o(e,t){switch(t.type){case"ALTER":return(0,a.Z)((0,a.Z)({},e),{},{value:t.val,isValid:(0,s.Gu)(t.val,t.validators)});case"TOUCH":return(0,a.Z)((0,a.Z)({},e),{},{isTouched:!0});default:return e}}function c(e){var t=(0,r.useReducer)(o,{isValid:e.initialValid||!1,value:e.initialValue||"",isTouched:!1}),i=(0,n.Z)(t,2),a=i[0],s=i[1];function c(t){s({type:"ALTER",val:t.target.value,validators:e.validators})}function u(e){s({type:"TOUCH"})}var d=e.id,p=e.onInput,f=a.isValid,h=a.value;(0,r.useEffect)((function(){p(d,h,f)}),[d,f,h,p]);var v="input"===e.element?(0,l.jsx)("input",{type:e.type,placeholder:e.placeholder,id:e.id,onChange:c,onBlur:u,value:a.value,autoComplete:"off"}):(0,l.jsx)("textarea",{type:e.type,placeholder:e.placeholder,id:e.id,rows:e.rows||3,onChange:c,onBlur:u,value:a.value,autoComplete:"off"});return(0,l.jsxs)("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid"),children:[(0,l.jsx)("label",{htmlFor:e.id,children:e.label}),v,!a.isValid&&a.isTouched&&(0,l.jsx)("p",{children:e.errorText})]})}},5094:function(e,t,i){i.d(t,{c:function(){return o}});var n=i(9439),a=i(4942),r=i(1413),s=i(2791);function l(e,t){switch(t.type){case"bhardiya":var i,n=!0;for(i in e.inputs)if(i===t.id){if(!e.inputs[i])continue;n=n&&t.isValid}else n=n&&e.inputs[i].isValid;return(0,r.Z)((0,r.Z)({},e),{},{inputs:(0,r.Z)((0,r.Z)({},e.inputs),{},(0,a.Z)({},t.id,{value:t.val,isValid:t.isValid})),isValid:n});case"nayiParchi":return{inputs:t.inputs,isValid:t.isValid};default:return e}}function o(e,t){var i=(0,s.useReducer)(l,{inputs:e,isValid:t}),a=(0,n.Z)(i,2),r=a[0],o=a[1];return[r,(0,s.useCallback)((function(e,t,i){o({type:"bhardiya",val:t,isValid:i,id:e})}),[]),(0,s.useCallback)((function(e,t){o({type:"nayiParchi",inputs:e,isValid:t})}),[])]}}}]);
//# sourceMappingURL=401.c99d9621.chunk.js.map