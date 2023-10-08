import type { Language } from "..";

const nl: Language = {
    website: {
        header: {
            home: "Thuis",
            virtualServers: "Virtuele Servers",
            dedicatedServers: "Dedicated Servers",
            dashboard: "Dashboard",
            login: "Log in",
        },
        footer: {
            products: {
                title: "Producten",
                virtualServers: "Virtuele Servers",
                dedicatedServers: "Dedicated Servers",
            },
            support: {
                title: "Hulp",
                supportTickets: "Hulp Tickets",
                apiDocumentation: "API Documentatie",
                documentation: "Documentatie",
            },
            company: {
                title: "Bedrijf",
                privacyPolicy: "Privacybeleid",
                termsOfService: "Algemene Voorwaarden",
                reportAbuse: "Meld Misbruik",
            },
            about: {
                title: "Over DutchIS",
                description: "DutchIS streeft ernaar om premium serverhosting aan te bieden met geweldige functies zoals een uitgebreide API en hoge beschikbaarheid.",
                vat: "BTW",
            },
            socials: "Socials",
            copyright: "Copyright",
            allRightsReserved: "Alle rechten voorbehouden",
        },
        home: {
            header: {
                "line1": 'Instant',
                "line2": 'Infrastructure',
                "tagline": "Wij creëren de beste ervaring voor u en uw gebruikers, van een eenvoudige VM tot grote netwerken die diensten leveren aan duizenden gebruikers.",
                "callToAction": "Begin vandaag nog!"
            },
            stats: {
                uptime: "Uptime in de laatste 30 dagen",
                happyCustomers: "Blije Klanten",
                awesome: "Geweldig"
            },
            flexibleVirtualServers: {
                title: "Flexibele Virtuele Servers",
                description: "We bieden een reeks virtuele serveroplossingen die ideaal zijn voor elk project. Of u nu een hoge single core-prestatie of veel opslagruimte nodig heeft, wij hebben u gedekt. Elke virtuele server wordt geleverd met een onbeperkte internetverbinding, DDoS-bescherming en een uptime SLA van 99,9%. Dit alles om ervoor te zorgen dat uw project presteert en altijd online is.",
                startingAt: "Vanaf",
                hour: "uur",
                seePricing: "Bekijk Prijzen",
                month: "mnd",
                imgAlt: "Virtuele server dashboard"
            },
            ourOwnInfrastructure: {
                title: "Onze eigen infrastructuur",
                description: "We hebben onze eigen infrastructuur ontworpen en gebouwd om ervoor te zorgen dat we de beste prestaties en ervaring kunnen bieden. We gebruiken alleen de beste hardware en software om ervoor te zorgen dat uw services altijd online zijn en de beste prestaties bieden. Onze infrastructuur is ontworpen om de beste prestaties te bieden, terwijl de kosten laag blijven. We gebruiken alleen de beste hardware en software om ervoor te zorgen dat uw services altijd online zijn en de beste prestaties bieden. Onze infrastructuur is ontworpen om de beste prestaties te bieden, terwijl de kosten laag blijven.",
                imgAltTwoServers: "Twee van DutchIS' servers op de datacenter vloer",
                imgAltServerRack: "De achterkant van een van DutchIS' server racks",
            },
            seeWhatYouCanSave: {
                title: "Zie wat u kunt besparen",
                description: "Bespaar tot 70% per maand, afhankelijk van de aanbieder. Geen verrassingen aan het einde van de maand met onze voorspelbare prijzen.",
                month: "mdn",
                bandwidth: "bandbreedte",
                unmetered: "onbeperkt",
                with: "met",
                without: "zonder",
                pricingDisclaimer: "Prijzen vanaf 30-06-2023. 2 vCPU, 4 GB RAM en 80 GB opslag virtuele server. ",
                fairUseDisclaimer: "*Fair Use Policy is van toepassing. Zie onze Algemene Voorwaarden voor meer informatie.",
            },
            runningCarbonGray: {
                title: "Co2 neutraal draaien met 100% Nederlandse wind!",
                description: "Bij DutchIS zetten we ons in voor duurzaamheid en gebruiken we groene energie om al onze diensten van stroom te voorzien. Ons datacenter Serverius maakt gebruik van groenestroomcertificaten gegenereerd door windturbines in Nederland om ervoor te zorgen dat de elektriciteit die we gebruiken aan strenge duurzaamheidseisen voldoet. De SMK-garantie zorgt ervoor dat onze elektriciteit 100% afkomstig is van Nederlandse windturbines, zodat u zeker kunt zijn van de milieu-impact van onze diensten. Samen werken we aan een schonere en duurzamere toekomst.",
                imgAlt: "Een groen veld met windturbines in de achtergrond.",
            },
            featureBlocks: {
                designedInHouse: {
                    title: "In huis ontworpen",
                    description: "We ontwerpen en maken onze eigen hardware en software om ervoor te zorgen dat we onze klanten de best mogelijke prestaties en ervaring kunnen bieden.",
                },
                fullyRedundant: {
                    title: "Volledig Redundant",
                    description: "Wij beschikken een volledig redundant netwerk, stroom- en koelsysteem om ervoor te zorgen dat uw diensten altijd online zijn.",
                },
                qualitySupport: {
                    title: "Kwaliteit Support",
                    description: "U wordt gedekt door een team dat bekend staat als een van de meest deskundige, vriendelijke en professionele. Echte mensen staan klaar om u te helpen met elk probleem, op elk moment.",
                },
                instantDeployment: {
                    title: "Directe deployment",
                    description: "Wanneer u een server bestelt, wordt uw server binnen enkele seconden onmiddellijk ingezet en klaar voor gebruik. U hoeft niet uren of dagen op uw server te wachten!",
                }
            }
        },
        virtualServers: {
            header: {
                title: "Virtuele Servers",
                tagline: "Krachtige virtuele server binnen enkele minuten deployed via ons in huis gemaakte dashboard of met onze API. Vanaf slechts € 0,0047 per uur.",
                callToAction: "Start vandaag nog!",
            },
            dashboardOverview: {
                title: "Simpel maar krachtige bediening",
                description: "Beheer uw virtuele server vanaf een krachtig dashboard met alle functies die u mag verwachten.",
                overview: "Overzicht",
                overviewAlt: "De overzicht pagina van een virtuele server",
                console: "Console",
                consoleAlt: "De console van een virtuele server",
                settings: "Instellingen",
                settingsAlt: "De instellingen pagina van het dashboard",
            },
            plans: {
                title: "Virtual Server Pakketten",
                standard: "Standaard",
                performance: "Performance",
                month: "maand",
                startingAt: "Begint vanaf",
                storage: "opslag",
                networkSpeed: "netwerk snelheid",
                ddosProtectionIncluded: "Inclusief DDoS bescherming",
                orderNow: "Bestel direct",
                descriptions: {
                    standard: "Onze standaard virtuele servers draaien op AMD Epyc MILAN CPU's met een kloksnelheid van 3,7 GHz. Deze servers zijn perfect voor het draaien van algemene diensten's zoals websites, databases en meer.",
                    performance: "Onze performance virtuele servers draaien op super snelle AMD Ryzen 5900x CPU's met een kloksnelheid van 4,8 GHz. Deze servers zijn perfect voor het uitvoeren van krachtig vereisende applicaties zoals game servers.",
                },
            },
            speedIX: {
                title: "Extra SpeedIX-verbinding",
                description: "Wanneer u BGP op uw server heeft draaien, kunt u naast uw bestaande uplink een extra SpeedIX-verbinding aanvragen. Naast peering met anderen kunt u een extra Layer 2 VLAN bestellen naar andere datacenters.",
                disclaimer: "Er moet minimaal één IPv4 /24 subnet aan uw ASN zijn gekoppeld.",
                imgAlt: "Het SpeedIX logo",
                createATicket: "Maak een ticket aan",
                joinSpeedIX: "Word lid van SpeedIX",
            },
            payPerHour: {
                title: "Betaal per uur",
                description: "Stop met te veel te betalen! Betaal per uur en schaal omhoog en omlaag wanneer je het nodig hebt.",
                standard: "Standaard",
                performance: "Performance",
                configure: "Configureer",
                storage: "Opslag",
                hour: "uur",
                month: "maand",
                callToAction: "Start vandaag!",
                disclaimer: "*Het maandbedrag is een schatting en kan een klein bedrag afwijken.",
            },
            videoTutorial: {
                title: "Deployed onder een minuut!",
                description: "Creëer en start binnen een minuut virtuele servers met ons dashboard of API. Bekijk de video aan de linkerkant om te zien hoe eenvoudig het is om een virtuele server te starten.",
                youtubeId: "PU4EcUH8ONg",
            },
            scaleAutomatically: {
                title: "Schaal Automatisch",
                description: "Waarom handmatig uw server upgraden of downgraden als u dit automatisch kunt laten doen? Met onze API kunt u programatisch uw server upgraden of downgraden wanneer u het nodig heeft.",
                visitDocumentation: "Bekijk onze API documentatie",
            }
        },
        dedicatedServers: {
            header: {
                title: "Dedicated Servers",
                tagline: "Bare metal kracht met onze dedicated servers. Vanaf 119,99 per maand.",
                callToAction: "Start vandaag nog!",
            },
            immediate: "Direct",
            deliveryTime: "Levertijd",
            monthly: "Maandelijks",
            hours: "Uren",
            imageOfThe: "Foto van de",            
            uplinkDisclaimer: "*Uplink onder fair use. Zie de algemene voorwaarden voor meer informatie.",
            customConfigurations: {
                title: "Aangepaste configuraties",
                paragraph1: "Specifieke hardwareconfiguraties nodig? Bulkprijzen nodig voor meerdere servers? Neem contact met ons op en wij komen bij u terug met een offerte op maat.",
                paragraph2: "Het is ook mogelijk om een server voor langere tijd te huren. Hiermee kunt u tot wel 40% korting krijgen op de maandprijs. Neem contact met ons op voor meer informatie.",
                createATicket: "Maak een ticket aan",
                emailUs: "Email Ons",
                imgAltTwoServers: "Twee servers op een datacentervloer",
                imgAltServerRack: "Achterzijde van een serverrack van DutchIS",
            },
            speedIX: {
                title: "Extra SpeedIX-verbinding",
                description: "Wanneer u BGP op uw server heeft draaien, kunt u naast uw bestaande uplink een extra SpeedIX-verbinding aanvragen. Naast peering met anderen kunt u een extra Layer 2 VLAN bestellen naar andere datacenters.",
                disclaimer: "Er moet minimaal één IPv4 /24 subnet aan uw ASN zijn gekoppeld.",
                imgAlt: "Het SpeedIX logo",
                createATicket: "Maak een ticket aan",
                joinSpeedIX: "Word lid van SpeedIX",
            },
        },
        termsOfService: {
            title: "Algemene Voorwaarden",
            description: "Onze algemene voorwaarden."
        },
        privacyPolicy: {
            title: "Privacybeleid",
            description: "Ons privacybeleid."
        }
    }
}

export default nl;
