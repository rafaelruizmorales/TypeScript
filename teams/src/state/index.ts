import {combineReducers, createStore} from 'redux'
import {initialApplicationState} from '../initial-state'
import {playersReducer} from './players/reducer'
import {teamsReducer} from './teams/reducer'

const rootReducer = combineReducers({
  players: playersReducer,
  teams: teamsReducer
})

export type State = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  initialApplicationState as any,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
