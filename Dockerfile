# Use node:latest as base image
FROM node:latest AS build

# Set working directory
WORKDIR /build

# Copy package.json and package-lock.json
COPY package.json package.json
COPY package-lock.json package-lock.json

# Install dependencies
RUN npm install --silent

# Copy source code
COPY . .

# Build production version
RUN npm run build

# Use nginx:alpine as base image for production
FROM nginx:alpine

# Copy build files to nginx html folder
COPY --from=build /build/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80