import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database/database'

const server = fastify()

server.get('/hello', async () => {
  const transacion = await knex('sqlite_schema')
    .insert({
      id: crypto.randomUUID(),
      amount: 1000,
    })
    .returning('*')

  return transacion
})

server.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server Running!')
})
