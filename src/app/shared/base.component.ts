import { Injector, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { StateService } from '../services';

export class BaseComponent implements OnDestroy {
    public isLoading: boolean;

    protected state: StateService;

    private loadingSubscription: Subscription;

    public constructor(injector: Injector) {
        if (injector) {
            this.state = injector.get(StateService);

            this.loadingSubscription = this.state.Loading$.subscribe((data: boolean) => {
                this.isLoading = data;
            });
        }
    }

    // this is a place holder method in case
    // child component's don't implement nginit
    // tslint:disable-next-line:use-lifecycle-interface
    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
        this.loadingSubscription.unsubscribe();
    }

    public Working() {
        if (this.state) {
            this.state.Working();
        }
    }

    public Ready() {
        if (this.state) {
            this.state.Ready();
        }
    }
}
