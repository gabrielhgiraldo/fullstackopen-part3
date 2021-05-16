(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(15),o=t.n(a),c=(t(20),t(6)),i=t(3),u=t(0),s=function(e){var n=e.nameFilter,t=e.handleFilterChange;return Object(u.jsxs)("div",{children:["filter shown with: ",Object(u.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.notification;return null==n?null:Object(u.jsx)("div",{className:n.type,children:n.message})},l=function(e){var n=e.addNewPerson,t=e.handleNameChange,r=e.newNumber,a=e.newName,o=e.handleNumberChange;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:a,onChange:t})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",value:r,onChange:o})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},m=function(e){var n=e.personsToShow,t=e.removePerson;return n.map((function(e){return Object(u.jsxs)("div",{children:[e.name," ",e.number,Object(u.jsx)("button",{onClick:function(){return t(e)},children:"remove"})]},e.name)}))},j=t(4),b=t.n(j),f="/api/persons",h={getAll:function(){return b.a.get(f)},create:function(e){return b.a.post(f,e)},remove:function(e){return b.a.delete("".concat(f,"/").concat(e))},update:function(e){return b.a.put("".concat(f,"/").concat(e.id),e)}},O=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(""),j=Object(i.a)(o,2),b=j[0],f=j[1],O=Object(r.useState)(""),v=Object(i.a)(O,2),p=v[0],g=v[1],w=Object(r.useState)(""),x=Object(i.a)(w,2),C=x[0],N=x[1],y=Object(r.useState)({}),S=Object(i.a)(y,2),k=S[0],P=S[1];Object(r.useEffect)((function(){h.getAll().then((function(e){a(e.data)}))}),[]);var F=C.length?t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())})):t;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(d,{notification:k}),Object(u.jsx)(s,{nameFilter:C,handleFilterChange:function(e){return N(e.target.value)}}),Object(u.jsx)("h2",{children:"add a new"}),Object(u.jsx)(l,{newName:b,addNewPerson:function(e){e.preventDefault();var n={name:b,number:p};if(t.some((function(e){return e.name.toLowerCase()===b.toLowerCase()}))){n=Object(c.a)(Object(c.a)({},n),{},{id:t.find((function(e){return e.name===n.name})).id});var r="".concat(n.name," is already added to the phonebook, replace the old number with a new one?");window.confirm(r)&&h.update(n).then((function(){var e=t.map((function(e){return e.id===n.id?n:e}));a(e),P({message:"updated ".concat(n.name),type:"success"}),setTimeout((function(){P(null)}),5e3)})).catch((function(e){P({message:"Information of ".concat(n.name," has already been removed from server"),type:"error"}),a(t.filter((function(e){return e.id!==n.id})))}))}else h.create(n).then((function(e){a(t.concat(e.data)),P({message:"added ".concat(n.name),type:"success"}),setTimeout((function(){P(null)}),5e3)}),(function(){return console.log("failed to add person")}));f(""),g("")},handleNameChange:function(e){return f(e.target.value)},newNumber:p,handleNumberChange:function(e){return g(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(m,{personsToShow:F,removePerson:function(e){window.confirm("remove ".concat(e.name,"?"))&&h.remove(e.id).then((function(){return a(t.filter((function(n){return n.id!==e.id})))}),(function(){return console.log("failed to remove ".concat(e.name))}))}})]})};o.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.cee26ecb.chunk.js.map