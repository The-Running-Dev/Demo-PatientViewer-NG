import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AppHeaderComponent, AppLoadingComponent, AppSidebarComponent, AppTitleComponent } from './layout-components';

import { StateService } from './services';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                AppHeaderComponent,
                AppLoadingComponent,
                AppSidebarComponent,
                AppTitleComponent
            ],
            providers: [
                StateService
            ]
        }).compileComponents();
    }));

    it('Should Create the App Component', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('Should Render the Application Title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.app-header__logo').textContent).toContain('Patient Viewer');
    });
});
