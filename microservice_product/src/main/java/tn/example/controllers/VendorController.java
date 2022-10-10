package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Vendor;
import tn.example.services.VendorService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping("/vendors")
public class VendorController {

    @Autowired
    private VendorService vendorService;

    @GetMapping("/")
    public List<Vendor> getVendors() {
        return vendorService.findAll() ;
    }

    @GetMapping("/{vendor_id}")
    public Vendor getVendorById(@PathVariable("vendor_id") Long vendorId) {
        return vendorService.findById(vendorId) ;
    }

    @PostMapping("/")
    @ResponseBody
    public Vendor addVendor(@RequestBody Vendor vendor) {
        return vendorService.add(vendor);
    }

    @DeleteMapping("/{vendor_id}")
    @ResponseBody
    public void removeVendor(@PathVariable("vendor_id") Long vendorId) {
        vendorService.delete(vendorId);
    }

    @PutMapping("/")
    @ResponseBody
    public Vendor updateVendor(@RequestBody Vendor vendor) {
        return vendorService.update(vendor) ;
    }


}
