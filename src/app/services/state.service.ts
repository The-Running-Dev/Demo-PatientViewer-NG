import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class StateService {
    public Loading$: Observable<boolean>;

    private loadingChanged: Subject<boolean>;

    constructor() {
        this.loadingChanged = new Subject<boolean>();
        this.Loading$ = this.loadingChanged.asObservable();
    }

    public Working(): void {
        this.loadingChanged.next(true);
    }

    public Ready(): void {
        this.loadingChanged.next(false);
    }
}
