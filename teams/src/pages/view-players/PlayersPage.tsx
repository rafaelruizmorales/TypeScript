import * as React from 'react'
import {ChangeEventHandler, useState} from 'react'
import {useSelector} from 'react-redux'
import {Input} from 'reactstrap'
import {PageHeader} from '../../components/PageHeader'
import {State} from '../../state'

export const PlayersPage: React.FC = () => {
  const players = useSelector((state: State) => state.players.playerData)
  const [playerName, setPlayerName] = useState('')

  const filteredPlayers = players.filter(player => player.name.includes(playerName))

  const rows = filteredPlayers.map(player => (
    <tr>
      <th scope="row">{player.shirtNumber}</th>
      <td>{player.name}</td>
      <td>{player.team}</td>
      <td>{player.nationalTeam}</td>
    </tr>
  ))

  // The type here is not obvious - using any would be fine
  const handleNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setPlayerName(e.target.value)
  }

  return (
    <>
      <PageHeader title="Players" />
      <div className="p-3">
        <Input placeholder="Enter player name" value={playerName} onChange={handleNameChange} />
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
    </>
  )
}
