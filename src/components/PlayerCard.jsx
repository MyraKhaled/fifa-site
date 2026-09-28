import Card from 'react-bootstrap/Card';

function PlayerCard({ players }) {
  return (
    <div className="parent">
      <h2>STAR PLAYERS</h2>
      <div className="players-grid">

        {players.map((player, i) => (
          <Card className="mycard" key={i}>

            <div className="card-top">

              <div className="rating">
                <span>{player.score}</span>
                <small>OVR</small>
              </div>

              <img
                src={player.equipe}
                alt={player.name}
                className="team-logo"
              />

            </div>

            <div className="player-photo">
              <Card.Img
                src={player.image}
                alt={player.name}
              />
            </div>

            <Card.Body>

              <Card.Title>
                {player.name}
              </Card.Title>

              <div className="position">
                FOOTBALL LEGEND
              </div>

              <div className="player-line"></div>

              <div className="stats">

                <div>
                  <strong>{player.stats.pac}</strong>
                  <span>PAC</span>
                </div>

                <div>
                  <strong>{player.stats.sho}</strong>
                  <span>SHO</span>
                </div>

                <div>
                  <strong>{player.stats.pas}</strong>
                  <span>PAS</span>
                </div>

                <div>
                  <strong>{player.stats.dri}</strong>
                  <span>DRI</span>
                </div>

                <div>
                  <strong>{player.stats.def}</strong>
                  <span>DEF</span>
                </div>

                <div>
                  <strong>{player.stats.phy}</strong>
                  <span>PHY</span>
                </div>

              </div>

            </Card.Body>

          </Card>
        ))}

      </div>
    </div>
  );
}

export default PlayerCard;