'use strict'

const fastify = require('fastify')
const browsing = require('./plugins/browsing')



const build  = function (opts = {}) {

  const app = fastify(opts)
  app.get('/', async (req, rep) => {

    const subjects = await browsing()

    return { hello: subjects}
  })

  return app

}

module.exports = build
