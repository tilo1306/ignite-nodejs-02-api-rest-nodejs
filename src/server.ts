import fastify from 'fastify'
import { knex } from './database/database'

const server = fastify()

server.get('/hello', async () => {
  const table = await knex('sqlite_schema').select('*')

  return table
})

server.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server Running!')
})
