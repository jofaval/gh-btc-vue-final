"use strict";(self["webpackChunkgh_btc_vue_final"]=self["webpackChunkgh_btc_vue_final"]||[]).push([[586],{5586:function(t,s,e){e.r(s),e.d(s,{default:function(){return b}});var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page__post-detail px-3"},[t.show?e("PostDetailComponent",{attrs:{post:t.post,user:t.user}}):t._e()],1)},i=[],n=e(8935),r=e(2936),a=e(9408),u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.show?e("div",{staticClass:"post-detail"},[e("h1",{staticClass:"post-detail__title h1"},[t._v(t._s(t.post.title))]),t.user?e("h2",{staticClass:"post-detail__subtitle post-detail__author h5"},[t._v(" Created by: "),e("UserLink",{attrs:{user:t.user}})],1):t._e(),e("p",{staticClass:"post-detail__body"},[t._v(t._s(t.post.body))])]):t._e()},h=[],l=e(2946),d=n["default"].extend({name:"PostDetailComponent",props:{post:{type:Object,required:!0},user:{type:Object,required:!0}},components:{UserLink:l.Z},data:function(){return{show:!0}},mounted:function(){this.shouldShow()},watch:{post:function(){this.shouldShow()}},methods:{shouldShow:function(){this.show=Boolean(this.post)&&Boolean(this.user)}}}),p=d,c=e(1001),f=(0,c.Z)(p,u,h,!1,null,"2e113127",null),_=f.exports,m=n["default"].extend({name:"PostDetailView",components:{PostDetailComponent:_},data:function(){return{post:{},user:{},show:!1}},mounted:function(){this.refresh()},watch:{post:function(){this.refresh()}},methods:{loadUser:function(){this.user=r.Z.getters.userByPostId(this.$route.params.postId)},loadPost:function(){this.post=r.Z.getters.postById(this.$route.params.postId)},shouldShow:function(){this.show=Boolean(this.post)&&Boolean(this.user)},refresh:function(){console.log("monta aquí y verás madrid",this.post,this.user),this.show=!1,this.loadUser(),this.loadPost(),(0,a.r1)(this.post.title),this.shouldShow(),console.log("monta aquí y verás madrid",JSON.stringify(this.post),JSON.stringify(this.user))}}}),w=m,v=(0,c.Z)(w,o,i,!1,null,"030b297f",null),b=v.exports}}]);
//# sourceMappingURL=586.ff2ad318.js.map