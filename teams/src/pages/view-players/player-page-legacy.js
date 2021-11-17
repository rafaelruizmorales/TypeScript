export const PlayerPageLegacy = (players) => {
  const rows = players.map(player => {
    return `
      <tr>
        <th scope="row">${player.shirtNumber}</th>
        <td>${player.name}</td>
        <td>${player.team}</td>
        <td>${player.nationalTeam}</td>
      </tr>
    `
  })

  return `
    <div class="p-3">
      <h1 class="mb-2">Players</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Team</th>
            <th scope="col">National Team</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `
}
