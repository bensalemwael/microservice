import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/Event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events:Event[] = []
  constructor(private eventService : EventService , private router: Router) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(res => {
      this.events = res ; 
    })
  }

  deleteEvent(event_id:number) {
    this.eventService.deleteEvent(event_id)
    this.events = this.events.filter(e => e.eventId != event_id)
  }

  updateEvent(event_id:number) {
    this.router.navigate(['edit_event/'+event_id])
  }




}
