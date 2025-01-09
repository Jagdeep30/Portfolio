import './skills.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const skills = ()=>{
    return(
        <section id='skills'>
            <h5>Skills I Have</h5>
            <h2>My Skills</h2>

            <div className='container skills__container'>
                <div className='skills skills__frontend'>
                    <h3>FrontEnd Developement</h3>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Javascript</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>React</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                    </div>
                </div>


                <div className='skills skills__backend'>
                    <h3>BackEnd Developement</h3>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Node Js</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Express</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Python</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Go</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>MongoDB</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>SQL</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                    </div>
                </div>



                <div className='skills skills__others'>
                    <h3>Other Skills</h3>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Java</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        {/* <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>C++</h4>
                            </div>
                        </article> */}
                        {/* <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>SQL</h4>
                                
                            </div>
                        </article> */}
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Git/Github</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Linux</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>AWS</h4>
                                {/* <small className='text-light'>skillsd</small> */}
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default skills;