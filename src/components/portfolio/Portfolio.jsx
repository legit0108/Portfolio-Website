import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/browseMovies.PNG'
import IMG2 from '../../assets/cameraGallery.PNG'
import IMG3 from '../../assets/leetcodeAutomation.PNG'
import IMG4 from '../../assets/githubScraper.PNG'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Browse Movies',
    github: "https://github.com/legit0108/movies-app-final",
    demo: "https://browse-movies.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Camera Gallery',
    github: "https://github.com/legit0108/Camera-Gallery",
    demo: null
  },
  {
    id: 3,
    image: IMG3,
    title: 'LeetCode Automation',
    github: "https://github.com/legit0108/LeetCode-Automation",
    demo: null
  },
  {
    id: 4,
    image: IMG4,
    title: 'GitHub Web Scraper',
    github: "https://github.com/legit0108/GitHub-Web-Scraper",
    demo: null
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id , image , title , github , demo})=>{
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">Github</a>
                {demo!==null&&<a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>}                                            
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio