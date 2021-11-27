import en from 'i18n/en.json';
import pt from 'i18n/pt_BR.json';
import fr from 'i18n/fr_FR.json';
import de from 'i18n/de_DE.json';
import pl from 'i18n/pl_PL.json';

export const getTranslations= (locale: string) => {
    switch (locale) {
        case 'pt':
            return pt;
        case 'pt-BR':
            return pt;
        case 'fr':
            return fr;
        case 'fr-FR':
            return fr;
        case 'fr-BE':
            return fr;
        case 'fr-CA':
            return fr;
        case 'de':
            return de;
        case 'de-AT':
            return de;
        case 'de-CH':
            return de;
        case 'de-DE':
            return de;
        case 'de-LI':
            return de;
        case 'de-LU':
            return de;            
        case 'pl':
            return pl;
        case 'pl-PL':
            return pl;
    }
    return en;
}
