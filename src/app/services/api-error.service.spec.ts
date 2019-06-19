import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injector, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ApiErrorService } from './api-error.service';

describe('ApiErrorService', () => {
    let injector: Injector;
    let service: ApiErrorService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                ApiErrorService
            ]
        });

        service = injector.get(ApiErrorService);
        httpMock = injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('Should Create the API Error State Service', () => {
        expect(service).toBeTruthy();
    });
});
