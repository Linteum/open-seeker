'use strict'

const tap = require('tap')
const build = require('../app')

tap.test('GET `/` route', t => {
    t.plan(4)

    const fastify = build()

    t.teardown(() => fastify.close())

    fastify.inject({
        method:'GET',
        url:'/'
    }, (err, res) => {
        t.error(err)
        t.equal(res.statusCode, 200)
        t.equal(res.headers['content-type'], 'application/json; charset=utf-8')
        t.same(res.json(), {hello: 'world'})
    })
})



