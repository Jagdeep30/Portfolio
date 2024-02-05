import './testimonials.css';
import Avt1 from './../../assets/avatar1.jpg';
import Avt2 from './../../assets/avatar2.jpg';
import Avt3 from './../../assets/avatar3.jpg';

// import Swiper core and required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = ()=>{
    return(
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container' modules={[ Pagination, Navigation, Autoplay ]}
            navigation
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
                <SwiperSlide className='testimonial'>
                    <div className='client__avatar'>
                        <img src={Avt1} alt="Avatar 1" />
                    </div>
                    <h5 className='client__name'>Ernest achiever</h5>
                    <small className='client__review'>Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestias nisi, quam eveniet repudiandae deleniti consequuntur suscipit sunt ea dolor!</small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className='client__avatar'>
                        <img src={Avt2} alt="Avatar 1" />
                    </div>
                    <h5 className='client__name'>Ernest achiever</h5>
                    <small className='client__review'>Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestias nisi, quam eveniet repudiandae deleniti consequuntur suscipit sunt ea dolor!</small>
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className='client__avatar'>
                        <img src={Avt3} alt="Avatar 1" />
                    </div>
                    <h5 className='client__name'>Ernest achiever</h5>
                    <small className='client__review'>Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestias nisi, quam eveniet repudiandae deleniti consequuntur suscipit sunt ea dolor!</small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials;