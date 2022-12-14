package tn.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Product;
import tn.example.services.ProductService;

import java.util.List;


@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService ;

    @GetMapping("/")
    public List<Product> getProducts() {
        return productService.findAll() ;
    }

    @GetMapping("/{product_id}")
    public Product getProductById(@PathVariable("product_id") Long productId) {
        return productService.findById(productId) ;
    }

    @PostMapping("/{category_id}")
    @ResponseBody
    public Product addProduct(@RequestBody Product product,@PathVariable("category_id") Long categoryId) {
        return productService.add(product,categoryId);
    }

    @DeleteMapping("/{product_id}")
    @ResponseBody
    public void removeProduct(@PathVariable("product_id") Long productId) {
        productService.delete(productId);
    }

    @PutMapping("/{category_id}")
    @ResponseBody
    public Product updateProduct(@RequestBody Product product,@PathVariable("category_id") Long categoryId) {

        return productService.update(product,categoryId) ;
    }

    @GetMapping("/category/{nameCategory}")
    @ResponseBody
    public List<Product> getProductByCategory(@PathVariable("nameCategory") String nameCategory) {
        return productService.getProductByCategory(nameCategory);
    }

}
