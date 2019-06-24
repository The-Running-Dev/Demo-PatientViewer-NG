export class Patient {
    public readonly UniqueIdentifier: string;

    public readonly Surname: string;

    public readonly Forename: string;

    public readonly Name: string;

    public readonly DateOfBirth: string;

    public readonly PostalCode: string;

    constructor(init: any = {}) {
        this.UniqueIdentifier = init.UniqueIdentifier;
        this.Forename = init.Forename;
        this.Surname = init.Surname;
        this.Name = `${this.Forename} ${this.Surname}`;
        this.DateOfBirth = init.DateOfBirth;
        this.PostalCode = init.PostalCode;
    }
}
