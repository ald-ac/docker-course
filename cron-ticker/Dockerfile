# FROM --platform=linux/amd64 node:19.2-alpine3.16
# FROM node:19.2-alpine3.16
FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# cp files to app
COPY ./package.json ./

# Install dependencies
RUN npm install

# cp files to app
COPY . .

# Testing
RUN npm run test

# Remove dev/test dependencies
RUN rm -rf tests && rm -rf node_modules

# Production dependencies
RUN npm install --prod

# Command at run image
CMD ["node", "app.js"]