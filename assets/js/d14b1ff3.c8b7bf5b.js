"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[536],{5318:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return b}});var t=r(7378);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=o,f=u["".concat(c,".").concat(b)]||u[b]||s[b]||a;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function b(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5556:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var t=r(5773),o=r(808),a=(r(7378),r(5318)),i=["components"],l={},c="Jobs",d={unversionedId:"jobs",id:"jobs",title:"Jobs",description:"`randJobArea`",source:"@site/docs/jobs.md",sourceDirName:".",slug:"/jobs",permalink:"/falso/docs/jobs",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/jobs.md",tags:[],version:"current",frontMatter:{},sidebar:"foo",previous:{title:"Internet",permalink:"/falso/docs/internet"},next:{title:"Music",permalink:"/falso/docs/music"}},p=[{value:"<code>randJobArea</code>",id:"randjobarea",children:[],level:3},{value:"<code>randJobDescriptor</code>",id:"randjobdescriptor",children:[],level:3},{value:"<code>randJobTitle</code>",id:"randjobtitle",children:[],level:3},{value:"<code>randJobType</code>",id:"randjobtype",children:[],level:3}],s={toc:p};function u(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jobs"},"Jobs"),(0,a.kt)("h3",{id:"randjobarea"},(0,a.kt)("inlineCode",{parentName:"h3"},"randJobArea")),(0,a.kt)("p",null,"Generate a random job area."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randJobArea } from '@ngneat/falso';\n\nrandJobArea()\nrandJobArea({ length: 10 })\n")),(0,a.kt)("h3",{id:"randjobdescriptor"},(0,a.kt)("inlineCode",{parentName:"h3"},"randJobDescriptor")),(0,a.kt)("p",null,"Generate a random job descriptor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randJobDescriptor } from '@ngneat/falso';\n\nrandJobDescriptor()\nrandJobDescriptor({ length: 10 })\n")),(0,a.kt)("h3",{id:"randjobtitle"},(0,a.kt)("inlineCode",{parentName:"h3"},"randJobTitle")),(0,a.kt)("p",null,"Generate a random job title."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randJobTitle } from '@ngneat/falso';\n\nrandJobTitle()\nrandJobTitle({ length: 10 })\n")),(0,a.kt)("h3",{id:"randjobtype"},(0,a.kt)("inlineCode",{parentName:"h3"},"randJobType")),(0,a.kt)("p",null,"Generate a random job type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randJobType } from '@ngneat/falso';\n\nrandJobType()\nrandJobType({ length: 10 })\n")))}u.isMDXComponent=!0}}]);