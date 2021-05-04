(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{23:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a,c,r=n(1),i=n(14),s=n.n(i),o=(n(23),n(11)),l=n(18),d=n(3),u=n(4),b=n(9),j=n(8),h=n(29),m=n(2),p=n(5),O=n(6),f=O.a.form(a||(a=Object(p.a)(["\n  width: 200px;\n  border: 2px solid black;\n  padding: 5px 10px;\n"]))),x=n(0),C=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",name:"",number:""},t.onHandleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state),t.props.onCheckDuplicateName(t.state.name),t.setState({contacts:[],name:"",filter:"",number:""})},t.onHandleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(f,{onSubmit:this.onHandleSubmit,children:[Object(x.jsxs)("label",{children:["Name",Object(x.jsx)("input",{placeholder:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onHandleChange,value:this.state.name})]}),Object(x.jsxs)("label",{children:["Number",Object(x.jsx)("input",{placeholder:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onHandleChange,value:this.state.number})]}),Object(x.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(r.Component),v=O.a.li(c||(c=Object(p.a)(["\ndisplay:flex;\nmargin-bottom:5px\n}\n"]))),g=function(t){var e=t.contacts,n=t.deleteContact;return Object(x.jsx)("div",{children:Object(x.jsx)("ul",{children:e.map((function(t){return Object(x.jsxs)(v,{children:[Object(x.jsxs)("p",{children:[t.name,":"]}),Object(x.jsx)("p",{children:t.number}),Object(x.jsx)("button",{className:"btn",type:"button",onClick:n,id:t.id,children:"Delete"})]},t.id)}))})})},y=function(t){var e=t.filter,n=t.setFilter;return Object(x.jsx)("div",{children:Object(x.jsxs)("label",{children:[Object(x.jsx)("h3",{children:"Find contacts by name"}),Object(x.jsx)("input",{className:"filterInput",type:"text",value:e,onChange:n,placeholder:"fiend me?"})]})})},k=function(t){var e=t.title,n=t.children;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:e}),n]})},S=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.addContact=function(e){t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[Object(o.a)(Object(o.a)({},e),{},{id:Object(h.a)()})])}}))},t.deleteContact=function(e){var n=e.target.id;t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==n}))})},t.onCheckDuplicateName=function(e){t.state.contacts.some((function(t){return t.name===e}))&&alert("".concat(e," is already in contacts."))},t.setFilter=function(e){var n=e.target.value;t.setState({filter:n})},t.getFilteredContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{title:"Phonebook",children:Object(x.jsx)(C,{addContact:this.addContact,onCheckDuplicateName:this.onCheckDuplicateName})}),Object(x.jsx)(k,{title:"Contacts",styles:"filterContainerStyle",children:Object(x.jsx)(y,{filter:this.state.filter,setFilter:this.setFilter})}),Object(x.jsx)(k,{children:Object(x.jsx)(g,{contacts:this.getFilteredContacts(),deleteContact:this.deleteContact})})]})}}]),n}(r.Component),w=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(S,{})})};s.a.render(Object(x.jsx)(w,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.1684bd7c.chunk.js.map