package tn.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.example.entities.Vendor;
import tn.example.repositories.VendorRepository;

import java.util.List;
@Service
public class VendorService implements IVendorService{

    @Autowired
    VendorRepository vendorRepository;

    @Override
    public Vendor add(Vendor vendor) {
        return vendorRepository.save(vendor);
    }

    @Override
    public Vendor update(Vendor vendor) {
        return vendorRepository.save(vendor);
    }

    @Override
    public void delete(long id) {
        vendorRepository.deleteById(id);
    }

    @Override
    public List<Vendor> findAll() {
        return vendorRepository.findAll();
    }

    @Override
    public Vendor findById(Long id) {
        return vendorRepository.findById(id).orElse(null);
    }
}
