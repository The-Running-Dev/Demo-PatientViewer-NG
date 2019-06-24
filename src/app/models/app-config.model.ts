import { ApiUrls } from './api-urls.model';

export class AppConfig {
    public Version: string;

    public AllowDiagnostics: boolean;

    public EnableDiagnostics: boolean;

    public ApiUrls: ApiUrls;

    constructor() {
        this.Version = '1.0.0';
        this.AllowDiagnostics = true;
        this.EnableDiagnostics = true;
        this.ApiUrls = new ApiUrls();
    }
}
