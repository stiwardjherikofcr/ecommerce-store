# Create Dockerfile for nodejs, express, and mongodb
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Environment variables
ENV PORT=4000

# Expose variable port
EXPOSE $PORT

# Run the app with node
CMD [ "npm", "start" ]