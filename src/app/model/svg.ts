export class Svg {
    private _xmlns: string = "http://www.w3.org/2000/svg";
    private _symbolList: Symbol[] = [];

    get Xmlsn(): string{
        return this._xmlns;
    }    
    
    get SymbolList(): Symbol[]{
        return this._symbolList;
    }

    addSymbol(value: Symbol): void{
        this._symbolList.push(value);
    }
}

export class Symbol {
    private _id: string;
    private _viewBox: string;
    private _pathList: string[];

    constructor(id: string, viewBox: string, pathList: string[]){
        this._id = id;
        this._viewBox = viewBox;
        this._pathList = pathList;
    }

    get Id(): string {
        return this._id;
    }

    get ViewBox(): string{
        return this._viewBox;
    }

    get PathList(): string[]{
        return this._pathList;
    }
}