FROM node:20-alpine

# Create app directory inside container
WORKDIR /usr/src/app

# Install dependencies (only prod deps)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
