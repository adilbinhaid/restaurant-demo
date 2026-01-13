loaded_h_0(function(_){var window=this;
_.t("G6wU6e");
_.yLF=new _.Jf(_.a1a);
_.v();
_.efe=_.x("Wn3aEc",[]);
_.t("Wn3aEc");
var gfe;gfe=function(a){if((0,_.ece)(a))return a;if((0,_.fQc)(a)){let c,d;a=(c=a.Ca())==null?void 0:(d=c.yf())==null?void 0:d.getExtension(_.CF);if(!a)return null}let b;return a.getType()===1?(b=a.getImage())!=null?b:null:null};
_.hfe=class extends _.fi{static Sa(){return{Jf:{lFb:_.LF}}}constructor(a){super();this.oa=a.Jf.lFb;this.Aa=_.rf();this.Ba=_.rf();this.results=new Map;a:{if(this.getData("vnora").Mb()){a=_.em("WA6vPb",this.Ca());if(a.length===1){a=Number(_.Rf(a[0],"count"));break a}a=_.em("LgL7He",this.Ca());if(a.length===1){a=Number(_.Rf(a[0],"count"));break a}}a=_.Ld(this.getData("count"),-1)}this.Da=a}Rca(){if(this.Da<0){const a=this.oa?_.p(this.oa,_.BF,2):null;return a?_.lg(a.zt()):_.lg([])}return this.Aa.promise}zt(){return this.Rca().then(a=>
a.map(gfe).filter(b=>b!=null))}EEc(){return this.Ba.promise}Tde(){return this.EEc().then(a=>{const b=new Map;for(const [c,d]of a){a=c;const e=gfe(d);e&&b.set(a,e)}return b})}YB(a,b){b&&_.ffe(b)&&this.results.set(a,b);if(--this.Da===0){this.Aa.resolve(Array.from(this.results.entries()).sort((c,d)=>_.FIa(c[0],d[0])).map(c=>c[1]));a=new Map;for(const [c,d]of this.results.entries()){b=c;const e=d;e&&a.set(b,e)}this.Ba.resolve(a)}}};_.Or(_.efe,_.hfe);
_.v();
_.QtC=_.x("Um3BXb",[_.efe]);
_.t("Um3BXb");
var CLF,ALF,DLF;_.BLF=function({construct:a}){ALF.push({construct:a})};CLF=_.Zb(_.AF);ALF=[];
DLF=class extends _.as{static Sa(){return{model:{Y$:_.hfe},Jf:{CTc:_.AF}}}constructor(a){super(a.Oa);this.Aa=!this.getData("ni").Mb();this.Yq=a.Jf.CTc;if((this.Ca=this.getData("au").Mb())&&this.Yq){var b=(b=this.getRoot().closest(_.go("jsname","uK8Ylc")).el())?_.Rf(b,"ved"):null;const e=CLF(this.Yq.serialize());if(b&&e&&e.vk()){var c;(c=e.getImage())!=null&&_.Qg(c,5,b)}this.Yq=e}a.model.Y$.YB(this.getRoot().el(),this.Yq);_.Gz(this);let d;(c=(d=this.Yq)==null?void 0:d.getImage())&&this.trigger("cEfxe",
c==null?void 0:c.getUniqueId());this.C2(a)}w4a(){let a,b;return(b=(a=this.Yq)==null?void 0:a.getImage())!=null?b:null}Da(a){var b=a.targetElement.parent();a=_.fm("srrRv",this.getRoot().el());b=_.fs(this,b.eq(0),"YsWoif").el();_.Nv([new _.Qn(b,"show")],{yc:b,userAction:9});_.Hg(b,"BUYwVb");a==null&&_.Gm(b,"display","inline-block")}Ea(a){const b=a.targetElement;a=a.targetElement.parent();a=_.fs(this,a.eq(0),"YsWoif").el();_.Nv([new _.Qn(a,"hide")],{yc:b.eq(0).el(),userAction:9});_.Gm(a,"display","none")}Pc(a){if(this.Yq&&
this.Yq.getId()){var b,c;(c=(b=a.event).preventDefault)==null||c.call(b);var d,e;(e=(d=a.event).stopPropagation)==null||e.call(d);this.trigger("PdWSXe",{Lv:a.event});var f;(a=(f=this.Yq)==null?void 0:f.getImage())&&this.trigger("Kc2lDe",a==null?void 0:a.getUniqueId())}}Tf(){this.notify("BUYwVb")}Df(){this.Aa||(_.Nv([new _.Qn(this.getRoot().el(),"show")]),this.Aa=!0)}hidden(){}C2(a){for(const b of ALF)b.construct(this,a)}Ba(){this.notify("BUYwVb");const a=!_.Biv;this.getRoot().setStyle("display",a?
"inline-flex":"unset");this.getRoot().removeAttr("aria-hidden");this.Df()}};DLF.prototype.$wa$bNsLWe=function(){return this.Ba};DLF.prototype.$wa$L6cTce=function(){return this.hidden};DLF.prototype.$wa$TSZdd=function(){return this.Df};DLF.prototype.$wa$AwdEqd=function(){return this.Tf};DLF.prototype.$wa$h5M12e=function(){return this.Pc};DLF.prototype.$wa$XEuVS=function(){return this.Ea};DLF.prototype.$wa$RrAr1=function(){return this.Da};DLF.prototype.$wa$TsqBdc=function(){return this.w4a};
_.cs(_.QtC,DLF);
var ELF=function(a,b,c,d){const e=a.Xa("tdeeNb");e.isEmpty()||(d=new _.In(_.hd(d.url)),c=d.get("imgrc")===c&&!d.get("imgdii")||d.get("vhid")===c,c||(a=a.getRoot(),e.hasClass("srrRv")&&(d=e.prev(),b.que(a,d))),e.toggleClass("srrRv",c))},GLF=function(a,b){if(!a.closest(g=>FLF.some(h=>g.classList.contains(h))).isEmpty()){var c=a.el().getBoundingClientRect();a=a.parent();a.hasClass("dECn0b")&&(a=a.closest(".T62xob"));var d=a.el().getBoundingClientRect();a=c.top===d.top;var e=Math.abs(d.bottom-c.bottom)<
8,f=Math.abs(d.left-c.left)<8;c=Math.abs(d.right-c.right)<8;b.toggleClass("Xn9Tkc",a&&f);b.toggleClass("oGwWse",a&&c);b.toggleClass("y0jvId",e&&c);b.toggleClass("lM9tvf",e&&f)}},FLF=["DhGrzc","l5X1Ye","o6uAG","OXEsB","T62xob"];
_.BLF({construct(a){const b=_.Ol(a.getData("docid"));b&&(_.Lyb?(document.addEventListener("viewerUpdated",f=>{f=f.detail.vhid.replace("e-","")===b;a.Xa("tdeeNb").toggleClass("srrRv",f)}),document.addEventListener("viewerClosed",()=>{a.Xa("tdeeNb").toggleClass("srrRv",!1)})):_.mh(a,{service:{mHc:_.NF,focus:_.yLF}}).then(f=>{const g=f.service.focus;f=f.service.mHc;f.addListener(h=>{ELF(a,g,b,h)});ELF(a,g,b,f.getState())},f=>void _.$e(f)));const c=a.getRoot();_.zg(c.el(),"qWWJ8e",()=>{GLF(c,a.Xa("tdeeNb"))});
GLF(c,a.Xa("tdeeNb"));let d=null;const e=a.Xa("qQjpJ").el();e&&(e.addEventListener("mouseenter",()=>{d===null&&(d=(0,_.Vn)(()=>{c.toggleClass("dB3j8",!0);d=null},50))}),e.addEventListener("mouseleave",()=>{d&&((0,_.Wn)(d),d=null);c.toggleClass("dB3j8",!1)}))}});
_.v();
_.mfC=_.x("Z2vhDb",[]);
_.t("Z2vhDb");
var eZC=_.WB("xg558"),fZC=_.WB("wCwf3e");var gZC=class extends _.as{static Sa(){return{ek:{ibc:eZC,Ilc:fZC}}}constructor(a){super(a.Oa);this.ibc=a.ek.ibc;this.Ilc=a.ek.Ilc}oa(a){this.ibc&&this.ibc(a)}Aa(a){this.Ilc&&this.Ilc(a)}};gZC.prototype.$wa$RAHB1d=function(){return this.Aa};gZC.prototype.$wa$rN5So=function(){return this.oa};_.cs(_.mfC,gZC);
_.v();
_.TtC=_.x("XN4wKf",[_.ir]);
_.t("XN4wKf");
var rMF=class extends _.as{static Sa(){return{service:{Cf:_.Wv}}}constructor(a){super(a.Oa);this.Cf=a.service.Cf}oa(){var a=this.getRoot().closest(_.fo("Lv2Cle"));_.Sh(this.getData("irtcp"),!1)&&a.find(".ZGKPYc").setStyle("max-height","unset");const b=_.no(a,"[data-ni]");_.Hg(a.el(),"XGRTMd");_.Hg(a.el(),"DdQV6c");this.getRoot().hide();_.Nv([new _.Qn(this.getRoot().el(),"hide")]);_.Ov(this.getRoot().el());a=_.no(a,".aQ9ZH");a.show();_.Nv([new _.Qn(a.el(),"show")]);this.Cf.FQ(b);return!1}};
rMF.prototype.$wa$in3Ghc=function(){return this.oa};_.cs(_.TtC,rMF);
_.v();
});
// Google Inc.
