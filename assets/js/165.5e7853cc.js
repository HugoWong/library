(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{482:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、基本语法"}},[s._v("#")]),s._v(" 一、基本语法")]),s._v(" "),a("h3",{attrs:{id:"_1-脚本开头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-脚本开头"}},[s._v("#")]),s._v(" 1.脚本开头")]),s._v(" "),a("p",[s._v("指定解析器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#!/bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-脚本注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-脚本注释"}},[s._v("#")]),s._v(" 2.脚本注释")]),s._v(" "),a("p",[s._v("Bash 只支持单行注释，使用"),a("code",[s._v("#")]),s._v("开头的都被当作注释语句")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#整行注释")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" hello world "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#行尾注释")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_3-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据类型"}},[s._v("#")]),s._v(" 3.数据类型")]),s._v(" "),a("p",[s._v("Bash 中基本数据类型只有字符串")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#都是字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" abc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将变量声明为整数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_4-字符串联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-字符串联"}},[s._v("#")]),s._v(" 4.字符串联")]),s._v(" "),a("p",[s._v("Bash 中字符串的串联操作不需要任何操作符，直接将两段数据连接在一起。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("456")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"def"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"二、环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、环境变量"}},[s._v("#")]),s._v(" 二、环境变量")]),s._v(" "),a("h3",{attrs:{id:"_1-系统变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-系统变量"}},[s._v("#")]),s._v(" 1.系统变量")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PWD")]),s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")]),s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示所有变量")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_2-特殊变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-特殊变量"}},[s._v("#")]),s._v(" 2.特殊变量")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${n}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#n 为数字，0 为命令本身，从 1 开始依次往下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输入参数的个数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${*}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#所有参数，看成一个整体")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${@}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#所有参数，区分对待")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${?}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#返回最后一次命令执行状态，0 成功，非 0 失败")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-自定变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-自定变量"}},[s._v("#")]),s._v(" 3.自定变量")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#直接赋值，不要有空格")]),s._v("\n变量名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#unset 撤销，${变量名} 引用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#静态变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" 变量名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全局变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" 变量名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"三、基本运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、基本运算"}},[s._v("#")]),s._v(" 三、基本运算")]),s._v(" "),a("h3",{attrs:{id:"_1-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-运算符"}},[s._v("#")]),s._v(" 1.运算符")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("运算式"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("运算式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加，减，乘，除，取余，运算符间要有空格")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" +\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" *\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" /\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" %\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#逻辑与")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#逻辑或")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"条件判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件判断"}},[s._v("#")]),s._v(" 条件判断")]),s._v(" "),a("p",[s._v("[ 条件 ]，前后都要有空格")]),s._v(" "),a("h3",{attrs:{id:"判断条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断条件"}},[s._v("#")]),s._v(" 判断条件")]),s._v(" "),a("h4",{attrs:{id:"整数比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整数比较"}},[s._v("#")]),s._v(" 整数比较")]),s._v(" "),a("p",[s._v("=\n-lt（less than）：小于\n-le（less equal）：小于等于\n-eq（equal）：等于\n-gt（greater than）：大于\n-ge（greater equal）：大于等于\n-ne（Not requal）：不等于")]),s._v(" "),a("h4",{attrs:{id:"文件权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件权限"}},[s._v("#")]),s._v(" 文件权限")]),s._v(" "),a("p",[s._v("-r（read）：读取\n-w（write）：写入\n-x（execute）：执行")]),s._v(" "),a("h4",{attrs:{id:"文件类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件类型"}},[s._v("#")]),s._v(" 文件类型")]),s._v(" "),a("p",[s._v("-f（file）：文件存在且为常规文件\n-e（existence）：文件存在\n-d（directory）：文件存在且为目录")]),s._v(" "),a("h3",{attrs:{id:"流程控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程控制"}},[s._v("#")]),s._v(" 流程控制")]),s._v(" "),a("h4",{attrs:{id:"if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if"}},[s._v("#")]),s._v(" if")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("if [ 条件判断 ]:then\n  程序\nfi\n或\nif [ 条件判断 ]\n  then\n    程序\nfi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h4",{attrs:{id:"case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case"}},[s._v("#")]),s._v(" case")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('case $变量名 in\n  "值1")\n    程序\n    ;;\n  "值2")\n    程序\n    ;;\n  *)\n    程序\n    ;;\nesac\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h4",{attrs:{id:"for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for"}},[s._v("#")]),s._v(" for")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("for((初始值;循环条件;变量变化))\n  do\n    程序\n  done\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("for 变量 in 值1 值2 值3 ...\n  do\n    程序\n  done\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"while"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#while"}},[s._v("#")]),s._v(" while")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("while [ 条件判断 ]\n  do\n    程序\n  done\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入"}},[s._v("#")]),s._v(" 输入")]),s._v(" "),a("p",[s._v("read(选项)(参数)")]),s._v(" "),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("p",[s._v("-p：指定读取值的提示符\n-t：指定读取值的倒计时")]),s._v(" "),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("变量：指定读取值的变量名")]),s._v(" "),a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),a("h3",{attrs:{id:"系统函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统函数"}},[s._v("#")]),s._v(" 系统函数")]),s._v(" "),a("p",[s._v("basename [string / pathname] [suffix]：删除最后一个"),a("code",[s._v("/")]),s._v("的所有前缀，还可以指定删除"),a("code",[s._v("suffix")]),s._v("后缀\ndirname 文件绝对路径：去除文件名，返回剩下的路径")]),s._v(" "),a("h3",{attrs:{id:"自定函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定函数"}},[s._v("#")]),s._v(" 自定函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function 函数名()\n{\n  Action;\n  &?或者return int（0-255）;\n}\n函数名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[s._v("#")]),s._v(" 工具")]),s._v(" "),a("h3",{attrs:{id:"cut"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cut"}},[s._v("#")]),s._v(" cut")]),s._v(" "),a("p",[s._v("cut [选项] filename：剪切数据\n-f：列号，提取第几列\n-d：分隔符，按指定分隔符分割列，默认为制表符")]),s._v(" "),a("h3",{attrs:{id:"sed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sed"}},[s._v("#")]),s._v(" sed")]),s._v(" "),a("p",[s._v("sed [选项]  '命令' filename：按行依次执行，结果打印到屏幕，不改变文件内容，除非重定向存储输出\n-e\n-i：直接修改文件\na：新增\nd：删除\ns：查找并替换")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"awk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[s._v("#")]),s._v(" awk")]),s._v(" "),a("p",[s._v("awk 其实不仅仅是工具软件，还是一种编程语言")]),s._v(" "),a("h4",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[s._v("#")]),s._v(" 基本用法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'匹配{} 匹配{} 匹配{}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n-F：指定分割符，默认按空格和制表符\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $1}'")]),s._v(" /etc/passwd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"内置变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置变量"}},[s._v("#")]),s._v(" 内置变量")]),s._v(" "),a("ul",[a("li",[s._v("$0 表示当前行，然后用 $1、$2、$3 依次表示第一个字段、第二个字段、第三个字段")]),s._v(" "),a("li",[s._v("NF 表示当前行有多少个字段，依次用 $NF 表示最后一个字段、$(NF-1) 表示倒数第二个字段")]),s._v(" "),a("li",[s._v("NR 表示当前处理的是第几行，如打印序号")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print NR \" - \" $1}'")]),s._v(" /etc/passwd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("FILENAME 表示当前文件名")]),s._v(" "),a("li",[s._v("FS 表示字段分隔符，默认是空格和制表符")]),s._v(" "),a("li",[s._v("RS 表示行分隔符，用于分割每一行，默认是换行符")]),s._v(" "),a("li",[s._v("OFS 表示输出字段的分隔符，用于打印时分隔字段，默认为空格")]),s._v(" "),a("li",[s._v("ORS 表示输出记录的分隔符，用于打印时分隔记录，默认为换行符")]),s._v(" "),a("li",[s._v("OFMT 表示数字输出的格式，默认为 ％.6g")])]),s._v(" "),a("h4",{attrs:{id:"内置函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置函数"}},[s._v("#")]),s._v(" 内置函数")]),s._v(" "),a("ul",[a("li",[s._v("toupper()：将字符转为大写")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print NR \" - \" toupper($1)}'")]),s._v(" /etc/passwd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("tolower()：将字符转为小写")]),s._v(" "),a("li",[s._v("length()：返回字符串长度")]),s._v(" "),a("li",[s._v("substr()：返回子字符串")]),s._v(" "),a("li",[s._v("sin()：正弦")]),s._v(" "),a("li",[s._v("cos()：余弦")]),s._v(" "),a("li",[s._v("sqrt()：平方根")]),s._v(" "),a("li",[s._v("rand()：随机数")])]),s._v(" "),a("h4",{attrs:{id:"指定条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定条件"}},[s._v("#")]),s._v(" 指定条件")]),s._v(" "),a("p",[s._v("在动作前面指定输出条件，只输出符合条件的行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输出奇数行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR % 2 == 1 {print $1}'")]),s._v(" /etc/passwd\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输出第三行以后的行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR >3 {print $1}'")]),s._v(" /etc/passwd\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下面的例子输出第一个字段等于指定值的行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$1 == \"root\" {print $1}'")]),s._v(" /etc/passwd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'$1 == "root" || $1 == "bin" {print $1}\'')]),s._v(" /etc/passwd\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用 if 语句编写复杂的条件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{if ($1 > \"m\") print $1}'")]),s._v(" /etc/passwd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{if ($1 > "m") print $1; else print "---"}\'')]),s._v(" /etc/passwd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"xargs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xargs"}},[s._v("#")]),s._v(" xargs")]),s._v(" "),a("p",[s._v("Unix 系统的一个很有用的命令，作用是将标准输入转为命令行参数")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n-d：默认将换行符和空格作为分隔符，把标准输入分解成命令行参数\n-p：打印出要执行的命令，询问用户是否执行\n-t：打印出最终要执行的命令，直接执行，不需要确认\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#命令默认是 echo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1 2 3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("find 命令有一个特别的参数 -print0，指定输出的文件列表以 null 分隔；xargs 命令的 -0 参数表示用 null 当作分隔符")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除更目录下所有文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-type")]),s._v(" f "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-print0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#找出 txt 文件并搜索是否包含 abc 字符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[s._v("#")]),s._v(" sort")]),s._v(" "),a("p",[s._v("sort(选项)(参数)：排序")]),s._v(" "),a("h2",{attrs:{id:"知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识"}},[s._v("#")]),s._v(" 知识")]),s._v(" "),a("h3",{attrs:{id:"信息操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信息操作"}},[s._v("#")]),s._v(" 信息操作")]),s._v(" "),a("p",[s._v("Linux 有三个标准 IO：stdin（标准输出）、stdout（标准输入）、stderr（标准错误），对应的文件描述符是 0、1、2\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/cd9b078350231.png",alt:""}}),s._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/40efa2c3e7438.png",alt:""}}),s._v("\nLinux 下，当一个用户进程被创建的时候，要从某个地方读入数据、将数据输出到某个地方，因此系统会自动为该进程创建三个数据流（stream）")]),s._v(" "),a("h4",{attrs:{id:"_2-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1"}},[s._v("#")]),s._v(" 2 > &1")]),s._v(" "),a("p",[s._v("将标准错误重定向到标准输入上，& 是为了区分文件描述符和文件名")]),s._v(" "),a("h4",{attrs:{id:"_1-dev-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-dev-null"}},[s._v("#")]),s._v(" 1 > /dev/null")]),s._v(" "),a("p",[s._v("将标准输出重定向到"),a("code",[s._v("/dev/null")]),s._v("的设备文件，"),a("code",[s._v("null")]),s._v("表示一个空设备文件，用来丢弃信息")]),s._v(" "),a("h4",{attrs:{id:"_2-1-1-dev-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-dev-null"}},[s._v("#")]),s._v(" 2 > &1 1 > /dev/null")]),s._v(" "),a("p",[s._v("将标准错误重定向到标准输入，同时标准输出又重定向到"),a("code",[s._v("/dev/null")]),s._v("，也就是输所有信息全部丢弃")]),s._v(" "),a("h3",{attrs:{id:"变量操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量操作"}},[s._v("#")]),s._v(" 变量操作")]),s._v(" "),a("p",[s._v("给变量赋值并引用")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("c")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${b}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$c")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("还可以引用未定义、为赋值的变量")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);