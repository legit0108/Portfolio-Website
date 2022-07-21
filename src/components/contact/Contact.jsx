import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>lakshitpandey02@gmail.com</h5>
            <a href="matilto:lakshitpandey02@gmail.com">Send A Message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>LinkedIn</h4>
            <h5>Lakshit Pandey</h5>
            <a href="matilto:lakshitpandey02@gmail.com">Send A Message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>lakshitpandey02@gmail.com</h5>
            <a href="matilto:lakshitpandey02@gmail.com">Send A Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form></form>
      </div>
    </section>
  )
}

export default Contact