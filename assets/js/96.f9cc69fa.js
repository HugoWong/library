(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{412:function(a,t,s){"use strict";s.r(t);var n=s(3),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("说明：系统更新为 Windows 11 22000（体验包也行），处理器支持虚拟化并开启\n1.右键开始 -> 运行 -> 输入“Control”-> 程序和功能 -> 开启或关闭 Windows 功能 -> 勾选 Hyper-V -> 点击确定进行安装，完成后重启系统；\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/ded6ca6295ba7.png",alt:"image.png"}}),a._v("\n2.安装 Window Subsystem for Android 应用，"),t("a",{attrs:{href:"https://yun.yuwei.cc/Setup/WSA.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("点击"),t("OutboundLink")],1),a._v("下载所需要的文件，然后管理员身份运行了 Powershell，执行 Add-AppxPackage -Path xxx 即可；")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("Add-AppPackage "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Path")]),a._v(" D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("WSA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("WSA_1.7.32815.0.Msixbundle\nAdd-AppPackage "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Path")]),a._v(" D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("WSA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Microsoft.UI.Xaml.2.6_2.62108.18004.0_x64__8wekyb3d8bbwe.Appx\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("3.从开始菜单找到并打开 Window Subsystem for Android 应用，设置开发人员模式，并按需设置子系统资源；\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/abbcb6dd9fe78.png",alt:"image.png"}}),a._v("\n4.通过 ADB 安装安卓 APP（如果是正式版使用亚马逊应用市场需要美区账号以及地区需要修改为美国），解压 ADB（platform-tools-latest-windows.zip)，在解压后的目录右键选择“在 Windows 终端中打开”")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("adb.exe connect "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:58526\nadb.exe "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" xx.apk\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("还可以使用随包附带的 WsaToolbox 管理 WSA，解压后直接运行“WsaToolbox.exe”如下图表示连接成功；\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/58205b0aca38d.png",alt:"image.png"}}),a._v("\n其他功能有：安装 APK、APP 管理、查看进程、传输文件\n5.安装完 APP 在开始菜单可以看到新安装的安卓应用或者直接上述 APP 管理中运行、卸载程序。\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/819bd2e43c38e.png",alt:"image.png"}}),a._v("\n直接安卓 11、6G 运存，香的不要不要的！\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/d6a2af8c8e19f.png",alt:"image.png"}})]),a._v(" "),t("p",[a._v("附：安装包获取\n通过抓包安装方法，在 "),t("a",{attrs:{href:"https://store.rg-adguard.net",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://store.rg-adguard.net"),t("OutboundLink")],1),a._v(" 网站，地址栏输入："),t("a",{attrs:{href:"https://www.microsoft.com/store/productId/9P3395VX91NR",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.microsoft.com/store/productId/9P3395VX91NR"),t("OutboundLink")],1),a._v("，然后选择 Slow 通道，点击对勾按钮；\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/6a921bad7589c.png",alt:"image.png"}}),a._v("\n下拉网站页面到最下面，找到包含“WindowsSubsystemForAndroid”字符 1G 多的文件，点击下载。")])])}),[],!1,null,null,null);t.default=e.exports}}]);