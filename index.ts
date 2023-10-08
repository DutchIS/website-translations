import type { DedicatedServers, Footer, Header, Home, VirtualServers, privacyPolicy, termsOfService } from "./website";
import en from "./translations/en";
import nl from "./translations/nl";
import cn from "./translations/cn";
import de from "./translations/de";

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

export const domainLanguages = {
    "dutchis.nl": "nl-NL",
    "dutchis.be": "nl-NL",
    "dutchis.de": "de-DE",
    "dutchis.cn": "cn-CN",
    "dutchis.sg": "en-US",
    "dutchis.net": "en-US",
    "dutchis.com": "en-US",
    "dutchis.co.uk": "en-US",
}

export const languages = {
    "en-US": en,
    "nl-NL": nl,
    "cn-CN": cn,
    "de-DE": de,
}
