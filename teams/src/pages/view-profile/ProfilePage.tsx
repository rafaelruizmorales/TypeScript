import * as React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row} from 'reactstrap'
import {PageHeader} from '../../components/PageHeader'
import {setFavoritePlayer} from '../../state/players/actions'

export const ProfilePage: React.FC = () => {
  const [teamDropdownOpen, setTeamDropdownOpen] = React.useState(false)
  const [playerDropdownOpen, setPlayerDropdownOpen] = React.useState(false)
  const dispatch = useDispatch()

  const toggleTeam = () => setTeamDropdownOpen(!teamDropdownOpen)
  const togglePlayer = () => setPlayerDropdownOpen(!playerDropdownOpen)

  const players = useSelector((state: any) => state.players.playerData)
  const favoritePlayerId = useSelector((state: any) => state.players.favoritePlayer)

  const playerString = (player: any) => `${player.shirtNumber}. ${player.name} - ${player.team}`

  const selectPlayerItem = (player: any) => () => {
    dispatch(setFavoritePlayer(player.playerId))
  }

  const playerItems = players.map((player: any) => {
    return (
      <DropdownItem
        key={player.playerId}
        onClick={selectPlayerItem(player)}
      >
        {playerString(player)}
      </DropdownItem>
    )
  })

  const favoritePlayer = players.find((p: any) => p.playerId === favoritePlayerId)
  const playerDropdownValue = favoritePlayer ? playerString(favoritePlayer) : 'Select player...'

  return (
    <>
      <PageHeader title="Profile" />
      <Container>
        <Row className="mb-3">
          <Col xs={3}><h5>Favorite team</h5></Col>
          <Col>
            <Dropdown isOpen={teamDropdownOpen} toggle={toggleTeam}>
              <DropdownToggle caret>
                Select team...
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Team 1</DropdownItem>
                <DropdownItem>Team 2</DropdownItem>
                <DropdownItem>TODO...</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col xs={3}><h5>Favorite player</h5></Col>
          <Col>
            <Dropdown isOpen={playerDropdownOpen} toggle={togglePlayer}>
              <DropdownToggle caret>
                {playerDropdownValue}
              </DropdownToggle>
              <DropdownMenu>
                {playerItems}
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </>
  )
}
