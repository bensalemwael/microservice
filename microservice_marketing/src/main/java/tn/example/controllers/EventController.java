package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Event;
import tn.example.services.EventService;

import java.util.List;


@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    EventService eventService ;

    @GetMapping("/")
    public List<Event> getEvents() {
        return eventService.findAll() ;
    }

    @GetMapping("/{event_id}")
    public Event getEventById(@PathVariable("event_id") Long eventId) {
        return eventService.findById(eventId) ;
    }

    @PostMapping("/")
    @ResponseBody
    public Event addEvent(@RequestBody Event event) {
        return eventService.add(event);
    }

    @DeleteMapping("/{event_id}")
    @ResponseBody
    public void removeEvent(@PathVariable("event_id") Long eventId) {
        eventService.delete(eventId);
    }

    @PutMapping("/")
    @ResponseBody
    public Event updateEvent(@RequestBody Event event) {
        return eventService.update(event) ;
    }


}
