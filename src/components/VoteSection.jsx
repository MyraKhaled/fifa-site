import React, { useState } from 'react';

function VoteSection() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [voted, setVoted] = useState(false);

  const players = [
    {
      name: 'MESSI',
      rating: 96,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lionel_Messi_Argentina_v_Egypt_7_July_2026-316.jpg',
      votes: 42
    },
    {
      name: 'RONALDO',
      rating: 96,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cristiano_Ronaldo_2025_Cropped.jpg',
      votes: 35
    },
    {
      name: 'MBAPPÉ',
      rating: 95,
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kylian_Mbappe_France_v_Senegal_16_June_2026-269.jpg',
      votes: 23
    }
  ];

  const handleVote = () => {
    if (selectedPlayer !== null) {
      setVoted(true);
    }
  };

  return (
    <section className="vote-section">

      <div className="vote-heading">
        <span>FANS CHOICE</span>
        <h2>PLAYER OF THE WEEK</h2>
        <p>Choose your favorite player and cast your vote.</p>
      </div>

      <div className="vote-cards">

        {players.map((player, index) => (

          <div
            className={`vote-card ${
              selectedPlayer === index ? 'selected' : ''
            }`}
            key={player.name}
            onClick={() => !voted && setSelectedPlayer(index)}
          >

            <div className="vote-image">
              <img src={player.image} alt={player.name} />
            </div>

            <div className="vote-info">

              <span className="vote-rating">
                {player.rating}
              </span>

              <h3>{player.name}</h3>

              <div className="vote-result">
                <div
                  className="vote-bar"
                  style={{ width: `${player.votes}%` }}
                ></div>
              </div>

              <small>{player.votes}% OF VOTES</small>

            </div>

            {selectedPlayer === index && (
              <div className="selected-label">
                SELECTED ✓
              </div>
            )}

          </div>

        ))}

      </div>

      <button
        className="vote-button"
        onClick={handleVote}
        disabled={selectedPlayer === null || voted}
      >
        {voted ? 'VOTE SUBMITTED ✓' : 'CAST YOUR VOTE →'}
      </button>

      {voted && (
        <p className="vote-success">
          Thanks for voting! Your choice has been recorded.
        </p>
      )}

    </section>
  );
}

export default VoteSection;