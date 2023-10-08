import type { Language } from "..";

const de: Language = {
    website: {
        header: {
            home: "Zuhause",
            virtualServers: "Virtuelle Server",
            dedicatedServers: "Dedizierte Server",
            dashboard: "Dashboard",
            login: "Anmelden",
        },
        footer: {
            products: {
                title: "Produkte",
                virtualServers: "Virtuelle Server",
                dedicatedServers: "Dedizierte Server",
            },
            support: {
                title: "Support",
                supportTickets: "Support-Tickets",
                apiDocumentation: "API-Dokumentation",
                documentation: "Dokumentation",
            },
            company: {
                title: "Unternehmen",
                privacyPolicy: "Datenschutzbestimmungen",
                termsOfService: "Nutzungsbedingungen",
                reportAbuse: "Missbrauch melden",
            },
            about: {
                title: "Über DutchIS",
                description: "DutchIS hat sich zum Ziel gesetzt, Premium-Server-Hosting mit großartigen Funktionen wie einer umfangreichen API und hoher Verfügbarkeit anzubieten.",
                vat: "MwSt",
            },
            socials: "Soziale Medien",
            copyright: "Urheberrecht",
            allRightsReserved: "Alle Rechte vorbehalten",
        },
        home: {
            header: {
                "line1": 'Instant',
                "line2": 'Infrastructure',
                "tagline": "Wir schaffen das beste Erlebnis für Sie und Ihre Benutzer, von einer einfachen VM bis hin zu großen Netzwerken, die Tausende von Benutzern Dienste bieten.",
                "callToAction": "Beginnen Sie noch heute!"
            },
            stats: {
                uptime: "Betriebszeit in den letzten 30 Tagen",
                happyCustomers: "Zufriedene Kunden",
                awesome: "Toll"
            },
            flexibleVirtualServers: {
                title: "Flexible Virtuelle Server",
                description: "Wir bieten eine Reihe von virtuellen Serverlösungen, die ideal für jedes Projekt sind. Egal, ob Sie hohe Single-Core-Leistung oder viel Speicherplatz benötigen, wir haben Sie abgedeckt. Jeder virtuelle Server wird mit einer unbegrenzten Internetverbindung, DDoS-Schutz und einer Verfügbarkeits-SLA von 99,9% geliefert. All dies, um sicherzustellen, dass Ihr Projekt gut funktioniert und immer online ist.",
                startingAt: "Ab",
                hour: "Stunde",
                seePricing: "Preise ansehen",
                month: "Monat",
                imgAlt: "Dashboard für virtuelle Server"
            },
            ourOwnInfrastructure: {
                title: "Unsere eigene Infrastruktur",
                description: "Wir haben unsere eigene Infrastruktur entwickelt und aufgebaut, um sicherzustellen, dass wir die beste Leistung und Erfahrung bieten können. Wir verwenden nur die besten Hardware- und Softwarelösungen, um sicherzustellen, dass Ihre Dienste immer online sind und die beste Leistung bieten. Unsere Infrastruktur ist darauf ausgelegt, die beste Leistung zu erzielen, während die Kosten niedrig gehalten werden. Wir verwenden nur die besten Hardware- und Softwarelösungen, um sicherzustellen, dass Ihre Dienste immer online sind und die beste Leistung bieten. Unsere Infrastruktur ist darauf ausgelegt, die beste Leistung zu erzielen, während die Kosten niedrig gehalten werden.",
                imgAltTwoServers: "Zwei der Server von DutchIS auf dem Datacenter-Boden",
                imgAltServerRack: "Die Rückseite eines der Server-Racks von DutchIS",
            },
            seeWhatYouCanSave: {
                title: "Sehen Sie, was Sie sparen können",
                description: "Sparen Sie bis zu 70% pro Monat, abhängig vom Anbieter. Keine Überraschungen am Monatsende mit unseren transparenten Preisen.",
                month: "Monat",
                bandwidth: "Bandbreite",
                unmetered: "Unbegrenzt",
                with: "mit",
                without: "ohne",
                pricingDisclaimer: "Preise ab dem 30.06.2023. Virtueller Server mit 2 vCPU, 4 GB RAM und 80 GB Speicherplatz.",
                fairUseDisclaimer: "*Die Fair-Use-Policy ist anwendbar. Weitere Informationen finden Sie in unseren Nutzungsbedingungen.",
            },
            runningCarbonGray: {
                title: "100% CO2-neutral mit 100% niederländischer Windenergie!",
                description: "Bei DutchIS setzen wir uns für Nachhaltigkeit ein und nutzen grüne Energie, um all unsere Dienste mit Strom zu versorgen. Unser Rechenzentrum Serverius verwendet grüne Stromzertifikate, die von Windkraftanlagen in den Niederlanden erzeugt werden, um sicherzustellen, dass der von uns verwendete Strom strenge Nachhaltigkeitsstandards erfüllt. Die SMK-Garantie stellt sicher, dass unser Strom zu 100% aus niederländischen Windkraftanlagen stammt, sodass Sie sicher sein können, dass die Umweltauswirkungen unserer Dienste minimal sind. Gemeinsam arbeiten wir an einer saubereren und nachhaltigeren Zukunft.",
                imgAlt: "Eine grüne Wiese mit Windkraftanlagen im Hintergrund.",
            },
            featureBlocks: {
                designedInHouse: {
                    title: "Intern entwickelt",
                    description: "Wir entwerfen und entwickeln unsere eigene Hardware und Software, um unseren Kunden die bestmögliche Leistung und Erfahrung zu bieten.",
                },
                fullyRedundant: {
                    title: "Vollständig redundant",
                    description: "Wir verfügen über ein vollständig redundantes Netzwerk, Strom- und Kühlsystem, um sicherzustellen, dass Ihre Dienste immer online sind.",
                },
                qualitySupport: {
                    title: "Qualitätsunterstützung",
                    description: "Sie sind durch ein Team abgesichert, das als eines der kompetentesten, freundlichsten und professionellsten bekannt ist. Echte Menschen stehen bereit, Ihnen bei jedem Problem zu helfen, zu jeder Zeit.",
                },
                instantDeployment: {
                    title: "Sofortige Bereitstellung",
                    description: "Wenn Sie einen Server bestellen, wird Ihr Server innerhalb von Sekunden sofort bereitgestellt und einsatzbereit. Sie müssen nicht stunden- oder tagelang auf Ihren Server warten!",
                }
            }
        },
        virtualServers: {
            header: {
                title: "Virtuelle Server",
                tagline: "Leistungsstarke virtuelle Server innerhalb weniger Minuten über unser intern entwickeltes Dashboard oder unsere API bereitstellen. Ab nur € 0,0047 pro Stunde.",
                callToAction: "Beginnen Sie heute!"
            },
            dashboardOverview: {
                title: "Einfache, aber leistungsstarke Bedienung",
                description: "Verwalten Sie Ihren virtuellen Server über ein leistungsstarkes Dashboard mit allen erwarteten Funktionen.",
                overview: "Übersicht",
                overviewAlt: "Die Übersichtsseite eines virtuellen Servers",
                console: "Konsole",
                consoleAlt: "Die Konsole eines virtuellen Servers",
                settings: "Einstellungen",
                settingsAlt: "Die Einstellungsseite des Dashboards",
            },
            plans: {
                title: "Virtuelle Server-Pakete",
                standard: "Standard",
                performance: "Leistung",
                month: "Monat",
                startingAt: "Ab",
                storage: "Speicherplatz",
                networkSpeed: "Netzwerkgeschwindigkeit",
                ddosProtectionIncluded: "DDoS-Schutz inbegriffen",
                orderNow: "Jetzt bestellen",
                descriptions: {
                    standard: "Unsere Standard-Virtuellen Server werden mit AMD Epyc MILAN CPUs mit einer Taktfrequenz von 3,7 GHz betrieben. Diese Server eignen sich hervorragend für allgemeine Dienste wie Websites, Datenbanken und mehr.",
                    performance: "Unsere Performance-Virtuellen Server werden mit superschnellen AMD Ryzen 5900x CPUs mit einer Taktfrequenz von 4,8 GHz betrieben. Diese Server eignen sich hervorragend für anspruchsvolle Anwendungen wie Gameserver.",
                },
            },
            speedIX: {
                title: "Zusätzliche SpeedIX-Verbindung",
                description: "Wenn Sie BGP auf Ihrem Server ausführen, können Sie neben Ihrem vorhandenen Uplink eine zusätzliche SpeedIX-Verbindung beantragen. Neben dem Peering mit anderen können Sie auch ein zusätzliches Layer-2-VLAN zu anderen Rechenzentren bestellen.",
                disclaimer: "Es muss mindestens ein IPv4 /24-Subnetz mit Ihrem ASN verknüpft sein.",
                imgAlt: "Das SpeedIX-Logo",
                createATicket: "Ein Ticket erstellen",
                joinSpeedIX: "SpeedIX beitreten",
            },
            payPerHour: {
                title: "Stundenweise bezahlen",
                description: "Hören Sie auf, zu viel zu zahlen! Zahlen Sie stundenweise und skalieren Sie nach Bedarf nach oben und unten.",
                standard: "Standard",
                performance: "Leistung",
                configure: "Konfigurieren",
                storage: "Speicherplatz",
                hour: "Stunde",
                month: "Monat",
                callToAction: "Beginnen Sie heute!",
                disclaimer: "*Der monatliche Betrag ist eine Schätzung und kann geringfügig abweichen.",
            },
            videoTutorial: {
                title: "In weniger als einer Minute bereitgestellt!",
                description: "Erstellen und starten Sie virtuelle Server in weniger als einer Minute über unser Dashboard oder unsere API. Sehen Sie sich das Video auf der linken Seite an, um zu erfahren, wie einfach es ist, einen virtuellen Server zu starten.",
                youtubeId: "PU4EcUH8ONg",
            },
            scaleAutomatically: {
                title: "Automatische Skalierung",
                description: "Warum manuell Ihren Server aktualisieren oder herunterstufen, wenn Sie dies automatisch erledigen können? Mit unserer API können Sie Ihren Server programmgesteuert nach Bedarf aktualisieren oder herunterstufen.",
                visitDocumentation: "Besuchen Sie unsere API-Dokumentation",
            }
        },
        dedicatedServers: {
            header: {
                title: "Dedizierte Server",
                tagline: "Reine Rechenleistung mit unseren dedizierten Servern. Ab 119,99 pro Monat.",
                callToAction: "Beginnen Sie heute!"
            },
            immediate: "Sofort",
            deliveryTime: "Lieferzeit",
            monthly: "Monatlich",
            hours: "Stunden",
            imageOfThe: "Bild von der",
            uplinkDisclaimer: "*Uplink unter Fair-Use-Policy. Weitere Informationen finden Sie in den Allgemeinen Geschäftsbedingungen.",
            customConfigurations: {
                title: "Benutzerdefinierte Konfigurationen",
                paragraph1: "Benötigen Sie spezielle Hardwarekonfigurationen? Benötigen Sie Mengenrabatte für mehrere Server? Kontaktieren Sie uns, und wir erstellen ein individuelles Angebot für Sie.",
                paragraph2: "Es ist auch möglich, einen Server langfristig zu mieten. Dadurch können Sie bis zu 40% Rabatt auf den monatlichen Preis erhalten. Kontaktieren Sie uns für weitere Informationen.",
                createATicket: "Ein Ticket erstellen",
                emailUs: "E-Mail an uns",
                imgAltTwoServers: "Zwei Server auf einem Rechenzentrum-Boden",
                imgAltServerRack: "Rückseite eines Serverschranks von DutchIS",
            },
            speedIX: {
                title: "Zusätzliche SpeedIX-Verbindung",
                description: "Wenn Sie BGP auf Ihrem Server ausführen, können Sie neben Ihrem vorhandenen Uplink eine zusätzliche SpeedIX-Verbindung beantragen. Neben dem Peering mit anderen können Sie auch ein zusätzliches Layer-2-VLAN zu anderen Rechenzentren bestellen.",
                disclaimer: "Es muss mindestens ein IPv4 /24-Subnetz mit Ihrem ASN verknüpft sein.",
                imgAlt: "Das SpeedIX-Logo",
                createATicket: "Ein Ticket erstellen",
                joinSpeedIX: "SpeedIX beitreten",
            },
        },
        termsOfService: {
            title: "Nutzungsbedingungen",
            description: "Unsere Nutzungsbedingungen."
        },
        privacyPolicy: {
            title: "Datenschutzbestimmungen",
            description: "Unsere Datenschutzbestimmungen."
        }
    }
}

export default de;
