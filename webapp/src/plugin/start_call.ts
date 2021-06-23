import { Dispatch } from 'react';
import {Action} from 'redux';
import {GlobalState} from 'mattermost-redux/types/store';

import { Channel } from 'mattermost-redux/types/channels';
import { GOOGLE_MEET_MESSAGE } from 'plugin/constant';
import { uuidv4 } from 'util/utils';
import {getCurrentUserId} from 'mattermost-redux/selectors/entities/common';
import {PostTypes} from 'mattermost-redux/action_types';


export const startCall = (channel: Channel) => {
    return async (dispatch: Dispatch<Action<Record<string, unknown>>>, getState: () => GlobalState) => {
        const state = getState();
        
        const callName = uuidv4();
        const url = `http://g.co/meet/${callName}`;

        // Open a window?
        // window.open(url);

        const post = {
            create_at: Date.now(),
            user_id: getCurrentUserId(state),
            channel_id: channel.id,
            message: `I have started a meeting: [${url}](${url})`,
            type: GOOGLE_MEET_MESSAGE,
            props: {
                call_name: callName,
                meeting_link: url
            },
        };

        // Based on https://zenn.dev/kaakaa/articles/qiita-20201220-fd10c58b00c43ae3cc3c
        // return await dispatch({
        //     type: PostTypes.RECEIVED_NEW_POST,
        //     data: post,
        //     channel.id,
        // });
    }
}