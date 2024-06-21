## Use an official Eclipse Temurin JDK image as a parent image
#FROM eclipse-temurin:17-jdk-alpine
#
## Create a volume to store temporary files
#VOLUME /tmp
#
## Copy the built JAR file to the container
#COPY target/*.jar app.jar
#
## Expose the port the app runs on
#EXPOSE 8082
#
## Run the application
#ENTRYPOINT ["java", "-jar", "/app.jar"]

# Use an official Eclipse Temurin JDK image as a parent image
FROM eclipse-temurin:17-jdk-alpine

# Create a volume to store temporary files
VOLUME /tmp

# Copy the built JAR file to the container
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080