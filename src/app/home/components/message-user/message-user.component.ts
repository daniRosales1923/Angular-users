import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Message } from "../../models/message.model";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/reducers';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/shared/services/message.service';
import * as fromMessage from "../../../shared/store/actions/Message-user.actions";
import { getMessageById } from 'src/app/shared/store/selectors/message-user.selectors';

@Component({
  selector: "app-message-user",
  templateUrl: "./message-user.component.html",
  styleUrls: ["./message-user.component.scss"]
})
export class MessageUserComponent implements OnInit {
  messages$: Observable<Message[]>;
  id: any;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private messageService: MessageService) {    this.id = this.route.snapshot.params.id;
    this.messages$ = this.store.select(getMessageById(this.id));
  }

  ngOnInit() {
    this.store.dispatch(new fromMessage.GetMessage(this.id));    
  }
}
