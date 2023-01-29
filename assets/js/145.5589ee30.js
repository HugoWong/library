(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{458:function(a,t,r){"use strict";r.r(t);var s=r(3),n=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[a._v("#")]),a._v(" 依赖")]),a._v(" "),t("p",[a._v("RabbitMQ （以下简称：MQ）是实现了高级消息队列协议（AMQP）的开源消息代理软件（亦称面向消息的中间件），服务器是用 "),t("a",{attrs:{href:"https://www.erlang.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[a._v("Erlang"),t("OutboundLink")],1),a._v(" 语言编写的，而集群和故障转移是构建在开放电信平台框架上的，所有主要的编程语言均有与代理接口通讯的客户端库。")]),a._v(" "),t("h3",{attrs:{id:"erlang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erlang"}},[a._v("#")]),a._v(" Erlang")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.rabbitmq.com/which-erlang.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("点击"),t("OutboundLink")],1),a._v("查询 MQ 需要的 Erlang 版本，下载双击安装即可。\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/812df9810379f.png",alt:"image.png"}}),a._v(" "),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/c66734ea5b6d9.png",alt:"image.png"}}),a._v("\n安装完成以后新建环境变量：变量名：ERLANG_HOME，变量值就是刚才 Erlang 的安装地址，点击确定；\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/64635cc06973b.png",alt:"image.png"}}),a._v("\n然后双击系统变量 Path，点击“新建”，将 %ERLANG_HOME%\\bin 加入到 Path 中，点击确定；\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/888608944d029.png",alt:"image.png"}}),a._v("\n最后 Win+R 键，运行 CMD，输入 erl 显示如下即可。\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/1ce1c58c88d97.png",alt:"image.png"}})]),a._v(" "),t("h3",{attrs:{id:"rabbitmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[a._v("#")]),a._v(" RabbitMQ")]),a._v(" "),t("p",[a._v("按需"),t("a",{attrs:{href:"https://www.rabbitmq.com/download.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载"),t("OutboundLink")],1),a._v(" MQ 版本，然后进行安装\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/8a12ae979df41.png",alt:"image.png"}})]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("h3",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.rabbitmq.com/install-windows-manual.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方安装文档"),t("OutboundLink")],1),a._v(" "),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/c85bce05ef5bc.png",alt:"image.png"}}),a._v(" "),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/a5d10d6cec053.png",alt:"image.png"}}),a._v("\nRabbitMQ 安装好后是作为 Windows Service 运行在后台\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/d43fb7ad2ba3d.png",alt:"image.png"}}),a._v("\n设置环境变量\n新建环境变量，变量名：RABBITQM_SERVER，变量值就是刚才 RabbitMQ 的安装地址，点击确定；\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/abbcd953afd17.png",alt:"image.png"}}),a._v("\n然后双击系统变量 Path，点击“新建”，将 %RABBITQM_SERVER%\\sbin 加入到 Path 中，点击确定；\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/80bf017583b2e.png",alt:"image.png"}})]),a._v(" "),t("h3",{attrs:{id:"安装插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[a._v("#")]),a._v(" 安装插件")]),a._v(" "),t("p",[t("code",[a._v("rabbitmq-plugins list")]),a._v(" 查看 RabbtitMQ 所有插件；\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/56bb75307d2ac.png",alt:"image.png"}}),a._v("\nrabbitmq_management 插件可以可视化的方式查看 RabbitMQ 服务器实例的状态，以及操控 RabbitMQ 服务器："),t("code",[a._v("rabbitmq-plugins enable rabbitmq_management")]),a._v("，看到下图表示安装成功。\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/ae37fdec3d887.png",alt:"image.png"}}),a._v("\n在浏览器中输入："),t("a",{attrs:{href:"http://localhost:15672",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:15672"),t("OutboundLink")],1),a._v(" 可以看到一个登录界面，默认账号为：guest/guest：\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/f767963770b48.png",alt:"image.png"}}),a._v("\n浏览器中输入 "),t("a",{attrs:{href:"http://localhost:15672/api/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:15672/api/"),t("OutboundLink")],1),a._v(" 就可以看到 RabbitMQ Management HTTP API 文档：\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/0913b898a2b8b.png",alt:"image.png"}})]),a._v(" "),t("h2",{attrs:{id:"linix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linix"}},[a._v("#")]),a._v(" Linix")]),a._v(" "),t("h2",{attrs:{id:"管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理"}},[a._v("#")]),a._v(" 管理")]),a._v(" "),t("h3",{attrs:{id:"管理用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理用户"}},[a._v("#")]),a._v(" 管理用户")]),a._v(" "),t("p",[a._v("用命令 "),t("code",[a._v("rabbitmqctl list_users")]),a._v(" 查看现有 rabbitmq_management 的注册用户：\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/9038901702f69.png",alt:"image.png"}}),a._v("\nrabbitmqctl add_user [username] [password] 创建用户\nrabbitmqctl set_user_tag [tag1] [tag2] ... 设置用户 Tag\nPS.有 5 个 tag 可供选择，分别是：administrator、monitoring、policymaker、management 和 none。")]),a._v(" "),t("h3",{attrs:{id:"忘记密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#忘记密码"}},[a._v("#")]),a._v(" 忘记密码")]),a._v(" "),t("p",[a._v("重新创建用户，并授权")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("rabbitmqctl add_user newadmin newpassword\nrabbitmqctl set_user_tags newadmin administrator\nrabbitmqctl set_permissions "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" / newadmin "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);