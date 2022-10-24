package tn.example.services;

import tn.example.entities.Material;

import java.util.List;

public interface IMaterialService {
    Material add(Material material,long VendorId) ;
    Material update(Material material);
    void delete(long id);
    List<Material> findAll();
    Material findById(Long id);

    void removeVendor(long vendorId,long materialId);
    void addVendor(long vendorId,long materialId);

}
