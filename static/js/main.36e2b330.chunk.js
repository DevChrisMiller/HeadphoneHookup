(this.webpackJsonpheadphonehookup=this.webpackJsonpheadphonehookup||[]).push([[0],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(11),c=n.n(r),i=n(7),s=n.n(i),o=n(10),u=n(13),l=n(76),j=new(n.n(l).a)("pk_test_337324b24352312d9ef101684a59c2129a19bf112a87c",!0),d=n(172),p=n(174),b=n(57),h=n(175),m=n(176),x=n(177),O=n(14),f=n(22),g=n.p+"static/media/commerce.ef82b889.png",v=n(15),y=n(169),k=n(18),w=Object(y.a)((function(e){return{appBar:Object(v.a)({boxShadow:"none",backgroundColor:"#f2f2f2",borderBottom:"1px solid rgba(0, 0, 0, 0.2)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{fontFamily:"Blippo, fantasy",color:"#e6ca2e",textShadow:"1px 1px #000, 0px 2px 0px #b2a98f, 0px 6px 5px rgba(0,0,0,0.15), 0px 7px 2px rgba(0,0,0,0.1), 0px 10px 8px rgba(0,0,0,0.1)",flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(v.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(v.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),C=n(2),S=function(e){var t=e.totalItems,n=w(),a=Object(O.g)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(d.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(C.jsxs)(p.a,{children:[Object(C.jsxs)(b.a,{component:f.b,to:"/",variant:"h4",className:n.title,color:"inherit",children:[Object(C.jsx)("img",{src:g,alt:"Headphone Outlet Store",height:"40px",className:n.image}),"Headphone Hookup"]}),Object(C.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(C.jsx)("div",{className:n.button,children:Object(C.jsx)(h.a,{component:f.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(C.jsx)(m.a,{badgeContent:t,color:"secondary",children:Object(C.jsx)(x.a,{})})})})]})})})},_=n(183),N=n(178),B=n(179),T=n(180),F=n(181),E=n(182),R=Object(y.a)((function(){return{root:{display:"flex",flexFlow:"column",maxWidth:"100%",minHeight:"100%",backgroundColor:"#f7f7f7",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},media:{height:"120px",paddingTop:"56.25%"},cardActions:{display:"flex",flex:"1",justifyContent:"flex-end"},cardContent:{display:"flex",flex:"1",justifyContent:"space-between"}}})),q=function(e){var t=e.product,n=e.onAddToCart,a=R();return Object(C.jsxs)(N.a,{className:a.root,height:"500px",children:[Object(C.jsx)(B.a,{className:a.media,image:t.media.source,title:t.name}),Object(C.jsxs)(T.a,{children:[Object(C.jsxs)("div",{className:a.cardContent,children:[Object(C.jsx)(b.a,{variant:"h5",gutterBottom:!0,children:t.name}),Object(C.jsx)(b.a,{variant:"h6",children:t.price.formatted_with_symbol})]}),Object(C.jsx)(b.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary"})]}),Object(C.jsx)(F.a,{disableSpacing:!0,className:a.cardActions,children:Object(C.jsx)(h.a,{"aria-label":"Add to cart",onClick:function(){return n(t.id,1)},children:Object(C.jsx)(E.a,{})})})]})},A=Object(y.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:"#fffdf2",padding:e.spacing(3)},root:{flexGrow:1}}})),L=function(e){var t=e.products,n=e.onAddToCart,a=A();return Object(C.jsxs)("main",{className:a.content,children:[Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(_.a,{container:!0,justifyContent:"center",spacing:4,children:t.map((function(e){return Object(C.jsx)(_.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(q,{product:e,onAddToCart:n})},e.id)}))})]})},I=n(184),H=n(185),W=Object(y.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"1%",textAlign:"center"},emptyButton:(t={minWidth:"150px"},Object(v.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(v.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"3%",marginBottom:"3%",minWidth:"250px",width:"100%",justifyContent:"space-between"}}})),P=Object(y.a)((function(){return{media:{height:200},cardContent:{display:"flex",flex:"1",minHeight:"160px",justifyContent:"space-between"},cartActions:{display:"flex",flex:"1",justifyContent:"flex-end"},buttons:{display:"flex",alignItems:"center"}}})),D=function(e){var t=e.item,n=e.onUpdateCartQty,a=e.onRemoveFromCart,r=P();return Object(C.jsxs)(N.a,{children:[Object(C.jsx)(B.a,{image:t.media.source,alt:t.name,className:r.media}),Object(C.jsxs)(T.a,{className:r.cardContent,children:[Object(C.jsx)(b.a,{variant:"h5",children:t.name}),Object(C.jsx)(b.a,{variant:"h6",children:t.line_total.formatted_with_symbol})]}),Object(C.jsxs)(F.a,{className:r.CardActions,children:[Object(C.jsxs)("div",{className:r.buttons,children:[Object(C.jsx)(I.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity-1)},children:"-"}),Object(C.jsx)(b.a,{children:t.quantity}),Object(C.jsx)(I.a,{type:"button",size:"small",onClick:function(){return n(t.id,t.quantity+1)},children:"+"})]}),Object(C.jsx)(I.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(t.id)},children:"Remove"})]})]})},z=function(e){var t=e.cart,n=e.handleUpdateCartQty,a=e.handleRemoveFromCart,r=e.handleEmptyCart,c=W(),i=function(){return Object(C.jsxs)(b.a,{variant:"subtitle1",className:c.title,children:["You have no items in your shopping cart,",Object(C.jsx)(f.b,{to:"/",className:c.link,children:" start adding some!"})]})},s=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(_.a,{container:!0,spacing:5,children:t.line_items.map((function(e){return Object(C.jsx)(_.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(D,{item:e,onUpdateCartQty:n,onRemoveFromCart:a})},e.id)}))}),Object(C.jsxs)("div",{className:c.cardDetails,children:[Object(C.jsxs)(b.a,{variant:"h4",children:[" Subtotal: ",t.subtotal.formatted_with_symbol," "]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(I.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(C.jsx)(I.a,{component:f.b,to:"/checkout",className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return t.line_items?Object(C.jsxs)(H.a,{children:[Object(C.jsx)("div",{className:c.toolbar}),Object(C.jsx)(b.a,{className:c.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),t.line_items.length?Object(C.jsx)(s,{}):Object(C.jsx)(i,{})]}):"Loading..."},G=n(191),J=n(192),Q=n(193),U=n(84),M=n(200),Y=n(194),V=n(196),Z=Object(y.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(v.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(v.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(v.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),K=n(33),X=n(199),$=n(195),ee=n(189),te=n(46),ne=n(197),ae=function(e){var t=e.name,n=e.label,a=e.required,r=Object(te.d)().control;return Object(C.jsx)(_.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(te.a,{render:function(e){var t=e.field;return Object(C.jsx)(ne.a,Object(K.a)(Object(K.a)({},t),{},{fullWidth:!0,label:n,required:a}))},control:r,name:t,defaultValue:""})})},re=function(e){var t=e.checkoutToken,n=e.next,r=Object(a.useState)([]),c=Object(u.a)(r,2),i=c[0],l=c[1],d=Object(a.useState)(""),p=Object(u.a)(d,2),h=p[0],m=p[1],x=Object(a.useState)([]),O=Object(u.a)(x,2),g=O[0],v=O[1],y=Object(a.useState)(""),k=Object(u.a)(y,2),w=k[0],S=k[1],N=Object(a.useState)([]),B=Object(u.a)(N,2),T=B[0],F=B[1],E=Object(a.useState)(""),R=Object(u.a)(E,2),q=R[0],A=R[1],L=Object(te.c)(),H=Object.entries(i).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),W=Object.entries(g).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),P=T.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})),D=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.services.localeListShippingCountries(t);case 2:n=e.sent,a=n.countries,l(a),m(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.services.localeListSubdivisions(t);case 2:n=e.sent,a=n.subdivisions,v(a),S(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,j.checkout.getShippingOptions(t,{country:n,region:a});case 3:r=e.sent,F(r),A(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){D(t.id)}),[]),Object(a.useEffect)((function(){h&&z(h)}),[h]),Object(a.useEffect)((function(){w&&G(t.id,h,w)}),[w]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(b.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(C.jsx)(te.b,Object(K.a)(Object(K.a)({},L),{},{children:Object(C.jsxs)("form",{onSubmit:L.handleSubmit((function(e){return n(Object(K.a)(Object(K.a)({},e),{},{shippingCountry:h,shippingSubdivision:w,shippingOption:q}))})),children:[Object(C.jsxs)(_.a,{container:!0,spacing:3,children:[Object(C.jsx)(ae,{required:!0,name:"firstName",label:"First Name"}),Object(C.jsx)(ae,{required:!0,name:"lastName",label:"Last Name"}),Object(C.jsx)(ae,{required:!0,name:"address1",label:"Address"}),Object(C.jsx)(ae,{required:!0,name:"email",label:"Email"}),Object(C.jsx)(ae,{required:!0,name:"city",label:"City"}),Object(C.jsx)(ae,{required:!0,name:"zip",label:"Zip Code"}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(X.a,{children:"Shipping Country"}),Object(C.jsx)($.a,{value:h,fullWidth:!0,onChange:function(e){return m(e.target.value)},children:H.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(X.a,{children:"Shipping Subdivision"}),Object(C.jsx)($.a,{value:w,fullWidth:!0,onChange:function(e){return S(e.target.value)},children:W.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]}),Object(C.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(X.a,{children:"Shipping Options"}),Object(C.jsx)($.a,{value:q,fullWidth:!0,onChange:function(e){return A(e.target.value)},children:P.map((function(e){return Object(C.jsx)(ee.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(I.a,{component:f.b,to:"/cart",variant:"outlined",children:"Back to Cart"}),Object(C.jsx)(I.a,{type:"submit",variant:"contained",children:"Next"})]})]})}))]})},ce=n(51),ie=n(82),se=n(188),oe=n(139),ue=n(190),le=function(e){var t=e.checkoutToken;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(b.a,{variant:"h6",gutterBottom:!0,children:"Order Summary"}),Object(C.jsxs)(se.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(C.jsxs)(oe.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(ue.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)},e),Object(C.jsx)(b.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]})})),Object(C.jsxs)(oe.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(ue.a,{primary:"Total"}),Object(C.jsx)(b.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},je=Object(ie.a)("pk_test_51JhTPOHvwGDB8pOaaTI76nPJQARtyG6xxbkFbZqu4pJ4WCoeJwGLlPBHCQoLIYURsJnbBnjpuXvKo7P0l7aFzBVx00W5Yyhreu"),de=function(e){var t=e.checkoutToken,n=e.shippingData,a=e.nextStep,r=e.backStep,c=e.onCaptureCheckout,i=function(){var e=Object(o.a)(s.a.mark((function e(r,i,o){var u,l,j,d,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),o&&i){e.next=3;break}return e.abrupt("return");case 3:return u=i.getElement(ce.CardElement),e.next=6,o.createPaymentMethod({type:"card",card:u});case 6:l=e.sent,j=l.error,d=l.paymentMethod,j?console.log(j):(p={line_items:t.live.line_items,customer:{firstname:n.firstname,lastname:n.lastname,email:n.email},shipping:{name:"Primary",street:n.address1,town_city:n.city,county_state:n.shippingSubdivision,postal_zip_code:n.zip,country:n.shippingCountry},fulfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:d.id}}},c(t.id,p),a());case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(le,{checkoutToken:t}),Object(C.jsx)(G.a,{}),Object(C.jsx)(b.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment Method"}),Object(C.jsx)(ce.Elements,{stripe:je,children:Object(C.jsx)(ce.ElementsConsumer,{children:function(e){var n=e.elements,a=e.stripe;return Object(C.jsxs)("form",{onSubmit:function(e){return i(e,n,a)},children:[Object(C.jsx)(ce.CardElement,{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(I.a,{variant:"outlined",onClick:r,children:"Back"}),Object(C.jsxs)(I.a,{type:"submit",variant:"contained",disabled:!a,color:"primary",children:["Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},pe=["Shipping Address","Payment Details"],be=function(e){var t=e.cart,n=e.order,r=e.onCaptureCheckout,c=e.error,i=Object(a.useState)(0),l=Object(u.a)(i,2),d=l[0],p=l[1],h=Object(a.useState)(null),m=Object(u.a)(h,2),x=m[0],g=m[1],v=Object(a.useState)({}),y=Object(u.a)(v,2),k=y[0],w=y[1],S=Z(),_=Object(O.f)();Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,console.log(n),g(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d!==pe.length&&_.push("/");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var N=function(){return p((function(e){return e+1}))},B=function(){return p((function(e){return e-1}))},T=function(e){w(e),N()},F=function(){return n.customer?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(b.a,{variant:"h5",children:"Thank you for your purchase!"}),Object(C.jsx)(G.a,{className:S.divider}),Object(C.jsxs)(b.a,{variant:"subtitle2",children:["Order ref: ",n.customer_reference]})]}),Object(C.jsx)("br",{}),Object(C.jsx)(I.a,{component:f.b,to:"/",variant:"outlined",type:"button",children:"Back to Home"})]}):Object(C.jsx)("div",{className:S.spinner,children:Object(C.jsx)(J.a,{})})};c&&(C.Fragment,b.a,I.a,f.b);var E=function(){return 0===d?Object(C.jsx)(re,{checkoutToken:x,next:T}):Object(C.jsx)(de,{shippingData:k,checkoutToken:x,nextStep:N,backStep:B,onCaptureCheckout:r})};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Q.a,{}),Object(C.jsx)("div",{className:S.toolbar}),Object(C.jsx)("main",{className:S.layout,children:Object(C.jsxs)(U.a,{className:S.paper,children:[Object(C.jsx)(b.a,{variant:"h4",align:"center",children:"Checkout"}),Object(C.jsx)(M.a,{activeStep:d,className:S.stepper,children:pe.map((function(e){return Object(C.jsx)(Y.a,{children:Object(C.jsx)(V.a,{children:e})},e)}))}),d===pe.length?Object(C.jsx)(F,{}):x&&Object(C.jsx)(E,{})]})})]})},he=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),i=Object(u.a)(c,2),l=i[0],d=i[1],p=Object(a.useState)({}),b=Object(u.a)(p,2),h=b[0],m=b[1],x=Object(a.useState)(""),g=Object(u.a)(x,2),v=g[0],y=g[1],k=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.products.list();case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,j.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.add(t,n);case 2:a=e.sent,r=a.cart,d(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.update(t,{quantity:n});case 2:a=e.sent,r=a.cart,d(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.remove(t);case 2:n=e.sent,a=n.cart,d(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.empty();case 2:t=e.sent,n=t.cart,d(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cart.refresh();case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.checkout.capture(t,n);case 3:a=e.sent,m(a),F(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y(e.t0.data.error.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(),w()}),[]),Object(C.jsx)(f.a,{basename:"/HeadphoneHookup",children:Object(C.jsxs)("div",{children:[Object(C.jsx)(S,{totalItems:l.total_items}),Object(C.jsxs)(O.c,{children:[Object(C.jsx)(O.a,{exact:!0,path:"/",children:Object(C.jsx)(L,{products:n,onAddToCart:_})}),Object(C.jsx)(O.a,{exact:!0,path:"/cart",children:Object(C.jsx)(z,{cart:l,handleUpdateCartQty:N,handleRemoveFromCart:B,handleEmptyCart:T})}),Object(C.jsx)(O.a,{exact:!0,path:"/checkout",children:Object(C.jsx)(be,{cart:l,order:h,onCaptureCheckout:E,error:v})})]})]})})};c.a.render(Object(C.jsx)(he,{}),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.36e2b330.chunk.js.map