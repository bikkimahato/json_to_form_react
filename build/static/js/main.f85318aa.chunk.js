(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(1),l=t(2),r=t(4),o=t(3),i=t(5),u=t(0),c=t.n(u),m=t(7),s=t.n(m),b=(t(15),t(8)),p=function(e){var n=e.label,t=e.name,a=e.val,l=void 0===a?[]:a,r=e.handleChange;return c.a.createElement("div",null,c.a.createElement("label",null,n),c.a.createElement("select",{name:t,onChange:r},c.a.createElement("option",{value:""}),l.map(function(e,n){return c.a.createElement("option",{key:n,value:e},e)})))},h=function(e){var n=e.label,t=e.name,a=e.val,l=e.handleChange;return c.a.createElement("div",null,c.a.createElement("label",null,n),c.a.createElement("input",{type:"text",value:a,name:t,onChange:l}))},f=function(e){function n(){var e,t;Object(a.a)(this,n);for(var l=arguments.length,i=new Array(l),u=0;u<l;u++)i[u]=arguments[u];return(t=Object(r.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(i)))).state={},t.onSubmit=function(e){e.preventDefault(),t.props.onSubmit&&t.props.onSubmit(t.state)},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t}return Object(i.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this,n=this.props.config.items;return c.a.createElement("form",{onSubmit:function(n){e.onSubmit(n)}},n.map(function(n,t){return"TextField"===n.type?c.a.createElement(h,{key:t,label:n.label,name:n.name,val:n.value,handleChange:e.handleChange}):"DropDown"===n.type?c.a.createElement(p,{key:t,label:n.label,name:n.name,val:n.values,handleChange:e.handleChange}):null}),c.a.createElement("button",{type:"submit"},"Submit"))}}]),n}(c.a.Component),v=function(e){function n(){var e,t;Object(a.a)(this,n);for(var l=arguments.length,i=new Array(l),u=0;u<l;u++)i[u]=arguments[u];return(t=Object(r.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(i)))).state={},t.flexiConfig={items:[{key:1,name:"person_name",label:"Person's Name",type:"TextField"},{key:2,name:"email",label:"Email",type:"TextField"},{key:3,name:"country",label:"Country",type:"DropDown",values:["India","US"]},{key:4,name:"states",label:"Person's State",type:"DropDown",values:["Maharashtra","Kerala","Tamil Nadu"]}]},t.onFlexiSubmit=function(e){console.log(e),t.setState({config:e})},t}return Object(i.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.flexiConfig,n=this.onFlexiSubmit;return c.a.createElement(f,{onSubmit:function(e){return n(e)},config:e})}}]),n}(c.a.Component),y=document.getElementById("root");s.a.render(c.a.createElement(v,null),y)},9:function(e,n,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f85318aa.chunk.js.map