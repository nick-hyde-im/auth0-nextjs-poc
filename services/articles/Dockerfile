# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the monorepo package.json and lerna.json
COPY package.json lerna.json ./

# Copy the package.json of the articles service
COPY services/articles/package.json services/articles/

# Copy the package.json of the service-components package
COPY packages/service-components/package.json packages/service-components/

# Install dependencies and bootstrap the monorepo
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["/bin/sh", "/scripts/start.sh", "--service", "articles"]
