(this.webpackJsonpmovie_app_oct2021=this.webpackJsonpmovie_app_oct2021||[]).push([[0],{45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(15),c=n.n(i),r=n(6),o=n.n(r),l=n(16),m=n(17),u=n(18),d=n(21),j=n(20),v=n(19),h=n.n(v),p=(n(45),n(0));var b=function(e){var t=e.year,n=e.title,s=e.summary,a=e.poster,i=e.genres;return Object(p.jsxs)("div",{className:"movie",children:[Object(p.jsx)("img",{src:a,alt:n,title:n}),Object(p.jsxs)("div",{className:"movie__data",children:[Object(p.jsx)("h3",{className:"movie__title",children:n}),Object(p.jsx)("h5",{className:"movie__year",children:t}),Object(p.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(p.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(p.jsxs)("p",{className:"movie__summary",children:[s.slice(0,140),"..."]})]})]})},g=(n(47),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var n,s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:for(n=t.sent,s=[],a=0;a<10;a++)s.push(n.data.data.movies[a]);e.setState({movies:s,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(p.jsx)("section",{className:"container",children:t?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("span",{className:"loader__text",children:"Loading...\ud83e\udd54"})}):Object(p.jsx)("div",{className:"movies",children:n.map((function(e){return Object(p.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component)),_=g,O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root")),O()}},[[48,1,2]]]);
//# sourceMappingURL=main.40ee11e0.chunk.js.map