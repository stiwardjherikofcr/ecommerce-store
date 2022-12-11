# Create Dockerfile for nodejs, express, and mongodb
FROM node:latest

# Create new directory
RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app

# Copy package.json to app directory
COPY package.json /usr/src/app

# Install dependencies
RUN npm install

# Bundle app source to app directory
COPY . /usr/src/app

# Environment variables
ENV PORT=3000

# Expose variable port
EXPOSE $PORT

# Run the app with node
CMD [ "npm", "start" ]