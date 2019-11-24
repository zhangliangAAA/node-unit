const Hapi = require('@hapi/hapi');

// const init = async () => {
//     const server = Hapi.server({
//         port: 3000,
//         host: 'localhost'
//     });
//     server.route({
//         method: 'GET',
//         path: '/',
//         handler: (request, h) => {
//           return 'Hello World!';
//         }
//     });
//     await server.start();
//     console.log('Server running on %s', server.info.uri);
//     return server;
// };

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});
server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Hello World!';
  }
});

const start = async () =>{
  server.start();
  console.log('Server running on %s', server.info.uri);
}

start()

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

// init();
module.exports = server