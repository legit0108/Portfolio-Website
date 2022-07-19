import React from 'react'
import './about.css'
import {GiGraduateCap} from 'react-icons/gi'
import {GiBrain} from 'react-icons/gi'
import {VscFolderLibrary} from'react-icons/vsc';

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Education</h5>
              <small>CSE At TIET Patiala , Expected 2024</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
            <article className='about__card'>
              <GiBrain className='about__icon'/>
              <h5>Coding Problems Solved</h5>
              <small>1500+ Across Various Platforms</small>
            </article>
          </div>
          <p>
            Hey there ! I am Lakshit Pandey , an upcoming Technology Developer Intern at D.E. Shaw , a 3rd year
            CSE student at Thapar Institute Of Engineering And Technology , Patiala , I like coding and problem solving , 
            I'm a Knight at LeetCode with a contest rating of 2000+ , a 4* coder at CodeChef and
            a Specialist at Codeforces . I'm currently working on improving my web development skills .  
          </p>
        </div>
      </div>
    </section>
  )
}

export default About