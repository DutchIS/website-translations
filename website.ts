export interface Home {
    header: {
        line1: string
        line2: string
        tagline: string
        callToAction: string
    },
    stats: {
        uptime: string
        happyCustomers: string
        awesome: string
    },
    flexibleVirtualServers: {
        title: string
        description: string
        startingAt: string
        hour: string
        seePricing: string
        month: string
        imgAlt: string
    },
    ourOwnInfrastructure: {
        title: string
        description: string
        imgAltTwoServers: string
        imgAltServerRack: string
    },
    seeWhatYouCanSave: {
        title: string
        description: string
        month: string
        bandwidth: string
        unmetered: string
        with: string
        without: string
        fairUseDisclaimer: string
        pricingDisclaimer: string
    },
    runningCarbonGray: {
        title: string
        description: string
        imgAlt: string
    },
    featureBlocks: {
        designedInHouse: {
            title: string
            description: string
        },
        fullyRedundant: {
            title: string
            description: string
        },
        qualitySupport: {
            title: string
            description: string
        },
        instantDeployment: {
            title: string
            description: string
        }
    }
}

export interface VirtualServers {
    header: {
        title: string
        tagline: string
        callToAction: string
    },
    dashboardOverview: {
        title: string
        description: string
        overview: string
        overviewAlt: string
        console: string
        consoleAlt: string
        settings: string
        settingsAlt: string
    },
    plans: {
        title: string
        standard: string
        performance: string
        month: string
        startingAt: string
        storage: string
        networkSpeed: string
        ddosProtectionIncluded: string
        orderNow: string
        descriptions: {
            standard: string
            performance: string
        },
    },
    speedIX: {
        title: string
        description: string
        disclaimer: string
        imgAlt: string
        createATicket: string
        joinSpeedIX: string
    },
    payPerHour: {
        title: string
        description: string
        configure: string
        standard: string
        performance: string
        storage: string
        hour: string
        month: string
        callToAction: string
        disclaimer: string
    },
    videoTutorial: {
        title: string
        description: string
        youtubeId: string
    },
    scaleAutomatically: {
        title: string
        description: string
        visitDocumentation: string
    }
}

export interface DedicatedServers {
    header: {
        title: string
        tagline: string
        callToAction: string
    },
    immediate: string
    deliveryTime: string
    monthly: string
    hours: string
    imageOfThe: string   
    uplinkDisclaimer: string
    customConfigurations: {
        title: string
        paragraph1: string
        paragraph2: string
        createATicket: string
        emailUs: string
        imgAltTwoServers: string
        imgAltServerRack: string
    },
    speedIX: {
        title: string
        description: string
        disclaimer: string
        imgAlt: string
        createATicket: string
        joinSpeedIX: string
    }
}

export interface termsOfService {
    title: string
    description: string
}

export interface privacyPolicy {
    title: string
    description: string
}

export interface Header {
    home: string
    virtualServers: string
    dedicatedServers: string
    dashboard: string
    login: string
}

export interface Footer {
    products: {
        title: string
        virtualServers: string
        dedicatedServers: string
    },
    support: {
        title: string
        supportTickets: string
        apiDocumentation: string
        documentation: string
    },
    company: {
        title: string
        privacyPolicy: string
        termsOfService: string
        reportAbuse: string
    },
    about: {
        title: string
        description: string
        vat: string
    },
    socials: string
    copyright: string
    allRightsReserved: string
}
