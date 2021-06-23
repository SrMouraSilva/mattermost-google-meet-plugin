import React, { FC } from 'react';

import { getTranslations } from 'plugin/translation';
import {IntlProvider} from 'react-intl';


interface Props {
    currentLocale: string;
    children: React.ReactNode;
}


export const I18nProvider: FC<Props> = ({children, currentLocale}) => {
    return (
        <IntlProvider
            locale={currentLocale}
            key={currentLocale}
            messages={getTranslations(currentLocale)}
        >
            {children}
        </IntlProvider>
    );
}