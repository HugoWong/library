(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{353:function(t,e,r){"use strict";r.r(e);var o=r(3),s=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Steam 平台有个很有意思的功能，就是统计游戏时间功能，每个游戏的运行时间都可以查询出来，将所有游戏的时间累加，就是总游戏时间。")]),t._v(" "),e("p",[t._v("目前这个总游戏时间没有直接显示出来，但是可以通过一些方法计算出来，下面是两个常用的方法：")]),t._v(" "),e("ul",[e("li",[t._v("访问用户Steam社区地址里的“所有游戏”页面，")])]),t._v(" "),e("p",[t._v("Steam 个人菜单 -> 个人资料 -> 所有游戏，或者直接访问 "),e("strong",[t._v("https://steamcommunity.com/id/用户 url/games/?tab=all&sort=playtime")])]),t._v(" "),e("p",[t._v("将得到的内容复制文本到 EditPlus，使用正则表达式替换将"),e("code",[t._v("^(?!.*总时数).*")]),t._v("清空，然后使用常规替换将“总时数”和“小时”两个清空，最后将剩下的数字复制到 Excel 里求和即可；")]),t._v(" "),e("ul",[e("li",[t._v("访问Steam实验室的“交互式推荐模型 | 精于机器学习的鉴赏家”")])]),t._v(" "),e("p",[t._v("地址是 "),e("a",{attrs:{href:"https://store.steampowered.com/recommender/76561198027734009",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://store.steampowered.com/recommender/76561198027734009"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("里面会列出用户前 50 个游戏的累计时间总和，如果用户购买游戏多于 50 个，那么这个就和用户全部游戏时间总和有误差，数据会比第一个少，不是很准。")])])}),[],!1,null,null,null);e.default=s.exports}}]);