(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{440:function(s,t,a){"use strict";a.r(t);var e=a(3),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("表中存放的是实际的数据，而视图中存放的是 SQL 查询语句")])]),s._v(" "),t("p",[s._v("当我们使用视图时，会运行视图里的 SQL 查询语句创建出一张临时表，当客户端与数据库之间的连接断开后，临时表会被自动删除")]),s._v(" "),t("h2",{attrs:{id:"优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[s._v("#")]),s._v(" 优势")]),s._v(" "),t("h3",{attrs:{id:"简单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单"}},[s._v("#")]),s._v(" 简单")]),s._v(" "),t("p",[s._v("使用视图的用户完全不需要关心后面对应的表的结构、关联条件、和筛选条件")]),s._v(" "),t("h3",{attrs:{id:"安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[s._v("#")]),s._v(" 安全")]),s._v(" "),t("p",[s._v("使用视图的用户只能访问他们被允许查询的结果集，对表的权限管理并不能限制到某个行某个列，而通过视图可以轻松实现")]),s._v(" "),t("h3",{attrs:{id:"独立"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#独立"}},[s._v("#")]),s._v(" 独立")]),s._v(" "),t("p",[s._v("一旦视图的结构确定了，可以屏蔽表结构变化对用户的影响，源表增加列对视图没有影响；源表修改列名，可通过修改视图来解决，不会对访问者造成影响")]),s._v(" "),t("h2",{attrs:{id:"操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[s._v("#")]),s._v(" 操作")]),s._v(" "),t("p",[s._v("视图的操作跟 MySQL 一样，包括增、删、改、查")]),s._v(" "),t("h3",{attrs:{id:"创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[s._v("#")]),s._v(" 创建")]),s._v(" "),t("p",[s._v("创建视图需要有 CREATE VIEW 的权限，并且对于查询涉及到的列有 SELECT 权限；如果使用 CREATE OR REPLACE，那么哈需要有该视图的 DROP 权限")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALGORITHM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" {"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNDEFINED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MERGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEMPTABLE")]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" view_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("column_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" select_statement "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASCADED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCAL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHECK")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[s._v("#")]),s._v(" 修改")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALGORITHM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("{"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNDEFINED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MERGE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEMPTABLE")]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" view_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("column_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" select_statement "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASCADED")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCAL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" CHEDK "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OPTION")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[s._v("#")]),s._v(" 删除")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" view_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("view_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RESTRICT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASCADE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[s._v("#")]),s._v(" 查看")]),s._v(" "),t("p",[s._v("MySQL v5.1 开始，使用"),t("code",[s._v("SHOW TABLES")]),s._v("命令显示表名的同时也会显示视图的名字，不存在单独显示视图的"),t("code",[s._v("SHOW VIEW")]),s._v("命令")])])}),[],!1,null,null,null);t.default=r.exports}}]);