FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# cp files to app
COPY ./package.json ./

# Install dependencies
RUN npm install

# cp files to app
COPY ./app.js ./

# Command at run image
CMD ["node", "app.js"]