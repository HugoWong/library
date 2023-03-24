(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{456:function(s,a,n){"use strict";n.r(a);var e=n(3),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),a("p",[s._v("去官网下载和自己系统匹配的文件：\n"),a("a",{attrs:{href:"https://nodejs.org/dist/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nodejs.org/dist/"),a("OutboundLink")],1),s._v("\n英文网址："),a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nodejs.org/en/download/"),a("OutboundLink")],1),s._v("\n中文网址："),a("a",{attrs:{href:"http://nodejs.cn/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://nodejs.cn/download/"),a("OutboundLink")],1),s._v("\n下载下来的 tar 文件上传到服务器并且解压，然后通过建立软连接变为全局；")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" node-v14.18.1-linux-x64.tar.gz https://nodejs.org/download/release/v14.18.1/node-v14.18.1-linux-x64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" node-v14.18.1-linux-x64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" node-v14.18.1-linux-x64 nodejs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"配置软链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置软链"}},[s._v("#")]),s._v(" 配置软链")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立软链接，变为全局")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/local/nodejs/bin/npm /usr/bin/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/local/nodejs/bin/node /usr/bin/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 Linux 命令行 node -v 命令会显示版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"使用技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用技巧"}},[s._v("#")]),s._v(" 使用技巧")]),s._v(" "),a("p",[s._v("复用 node_modules 文件夹")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sh")]),s._v(" *\nNuxt\nnuxt.config.js\n\npackage.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);