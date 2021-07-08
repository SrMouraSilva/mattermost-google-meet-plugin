import en from 'i18n/en.json';
import pt from 'i18n/pt_BR.json';
import fr from 'i18n/fr_FR.json';

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
    }
    return en;
}
