import { Component } from '@angular/core';
import { Event } from '../../../../model/event';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css',
})
export class ListEventsComponent {
  events: Event[] = [
    {
      id: 1,
      title: 'Angular Conference',
      description: 'A conference about Angular framework.',
      date: new Date('2024-09-15'),
      place: 'New York',
      price: 99.99,
      orginzerId: 1,
      imageUrl: '/images/people-taking-part-high-protocol-event.jpg',
      nbPlaces: 200,
      nbLikes: 150,
    },
    {
      id: 2,
      title: 'JavaScript Meetup',
      description: 'A meetup for JavaScript enthusiasts.',
      date: new Date('2026-10-20'),
      place: 'San Francisco',
      price: 0,
      orginzerId: 2,
      imageUrl: '/images/people-taking-part-high-protocol-event.jpg',
      nbPlaces: 100,
      nbLikes: 80,
    },
    {
      id: 3,
      title: 'Frontend Masters Workshop',
      description:
        'Hands-on workshop about modern frontend tooling and patterns.',
      date: new Date('2026-02-12'),
      place: 'Remote',
      price: 49.0,
      orginzerId: 3,
      imageUrl: '/images/people-taking-part-high-protocol-event.jpg',
      nbPlaces: 250,
      nbLikes: 210,
    },
    {
      id: 4,
      title: 'Design Systems Summit',
      description: 'Conference for design system maintainers and UI engineers.',
      date: new Date('2025-04-03'),
      place: 'Berlin',
      price: 199.0,
      orginzerId: 4,
      imageUrl: '/images/people-taking-part-high-protocol-event.jpg',
      nbPlaces: 300,
      nbLikes: 430,
    },
    {
      id: 5,
      title: 'Fullstack Hackathon',
      description: '48-hour hackathon focused on building fullstack projects.',
      date: new Date('2026-06-21'),
      place: 'Austin',
      price: 10.0,
      orginzerId: 5,
      imageUrl: '/images/people-taking-part-high-protocol-event.jpg',
      nbPlaces: 120,
      nbLikes: 95,
    },
    {
      id: 6,
      title: 'Reactive Programming Meetup',
      description: 'Talks and lightning sessions about reactive patterns.',
      date: new Date('2026-01-18'),
      place: 'London',
      price: 0,
      orginzerId: 6,
      imageUrl: '/images/people-taking-part-high-protocol-event.jpg',
      nbPlaces: 80,
      nbLikes: 60,
    },
    {
      id: 7,
      title: 'Cloud Native Day',
      description:
        'Sessions about cloud native architectures and best practices.',
      date: new Date('2026-09-10'),
      place: 'Tokyo',
      price: 149.0,
      orginzerId: 7,
      imageUrl: '/images/people-taking-part-high-protocol-event.jpg',
      nbPlaces: 400,
      nbLikes: 520,
    },
    {
      id: 8,
      title: 'UX Research Circle',
      description: 'Roundtable and workshops for UX researchers.',
      date: new Date('2025-03-08'),
      place: 'Paris',
      price: 35.0,
      orginzerId: 8,
      imageUrl: '/images/people-taking-part-high-protocol-event.jpg',
      nbPlaces: 60,
      nbLikes: 48,
    },
  ];
  fullEvents: Event[] = [...this.events];
  filter() {
    let text = document.getElementById('search') as HTMLInputElement;
    this.events = this.fullEvents;
    this.events = this.events.filter((events) =>
      events.title.toLowerCase().includes(text.value.toLowerCase())
    );
  }

  likeEvent(event: Event) {
    event.nbLikes++;
  }

  today() {
    return new Date();
  }
}
