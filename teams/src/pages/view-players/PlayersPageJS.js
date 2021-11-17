import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { Input } from 'reactstrap'
import {PageHeader} from '../../components/PageHeader'

export const PlayersPage = () => {

  const [playerName, setPlayername] = useState('')

  const players = useSelector((state) => state.players.playerData)
  const filteredPlayers = players.filter(player => player.name.includes(playerName))

  const rows = filteredPlayers.map(player => {
    return (
      <tr key={player.playerId}>
        <th scope="row">{player.shirtNumber}</th>
        <td>{player.name}</td>
        <td>{player.team}</td>
        <td>{player.nationalTeam}</td>
      </tr>
    )
  })

  const handleNameChange = (e) => {
    setPlayername(e.target.value);
  }

  return (
      <div className="p-3">
      <PageHeader title="Players" />
      <Input type="text" placeholder="Player's Name" onChange={handleNameChange} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Team</th>
            <th scope="col">National Team</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}
