(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{406:function(s,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://github.com/goharbor/harbor",target:"_blank",rel:"noopener noreferrer"}},[s._v("Harbor"),a("OutboundLink")],1),s._v(" 是存储和分发 Docker 镜像的企业级 Registry 服务器，也支持 Helm 仓库，由 VMware 开源\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/a53eb9fd811be.png",alt:"d2b933ca04b36decdfb76fe79864f1b3.png"}})]),s._v(" "),a("h2",{attrs:{id:"一、介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、介绍"}},[s._v("#")]),s._v(" 一、介绍")]),s._v(" "),a("ul",[a("li",[s._v("基于角色的访问控制")])]),s._v(" "),a("p",[s._v("用户与 Docker 镜像仓库通过“项目”进行组织管理，一个用户可以对多个镜像仓库在同一命名空间（project）里有不同的权限。")]),s._v(" "),a("ul",[a("li",[s._v("基于镜像的复制策略")])]),s._v(" "),a("p",[s._v("镜像可以在多个 Registry 实例中复制（可以将仓库中的镜像同步到远程的 Harbor，类似于 MySQL 主从同步功能），尤其适合于负载均衡，高可用，混合云和多云的场景。")]),s._v(" "),a("ul",[a("li",[s._v("图形化用户界面")])]),s._v(" "),a("p",[s._v("用户可以通过浏览器来浏览，检索当前 Docker 镜像仓库，管理项目和命名空间。")]),s._v(" "),a("ul",[a("li",[s._v("支持 AD/LDAP")])]),s._v(" "),a("p",[s._v("Harbor 可以集成企业内部已有的 AD/LDAP，用于鉴权认证管理。")]),s._v(" "),a("ul",[a("li",[s._v("镜像删除和垃圾回收")])]),s._v(" "),a("p",[s._v("Harbor 支持在 Web 删除镜像，回收无用的镜像，释放磁盘空间；image 可以被删除并且回收 image 占用的空间。")]),s._v(" "),a("ul",[a("li",[s._v("审计管理")])]),s._v(" "),a("p",[s._v("所有针对镜像仓库的操作都可以被记录追溯，用于审计管理。")]),s._v(" "),a("ul",[a("li",[s._v("RESTful API")])]),s._v(" "),a("p",[s._v("RESTful API 提供给管理员对于 Harbor 更多的操控，使得与其它管理软件集成变得更容易。")]),s._v(" "),a("ul",[a("li",[s._v("部署简单")])]),s._v(" "),a("p",[s._v("提供在线和离线两种安装工具，也可以安装到 vSphere 平台（OVA 方式）虚拟设备。")]),s._v(" "),a("h2",{attrs:{id:"二、架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、架构"}},[s._v("#")]),s._v(" 二、架构")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/55b1f405d3ddd.png",alt:"4d67fe4fdf322f4060bed408513db6e3.png"}}),s._v("\nProxy：反向代理工具\nRegistry：负责存储 docker 镜像，处理上传/下载命令。对用户进行访问控制，它指向一个 token 服务，强制用户的每次 docker pull/push 请求都要携带一个合法的 token，registry 会通过公钥对 token 进行解密验证。\nCore service：Harbor 的核心功能：\nUI：图形界面\nWebhook：及时获取registry上image状态变化情况，在registry上配置 webhook，把状态变化传递给UI模块。\nToken 服务：复杂根据用户权限给每个 Docker\nPush/Pull 命令签发 Token。Docker 客户端向 registry 服务发起的请求，如果不包含 token，会被重定向到这里，获得 token 后再重新向 registry 进行请求。\nDatabase：提供数据库服务，存储用户权限，审计日志，docker image 分组信息等数据\nLog collector：为了帮助监控harbor运行，复责收集其他组件的 log，供日后进行分析")]),s._v(" "),a("h2",{attrs:{id:"三、部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、部署"}},[s._v("#")]),s._v(" 三、部署")]),s._v(" "),a("p",[s._v("Harbor 的所有组件都在 Docker 中部署，所以 Harbor 可使用 Docker Compose 快速部署（Harbor 是基于 Docker Registry V2 版本，所以 Docker 版本必须 > = 1.10.0 Docker-Compose >= 1.6.0）；官方列出了需要部署的组件，如下图：\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/0377449cb49eb.png",alt:"image.png"}}),s._v(" "),a("a",{attrs:{href:"https://github.com/goharbor/harbor/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击"),a("OutboundLink")],1),s._v("下载最新的离线安装包，也可以在线安装\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/af1200ded65e0.png",alt:"image.png"}}),s._v("\n上传并解压，然后修改 yml 配置文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /app/service\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/goharbor/harbor/releases/download/v2.6.0/harbor-offline-installer-v2.6.0.tgz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" harbor-offline-installer-v2.6.0.tgz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" harbor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" harbor.yml.tmpl harbor.yml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" harbor.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("配置主机地址和端口等（提时：主机名不要使用 "),a("strong",[s._v("localhost")]),s._v(" 和 "),a("strong",[s._v("127.0.0.1")]),s._v("）\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/e9fcab2bd40dc.png",alt:"image.png"}}),s._v("\n然后进行安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./install.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/ee0a118308ef7.png",alt:"image.png"}}),s._v("\n会先检查是否安装 Docker 和 Docker-Compose 及其版本\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/bce6bb14725ee.png",alt:"image.png"}}),s._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/887124b0f662a.png",alt:"image.png"}}),s._v("\n可以使用 http://127.0.0.1:prot 访问私有仓库\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/30412b6797029.png",alt:"image.png"}})]),s._v(" "),a("blockquote",[a("p",[s._v("账号：admin\n密码：Harbor12345")])]),s._v(" "),a("p",[s._v("登录进去可以修改密码，以及其他的操作\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/57d236cc90f83.png",alt:"image.png"}}),s._v("\n之后命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" docker-compose.yml\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" start\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" restart\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("修改配置给 Docker 添加私有仓库，http 需要使用不安全的字段（insecure-registries）")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("vi /etc/docker/daemon.json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"insecure-registries"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.1.1:8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后重启 Docker 生效")]),s._v(" "),a("h2",{attrs:{id:"四、故障"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、故障"}},[s._v("#")]),s._v(" 四、故障")]),s._v(" "),a("h3",{attrs:{id:"_1-端口冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-端口冲突"}},[s._v("#")]),s._v(" 1.端口冲突")]),s._v(" "),a("blockquote",[a("p",[s._v("Error response from daemon: Ports are not available: exposing port TCP 127.0.0.1:1514 -> 0.0.0.0:0: listen tcp 127.0.0.1:1514: bind: An attempt was made to access a socket in a way forbidden by its access permissions.")])]),s._v(" "),a("p",[s._v("报错信息来看时端口占用，搜索发现 Widnows Hyper-V 默认会排除一些端口")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ano")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" findstr "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1514")]),s._v("\nnetsh interface ipv4 show excludedportrange "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("protocol")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tcp\nnetsh interface ipv4 show excludedportrange "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("protocol")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("udp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/28f7484f26370.png",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"_2-解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决办法"}},[s._v("#")]),s._v(" 2.解决办法")]),s._v(" "),a("p",[s._v("1.以管理员身份运行终端，临时关闭 "),a("strong",[s._v("Hyper-V")]),s._v(" 和 "),a("strong",[s._v("winnat")]),s._v(" 网络")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dism.exe /Online /Disable-Feature:Microsoft-Hyper-V\nnet stop winnat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("2.使用以下命令永久排除指定端口作为保留端口（端口被占用需要先重启下）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("netsh int ipv4 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" excludedportrange "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("protocol")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tcp "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("startport")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1514")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("numberofports")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("store")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("persistent\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("关键在于"),a("code",[s._v("store=persistent")]),s._v("参数表示持久化信息，然后设置起始端口，已经后面的个数\n3.再开启 "),a("strong",[s._v("Hyper-V")]),s._v(" 和 "),a("strong",[s._v("winnat")]),s._v(" 网络，1514 端口就从保留端口排除了")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dism.exe /Online /Enable-Feature:Microsoft-Hyper-V /All\nnet start winnat\nnetsh interface ipv4 show excludedportrange "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("protocol")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tcp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("重新开启 Hyper-V 没有进行重启，其实桌面系统可以不开启这个\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/dd7028077a829.png",alt:"image.png"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);