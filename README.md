# microservice
microservices 

# Create network 
```html
docker network create example
```
# Run mysql container  
```html
docker run -d --net example --name ct-mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306  mysql:5.7 
```

# Create table on mysql container 
```html
mysql - u root -p <br />
root <br />
create database databasename ;
```

# add this line after closing tag Plugins inside pom.xml 
```html
<finalName>name</finalName>
```

# Update maven 
```html
mvn clean install -DskipTests
```

# Example docker file 
```html
FROM java:8 <br />
EXPOSE 8083 <br />
ADD /target/file_name.jar file_name.jar <br />
ENTRYPOINT ["java", "-jar", "/file_name.jar"] <br />
```

# create Image 
```html
docker build -t nameImage . <br />
docker run -d --net example --name container_name -p port:port -t nameImage <br />
```

# To connect a microservice to mysql change 
```html
spring.datasource.url=jdbc:mysql://localhost:3306/database_name?useLegacyDatetimeCode=false&serverTimezone=UTC  <br />
to  <br />
spring.datasource.url=jdbc:mysql://container_name:3306/database_name?useLegacyDatetimeCode=false&serverTimezone=UTC  <br />
```

