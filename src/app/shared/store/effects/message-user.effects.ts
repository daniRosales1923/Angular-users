import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { MessageService } from '../../services/message.service';
import * as fromMessage from '../actions/Message-user.actions'
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class MessageEffects{
    @Effect() 
    LoadingMessage$: Observable<Action> = this.actions.pipe(
        ofType(fromMessage.MessageActionTypes.GET_MESSAGE),
        mergeMap(action => this.messageService.getMessage().pipe(
            map(detail => new fromMessage.GetMessageSuccess(detail)),
            catchError((error)=> of(new fromMessage.GetMessageError(error)))
        ))
    );

    @Effect() 
    LoadMessage$ = this.actions.pipe(
        ofType(fromMessage.MessageActionTypes.GET_MESSAGE),
        map((action: fromMessage.GetMessage) => action.id),
        mergeMap(id => this.messageService.getMessageById(id).pipe(
            map(response => new fromMessage.GetMessageSuccess(response)),
            catchError((error)=> of(new fromMessage.GetMessageError(error)))
        ))
    );

    constructor(
        private messageService: MessageService,
        private actions: Actions
    ){}

}