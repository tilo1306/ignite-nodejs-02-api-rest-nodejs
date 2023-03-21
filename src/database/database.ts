import { knex as knexDb } from 'knex'

export const knex = knexDb({
  client: 'sqlite3',
  connection: {
    filename: './tmp/db',
  },
})
