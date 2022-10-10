package tn.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.example.entities.Partner;
import tn.example.repositories.PartnerRepository;

import java.util.List;

@Service
public class PartnerService implements IPartnerService {

    @Autowired
    private PartnerRepository partnerRepository ;

    @Override
    public Partner add(Partner partner) {
        return partnerRepository.save(partner);
    }

    @Override
    public Partner update(Partner partner) {
        return partnerRepository.save(partner);
    }

    @Override
    public void delete(long id) {
        partnerRepository.deleteById(id);
    }

    @Override
    public List<Partner> findAll() {
        return partnerRepository.findAll();
    }

    @Override
    public Partner findById(Long id) {
        return partnerRepository.findById(id).orElse(null);
    }
}
