(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{181:function(e){e.exports=JSON.parse('{"app_name":"Mike\'s Blog","sport":"Sport","study":"Study","various":"Various","politics":"Politics"}')},182:function(e){e.exports=JSON.parse('{"app_name":"Blog de Mike","sport":"Sport","study":"Etude","various":"Divers","politics":"Politique"}')},194:function(e,t,a){e.exports=a(743)},199:function(e,t,a){},200:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},201:function(e,t,a){},604:function(e,t,a){},605:function(e,t,a){},613:function(e,t,a){},614:function(e,t,a){},637:function(e,t,a){},638:function(e,t,a){},738:function(e,t,a){},739:function(e,t,a){},740:function(e,t,a){},741:function(e,t,a){},743:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(99),i=a.n(s),l=(a(199),a(200),a(201),a(18)),o={aws_project_region:"us-east-2",aws_content_delivery_bucket:"blog-app-20191206223226-hostingbucket-blogapp",aws_content_delivery_bucket_region:"us-east-2",aws_content_delivery_url:"http://blog-app-20191206223226-hostingbucket-blogapp.s3-website.us-east-2.amazonaws.com",aws_cognito_identity_pool_id:"us-east-2:7addcbfa-002a-4c8f-aeb3-d02138502a27",aws_cognito_region:"us-east-2",aws_user_pools_id:"us-east-2_8B3Cfvc9M",aws_user_pools_web_client_id:"36a9q3q8k5r7is2eq74uor7a1n",oauth:{},aws_appsync_graphqlEndpoint:"https://dlv32jimsngyrhtbfinn3logku.appsync-api.us-east-2.amazonaws.com/graphql",aws_appsync_region:"us-east-2",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS"},r="query ListBlogs(\n  $filter: ModelBlogFilterInput\n  $limit: Int\n  $nextToken: String\n) {\n  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {\n    items {\n      id\n      name\n      createdBy\n      posts {\n        nextToken\n      }\n    }\n    nextToken\n  }\n}\n",m=a(190),u=a(750),d=a(181),p=a(182),h=a(10),b=a(11),f=a(14),E=a(12),g=a(13),v=a(191),O=a(28),j=function(e){return["January","February","March","April","May","June","July,","August","September","October","November","December"][e]},N=(a(604),a(605),a(184)),k=a.n(N),y=a(751),C=a(752);y.a.locale(k.a);var w=function(e){var t=new Date(e.createdAt);t.getDate(),j(t.getMonth()),t.getFullYear(),t.getHours(),t.getMinutes();return c.a.createElement("div",{className:"comment-container"},c.a.createElement("div",{className:"post-header"},c.a.createElement("span",{className:"name"},e.createdBy),c.a.createElement("span",null," | "),c.a.createElement(C.a,{date:t,locale:"fr"})),c.a.createElement("div",{className:"comment-content"},e.content),c.a.createElement("div",{className:"user-interactions"},c.a.createElement("i",{onClick:e.onLikeClick,className:"fa reaction-icon fa-thumbs-up"}," "," (0)"),c.a.createElement("i",{onClick:e.onDislikeClick,className:"fa reaction-icon fa-thumbs-down"}," (0)")))},x=a(42),_=function(e){var t,a,n=new Date(e.createdAt),s=j(n.getDate())+" "+(n.getMonth()+1)+" "+n.getFullYear();return c.a.createElement("div",{className:"post-content"},c.a.createElement("div",{className:"post-title"},e.title),c.a.createElement("div",{className:"post-header"},c.a.createElement("span",null,s),c.a.createElement("span",null," | "),c.a.createElement("span",null," ","By ")," ",c.a.createElement("span",{className:"name"},e.createdBy),c.a.createElement("span",null," | "),c.a.createElement("span",{className:"blog-name"},e.blogName)),c.a.createElement("div",{className:"post-description"},e.showFull?e.description:(t=e.description,a=400,t=t.length>a?t.substring(0,a)+"...":t)),e.showFull?c.a.createElement("div",{className:"number-comments"},c.a.createElement("span",null,"commentaires : ","  ",c.a.createElement("span",{className:"number"}," ",e.comments.items.length))):c.a.createElement("div",{className:"post-footer"},c.a.createElement(x.b,{to:{pathname:"/post/"+e.id}}," ","Voir plus ...")),e.showComments&&c.a.createElement("div",{className:"comments-section"},c.a.createElement("div",{className:"comments-header"},"Commentaires"),e.comments.items.map((function(e){return c.a.createElement(w,e)}))))},S=(a(613),a(186)),B=a(62),M={Etudes:B.d,Sport:B.c,Divers:B.b,Politique:B.a},L=function(e){return c.a.createElement("ul",{className:"card-container "},e.listBlog.map((function(e){return c.a.createElement(x.b,{to:{pathname:"/blog/"+e.id}},c.a.createElement("li",{className:"blog-item card"},c.a.createElement("div",{className:"left-contain"},c.a.createElement("div",{className:"card-type"}," ",e.name),c.a.createElement("div",{className:"posts-number"}," 0 posts")),c.a.createElement("div",{className:"right-contain"},c.a.createElement("div",{className:"blog-icon"},c.a.createElement(S.a,{icon:M[e.name]}))),c.a.createElement("div",{className:"author"},c.a.createElement("span",null,"Ecrit par ",c.a.createElement("span",{className:"name"},"Mike")))))})))},D=(a(614),a(187)),P=function(e){return c.a.createElement("div",{className:"animationLoading"},c.a.createElement("div",{id:"container"},c.a.createElement("div",{id:"one"}),c.a.createElement("div",{id:"two"})),c.a.createElement("div",{id:"three"}),c.a.createElement("div",{id:"four"}),c.a.createElement("div",{id:"five"}),c.a.createElement("div",{id:"six"}))},q=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(E.a)(t).call(this))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"pulse-loader"},c.a.createElement(D.PulseLoader,{color:this.props.color,loading:!0,betweenSpace:this.props.betweenSpace,size:this.props.size}))}}]),t}(n.Component);P.defaultProps={betweenSpace:"2px",color:"#ff540a",size:15};var A=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={isLoading:!1,listBlog:[]},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(e){return Object(O.a)({},e,{isLoading:!0})})),this.props.api.graphql(Object(l.c)(r)).then((function(t){t.data.listBlogs&&e.setState((function(e){return Object(O.a)({},e,{isLoading:!1,listBlog:t.data.listBlogs.items})}))}))}},{key:"onLikeClick",value:function(){}},{key:"onDislikeClick",value:function(){}},{key:"render",value:function(){return this.state.isLoading?c.a.createElement(q,{color:"#F7AE54"}):c.a.createElement("div",{className:"list-blog"},this.state.listBlog&&c.a.createElement(L,this.state))}}]),t}(n.Component),F=function(e){function t(e){return Object(h.a)(this,t),Object(f.a)(this,Object(E.a)(t).call(this,e))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null)}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={isLoading:!1,blog:null},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(e){return Object(O.a)({},e,{isLoading:!0})}));var t=this.props.match.params.id;l.a.graphql(Object(l.c)("query GetBlog($id: ID!) {\n  getBlog(id: $id) {\n    id\n    name\n    createdBy\n    posts {\n      items {\n        id\n        title\n        description\n        createdBy\n        likes\n        createdAt\n      }\n      nextToken\n    }\n  }\n}\n",{id:t})).then((function(t){t.data.getBlog&&e.setState((function(e){return Object(O.a)({},e,{isLoading:!1,blog:t.data.getBlog})}))}))}},{key:"render",value:function(){var e=this;return this.state.isLoading?c.a.createElement(q,{color:"#F7AE54"}):c.a.createElement("div",{className:"list-blog"},this.state.blog&&this.state.blog.posts.items.map((function(t){return c.a.createElement(_,Object.assign({key:t.id,blogName:e.state.blog.name},t))})))}}]),t}(n.Component),$=a(46),H=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={isLoading:!1,post:null},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(e){return Object(O.a)({},e,{isLoading:!0})}));var t=this.props.match.params.id;l.a.graphql(Object(l.c)("query GetPost($id: ID!) {\n  getPost(id: $id) {\n    id\n    title\n    description\n    createdBy\n    likes\n    createdAt\n    blog {\n      id\n      name\n      createdBy\n      posts {\n        nextToken\n      }\n    }\n    comments {\n      items {\n        id\n        content\n        createdAt\n        createdBy\n        likes\n      }\n      nextToken\n    }\n  }\n}\n",{id:t})).then((function(t){t.data.getPost&&e.setState((function(e){return Object(O.a)({},e,{isLoading:!1,post:t.data.getPost})}))}))}},{key:"render",value:function(){return this.state.isLoading?c.a.createElement(P,null):c.a.createElement("div",{className:"show-post"},this.state.post&&c.a.createElement(_,Object.assign({showFull:!0},this.state.post,{showComments:!0})))}}]),t}(n.Component),I=Object($.f)(H),J=(a(637),function(e){function t(e){return Object(h.a)(this,t),Object(f.a)(this,Object(E.a)(t).call(this,e))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"user-profile-container"},c.a.createElement("div",{className:"photo"},c.a.createElement("i",{className:"fa fa-user-circle"})),c.a.createElement("div",{className:"name"},"Mike Sene"),c.a.createElement("div",{className:"function"},"Expert en droit Penal"),c.a.createElement("ul",{className:"social-media-list"},c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-facebook"})),c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-twitter"})),c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-instagram"})),c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-linkedin-square"}))))}}]),t}(n.Component)),z=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={isLoading:!1,listBlog:[]},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(e){return Object(O.a)({},e,{isLoading:!0})})),l.a.graphql(Object(l.c)(r)).then((function(t){t.data.listBlogs&&e.setState((function(e){return Object(O.a)({},e,{isLoading:!1,listBlog:t.data.listBlogs.items})}))}))}},{key:"render",value:function(){return this.state.isLoading?c.a.createElement(q,{color:"#F7AE54"}):c.a.createElement("div",null,c.a.createElement(J,null))}}]),t}(n.Component),G=a(5),W=a.n(G),R=(a(638),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={blogs:[]},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"header-container"},c.a.createElement("div",{className:"blog-name",onClick:function(){e.props.history.push("/")}}," ",c.a.createElement("i",{className:"icon fa fa-long-arrow-left"})),c.a.createElement("div",{className:"contact-me"},c.a.createElement("i",{className:"icon fa fa-envelope"})))}}]),t}(n.Component)),U=Object($.f)(R),V=a(45),Y=a(189),Z=a.n(Y),K=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={text:""},a.handleChange=a.handleChange.bind(Object(V.a)(a)),a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"handleChange",value:function(e){this.setState({text:e})}},{key:"render",value:function(){return c.a.createElement(Z.a,{value:this.state.text,onChange:this.handleChange})}}]),t}(c.a.Component),Q=(a(738),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={isModalOpen:e.isModalOpen},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.isModalOpen;this.setState({isModalOpen:t})}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.isModalOpen?c.a.createElement(X,this.props,this.props.children):null)}}]),t}(n.Component)),X=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=document.body,t=document.documentElement,a={height:Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)};if(this.props.backdropStyle)for(var n in this.props.backdropStyle)a[n]=this.props.backdropStyle[n];return this.props.override?c.a.createElement("div",null,this.props.children," "):c.a.createElement("div",{className:this.props.containerClassName},c.a.createElement("div",{className:"modal-style",id:this.props.modalId},!0===this.props.withClose?c.a.createElement("div",{onClick:this.props.closeFunc,className:"bm-cross-button",style:{position:"absolute",width:"16px",height:"17px",right:"8px",top:"8px"}},c.a.createElement("span",{className:"bm-cross",style:{width:"100%",height:"100%"}},c.a.createElement("i",{className:"ga ga-close01 icon-button"}))):null,this.props.children),!0===this.props.backDrop?c.a.createElement("div",{className:"backdrop-style",style:a}):null)}}]),t}(n.Component);Q.defaultProps={override:!1,backDrop:!0};var ee=Q,te=(a(739),function(e){return c.a.createElement("div",{className:"button-style "+e.classStyle,onClick:e.handleClick},e.label)}),ae=(a(740),function(e){return c.a.createElement(ee,{containerClassName:"new-post-modal",isModalOpen:e.show,backDrop:!0,withClose:!0,closeFunc:e.close},c.a.createElement("div",{className:"col-xs-12  title-container"},c.a.createElement("div",{className:"col-xs-3 title"},"Title : "),c.a.createElement("div",{className:"col-xs-9"},c.a.createElement("input",{type:"text",className:"input"}))),c.a.createElement("div",{className:"col-xs-12 description-container"},c.a.createElement("div",{className:"col-xs-3 description"},"Description :"),c.a.createElement("div",{className:"col-xs-9"},c.a.createElement(K,null))),c.a.createElement("div",{className:"col-xs-12 bottom-buttons"},c.a.createElement("div",{className:"col-xs-3 col-xs-offset-9"},c.a.createElement(te,{classStyle:"add",handleClick:e.doCreate,label:"Add"}),c.a.createElement(te,{classStyle:"cancel",handleClick:e.close,label:"Cancel"}))))}),ne=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={show:!1,title:"",description:""},a.handleShowCreatePost=a.handleShowCreatePost.bind(Object(V.a)(a)),a.doCreate=a.doCreate.bind(Object(V.a)(a)),a.close=a.close.bind(Object(V.a)(a)),a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"handleShowCreatePost",value:function(){this.setState((function(e){return Object(O.a)({},e,{show:!e.show})}))}},{key:"close",value:function(){this.setState((function(e){return Object(O.a)({},e,{show:!1})}))}},{key:"doCreate",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(te,{handleClick:this.handleShowCreatePost,label:"Cr\xe9er un Article"}),c.a.createElement(ae,Object.assign({},this.state,{close:this.close,doCreate:this.doCreate})))}}]),t}(n.Component),ce=function(e){var t=e.component,a=Object(v.a)(e,["component"]);return c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"col-xs-12"},c.a.createElement("div",{className:"col-xs-2 left-content"},c.a.createElement(z,null)),c.a.createElement("div",{className:"col-xs-10 right-content"},c.a.createElement(U,null),c.a.createElement(ne,null),c.a.createElement($.a,Object.assign({},a,{render:function(e){return c.a.createElement(t,Object.assign({},e,a))}})))),c.a.createElement(F,null))},se=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e={};return c.a.createElement("div",null,c.a.createElement(x.a,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement($.c,null,c.a.createElement(ce,Object.assign({},this.props,{pageName:"Home",state:e,exact:!0,path:"/",component:A})),c.a.createElement(ce,Object.assign({},this.props,{pageName:"Post",state:e,exact:!0,path:"/post/:id",component:I})),c.a.createElement(ce,Object.assign({},this.props,{pageName:"Blog",state:e,exact:!0,path:"/blog/:id",component:T})))))))}}]),t}(n.Component);se.contextTypes={store:W.a.object};var ie=se;l.b.configure(o),l.a.configure(o);var le=Object(m.a)((function(){var e=l.a.graphql(Object(l.c)(r,{filter:{name:{eq:"Etudes"}}}));console.log(e);var t={en:d,fr:p}.fr;return c.a.createElement(u.a,{locale:"en",messages:t},c.a.createElement(ie,{api:l.a,auth:l.b}))}),{includeGreetings:!0});a(741),a(742),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,t){}},[[194,1,2]]]);
//# sourceMappingURL=main.b0a07ef1.chunk.js.map