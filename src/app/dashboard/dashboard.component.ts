import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';

import { Patient } from '../models';
import { PatientService } from '../services';
import { BaseComponent } from '../shared';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent extends BaseComponent implements OnInit {
    patients: Patient[];

    constructor(injector: Injector, private service: PatientService) {
        super(injector);
    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.Working();

        this.service.GetAll().subscribe(data => {
            this.patients = data;
            this.Ready();
        });
    }
}
