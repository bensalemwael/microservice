package tn.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.example.entities.Category;
import tn.example.repositories.CategoryRepository;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    private CategoryRepository categoryRepository ;

    @Override
    public Category add(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category update(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public void delete(long id) {
        categoryRepository.deleteById(id);
    }

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Category findById(Long id) {
        return categoryRepository.findById(id).orElse(null);
    }
}
