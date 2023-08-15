# ? Build stage
FROM node:lts-slim as Builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy bun lockfile if exists 
COPY pnpm-lock.yaml ./

# Copy environment variables file
COPY .env ./

# Install pnpm globally
RUN npm install -g pnpm@latest

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Build app
RUN NODE_ENV="production" pnpm build

# ? Production Stage
FROM node:lts-slim as Runner

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy bun lockfile if exists 
COPY pnpm-lock.yaml ./

# Copy environment variables file
COPY .env ./

# Install pnpm globally
RUN npm install -g pnpm@latest

# Install dependencies
RUN pnpm install --production

# Copy source code
COPY . .

# Copy builded app from builder stage
COPY --from=Builder /app/.next ./.next

# Expose port
EXPOSE 3000

# Run app 
CMD ["pnpm", "start"]

