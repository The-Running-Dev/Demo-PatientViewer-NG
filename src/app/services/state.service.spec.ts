import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { StateService } from './';

describe('StateService', () => {
    let injector: Injector;
    let service: StateService;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            providers: [
                StateService
            ]
        });

        service = injector.get(StateService);
    });

    it('Should Create the State Service', () => {
        expect(service).toBeTruthy();
    });
});
