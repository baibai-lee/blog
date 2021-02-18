(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{452:function(s,t,e){"use strict";e.r(t);var a=e(2),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"jsconfig-json-中文文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsconfig-json-中文文档"}},[s._v("#")]),s._v(" jsconfig.json 中文文档")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://code.visualstudio.com/docs/languages/jsconfig",target:"_blank",rel:"noopener noreferrer"}},[s._v("英文原版文档地址"),e("OutboundLink")],1),s._v(" https://code.visualstudio.com/docs/languages/jsconfig")]),s._v(" "),e("h2",{attrs:{id:"jsconfig-json-是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsconfig-json-是什么？"}},[s._v("#")]),s._v(" jsconfig.json 是什么？")]),s._v(" "),e("p",[s._v("目录中存在"),e("code",[s._v("jsconfig.json")]),s._v("文件时，表明该目录是 JavaScript 项目的根目录。"),e("code",[s._v("jsconfig.json")]),s._v("文件指定了根文件以及 "),e("a",{attrs:{href:"https://github.com/microsoft/TypeScript/wiki/JavaScript-Language-Service-in-Visual-Studio",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript 语言服务"),e("OutboundLink")],1),s._v(" 提供的功能选项")]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("Tip:")]),s._v(" 如果不使用 JavaScript，那么无需关心"),e("code",[s._v("jsconfig.json")])])]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("Tip:")]),s._v(" "),e("code",[s._v("jsconfig.json")]),s._v("源于 TypeScript 的配置文件"),e("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("tsconfig.json"),e("OutboundLink")],1),s._v("。相当于"),e("code",[s._v("tsconfig.json")]),s._v("的"),e("code",[s._v("allowJs")]),s._v("属性设置为"),e("code",[s._v("true")])])]),s._v(" "),e("h2",{attrs:{id:"为什么需要-jsconfig-json-文件？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要-jsconfig-json-文件？"}},[s._v("#")]),s._v(" 为什么需要 jsconfig.json 文件？")]),s._v(" "),e("p",[s._v("Visual Studio Code 的"),e("code",[s._v("JavaScript支持")]),s._v("可以在两种不同的模式下运行：")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("文件范围 - 没有 jsconfig.json")]),s._v("：在此模式下，在 Visual Studio Code 中打开的 JavaScript 文件被视为独立的单元。只要文件"),e("code",[s._v("a.js")]),s._v("没有明确引用文件"),e("code",[s._v("b.ts")]),s._v("(使用"),e("code",[s._v("import")]),s._v("或"),e("strong",[s._v("CommonJS")]),s._v(" "),e("a",{attrs:{href:"http://www.commonjs.org/specs/modules/1.0",target:"_blank",rel:"noopener noreferrer"}},[s._v("modules"),e("OutboundLink")],1),s._v(")，那么两个文件之间就没有公共的项目上下文")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("显式项目 - 包含 jsconfig.json")]),s._v("：JavaScript 项目是通过"),e("code",[s._v("jsconfig.json")]),s._v("文件定义的，目录中存在此文件表示该目录是 JavaScript 项目的根目录。文件本身可以选择列出属于项目的文件，要从项目中排除的文件以及编译器选项等（请参见下文）")])])]),s._v(" "),e("p",[s._v("当工作空间中有一个定义项目上下文的"),e("code",[s._v("jsconfig.json")]),s._v("文件时，JavaScript 体验会得到改善。因此，当在新的工作区中打开 JavaScript 文件时，我们提供了创建"),e("code",[s._v("jsconfig.json")]),s._v("文件的提示")]),s._v(" "),e("h3",{attrs:{id:"jsconfig-json-的位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsconfig-json-的位置"}},[s._v("#")]),s._v(" jsconfig.json 的位置")]),s._v(" "),e("p",[s._v("通过创建一个"),e("code",[s._v("jsconfig.json")]),s._v("文件，我们将代码的这一部分（网站的客户端）定义为 JavaScript 项目。如下所示，将文件放置在 JavaScript 代码的根目录下")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://code.visualstudio.com/assets/docs/languages/javascript/jsconfig_setup.png",alt:"jsconfig 设置"}})]),s._v(" "),e("p",[s._v("在更复杂的项目中，工作空间中可能定义了多个"),e("code",[s._v("jsconfig.json")]),s._v("文件。这将需要执行此操作，以便 IntelliSense 不会把一个项目中的代码错误地提示给另一个项目中的代码。下面是一个带有"),e("code",[s._v("client")]),s._v("和"),e("code",[s._v("server")]),s._v("文件夹的项目，其中显示了两个单独的 JavaScript 项目")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://code.visualstudio.com/assets/docs/languages/javascript/complex_jsconfig_setup.png",alt:"多个 jsconfig"}})]),s._v(" "),e("blockquote",[e("p",[s._v("注： IntelliSense 译为智能感知，在 vscode 环境下意为智能代码提示，下文不再翻译")])]),s._v(" "),e("h2",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),e("p",[s._v("默认情况下，JavaScript 语言服务将分析并为你的 JavaScript 项目中的所有文件提供 IntelliSense，你需要指定要排除或包括的文件，以提供适当的 IntelliSense")]),s._v(" "),e("h3",{attrs:{id:"使用-exclude-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-exclude-属性"}},[s._v("#")]),s._v(" 使用 exclude 属性")]),s._v(" "),e("p",[e("code",[s._v("exclude")]),s._v("属性（"),e("a",{attrs:{href:"https://www.cnblogs.com/savorboard/p/glob.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("glob 模式"),e("OutboundLink")],1),s._v("）告诉语言服务哪些文件不属于源代码，这样可以使性能保持较高水平。如果 IntelliSense 速度较慢，则可尝试一些文件(夹)添加到"),e("code",[s._v("exclude")]),s._v("列表中（VS Code 如果检测到速度减慢将提示你执行此操作）")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es6"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exclude"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("blockquote",[e("p",[e("strong",[s._v("Tip:")]),s._v(" 建议排除由构建过程生成的文件（例如"),e("code",[s._v("dist")]),s._v("目录），否则这些文件将导致建议显示两次，并且会降低 IntelliSense 的速度")])]),s._v(" "),e("h3",{attrs:{id:"使用-include-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-include-属性"}},[s._v("#")]),s._v(" 使用 include 属性")]),s._v(" "),e("p",[s._v("另外，可以使用 include 属性（全局模式）在项目中显式设置文件。如果不存在"),e("code",[s._v("include")]),s._v("属性，则默认为包含目录和子目录中的所有文件。当指定"),e("code",[s._v("include")]),s._v("属性时，仅包括指定的那些文件。下面是一个带有显式"),e("code",[s._v("include")]),s._v("属性的示例")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es6"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("blockquote",[e("p",[e("strong",[s._v("Tip:")]),s._v(" exclude 和 include 中的文件路径是相对于 jsconfig.json 位置的")])]),s._v(" "),e("h2",{attrs:{id:"jsconfig-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsconfig-options"}},[s._v("#")]),s._v(" jsconfig Options")]),s._v(" "),e("p",[s._v("以下是用于配置 JavaScript 语言支持的"),e("code",[s._v("jsconfig")]),s._v("的"),e("code",[s._v("compilerOptions")])]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("Tip:")]),s._v(" 不要被 compilerOptions 所迷惑。该属性存在是因为 jsconfig.json 源自 tsconfig.json，后者用于编译 TypeScript")])]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("选项")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("noLib")])]),s._v(" "),e("td",[s._v("不包括默认库文件 lib.d.ts")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("target")])]),s._v(" "),e("td",[s._v("指定要使用的默认库 lib.d.ts，可选 es3 / es5 / es6 / es2015 / es2016 / es2017 / es2018 / es2019 / es2020 / esnext")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("module")])]),s._v(" "),e("td",[s._v("指定模块系统（生成模块代码时），可选 amd / commonJS / es2015 / es6 / esnext / none / system / umd")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("moduleResolution")])]),s._v(" "),e("td",[s._v("指定如何解析模块以进行导入，可选 node / classic")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("checkJs")])]),s._v(" "),e("td",[s._v("对 JavaScript 文件启用类型检查")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("experimentalDecorators")])]),s._v(" "),e("td",[s._v("为"),e("code",[s._v("ES装饰器")]),s._v("提案提供实验支持")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("allowSyntheticDefaultImports")])]),s._v(" "),e("td",[s._v("允许从模块进行默认导入而没有默认导出。这不影响代码生成，仅影响类型检查")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("baseUrl")])]),s._v(" "),e("td",[s._v("基本目录，用于解析非相对模块名称")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("paths")])]),s._v(" "),e("td",[s._v("指定要相对于 baseUrl 选项计算的路径映射")])])])]),s._v(" "),e("p",[s._v("可在 "),e("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("TypeScript 编译选项文档"),e("OutboundLink")],1),s._v(" 中阅读有关可用的"),e("code",[s._v("compilerOptions")]),s._v("的更多信息")]),s._v(" "),e("h2",{attrs:{id:"使用-webpack-别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-webpack-别名"}},[s._v("#")]),s._v(" 使用 Webpack 别名")]),s._v(" "),e("p",[s._v("为了使 IntelliSense 使用 Webpack 别名，需要使用全局模式指定"),e("code",[s._v("paths")])]),s._v(" "),e("p",[s._v("例如，对于别名 ClientApp")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"baseUrl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"paths"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ClientApp/*"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./ClientApp/*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("然后使用别名")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Something "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ClientApp/foo'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),e("p",[s._v("尽可能排除包含 JavaScript 代码但又不属于项目源代码的文件(夹)")]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("Tip:")]),s._v(" 如果工作空间中没有"),e("code",[s._v("jsconfig.json")]),s._v("，则 VS Code 默认情况下将排除"),e("code",[s._v("node_modules")]),s._v("文件夹")])]),s._v(" "),e("p",[s._v("下表是 常见项目组件 到其 安装文件夹的表，建议将其排除在外：")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("组件")]),s._v(" "),e("th",[s._v("要排除的文件夹")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("code",[s._v("node")])]),s._v(" "),e("td",[s._v("排除"),e("code",[s._v("node_modules")]),s._v(" 文件夹")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("webpack")]),s._v(", "),e("code",[s._v("webpack-dev-server")])]),s._v(" "),e("td",[s._v("排除生成内容文件夹, 例如"),e("code",[s._v("dist")])])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("bower")])]),s._v(" "),e("td",[s._v("排除"),e("code",[s._v("bower_components")]),s._v("文件夹")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("ember")])]),s._v(" "),e("td",[s._v("排除"),e("code",[s._v("tmp")]),s._v(" and"),e("code",[s._v("temp")]),s._v("文件夹")])]),s._v(" "),e("tr",[e("td",[e("code",[s._v("jspm")])]),s._v(" "),e("td",[s._v("排除"),e("code",[s._v("jspm_packages")]),s._v("文件夹")])])])]),s._v(" "),e("p",[s._v("当 JavaScript 项目变得太大而性能降低时，通常是由于库文件夹（如"),e("code",[s._v("node_modules")]),s._v("）所致。如果 VS Code 检测到项目过大，将提示你编辑"),e("code",[s._v("exclude")]),s._v("列表")])])}),[],!1,null,null,null);t.default=n.exports}}]);