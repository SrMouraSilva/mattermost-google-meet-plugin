import React from 'react';
import {Store, Action} from 'redux';
import {GlobalState} from 'mattermost-redux/types/store';

import { PluginRegistry, Plugin } from '../types/mattermost-webapp';
import { IconMeet } from 'component/icon';
import { HeaderMessage } from 'component/header';
import { GOOGLE_MEET_MESSAGE } from 'plugin/constant';
import { getTranslations } from 'plugin/translation';
import { PostTypeGoogleMeet } from 'component/post_type_google_meet';
import { startCall } from './start_call';
import { I18nProvider } from 'component/i18n_provider';
import { getCurrentUserLocale } from 'mattermost-redux/selectors/entities/i18n'


export class MattermostGoogleMeetPlugin implements Plugin {
    public async initialize(registry: PluginRegistry, store: Store<GlobalState, Action<Record<string, unknown>>>) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/
        const locale = getCurrentUserLocale(store.getState());

        registry.registerTranslations(locale => getTranslations(locale));
        registry.registerChannelHeaderButtonAction(
            <IconMeet />,
            (channel) => startCall(channel)(store.dispatch, store.getState),
            <I18nProvider currentLocale={locale}><HeaderMessage /></I18nProvider>
        );

        registry.registerPostTypeComponent(
            GOOGLE_MEET_MESSAGE,
            (props) => <I18nProvider currentLocale={locale}>
                <PostTypeGoogleMeet theme={props.theme}  post={props.post}/>
            </I18nProvider>
        );

        // Maybe in future
        // registry.registerSlashCommandWillBePostedHook(
        //     (message, args) => {
        //         if (message.startsWith('/meet')) {
        //             this.startCall(args.channel_id)(store.dispatch, store.getState)
        //             return {error: {message: 'rejected'}};
        //         }
        //     }
        // );
    }

    public async uninitialize() {}
}
