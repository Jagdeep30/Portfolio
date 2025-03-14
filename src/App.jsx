import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experiences/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = ()=>{
    return (
        <>
            {/* <Header/> */}
            <Nav/>
            <About/>
            <Skills/>
            <Experience/>
            {/* <Services/> */}
            <Portfolio/>
            {/* <Testimonials/> */}
            <Contact/>
            <Footer/>
        </>
    )
}

export default App;