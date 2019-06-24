import { of } from 'rxjs';

import { Patient } from '../models';

export const PatientServiceStub = {
    GetAll() {
        return of([{id: 1}]);
    }
};

export const MockPatientData = [
    {UniqueIdentifier: '1', Name: 'Name 1'} as Patient,
    {UniqueIdentifier: '2', Name: 'Name 2'} as Patient,
    {UniqueIdentifier: '3', Name: 'Name 3'} as Patient
];
