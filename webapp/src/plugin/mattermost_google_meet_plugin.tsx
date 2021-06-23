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


export class MattermostGoogleMeetPlugin implements Plugin {
    public async initialize(registry: PluginRegistry, store: Store<GlobalState, Action<Record<string, unknown>>>) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/

        registry.registerChannelHeaderButtonAction(
            <IconMeet />,
            (channel) => startCall(channel)(store.dispatch, store.getState),
            <HeaderMessage />
        );
        
        registry.registerTranslations(locale => getTranslations(locale));
        registry.registerPostTypeComponent(GOOGLE_MEET_MESSAGE, PostTypeGoogleMeet);
    
        // registry.registerSlashCommandWillBePostedHook(
        //     (message, args) => {
        //     console.log(message);
        //     console.log(args);
        //     if (message.startsWith('/meet')) {
        //         this.startCall(args.channel_id)(store.dispatch, store.getState)
        //         return {error: {message: 'rejected'}};
        //     }
        //     }
        // );
    }

    public async uninitialize() {}
}
