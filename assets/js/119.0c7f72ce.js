(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{436:function(a,s,t){"use strict";t.r(s);var n=t(3),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("ul",[s("li",[s("RouterLink",{attrs:{to:"/pages/elasticsearch/"}},[a._v("Elasticsearch")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/pages/logstash/"}},[a._v("Logstash")])],1)]),a._v(" "),s("h2",{attrs:{id:"kibana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kibana"}},[a._v("#")]),a._v(" Kibana")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.elastic.co/cn/downloads/kibana",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.elastic.co/cn/downloads/kibana"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"下载安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[a._v("#")]),a._v(" 下载安装")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /app/elk\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://artifacts.elastic.co/downloads/kibana/kibana-8.0.0-linux-x86_64.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-zxvf")]),a._v("  kibana-8.0.0-linux-x86_64.tar.gz "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" /app/service/elk\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" kibana-8.0.0 kibana\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pv")]),a._v(" /app/data/kibana "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pv")]),a._v(" /app/logs/kibana\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[a._v("#")]),a._v(" 修改配置")]),a._v(" "),s("p",[a._v("按需进行设置："),s("code",[a._v("vi /app/service/elk/kibana/kibana.yml")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##kibana 页面映射在 5601 端口")]),a._v("\nserver.port: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5601")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##许所有 ip 访问 5601 端口")]),a._v("\nserver.host: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.0.0.0"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##Elasticsearch 所在的 ip 及监听的地址")]),a._v("\nelasticsearch.url: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://localhost:9200"')]),a._v("\nelasticsearch.username: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"kibana_system"')]),a._v("\nelasticsearch.password: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"5BW6Tahvj5wdbNrdJaoK"')]),a._v("\nkibana.index: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".kibana"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##设置中文")]),a._v("\ni18n.locale: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zh-CN"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("xpack.security.enabled: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\nxpack.ingestManager.fleet.tlsCheckDisabled: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\nxpack.security.encryptionKey: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"xN2dWHheUoUoNoToBGqhjgBJH2Q5FrHN"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[a._v("#")]),a._v(" 运行")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 运行成功以后输入以下语句检测是否成功")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-lantp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5601")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看状态")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" http://ip:5601/status\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);