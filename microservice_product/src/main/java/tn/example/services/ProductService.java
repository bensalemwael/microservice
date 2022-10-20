package tn.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.example.entities.Category;
import tn.example.entities.Product;
import tn.example.repositories.CategoryRepository;
import tn.example.repositories.ProductRepository;

import java.util.ArrayList;
import java.util.List;

@Service

public class ProductService implements IProductService {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Override
    public Product add(Product product,long categoryId) {
        Category category = categoryRepository.findById(categoryId).orElse(null);
        product.setCategory(category);
        category.getProducts().add(product) ;
        return productRepository.save(product);
    }

    @Override
    public Product update(Product product, Long categoryId) {
        Category category = categoryRepository.findById(categoryId).orElse(null);
        product.setCategory(category);
        return productRepository.save(product);
    }

    @Override
    public void delete(long id) {
        productRepository.deleteById(id);
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public List<Product> getProductByCategory(String nameCategory) {
        List<Product> products =productRepository.findAll();
        List<Product> filtredProducts = new ArrayList<>() ;
        for (Product product : products) {
            if(product.getCategory().getName().equals(nameCategory)){
                filtredProducts.add(product);
            }
        }
        return filtredProducts;
    }



}
