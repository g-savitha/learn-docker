# build-stage
FROM node:12-stretch AS build
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

# runtime-stage
FROM alpine:3.10
# I dont need npm in prod, so remove i.for this app
RUN apk add --update nodejs
# Add a user called node to linux
RUN addgroup -S node && adduser -S node -G node
USER node

RUN mkdir /home/node/code
WORKDIR /home/node/code 

COPY --from=build --chown=node:node /build .

CMD ["node", "index.js"]
