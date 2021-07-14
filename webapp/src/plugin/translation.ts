import en from 'i18n/en.json';
import pt from 'i18n/pt_BR.json';
import de from 'i18n/de_DE.json';

export const getTranslations= (locale: string) => {
    switch (locale) {
        case 'pt':
            return pt;
        case 'pt-BR':
            return pt;
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
    }
    return en;
}
