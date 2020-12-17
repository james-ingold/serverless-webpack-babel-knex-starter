'use strict'
import { getAll } from './queries/example-games'

module.exports.hello = async (event) => {
  console.log(event)
  const games = await getAll()
  return {
    statusCode: 200,
    body: games
  }
}
