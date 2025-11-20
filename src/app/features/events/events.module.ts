import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventsComponent,
    EventDetailComponent,
    EventCardComponent,
    SearchBarComponent,
    ListEventsComponent,
    AddEventComponent,
  ],
  imports: [CommonModule, EventsRoutingModule, ReactiveFormsModule],
})
export class EventsModule {}
