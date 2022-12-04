FROM node:12-stretch

USER node

WORKDIR /home/node/code

COPY --chown=node:node ./build-a-node-app/index.js index.js

CMD ["node", "index.js"]