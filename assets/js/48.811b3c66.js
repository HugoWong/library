(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{369:function(t,_,r){"use strict";r.r(_);var a=r(3),v=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("商用容灾备份解决方案——在两个城市部署三个业务处理中心，即：同城双中心 & 异地灾备中心，这一方案兼具高可用性和灾难备份的能力。")]),t._v(" "),_("p",[t._v("同城双中心是指在同城或邻近城市建立两个可独立承担关键系统运行的数据中心，双中心具备基本等同的业务处理能力并通过高速链路实时同步数据，日常情况下可同时分担业务及管理系统的运行，并可切换运行；灾难情况下可在基本不丢失数据的情况下进行灾备应急切换，保持业务连续运行。与异地灾备模式相比较，同城双中心具有投资成本低、建设速度快、运维管理相对简单、可靠性更高等优点。")]),t._v(" "),_("p",[t._v("异地灾备中心是指在异地的城市建立一个备份的灾备中心，用于双中心的数据备份，当双中心出现自然灾害等原因而发生故障时，异地灾备中心可以用备份数据进行业务的恢复。")]),t._v(" "),_("h2",{attrs:{id:"容器搭建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#容器搭建"}},[t._v("#")]),t._v(" 容器搭建")]),t._v(" "),_("h3",{attrs:{id:"_1-关于两地三中心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-关于两地三中心"}},[t._v("#")]),t._v(" 1.关于两地三中心")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/31/62c4d8272d1d3.png",alt:"image.png"}}),_("br"),t._v("\n如上图，两地三中心的架构，是为了提高系统的容错、容灾的能力。当一个数据中心不可用时，能够将关键业务的流量切换到其他数据中心，可以抵御城市级的自然灾害。")]),t._v(" "),_("p",[t._v("两地指的是，地理上不同的两座城市，而三中心指的是:")]),t._v(" "),_("ul",[_("li",[t._v("同城生产中心")]),t._v(" "),_("li",[t._v("同城容灾中心")]),t._v(" "),_("li",[t._v("异地容灾中心")])]),t._v(" "),_("h3",{attrs:{id:"_2-机房的网络连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-机房的网络连接"}},[t._v("#")]),t._v(" 2.机房的网络连接")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/31/ff4eb15bb912c.png",alt:"image.png"}}),_("br"),t._v("\n如上图，两地三中心架构的前提是，各个机房是互联互通的。因此，我们需要搭建一个低延时的环形网络。光纤的长度，通常在 50 KM 以上。如果租用了运营商的专线，延时可以高一点，但通常不会超过 20 ms。如果是同城光纤，延时只有 3 ms 左右。")]),t._v(" "),_("p",[t._v("我们需要在机房间距、延时二者之间进行取舍:")]),t._v(" "),_("ul",[_("li",[t._v("机房间距离越远，容灾能力越强，但光纤会更长，延时会更高")]),t._v(" "),_("li",[t._v("机房间距离越短，容灾能力越差，但光纤会越短，延时会很低")])]),t._v(" "),_("p",[t._v("在同城的两个机房之间，网络延时很低，数据一致性很高。而异地机房，由于距离很远，可以租用专线与另外两个机房互联，避免过高的延时。")]),t._v(" "),_("h3",{attrs:{id:"_3-应用流量的分发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-应用流量的分发"}},[t._v("#")]),t._v(" 3.应用流量的分发")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/31/23e7024b097ab.png",alt:"image.png"}}),_("br"),t._v("\n如上图，是用户访问应用时的流量走向:")]),t._v(" "),_("ol",[_("li",[t._v("用户通过域名访问应用服务，通过智能 DNS 解析到地理上更近的机房 IP")]),t._v(" "),_("li",[t._v("在机房中，使用虚拟机部署有一个 LB 服务，对流量进行切分，一部分流量被切分到了另外一个机房")]),t._v(" "),_("li",[t._v("两个机房的服务，分别响应不同用户的请求")])]),t._v(" "),_("h4",{attrs:{id:"_3-1-为什么是异地机房承载流量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-为什么是异地机房承载流量"}},[t._v("#")]),t._v(" 3.1.为什么是异地机房承载流量")]),t._v(" "),_("p",[t._v("没有经过流量冲击的路径是不可靠的。即使做了高可用、容灾，如果没有常态化的演练，系统也不会具备应对的能力。")]),t._v(" "),_("p",[t._v("因此，在多机房建设时，非常重要的一点就是，让更多机房获得访问流量。这里选择的是，两个异地的机房作为日常主要的流量机房，原因如下:")]),t._v(" "),_("ul",[_("li",[t._v("更好演练灾难发生时的状况")]),t._v(" "),_("li",[t._v("租用专线之后，异地机房延时能满足要求")]),t._v(" "),_("li",[t._v("有足够预算购买专线带宽")])]),t._v(" "),_("h4",{attrs:{id:"_3-2-为什么-dns-之后-还有一层-lb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-为什么-dns-之后-还有一层-lb"}},[t._v("#")]),t._v(" 3.2.为什么 DNS 之后，还有一层 LB")]),t._v(" "),_("p",[t._v("这里可能会有一个疑问，在机房外，DNS 对流量进行了一次切分，在机房内，LB 又对流量进行了一次切分，原因如下:")]),t._v(" "),_("ul",[_("li",[t._v("DNS 生效慢，增加一层 LB 能更快切换流量")]),t._v(" "),_("li",[t._v("准确控制分配至各机房的流量比例")]),t._v(" "),_("li",[t._v("支持按机房灰度发布应用的版本")])]),t._v(" "),_("h3",{attrs:{id:"_4-有状态与无状态的分层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-有状态与无状态的分层"}},[t._v("#")]),t._v(" 4.有状态与无状态的分层")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/31/897c103bdd4d1.png",alt:"image.png"}}),_("br"),t._v("\n如上图，有状态应用和无状态应用的分层，使得服务架构更加清晰。由无状态应用对外提供服务，而有状态应用为无状态应用提供服务。")]),t._v(" "),_("p",[t._v("这里的有状态应用，使用的是虚拟机部署的高可用服务，或者直接购买厂商的云服务中间件。")]),t._v(" "),_("h4",{attrs:{id:"_4-1-无状态应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-无状态应用"}},[t._v("#")]),t._v(" 4.1.无状态应用")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/31/2679f75d6c553.png",alt:"image.png"}}),_("br"),t._v("\n如上图，无状态应用基于 Kubernetes 提供运行时环境。得益于其强大的弹性与自愈能力，我们只需要关注于对各种云原生组件的使用，对参数的调优，即可满足大部分的业务需求。")]),t._v(" "),_("p",[t._v("对于无状态应用，我们通常会采用 Ingress 或 NodePort 的方式，对外暴露服务。两者的区别主要在于:")]),t._v(" "),_("ul",[_("li",[t._v("支持的服务数量。每个 NodePort 会占用一个端口")]),t._v(" "),_("li",[t._v("功能差异。Ingress 能提供 Host、灰度、子 Path 路径等功能")]),t._v(" "),_("li",[t._v("组件数量。Ingress 需要更多组件支撑")]),t._v(" "),_("li",[t._v("运维成本。Ingress 更新时，影响面更大，运维成本高")]),t._v(" "),_("li",[t._v("迁移成本。NodePort 可能会发生端口冲突")])]),t._v(" "),_("p",[t._v("Kubernetes 并不是保证服务 100% 可用，而是一旦服务异常时，能够快速利用空闲资源新建。同时，Kubernetes 还面临集群升级、主机维护等问题，因此，对于一些低频变更、对稳定性要求高的服务，我们采用的是虚拟机部署。")]),t._v(" "),_("p",[t._v("比如这里的 LB，LB 是一个影响面很大的应用，而且数量不会很多，我们通常会采用高可用的模式，部署在几台虚拟机上。")]),t._v(" "),_("h4",{attrs:{id:"_4-2-有状态应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-有状态应用"}},[t._v("#")]),t._v(" 4.2.有状态应用")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://cloud.tencent.com/product/tcr?from=10680",target:"_blank",rel:"noopener noreferrer"}},[t._v("镜像仓库"),_("OutboundLink")],1),t._v("：Harbor 的高可用通常有两种方式:")]),t._v(" "),_("ol",[_("li",[t._v("多个独立部署的 Harbor 实时同步。不同的 Harbor 实例之间，镜像可能不一致，有一定时延。")]),t._v(" "),_("li",[t._v("多个 Harbor 共享一个存储后端。多个 Harbor 实例，共享一个存储后端，数据一致性有保障了，但对存储后端的分布式要求更高。")])]),t._v(" "),_("p",[t._v("这里采用的是 Harbor "),_("a",{attrs:{href:"https://cloud.tencent.com/product/cfs?from=10680",target:"_blank",rel:"noopener noreferrer"}},[t._v("共享存储"),_("OutboundLink")],1),t._v("高可用 + dragonFly 的方式，在非主要流量机房，部署高可用的 Harbor，通过 dragonFly 分发镜像到各个机房，机房中的主机通过 dfget 配置 mirror 拉取镜像。如下图:"),_("br"),t._v(" "),_("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/31/1d328a868511c.png",alt:"image.png"}}),_("br"),t._v("\n使用 dragonFly 分发镜像，能减少同一个镜像，多副本应用实例部署时的拉取次数，节省专线的带宽。")]),t._v(" "),_("ul",[_("li",[t._v("MySQL 多机房 MHA 高可用\n"),_("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/31/fbbf444f1bfaa.png",alt:"image.png"}}),_("br"),t._v("\n相较于国外使用 PostgreSQL，国内使用 MySQL 特别多。MHA（Master High Availability）是一套成熟的 MySQL 解决方案。在 MySQL 发生故障时，MHA 能在 30 秒以内完成"),_("a",{attrs:{href:"https://cloud.tencent.com/solution/database?from=10680",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库"),_("OutboundLink")],1),t._v("的故障切换操作，同时最大程度的保障数据一致性。")]),t._v(" "),_("li",[t._v("Redis 多机房集群模式")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/31/179ef15054368.png",alt:"image.png"}}),_("br"),t._v("\nRedis 集群通过分片来实现数据共享，并提供复制和故障转移。相较于哨兵模式只有一个 master，集群模式有多个 master，具有高的可用性。")]),t._v(" "),_("h3",{attrs:{id:"_5-总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[t._v("#")]),t._v(" 5.总结")]),t._v(" "),_("p",[t._v("本篇主要是简单总结了一下两地三中心的架构。所写即所见的抽象，并不能完全尽述细节。主要内容如下：")]),t._v(" "),_("ul",[_("li",[t._v("两地三中心的要点，是要构建一个环形的互联互通机房网络")]),t._v(" "),_("li",[t._v("有状态应用采用虚拟机部署，无状态应用采用 Kubernetes 部署")]),t._v(" "),_("li",[t._v("访问流量，先通过 DNS 切分到机房，在机房中再通过 LB 切分到各个集群")])])])}),[],!1,null,null,null);_.default=v.exports}}]);