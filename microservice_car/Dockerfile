FROM openjdk:11
EXPOSE 8089
ADD /target/service-car.jar service-car.jar
ENTRYPOINT ["java", "-jar", "/service-car.jar"]