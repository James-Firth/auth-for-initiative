(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ed8a873"],{"408c":function(t,a,e){"use strict";var n=e("7072"),s=e.n(n);s.a},5783:function(t,a,e){},7072:function(t,a,e){},"815e":function(t,a,e){"use strict";var n=e("5783"),s=e.n(n);s.a},a9e5:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"init-wrapper"},[e("p",[t._v("\n    Highlighted Character is the current one in initiative, use the buttons below to move initiative along\n  ")]),e("button",{staticClass:"button",on:{mousedown:t.prevCombatant}},[t._v("Previous Combatant")]),e("button",{staticClass:"button is-primary",on:{mousedown:t.nextCombatant}},[t._v("Move to next Combatnat")]),e("ul",{directives:[{name:"sortable",rawName:"v-sortable",value:{onEnd:t.reorder},expression:"{ onEnd: reorder}"}],staticClass:"flex"},t._l(t.combatParticipants,function(a){return e("li",{key:a.id,staticClass:"list-group-item"},[e("combatant",{attrs:{mob:a,open:!1,selected:t.currentCombatantId===a.id}})],1)}))])},s=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-collapse",{staticClass:"card",class:{current:t.selected},attrs:{open:t.open},scopedSlots:t._u([{key:"trigger",fn:function(a){return e("div",{staticClass:"card-header"},[e("div",{staticClass:"card-header-title"},[e("figure",{staticClass:"image is-48x48"},[t.mob.image?e("img",{attrs:{src:t.mob.image,alt:"Image"}}):t._e()]),e("p",[t._v(t._s(t.mob.name))])]),e("a",{staticClass:"card-header-icon"},[e("b-icon",{attrs:{icon:a.open?"chevron-down":"chevron-up"}})],1)])}}])},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("p",[t._v("Character info goes here in the future.")])])]),e("footer",{staticClass:"card-footer"},[e("a",{staticClass:"card-footer-item"},[t._v("Killed/Out")]),e("a",{staticClass:"card-footer-item"},[t._v("Must roll Save on Turn")])])])},o=[],r={name:"Combatant",props:{mob:{type:Object},open:{type:Boolean},selected:{type:Boolean}}},c=r,u=(e("815e"),e("2877")),m=Object(u["a"])(c,i,o,!1,null,"623abdea",null);m.options.__file="Combatant.vue";var l=m.exports,d={name:"Initiative",components:{Combatant:l},data(){return{currentCombatantId:null,currentCombatantIndex:0}},computed:{combatParticipants(){return this.$store.state.combatParticipants}},methods:{modulo(t,a){return(t%a+a)%a},nextCombatant(){this.currentCombatantIndex=this.modulo(this.currentCombatantIndex+1,this.combatParticipants.length),this.currentCombatantId=this.combatParticipants[this.currentCombatantIndex].id},prevCombatant(){this.currentCombatantIndex=this.modulo(this.currentCombatantIndex+1,this.combatParticipants.length),this.currentCombatantId=this.combatParticipants[this.currentCombatantIndex].id},reorder({oldIndex:t,newIndex:a}){const e=this.combatParticipants,n=e.splice(t,1)[0];e.splice(a,0,n),this.$store.commit("setAllCombatCharacters",e)}},beforeMount(){this.$store.state.campaign?0===this.combatParticipants.length&&(this.$toast.open({message:"Must pick participants",type:"is-warning"}),this.$router.push("/setup/participants")):(this.$toast.open({message:"Must pick a campaign",type:"is-warning"}),this.$router.push("/setup/campaigns"))},mounted(){this.combatParticipants.length>0&&(this.currentCombatantId=this.combatParticipants[0].id,this.currentCombatantIndex=0)}},p=d,b=(e("408c"),Object(u["a"])(p,n,s,!1,null,"3bf057b0",null));b.options.__file="Initiative.vue";a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-5ed8a873.d1a85f0d.js.map