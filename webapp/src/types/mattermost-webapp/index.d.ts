import {Channel} from 'mattermost-redux/types/channels';


declare global {
    interface Window {
        registerPlugin(id: string, plugin: Plugin): void
    }
}

interface Plugin {
    public async initialize(registry: PluginRegistry, store: Store<GlobalState, Action<Record<string, unknown>>>);
    public async uninitialize();
}

export interface PluginRegistry {
    registerTranslations(arg0: (locale: string) => any);
    // Add more if needed from https://developers.mattermost.com/extend/plugins/webapp/reference

    registerPostTypeComponent(typeName: string, component: React.ElementType);
    registerChannelHeaderButtonAction(icon: React.ReactNode, callback: (channel: Channel) => void, dropdownText: React.ReactNode|string);
}
