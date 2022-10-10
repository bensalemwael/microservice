package tn.example.services;

import tn.example.entities.Product;

import java.util.List;

public interface IProductService {

    Product add(Product product,long categoryId);
    Product update(Product product);
    void delete(long id);
    List<Product> findAll();
    Product findById(Long id);

    List<Product>getProductByCategory(String nameCategory);
}
