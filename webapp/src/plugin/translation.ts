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
            return pt;
        case 'fr-FR':
            return pt;
    }
    return en;
}
