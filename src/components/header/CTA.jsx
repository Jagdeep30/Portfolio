import CV from './../../assets/Jagdeep Singh Resume Latest.pdf';

const CTA = ()=>{
    return (
        <div className='cta'>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            <a href={CV} download className='btn'>Download CV</a>
        </div>
    );
}

export default CTA;