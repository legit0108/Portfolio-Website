import React from 'react'
import CV from '../../assets/Lakshit Pandey\'s resume for SDE-1 roles.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Lakshit Pandey's resume for SDE-1 roles" className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contact me</a> 
    </div>
  )
}

export default CTA