// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License for license information.

import React, { FC } from 'react';
import {FormattedMessage} from 'react-intl';

import {makeStyleFromTheme} from 'mattermost-redux/utils/theme_utils';
import {Theme} from 'mattermost-redux/types/preferences';

import { IconMeet } from './icon';


interface PostTypeGoogleMeetProps {
    theme: Theme;
    post?: any;
}

/**
 * Based on https://github.com/mattermost/mattermost-plugin-zoom
 */
export const PostTypeGoogleMeet: FC<PostTypeGoogleMeetProps> = ({theme, post}) => {
    const style = getStyle(theme);
    const props = post.props || {};

    return (
    <div className='attachment attachment--pretext'>
        <div className='attachment__thumb-pretext'>
            <FormattedMessage id='mattermost_meet_plugin.message.pretext' />
        </div>
        <div className='attachment__content'>
            <div className='clearfix attachment__container'>
                <h5 className='mt-1' style={style.title}>
                    <FormattedMessage id='mattermost_meet_plugin.message.title' />
                </h5>
                    <FormattedMessage id='mattermost_meet_plugin.message.subtitle' />{ `: ${props.call_name}`}
                <div>
                    <div style={style.body}>
                        <Link link={props.meeting_link} theme={theme} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


interface LinkProps {
    link: string;
    theme: Theme;
}

const Link: FC<LinkProps> = ({link, theme}) => {
    const style = getStyle(theme);

    return (
        <a className='btn btn-lg btn-primary'
            style={style.button}
            rel='noopener noreferrer'
            target='_blank'
            href={link}
        >
            <IconMeet />
            <FormattedMessage id='mattermost_meet_plugin.message.button' />
        </a>
    );
}


const getStyle = makeStyleFromTheme((theme) => {
    return {
        body: {
            overflowX: 'auto',
            overflowY: 'hidden',
            paddingRight: '5px',
            width: '100%',
        },
        title: {
            fontWeight: '600',
        },
        button: {
            fontFamily: 'Open Sans',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            lineHeight: '19px',
            marginTop: '12px',
            borderRadius: '4px',
            color: theme.buttonColor,
        },
        buttonIcon: {
            paddingRight: '8px',
            fill: theme.buttonColor,
        },
        summary: {
            fontFamily: 'Open Sans',
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '26px',
            margin: '0',
            padding: '14px 0 0 0',
        },
        summaryItem: {
            fontFamily: 'Open Sans',
            fontSize: '14px',
            lineHeight: '26px',
        },
    };
});
