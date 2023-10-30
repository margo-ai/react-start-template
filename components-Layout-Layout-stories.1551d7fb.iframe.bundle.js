"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[870],{"./src/components/Layout/Layout.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Layout_stories});__webpack_require__("./node_modules/react/index.js");var Header=__webpack_require__("./src/components/Layout/Header/Header.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),layout_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/layout.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(layout_module.Z,options);const Layout_layout_module=layout_module.Z&&layout_module.Z.locals?layout_module.Z.locals:void 0;var _Default$parameters,_Default$parameters2,_Default$parameters2$,emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Layout=function Layout(_ref){var children=_ref.children;return(0,emotion_react_browser_esm.tZ)("div",{className:Layout_layout_module.layout},(0,emotion_react_browser_esm.tZ)(Header.h,null),children)};Layout.displayName="Layout";try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/components/Layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Layout_stories={title:"Layout",component:Layout};var Default={};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/Layout/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Header});__webpack_require__("./node_modules/react/index.js");var LightMode=__webpack_require__("./node_modules/@mui/icons-material/LightMode.js"),DarkMode=__webpack_require__("./node_modules/@mui/icons-material/DarkMode.js"),types=__webpack_require__("./src/theming/types.ts"),ThemeProvider=__webpack_require__("./src/theming/ThemeProvider.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ThemeSwitcher_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Header/ThemeSwitcher/ThemeSwitcher.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ThemeSwitcher_module.Z,options);const ThemeSwitcher_ThemeSwitcher_module=ThemeSwitcher_module.Z&&ThemeSwitcher_module.Z.locals?ThemeSwitcher_module.Z.locals:void 0;var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),ThemeSwitcher=function ThemeSwitcher(){var _useThemeContext=(0,ThemeProvider.T)(),theme=_useThemeContext.theme,toggleTheme=_useThemeContext.toggleTheme;return(0,emotion_react_browser_esm.tZ)("button",{type:"button",className:ThemeSwitcher_ThemeSwitcher_module.root,onClick:toggleTheme},theme===types.Q.light?(0,emotion_react_browser_esm.tZ)(DarkMode.Z,null):(0,emotion_react_browser_esm.tZ)(LightMode.Z,null))};ThemeSwitcher.displayName="ThemeSwitcher";var LocalizationProvider=__webpack_require__("./src/localization/LocalizationProvider.tsx"),LangSwitcher_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Header/LangSwitcher/LangSwitcher.module.scss"),LangSwitcher_module_options={};LangSwitcher_module_options.styleTagTransform=styleTagTransform_default(),LangSwitcher_module_options.setAttributes=setAttributesWithoutAttributes_default(),LangSwitcher_module_options.insert=insertBySelector_default().bind(null,"head"),LangSwitcher_module_options.domAPI=styleDomAPI_default(),LangSwitcher_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LangSwitcher_module.Z,LangSwitcher_module_options);const LangSwitcher_LangSwitcher_module=LangSwitcher_module.Z&&LangSwitcher_module.Z.locals?LangSwitcher_module.Z.locals:void 0;var LangSwitcher=function LangSwitcher(){var _useLangContext=(0,LocalizationProvider.j)(),lang=_useLangContext.lang,toggleLang=_useLangContext.toggleLang;return(0,emotion_react_browser_esm.tZ)("button",{type:"button",className:LangSwitcher_LangSwitcher_module.root,onClick:toggleLang},lang)};LangSwitcher.displayName="LangSwitcher";var header_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Header/header.module.scss"),header_module_options={};header_module_options.styleTagTransform=styleTagTransform_default(),header_module_options.setAttributes=setAttributesWithoutAttributes_default(),header_module_options.insert=insertBySelector_default().bind(null,"head"),header_module_options.domAPI=styleDomAPI_default(),header_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(header_module.Z,header_module_options);const Header_header_module=header_module.Z&&header_module.Z.locals?header_module.Z.locals:void 0;var Logo=__webpack_require__("./src/components/Layout/Header/Logo/Logo.tsx"),Header=function Header(){return(0,emotion_react_browser_esm.tZ)("header",{className:Header_header_module.header},(0,emotion_react_browser_esm.tZ)(Logo.T,null),(0,emotion_react_browser_esm.tZ)(ThemeSwitcher,null),(0,emotion_react_browser_esm.tZ)(LangSwitcher,null))};Header.displayName="Header"},"./src/components/Layout/Header/Logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Logo});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),logo_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Header/Logo/logo.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(logo_module.Z,options);const Logo_logo_module=logo_module.Z&&logo_module.Z.locals?logo_module.Z.locals:void 0;var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Logo=function Logo(){return(0,emotion_react_browser_esm.tZ)("div",{className:Logo_logo_module.logo},"Company logo")};Logo.displayName="Logo"},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Header/LangSwitcher/LangSwitcher.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".oqkbVPB8aGI3282RdguE{border:0;padding:4px;background:none;border:1px solid gray;border-radius:60%;cursor:pointer;width:50px;height:50px;font-weight:700;font-size:16px}","",{version:3,sources:["webpack://./src/components/Layout/Header/LangSwitcher/LangSwitcher.module.scss"],names:[],mappings:"AAAA,sBACI,QAAA,CACA,WAAA,CACA,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,cAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,cAAA",sourcesContent:[".root {\r\n    border: 0;\r\n    padding: 4px;\r\n    background: none;\r\n    border: 1px solid grey;\r\n    border-radius: 60%;\r\n    cursor: pointer;\r\n    width: 50px;\r\n    height: 50px;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"oqkbVPB8aGI3282RdguE"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Header/Logo/logo.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".JBt0z7fkG3IJAGJ1E60q{box-sizing:content-box;display:flex;justify-content:center;align-items:center;text-align:center;background-color:#fff;padding:20px;font-size:20px;color:#000;width:60px;height:60px;border-radius:50%;border:2px solid #222}html.light .JBt0z7fkG3IJAGJ1E60q{color:rgb(255, 133, 139)}html.dark .JBt0z7fkG3IJAGJ1E60q{color:darkslategrey}","",{version:3,sources:["webpack://./src/components/Layout/Header/Logo/logo.module.scss","webpack://./src/theming/mixins.scss"],names:[],mappings:"AACA,sBACI,sBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,qBAAA,CACA,YAAA,CACA,cAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,qBAAA,CCXS,iCACL,wBAAA,CAEK,gCACL,mBAAA",sourcesContent:["@import '../../../../styles/common.scss';\r\n.logo {\r\n    box-sizing: content-box;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    font-size: 20px;\r\n    color: #000;\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    border: 2px solid #222;\r\n    @include theme(color, logoText);\r\n}\r\n","@import './theme.scss';\r\n\r\n@mixin theme($property, $var, $before: null, $after: null) {\r\n    @at-root html:global(.light) #{&} {\r\n        #{$property}: #{$before} #{map-get($light, $var)} #{$after};\r\n    }\r\n    @at-root html:global(.dark) #{&} {\r\n        #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\r\n    }\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={light_mainBg:"#f6bfc3",dark_mainBg:"#87a4a4",logo:"JBt0z7fkG3IJAGJ1E60q"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Header/ThemeSwitcher/ThemeSwitcher.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".E2aZdkdIz3S8t7E42PDA{border:0;padding:4px;background:none;outline:none;cursor:pointer}","",{version:3,sources:["webpack://./src/components/Layout/Header/ThemeSwitcher/ThemeSwitcher.module.scss"],names:[],mappings:"AAAA,sBACI,QAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA",sourcesContent:[".root {\r\n    border: 0;\r\n    padding: 4px;\r\n    background: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"E2aZdkdIz3S8t7E42PDA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Header/header.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".eRfjxI3Kpz_O8Ewe64wg{width:100%;position:fixed;z-index:999;top:0;left:0;padding:20px 160px;margin:0 auto;display:flex;justify-content:space-between;align-items:center}html.light .eRfjxI3Kpz_O8Ewe64wg{background-color:rgb(255, 133, 139)}html.dark .eRfjxI3Kpz_O8Ewe64wg{background-color:darkslategrey}","",{version:3,sources:["webpack://./src/components/Layout/Header/header.module.scss","webpack://./src/theming/mixins.scss"],names:[],mappings:"AAEA,sBACI,UAAA,CACA,cAAA,CACA,WAAA,CACA,KAAA,CACA,MAAA,CACA,kBAAA,CACA,aAAA,CAEA,YAAA,CACA,6BAAA,CACA,kBAAA,CCVS,iCACL,mCAAA,CAEK,gCACL,8BAAA",sourcesContent:["@import '../../../styles/common.scss';\r\n\r\n.header {\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 20px 160px;\r\n    margin: 0 auto;\r\n    @include theme(background-color, headerBg);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n","@import './theme.scss';\r\n\r\n@mixin theme($property, $var, $before: null, $after: null) {\r\n    @at-root html:global(.light) #{&} {\r\n        #{$property}: #{$before} #{map-get($light, $var)} #{$after};\r\n    }\r\n    @at-root html:global(.dark) #{&} {\r\n        #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\r\n    }\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={light_mainBg:"#f6bfc3",dark_mainBg:"#87a4a4",header:"eRfjxI3Kpz_O8Ewe64wg"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/layout.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".gYNBhdd2z97Sh1P8MC1g{position:sticky;top:0;left:0;z-index:3;margin-bottom:170px}html.light .gYNBhdd2z97Sh1P8MC1g{background-color:rgb(246, 191, 195)}html.dark .gYNBhdd2z97Sh1P8MC1g{background-color:rgb(135, 164, 164)}","",{version:3,sources:["webpack://./src/components/Layout/layout.module.scss","webpack://./src/theming/mixins.scss"],names:[],mappings:"AAEA,sBAGI,eAAA,CACA,KAAA,CACA,MAAA,CACA,SAAA,CAEA,mBAAA,CCPS,iCACL,mCAAA,CAEK,gCACL,mCAAA",sourcesContent:["@import '../../styles/common.scss';\r\n\r\n.layout {\r\n    // width: 100%;\r\n    // min-height: 100vh;\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 3;\r\n    @include theme(background-color, mainBg);\r\n    margin-bottom: 170px;\r\n}\r\n","@import './theme.scss';\r\n\r\n@mixin theme($property, $var, $before: null, $after: null) {\r\n    @at-root html:global(.light) #{&} {\r\n        #{$property}: #{$before} #{map-get($light, $var)} #{$after};\r\n    }\r\n    @at-root html:global(.dark) #{&} {\r\n        #{$property}: #{$before} #{map-get($dark, $var)} #{$after};\r\n    }\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={light_mainBg:"#f6bfc3",dark_mainBg:"#87a4a4",layout:"gYNBhdd2z97Sh1P8MC1g"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);