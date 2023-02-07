(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{439:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、简介说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、简介说明"}},[t._v("#")]),t._v(" 一、简介说明")]),t._v(" "),s("p",[t._v("平台部署的工程有十几个，本地配置文件就得维护十几份；其中有公共的配置，改起来头疼而且无法进行版本管理；这时候就需要一个统一的配置中心进行管理，目前常用的开源服务有："),s("RouterLink",{attrs:{to:"/pages/nacos-config/"}},[t._v("Nacos")]),t._v(" & "),s("RouterLink",{attrs:{to:"/pages/apollo/"}},[t._v("Apollo")])],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("服务对比")]),t._v(" "),s("th",[t._v("Apollo")]),t._v(" "),s("th",[t._v("Nacos")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("开源时间")]),t._v(" "),s("td",[t._v("2016.5")]),t._v(" "),s("td",[t._v("2018.6")])]),t._v(" "),s("tr",[s("td",[t._v("配置实时推送")]),t._v(" "),s("td",[t._v("支持：HTTP 长轮询 1s 内")]),t._v(" "),s("td",[t._v("支持：HTTP 长轮询 1s 内")])]),t._v(" "),s("tr",[s("td",[t._v("版本管理")]),t._v(" "),s("td",[t._v("自动管理")]),t._v(" "),s("td",[t._v("自动管理")])]),t._v(" "),s("tr",[s("td",[t._v("配置回滚")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])]),t._v(" "),s("tr",[s("td",[t._v("灰度发布")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("待支持")])]),t._v(" "),s("tr",[s("td",[t._v("权限管理")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("待支持")])]),t._v(" "),s("tr",[s("td",[t._v("多环境")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])]),t._v(" "),s("tr",[s("td",[t._v("监听查询")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])]),t._v(" "),s("tr",[s("td",[t._v("多语言支持")]),t._v(" "),s("td",[t._v("Go、C++、Python、Java、.Net、OpenAPI")]),t._v(" "),s("td",[t._v("Python、Java、NodeJs、OpenAPI")])]),t._v(" "),s("tr",[s("td",[t._v("高可用最小集群数")]),t._v(" "),s("td",[t._v("Config*2 & Admin*3 & Portal*2 & MySQL="),s("strong",[t._v("8")])]),t._v(" "),s("td",[t._v("Nacos*3 & MySQL="),s("strong",[t._v("4")])])]),t._v(" "),s("tr",[s("td",[t._v("通信协议")]),t._v(" "),s("td",[t._v("HTTP")]),t._v(" "),s("td",[t._v("HTTP")])]),t._v(" "),s("tr",[s("td",[t._v("数据一致性")]),t._v(" "),s("td",[t._v("数据库模拟消息队列，Apollo 定时读消息")]),t._v(" "),s("td",[t._v("HTTP 异步通知")])]),t._v(" "),s("tr",[s("td",[t._v("单机读：TPS")]),t._v(" "),s("td",[t._v("9000")]),t._v(" "),s("td",[t._v("15000")])]),t._v(" "),s("tr",[s("td",[t._v("单机写：TPS")]),t._v(" "),s("td",[t._v("1100")]),t._v(" "),s("td",[t._v("1800")])]),t._v(" "),s("tr",[s("td",[t._v("三节点读")]),t._v(" "),s("td",[t._v("27000")]),t._v(" "),s("td",[t._v("45000")])]),t._v(" "),s("tr",[s("td",[t._v("三节点写")]),t._v(" "),s("td",[t._v("3300")]),t._v(" "),s("td",[t._v("5600")])])])]),t._v(" "),s("p",[t._v("从上述表格不难看出 Nacos & Apollo 功能上几乎没什么差异，但性价比上 Nacos 远优于 Apollo，刚好注册中心用的就是 Nacos")]),t._v(" "),s("ul",[s("li",[t._v("基于 dataId 为 yaml 的文件扩展名配置方式")]),t._v(" "),s("li",[t._v("支持配置的动态更新")]),t._v(" "),s("li",[t._v("支持 profile 粒度")]),t._v(" "),s("li",[t._v("支持自定义 namespace")])]),t._v(" "),s("h2",{attrs:{id:"二、开始改造"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、开始改造"}},[t._v("#")]),t._v(" 二、开始改造")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("改造起来其实很简单")]),t._v(" "),s("ul",[s("li",[t._v("先安装启动 Nacos 服务："),s("RouterLink",{attrs:{to:"/pages/nacos/"}},[t._v("Nacos 安装部署 & 项目实践")])],1),t._v(" "),s("li",[t._v("然后根据不同的环境创建不同的工作空间（也支持配置组、profile 等）")]),t._v(" "),s("li",[t._v("创建公共配置文件，如数据库等中间件的连接信息：common.properties")]),t._v(" "),s("li",[t._v("再将原来的配置整理修改好，重名为工程名导入到 Nacos 配置列表中")]),t._v(" "),s("li",[t._v("启动集成好的后端服务")])])]),t._v(" "),s("h3",{attrs:{id:"_1-集成服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-集成服务"}},[t._v("#")]),t._v(" 1.集成服务")]),t._v(" "),s("h4",{attrs:{id:"_1-1-添加依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-添加依赖"}},[t._v("#")]),t._v(" 1.1.添加依赖")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alibaba.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-alibaba-nacos-config"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h4",{attrs:{id:"_1-2-服务地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-服务地址"}},[t._v("#")]),t._v(" 1.2.服务地址")]),t._v(" "),s("p",[t._v("需要先在工程配置文件添加服务地址：bootstrap.properties")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\nspring.application.name=nacos-config\n#死否启用服务，默认开启，false 关闭\nspring.cloud.nacos.config.enabled = true\nspring.cloud.nacos.config.server-addr = 127.0.0.1:8848\nspring.cloud.nacos.config.username = nacos\nspring.cloud.nacos.config.password = nacos\n#命名空间 ID，默认 public\nspring.cloud.nacos.config.namespace = public\n#配置文件默认扩展名，默认 properties，可以修改为 yaml\nspring.cloud.nacos.config.file-extension = yaml\nspring.cloud.nacos.config.refresh.enabled = true\n#配置文件组，默认 DEFAULT_GROUP\nspring.cloud.nacos.config.group = junyu\n#多（公共）配置加载\nspring.cloud.nacos.config.extension-configs[0].data-id=common.properties\nspring.cloud.nacos.config.extension-configs[0].group=junyu\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("特别说明：使用域名的方式来访问 Nacos 时，80、443 等常用端口也不能省略")]),t._v(" "),s("p",[t._v("如 Nacos 的域名为 nacos.yuwei.cc，端口为 80，server-addr 应该配置为："),s("strong",[t._v("nacos.yuwei.cc:80")])])]),t._v(" "),s("h3",{attrs:{id:"_2-创建配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建配置"}},[t._v("#")]),t._v(" 2.创建配置")]),t._v(" "),s("p",[t._v("浏览器访问 ip:8848/nacos，配置管理 -> 配置列表 -> 导入配置（或者重新创建）"),s("br"),t._v(" "),s("img",{attrs:{src:"https://f.pz.al/pzal/2023/02/02/89061ce5e33bf.png",alt:""}})]),t._v(" "),s("p",[t._v("更多使用见官方文档："),s("a",{attrs:{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/Nacos-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nacos-config"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"三、配置管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、配置管理"}},[t._v("#")]),t._v(" 三、配置管理")]),t._v(" "),s("h3",{attrs:{id:"_1-发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-发布"}},[t._v("#")]),t._v(" 1.发布")]),t._v(" "),s("p",[t._v("通过新建或者在原有配置进行编辑，点击发布，开启 "),s("code",[t._v("spring.cloud.nacos.config.refresh.enabled = true")]),t._v("的话不需要重启后端服务")]),t._v(" "),s("h3",{attrs:{id:"_2-回滚"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-回滚"}},[t._v("#")]),t._v(" 2.回滚")]),t._v(" "),s("p",[t._v("从配置管理 -> 历史版本中找到要回滚的配置，点击右边的"),s("strong",[t._v("回滚")]),t._v("按钮，一键进行回滚")])])}),[],!1,null,null,null);s.default=r.exports}}]);