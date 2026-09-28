import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <Carousel className="hero-carousel" fade interval={4000}>
      <Carousel.Item>
        <div
          className="hero-header"
          style={{ backgroundImage: "url('./public/football1.jpg')" }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-small-title">
              ESTABLISHED 2010 · CHAMPIONS LEAGUE
            </div>

            <h1>
              PLAY HARD.
              <br />
              <span>WIN TOGETHER.</span>
            </h1>

            <p>
              VictoryClub is where champions are forged. Train with elite
              coaches, compete every weekend, and wear the green & gold with pride.
            </p>

            <div className="hero-buttons">
              <button className="join-btn">JOIN THE CLUB →</button>
              <button className="matches-btn">VIEW MATCHES</button>
            </div>

            <div className="hero-features">
              <div>● PRO LICENSED COACHES</div>
              <div>● WEEKLY MATCHES</div>
              <div>● YOUTH PATHWAY</div>
            </div>
          </div>

          <HeroStats />
        </div>
      </Carousel.Item>

      {/* IMAGE 2 */}
      <Carousel.Item>
        <div
          className="hero-header"
          style={{ backgroundImage: "url('./public/football2.jpg')" }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-small-title">
              ESTABLISHED 2010 · CHAMPIONS LEAGUE
            </div>

            <h1>
              PLAY HARD.
              <br />
              <span>WIN TOGETHER.</span>
            </h1>

            <p>
              VictoryClub is where champions are forged. Train with elite
              coaches, compete every weekend, and wear the green & gold with pride.
            </p>

            <div className="hero-buttons">
              <button className="join-btn">JOIN THE CLUB →</button>
              <button className="matches-btn">VIEW MATCHES</button>
            </div>

            <div className="hero-features">
              <div>● PRO LICENSED COACHES</div>
              <div>● WEEKLY MATCHES</div>
              <div>● YOUTH PATHWAY</div>
            </div>
          </div>

          <HeroStats />
        </div>
      </Carousel.Item>

      {/* IMAGE 3 */}
      <Carousel.Item>
        <div
          className="hero-header"
          style={{ backgroundImage: "url('./public/football3.jpg')" }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-small-title">
              ESTABLISHED 2010 · CHAMPIONS LEAGUE
            </div>

            <h1>
              PLAY HARD.
              <br />
              <span>WIN TOGETHER.</span>
            </h1>

            <p>
              VictoryClub is where champions are forged. Train with elite
              coaches, compete every weekend, and wear the green & gold with pride.
            </p>

            <div className="hero-buttons">
              <button className="join-btn">JOIN THE CLUB →</button>
              <button className="matches-btn">VIEW MATCHES</button>
            </div>

            <div className="hero-features">
              <div>● PRO LICENSED COACHES</div>
              <div>● WEEKLY MATCHES</div>
              <div>● YOUTH PATHWAY</div>
            </div>
          </div>

          <HeroStats />
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

function HeroStats() {
  return (
    <div className="hero-stats">
      <div>
        <span className="stat-icon">🏆</span>
        <strong>20+</strong>
        <small>CHAMPIONSHIPS</small>
      </div>

      <div>
        <span className="stat-icon">♙</span>
        <strong>500+</strong>
        <small>PLAYERS</small>
      </div>

      <div>
        <span className="stat-icon">⚽</span>
        <strong>50+</strong>
        <small>COACHES</small>
      </div>

      <div>
        <span className="stat-icon">☆</span>
        <strong>15</strong>
        <small>YEARS ON TOP</small>
      </div>
    </div>
  );
}

export default Header;