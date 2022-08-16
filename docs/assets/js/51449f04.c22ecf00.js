"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[2176],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"junit_xml",title:"JUnit XML Format Reporter",sidebar_label:"JUnit XML",slug:"junit_xml.html"},l=void 0,u={unversionedId:"extensions/junit_xml",id:"version-5.4/extensions/junit_xml",title:"JUnit XML Format Reporter",description:"Latest Release",source:"@site/versioned_docs/version-5.4/extensions/junit_xml.md",sourceDirName:"extensions",slug:"/extensions/junit_xml.html",permalink:"/docs/extensions/junit_xml.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/extensions/junit_xml.md",tags:[],version:"5.4",frontMatter:{id:"junit_xml",title:"JUnit XML Format Reporter",sidebar_label:"JUnit XML",slug:"junit_xml.html"},sidebar:"extensions",previous:{title:"MockServer",permalink:"/docs/extensions/mockserver.html"},next:{title:"HTML Reporter",permalink:"/docs/extensions/html_reporter.html"}},p={},c=[{value:"Parameters",id:"parameters",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest/kotest-extensions-junitxml"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.kotest/kotest-extensions-junitxml",alt:"Latest Release"}))),(0,i.kt)("p",null,"JUnit includes an XML report generator that it calls\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/5.5.0-RC2/api/org/junit/platform/reporting/legacy/xml/LegacyXmlReportGeneratingListener.html"},"legacy xml report"),"\n. Many tools integrate with this format so it is very useful. However, this report has no concept of nesting tests.\nTherefore when used with a nested ",(0,i.kt)("a",{parentName:"p",href:"/docs/framework/testing-styles.html"},"test style")," in Kotest, it will include parent tests as\norphans."),(0,i.kt)("p",null,"To solve this, Kotest has it's own implementation of the same format, that is configurable on whether to include parent\ntests and/or collapse the names."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The following module is needed: ",(0,i.kt)("inlineCode",{parentName:"p"},"io.kotest:kotest-extensions-junitxml")," in your build. Search maven central for latest version ",(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=kotest-extensions-junitxml"},"here"),".")),(0,i.kt)("p",null,"To configure in your project, you need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"JunitXmlReporter")," using ",(0,i.kt)("a",{parentName:"p",href:"/docs/framework/project-config.html"},"project config"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyConfig : AbstractProjectConfig() {\n  override fun extensions(): List<Extension> = listOf(\n    JunitXmlReporter(\n      includeContainers = false,\n      useTestPathAsName = true\n    )\n  )\n}\n")),(0,i.kt)("p",null,"Additionally, the reporter needs to know where your build output folder is by setting a system property.\nGradle also needs to know that it should not generate JUnit XML reports by itself.\nWe configure that in the tests block in gradle."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.named<Test>("test") {\n  useJUnitPlatform()\n  reports {\n    junitXml.required.set(false)\n  }\n  systemProperty("gradle.build.dir", project.buildDir)\n}\n')),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"The reporter has three parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"includeContainers")," when true, all intermediate tests are included in the report as tests in their own right. Defaults\nto false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useTestPathAsName")," when true, the full test path will be used as the name. In other words the name will include the\nname of any parent tests as a single string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outputDir")," when set, the reports are generated in that folder, default value is: test-results/test")))}d.isMDXComponent=!0}}]);