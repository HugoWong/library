(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{451:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("当我们需要限制单个接口在一定时间内的请求次数，可以通过 Redis 的 zset 类型来实现一个简单的限流。")]),s._v(" "),a("p",[s._v("整体思路是：每一个行为到来时，都维护一次时间窗口，将窗口外的记录全部都清理掉，只保留窗口内的记录。zset 集合中的 score 值非常重要，Value 值没有特别的意义，只要保证唯一就可以了。")]),s._v(" "),a("p",[s._v("这种方式只适合简单的限流，如果限流的量很大，比如：60 秒内操作不能超过 100 万次，就不适合使用窗口限流，因为需要记录窗口内的所有行为，会消耗大量的存储空间。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?php\n\n/**\n * 滑动窗口限流\n *\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user_id")]),s._v(" 用户id\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$action")]),s._v("  行为\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$period")]),s._v(" 滑动窗口宽度"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("秒"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n * @param "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$max_count")]),s._v(" 限制次数\n * @return 返回布尔值，true 表示未限制 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" 表示限制\n */\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" sliding_window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user_id")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$action")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$period")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$max_count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hist:{'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user_id")]),s._v("}:{"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$action")]),s._v('}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$redis")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" new Redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$redis")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1'")]),s._v(",6379"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    // 记录行为\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$redis")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zadd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$key")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time")]),s._v(",md5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("microtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    // 移除掉窗口外的\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$redis")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zremrangebyscore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$key")]),s._v(",0,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$period")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    // 设置过期时间，防止冷用户持续占用内存\n    // 过期时间应该是时间窗口长度+1s\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$redis")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("expire"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$key")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$period")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    // 取窗口行为数\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$redis")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("zcard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$max_count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nsliding_window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'add'")]),s._v(",60,5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);