package tn.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.example.entities.Material;
import tn.example.entities.Vendor;
import tn.example.repositories.MaterialRepository;
import tn.example.repositories.VendorRepository;

import java.util.List;

@Service
public class MaterialService implements IMaterialService {

    @Autowired
    private MaterialRepository materialRepository ;
    @Autowired
    private VendorRepository vendorRepository ;

    @Override
    public Material add(Material material,long VendorId) {
        Vendor vendor=vendorRepository.findById(VendorId).orElse(null);
        material.setVendor(vendor);
        vendor.getMaterials().add(material);
        vendorRepository.save(vendor);
        return materialRepository.save(material);
    }

    @Override
    public Material update(Material material) {
        return materialRepository.save(material);
    }

    @Override
    public void delete(long id) {
        materialRepository.deleteById(id);
    }

    @Override
    public List<Material> findAll() {
        return materialRepository.findAll();
    }

    @Override
    public Material findById(Long id) {
        return materialRepository.findById(id).orElse(null);
    }

    @Override
    public void removeVendor(long vendorId,long materialId) {
        Vendor vendor = vendorRepository.findById(vendorId).orElse(null) ;
        Material material = materialRepository.findById(materialId).orElse(null) ;
        vendor.getMaterials().remove(material);
        material.setVendor(null);
        materialRepository.save(material);
        vendorRepository.save(vendor) ;
    }

    @Override
    public void addVendor(long vendorId, long materialId) {
        Vendor vendor = vendorRepository.findById(vendorId).orElse(null) ;
        Material material = materialRepository.findById(materialId).orElse(null) ;
        vendor.getMaterials().add(material);
        material.setVendor(vendor);
        materialRepository.save(material);
        vendorRepository.save(vendor) ;
    }
}
