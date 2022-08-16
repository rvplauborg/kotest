"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[9875],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={id:"dsl",title:"Kotest DSL",slug:"dsl.html",sidebar_label:"Kotest DSL"},c=void 0,l={unversionedId:"framework/dsl",id:"version-5.4/framework/dsl",title:"Kotest DSL",description:"This page discusses in detail the Kotest DSL that is used to build tests. You do not need to read this page",source:"@site/versioned_docs/version-5.4/framework/dsl.md",sourceDirName:"framework",slug:"/framework/dsl.html",permalink:"/docs/framework/dsl.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/framework/dsl.md",tags:[],version:"5.4",frontMatter:{id:"dsl",title:"Kotest DSL",slug:"dsl.html",sidebar_label:"Kotest DSL"}},u={},p=[{value:"Tests",id:"tests",level:3},{value:"Spec",id:"spec",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This page discusses in detail the Kotest DSL that is used to build tests. You do not need to read this page\nto effectively use Kotest, but it may be of interest to users who are implementing extensions or\nraising PRs on Kotest itself or anyone who is just curious how things work under the hood."),(0,s.kt)("h3",{id:"tests"},"Tests"),(0,s.kt)("p",null,"In Kotest a test is essentially just a function ",(0,s.kt)("inlineCode",{parentName:"p"},"TestContext -> Unit"),". This function will contain assertions\n(",(0,s.kt)("em",{parentName:"p"},"matchers")," in Kotest nomenclature) which will throw an exception if the assertion fails. These exceptions are\nthen intercepted by the framework and used to mark a test as ",(0,s.kt)("em",{parentName:"p"},"failed")," or ",(0,s.kt)("em",{parentName:"p"},"errored")," (depending on the exception class)."),(0,s.kt)("h3",{id:"spec"},"Spec"),(0,s.kt)("p",null,"The basic unit of currency in Kotest is the spec. A spec is the top most container of tests and is essentially\njust a class that extends one of the spec styles (FunSpec, DescribeSpec and so on)."),(0,s.kt)("p",null,"Each spec contains tests which are referred to as ",(0,s.kt)("em",{parentName:"p"},"root tests")," (rooted in reference to the spec). These root\ntests are registered"))}f.isMDXComponent=!0}}]);