import type { Language } from "..";

const cn: Language = {
    website: {
        header: {
            home: "首页",
            virtualServers: "虚拟服务器",
            dedicatedServers: "独立服务器",
            dashboard: "仪表盘",
            login: "登录",
        },
        footer: {
            products: {
                title: "产品",
                virtualServers: "虚拟服务器",
                dedicatedServers: "独立服务器",
            },
            support: {
                title: "支持",
                supportTickets: "支持工单",
                apiDocumentation: "API 文档",
                documentation: "文档",
            },
            company: {
                title: "公司",
                privacyPolicy: "隐私政策",
                termsOfService: "服务条款",
                reportAbuse: "举报滥用",
            },
            about: {
                title: "关于 DutchIS",
                description: "DutchIS旨在提供高级服务器托管服务，具有丰富的API和高可用性等出色功能。",
                vat: "增值税",
            },
            socials: "社交媒体",
            copyright: "版权",
            allRightsReserved: "保留所有权利",
        },
        home: {
            header: {
                "line1": '即时',
                "line2": '基础设施',
                "tagline": "我们正在为您和您的用户创建最佳体验，从简单的虚拟机到为数千名用户提供服务的大型网络。",
                "callToAction": "立即开始！"
            },
            stats: {
                uptime: "过去30天的正常运行时间",
                happyCustomers: "满意的客户",
                awesome: "令人印象深刻"
            },
            flexibleVirtualServers: {
                title: "灵活的虚拟服务器",
                description: "我们提供一系列适合任何项目的虚拟服务器解决方案。无论您需要高单核性能还是大量存储空间，我们都可以满足您的需求。每台虚拟服务器都配备了不计流量的互联网连接、DDoS防护和99.9%的正常运行时间SLA。所有这些都旨在确保您的项目性能出色且始终在线。",
                startingAt: "起价",
                hour: "小时",
                seePricing: "查看价格",
                month: "每月",
                imgAlt: "虚拟服务器仪表盘"
            },
            ourOwnInfrastructure: {
                title: "我们自己的基础设施",
                description: "我们拥有并运营自己的基础设施，从服务器到网络都是如此。这使我们能够为客户提供最佳性能和体验。我们的团队一直致力于改进我们的基础设施和服务，以确保为客户提供最佳可能的体验。",
                imgAltTwoServers: "数据中心地板上的两台服务器",
                imgAltServerRack: "DutchIS服务器机架的背面",
            },
            seeWhatYouCanSave: {
                title: "看看您可以节省多少",
                description: "根据提供商，每月节省高达70%。我们的价格透明，不会在月底出现意外费用。",
                month: "每月",
                bandwidth: "带宽",
                unmetered: "不计流量",
                with: "带",
                without: "不带",
                pricingDisclaimer: "价格截至2023年6月30日。2个虚拟CPU、4GB内存和80GB存储的虚拟机。",
                fairUseDisclaimer: "*根据公平使用政策。请查看服务条款以获取更多信息",
            },
            runningCarbonGray: {
                title: "使用100%荷兰风电运行",
                description: "在DutchIS，我们致力于可持续发展，并使用绿色能源来供电所有服务。我们的数据中心Serverius使用荷兰风力涡轮机生成的绿色能源证书，以确保我们使用的电力符合严格的可持续性要求。SMK保证确保我们的电力100%来自荷兰风力涡轮机，因此您可以对我们的服务的环境影响感到放心。我们一起努力实现更清洁和更可持续的未来。",
                imgAlt: "绿色草地上有风车的图片",
            },
            featureBlocks: {
                designedInHouse: {
                    title: "内部设计",
                    description: "我们设计和制造自己的硬件和软件，以确保为客户提供最佳性能和体验。",
                },
                fullyRedundant: {
                    title: "完全冗余",
                    description: "我们拥有完全冗余的网络、电源和冷却系统，以确保您的服务始终在线。",
                },
                qualitySupport: {
                    title: "优质支持",
                    description: "您将得到一个以知识渊博、友好和专业而著称的支持团队的支持。真正的人随时准备帮助您解决任何问题。",
                },
                instantDeployment: {
                    title: "即时部署",
                    description: "在订购服务器时，您的服务器将在几秒钟内立即部署并准备使用。不需要等待几小时或几天！",
                }
            }
        },
        virtualServers: {
            header: {
                title: "虚拟服务器",
                tagline: "强大的虚拟服务器，可在几分钟内通过我们定制的仪表盘或API部署。价格仅为0.0047欧元/小时起。",
                callToAction: "立即开始！",
            },
            dashboardOverview: {
                title: "简单而强大的控制",
                description: "通过强大的仪表盘控制您的虚拟服务器，您可以在其中精细控制所有预期的功能。",
                overview: "概览",
                overviewAlt: "虚拟服务器的概览页面",
                console: "控制台",
                consoleAlt: "虚拟服务器的控制台",
                settings: "设置",
                settingsAlt: "仪表盘的设置页面",
            },
            plans: {
                title: "虚拟服务器计划",
                standard: "标准",
                performance: "性能",
                month: "每月",
                startingAt: "起价",
                storage: "存储",
                networkSpeed: "网络速度",
                ddosProtectionIncluded: "包含DDoS防护",
                orderNow: "立即订购",
                descriptions: {
                    standard: "我们的标准虚拟服务器运行在AMD Epyc MILAN CPU上，时钟速度为3.7GHz。这些服务器非常适合运行通用应用程序，如网站、数据库等。",
                    performance: "我们的性能虚拟服务器采用高性能的AMD Ryzen 5900x CPU，时钟速度为4.8GHz。这些服务器非常适合运行高性能应用程序，如游戏服务器。",
                },
            },
            speedIX: {
                title: "额外的SpeedIX连接",
                description: "在您的服务器上运行BGP时，您可以请求额外的SpeedIX对等连接，以补充您现有的上行链路。除了与其他人对等外，您还可以订购额外的第二层VLAN连接到其他数据中心。",
                disclaimer: "您必须至少有一个与您的ASN相关联的IPv4 /24。",
                imgAlt: "SpeedIX标志",
                createATicket: "创建工单",
                joinSpeedIX: "加入SpeedIX",
            },
            payPerHour: {
                title: "按小时付费",
                description: "不再为未使用的资源付费。按小时付费，根据需要进行升级或降级。",
                standard: "标准",
                performance: "性能",
                configure: "配置",
                storage: "存储",
                hour: "小时",
                month: "每月",
                callToAction: "立即开始！",
                disclaimer: "*每月金额是估算值，可能会有少量变化。",
            },
            videoTutorial: {
                title: "在一分钟内部署！",
                description: "使用我们的仪表盘或API在一分钟内创建和部署虚拟服务器。观看左侧的视频，了解如何轻松部署虚拟服务器。",
                youtubeId: "PU4EcUH8ONg",
            },
            scaleAutomatically: {
                title: "自动扩展",
                description: "为什么要手动升级或降级服务器，当您可以通过一个API调用来自动完成？我们的API允许您在一个API调用中将服务器扩展或缩小。",
                visitDocumentation: "访问API文档",
            }
        },
        dedicatedServers: {
            header: {
                title: "独立服务器",
                tagline: "使用我们的独立服务器获得裸金属性能。起价119.99欧元/月。",
                callToAction: "立即开始！",
            },
            immediate: "立即",
            deliveryTime: "交付时间",
            monthly: "每月",
            hours: "小时",
            imageOfThe: "图像",
            uplinkDisclaimer: "*上行链路根据公平使用政策提供。请查看服务条款以获取更多信息。",
            customConfigurations: {
                title: "定制配置",
                paragraph1: "需要特定的硬件配置吗？需要为多台服务器获取批量定价？请联系我们，我们将提供定制报价。",
                paragraph2: "还可以租赁具有较长时间承诺的服务器。这可以让您在每月价格上享受高达40%的折扣。请联系我们获取更多信息。",
                createATicket: "创建工单",
                emailUs: "给我们发电子邮件",
                imgAltTwoServers: "数据中心地板上的两台服务器",
                imgAltServerRack: "DutchIS服务器机架的背面",
            },
            speedIX: {
                title: "额外的SpeedIX连接",
                description: "在您的服务器上运行BGP时，您可以请求额外的SpeedIX对等连接，以补充您现有的上行链路。除了与其他人对等外，您还可以订购额外的第二层VLAN连接到其他数据中心。",
                disclaimer: "您必须至少有一个与您的ASN相关联的IPv4 /24。",
                imgAlt: "SpeedIX标志",
                createATicket: "创建工单",
                joinSpeedIX: "加入SpeedIX",
            }
        },
        termsOfService: {
            title: "服务条款",
            description: "我们的服务条款。"
        },
        privacyPolicy: {
            title: "隐私政策",
            description: "我们的隐私政策。"
        }
    }
}

export default cn;
