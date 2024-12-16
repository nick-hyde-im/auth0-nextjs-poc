# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the monorepo package.json and lerna.json
COPY package.json lerna.json ./

# Copy the package.json of the auth service
COPY services/auth/package.json services/auth/

# Copy the package.json of the auth0-lib package service
COPY packages/auth0-lib/package.json packages/auth0-lib/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["/bin/sh", "/scripts/start.sh", "--service", "auth", "--enable-package-watch", "false"]