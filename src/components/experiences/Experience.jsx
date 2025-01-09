import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = ()=>{
    return(
        <section id='experience'>
            {/* <h5>Skills I Have</h5> */}
            <h2>Experiences</h2>

            <div className='container experience__container'>
                <div className='experience experience__frontend'>
                    <div className="exp-header">
                        <h3>Sequoia Consulting Group</h3>
                        <small className='text-light'>Backend Engineer Intern (Apr, 2024 - Current)</small>
                    </div>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Security Enhancements: Initiated and executed a comprehensive review of microservice security issues, reducing the 
                                critical and medium defects from 600 to 20, significantly improving system integrity. </h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;