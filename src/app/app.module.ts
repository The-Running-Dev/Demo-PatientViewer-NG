import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TableModule } from 'primeng/table';

import {
    ApiErrorService, ConfigService, ConfigServiceFactory,
    PatientService, PatientInMemoryService, StateService
} from './services';
import { AppConfig } from './models';
import { AppComponent } from './app.component';
import { AppLoadingComponent, AppHeaderComponent, AppSidebarComponent, AppTitleComponent } from './layout-components/';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';

const APP_SERVICES = [
    ApiErrorService,
    ConfigService,
    PatientService,
    StateService
];

const APP_COMPONENTS = [
    AppComponent,
    AppHeaderComponent,
    AppLoadingComponent,
    AppSidebarComponent,
    AppTitleComponent,
    DashboardComponent
];

@NgModule({
    declarations: [
        ...APP_COMPONENTS
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        environment.production ?
            [] : HttpClientInMemoryWebApiModule.forRoot(PatientInMemoryService, {passThruUnknownUrl: true, delay: 2000}),
        TableModule
    ],
    providers: [
        AppConfig,
        {
            provide: APP_INITIALIZER,
            useFactory: ConfigServiceFactory,
            deps: [ConfigService],
            multi: true
        },
        ...APP_SERVICES
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
