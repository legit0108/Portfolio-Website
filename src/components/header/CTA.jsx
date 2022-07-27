import React from 'react'
import CV from '../../assets/Lakshit Pandeys Resume for Summer Internships.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Lakshit Pandey's Resume for Summer Internships" className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contact Me</a> 
    </div>
  )
}

export default CTA