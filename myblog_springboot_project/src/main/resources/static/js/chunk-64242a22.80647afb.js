(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64242a22"],{"03c1":function(t,e,a){"use strict";a("31b6")},"1c62":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-inline":"3%"}},[a("el-row",{staticClass:"home",attrs:{gutter:20}},[a("el-col",{attrs:{span:16}},[[a("el-carousel",{staticStyle:{"margin-top":"20px"},attrs:{interval:4e3,type:"card",height:"200px"}},t._l(t.images,(function(e){return a("el-carousel-item",{key:e.id,nativeOn:{click:function(a){return t.articleClick(e.id)}}},[a("div",[a("img",{attrs:{src:e.src,height:"auto",width:"100%"}})])])})),1)],a("blog-list",{attrs:{target:"all",name:""}})],2),a("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{staticClass:"owner"},[a("img",{attrs:{src:t.ownerInfo.avatar}}),a("div",{staticClass:"owner-info"},[a("p",{staticClass:"name"},[t._v(t._s(t.ownerInfo.name))]),a("p",{staticClass:"access"},[t._v(t._s(t.ownerInfo.access))])])]),a("div",{staticClass:"owner-info"},[a("p",[t._v("Introduction："),a("span",[t._v(t._s(t.ownerInfo.introduction))])]),a("p",[t._v("Location:"),a("span",[t._v(t._s(t.ownerInfo.location))])])])]),a("el-card",{staticStyle:{"margin-top":"20px"},attrs:{shadow:"hover"}},[a("p",{staticStyle:{"front-size":"14px",color:"#999999"}},[t._v("留言板")]),a("el-divider"),a("div",{staticClass:"leave-msg"},[a("el-table",{attrs:{data:t.leaveCommentData,"show-header":!1}},[a("el-table-column",{attrs:{"max-width":30},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("el-avatar",{attrs:{src:e.row.avatar,size:27}}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.userName))])],1)]}}])}),a("el-table-column",{attrs:{"min-width":160},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-chat-round"}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.message))])]}}])}),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticClass:"msg-time"},[t._v(t._s(e.row.time))])]}}])})],1)],1),a("span",{staticStyle:{float:"right"}},[a("el-button",{staticStyle:{margin:"10px","margin-left":"260px"},attrs:{icon:"el-icon-edit",circle:"",size:"small"},on:{click:t.leaveMsgClick}})],1)],1),a("el-card",{staticStyle:{"margin-top":"20px"},attrs:{shadow:"hover"}},[a("p",{staticStyle:{"front-size":"14px",color:"#999999"}},[t._v("热门标签")]),a("el-divider"),a("div",[a("div",{staticStyle:{display:"flex","word-wrap":"break-word","word-break":"break-all"}},[a("div",t._l(t.tags,(function(e,i){return a("el-button",{key:i,staticStyle:{margin:"8px"},attrs:{round:"",size:"mini",plain:"",type:e.tagType},on:{click:function(a){return t.tagClick(e.tagName)}}},[t._v(t._s(e.tagName))])})),1)])])],1),a("el-card",{staticStyle:{"margin-top":"20px"},attrs:{shadow:"hover"}},[a("p",{staticStyle:{"front-size":"14px",color:"#999999"}},[t._v("链接")]),a("el-divider"),a("div",{staticStyle:{display:"flex","word-wrap":"break-word","word-break":"break-all"}},[a("div",t._l(t.links,(function(e,i){return a("el-link",{key:i,staticStyle:{margin:"5px"},on:{click:function(a){return t.openWindow(e.url)}}},[t._v(t._s(e.name))])})),1)])],1)],1)],1),a("el-dialog",{attrs:{title:"留言",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"留言板","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"我简单地说两句啊..."},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.commitLeaveMsg(t.form.message)}}},[t._v("确 定")])],1)],1)],1)},s=[],n=a("7e1e"),o=a("8e36"),l={components:{BlogList:o["a"]},data:function(){return{dialogFormVisible:!1,form:{message:""},formLabelWidth:"60px",ownerInfo:{},leaveCommentData:[],leaveCommentLabel:{},tags:[],articles:[],links:[],images:[],title:"首页"}},methods:{articleClick:function(t){this.$router.push({name:"article",params:{id:t},query:{code:this.$route.query.code}})},getHomeInfo:function(){var t=this;Object(n["p"])().then((function(e){t.ownerInfo=e.data.ownerInfo})),Object(n["n"])().then((function(e){t.leaveCommentData=e.data.leaveCommentData,t.leaveCommentLabel=e.data.leaveCommentLabel})),Object(n["q"])().then((function(e){t.tags=e.data.tags})),Object(n["k"])().then((function(e){t.links=e.data.links})),Object(n["h"])().then((function(e){t.images=e.data.images}))},leaveMsgClick:function(){this.getLoginState?this.dialogFormVisible=!0:this.$alert("登录您的Gitee账号后再来试试吧~","您还未登录哦",{confirmButtonText:"Roger That! "})},commitLeaveMsg:function(t){var e=this;""!==t?Object(n["b"])(t,this.$route.query.user).then((function(t){console.log("留言提交结果："+t.data.addRes),"success"===t.data.addRes?(Object(n["n"])().then((function(t){e.leaveCommentData=t.data.leaveCommentData,e.leaveCommentLabel=t.data.leaveCommentLabel})),e.form.message="",e.$notify({message:"感谢您的留言哦，小蔡同学马上就会看到！",duration:2e3,position:"bottom-left"})):e.$notify({message:"留言好像没有成功呢，请稍后再试试吧！",duration:2e3,position:"bottom-left"}),e.dialogFormVisible=!1})):this.$notify({message:"写些内容再提交吧！",duration:2e3,position:"bottom-left"})},tagClick:function(t){this.$router.push({name:"tag",params:{tagName:t},query:{user:this.$route.query.user}})},openWindow:function(t){var e=window.open(t);window.focus&&e.focus()}},mounted:function(){this.getHomeInfo()},computed:{getLoginState:function(){return this.$store.state.tab.hasLogined},getUserName:function(){return this.$store.state.tab.userName},getGiteePage:function(){return this.$store.state.tab.giteeUrl},getAvatar:function(){return this.$store.state.tab.avatarUrl}},created:function(){this.$store.commit("getPageName",this.title)}},r=l,c=(a("f600"),a("03c1"),a("2877")),u=Object(c["a"])(r,i,s,!1,null,"1603d07e",null);e["default"]=u.exports},"31b6":function(t,e,a){},6206:function(t,e,a){},"8e36":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.articles,(function(e){return a("el-row",{key:e.id,staticStyle:{"margin-top":"20px"}},[a("el-card",{staticClass:"article-card",attrs:{shadow:"hover"}},[a("i",{class:"el-icon-"+e.icon}),a("el-link",{attrs:{target:"_blank"},on:{click:function(a){return t.articleClick(e.id)}}},[a("h1",[t._v(t._s(e.title))])]),a("el-divider"),a("p",[t._v(t._s(e.intro))]),a("el-divider",[a("i",{staticClass:"el-icon-reading"})]),a("div",{staticClass:"article-info"},[a("div",{staticClass:"article-info-1fl"},[a("span",{staticClass:"elems-1fl"},[t._v(t._s(e.time))]),a("span",{staticClass:"elems-1fl"},[a("i",{staticClass:"el-icon-view"},[t._v(" "+t._s(e.clickCount))]),a("i",{staticClass:"el-icon-star-off"},[t._v(" "+t._s(e.likeCount))]),a("i",{staticClass:"el-icon-chat-square"},[t._v(" "+t._s(e.commentCount))]),a("i",{staticClass:"el-icon-share"},[t._v(" "+t._s(e.shareCount))])])]),a("div",{staticClass:"article-info-2fl"},[a("div",{staticClass:"left-2fl"},[a("i",{staticClass:"el-icon-magic-stick"}),a("span",[t._v(t._s(e.type))])]),a("span",{staticClass:"right-2fl"},[a("span",t._l(e.tag,(function(i,s){return a("el-tag",{key:s,staticClass:"tags",attrs:{size:"small",type:e.tagType[s]}},[t._v(t._s(i))])})),1)])])])],1)],1)})),a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next",total:t.totalItem,"page-size":t.pageSize,"current-page":t.page},on:{"current-change":t.pageChanged}})],2)},s=[],n=(a("b0c0"),a("7e1e")),o={props:{target:{type:String,default:function(){return"all"}},name:{type:String}},data:function(){return{articles:[],page:0,pageSize:0,totalItem:0}},methods:{getArticle:function(t){var e=this;Object(n["g"])(this.target,this.name,t).then((function(a){e.articles=a.data.articles,e.page=t,e.pageSize=a.data.pageSize,e.totalItem=a.data.totalItem}))},articleClick:function(t){this.$store.commit("getPageName","博文"),this.$router.push({name:"article",params:{id:t},query:{user:this.$route.query.user}})},pageChanged:function(t){this.page=t,this.getArticle(t)}},mounted:function(){"all"===this.target?console.log("查询主页博文列表"):"category"===this.target?console.log("查询类别博文列表"):"tag"===this.target?console.log("查询标签博文列表"):"about"===this.target?console.log("查询相关博文列表"):console.log("查询检索博文列表"),this.getArticle(1)}},l=o,r=(a("a5ff"),a("2877")),c=Object(r["a"])(l,i,s,!1,null,"22f017ab",null);e["a"]=c.exports},a5ff:function(t,e,a){"use strict";a("6206")},f600:function(t,e,a){"use strict";a("f672")},f672:function(t,e,a){}}]);
//# sourceMappingURL=chunk-64242a22.80647afb.js.map