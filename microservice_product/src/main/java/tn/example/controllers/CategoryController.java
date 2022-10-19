package tn.example.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.example.entities.Category;
import tn.example.services.CategoryService;

import java.util.List;


@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    CategoryService categoryService ;

    @GetMapping("/")
    public List<Category> getCategories() {
        return categoryService.findAll() ;
    }

    @GetMapping("/{category_id}")
    public Category getCategoryById(@PathVariable("category_id") Long categoryId) {
        return categoryService.findById(categoryId) ;
    }

    @PostMapping("/")
    @ResponseBody
    public Category addCategory(@RequestBody Category category) {
        return categoryService.add(category);
    }

    @DeleteMapping("/{category_id}")
    @ResponseBody
    public void removeCategory(@PathVariable("category_id") Long categoryId) {
        categoryService.delete(categoryId);
    }

    @PutMapping("/")
    @ResponseBody
    public Category updateCategory(@RequestBody Category category) {
        return categoryService.update(category) ;
    }
}
