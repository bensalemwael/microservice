package tn.example.services;

import tn.example.entities.Partner;

import java.util.List;

public interface IPartnerService {
    Partner add(Partner category) ;
    Partner update(Partner category);
    void delete(long id);
    List<Partner> findAll();
    Partner findById(Long id);
}
