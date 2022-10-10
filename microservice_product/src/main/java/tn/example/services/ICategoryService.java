package tn.example.services;

import tn.example.entities.Category;

import java.util.List;

public interface ICategoryService {
    Category add(Category category) ;
    Category update(Category category);
    void delete(long id);
    List<Category> findAll();
    Category findById(Long id);
}
