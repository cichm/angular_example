import { Component, Input, OnInit } from '@angular/core';
import { People } from "@app/people/People";

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  @Input() people: People;

  constructor() { }

  ngOnInit() {
  }

}
