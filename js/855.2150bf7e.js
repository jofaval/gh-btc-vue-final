"use strict";(self["webpackChunkgh_btc_vue_final"]=self["webpackChunkgh_btc_vue_final"]||[]).push([[855],{5855:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact w-100 pt-sm-4 rounded"},[a("FormularyComponent")],1)},l=[],r=a(8935),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"formulary__container"},[e.show?a("b-form",{staticClass:"formulary p-sm-5 rounded",on:{submit:e.onSubmit,reset:e.onReset}},[a("FormularyFieldset",{attrs:{legend:"Contact information"}},[a("FormularyInput",{attrs:{name:"fullName",value:e.fullName,label:"Full name",required:!0,description:"Identify your self with your name",valid:e.checkFullName,invalidMessage:"Name must not start with numbers nor contain any quotations."}}),a("FormularyInput",{attrs:{name:"email",value:e.email,type:"email",label:"E-Mail",required:!0,description:"This email will be where we'll contact you.",valid:e.checkEmail,invalidMessage:"Email must be in a valid format, ex: contact@example.com.es."}})],1),a("FormularyFieldset",{attrs:{legend:"Details"}},[a("FormularyInput",{attrs:{name:"subject",value:e.subject,label:"Subject",required:!0,description:"What it is that you want to contact us about? Make sure it's as descriptive as possible",valid:e.checkSubject,invalidMessage:"This field must not be empty."}}),a("FormularyInput",{attrs:{name:"message",value:e.message,type:"textarea",label:"Message",required:!0,description:"Please explain into further detail upon what you mentioned. Make sure it's as descriptive as possible",valid:e.checkMessage,invalidMessage:"This field must not be empty."}})],1),a("div",{staticClass:"formulary__submits mt-3 btn-group w-100"},[a("BaseButton",{staticClass:"formulary__submits__submit",attrs:{disabled:e.disabled,disabledText:"All fields must be filled before submitting, check that the email is properly formatted"}},[e._v("Submit")]),a("div",{staticClass:"formulary__submits__submit__container btn"},[a("b-button",{staticClass:"formulary__submits__submit w-100",attrs:{type:"reset",variant:"outline-success"}},[e._v("Clear")])],1)],1)],1):e._e()],1)},i=[],u=a(8531),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-group",{staticClass:"formulary__input__container",attrs:{id:e.name+"-form-group",label:e.label,"label-for":e.name,description:e.description}},["textarea"===e.type?a("b-form-textarea",{class:"formulary__textarea "+e.cssClass+" textarea "+(e.valid?"border-success":"border-danger"),attrs:{name:e.name,id:e.name,required:e.required,value:e.value},on:{input:e.onValueChange}}):a("b-form-input",{ref:"formulary__input",class:"formulary__input "+e.cssClass+" "+e.type+" w-100 "+(e.valid?"border-success":"border-danger"),attrs:{type:e.type,name:e.name,id:e.name,value:e.value,required:e.required},on:{input:e.onValueChange}}),e.invalidMessage&&!e.valid?a("small",{staticClass:"formulary__input__invalid-msg form-text text-danger"},[e._v(e._s(e.invalidMessage))]):e._e()],1)},d=[],c=r["default"].extend({props:{type:{type:String,default:"text"},label:{type:String,default:"Label"},name:{type:String,required:!0},cssClass:{type:String,default:""},description:{type:String,default:""},required:{type:Boolean,default:!1},value:{type:String,required:!0},valid:{type:Boolean,default:!0},invalidMessage:{type:String,default:""}},methods:{onValueChange:function(e){u.Z.commit("updateFormField",{field:this.name,value:e})}}}),m=c,f=a(1001),p=(0,f.Z)(m,o,d,!1,null,"44847a1e",null),b=p.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"base-button__container btn"},[a("b-button",{staticClass:"base-button",attrs:{type:"submit",variant:"outline-"+e.variant,disabled:e.disabled}},[e._t("default")],2),e.display?a("small",{staticClass:"base-button__desc"},[e._v(e._s(e.disabledText))]):e._e()],1)},v=[],g=r["default"].extend({props:{variant:{type:String,default:"primary"},disabled:{type:Boolean,default:!1},disabledText:{type:String,default:""}},computed:{display:function(){return this.disabled&&!!this.disabledText&&!1}}}),y=g,h=(0,f.Z)(y,_,v,!1,null,"7b700a24",null),C=h.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",{staticClass:"formulary__fieldset p-3 my-3 rounded"},[a("span",{staticClass:"formulary__fieldset__legend legend"},[e._v(e._s(e.legend))]),e._t("default")],2)},F=[],k=r["default"].extend({props:{legend:{type:String,required:!0}}}),Z=k,w=(0,f.Z)(Z,x,F,!1,null,"03c1f275",null),S=w.exports,M=r["default"].extend({name:"FormularyComponent",components:{FormularyInput:b,BaseButton:C,FormularyFieldset:S},data:function(){return{show:!0,store:u.Z}},methods:{onSubmit:function(e){e.preventDefault(),console.log("Contact form submitted!",JSON.stringify(u.Z.getters.form))},onReset:function(e){var t=this;e.preventDefault(),u.Z.commit("clearFormValues",""),this.show=!1,this.$nextTick((function(){t.show=!0}))}},computed:{fullName:function(){return u.Z.getters.fullName},email:function(){return u.Z.getters.email},subject:function(){return u.Z.getters.subject},message:function(){return u.Z.getters.message},disabled:function(){return!(u.Z.getters.isFormFilled&&u.Z.getters.isFormValid)},checkFullName:function(){var e;return(null===(e=this.fullName)||void 0===e?void 0:e.length)<1||u.Z.getters.checkFullName},checkEmail:function(){var e;return(null===(e=this.email)||void 0===e?void 0:e.length)<1||u.Z.getters.checkEmail},checkSubject:function(){var e;return(null===(e=this.subject)||void 0===e?void 0:e.length)<1||u.Z.getters.checkSubject},checkMessage:function(){var e;return(null===(e=this.message)||void 0===e?void 0:e.length)<1||u.Z.getters.checkMessage}}}),q=M,E=(0,f.Z)(q,n,i,!1,null,"7827f2f8",null),N=E.exports,j=r["default"].extend({name:"ContactView",components:{FormularyComponent:N}}),T=j,B=(0,f.Z)(T,s,l,!1,null,"e87785c6",null),I=B.exports}}]);
//# sourceMappingURL=855.2150bf7e.js.map