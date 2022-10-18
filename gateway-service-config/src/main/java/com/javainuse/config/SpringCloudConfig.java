package com.javainuse.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringCloudConfig {

    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
        		
//Micro-service product
                .route(r -> r.path("/products/**")
                        .uri("http://localhost:8082/")
                        .id("productModule"))
                .route(r -> r.path("/categories/**")
                        .uri("http://localhost:8082/")
                        .id("categoryModule"))
                .route(r -> r.path("/materials/**")
                        .uri("http://localhost:8082/")
                        .id("materialModule"))
                .route(r -> r.path("/vendors/**")
                        .uri("http://localhost:8082/")
                        .id("vendorModule"))

//Microservice rh
                .route(r -> r.path("/absences/**")
                        .uri("http://localhost:8081/")
                        .id("absenceModule"))
                .route(r -> r.path("/departements/**")
                        .uri("http://localhost:8081/")
                        .id("departementModule"))
                .route(r -> r.path("/users/**")
                        .uri("http://localhost:8081/")
                        .id("userModule"))

//Microservice marketing
                .route(r -> r.path("/events/**")
                        .uri("http://localhost:8083/")
                        .id("eventModule"))
                .route(r -> r.path("/partners/**")
                        .uri("http://localhost:8083/")
                        .id("partnerModule"))
               .build();
    }

}