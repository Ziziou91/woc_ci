FROM node:18

# Set the working directory
WORKDIR /my-app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the rest of the application files
COPY . .

# Install dependencies
RUN npm ci --unsafe-perm


# Expose the application port (change as needed)
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]