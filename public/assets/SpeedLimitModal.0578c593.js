import{m as l}from"./vue.caa717e6.js";import{M as n,F as r,ax as m,r as c,Q as a,s as p,t as d,V as _,v as u,z as h,A as f,B as x,a as L,a5 as b,E as g,x as o}from"./index.e8ec4e67.js";import{_ as k}from"./VDialog.7bb40f31.js";import{_ as v}from"./VContainer.f8e11ece.js";const w={name:"SpeedLimitModal",mixins:[n,r],props:{mode:String,hash:String},data(){return{limit:"",mdiSpeedometer:m,mdiClose:c}},computed:{...l(["getTorrent"]),torrent(){return this.getTorrent(this.hash)},isPhone(){return this.$vuetify.breakpoint.xsOnly}},async created(){switch(this.mode){case"download":if(this.isGlobal()){const s=await a.getGlobalDownloadLimit();this.limit=this.formatLimit(s)}else this.limit=this.formatLimit(this.torrent?.dl_limit);break;case"upload":if(this.isGlobal()){const s=await a.getGlobalUploadLimit();this.limit=this.formatLimit(s)}else this.limit=this.formatLimit(this.torrent?.up_limit);break}},methods:{setLimit(){switch(this.mode){case"download":this.isGlobal()?a.setGlobalDownloadLimit(this.exportLimit()):a.setDownloadLimit([this.hash],this.exportLimit());break;case"upload":this.isGlobal()?a.setGlobalUploadLimit(this.exportLimit()):a.setUploadLimit([this.hash],this.exportLimit());break}this.close()},isGlobal(){return!this.torrent},formatLimit(s){return s>0?s/1024:"\u221E"},exportLimit(){return this.limit>0?this.limit*1024:NaN},close(){this.dialog=!1}}};var C=function(){var t=this,i=t._self._c;return i(k,{attrs:{scrollable:"","content-class":"rounded-form","max-width":"500px",fullscreen:t.isPhone},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i(d,[i(_,{staticClass:"pa-0"},[i(u,{staticClass:"ma-4 primarytext--text"},[i("h3",[t._v("Limit "+t._s(t._f("titleCase")(t.mode)))])])],1),i(h,[i(v,[i(f,[i(x,[i(L,{attrs:{autofocus:"",clearable:"",label:t.$t("modals.speedLimit.speedLimit"),"prepend-inner-icon":t.mdiSpeedometer,suffix:"KB/s"},on:{focus:function(e){return e.target.select()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setLimit.apply(null,arguments)}},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1)],1)],1)],1),i(b),i(g,{staticClass:"justify-end"},[i(o,{staticClass:"accent white--text elevation-0 px-4",on:{click:t.setLimit}},[t._v(" Save ")]),i(o,{staticClass:"error white--text elevation-0 px-4",on:{click:t.close}},[t._v(" Cancel ")])],1)],1)],1)},y=[],G=p(w,C,y,!1,null,null,null,null);const D=G.exports;export{D as default};