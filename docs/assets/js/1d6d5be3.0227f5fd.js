"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[377],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return g}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),u=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=u(n),g=r,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||l;return n?i.createElement(h,o(o({ref:e},c),{},{components:n})):i.createElement(h,o({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:r,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3076:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var i=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],a={id:"index",title:"IntelliJ Plugin",slug:"intellij-plugin.html",sidebar_label:"Introduction"},s=void 0,u={unversionedId:"intellij/index",id:"version-5.3/intellij/index",title:"IntelliJ Plugin",description:"Kotest offers an IntelliJ plugin available at the jetbrains plugin marketplace (search from within IntelliJ).",source:"@site/versioned_docs/version-5.3/intellij/index.md",sourceDirName:"intellij",slug:"/intellij/intellij-plugin.html",permalink:"/docs/5.3/intellij/intellij-plugin.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/intellij/index.md",tags:[],version:"5.3",frontMatter:{id:"index",title:"IntelliJ Plugin",slug:"intellij-plugin.html",sidebar_label:"Introduction"},sidebar:"intellij",next:{title:"Test Explorer",permalink:"/docs/5.3/intellij/intellij-test-explorer.html"}},c={},p=[{value:"Gutter Icons",id:"gutter-icons",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"Duplicated Test Highlighting",id:"duplicated-test-highlighting",level:2},{value:"Context Menu Run / Debug",id:"context-menu-run--debug",level:2},{value:"Intentions",id:"intentions",level:2}],d={toc:p};function g(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,i.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Kotest offers an ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-intellij-plugin"},"IntelliJ plugin")," available at the jetbrains plugin ",(0,l.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/14080-kotest"},"marketplace")," (search from within IntelliJ)."),(0,l.kt)("p",null,"This plugin provides run icons for each test, a tool window for test navigation, duplicated test highlighting, assertion intentions, and more."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The Intellij plugin requires Kotest 4.2 or higher and will not run common tests of a multiplatform project")),(0,l.kt)("h2",{id:"gutter-icons"},"Gutter Icons"),(0,l.kt)("p",null,"The plugin provides gutter run icons for specs, top level tests, and nested tests."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"gutter_icon_picture",src:n(53065).Z,width:"737",height:"438"})),(0,l.kt)("p",null,"Any tests disabled via a bang or by ",(0,l.kt)("em",{parentName:"p"},"xfunctions")," such as ",(0,l.kt)("inlineCode",{parentName:"p"},"xdescribe"),", will have a disabled test icon in the gutter."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"gutter_icon_picture",src:n(58016).Z,width:"907",height:"445"})),(0,l.kt)("h2",{id:"running-tests"},"Running Tests"),(0,l.kt)("p",null,"If you execute a spec from the gutter icon, then all tests in that spec will be executed.\nIf you execute a test, then that test and all nested tests will be executed."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"gutter_icon_picture",src:n(66589).Z,width:"685",height:"290"})),(0,l.kt)("h2",{id:"duplicated-test-highlighting"},"Duplicated Test Highlighting"),(0,l.kt)("p",null,"You cannot have two tests with the same name. The plugin will highlight any duplicated test names as errors."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"duplicated_test_picture",src:n(68628).Z,width:"813",height:"414"})),(0,l.kt)("h2",{id:"context-menu-run--debug"},"Context Menu Run / Debug"),(0,l.kt)("p",null,"Right clicking on a package will allow you to run, debug or run with coverage all the tests inside that package."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"run_context_menu_picture",src:n(82750).Z,width:"925",height:"298"})),(0,l.kt)("h2",{id:"intentions"},"Intentions"),(0,l.kt)("p",null,"This plugin has some basic intentions. For example, you can quickly mark a test as disabled."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"gutter_icon_picture",src:n(94773).Z,width:"580",height:"148"})),(0,l.kt)("p",null,"Or you can highlight some text and mark it as should throw, or surround with a soft assertion block."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"gutter_icon_picture",src:n(94512).Z,width:"779",height:"303"})))}g.isMDXComponent=!0},68628:function(t,e,n){e.Z=n.p+"assets/images/duplicated_test_string_spec-ccda51db0b69c31a45fb1ca638f83340.png"},58016:function(t,e,n){e.Z=n.p+"assets/images/gutter_disabled-a969740e2b9528bcdbdd5b0c614d6655.png"},53065:function(t,e,n){e.Z=n.p+"assets/images/gutter_icons-0041d916c7c27f35d387a77b0bbb55c0.png"},66589:function(t,e,n){e.Z=n.p+"assets/images/gutter_run-de6404c7cc87cac6abbb0df4b6270edb.png"},94773:function(t,e,n){e.Z=n.p+"assets/images/intention_bang-3503aa10cbd1b39f492d1402aa4d4535.png"},94512:function(t,e,n){e.Z=n.p+"assets/images/intentions_surround-ba5d03db5a4b4caf0249d1cbfbce10ec.png"},82750:function(t,e,n){e.Z=n.p+"assets/images/run_context_menu-574bc3d39bc3447d433eefb3c03e85ed.png"}}]);