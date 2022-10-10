package tn.example.services;

import tn.example.entities.Vendor;

import java.util.List;

public interface IVendorService {
    Vendor add(Vendor vendor) ;
    Vendor update(Vendor vendor);
    void delete(long id);
    List<Vendor> findAll();
    Vendor findById(Long id);
}
