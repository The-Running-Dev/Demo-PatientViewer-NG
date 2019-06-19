import { AppConfig } from '../models';

export const ConfigServiceStub = {
    Load() {
        return new AppConfig();
    },
    Config: new AppConfig(),
    GetApiUrl() {
        return '/patient';
    }
};
