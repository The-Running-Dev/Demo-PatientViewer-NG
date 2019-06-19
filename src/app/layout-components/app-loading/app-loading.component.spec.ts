import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateService } from '../../services';

import { AppLoadingComponent } from './app-loading.component';

describe('AppLoadingComponent', () => {
    let component: AppLoadingComponent;
    let fixture: ComponentFixture<AppLoadingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppLoadingComponent
            ],
            providers: [
                StateService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppLoadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should Create the App Loading Component', () => {
        expect(component).toBeTruthy();
    });
});
