import {Component} from '@angular/core';
// import { MessengerService } from "./messenger.service";
// import { Messenger } from "./Messenger";
// import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent {
  title = 'Messenger works!';
  // constructor(private messengerService: MessengerService, private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.data
  //   .map((data: { messenger: Messenger }) => data.messenger)
  //   .subscribe((messenger: Messenger) => console.log(messenger));
  // }

}
