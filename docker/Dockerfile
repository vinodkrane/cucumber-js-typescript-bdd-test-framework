# Using a lightweight Node image
FROM node:21-alpine AS builder

# Set working directory
WORKDIR /app

# Setting this environment variable disables certificate verification for all Node.js processes.
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

# Install app to system
COPY ./features features/
COPY ./config config/
COPY ./tsconfig.json ./
COPY ./cucumber.js ./
COPY ./package.json ./
COPY ./tsconfig.json ./

# Build the project
RUN npm init -y
RUN npm install

# Run tests
CMD [ "npm", "run", "test" ]