(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{296:function(e,n,s){e.exports={img:"Users_img__QVS_7",selectedPage:"Users_selectedPage__2MDci"}},301:function(e,n,s){"use strict";s.r(n);var t=s(50),r=s(51),o=s(53),i=s(52),u=s(0),c=s.n(u),a=s(19),l=s(126),g=s(69),p=s(296),f=s.n(p),j=s(1),d=function(e){for(var n=e.totalUsersCount,s=e.pageSize,t=e.currentPage,r=e.onPageChanged,o=Math.ceil(n/s),i=Object(u.useState)(1),c=Object(g.a)(i,2),a=c[0],l=c[1],p=(a-1)*s+1,d=a*s,h=[],b=1;b<=o;b++)h.push(b);return Object(j.jsxs)("div",{children:[p>1&&Object(j.jsx)("button",{onClick:function(){return l(a-1)},children:"PREV"}),h.filter((function(e){return e>=p&&e<=d})).map((function(e){return Object(j.jsxs)("span",{className:t==e&&f.a.selectedPage,onClick:function(){r(e)},children:[e," "]})})),d<n&&Object(j.jsx)("button",{onClick:function(){return l(a+1)},children:"NEXT"})]})},h=s(94),b=s(25),P=function(e){return Object(j.jsxs)("div",{className:f.a.name,children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(b.b,{to:"/profile/"+e.u.id,children:Object(j.jsx)("img",{src:null!=e.u.photos.small?e.u.photos.small:h.a,className:f.a.img})})}),Object(j.jsx)("div",{children:e.u.followed?Object(j.jsx)("button",{disabled:e.followingInProgress.some((function(n){return n===e.u.id})),onClick:function(){e.unfolow(e.u.id)},children:" Unfollow "}):Object(j.jsx)("button",{disabled:e.followingInProgress.some((function(n){return n===e.u.id})),onClick:function(){e.folow(e.u.id)},children:" Follow "})})]}),Object(j.jsx)("span",{children:Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:e.u.name}),Object(j.jsx)("div",{children:e.u.status})]})})]})},O=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.users.map((function(n){return Object(j.jsx)(P,{followingInProgress:e.followingInProgress,u:n,unfolow:e.unfolow,folow:e.folow},n.id)}))]})},w=s(93),x=function(e){return e.usersPage.users},m=function(e){return e.usersPage.pageSize},C=function(e){return e.usersPage.totalUsersCount},v=function(e){return e.usersPage.currentPage},U=function(e){return e.usersPage.isFetching},S=function(e){return e.usersPage.followingInProgress},k=function(e){Object(o.a)(s,e);var n=Object(i.a)(s);function s(){var e;Object(t.a)(this,s);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){e.props.requestUsers(n,e.props.pageSize)},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.PageNumber,this.props.pageSize)}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[this.props.isFetching?Object(j.jsx)(w.a,{}):null,Object(j.jsx)(O,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfolow:this.props.unfolow,folow:this.props.folow,followingInProgress:this.props.followingInProgress})]})}}]),s}(c.a.Component);n.default=Object(a.b)((function(e){return{users:x(e),pageSize:m(e),totalUsersCount:C(e),currentPage:v(e),isFetching:U(e),followingInProgress:S(e)}}),{folow:l.b,unfolow:l.f,setCurrentPage:l.d,toggleFollowingProgress:l.e,requestUsers:l.c})(k)}}]);
//# sourceMappingURL=5.9ec27b49.chunk.js.map