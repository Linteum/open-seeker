// Require the framework and instantiate it
const app = require('fastify')({
    logger: true
})

// Declare a route
app.get('/', function (req, reply) {
    reply.send({ hello: 'world' })
})

// Run the server!
app.listen(3000, (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})