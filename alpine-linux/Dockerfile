FROM alpine:3.10
# Updates the alpine image to the latest version and install node and npm
RUN apk add --update nodejs npm
# Add a user called node to linux
RUN addgroup -S node && adduser -S node -G node
USER node

RUN mkdir /home/node/code
WORKDIR /home/node/code 

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci
COPY --chown=node:node . .

CMD ["node", "index.js"]
