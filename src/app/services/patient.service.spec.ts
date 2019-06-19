import { Injector, Type } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppConfig } from '../models';
import { ConfigService, PatientService } from './';
import { ConfigServiceStub, MockPatientData } from './index.stubs';

describe('PatientService', () => {
    let injector: Injector;
    let service: PatientService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                AppConfig,
                {provide: ConfigService, useValue: ConfigServiceStub},
                Injector,
                PatientService
            ]
        });

        service = injector.get(PatientService);
        httpMock = injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('Should Create the Patient Service', () => {
        expect(service).toBeTruthy();
    });

    it('Should Get All the Patients', async(() => {
        service.GetAll().subscribe((patients) => {
            expect(patients.length).toBe(3);
            expect(patients).toEqual(MockPatientData);
        });

        const req = httpMock.expectOne(`/patient/`);
        expect(req.request.method).toEqual('GET');
        req.flush(MockPatientData);
    }));
});
