import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../model/event';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventsUrl = 'app/data-access/events.json';

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl).pipe(
      map((events) =>
        events.map((e) => ({
          ...e,
          date: new Date(e.date),
        }))
      )
    );
  }

  getEventById(id: number): Observable<Event | undefined> {
    return this.getAllEvents().pipe(
      map((events) => events.find((e) => e.id === id))
    );
  }

  addEvents(event: Event): void {
    // Logic to add event (e.g., POST request to backend)
  }
}
