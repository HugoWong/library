(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{488:function(s,a,t){"use strict";t.r(a);var n=t(3),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Electron 程序打包的会在 resources 目录生成一个 app.asar 文件，大部分的资源页面文件都在这边；需要 "),a("RouterLink",{attrs:{to:"/pages/nodejs-windows/"}},[s._v("Node.js")]),s._v(" 环境")],1),s._v(" "),a("p",[s._v("以 XMind 为例（已失效）")]),s._v(" "),a("div",{staticClass:"language-basic line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-basic"}},[a("code",[s._v("#安装工具\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g asar\n#解包\nasar extract app.asar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n#打包\nasar pack "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" app.asar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"解包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解包"}},[s._v("#")]),s._v(" 解包")]),s._v(" "),a("p",[s._v("以 XMind 12.0.2（202204260729）为例，C:\\Program Files\\XMind\\resources\\app.asar")]),s._v(" "),a("div",{staticClass:"language-basic line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-basic"}},[a("code",[s._v("D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\ncd D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v('\\XMind\\\nasar extract "C'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Program")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Files")]),s._v('\\XMind\\resources\\app.asar" '),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("202204260729")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[s._v("#")]),s._v(" 修改")]),s._v(" "),a("div",{staticClass:"language-basic line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-basic"}},[a("code",[s._v("#增加导出类型（exportSVG）\nD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\XMind\\"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("202204260729")]),s._v("\\main\\main.js\n#关闭导出水印（value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watermark"')]),s._v("）\n#D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\XMind\\"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("202204260729")]),s._v("\\renderer\\"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5055.")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("watermark "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\XMind\\"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("202204260729")]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v("\\images\\map"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("shot\nwatermark.svg\nwatermark"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dark.svg\nwatermark"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("light.svg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/31/1995275d4eb79.png",alt:"image.png"}})]),s._v(" "),a("h2",{attrs:{id:"打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[s._v("#")]),s._v(" 打包")]),s._v(" "),a("div",{staticClass:"language-basic line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-basic"}},[a("code",[s._v("asar pack D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\XMind\\"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("202204260729")]),s._v(" app.asar\n#手动将 app.asar 拷贝回 C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Program")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Files")]),s._v("\\XMind\\resources\\\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);