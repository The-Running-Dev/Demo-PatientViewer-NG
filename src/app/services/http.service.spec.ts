import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injector, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AppConfig } from '../models';
import { ConfigService } from './config.service';
import { HttpService } from './http.service';

const configServiceStub = {
    Config: new AppConfig(),
    GetApiUrl() {
        return '/patient';
    }
};

describe('HttpService', () => {
    let injector: Injector;
    let service: HttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                AppConfig,
                {
                    provide: ConfigService,
                    useValue: configServiceStub
                },
                Injector,
                HttpService
            ]
        });

        service = injector.get(HttpService);
        httpMock = injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('Should Create the Http Service', () => {
        expect(service).toBeTruthy();
    });
});
