import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title : string = 'Analytique';
  message : Message;

  constructor(private appService: AppService) { }

   	ngOnInit() {
   		this.getMessage();
  	}

  	getMessage() {
  		this.appService.getMessage().subscribe(
  			(message) => {
          console.log(message);
          this.message = message;
        }
  		);
  	}

}
