(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{361:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、简介"}},[t._v("#")]),t._v(" 一、简介")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.ovirt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("oVirt"),a("OutboundLink")],1),t._v(" 是一个基于 x86 架构上的 KVM 虚拟化技术的开源 IaaS 云服务解决方案，在架构设计上它使用了 Node/Engine 分离结构，以方便功能的划分与管理；节点端 oVirt-Node，由 Fedaro 16 订制而成，也可以在 Linux 系统上安装 VDSM 服务从而得到一个 Node。")]),t._v(" "),a("h3",{attrs:{id:"_1-ovirt-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-ovirt-engine"}},[t._v("#")]),t._v(" 1.oVirt-Engine")]),t._v(" "),a("p",[t._v("类似于 VMware vCenter，基于 Web 页面。\noVirt 的目的是提供一套符合市场规范的 KVM 虚拟化管理软件，尽可能的开发和利用 KVM 的特点。")]),t._v(" "),a("h3",{attrs:{id:"_2-ovirt-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ovirt-node"}},[t._v("#")]),t._v(" 2.oVirt-Node")]),t._v(" "),a("p",[t._v("可以使用 oVirt 节点，Red Hat Enterprise Linux 或 CentOS Linux 作为主机。\nNode 可以由一个普通的 Linux 上安装 VDSM（Virtual Desktop Server Manager 虚拟桌面服务管理）构成，也可以由一个专为 oVirt 定制的 Linux 系统构成。\n在定制的情况下，Node 上的许多文件系统都是 ramdisk（基于内存的 Linux 磁盘设备），系统重启后其中的内容消失，从而保证了 Node 的无状态性。")]),t._v(" "),a("h2",{attrs:{id:"二、架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、架构"}},[t._v("#")]),t._v(" 二、架构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/f21eb4ffa6c46.png",alt:"image.png"}})]),t._v(" "),a("ul",[a("li",[t._v("oVirt-Engine 用于部署，监视，移动，停止和创建 VM 映像，配置存储，网络等；我们运行虚拟机（VM）的一个或多个主机（节点）一个或多个存储节点，其保存与这些 VM 对应的图像和 ISO。此外，通常在引擎旁边部署身份服务，以对 oVirt-Engine 的用户和管理员进行身份验证。")]),t._v(" "),a("li",[t._v("节点是安装了 VDSM 和 libvirt 的 Linux 发行版，以及一些额外的软件包，可以轻松实现网络和其他系统服务的虚拟化；迄今为止受支持的 Linux 发行版是 Fedora 17 或 oVirt-Node，它基本上是一个精简版本，包含足够的组件以允许虚拟化。")]),t._v(" "),a("li",[t._v("存储节点可以使用块或文件存储，可以是本地或远程，通过 NFS 访问； POSIXFS 存储类型支持 Gluster 等存储技术。存储节点分组为存储池，可确保高可用性和冗余。 VDSM 存储术语页面包含更多详细信息。")]),t._v(" "),a("li",[t._v("VDSM（Host Agent）：运行在 oVirt-Nodes 上，为 oVirt-Engine 提供 VM 相关操作")]),t._v(" "),a("li",[t._v("Guest Agent：运行在虚拟机内部，监控资源使用并上报给 VDSM，通信方式是虚拟 Serial")]),t._v(" "),a("li",[t._v("DWH：数据仓库，执行 ETL 后将数据写入 History DB")]),t._v(" "),a("li",[t._v("Reports Engine：基于 Jasper Reports，根据 History DB 中的数据生成报表")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/7dee004178f25.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"三、封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、封装"}},[t._v("#")]),t._v(" 三、封装")]),t._v(" "),a("h3",{attrs:{id:"_1-虚拟机模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-虚拟机模板"}},[t._v("#")]),t._v(" 1.虚拟机模板")]),t._v(" "),a("p",[t._v("CentOS 7")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#标识 “重新配置”")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" /.unconfigured\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除 ssh 主机密钥")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" /etc/ssh/ssh_host_*\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#恢复原始主机名 ”localhost“")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#CentOS6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/^HOSTNAME/cHOSTNAME=localhost.localdomain'")]),t._v(" /etc/sysconfig/network\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#CentOS7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/^HOSTNAME/cHOSTNAME=localhost.localdomain'")]),t._v(" /etc/hostname\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#清理 udev")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" /etc/udev/rules.d/70-*\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除网卡硬件标识")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/HWADDR/d'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/UUID/d'")]),t._v(" /etc/sysconfig/network-scripts/ifcfg-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("eth,enp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("*\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#清空日志")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" /var/log/*\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭虚拟机")]),t._v("\npoweroff\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h3",{attrs:{id:"_2-新建虚拟主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-新建虚拟主机"}},[t._v("#")]),t._v(" 2.新建虚拟主机")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/9d8a2e68b6191.png",alt:"image.png"}}),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/53deb752924d1.png",alt:"image.png"}}),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/3986c60f242ee.png",alt:"image.png"}}),t._v(" "),a("a",{attrs:{href:"https://virt-manager.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://virt-manager.org/download/"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);