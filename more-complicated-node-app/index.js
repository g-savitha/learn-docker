// more-or-less the example code from the hapi-pino repo
const hapi = require('@hapi/hapi');

async function start() {
  const server = hapi.server({
    host: '0.0.0.0', //if you put this as localhost, which is semantically correct. But localhost wont allow you to escape from the container. Binding is necessary
    port: process.env.PORT || 3000,
  });

  server.route({
    method: 'GET',
    path: '/',
    handler() {
      return { success: true };
    },
  });

  await server.register({
    plugin: require('hapi-pino'),
    options: {
      prettyPrint: true,
    },
  });

  await server.start();

  return server;
}

start().catch((err) => {
  console.log(err);
  process.exit(1);
});
