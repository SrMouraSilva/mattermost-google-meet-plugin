import en from 'i18n/en.json';
import pt from 'i18n/pt.json';

export const getTranslations= (locale: string) => {
    switch (locale) {
        case 'pt':
            return pt;
        case 'pt-BR':
            return pt;
    }
    return en;
}
