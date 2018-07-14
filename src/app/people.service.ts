import { Injectable } from '@angular/core';
import { People } from "@app/people/People";
import { PeopleMock } from "@app/people/PeopleMock";
import { Observable, of } from "rxjs";
import { MessageService } from "@app/message.service";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private messageService: MessageService) { }

  // TODO:
  getPeople(): Observable<People[]> {
    this.messageService.add('MessageService: fetched people');
    return of(PeopleMock);
  }
}
