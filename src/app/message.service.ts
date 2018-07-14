import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages: string[] = [];

  add(message: string) {
    this._messages.push(message);
  }

  clear() {
    this._messages = [];
  }
}
