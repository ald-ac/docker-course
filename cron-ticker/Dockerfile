# STAGE: deps - dev dependencies
FROM node:19.2-alpine3.16 as deps
WORKDIR /app
COPY ./package.json ./
RUN npm install

# STAGE: builder - test and build
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

# STAGE: runner - prod dependencies and run app
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY ./package.json ./
RUN npm install --prod
COPY app.js ./
COPY tasks/ ./tasks
CMD ["node", "app.js"]