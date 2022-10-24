FROM openjdk:11
EXPOSE 8085
ADD /target/service-auth.jar service-auth.jar
ENTRYPOINT ["java", "-jar", "/service-auth.jar"]