export class BlogItem {
    constructor(private _title: string,
        private _description: string,
        private _content: string,
        private _link: string) { }


    get Title(): string { return this._title; }
    get Description(): string { return this._description; }
    get Content(): string { return this._content; }
    get Link(): string { return this._link; }
}