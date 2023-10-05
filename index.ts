import en from "./translations/en";
import nl from "./translations/nl";
import type { DedicatedServers, Footer, Header, Home, VirtualServers, privacyPolicy, termsOfService } from "./website";

export interface Language {
    website: {
        header: Header
        footer: Footer
        home: Home
        virtualServers: VirtualServers
        dedicatedServers: DedicatedServers
        termsOfService: termsOfService
        privacyPolicy: privacyPolicy
    }
}

export const languages = {
    "en-US": en,
    "nl-NL": nl
}
