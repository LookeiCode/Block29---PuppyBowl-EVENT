import { useState, useEffect } from 'react'




export default function AllPlayers() {


  const [players, setPlayers] = useState([])

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-pt-sf/players"
        );
        const result = await response.json();
        console.log(result);
        setPlayers(result.data.players);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers()
  }, [])

  const renderPlayers = (player) => {
    return (
      <div>
        {player.name}
      </div>
    )
  }

  return (
    <div className="Players">
      {players.map((player) => (

        <div key={player.id} className="PCard">
          <img src={player.imageUrl} alt={player.name} />

          <div className="PDetails">

            <h1>{player.name}</h1>
            <h2>{player.breed}</h2>
            <h2>{player.status}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}