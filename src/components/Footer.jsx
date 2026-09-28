import React from 'react';

function Footer() {
  return (
    <footer className="football-footer">

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>FUT<span>FC</span></h2>

          <p>
            Build your ultimate team, discover football legends,
            and follow the game you love.
          </p>

          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>

          <a href="#">Home</a>
          <a href="#">Players</a>
          <a href="#">Teams</a>
          <a href="#">Matches</a>
        </div>

        {/* CLUB */}
        <div className="footer-column">
          <h3>CLUB</h3>

          <a href="#">About Us</a>
          <a href="#">Our Coaches</a>
          <a href="#">Championships</a>
          <a href="#">Youth Academy</a>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h3>CONTACT</h3>

          <p>📍 Football Stadium</p>
          <p>📧 contact@futfc.com</p>
          <p>📞 +216 00 000 000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 FUT FC. All rights reserved.</p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;