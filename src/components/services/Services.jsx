import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Programming</h2>

      <div className="container services__container">
         <article className="service">
           <div className="service__head">
            <h3>Web Development</h3>
           </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Proficient In Front-End Development</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Proficient With Using ReactJS , JavaScript , HTML , CSS</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Currently Learning Back-End Development</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Currently Learning MongoDB , Django</p>
              </li>
            </ul>
         </article>
         
         <article className="service">
           <div className="service__head">
            <h3>DSA And Problem Solving</h3>
           </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Proficient In DSA And Problem Solving</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Solved 1500+ Problems Across Various Platforms</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Knight At LeetCode With A Contest Rating of 2000+</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>4* Coder At CodeChef</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Specialist At Codeforces</p>
              </li>
            </ul>
         </article>
      </div>
    </section>
  )
}

export default Services