import { Component, OnInit } from '@angular/core';
import { Event } from '../../../../model/event';
import { EventService } from '../../../../data-access/event.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css',
})
export class ListEventsComponent implements OnInit {
  events: Event[] = [];
  fullEvents: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((data) => {
      this.events = data;
      this.fullEvents = [...data];
    });
  }

  filter() {
    const text = (document.getElementById('search') as HTMLInputElement).value;
    this.events = this.fullEvents.filter((e) =>
      e.title.toLowerCase().includes(text.toLowerCase())
    );
  }

  likeEvent(event: Event) {
    event.nbLikes++;
  }

  today() {
    return new Date();
  }
}
