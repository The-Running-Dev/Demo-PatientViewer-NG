import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injector, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';

import { AppConfig } from '../models';
import { ConfigService } from './config.service';

const mockConfig = {
    Version: '1.0.0-develop',
    AllowDiagnostics: true,
    EnableDiagnostics: true,
    ApiUrls: {
        Patient: 'patient'
    }
} as AppConfig;


describe('ConfigService', () => {
    let injector: Injector;
    let service: ConfigService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                AppConfig,
                Injector,
                ConfigService
            ]
        });

        service = TestBed.get(ConfigService);
        httpMock = TestBed.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    });

    it('Should Create the Config Service', () => {
        expect(service).toBeTruthy();
    });

    it('Should Load the Default Configuration', () => {
        service.Load();

        expect(service.Config).toBeDefined();
        expect(service.Config).toEqual(mockConfig);
    });

    it('Should Get a Api Url by Its Key', () => {
        service.Load();

        expect(service.GetApiUrl('patient')).toEqual(`${environment.apiUrl}/${mockConfig.ApiUrls.Patient}`);
    });
});
