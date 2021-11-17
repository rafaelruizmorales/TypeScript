import { nanoid } from 'nanoid'

export const addPlayer = (name, team, shirtNumber, nationalTeam) => ({
  type: 'players/add',
  payload: {
    name,
    team,
    shirtNumber,
    nationalTeam,
    playerId: nanoid()
  }
})

export const removePlayer = (playerId) => ({
  type: 'players/remove',
  payload: {
    playerId
  },
})

export const setFavoritePlayer = (playerId) => ({
  type: 'players/favorite',
  payload: {
    playerId
  },
})
