'use strict'

const fastify = require('fastify')

const build  = function (opts = {}) {

  const app = fastify(opts)
  app.get('/', async (req, rep) => {
    return { hello: 'world' }
  })

  return app

}

module.exports = build
