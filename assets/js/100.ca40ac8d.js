(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{421:function(s,a,t){"use strict";t.r(a);var r=t(3),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"相关设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关设置"}},[s._v("#")]),s._v(" 相关设置")]),s._v(" "),a("h3",{attrs:{id:"密码强度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#密码强度"}},[s._v("#")]),s._v(" 密码强度")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("查看密码的规则：SHOW VARIABLES LIKE "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'validate_password%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nPS：validate_password_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("，表示长度最少为8位；validate_password_policy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MEDIUM，表示密码的安全等级为中。\n临时将密码安全等级设置为 low：set global "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validate_password_policy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("，长度不变。\nGRANT ALL PRIVILEGES ON *.* TO "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Cy#8J&s4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建数据库"}},[s._v("#")]),s._v(" 建数据库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("create database demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n查看默认的数据库：show databases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n进入到mysql库：use mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n查看数据库的用户信息：select host,user from user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n创建用户并允许在任意主机上连接管理 demo 数据库：\nGRANT ALL PRIVILEGES ON demo.* TO "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'12345678'")]),s._v(" WITH GRANT OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"创建用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[s._v("#")]),s._v(" 创建用户")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'12345678'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'87654321'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里只给了查询权限")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("授权语句分析："),a("code",[s._v("GRANT 权限 ON 数据库.数据表 TO '用户'@'主机' IDENTIFIED BY '密码';")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("权限")]),s._v(" "),a("th",[s._v("ALL PRIVILEGES、select、insert、update、delete、create、drop、index、alter、grant、references、reload、shutdown、process、file")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("数据库")]),s._v(" "),a("td",[s._v("指定数据库，没有特别规定用"),a("code",[s._v("*")]),s._v("表示全部")])]),s._v(" "),a("tr",[a("td",[s._v("数据表")]),s._v(" "),a("td",[s._v("指定数据表，没有特别规定用"),a("code",[s._v("*")]),s._v("表示全部")])]),s._v(" "),a("tr",[a("td",[s._v("用户")]),s._v(" "),a("td",[s._v("创建的用户")])]),s._v(" "),a("tr",[a("td",[s._v("主机")]),s._v(" "),a("td",[s._v("指定主机 IP，没有特别规定用"),a("code",[s._v("%")]),s._v("表示全部")])]),s._v(" "),a("tr",[a("td",[s._v("密码")]),s._v(" "),a("td",[s._v("可以跟创建命令不一样")])])])]),s._v(" "),a("h3",{attrs:{id:"忘记密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#忘记密码"}},[s._v("#")]),s._v(" 忘记密码")]),s._v(" "),a("p",[a("code",[s._v("vim /etc/my.cnf")]),s._v(" 在 [mysqld] 底下添加语句：skip-grant-tables，然后重启 mysqld 服务；")]),s._v(" "),a("div",{staticClass:"language-plsql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plsql"}},[a("code",[s._v("systemctl restart mysqld \nmysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u root "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p #直接回车\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" authentication_string"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("注释或者删除：skip-grant-tables，重启 mysqld 服务。")]),s._v(" "),a("h3",{attrs:{id:"监控指标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控指标"}},[s._v("#")]),s._v(" 监控指标")]),s._v(" "),a("p",[s._v("相应指标如下：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类别")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("QPS")]),s._v(" "),a("td",[s._v("数据库每秒处理的请求数量")]),s._v(" "),a("td",[s._v("性能类")])]),s._v(" "),a("tr",[a("td",[s._v("TPS")]),s._v(" "),a("td",[s._v("数据库每秒处理的事务数量")]),s._v(" "),a("td",[s._v("性能类")])]),s._v(" "),a("tr",[a("td",[s._v("并发数")]),s._v(" "),a("td",[s._v("数据库实例当前并行处理的会话数量")]),s._v(" "),a("td",[s._v("性能类")])]),s._v(" "),a("tr",[a("td",[s._v("连接数")]),s._v(" "),a("td",[s._v("连接到数据库会话的数量")]),s._v(" "),a("td",[s._v("性能类")])]),s._v(" "),a("tr",[a("td",[s._v("缓存命中率")]),s._v(" "),a("td",[s._v("查询命中缓存的比例")]),s._v(" "),a("td",[s._v("性能类")])]),s._v(" "),a("tr",[a("td",[s._v("可用性")]),s._v(" "),a("td",[s._v("数据库是否可以正常对外服务")]),s._v(" "),a("td",[s._v("高可用")])]),s._v(" "),a("tr",[a("td",[s._v("阻塞")]),s._v(" "),a("td",[s._v("当前阻塞的会话数")]),s._v(" "),a("td",[s._v("高可用")])]),s._v(" "),a("tr",[a("td",[s._v("慢查询")]),s._v(" "),a("td",[s._v("慢查询情况")]),s._v(" "),a("td",[s._v("高可用")])]),s._v(" "),a("tr",[a("td",[s._v("主从延迟")]),s._v(" "),a("td",[s._v("主从延迟时间")]),s._v(" "),a("td",[s._v("高可用")])]),s._v(" "),a("tr",[a("td",[s._v("主从状态")]),s._v(" "),a("td",[s._v("主从链路是否正常")]),s._v(" "),a("td",[s._v("高可用")])]),s._v(" "),a("tr",[a("td",[s._v("死锁")]),s._v(" "),a("td",[s._v("查看死锁信息")]),s._v(" "),a("td",[s._v("高可用")])])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("QPS：show global status where variable_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Queries'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uptime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nTPS：show global status where variable_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com_insert'")]),s._v(" , "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com_delete'")]),s._v(" , "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com_update'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uptime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n并发数：show global status like "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Threads_running'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n连接数 - 生产中配置报警阈值：Threads_connected /  max_connections "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),s._v("\n当前连接数：show global status like "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Threads_connected'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n最大连接数：show global status like "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'max_connections'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ninnodb 缓冲池查询总数：show global status like "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'innodb_buffer_pool_read_requests'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \ninnodb 从磁盘查询数：show global status like "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'innodb_buffer_pool_reads'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n缓存命中率 - 生产中配置报警阈值："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("innodb_buffer_pool_read_requests - innodb_buffer_pool_reads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" / innodb_buffer_pool_read_requests "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.95")]),s._v(" \n\n慢查询\nmy.cnf 文件添加一下配置：\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("long_query_time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("slow_query_log")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ON\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("slow_query_log_file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/mysqld-slow.log\n实时生效使用命令 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global + 上述配置项\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from information_schema."),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'processlist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n主从延迟/状态：show slave status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n死锁：show engine innodb status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://xie.infoq.cn/article/5e1aec4933a497f773d5406e6",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://xie.infoq.cn/article/5e1aec4933a497f773d5406e6"),a("OutboundLink")],1),s._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/dacf1b49d6f40.png",alt:"image.png"}}),s._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/80cc99424e90a.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"体系结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#体系结构"}},[s._v("#")]),s._v(" 体系结构")]),s._v(" "),a("h3",{attrs:{id:"网络连接层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络连接层"}},[s._v("#")]),s._v(" 网络连接层")]),s._v(" "),a("h3",{attrs:{id:"核心服务层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心服务层"}},[s._v("#")]),s._v(" 核心服务层")]),s._v(" "),a("p",[s._v("核心服务层是整个数据库服务器的核心，主要包括了系统管理和控制工具、连接池、SQL 接口、解析器、查询优化器和缓存等部分\n系统管理和控制工具：提供数据库系统的管理和控制功能，例如对数据库中的数据进行备份和恢复，保证整个数据库的安全性，提供安全管理，对整个数据库的集群进行协调和管理等\n连接池：主要负责存储和管理客户端与数据库的连接信息，连接池里的一个线程负责管理一个客户端到数据库的连接信息\nSQL 接口：主要负责接收客户端发送过来的各种SQL命令，并将 SQL 命令发送到其他部分，并接收其他部分返回的结果数据，将结果数据返回给客户端\n解析器：主要负责对请求的 SQL 解析成一棵“解析树”，然后根据 MySQL 中的一些规则对“解析树”做进一步的语法验证，确认其是否合法\n查询优化器：在 MySQL 中，如果“解析树”通过了解析器的语法检查，此时就会由优化器将其转化（如索引的选择，表的读取顺序等）为执行计划，然后与存储引擎进行交互，通过存储引擎与底层的数据文件进行交互\n缓存：MySQL 的缓存是由一系列的小缓存组成的。例如：MySQL 的表缓存，记录缓存，MySQL 中的权限缓存，引擎缓存，Key 缓存等等，如果查询的结果能够命中缓存，则 MySQL 会直接返回缓存中的结果信息，能够提高数据的查询性能")]),s._v(" "),a("h3",{attrs:{id:"存储引擎层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎层"}},[s._v("#")]),s._v(" 存储引擎层")]),s._v(" "),a("p",[s._v("MySQL 中的存储引擎层主要负责数据的写入和读取，与底层的文件进行交互；MySQL 中的存储引擎是插件式的，服务器中的查询执行引擎通过相关的接口与存储引擎进行通信，同时，接口屏蔽了不同存储引擎之间的差异；MySQL 最常用的存储引擎有 InnoDB 和 MyISAM，开发者可以选择合适的存储引擎，也可以定制化开发存储引擎，存储引擎是基于表的，不是数据库")]),s._v(" "),a("h3",{attrs:{id:"系统文件层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统文件层"}},[s._v("#")]),s._v(" 系统文件层")]),s._v(" "),a("p",[s._v("系统文件层主要包括 MySQL 中存储数据的持久化（物理）文件，与上层的存储引擎进行交互，其存储的文件主要有：日志文件、数据文件、配置文件、MySQL的进行PID 文件和 Socket 文件等")]),s._v(" "),a("h4",{attrs:{id:"日志文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志文件"}},[s._v("#")]),s._v(" 日志文件")]),s._v(" "),a("p",[s._v("主要包括：错误日志、通用查询日志、二进制日志、慢查询日志等")]),s._v(" "),a("h4",{attrs:{id:"错误日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误日志"}},[s._v("#")]),s._v(" 错误日志")]),s._v(" "),a("p",[s._v("主要存储的是 MySQL 运行过程中产生的错误信息。可以使用"),a("code",[s._v("show variables like '%log_error%';")]),s._v("语句来查看 MySQL 中的错误日志")]),s._v(" "),a("div",{staticClass:"language-plsql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plsql"}},[a("code",[s._v("log_error"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("自定义路径\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"通用查询日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用查询日志"}},[s._v("#")]),s._v(" 通用查询日志")]),s._v(" "),a("p",[s._v("主要记录 MySQL 运行过程中的一般查询信息，可以使用语句"),a("code",[s._v("show variables like '%general%';")]),s._v("来查看 MySQL 中的通用查询日志文件")]),s._v(" "),a("div",{staticClass:"language-plsql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plsql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("general")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("|"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("（禁用|开启）\ngeneral_log_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("路径"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("文件名\nlog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FILE|"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v("|NONE（文件|表|不存放，默认 FILE）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"二进制日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制日志"}},[s._v("#")]),s._v(" 二进制日志")]),s._v(" "),a("p",[s._v("主要记录对 MySQL 数据库执行的插入、修改和删除操作，并且也会记录 SQL 语句执行的时间、执行的时长，但是二进制日志不记录 SELECT、SHOW 等不修改数据库的 SQL；主要用于恢复数据库的数据和实现MySQL 主从复制")]),s._v(" "),a("div",{staticClass:"language-plsql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plsql"}},[a("code",[s._v("#查看二进制日志是否开启\nshow variables "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%log_bin%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n#查看二进制日志的参数\nshow variables "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%binlog%'")]),s._v("\n#查看日志文件\nshow "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("binary")]),s._v(" logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"慢查询日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#慢查询日志"}},[s._v("#")]),s._v(" 慢查询日志")]),s._v(" "),a("p",[s._v("慢查询主要记录的是执行时间超过指定时间的 SQL 语句，这个时间默认是 10 秒")]),s._v(" "),a("div",{staticClass:"language-plsql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plsql"}},[a("code",[s._v("#查看是否开启慢查询日志\nshow variables "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%slow_query%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n#查看慢查询设置的时长\nshow variables "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%long_query_time%'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"数据文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据文件"}},[s._v("#")]),s._v(" 数据文件")]),s._v(" "),a("p",[s._v("主要包括了：db.opt 文件、frm 文件、MYD 文件、MYI 文件、ibd 文件、ibdata 文件、ibdata1 文件、ib_logfile0 和 ib_logfile1 文件等")]),s._v(" "),a("h4",{attrs:{id:"db-opt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#db-opt"}},[s._v("#")]),s._v(" db.opt")]),s._v(" "),a("p",[s._v("主要记录当前数据库使用的字符集和检验规则等信息")]),s._v(" "),a("h4",{attrs:{id:"frm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frm"}},[s._v("#")]),s._v(" frm")]),s._v(" "),a("p",[s._v("存储数据表的结构信息，主要是数据表相关的元数据信息，包括数据表的表结构定义信息，每张表都会有一个 frm 文件\n注意："),a("strong",[s._v("MySQL8 版本中的 innodb 存储引擎的表没有 frm 文件")])]),s._v(" "),a("h4",{attrs:{id:"myd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myd"}},[s._v("#")]),s._v(" MYD")]),s._v(" "),a("p",[s._v("MyISAM 存储引擎专用的文件格式，主要存放 MyISAM 存储引擎数据表中的数据，每张 MyISAM 存储引擎表对应一个 MYD 文件")]),s._v(" "),a("h4",{attrs:{id:"myi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myi"}},[s._v("#")]),s._v(" MYI")]),s._v(" "),a("p",[s._v("MyISAM 存储引擎专用的文件格式，主要存放与 MyISAM 存储引擎数据表相关的索引信息，每张 MyISAM 存储引擎表对应一个 MYI 文件")]),s._v(" "),a("h4",{attrs:{id:"ibd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibd"}},[s._v("#")]),s._v(" ibd")]),s._v(" "),a("p",[s._v("存放 Innodb 存储引擎的数据文件和索引文件，主要存放的是独享表空间的数据和索引，每张表对应一个 ibd 文件")]),s._v(" "),a("h4",{attrs:{id:"ibdata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibdata"}},[s._v("#")]),s._v(" ibdata")]),s._v(" "),a("p",[s._v("存放 Innodb 存储引擎的数据文件和索引文件，主要存放的是共享表空间的数据和索引，所有表共用一个（或者多个）ibdata 文件，可以根据配置来指定共用的 ibdata 文件个数")]),s._v(" "),a("h4",{attrs:{id:"ibdata1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibdata1"}},[s._v("#")]),s._v(" ibdata1")]),s._v(" "),a("p",[s._v("MySQL 的系统表空间数据文件，主要存储 MySQL 的数据表元数据、Undo 日志等信息")]),s._v(" "),a("h4",{attrs:{id:"ib-logfile0-和-ib-logfile1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ib-logfile0-和-ib-logfile1"}},[s._v("#")]),s._v(" ib_logfile0 和 ib_logfile1")]),s._v(" "),a("p",[s._v("MySQL 数据库中的 Redo log 文件，主要用于 MySQL 实现事务的持久性；如果在某个时间点 MySQL 发生了故障，此时如果有脏页没有写入到数据库的 ibd 文件中，在重启 MySQL 的时候，MySQL 会根据 Redo Log 信息进行重做，将写入 Redo Log 并且尚未写入数据表的数据进行持久化操作")]),s._v(" "),a("h3",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),a("p",[s._v("用于存储 MySQL 所有的配置信息，在 Unix/Linux 环境中是 my.cnf 文件，在 Windows 环境中是 my.ini 文件")]),s._v(" "),a("h4",{attrs:{id:"pid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pid"}},[s._v("#")]),s._v(" PID")]),s._v(" "),a("p",[s._v("pid 文件是存放 MySQL 进程运行时的进程号的文件，主要存在于 Unix/Linux 环境中，具体的存储目录可以在 my.cnf 文件中进行配置")]),s._v(" "),a("h4",{attrs:{id:"socket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socket"}},[s._v("#")]),s._v(" Socket")]),s._v(" "),a("p",[s._v("socket 文件和 pid 文件一样，都是 MySQL 在 Unix/Linux 环境中运行才会有的文件，客户端可以直接通过 Socket 来连接 MySQL")]),s._v(" "),a("h2",{attrs:{id:"工具命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具命令"}},[s._v("#")]),s._v(" 工具命令")]),s._v(" "),a("h3",{attrs:{id:"ngram"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ngram"}},[s._v("#")]),s._v(" ngram")]),s._v(" "),a("p",[s._v("全文解析器")]),s._v(" "),a("h3",{attrs:{id:"explain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain"}},[s._v("#")]),s._v(" explain")]),s._v(" "),a("p",[s._v("查看执行计划，查询 SQL 走了哪些索引")]),s._v(" "),a("h3",{attrs:{id:"show-profile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-profile"}},[s._v("#")]),s._v(" show profile")]),s._v(" "),a("p",[s._v("查看 SQL 对系统资源的损耗情况")]),s._v(" "),a("h3",{attrs:{id:"xbstream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xbstream"}},[s._v("#")]),s._v(" xbstream")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /data\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /root/28.xb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" xbstream "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /data\n\nxtrabackup "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--decompress")]),s._v(" --remove-original --target-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data\nxtrabackup "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--prepare")]),s._v("  --use-memory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1GB --target-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" mysql:mysql /data\nxtrabackup --defaults-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/my.cnf --move-back --target-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data\nxtrabackup "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--datadir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/mysql --copy-back --target-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/mysql/data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" https://downloads.percona.com/downloads/Percona-XtraBackup-2.4/Percona-XtraBackup-2.4.24/binary/redhat/7/x86_64/percona-xtrabackup-24-2.4.24-1.el7.x86_64.rpm\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" https://repo.percona.com/yum/release/7/RPMS/x86_64/qpress-11-1.el7.x86_64.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);