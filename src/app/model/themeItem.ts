
export class ThemeItem {
    constructor(private _id: string,
        private _description: string,
        private _browserId: string,
        private _pressed: boolean = false) { }

    get Id() { return this._id; }
    get RefId() { return `#${this._id}`; }
    get Description() { return this._description; }
    get BrowserId() { return this._browserId; }
    get Pressed() { return this._pressed; }
    set Pressed(value: boolean){ this._pressed = value;}
}