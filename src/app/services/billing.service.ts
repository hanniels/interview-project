import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class ParkingService {

    constructor(private http: HttpClient) { }

    //stub http request to an imaginary backend order api
    makeOrder() {
        // let token = <locationOfAccessToken>
        // return this.http.put<AssociatedTypeHere>(<endpointURLHere>, <bodyHere>,
        //     { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) }
        // );
    }

    //stub http request to an imaginary backend order api
    viewOrder() {
        // let token = <locationOfAccessToken>
        // return this.http.get<AssociatedTypeHere>(<endpointURLHere>>,
        //     { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) }
        // );
    }

    //This file would also contain stripe integration for protected payments
    //beyoned the scope of the user story that does not reqire backend functions

}