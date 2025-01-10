import './about.css';
import ME from './../../assets/myimages/img5.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import HeaderSocials from './../header/HeaderSocials';
import CTA from './../header/CTA';

const About = ()=>{
    return (
        <section id='about'>

                <div className="container header__container">
                    <h5>Hello I'm</h5>
                    <h1>Jagdeep Singh</h1>
                    {/* <h5 className='text-light'>
                        FullStack Developer
                    </h5> */}
                    {/* <CTA/> */}
                    <HeaderSocials />

                    <a href="#contact" className='scroll__down'>Scroll Down</a>
                </div>



            {/* <h5>Get To Know</h5>
            <h2>About Me</h2> */}

            <div className='container about__container'>
                 <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="" />
                    </div>
                 </div>
                 <div className='about__content'>
                     {/* <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>Coming soon...</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>300+ Clients Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>80+ Completed Projects</small>
                        </article>
                    </div> */}

                 <p>Final year Computer Science undergraduate student with hands-on experience in backend development and a solid grasp of programming languages like Java. Aim to actively contribute in a collaborative team with problem solving abilities, adaptability, and effective communication skills.</p>

                 <CTA/>

                 {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
            </div>
            </div>
        </section>
    )
}

export default About;