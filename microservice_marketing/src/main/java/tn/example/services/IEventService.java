package tn.example.services;

import tn.example.entities.Event;

import java.util.List;

public interface IEventService {

    Event add(Event event);
    Event update(Event event);
    void delete(long id);
    List<Event> findAll();
    Event findById(Long id);

}
