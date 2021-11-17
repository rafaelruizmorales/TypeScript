import {AnyAction} from 'redux'

export interface Player {
  name: string
  team: string
  nationalTeam: string
  shirtNumber: string
  playerId: string
}

export interface PlayersState {
  playerData: Player[]
  favoritePlayer?: string
}

const initialState = {
  playerData: []
}

// The candidate may also create a custom type for the actions, rather than using AnyAction
export const playersReducer = (state: PlayersState = initialState, action: AnyAction): PlayersState => {
  switch (action.type) {
    case 'players/add': return {
      ...state,
      playerData: [
        ...state.playerData,
        {
          ...action.payload
        }
      ]
    }
    case 'players/remove': return {
      ...state,
      playerData: state.playerData.filter(player => player.playerId === action.payload.playerId)
    }
    case 'players/favorite': return {
      ...state,
      favoritePlayer: action.payload.playerId
    }
    default: return state
  }
}
