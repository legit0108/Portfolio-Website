import React from 'react'
import './about.css'
import {GiGraduateCap} from 'react-icons/gi'
import {GiBrain} from 'react-icons/gi'
import {VscFolderLibrary} from'react-icons/vsc';

function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Education</h5>
              <small>CSE at TIET Patiala, expected 2024</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ completed</small>
            </article>

            <article className='about__card'>
              <GiBrain className='about__icon'/>
              <h5>Coding problems solved</h5>
              <small>1500+ across various platforms</small>
            </article>
          </div>
          
          <p>
            Hey there! I am Lakshit Pandey, an upcoming Technology Developer Intern at D.E. Shaw, a 3rd year
            CSE student at Thapar Institute of Engineering and Technology, Patiala, I like coding and problem-solving, 
            I'm a Knight at LeetCode with a contest rating of 2000+, a 4* coder at CodeChef and
            a Specialist at Codeforces. I am comfortable with Full-Stack web development and have worked with libraries and frameworks like ReactJS and Django. 
            I would be very interested in applying for any full-time positions for SDE-1 roles soon, if you know of any opportunities like this, I’d love to chat. 
            I’ve uploaded my resume above for your consideration, and you can reach me directly via LinkedIn or Email.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About