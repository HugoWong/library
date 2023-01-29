(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{367:function(t,a,e){"use strict";e.r(a);var r=e(3),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("合理和实用的解决方案应能够抗拒非法入侵、防范网络阻塞，并且能安全、及时地交付用户的重要数据，在实现这些功能的同时方案还应该具有良好的可管理性。")]),t._v(" "),a("ul",[a("li",[t._v("BGP 专线（结合 MPLS）")]),t._v(" "),a("li",[t._v("IPSec")])]),t._v(" "),a("h2",{attrs:{id:"比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较"}},[t._v("#")]),t._v(" 比较")]),t._v(" "),a("h3",{attrs:{id:"数据机密性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据机密性"}},[t._v("#")]),t._v(" 数据机密性")]),t._v(" "),a("p",[t._v("IPSec通过强大的加密算法来保障数据的机密性，BGP 专线通过在电信运营商物理站点间定义一条唯一的数据通道来加强数据的机密性，这可以禁止攻击者非法获得数据拷贝，除非他们在电信运营商的网络上放置镜像器。")]),t._v(" "),a("p",[t._v("尽管BGP 专线使数据被窃取的机会最小化，但IPSec通过加密可以提供更好的数据机密性；因此两者结合就有了第三种方案：IPSec over BGP，这样显然可以保证更高水平的数据机密性。")]),t._v(" "),a("h3",{attrs:{id:"数据完整性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据完整性"}},[t._v("#")]),t._v(" 数据完整性")]),t._v(" "),a("p",[t._v("IPSec使用散列算法来保证数据的完整性，对于BGP 专线来说，没有什么根本的方法来保障数据的完整性，然而，通过MPLS的地址空间隔离和路由信息，防止不熟练的攻击者对数据的添加、删改还是有一定的效果的。")]),t._v(" "),a("h3",{attrs:{id:"数据有效性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据有效性"}},[t._v("#")]),t._v(" 数据有效性")]),t._v(" "),a("p",[t._v("IPSec基于Internet进行数据传输，尽管攻击者不能读取数据，但攻击者可以通过在Internet路由表中加入错误路由来旁路数据；BGP 专线基于LSP（Link State Packet，链路状态包）来传输数据，仅有本地意义欺骗攻击很难实现。")]),t._v(" "),a("p",[t._v("BGP用于在方案中传递路由信息，它的扩展共同体属性使错误路由的引入相当困难；因此，BGP 专线能够提供更好的数据有效性。")]),t._v(" "),a("h3",{attrs:{id:"internet-接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internet-接入"}},[t._v("#")]),t._v(" Internet 接入")]),t._v(" "),a("p",[t._v("由于大多数IPSec方案基于Internet传输数据，因此IPSec体系结构允许方案接入到所连的站点；而BGP 专线体系结构中却很难实现这一点，通常选择分离的Internet连接来保障整个方案的安全性。")]),t._v(" "),a("h3",{attrs:{id:"可扩展性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可扩展性"}},[t._v("#")]),t._v(" 可扩展性")]),t._v(" "),a("p",[t._v("IPSec 方案难以扩展。因配置方面的要求，IPSec通常是点到点的连接，BGP/组网由提供商配置，能够轻易地实现全网状的网络结构，并且，BGP/组网 方案还允许网络管理者利用组网的特性如QoS，因此在企业环境中BGP/组网 方案比IPSec 方案更具扩展性。")]),t._v(" "),a("p",[t._v("BGP/组网和IPSec 方案具有各自的优点，BGP/组网 方案扩展性好，能够提供更好的数据有效性，而IPSec 方案能够保障更好的数据机密性和完整性。两种方案都难以配置，每一种方案都应考虑应用简便，然而，对于点到点连接，两种方案都成立，用户在实施时应仔细分析两种方案的优缺点，选择最适合自己的。")]),t._v(" "),a("h2",{attrs:{id:"bgp-专线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bgp-专线"}},[t._v("#")]),t._v(" BGP 专线")]),t._v(" "),a("p",[t._v("BGP可以管理非常庞大的路由，可以解决地址冲突等问题，同时它是基于TCP来建立连接，可以在不直接相连的路由器间交换信息；而MPLS基于LDP（标签分发协议，Label Distribution Protocol）使得路由及LSP是动态变化的")]),t._v(" "),a("p",[t._v("链路状态包（Link-State Packet，LSP）是各链路之间用于宣告链路和链路状态的数据包，转发不依靠路由计算，一有链路断开或有其他路由传来的LSP，路由就会更新链路状态表，并转发LSP。"),a("br"),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/29/7de881e8dadda.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"ipsec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipsec"}},[t._v("#")]),t._v(" IPSec")]),t._v(" "),a("h2",{attrs:{id:"sd-wan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sd-wan"}},[t._v("#")]),t._v(" SD-WAN")])])}),[],!1,null,null,null);a.default=s.exports}}]);