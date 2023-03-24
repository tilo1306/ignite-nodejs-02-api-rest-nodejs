import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'
const server = fastify()

server.register(cookie)

server.register(transactionsRoutes, {
  prefix: 'transactions',
})

server.listen({ port: env.PORT }).then(() => {
  console.log('HTTP Server Running!')
})
