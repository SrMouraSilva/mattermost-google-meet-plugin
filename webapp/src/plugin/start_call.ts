import { Dispatch } from 'react';
import {Action} from 'redux';
import {GlobalState} from 'mattermost-redux/types/store';

import { Channel } from 'mattermost-redux/types/channels';
import { GOOGLE_MEET_MESSAGE } from 'plugin/constant';
import { uuidv4 } from 'util/utils';
import {getCurrentUserId} from 'mattermost-redux/selectors/entities/common';
import {createPost} from 'mattermost-redux/actions/posts';
import { Post } from 'mattermost-redux/types/posts';

export const startCall = (channel: Channel) => {
    return async (dispatch: Dispatch<Action<Record<string, unknown>>>, getState: () => GlobalState) => {
        const state = getState();

        const team = state.entities.teams.teams[state.entities.teams.currentTeamId];
        const callName = `${team.name}-${channel.name}`; // = uuidv4();
        const trimmedCallName = callName.substring(0, 60);
        const url = `http://g.co/meet/${trimmedCallName}`;

        // Open a window?
        // window.open(url);

        const post: Post = {
            create_at: Date.now(),
            user_id: getCurrentUserId(state),
            channel_id: channel.id,
            message: `I have started a meeting: [${url}](${url})`,
            type: GOOGLE_MEET_MESSAGE as any,
            props: {
                call_name: trimmedCallName,
                meeting_link: url
            },
        } as any;

        // Based on https://zenn.dev/kaakaa/articles/qiita-20201220-fd10c58b00c43ae3cc3c
        return await dispatch(createPost(post as any) as any);
    }
}
