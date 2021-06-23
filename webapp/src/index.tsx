import { MattermostGoogleMeetPlugin } from 'plugin/mattermost_google_meet_plugin';
import manifest from './manifest';

window.registerPlugin(manifest.id, new MattermostGoogleMeetPlugin());