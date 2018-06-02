import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { Message } from './message';

@Injectable({
  	providedIn: 'root'
})
export class AppService {

	private apiURL = 'http://localhost:8000/api';

  	constructor(private http: HttpClient) { }

  	getMessage(): Observable<Message> {
	  	return this.http.get<Message>(this.apiURL + '/message');
	}

}
