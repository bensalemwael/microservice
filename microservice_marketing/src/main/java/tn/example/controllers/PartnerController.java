package tn.example.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Partner;
import tn.example.services.PartnerService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping("/partners")
public class PartnerController {
    @Autowired
    PartnerService partnerService ;

    @GetMapping("/")
    public List<Partner> getPartners() {
        return partnerService.findAll() ;
    }

    @GetMapping("/{partner_id}")
    public Partner getPartnerById(@PathVariable("partner_id") Long partnerId) {
        return partnerService.findById(partnerId) ;
    }

    @PostMapping("/")
    @ResponseBody
    public Partner addPartner(@RequestBody Partner partner) {
        return partnerService.add(partner);
    }

    @DeleteMapping("/{partner_id}")
    @ResponseBody
    public void removePartner(@PathVariable("partner_id") Long partnerId) {
        partnerService.delete(partnerId);
    }

    @PutMapping("/")
    @ResponseBody
    public Partner updatePartner(@RequestBody Partner partner) {
        return partnerService.update(partner) ;
    }
}
