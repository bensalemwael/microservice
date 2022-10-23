FROM openjdk:11
EXPOSE 8082
ADD /target/service-product.jar service-product.jar
ENTRYPOINT ["java", "-jar", "/service-product.jar"]