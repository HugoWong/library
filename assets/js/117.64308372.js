(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{430:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("转发功能：按照指定的规则进行"),t("strong",[s._v("轮询")]),s._v("将请求转发给所有应用服务器，减轻单机压力，提高并发量\n故障移除：通过心跳检测判断应用服务器状态，自动标记宕机服务器并将请求发送给其他应用服务器\n恢复添加：检测到发生故障的应用服务器恢复正常，会自动将其添加到处理用户请求的服务器集群中")]),s._v(" "),t("h2",{attrs:{id:"实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[s._v("#")]),s._v(" 实现原理")]),s._v(" "),t("p",[s._v("Nginx 利用自身反向代理功能，在conf配置文件中添加反向代理地址，以代理服务器的身份接受客户端发送过来的请求，然后将请求转发给内部网络上的应用服务器，并将从服务器上得到的结果返回给客户端，此时代理服务器对外就表现为一个服务器，不过它只负责转发请求，不负责处理。\n值得注意的是，"),t("strong",[s._v("Nginx 默认只支持七层代理转发（基于 HTTP），负载均衡需要从四层进行代理转发（基于 TCP/UDP）")]),s._v("，也就需要在编译安装时增加相应的参数")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./configure --with-stream\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"转发策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转发策略"}},[s._v("#")]),s._v(" 转发策略")]),s._v(" "),t("p",[s._v("客户端请求由多个服务器进行处理，客户端请求默认按时间顺序依次转发（轮询）到不同的应用服务器，并且会自动剔除停机的后端服务")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("weight")]),s._v(" "),t("td",[s._v("默认为 1，数值越大，负载的权重就越大")])]),s._v(" "),t("tr",[t("td",[s._v("max_fails")]),s._v(" "),t("td",[s._v("请求超时次数，默认为 1，与 fail_timeout 结合使用")])]),s._v(" "),t("tr",[t("td",[s._v("fail_timeout")]),s._v(" "),t("td",[s._v("请求超时时间，与 max_fails 结合使用")])]),s._v(" "),t("tr",[t("td",[s._v("backup")]),s._v(" "),t("td",[s._v("标记为备用服务器，其他服务器忙碌时，请求会被转到这里")])]),s._v(" "),t("tr",[t("td",[s._v("down")]),s._v(" "),t("td",[s._v("标记为服务器停机，不参与负载")])])])]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" hyperf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9501 weight=1 max_fails=3 fail_timeout=10s")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9502 weight=1 max_fails=3 fail_timeout=10s")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9503 weight=1 max_fails=3 fail_timeout=10s")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9504 weight=1 max_fails=3 fail_timeout=10s")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9505 weight=1 max_fails=3 fail_timeout=10s")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("\t\t\t"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("\t\t\t"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl http2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("\t\t\t[::]:443 ssl http2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v("\t\t\tapi.yuwei.cc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v("\t\t/etc/nginx/ssl/api.yuwei.cc.pem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v("\t\t/etc/nginx/ssl/api.yuwei.cc.key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v("  /dev/null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_log")]),s._v("   /var/log/nginx/error_api.yuwei.cc.log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Host "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_host")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X-Real-IP "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X-Forwarded-For "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://hyperf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h3",{attrs:{id:"设置权重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置权重"}},[s._v("#")]),s._v(" 设置权重")]),s._v(" "),t("p",[s._v("指定轮询几率，即 weight")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" hyperf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9501 weight=3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9502 weight=2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9503")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9504")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9505 weight=2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n......\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[s._v("权重越高分配到需要处理的请求越多")]),s._v(" "),t("li",[s._v("可以与 least_conn 和 ip_hash 结合使用")]),s._v(" "),t("li",[s._v("比较适合服务器的硬件配置差别比较大的情况")])]),s._v(" "),t("h3",{attrs:{id:"ip-hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip-hash"}},[s._v("#")]),s._v(" ip_hash")]),s._v(" "),t("p",[s._v("请求按访问 ip 的 hash 分配，每个访客会固定访问一个后端服务，可以解决 Session 不能跨服务器的问题")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" hyperf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ip_hash")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9501 weight=1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9502 weight=2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9503 weight=3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9504 weight=4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9505 weight=5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n......\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[s._v("nginx v1.3.1 之前的版本不能在 ip_hash 中使用权重（weight）")]),s._v(" "),t("li",[s._v("ip_hash 不能与 backup 同时使用")]),s._v(" "),t("li",[s._v("此策略适合有状态服务，比如 Session")]),s._v(" "),t("li",[s._v("当有服务器需要剔除，必须手动 down 掉")])]),s._v(" "),t("h3",{attrs:{id:"least-conn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#least-conn"}},[s._v("#")]),s._v(" least_conn")]),s._v(" "),t("p",[s._v("选取"),t("strong",[s._v("活跃连接数与权重的比值最小")]),s._v("的服务器处理下一个请求，上一次已选和已达到最大连接数的不在选择范围； 适合请求处理时间长短不一造成服务过载的情况")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" hyperf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("least_conn")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9501 weight=1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9502 weight=2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9503 weight=1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9504 weight=1\n    server 127.0.0.1:9505 weight=1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n......\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"其他策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他策略"}},[s._v("#")]),s._v(" 其他策略")]),s._v(" "),t("p",[s._v("以下策略已经十多年没更新，不确定新版 Nginx 能正常用，建议忽略")]),s._v(" "),t("h3",{attrs:{id:"fair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fair"}},[s._v("#")]),s._v(" fair")]),s._v(" "),t("p",[s._v("需要在编译安装时添加 "),t("a",{attrs:{href:"https://github.com/gnosek/nginx-upstream-fair",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx-upstream-fair"),t("OutboundLink")],1),s._v(" 模块，"),t("a",{attrs:{href:"https://www.nginx.com/resources/wiki/modules/fair_balancer/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx 官网"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./configure --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/absolute/path/to/nginx-upstream-fair\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("请求按响应时间来分配，响应时间短的优先分配")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" hyperf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fair")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9501")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9502")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9503")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9504")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9505")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n......\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"url-hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-hash"}},[s._v("#")]),s._v(" url_hash")]),s._v(" "),t("p",[s._v("需要在编译时添加 "),t("a",{attrs:{href:"https://github.com/evanmiller/nginx_upstream_hash",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx_upstream_hash"),t("OutboundLink")],1),s._v(" 模块")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./configure --add-module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/path/to/this/directory\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("请求按访问 URL 的 hash 分配，使每个 URL 定向到同一个后端服务，后端服务为缓存时比较有效")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" hyperf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在 upstream 中加入 hash 语句，server 语句中不能写入 weight 等其他的参数，hash_method 是使用 hash 算法")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash_method")]),s._v(" crc32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9501")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9502")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9503")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9504")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" 127.0.0.1:9505")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n......\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("Nginx TCP 负载均衡原理上和 LVS 等是一致的，工作在更为底层，性能比 HTTP 负载均衡高不少；不过比不上 LVS，Nginx 工作在用户态，LVS 直接是内核模块，Nginx 相对比较重。")])])}),[],!1,null,null,null);t.default=n.exports}}]);