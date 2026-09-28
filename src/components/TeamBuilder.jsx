import React from 'react';

function TeamBuilder() {

  return (
    <section className="builder-section">

      <div className="section-heading">
        <span>ULTIMATE TEAM</span>
        <h2>BUILD YOUR XI</h2>
        <p>Create your dream team.</p>
      </div>

      <div className="football-pitch">

        <div className="player-slot goalkeeper">
          <span>GK</span>
          <strong>+</strong>
        </div>

        <div className="player-slot defender d1">
          <span>LB</span>
          <strong>+</strong>
        </div>

        <div className="player-slot defender d2">
          <span>CB</span>
          <strong>+</strong>
        </div>

        <div className="player-slot defender d3">
          <span>CB</span>
          <strong>+</strong>
        </div>

        <div className="player-slot defender d4">
          <span>RB</span>
          <strong>+</strong>
        </div>

        <div className="player-slot midfielder m1">
          <span>CM</span>
          <strong>+</strong>
        </div>

        <div className="player-slot midfielder m2">
          <span>CM</span>
          <strong>+</strong>
        </div>

        <div className="player-slot midfielder m3">
          <span>CAM</span>
          <strong>+</strong>
        </div>

        <div className="player-slot attacker a1">
          <span>LW</span>
          <strong>+</strong>
        </div>

        <div className="player-slot attacker a2">
          <span>ST</span>
          <strong>+</strong>
        </div>

        <div className="player-slot attacker a3">
          <span>RW</span>
          <strong>+</strong>
        </div>

      </div>

      <button className="builder-button">
        SAVE MY TEAM →
      </button>

    </section>
  );
}

export default TeamBuilder;