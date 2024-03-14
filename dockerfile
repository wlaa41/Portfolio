# Use Ubuntu 22.04 as the base image
FROM ubuntu:22.04

# Avoid prompts from apt during installation
ARG DEBIAN_FRONTEND=noninteractive

# Install Node.js (including npm) and other necessary packages
# NodeSource Node.js binary distributions repository might provide more up-to-date versions
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Install application dependencies
RUN apt-get update && apt-get install -y git
RUN apt-get update && npm install react@16 react-dom@16
RUN apt-get update && npm install react-player

RUN npm install
RUN npm install --save-dev sass

# Copy the local application files to the container
COPY . /app


# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
