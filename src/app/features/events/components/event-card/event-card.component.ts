import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../../../model/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent {
  @Input() event!: Event;

  @Output() requested = new EventEmitter<any>();
  likeEvent(event: Event) {
    this.requested.emit(event);
  }
  today() {
    return new Date();
  }
}
