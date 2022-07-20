import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className=".container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>Browse Movies</h3>
          <a href="https://github.com/legit0108/movies-app-final" className="btn" target="_blank">Github</a>
          <a href="https://browse-movies.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>                                            
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>Browse Movies</h3>
          <a href="https://github.com/legit0108/movies-app-final" className="btn" target="_blank">Github</a>
          <a href="https://browse-movies.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>                                            
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>Browse Movies</h3>
          <a href="https://github.com/legit0108/movies-app-final" className="btn" target="_blank">Github</a>
          <a href="https://browse-movies.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>                                            
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>Browse Movies</h3>
          <a href="https://github.com/legit0108/movies-app-final" className="btn" target="_blank">Github</a>
          <a href="https://browse-movies.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>                                            
        </article>
      </div>
    </section>
  )
}

export default Portfolio