import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';

import { ApiErrorService, ConfigService, ConfigServiceFactory, PatientService, StateService } from './services';
import { AppConfig } from './models';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppLoadingComponent, AppHeaderComponent, AppSidebarComponent, AppTitleComponent } from './layout-components/';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_SERVICES = [
    ApiErrorService,
    ConfigService,
    PatientService,
    StateService
];

const APP_COMPONENTS = [
    AppComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppTitleComponent,
    DashboardComponent
];

@NgModule({
    declarations: [
        AppComponent,
        ...APP_COMPONENTS,
        AppLoadingComponent,
        AppTitleComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
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
