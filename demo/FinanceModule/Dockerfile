FROM openjdk:11-jre-slim
WORKDIR /app
COPY target/*.jar app.jar

# Expose the port the app runs on
EXPOSE 8082

# Run the application
ENTRYPOINT ["java", "-jar", "/app.jar"]