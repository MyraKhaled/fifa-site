import React from 'react';

function LiveMatches() {
  return (
    <section className="live-section">

      <div className="section-heading">
        <span>LIVE ACTION</span>
        <h2>LIVE MATCHES</h2>
        <p>Follow the biggest games in real time.</p>
      </div>

      <div className="matches-container">

        <div className="match-card">

          <div className="match-top">
            <span className="live-badge">
              ● LIVE
            </span>

            <span>CHAMPIONS LEAGUE</span>
          </div>

          <div className="teams">

            <div className="team">
              <div className="team-logo-big">🇫🇷</div>
              <h3>FRANCE</h3>
            </div>

            <div className="score">
              <strong>2</strong>
              <span>-</span>
              <strong>1</strong>

              <small>78:32</small>
            </div>

            <div className="team">
              <div className="team-logo-big">🇧🇷</div>
              <h3>BRAZIL</h3>
            </div>

          </div>

          <div className="match-footer">
            <span>STADIUM • 48,000 FANS</span>
            <button>VIEW MATCH →</button>
          </div>

        </div>


        <div className="match-card">

          <div className="match-top">
            <span className="upcoming-badge">
              UPCOMING
            </span>

            <span>WORLD CUP</span>
          </div>

          <div className="teams">

            <div className="team">
              <div className="team-logo-big">🇦🇷</div>
              <h3>ARGENTINA</h3>
            </div>

            <div className="score upcoming">
              <strong>20:45</strong>
              <small>TODAY</small>
            </div>

            <div className="team">
              <div className="team-logo-big">🇪🇸</div>
              <h3>SPAIN</h3>
            </div>

          </div>

          <div className="match-footer">
            <span>STADIUM • 62,000 FANS</span>
            <button>MATCH DETAILS →</button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default LiveMatches;