import{u as q}from"./asyncData.f7130980.js";import{h as g}from"./preview.77f8c0c0.js";import{q as m}from"./query.a459bb4c.js";import{f as S,A as b,k,m as C,v as N,y as _}from"./entry.7f04f8b2.js";import"./utils.6db15011.js";const x=S({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(i){const{path:t,only:r,without:n,where:a,sort:l,limit:o,skip:f,locale:s,find:d}=b(i),h=k(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")});C(()=>i,()=>p(),{deep:!0});const{data:v,refresh:p}=await q(`content-query-${g(i)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),n.value&&(e=e.without(n.value)),a.value&&(e=e.where(a.value)),l.value&&(e=e.sort(l.value)),o.value&&(e=e.limit(o.value)),f.value&&(e=e.skip(f.value)),s.value&&(e=e.where({_locale:s.value})),d.value==="one"?e.findOne():d.value==="surround"?t.value?e.findSurround(t.value):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find()):e.find()});return{isPartial:h,data:v,refresh:p}},render(i){var y;const t=N(),{data:r,refresh:n,isPartial:a,path:l,only:o,without:f,where:s,sort:d,limit:h,skip:v,locale:p,find:e}=i,u={path:l,only:o,without:f,where:s,sort:d,limit:h,skip:v,locale:p,find:e};if(u.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:u,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((y=r==null?void 0:r.body)!=null&&y.children.length))return t.empty({props:u,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:u,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:n,isPartial:a,props:u,...this.$attrs}):((c,w)=>_("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:c,data:w},null,2)))("default",{data:r,props:u,isPartial:a})}});export{x as default};
