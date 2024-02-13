import "./portfolio.css";
import '@splidejs/react-splide/css/skyblue';
// import Img1 from "./../../assets/portfolio1.jpg";
// import Img2 from "./../../assets/portfolio2.jpg";
// import Img3 from "./../../assets/portfolio3.jpg";
import Img1 from "./../../assets/myimages/snakeCover2.jpg";
import Img2 from "./../../assets/myimages/notes2.png";
import Img3 from "./../../assets/myimages/newss.png";
import Img4 from "./../../assets/myimages/coffeeTime1.png";
import Img5 from "./../../assets/myimages/Threads_(app).png";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const projects = [
	{
		id: 1,
		image: Img1,
		title: "Snake Game",
		github: "https://github.com/Jagdeep30/Snake-Game.git",
		demo: "https://snake-game-eta-drab.vercel.app/",
	},
	{
		id: 2,
		image: Img2,
		title: "Notes App",
		github: "https://github.com/Jagdeep30/Notes-App---HTML-CSS-JS.git",
		demo: "https://jagdeep30.github.io/Notes-App---HTML-CSS-JS/",
	},
	{
		id: 3,
		image: Img3,
		title: "News App",
		github: "https://github.com/Jagdeep30/News-App.git",
		demo: "https://github.com/Jagdeep30/News-App.git",
	},
	{
		id: 4,
		image: Img4,
		title: "Coffee Time",
		github: "https://github.com/Jagdeep30/Coffee-Time.git",
		demo: "https://coffee-time-omega.vercel.app/",
	},
	{
		id: 5,
		image: Img5,
		title: "Friends (Threads Clone)",
		github: "https://github.com/Jagdeep30/Friends-NextJs.git",
		demo: "https://friends-next-js.vercel.app/",
	},
];

const Portfolio = () => {

	const options = {
		type         : 'loop',
		perPage:3,
		focus:'center',
		// gap          : '1rem',
		autoplay     : true,
		pauseOnHover : true,
		// resetProgress: false,
		// height       : '15rem',
	  };

	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>




			<Splide
        options={ options }
        aria-labelledby="autoplay-example-heading"
        hasTrack={ false }
		style={{"padding":'0 2rem 0 2rem'}}
      >
        <div style={ { position: 'relative' } }>
          <SplideTrack>

				{projects.map((ele) => {
					return (
						<SplideSlide key={ele.id}>
							<article key={ele.id} className='portfolio__items'>
								<div className='portfolio__item-image'>
									<img src={ele.image} alt={ele.title} />
								</div>
								<h3>{ele.title}</h3>
								<div className='portfolio__item-cta'>
									<a
										href={ele.github}
										className='btn'
										target='_blank'
										rel='noreferrer'
									>
										Github
									</a>
									<a
										href={ele.demo}
										className='btn btn-primary'
										target='_blank'
										rel='noreferrer'
									>
										Live Demo
									</a>
								</div>
							</article>
						</SplideSlide>
					);
				})}




          </SplideTrack>
        </div>

        {/* <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button> */}
      </Splide>






			{/* <div className='container portfolio__container'>
				{projects.map((ele) => {
					return (
						<article key={ele.id} className='portfolio__items'>
							<div className='portfolio__item-image'>
								<img src={ele.image} alt={ele.title} />
							</div>
							<h3>{ele.title}</h3>
							<div className='portfolio__item-cta'>
								<a
									href={ele.github}
									className='btn'
									target='_blank'
									rel='noreferrer'
								>
									Github
								</a>
								<a
									href={ele.demo}
									className='btn btn-primary'
									target='_blank'
									rel='noreferrer'
								>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div> */}
		</section>
	);
};

export default Portfolio;
