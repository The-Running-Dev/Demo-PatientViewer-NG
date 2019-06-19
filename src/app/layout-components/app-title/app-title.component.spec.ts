import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTitleComponent } from './app-title.component';

describe('AppTitleComponent', () => {
    let component: AppTitleComponent;
    let fixture: ComponentFixture<AppTitleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppTitleComponent
            ]
        }).compileComponents();
    }));

    it('Should Create the App Title Component', () => {
        expect(component).toBeTruthy();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppTitleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
