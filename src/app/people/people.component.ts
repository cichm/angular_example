import { Component, OnInit } from '@angular/core';
import { People } from "@app/people/People";
import { PeopleService } from "@app/people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  selectedPeople: People;
  people: People[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }

  onSelect(people: People): void {
    this.selectedPeople = people;
  }

  getPeople(): void {
    this.peopleService.getPeople().subscribe(people => this.people = people)
  }

}
