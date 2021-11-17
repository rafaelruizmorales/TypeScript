import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
import {PlayersPage} from '../pages/view-players/PlayersPage'
import {ProfilePage} from '../pages/view-profile/ProfilePage'
import {TeamsPage} from '../pages/view-teams/TeamsPage'

export const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/teams">
        <TeamsPage />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/">
        <PlayersPage />
      </Route>
    </Switch>
  )
}
