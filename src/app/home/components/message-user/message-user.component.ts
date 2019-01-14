import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Message } from "../../models/message.model";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/reducers';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/shared/services/message.service';
import { getMessage } from 'src/app/shared/store/selectors/message-user.selectors';
import * as fromMessage from "../../../shared/store/actions/Message-user.actions";


@Component({
  selector: "app-message-user",
  templateUrl: "./message-user.component.html",
  styleUrls: ["./message-user.component.scss"]
})
export class MessageUserComponent implements OnInit {
  messages$: Observable<Message[]>;
  idUser: any;
  Messa: Message[];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.idUser = this.route.snapshot.params.id;
    this.messages$ = this.store.select(getMessage);
    
  }

  ngOnInit() {
    this.store.dispatch(new fromMessage.GetMessage(this.idUser));
    this.messageService.getMessageById(1).subscribe(data=> {
      this.Messa= data;
      console.log(this.Messa)
    }
    );
    
  }
}
