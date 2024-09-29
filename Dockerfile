# Use official Node.js image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the code
COPY . .

# Build the frontend
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
