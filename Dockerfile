# ? Build stage
FROM oven/bun:latest as Builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy bun lockfile if exists 
COPY bun.lockb ./

# Copy environment variables file
COPY .env ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Build app
RUN NODE_ENV="production" bun run build

# ? Production Stage
FROM oven/bun:latest as Runner

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy environment variables file
COPY .env ./

# Copy bun lockfile if exists 
COPY bun.lockb ./

# Install dependencies
RUN bun install --production

# Copy source code
COPY . .

# Copy builded app from builder stage
COPY --from=Builder /app/.next ./.next

# Expose port
EXPOSE 3000

# Run app 
CMD ["bun", "run", "start"]

