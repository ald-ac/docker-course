FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# cp files to app
COPY ./app.js ./package.json ./

# Install dependencies
RUN npm install

# Command at run image
CMD ["node", "app.js"]