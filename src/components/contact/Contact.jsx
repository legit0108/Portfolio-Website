import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>lakshitpandey02@gmail.com</h5>
            <a href="mailto:lakshitpandey02@gmail.com" target="_blank">Send An Email</a>
          </article>
          
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Lakshit Pandey</h5>
            <a href="https://www.linkedin.com/in/lakshit-pandey-66a0591b3/" target="_blank">Connect On LinkedIn</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+91 7995866127</h5>
            <a href="https://wa.me/917995866127" target="_blank">Send A Message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required></input>
          <input type="email" name="email" placeholder="Your Email" required></input>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>    
        </form>
      </div>
    </section>
  )
}

export default Contact