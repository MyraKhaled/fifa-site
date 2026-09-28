import React from 'react';

function Rankings() {

  const rankings = [
    { rank: 1, name: 'Ronaldinho', country: '🇧🇷', rating: 97 },
    { rank: 2, name: 'Lionel Messi', country: '🇦🇷', rating: 96 },
    { rank: 3, name: 'Cristiano Ronaldo', country: '🇵🇹', rating: 96 },
    { rank: 4, name: 'Kylian Mbappé', country: '🇫🇷', rating: 95 },
    { rank: 5, name: 'Neymar', country: '🇧🇷', rating: 95 }
  ];

  return (
    <section className="ranking-section">

      <div className="section-heading">
        <span>GLOBAL RANKING</span>
        <h2>WORLD RANKINGS</h2>
        <p>The highest rated players on the planet.</p>
      </div>

      <div className="ranking-list">

        {rankings.map((player) => (

          <div className="ranking-row" key={player.rank}>

            <div className="rank-number">
              {String(player.rank).padStart(2, '0')}
            </div>

            <div className="rank-country">
              {player.country}
            </div>

            <div className="rank-name">
              {player.name}
            </div>

            <div className="rank-rating">
              {player.rating}
            </div>

            <div className="rank-arrow">
              →
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Rankings;