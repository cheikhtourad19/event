import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { AddEventComponent } from './components/add-event/add-event.component';
const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      { path: '', component: ListEventsComponent },
      { path: 'create', component: AddEventComponent },
      { path: ':id', component: EventDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
