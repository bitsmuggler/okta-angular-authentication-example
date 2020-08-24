import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

interface Message {
  date: String,
  text: String
}

@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {

  messages: Array<Message> [];

  constructor(private oktaAuth: OktaAuthService, private http: Http) {
    this.messages = [];
  }

  async ngOnInit() {
    // const accessToken = await this.oktaAuth.getAccessToken();
    // const headers = new Headers({
    //   Authorization: `Bearer ${accessToken}`
    // });

    // this.http.get('http://localhost:8080/api/messages', new RequestOptions({headers: headers}))
    //          .map(res => res.json())
    //          .subscribe((messages: Array<Message>) => messages.forEach((message: Message) => this.messages.push(message)))
  }

}
