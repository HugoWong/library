(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{450:function(s,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("分布式锁：控制分布式系统不同进程共同访问共享资源的一种锁的实现，一般依托第三方组件来实现，而利用 "),a("strong",[s._v("Redis")]),s._v(" 实现则是工作中应用最多的一种")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("Redis 能够用来实现分布式锁的命令有 INCR、SETNX、SET，并利用过期时间命令 expire 作为辅助\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("互斥性：锁的目的是获取资源的使用权，所以只让一个竞争者持有锁")]),s._v(" "),a("li",[s._v("安全性：持有锁超时，可以释放，防止不必要的资源浪费，也可以防止死锁。")]),s._v(" "),a("li",[s._v("对称性：同一个锁，加锁和解锁必须是同一个竞争者，这又称为锁的可重入性")]),s._v(" "),a("li",[s._v("可靠性：需要有一定程度的异常处理能力、容灾能力")])]),s._v(" "),a("h2",{attrs:{id:"incr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#incr"}},[s._v("#")]),s._v(" INCR")]),s._v(" "),a("p",[s._v("如果 key 不存在，则初始化值为 0，然后再利用 INCR 进行加 1 操作；后续用户如果获取到的值大于等于 1，说明已经被其他线程加锁；当持有锁的用户在执行完任务后，利用 DECR 命令将 key 的值减 1，则表示释放锁")]),s._v(" "),a("h2",{attrs:{id:"setnx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setnx"}},[s._v("#")]),s._v(" SETNX")]),s._v(" "),a("p",[s._v("最简单的实现方式，直接用 setnx 命令加锁，通过 delete 解锁")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("setnx key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果 key 不存在，则会将 key 设置为 value ，并返回 1；如果 key 存在，返回 0")]),s._v(" "),a("h3",{attrs:{id:"expire"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expire"}},[s._v("#")]),s._v(" expire")]),s._v(" "),a("p",[s._v("获取锁的服务意外挂掉，锁得不到释放就会造成"),a("strong",[s._v("死锁")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nx ex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("seconds"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"owner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#owner"}},[s._v("#")]),s._v(" owner")]),s._v(" "),a("p",[s._v("放置其他服务使用 delete 命令"),a("strong",[s._v("释放不属于自己的锁")])]),s._v(" "),a("h3",{attrs:{id:"原子化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原子化"}},[s._v("#")]),s._v(" 原子化")]),s._v(" "),a("p",[s._v("Redis + Lua 脚本实现复合操作原子化")]),s._v(" "),a("h3",{attrs:{id:"可靠性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可靠性"}},[s._v("#")]),s._v(" 可靠性")]),s._v(" "),a("ul",[a("li",[s._v("主从复制")]),s._v(" "),a("li",[s._v("哨兵模式")]),s._v(" "),a("li",[s._v("集群模式")])]),s._v(" "),a("h2",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[s._v("#")]),s._v(" SET")]),s._v(" "),a("p",[s._v("set 指令有非常复杂的参数，相当于合成了 setnx 和 expire 两条命令的功能；其命令格式如：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$Key")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),s._v(", array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nx'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ex'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ttl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);