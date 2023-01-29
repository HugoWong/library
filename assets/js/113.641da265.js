(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{429:function(a,s,t){"use strict";t.r(s);var n=t(3),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("容器：Docker\n"),s("a",{attrs:{href:"https://www.yuque.com/go/doc/71736283?view=doc_embed",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker 容器"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\nsystemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h1",{attrs:{id:"镜像准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像准备"}},[a._v("#")]),a._v(" 镜像准备")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://hub.docker.com/u/zabbix",target:"_blank",rel:"noopener noreferrer"}},[a._v("Zabbix 官方镜像"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[a._v("#")]),a._v(" MySQL")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull mysql:8.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[a._v("#")]),a._v(" Server")]),a._v(" "),s("p",[a._v("Zabbix-Server 镜像分两种：支持 MySQL 数据库的 "),s("a",{attrs:{href:"https://hub.docker.com/r/zabbix/zabbix-server-mysql/",target:"_blank",rel:"noopener noreferrer"}},[a._v("zabbix-server-mysql"),s("OutboundLink")],1),a._v(" 和支持 PostgreSQL 数据库的 "),s("a",{attrs:{href:"https://hub.docker.com/r/zabbix/zabbix-server-pgsql/",target:"_blank",rel:"noopener noreferrer"}},[a._v("zabbix-server-pgsql"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull zabbix/zabbix-server-mysql:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"web"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[a._v("#")]),a._v(" Web")]),a._v(" "),s("p",[a._v("官方共有五种，习惯性使用 Nginx，所以选择 "),s("a",{attrs:{href:"https://hub.docker.com/r/zabbix/zabbix-web-nginx-mysql",target:"_blank",rel:"noopener noreferrer"}},[a._v("zabbix-web-nginx-mysql"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull zabbix/zabbix-web-nginx-mysql:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"java-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-gateway"}},[a._v("#")]),a._v(" Java Gateway")]),a._v(" "),s("p",[a._v("选配，Zabbix 默认不支持 Java，需要安装 "),s("a",{attrs:{href:"https://hub.docker.com/r/zabbix/zabbix-java-gateway/",target:"_blank",rel:"noopener noreferrer"}},[a._v("zabbix-java-gateway"),s("OutboundLink")],1),a._v(" 来监控 JVM/Tomcat 的性能，按需选配")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull zabbix/zabbix-java-gateway:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"构建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[a._v("#")]),a._v(" 构建镜像")]),a._v(" "),s("p",[a._v("进阶")]),a._v(" "),s("h1",{attrs:{id:"运行镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行镜像"}},[a._v("#")]),a._v(" 运行镜像")]),a._v(" "),s("h2",{attrs:{id:"分批启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分批启动"}},[a._v("#")]),a._v(" 分批启动")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#创建网络")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" network create "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" bridge zabbix_net\n "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" network "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" zabbix-mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("13306")]),a._v(":3306 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),a._v(" zabbix_net "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_DATABASE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix1@#$"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"root_1@#$"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      --character-set-server"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("utf8 --collation-server"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("utf8_bin\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/zabbix/mysql:/var/lib/mysql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /etc/localtime:/etc/localtime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      mysql:8.0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" zabbix-java-gateway "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("zabbix_net "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      zabbix/zabbix-java-gateway:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" zabbix-server "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10051")]),a._v(":10051 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("zabbix_net "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_SERVER_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix-mysql"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_DATABASE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix1@#$"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"root_1@#$"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ZBX_JAVAGATEWAY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix-java-gateway"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      zabbix/zabbix-server-mysql:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" zabbix-web "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-dit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":8080 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("zabbix_net "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ZBX_SERVER_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix-server-mysql"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DB_SERVER_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix-mysql"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_DATABASE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zabbix1@#$"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"root_1@#$"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      zabbix/zabbix-web-nginx-mysql:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h2",{attrs:{id:"批量启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量启动"}},[a._v("#")]),a._v(" 批量启动")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" zibbix-docker.yml\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" up "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"3"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mysql-server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8.0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("mysql\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("      \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_DATABASE=zabbix\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_USER=zabbix\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_PASSWORD=zabbix1@"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#$")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_ROOT_PASSWORD=roo_1@"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#$")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 13306"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" /data/zabbix/mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/lib/mysql\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("character"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("server=utf8\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("collation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("server=utf8_bin\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("zabbix-server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zabbix/zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("mysql\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DB_SERVER_HOST=zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("mysql\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_USER=zabbix\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_PASSWORD=zabbix1@"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#$")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_DATABASE=zabbix\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_ROOT_PASSWORD=root_1@"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#$")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 10051"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10051")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("links")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("mysql\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("depends_on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("mysql\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" /etc/localtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/etc/localtime\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" /data/zabbix/etc/zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/etc/zabbix      \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" /data/zabbix/alertscripts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/usr/lib/zabbix/alertscripts\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("zabbix-web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" zabbix/zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" DB_SERVER_HOST=mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("server\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_USER=zabbix\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_PASSWORD=zabbix1@"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#$")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_DATABASE=zabbix\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MYSQL_ROOT_PASSWORD=roo_1@"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#$")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token datetime number"}},[a._v("80:80")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" /etc/localtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/etc/localtime\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("links")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("mysql\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("server\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("depends_on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("mysql\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" zabbix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("server\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br"),s("span",{staticClass:"line-number"},[a._v("51")]),s("br"),s("span",{staticClass:"line-number"},[a._v("52")]),s("br"),s("span",{staticClass:"line-number"},[a._v("53")]),s("br"),s("span",{staticClass:"line-number"},[a._v("54")]),s("br"),s("span",{staticClass:"line-number"},[a._v("55")]),s("br"),s("span",{staticClass:"line-number"},[a._v("56")]),s("br")])]),s("h1",{attrs:{id:"监控实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控实践"}},[a._v("#")]),a._v(" 监控实践")])])}),[],!1,null,null,null);s.default=e.exports}}]);