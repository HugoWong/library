(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{416:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),a("p",[s._v("巨硬官网 - "),a("a",{attrs:{href:"https://dotnet.microsoft.com/zh-cn/download/dotnet",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dotnet.microsoft.com/zh-cn/download/dotnet"),a("OutboundLink")],1),s._v("\n环境很简单，根据需要选择版本；SDK 很大，如果不需要在 Linux 上开发，只需要安装运行时即可")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Uvh")]),s._v(" https://packages.microsoft.com/config/rhel/7/packages-microsoft-prod.rpm\nyum update\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dotnet-runtime-3.1\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dotnet-sdk-3.1\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" aspnetcore-runtime-3.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"版本区分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本区分"}},[s._v("#")]),s._v(" 版本区分")]),s._v(" "),a("p",[s._v("注意："),a("strong",[s._v("aspnetcore")]),s._v(" 和 "),a("strong",[s._v("dotnet")]),s._v(" 是两个东西\n/usr/share/dotnet/shared/Microsoft.NETCore.App/3.1.23")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dotnet "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--info")]),s._v("\n  It was not possible to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" any installed .NET Core SDKs\n  Did you mean to run .NET Core SDK commands? Install a .NET Core SDK from:\n      https://aka.ms/dotnet-download\n\nHost "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("useful "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" support"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n  Version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1")]),s._v(".23\n  Commit:  7af614fde0\n\n.NET Core SDKs installed:\n  No SDKs were found.\n\n.NET Core runtimes installed:\n  Microsoft.NETCore.App "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1")]),s._v(".23 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/usr/share/dotnet/shared/Microsoft.NETCore.App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nTo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" additional .NET Core runtimes or SDKs:\n  https://aka.ms/dotnet-download\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关命令"}},[s._v("#")]),s._v(" 相关命令")]),s._v(" "),a("p",[s._v(".NET 监听所有 IP")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dotnet ./publish/Scigo.Utils.HttpApi.dll  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--urls")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://*:5000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);