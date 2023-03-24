(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{498:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"c-s-架构-套接字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-s-架构-套接字"}},[t._v("#")]),t._v(" C/S 架构 & 套接字")]),t._v(" "),s("p",[t._v("C/S 架构的全称是 Client/Server，即客户端/服务器架构；它是一种网络体系架构，通常采取两层：服务器负责数据的管理，客户端负责完成与用户的交互任务")]),t._v(" "),s("p",[t._v("socket 即"),s("strong",[t._v("套接字")]),t._v("，是计算机网络数据结构，任何类型的通信开始之前，网络应用必须创建套接字；最初是为同一主机上的应用程序创建，用于进程间通信（Inter Process Communication, IPC）。")]),t._v(" "),s("p",[t._v("类型：")]),t._v(" "),s("ul",[s("li",[t._v("基于文件")]),t._v(" "),s("li",[t._v("面向网路")])]),t._v(" "),s("p",[t._v("家族：")]),t._v(" "),s("ul",[s("li",[t._v("AF_UNIX / AF_LOCAL")]),t._v(" "),s("li",[t._v("AF_INET")]),t._v(" "),s("li",[t._v("AF_NETLINK")]),t._v(" "),s("li",[t._v("AF_TIPC")])]),t._v(" "),s("p",[t._v("套接字地址：主机-端口对（0-65535，小于 1024 为系统预留端口），https://www.iana.org/assignments/port-numbers")]),t._v(" "),s("p",[t._v("状态：")]),t._v(" "),s("ul",[s("li",[t._v("面向连接套接字：TCP/IP，SOCK_STREAM")]),t._v(" "),s("li",[t._v("无连接套接字：UDP/IP，SOCK_DGRAM")])]),t._v(" "),s("h2",{attrs:{id:"socket-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#socket-模块"}},[t._v("#")]),t._v(" socket 模块")]),t._v(" "),s("h3",{attrs:{id:"socket-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#socket-函数"}},[t._v("#")]),t._v(" socket() 函数")]),t._v(" "),s("p",[t._v("函数语法："),s("code",[t._v("socket (socket_family, socket_type, protocol=0)")]),t._v("，protocol 通常省略，默认为 0")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" socket "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建 TCP/IP 套接字")]),t._v("\ntcpSock "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AF_INET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SOCK_STREAM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建 UDP/IP 套接字")]),t._v("\nudpSock "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AF_INET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SOCK_DGRAM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"内置方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置方法"}},[t._v("#")]),t._v(" 内置方法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("用途")]),t._v(" "),s("th",[t._v("函数")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("服务器端")]),t._v(" "),s("td",[t._v("s.bind()")]),t._v(" "),s("td",[t._v("绑定地址（主机名，端口号对）到套接字")])]),t._v(" "),s("tr",[s("td",[t._v("服务器端")]),t._v(" "),s("td",[t._v("s.listen()")]),t._v(" "),s("td",[t._v("开始 TCP 监听")])]),t._v(" "),s("tr",[s("td",[t._v("服务器端")]),t._v(" "),s("td",[t._v("s.accept()")]),t._v(" "),s("td",[t._v("被动接受 TCP 客户端链接，（阻塞式）等待链接的到来")])]),t._v(" "),s("tr",[s("td",[t._v("客户端")]),t._v(" "),s("td",[t._v("s.connect()")]),t._v(" "),s("td",[t._v("主动初始化 TCP 服务器链接")])]),t._v(" "),s("tr",[s("td",[t._v("客户端")]),t._v(" "),s("td",[t._v("s.connect_ex()")]),t._v(" "),s("td",[t._v("connect() 扩展版本，出错时返回错误码，而不是抛出异常")])]),t._v(" "),s("tr",[s("td",[t._v("公共用途")]),t._v(" "),s("td",[t._v("s.recv()")]),t._v(" "),s("td",[t._v("接受 TCP 数据")])]),t._v(" "),s("tr",[s("td",[t._v("公共用途")]),t._v(" "),s("td",[t._v("s.send()")]),t._v(" "),s("td",[t._v("发送 TCP 数据")])]),t._v(" "),s("tr",[s("td",[t._v("公共用途")]),t._v(" "),s("td",[t._v("s.sendall()")]),t._v(" "),s("td",[t._v("完整发送 TCP 数据")])]),t._v(" "),s("tr",[s("td",[t._v("公共用途")]),t._v(" "),s("td",[t._v("s.recvfrom()")]),t._v(" "),s("td",[t._v("接受 UDP 数据")])]),t._v(" "),s("tr",[s("td",[t._v("公共用途")]),t._v(" "),s("td",[t._v("s.sendto()")]),t._v(" "),s("td",[t._v("发送 UDP 数据")])]),t._v(" "),s("tr",[s("td",[t._v("公共用途")]),t._v(" "),s("td",[t._v("s.getpeername()")]),t._v(" "),s("td",[t._v("链接到当前套接字的远程的地址（TCP 链接）")])]),t._v(" "),s("tr",[s("td",[t._v("公共用途")]),t._v(" "),s("td",[t._v("s.getsockname()")]),t._v(" "),s("td",[t._v("当前套接字的地址")])]),t._v(" "),s("tr",[s("td",[t._v("公共用途")]),t._v(" "),s("td",[t._v("s.getsockopt()")]),t._v(" "),s("td",[t._v("返回当前套接字的参数")])]),t._v(" "),s("tr",[s("td",[t._v("公共用途")]),t._v(" "),s("td",[t._v("s.setsockopt()")]),t._v(" "),s("td",[t._v("设置指定套接字的参数")])]),t._v(" "),s("tr",[s("td",[t._v("公共用途")]),t._v(" "),s("td",[t._v("s.close()")]),t._v(" "),s("td",[t._v("关闭套接字")])]),t._v(" "),s("tr",[s("td",[t._v("面向模块")]),t._v(" "),s("td",[t._v("s.setblocking()")]),t._v(" "),s("td",[t._v("设置套接字的阻塞与非阻塞模式")])]),t._v(" "),s("tr",[s("td",[t._v("面向模块")]),t._v(" "),s("td",[t._v("s.settimeout()")]),t._v(" "),s("td",[t._v("设置阻塞套接字操做的超时时间")])]),t._v(" "),s("tr",[s("td",[t._v("面向模块")]),t._v(" "),s("td",[t._v("s.gettimeout()")]),t._v(" "),s("td",[t._v("获得阻塞套接字操做的超时时间")])]),t._v(" "),s("tr",[s("td",[t._v("面向文件")]),t._v(" "),s("td",[t._v("s.fileno()")]),t._v(" "),s("td",[t._v("套接字文件描述符")])]),t._v(" "),s("tr",[s("td",[t._v("面向文件")]),t._v(" "),s("td",[t._v("s.makefile()")]),t._v(" "),s("td",[t._v("建立一个与该套接字关联的文件对")])])])]),t._v(" "),s("h3",{attrs:{id:"伪代码实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪代码实例"}},[t._v("#")]),t._v(" 伪代码实例")]),t._v(" "),s("h4",{attrs:{id:"tcp-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-服务器"}},[t._v("#")]),t._v(" TCP 服务器")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建 TCP/IP 服务器套接字")]),t._v("\nss "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#套接字与地址绑定")]),t._v("\nss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#监听连接")]),t._v("\nss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#服务器无限循环")]),t._v("\ninf_loop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#接受客户端连接")]),t._v("\ncs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accept"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#通信循环")]),t._v("\ncomm_loop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#对话接收/发送")]),t._v("\ncs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭客户端套接字")]),t._v("\ncs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭服务器套接字")]),t._v("\nss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("p",[t._v("SocketServer 模块以 socket 为基础而创建的高级套接字通信模块，支持客户端请求的线程和多线程处理")]),t._v(" "),s("h4",{attrs:{id:"tcp-客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-客户端"}},[t._v("#")]),t._v(" TCP 客户端")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建 TCP/IP 服务器套接字")]),t._v("\ncs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#尝试连接服务器")]),t._v("\ncs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#通信循环")]),t._v("\ncomm_loop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#对话发送/接收")]),t._v("\ncs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭客户端套接字")]),t._v("\ncs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h4",{attrs:{id:"udp-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp-服务器"}},[t._v("#")]),t._v(" UDP 服务器")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建 TCP/IP 服务器套接字")]),t._v("\nss "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#套接字与地址绑定")]),t._v("\nss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#监听连接")]),t._v("\nss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#服务器无限循环")]),t._v("\ninf_loop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#对话接收/发送")]),t._v("\ncs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recvfrom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sendto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭客户端套接字")]),t._v("\ncs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭服务器套接字")]),t._v("\nss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("h4",{attrs:{id:"udp-客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp-客户端"}},[t._v("#")]),t._v(" UDP 客户端")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建 TCP/IP 服务器套接字")]),t._v("\ncs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#通信循环")]),t._v("\ncomm_loop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#对话发送/接收")]),t._v("\ncs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sendto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recvfrom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭客户端套接字")]),t._v("\ncs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h3",{attrs:{id:"socket-模块属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#socket-模块属性"}},[t._v("#")]),t._v(" socket 模块属性")]),t._v(" "),s("h3",{attrs:{id:"socketserver-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#socketserver-模块"}},[t._v("#")]),t._v(" SocketServer 模块")]),t._v(" "),s("p",[t._v("3.x 重命名为 socketserver，使编写一个 Socket 服务器通信变得更加简单，其实就是对 socket 的再封装")]),t._v(" "),s("h4",{attrs:{id:"模块类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块类"}},[t._v("#")]),t._v(" 模块类")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("BaseServer")]),t._v(" "),s("td",[t._v("包括服务器的核心功能与混合类的一些功能")])]),t._v(" "),s("tr",[s("td",[t._v("TCPServer/UDPServer")]),t._v(" "),s("td",[t._v("基本的网络同步 TCP/UDP 服务器")])]),t._v(" "),s("tr",[s("td",[t._v("UnixStreamServer/UnixDatagramServer")]),t._v(" "),s("td",[t._v("基本的文件同步 TCP/UDP 服务器")])]),t._v(" "),s("tr",[s("td",[t._v("ForkingMixIn/ThreadingMixIn")]),t._v(" "),s("td",[t._v("实现了核心的进程/线程化功能，用于与服务器类进行混合，提供异步特性")])]),t._v(" "),s("tr",[s("td",[t._v("ForkingTCPServer/ForkingUDPServer")]),t._v(" "),s("td",[t._v("ForkingMixIn 和 TCPServer/UDPServer 组合")])]),t._v(" "),s("tr",[s("td",[t._v("ThreadingTCPServer/ThreadingUDPServer")]),t._v(" "),s("td",[t._v("Threading 和 TCPServer/UDPServer 组合")])]),t._v(" "),s("tr",[s("td",[t._v("BaseRequestHandler")]),t._v(" "),s("td",[t._v("用于定制 Handler 类型")])]),t._v(" "),s("tr",[s("td",[t._v("StreamRequestHandler/DatagramRequestHandler")]),t._v(" "),s("td",[t._v("TCP/UDP 请求处理类的一个实现")])])])]),t._v(" "),s("h3",{attrs:{id:"twisted-框架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#twisted-框架"}},[t._v("#")]),t._v(" Twisted 框架")]),t._v(" "),s("p",[t._v("Twsited 是一个完整的事件驱动的网络框架，基于它能使用和开发完整的异步网络应用程序和协议；它不属于 Python 标准库，需要单独安装")]),t._v(" "),s("p",[t._v("它提供了大量的支持来建立完整的系统：网络协议、线程、安全性和身份认证、聊天/即时通信、数据库管理、关系数据库集成、Web/Internet、电子邮件、命令行参数、GUI 集成工具包等")])])}),[],!1,null,null,null);s.default=e.exports}}]);