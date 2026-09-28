import React from 'react';

function FootballNews() {

  const news = [
    {
      category: 'TRANSFERS',
      title: 'The biggest moves of the season',
      image: '/football1.jpg'
    },
    {
      category: 'CHAMPIONS LEAGUE',
      title: 'The road to the final begins',
      image: '/football2.jpg'
    },
    {
      category: 'PLAYERS',
      title: 'The new generation of legends',
      image: '/football3.jpg'
    }
  ];

  return (
    <section className="news-section">

      <div className="section-heading">
        <span>THE LATEST</span>
        <h2>FOOTBALL NEWS</h2>
        <p>Everything happening in the world of football.</p>
      </div>

      <div className="news-grid">

        {news.map((item, index) => (

          <article className="news-card" key={index}>

            <div
              className="news-image"
              style={{
                backgroundImage: `url(${item.image})`
              }}
            ></div>

            <div className="news-content">

              <span>{item.category}</span>

              <h3>{item.title}</h3>

              <a href="#">
                READ STORY →
              </a>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default FootballNews;