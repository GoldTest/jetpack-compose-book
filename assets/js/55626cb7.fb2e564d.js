"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7071],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),m=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=m(t.components);return o.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=m(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return n?o.createElement(f,r(r({ref:e},p),{},{components:n})):o.createElement(f,r({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var m=2;m<i;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1896:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=n.p+"assets/images/demo-d9c5f87316282f321c8c726ebc25e95e.png",l=n.p+"assets/images/demo-4ce20eb37b35f68c23e2b9be9c77a916.gif",c=n.p+"assets/images/demo3-4967dc689238a3de86f09e82b0722e7b.png",m=n.p+"assets/images/demo4-3d2af65962790de6688603f4fd7d9ef8.png",p=["components"],u={title:"BottomNavigation"},s=void 0,d={unversionedId:"layout/bottomnavigation",id:"layout/bottomnavigation",title:"BottomNavigation",description:"Material Design bottom navigation",source:"@site/docs/layout/bottomnavigation.mdx",sourceDirName:"layout",slug:"/layout/bottomnavigation",permalink:"/docs/layout/bottomnavigation",editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/layout/bottomnavigation.mdx",tags:[],version:"current",frontMatter:{title:"BottomNavigation"},sidebar:"docs",previous:{title:"Box",permalink:"/docs/layout/box"},next:{title:"Column",permalink:"/docs/layout/column"}},f=[{value:"\u81ea\u5b9a\u4e49 <code>BottomNavigation</code> \u680f",id:"\u81ea\u5b9a\u4e49-bottomnavigation-\u680f",children:[],level:2},{value:"\u66f4\u591a",id:"\u66f4\u591a",children:[],level:2}],g={toc:f};function b(t){var e=t.components,n=(0,a.Z)(t,p);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun BottomNavigation(\n    modifier: Modifier = Modifier,\n    backgroundColor: Color = MaterialTheme.colors.primarySurface,\n    contentColor: Color = contentColorFor(backgroundColor),\n    elevation: Dp = BottomNavigationDefaults.Elevation,\n    content: RowScope.() -> Unit\n): @Composable Unit\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://material.io/components/bottom-navigation"},"Material Design bottom navigation")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Bottom navigation bars")," \u5141\u8bb8\u5728\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u8981\u76ee\u7684\u5730\u4e4b\u95f4\u79fb\u52a8\u3002"),(0,i.kt)("img",{src:m}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BottomNavigation")," \u5e94\u8be5\u5305\u542b\u591a\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"BottomNavigationItems")," \u9879\uff0c\u6bcf\u4e2a\u5bfc\u822a\u9879\u4ee3\u8868\u4e00\u4e2a\u5355\u4e00\u7684\u76ee\u7684\u5730\u3002"),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Scaffold")," \u642d\u914d\u7684\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\nfun ScaffoldDemo(){\n    var selectedItem by remember { mutableStateOf(0) }\n    val items = listOf("\u4e3b\u9875", "\u6211\u559c\u6b22\u7684", "\u8bbe\u7f6e")\n    Scaffold(\n        topBar = {\n            TopAppBar(\n                title = {\n                    Text("\u4e3b\u9875")\n                },\n                navigationIcon = {\n                    IconButton(onClick = {\n\n                    }) {\n                        Icon(Icons.Filled.ArrowBack, null)\n                    }\n                }\n            )\n        },\n        bottomBar = {\n            BottomNavigation {\n                items.forEachIndexed { index, item ->\n                    BottomNavigationItem(\n                        icon = { Icon(Icons.Filled.Favorite, contentDescription = null) },\n                        label = { Text(item) },\n                        selected = selectedItem == index,\n                        onClick = { selectedItem = index }\n                    )\n                }\n            }\n        }\n    ){\n\n    }\n}\n')),(0,i.kt)("img",{src:r,width:"30%",height:"30%"}),(0,i.kt)("p",null,"\u8fd9\u6837\u4e00\u4e2a\u57fa\u672c\u7684\u5e95\u90e8\u5bfc\u822a\u680f\u6211\u4eec\u5c31\u5b9e\u73b0\u5566\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7a0d\u5fae\u4fee\u6539\u4e00\u70b9\u4ee3\u7801\uff0c\u8ba9\u5bfc\u822a\u680f\u53d8\u6210\u4e09\u4e2a\u4e0d\u540c\u7684\u56fe\u6807\u6309\u94ae"),(0,i.kt)("p",null,"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"BottomNavigationItem")," \u7684\u4ee3\u7801\u4fee\u6539\u6210\u4ee5\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"BottomNavigationItem(\n    icon = {\n        when(index){\n            0 -> Icon(Icons.Filled.Home, contentDescription = null)\n            1 -> Icon(Icons.Filled.Favorite, contentDescription = null)\n            else -> Icon(Icons.Filled.Settings, contentDescription = null)\n        }\n    },\n    label = { Text(item) },\n    selected = selectedItem == index,\n    onClick = { selectedItem = index }\n)\n")),(0,i.kt)("img",{src:c,width:"30%",height:"30%"}),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49-bottomnavigation-\u680f"},"\u81ea\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"h2"},"BottomNavigation")," \u680f"),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"p"},"BottomNavigation")," \u680f\u7684\u6f14\u793a"),(0,i.kt)("img",{src:l}),(0,i.kt)("p",null,"\u5b9e\u73b0\u7684\u4ee3\u7801\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u7684\u65b9\u5f0f\u6765\u67e5\u770b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/code/layout/bottomNavigation/"},"\u7f51\u7ad9\u5185")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/compose-museum/compose-tutorial/blob/master/docs/code/layout/bottomNavigation/bottomNavigation.kt"},"Github"))),(0,i.kt)("h2",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#BottomNavigation(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,kotlin.Function1)"},"BottomNavigation \u8be6\u60c5")))}b.isMDXComponent=!0}}]);