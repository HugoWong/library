(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{327:function(t,a,r){"use strict";r.r(a);var e=r(3),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("之前一直将树莓派 3B（OpenWrt）作当主路由器使用，华为 WS5200 做 AP，可无奈树莓派只有一个网卡，又不想旁路，正好老家升级千兆网络，远古的极路由 1S 就空出来了，刚好拿来用")]),t._v(" "),a("p",[a("mark",[t._v("本文适用于刷所有的第三方固件")])]),t._v(" "),a("h2",{attrs:{id:"前期准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前期准备"}},[t._v("#")]),t._v(" 前期准备")]),t._v(" "),a("h3",{attrs:{id:"breed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breed"}},[t._v("#")]),t._v(" Breed")]),t._v(" "),a("p",[t._v("从 "),a("a",{attrs:{href:"https://breed.hackpascal.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://breed.hackpascal.net/"),a("OutboundLink")],1),t._v(" 网站下载极路由 1S（hc5661 没有 a）固件 "),a("a",{attrs:{href:"https://breed.hackpascal.net/breed-mt7620-hiwifi-hc5761.bin",target:"_blank",rel:"noopener noreferrer"}},[t._v("mt7620-hiwifi-hc5761.bin"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"openwrt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openwrt"}},[t._v("#")]),t._v(" OpenWrt")]),t._v(" "),a("p",[t._v("官方存档 - "),a("a",{attrs:{href:"https://archive.openwrt.org/releases/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://archive.openwrt.org/releases/"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://archive.openwrt.org/releases/21.02.3/targets/ramips/mt7620/openwrt-21.02.3-ramips-mt7620-hiwifi_hc5661-squashfs-sysupgrade.bin",target:"_blank",rel:"noopener noreferrer"}},[t._v("21.02.3"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://downloads.openwrt.org/releases/22.03.0-rc1/targets/ramips/mt7620/openwrt-22.03.0-rc1-ramips-mt7620-hiwifi_hc5661-squashfs-sysupgrade.bin",target:"_blank",rel:"noopener noreferrer"}},[t._v("22.03.0-rc1"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"刷机流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷机流程"}},[t._v("#")]),t._v(" 刷机流程")]),t._v(" "),a("h3",{attrs:{id:"ssh-连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-连接"}},[t._v("#")]),t._v(" SSH 连接")]),t._v(" "),a("p",[t._v("需要开启开发者模式（厂家已经倒闭，现存没有开启开发者模式的设备应该不多），直接 SSH 连接，端口号是 1022"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/104d3462e009a.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("用户名：root，密码是路由器密码"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/e952aee79b5f5.png",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"刷-u-boot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷-u-boot"}},[t._v("#")]),t._v(" 刷 u-boot")]),t._v(" "),a("p",[t._v("PS."),a("strong",[t._v("请认准设备型号，刷错变砖要用编程器，很麻烦")])]),t._v(" "),a("p",[t._v("路由器没有开启 SFTP 服务，用 WinSCP 通过 SCP 协议建立一个会话"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/ffdb0e9c307bb.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("然后进入想要存放镜像的目录，如：/tmp，将镜像拖拽进去即可"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/7e5cfc54f84e2.png",alt:"image.png"}}),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/f8f75b61e32e4.png",alt:"image.png"}})]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /tmp\nmtd "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" breed-mt7620-hiwifi-hc5761.bin u-boot\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/2a859a8ee6d96.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("断开极路由电源，按住 reset，再通电直至路由器指示灯全闪后（5 秒左右），浏览器访问 "),a("a",{attrs:{href:"http://192.168.1.1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("192.168.1.1"),a("OutboundLink")],1),t._v(" 进入 breed Web 控制台，备份完整固件和 eeprom，刷入 OpenWrt 即可"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/ceb0e17cce00a.png",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"刷-openwrt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷-openwrt"}},[t._v("#")]),t._v(" 刷 OpenWrt")]),t._v(" "),a("p",[t._v("进入 breed 界面，切换到“固件更新”，勾选“固件”，选择下载好的镜像，点击上传"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/e0ffd6b560487.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("更新"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/c290759c411de.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("然后完成"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/1415a3207c151.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"openwrt-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openwrt-2"}},[t._v("#")]),t._v(" OpenWrt")]),t._v(" "),a("p",[t._v("刷入成功以后，OpenWrt 管理地址 192.168.1.1，账户 root，密码等待设置")]),t._v(" "),a("h3",{attrs:{id:"汉化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#汉化"}},[t._v("#")]),t._v(" 汉化")]),t._v(" "),a("p",[t._v("OpenWrt 安装后是英文版本，看着不够友好，可以通过安装中文汉化包的方式来解决：\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/988f6dd481f57.png",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://op.supes.top/packages/mipsel_24kc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://op.supes.top/packages/mipsel_24kc/"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"padavan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#padavan"}},[t._v("#")]),t._v(" Padavan")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://opt.cn2qq.com/padavan/",target:"_blank",rel:"noopener noreferrer"}},[t._v("hiboy"),a("OutboundLink")],1),t._v("，搜索 ji1S 或者 7620，亲测三个 trx 文件都可以用，强迫症，最后用了 ji1S 版本")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/chongshengB",target:"_blank",rel:"noopener noreferrer"}},[t._v("chongshengB"),a("OutboundLink")],1),t._v("，使用 Github Actions 自行"),a("a",{attrs:{href:"https://github.com/chongshengB/Padavan-build",target:"_blank",rel:"noopener noreferrer"}},[t._v("编译"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("刷入成功以后，Padavan 管理地址 192.168.2.1，账户密码都是 admin，先从“系统管理”->“配置管理”里恢复"),a("code",[t._v("nvram")]),t._v("和"),a("code",[t._v("/etc/storage")]),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/054961d5b4713.png",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"外网-wan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外网-wan"}},[t._v("#")]),t._v(" 外网 WAN")]),t._v(" "),a("p",[t._v("外网设置"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/3d6cb8c939e3b.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("IPv6 协议"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/3dd3395fdc225.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("测试 - "),a("a",{attrs:{href:"https://test-ipv6.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://test-ipv6.com/"),a("OutboundLink")],1),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/0be9477864533.png",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"ddns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ddns"}},[t._v("#")]),t._v(" DDNS")]),t._v(" "),a("p",[t._v("以花生壳为例"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/a0f63848569b9.jpeg",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[t._v("#")]),t._v(" 防火墙")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/d8d35d42276f7.png",alt:"image.png"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);