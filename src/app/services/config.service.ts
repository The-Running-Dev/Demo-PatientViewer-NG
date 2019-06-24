import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../models';
import { environment } from '../../environments/environment';

// @ts-ignore
import ConfigJson from '../../config.json';

@Injectable()
export class ConfigService {
    constructor(
        public Config: AppConfig,
        private http: HttpClient
    ) {
    }

    public GetApiUrl(endPointUrl: string): string {
        return `${environment.apiUrl}/${endPointUrl}`;
    }

    public Load(): void {
        this.Config = ConfigJson as AppConfig;
    }
}

export function ConfigServiceFactory(config: ConfigService) {
    return () => config.Load();
}
