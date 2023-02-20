import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/memories.PNG'
import IMG2 from '../../assets/drfApi.PNG'
import IMG3 from '../../assets/browseMovies.PNG'
import IMG4 from '../../assets/leetcodeAutomation.PNG'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Memories',
    github: "https://github.com/legit0108/Memories-App",
    demo: "https://memories-project-full-stack.netlify.app"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Django REST API',
    github: "https://github.com/legit0108/Django-REST-API",
    demo: null
  },
  {
    id: 3,
    image: IMG3,
    title: 'Browse Movies',
    github: "https://github.com/legit0108/movies-app-final",
    demo: "https://browse-movies.netlify.app/"
  },
  {
    id: 4,
    image: IMG4,
    title: 'LeetCode Automation',
    github: "https://github.com/legit0108/LeetCode-Automation",
    demo: null
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
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
                <a href={github} className="btn" target="_blank">GitHub</a>
                {demo!==null&&<a href={demo} className="btn btn-primary" target="_blank">Live demo</a>}                                            
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