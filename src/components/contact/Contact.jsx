import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = ()=>{
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
    
        emailjs.sendForm('service_8ceqcpy', 'template_y91ll8q', form.current, 'p21Ad1fVDax1SkFNS');

        e.target.reset();
      };
    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>jagdeepsingh1630@gmail.com</h5>
                        <a href="mailto:jagdeepsingh1630@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4>
                        <h5>Jagdeep Singh</h5>
                        <a href="https://www.linkedin.com/in/jagdeepsingh1693" target='_blank'>Go To Profile</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <a href="https://api.whatsapp.com/send?phone=917658806802" target='_blank'>Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
                

            </div>
        </section>
    )
}

export default Contact;