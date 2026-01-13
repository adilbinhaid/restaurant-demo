loaded_h_0(function(_){var window=this;
_.t("pw70Gc");
var RGb=function(a){let b=0;for(;a;)b++,a=a.parentElement;return b},SGb=function(a,b){return a.depth-b.depth||Number(a.EQc)-Number(b.EQc)||b.jjc-a.jjc},TGb=new Map,UGb=0,VGb=class extends _.QXa{AIa(a){a instanceof Element&&TGb.has(a)&&TGb.set(a,UGb)}},XGb,WGb;_.olb=VGb;XGb=function(a,b){let c=_.gs(a).Dc(()=>{WGb(a)});b&&(c=c.window(b));return c.build()};_.YGb=function(a,b,c,d){return a.CUc(b,()=>{a.Am.KU(b,c,d)})};
_.ZGb=function(a,b){const c="function"==typeof _.Wu&&b instanceof _.Wu?b:void 0,d=new VGb;d.setLogger(a.Am.eM());return a.CUc(c.node,()=>{c.render(d)})};WGb=function(a){if(a.Aa.length!==0){TGb=new Map(a.Aa.map(b=>[b.element,0]));a.Aa.sort(SGb);for(const b of a.Aa){const c=TGb.get(b.element);b.jjc>(c||0)&&(UGb=b.jjc,TGb.set(b.element,UGb),b.kAe())}a.Aa=[]}};
_.$Gb=class extends _.co{static Sa(){return{service:{Am:_.Gr}}}constructor(a){super();this.Aa=[];this.Am=a.service.Am}execute(a){return XGb(this,a)()}CUc(a,b){({EQc:c=!1}={});var c;this.Aa.push({element:a,depth:RGb(a),EQc:c,kAe:()=>b(),jjc:this.Aa.length+1});return this}KU(a,b,c){this.Am.KU(a,b,c)}RX(a,b,c){this.Am.RX(a,b,c)}Ld(a,b){return this.Am.Ld(a,b)}oa(a,b){return this.Am.oa(a,b)}};_.Lf(_.lXa,_.$Gb);
_.v();
_.t("EVNhjf");
_.aHb=new _.Jf(_.mXa);
_.v();
_.Wf(_.kXa);
_.t("QIhFr");
_.Lf(_.nXa,class extends _.co{static Sa(){return{service:{component:_.Nr,scheduler:_.aHb}}}constructor(a){super();this.Aa=a.service.component;this.Ba=document.body;this.Da=a.service.scheduler;_.zg(this.Ba,"UjQMac",b=>{b=b.data;b.YPa&&b.message&&_.gHb(b.YPa,b.message,b)})}async Ca(a,b){try{_.y(await _.y(this.oa(a,[],[],!0,b)))}finally{_.y()}}oa(a,b,c,d=!1,e){if(!this.Ba.contains(a))return _.lg();const f={};return this.Aa.Iia(a).then(g=>_.Qlb(g).then(h=>{const k=_.amb(this.Aa.wu(g.id,g.getParams()).Aa(g.oa),
Object.assign({wCa:-1},e)),l=h.Da;h=h.Iia().v1a;const n=new Set(Object.keys(h));Object.assign(f,h);if(d){h={};for(let q in l)n.has(q)?delete f[q]:h[q]=l[q];return k.oa(h).fetch()}b.forEach((q,r)=>{for(const A in l){if(!l[A])continue;var u=l[A];const G=_.pTa(q).kDa,L=c[r];G===_.pTa(u).kDa&&L?u.IMa()?(u=u.clone(),L(u),l[A]=u.If()):L(u):n.has(A)&&_.nYa(u,G)&&(delete f[A],delete l[A])}});return k.oa(l).fetch()}).then(h=>{const k=h.Iia().v1a;Object.assign(k,f);return this.Da.CUc(a,()=>h.bkb(a)).execute()}))}});
_.v();
_.t("vfuNJf");
_.rmb=class extends _.co{oa(){}Ca(){}};_.Lf(_.jXa,_.rmb);
_.v();
_.t("iFQyKf");
_.Elb=new _.Jf(_.kXa);
_.v();
_.t("hc6Ubd");
_.Wf(_.$wa);_.xmb=function(a){return a.Ba.Iia(a.oa).then(b=>b.Ba)};_.ymb=function(a,b){var c={wCa:-1};return a.Ba.Iia(a.oa).then(d=>{d.update(0,b);return a.Ea.Ca(a.oa,c)})};
_.Pr=class extends _.fi{static Sa(){return{service:{component:_.Nr,scheduler:_.Elb}}}constructor(a){super();this.oa=_.smb();this.Ba=a.service.component;this.Ea=a.service.scheduler;this.Da=[];this.Aa=[];this.Ha=null;this.getData("p").string(null)}Mc(a){return this.Ea instanceof _.rmb||!this.oa.hasAttribute("autoupdate")?super.Mc(a):{handler:(b,c,d)=>{this.Da.push(b);c==="UjQMac"&&d&&typeof d.YPa==="function"?this.Aa.push(d.YPa):c==="nDa8ic"?this.Aa.push(null):this.Aa.push(e=>{_.tb(e,b);return e});
this.Da.length===1&&_.ye(()=>{this.Ea.oa(this.oa,this.Da,this.Aa).then(()=>{this.Da=[];this.Aa=[]})})}}}trigger(a,b){_.Fg(_.sg(this.oa),a,b,!0,{_retarget:this.oa})}getParams(a){const b=this.getData("p").string(null);return b?_.ulb(b,c=>_.Yb(a,c)):this.Iia()?this.Iia().getParams():new a}tfb(){return this.Ba.Iia(this.oa).then(a=>_.Qlb(a)).then(a=>({template:a.Uf(),args:a.n3()}))}Iia(){return this.Ha}};_.Or(_.Sq,_.Pr);
_.v();
});
// Google Inc.
