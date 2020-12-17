const knex = require('./knex')

export async function getAll() {
  const res = await knex('matches')
    .select('*')
  return res
}
