(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c4629cb"],{"24c9":function(t,e,a){"use strict";var i=a("ab2e"),s=a.n(i);s.a},"3c82":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-loading",{attrs:{"is-full-page":!1,active:t.showLoader},on:{"update:active":function(e){t.showLoader=e}}}),t._l(t.campaignList,function(e){return a("campaign",{key:e.id,attrs:{name:e.name,description:e.entry,createdAt:e.created_at.date,imgSource:e.image,campaignId:e.id},on:{selected:t.campaignSelected}})})],2)])},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-64x64"},[a("img",{attrs:{src:t.imgSource,alt:"Image"}})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(t.name))]),t._v(t._s(t.description))])]),a("nav",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-left"},[a("button",{staticClass:"button",on:{click:function(e){t.$emit("selected",t.campaignId)}}},[t._v("Select")])])])])])])},c=[],l={name:"Campaign",props:{imgSource:{type:String},name:{type:String},description:{type:String},createdAt:{type:String},campaignId:{type:Number}}},o=l,r=a("2877"),m=Object(r["a"])(o,n,c,!1,null,null,null);m.options.__file="Campaign.vue";var p=m.exports,d={name:"SelectCampaign",components:{Campaign:p},data(){return{showLoader:!0}},computed:{campaignList(){return this.$store.state.all_campaigns}},mounted(){this.$store.dispatch("getCampaigns").then(()=>{this.showLoader=!1})},methods:{campaignSelected(t){let e=!0;for(let a=0;a<this.campaignList.length&&e;a++)this.campaignList[a].id===t&&(e=!1,this.$store.commit("setSelectedCampaign",this.campaignList[a]),this.$router.push("/setup/participants"))}}},u=d,g=(a("24c9"),Object(r["a"])(u,i,s,!1,null,"0b91cd9a",null));g.options.__file="SelectCampaign.vue";e["default"]=g.exports},ab2e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0c4629cb-legacy.b9d1daa9.js.map