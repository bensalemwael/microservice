package com.javainuse.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;

@Configuration

public class SpringCloudConfig {

    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        return builder.routes()

//Microservice auth
                .route(r -> r.path("/users/**")
                        .uri("http://auth:8085/")
                        .id("userModule"))
                .route(r -> r.path("/auth/**")
                        .uri("http://auth:8085/")
                        .id("authModule"))
//
////Microservice rh
                .route(r -> r.path("/absences/**")
                        .uri("http://rh:8081/")
                        .id("absenceModule"))
                .route(r -> r.path("/departments/**")
                        .uri("http://rh:8081/")
                        .id("departmentModule"))

//Micro-service product
                .route(r -> r.path("/products/**")
                        .uri("http://product:8082/")
                        .id("productModule"))
                .route(r -> r.path("/categories/**")
                        .uri("http://product:8082/")
                        .id("categoryModule"))

//Micro-service-vendor
                .route(r -> r.path("/materials/**")
                        .uri("http://vendor:8087/")
                        .id("materialModule"))
                .route(r -> r.path("/vendors/**")
                        .uri("http://vendor:8087/")
                        .id("vendorModule"))

//Microservice marketing
                .route(r -> r.path("/events/**")
                        .uri("http://marketing:8083/")
                        .id("eventModule"))
                .route(r -> r.path("/partners/**")
                        .uri("http://marketing:8083/")
                        .id("partnerModule"))

//Microservice marketing
                .route(r -> r.path("/cars/**")
                        .uri("http://car:8089/")
                        .id("carsModule"))
                .route(r -> r.path("/insurances/**")
                        .uri("http://car:8089/")
                        .id("insuranceModule"))

//Microservice facture
                .route(r -> r.path("/factures/**")
                        .uri("http://facture:3000/")
                        .id("factureModule"))
                .build();
    }

}