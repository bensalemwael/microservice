import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url = environment.base_URL + "events/"

  constructor(private http: HttpClient) { }

  getEvents() : Observable<Event[]> {
    return this.http.get<Event[]>(this.url)
  }

  addEvent(event:Event) {
    return this.http.post(this.url,event)
  }

  deleteEvent(event_id:number) {
    return this.http.delete(this.url+event_id).subscribe()
  }
  
  getEventById(event_id:number): Observable<Event> {
    return this.http.get<Event>(this.url+event_id)
  }
  updateEvent(event:Event) {
    return this.http.put(this.url,event)
  }


}
