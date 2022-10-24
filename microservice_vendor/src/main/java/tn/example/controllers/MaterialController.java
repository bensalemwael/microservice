package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Material;
import tn.example.services.MaterialService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping("/materials")
public class MaterialController {
    @Autowired
    MaterialService materialService;

    @GetMapping("/")
    public List<Material> getMaterials() {
        return  materialService.findAll() ;
    }

    @GetMapping("/{material_id}")
    public Material getMaterialById(@PathVariable("material_id") Long materialId) {
        return  materialService.findById(materialId) ;

    }

    @PostMapping("/{vendor_id}")
    @ResponseBody
    public Material addMaterial(@PathVariable("vendor_id") Long vendorId , @RequestBody Material material) {
        return materialService.add(material,vendorId);
    }

    @DeleteMapping("/{material_id}")
    @ResponseBody
    public void removeMaterial(@PathVariable("material_id") Long materialId) {
        materialService.delete(materialId);
    }

    @PutMapping("/")
    @ResponseBody
    public Material updateMaterial(@RequestBody Material material) {
        return materialService.update(material) ;
    }

    @PutMapping("/remove_vendor/{vendor_id}/{material_id}")
    @ResponseBody
    public void removeVendor(@PathVariable("vendor_id") Long vendorId,@PathVariable("material_id") Long materialId) {
         materialService.removeVendor(vendorId,materialId); ;
    }

    @PutMapping("/add_vendor/{vendor_id}/{material_id}")
    @ResponseBody
    public void addVendor(@PathVariable("vendor_id") Long vendorId,@PathVariable("material_id") Long materialId) {
        materialService.addVendor(vendorId,materialId); ;
    }




}
