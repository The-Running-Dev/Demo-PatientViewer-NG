import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Patient } from '../models';

@Injectable()
export class PatientInMemoryService implements InMemoryDbService {
    createDb() {
        const patient = [
            new Patient({
                UniqueIdentifier: '001',
                DateOfBirth: '1928-11-18T00:00:00',
                Forename: 'Mickey',
                Surname: 'Mouse',
                PostalCode: 'PO1 1AA'
            }),
            new Patient({
                UniqueIdentifier: '002',
                DateOfBirth: '1947-12-27T00:00:00',
                Forename: 'Han',
                Surname: 'Solo',
                PostalCode: 'SO1 1AA'
            }),
            new Patient({
                UniqueIdentifier: '003',
                DateOfBirth: '1940-10-09T00:00:00',
                Forename: 'John',
                Surname: 'Lennon'
            }),
            new Patient({
                UniqueIdentifier: '004',
                DateOfBirth: '1945-02-10T00:00:00',
                Forename: 'Mahatma',
                Surname: 'Gandhi',
                PostalCode: 'SO2 1AB'
            }),
            new Patient({
                UniqueIdentifier: '005',
                DateOfBirth: '1940-01-09T00:00:00',
                Forename: 'Ben',
                Surname: 'Richards',
                PostalCode: 'SO3 1AC'
            }),
            new Patient({
                UniqueIdentifier: '006',
                DateOfBirth: '1950-12-08T00:00:00',
                Forename: 'Ringo',
                Surname: 'Starr',
                PostalCode: 'SO4 1AD'
            }),
            new Patient({
                UniqueIdentifier: '007',
                DateOfBirth: '1923-04-07T00:00:00',
                Forename: 'Joseph',
                Surname: 'Stalin',
                PostalCode: 'SO5 1AE'
            }),
            new Patient({
                UniqueIdentifier: '008',
                DateOfBirth: '1975-05-02T00:00:00',
                Forename: 'David',
                Surname: 'Beckham',
                PostalCode: 'SO6 1AF'
            }),
            new Patient({
                UniqueIdentifier: '009',
                DateOfBirth: '1961-12-06T00:00:00',
                Forename: 'Luke',
                Surname: 'Skywalker',
                PostalCode: 'SO7 1AG'
            }),
            new Patient({
                UniqueIdentifier: '010',
                DateOfBirth: '1922-08-10T00:00:00',
                Forename: 'Winston',
                Surname: 'Churchill',
                PostalCode: 'SO8 1AH'
            }),
            new Patient({
                UniqueIdentifier: '011',
                DateOfBirth: '1919-11-20T00:00:00',
                Forename: 'Theodore',
                Surname: 'Roosevelt',
                PostalCode: 'SO9 1AI'
            }),
            new Patient({
                UniqueIdentifier: '012',
                DateOfBirth: '1970-05-09T00:00:00',
                Forename: 'Barack',
                Surname: 'Obama',
                PostalCode: 'SO9 1AJ'
            }),
            new Patient({
                UniqueIdentifier: '013',
                DateOfBirth: '1955-07-30T00:00:00',
                Forename: 'Paul',
                Surname: 'McCartney',
                PostalCode: 'SO9 1AK'
            }),
            new Patient({
                UniqueIdentifier: '014',
                DateOfBirth: '1960-06-09T00:00:00',
                Forename: 'Bruce',
                Surname: 'Dickinson',
                PostalCode: 'SO9 1AL'
            }),
            new Patient({
                UniqueIdentifier: '015',
                DateOfBirth: '1945-01-09T00:00:00',
                Forename: 'Nelson',
                Surname: 'Mandela',
                PostalCode: 'SO9 1AM'
            })
        ];

        return {patient};
    }
}
