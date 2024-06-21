### Use an official Eclipse Temurin JDK image as a parent image
##FROM eclipse-temurin:17-jdk-alpine
##
### Create a volume to store temporary files
##VOLUME /tmp
##
### Copy the built JAR file to the container
##COPY target/*.jar app.jar
##
### Expose the port the app runs on
##EXPOSE 8082
##
### Run the application
##ENTRYPOINT ["java", "-jar", "/app.jar"]
#
## Use an official Eclipse Temurin JDK image as a parent image
#FROM eclipse-temurin:17-jdk-alpine
#
## Create a volume to store temporary files
#VOLUME /tmp
#
## Copy the built JAR file to the container
#COPY target/*.jar app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]
#EXPOSE 8080
# Use a multi-stage build to first build the JAR file
# Use a multi-stage build to first build the JAR file
# First stage: build the JAR file with Maven
# First stage: build the JAR file with Maven
# First stage: build the JAR file with Maven and OpenJDK 17
FROM maven:3.8.4-openjdk-17 AS builder

# Set the working directory
WORKDIR /app

# Copy the pom.xml and source code
COPY pom.xml .
COPY src ./src

# Package the application to generate the JAR file
RUN mvn clean package -DskipTests

# Second stage: run the application with OpenJDK 17
FROM eclipse-temurin:17-jdk-alpine

# Set the working directory
WORKDIR /app

# Copy the JAR file from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Expose the application port
EXPOSE 8082

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]


