FROM node

# Set the working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Command to run the application
CMD ["node", "main.js"]