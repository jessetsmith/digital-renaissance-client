export class Artist {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public role: string,
        // private _token: string,
        // private _tokenExpirationDate: Date
    ){}
    
    // get token() {
    //     if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
    //         return null;
    //     }
    //     return this._token;
    // }
}