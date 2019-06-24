import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { PatientInMemoryService } from './patient-in-memory.service';
import { StateService } from './state.service';

describe('PatientInMemoryService', () => {
    let injector: Injector;
    let service: StateService;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            providers: [
                PatientInMemoryService
            ]
        });
        service = TestBed.get(PatientInMemoryService);
    });

    it('Should Create the Patient In Memory Service', () => {
        expect(service).toBeTruthy();
    });
});
