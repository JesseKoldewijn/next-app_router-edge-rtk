# ? Build stage
FROM node:lts-slim as Builder

# Get environment variable for app port with fallback to 3000
ARG PORT=3000
ARG VERCEL_URL="http://localhost:3000"
ARG DATABASE_HOST="localhost"
ARG DATABASE_USERNAME="root"
ARG DATABASE_PASSWORD="root"

# Set environment variable for app port
ENV PORT=$PORT
ENV VERCEL_URL=$VERCEL_URL
ENV DATABASE_HOST=$DATABASE_HOST
ENV DATABASE_USERNAME=$DATABASE_USERNAME
ENV DATABASE_PASSWORD=$DATABASE_PASSWORD

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy bun lockfile if exists 
COPY pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm@latest

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Build app
RUN pnpm build

# ? Production Stage
FROM node:lts-slim as Runner

# Get environment variable for app port with fallback to 3000
ARG PORT=3000
ARG NODE_ENV=production

# Set environment variable for app port
ENV PORT=$PORT
ENV NODE_ENV=$NODE_ENV

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy bun lockfile if exists 
COPY pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm@latest

# Install dependencies
RUN pnpm install --production

# Copy source code
COPY . .

# Copy builded app from builder stage
COPY --from=Builder /app/.next ./.next

# Expose port based on environment variable or ARG
EXPOSE $PORT

# Run app 
CMD ["pnpm", "start:container"]

