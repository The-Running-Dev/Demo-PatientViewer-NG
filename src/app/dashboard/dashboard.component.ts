import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Patient } from '../models';
import { PatientService } from '../services';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
    patients: Patient[];

    constructor(private service: PatientService) {}

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.service.GetAll().subscribe(data => {
            this.patients = data;
        });
    }
}
