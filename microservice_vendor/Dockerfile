FROM openjdk:11
EXPOSE 8087
ADD /target/service-vendor.jar service-vendor.jar
ENTRYPOINT ["java", "-jar", "/service-vendor.jar"]