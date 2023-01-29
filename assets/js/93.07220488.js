(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{409:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、安装系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装系统"}},[s._v("#")]),s._v(" 一、安装系统")]),s._v(" "),a("p",[s._v("开启 WSL 功能并安装分发版，按系统版本下载并安装 WSL 2 内核更新包： "),a("a",{attrs:{href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi",target:"_blank",rel:"noopener noreferrer"}},[s._v("x64"),a("OutboundLink")],1),s._v(" & "),a("a",{attrs:{href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_arm64.msi",target:"_blank",rel:"noopener noreferrer"}},[s._v("ARM64"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#官方可安装 WSL 分发版")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#本地已安装 WSL 分发版")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_1-centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-centos"}},[s._v("#")]),s._v(" 1.CentOS")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.yuque.com/kb/devops/sha016?view=doc_embed",target:"_blank",rel:"noopener noreferrer"}},[s._v("适用于 Linux 的 Windows 子系统：CentOS"),a("OutboundLink")],1),s._v("\nCentOS 8 停止维护，7 也会在 2024 年停止更新，可以安装一个 Debian")]),s._v(" "),a("h3",{attrs:{id:"_2-debian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-debian"}},[s._v("#")]),s._v(" 2.Debian")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("wsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" Debian\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/61b5157ce58d6.png",alt:"image.png"}}),s._v("\n安装 WSL 后，需要为新安装的 Linux 发行版创建用户帐户和密码；不能用 root。\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/9cbfe42747eae.png",alt:"image.png"}}),s._v("\n安装完成以后，进行更新")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("开启 Windows 功能“虚拟机平台”，再通过"),a("code",[s._v("wsl --set-default-version 2")]),s._v("命令将 WSL 2 设置为默认版本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#切换指定分发的 WSL 版本")]),s._v("\nwsl --set-version Debian "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"二、docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、docker"}},[s._v("#")]),s._v(" 二、Docker")]),s._v(" "),a("h3",{attrs:{id:"_1-下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载安装"}},[s._v("#")]),s._v(" 1.下载安装")]),s._v(" "),a("p",[s._v("硬件满足条件且 WSL 2 已经安装并更新内核的机器，下载安装 "),a("a",{attrs:{href:"https://www.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Desktop"),a("OutboundLink")],1),s._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/04ef52905950e.png",alt:"image.png"}}),s._v("\n直接运行\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/ef1d8cd609b34.png",alt:"image.png"}}),s._v("\n会自动创建两个 WSL 分发版："),a("strong",[s._v("docker-desktop")]),s._v("、"),a("strong",[s._v("docker-desktop-data")]),s._v("，如果怕 Docker 镜像等占用系统盘存储空间，可以移动这两个分发版的存储位置")]),s._v(" "),a("h3",{attrs:{id:"_2-存储位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-存储位置"}},[s._v("#")]),s._v(" 2.存储位置")]),s._v(" "),a("p",[s._v("推出 Docker Desktop 程序，任意位置右键，点击“在终端中打开”")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭所有分发版")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("shutdown\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看分发版运行状态，确定全部为 Stopped")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#备份 Docker Desktop 发⾏版数据到指定位置")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("export docker-desktop D:\\WSL\\Docker\\Backup\\docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("export docker-desktop-"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),s._v(" D:\\WSL\\Docker\\Backup\\docker-"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#注销 Docker Desktop 发⾏版")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("unregister docker-desktop\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("unregister docker-desktop-"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入 Docker Desktop 发⾏版数据到指定位置，不要修改分发版名称")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("import docker-desktop D:\\WSL\\Docker D:\\WSL\\Docker\\Backup\\docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("version 2\nwsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("import docker-desktop-"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),s._v(" D:\\WSL\\Docker\\"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Data")]),s._v(" D:\\WSL\\Docker\\Backup\\docker-"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("version 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("code",[s._v("wsl --import")]),s._v("命令会在指定目录下创建对应的"),a("code",[s._v("ext4.vhdx")]),s._v("文件，打开 Docker Desktop 客户端，查看该文件的修改时间是否更新为客户端的打开时间，是则表示修改成功。")]),s._v(" "),a("h3",{attrs:{id:"_3-general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-general"}},[s._v("#")]),s._v(" 3.General")]),s._v(" "),a("p",[s._v("使用 WSL 2，Use the WSL 2 based engine\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/4ac5b2eaf007a.png",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"_4-设置最大内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置最大内存"}},[s._v("#")]),s._v(" 4.设置最大内存")]),s._v(" "),a("p",[s._v("打开用户目录：%UserProfile%，新建 .wslconfig 文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("wsl2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("memory")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2GB\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("processors")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("swap")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("localhostForwarding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#然后重启 WSL 分发版")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--shutdown")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_5-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-resources"}},[s._v("#")]),s._v(" 5.Resources")]),s._v(" "),a("p",[s._v("Settings -> Resources -> WSL Integration -> Apply & Restart，这一步是开启 WSL 指定的分发版可以调用 Docker，如下所示：开启后 CentOS 分发版不用安装 Docker 就可以使用 Docker 命令\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/85075d691e917.png",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"_6-docker-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-docker-engine"}},[s._v("#")]),s._v(" 6.Docker Engine")]),s._v(" "),a("p",[s._v("Settings -> Docker Engine -> 替换为以下内容（修改或者删除"),a("code",[s._v("<你的ID>")]),s._v("所在条目） -> Apply & Restart")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"builder"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gc"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"defaultKeepStorage"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20GB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"enabled"')]),s._v(": true\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"experimental"')]),s._v(": false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"features"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"buildkit"')]),s._v(": true\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"debug"')]),s._v(": true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://hub-mirror.c.163.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://ustc-edu-cn.mirror.aliyuncs.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://<你的ID>.mirror.aliyuncs.com"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"三、kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、kubernetes"}},[s._v("#")]),s._v(" 三、Kubernetes")]),s._v(" "),a("p",[s._v("Settings -> Kubernetes -> ✔"),a("code",[s._v("Enable Kubernetes")]),s._v(" -> Apply & Restart，安装 Kubernetes，关闭直接取消这个按钮的勾选\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/b98bf69baa47f.png",alt:"image.png"}}),s._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/c0a4f0e123dc8.png",alt:"image.png"}}),s._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/be08f2ee73cd9.png",alt:"image.png"}}),s._v("\n安装完成以后，橙色部分变绿，表示真在运行\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/33c1a76bf5d78.png",alt:"image.png"}}),s._v("\n运行"),a("code",[s._v("kubectl get nodes")]),s._v("返回如下也表示成功\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/2d47b9884c583.png",alt:"image.png"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);