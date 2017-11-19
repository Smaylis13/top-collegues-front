export class Collegue {

    constructor(private _nom:string, private _url:string, private _score:number){}

    get nom(): string {
        return this._nom;
    }
    get url(): string {
        return this._url;
    }
    get score(): number {
        return this._score;
    }
    set score(s){
        this._score = s;
    }

    set nom(n){
        this._nom = n
    }
    set url(u) {
        this._url = u
    }
}
