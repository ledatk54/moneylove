/**
 * Created by DatLK on 10/12/2017.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class UserService {
    private userApi = "http://localhost:3000/user";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http : Http){}

    registerUser(user:any):Promise<any> {
        const url = `${this.userApi}/register`;
        return this.http.post(url, JSON.stringify(user),{ headers: this.headers})
            .toPromise()
            .then( response => response.json())
            .catch(this.handleError);
    }




    private handleError(error:any): Promise<any>{
        console.error('An error occurred',error);
        return Promise.reject(error.message || error);
    }

}
