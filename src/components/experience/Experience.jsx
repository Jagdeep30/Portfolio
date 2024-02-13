import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = ()=>{
    return(
        <section id='experience'>
            <h5>Skills I Have</h5>
            <h2>My Skills</h2>

            <div className='container experience__container'>
                <div className='skills experience__frontend'>
                    <h3>FrontEnd Developement</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Javascript</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>TypeScript</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Tailwind</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>React</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                    </div>
                </div>


                <div className='skills experience__backend'>
                    <h3>BackEnd Developement</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Node Js</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Express</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Next Js</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>MongoDB</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>MySQL</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                    </div>
                </div>



                <div className='skills experience__others'>
                    <h3>Other Skills</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Java</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>C++</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>SQL</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Git/Github</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Linux</h4>
                                {/* <small className='text-light'>Experienced</small> */}
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;