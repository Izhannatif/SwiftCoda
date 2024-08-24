// import React from 'react'
// import { FaArrowRight } from 'react-icons/fa';
// import { Parallax } from 'react-scroll-parallax';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import { FreeMode, Pagination } from 'swiper/modules';

// const About = () => {

//     return (
//         <section id="about" className="p-20 flex flex-col justify-evenly ">
//             <div className='w-full  flex flex-row justify-evenly '>
//                 <div className="w-1/2">
//                     <p className='text-lg px-10 font-medium'>* Who we are</p>
//                 </div>
//                 <div className="w-1/2">
//                     <p className=' text-4xl'>An independent web design and branding agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards.</p>
//                     <div className='flex flex-row items-center space-x-[-10px] mt-5 font-medium'>
//                         <button onClick={
//                             () => {
//                                 console.log('Button clicked');
//                             }
//                         } className='bg-white text-[#1f1f1f] rounded-3xl px-5 py-2'>About SwiftCoda</button>
//                         <FaArrowRight size={40} className='bg-white text-[#1f1f1f] p-3 rounded-full -rotate-45 hover:-rotate-0 transition-all duration-300  hover:translate-x-4' />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-scroll';

import redbull from '../assets/redbull-logo.png'
import gloriajeans from '../assets/gloriajeans-logo.png'
import honda from '../assets/honda-logo.png'
import careem from '../assets/careem-logo.png'
import intDigital from '../assets/intdigital-logo.png'
import jaffer from '../assets/jaffer-logo.png'
import ds from '../assets/ds-logo.png'
const About = () => {
    return (
        <>
            <section id="about" className=" flex flex-col justify-evenly pt-10">
                <div className='w-full flex flex-col lg:flex-row md:flex-col sm:flex-col justify-around'>
                    <div className="">
                        <p className='text-lg px-3 lg:px-10 md:px-5 sm:px-3 font-medium'>* Who we are</p>
                    </div>
                    <div className="w-full lg:w-1/2 md:w-full sm:w-full pl-7 lg:pl-14 sm:pl-7">
                        <p className='text-xl lg:text-2xl md:text-3xl sm:text-2xl'>
                            SwiftCoda - Where digital innovation meets strategic elevation. We're not just reshaping brands, we're pioneering new horizons in the digital realm. Our blend of cutting edge tech and creative finesse ensures your journey to success is swift and impactful.
                        </p>
                        <Link to={'services'}><div className='flex flex-row items-center space-x-[-10px] mt-5 font-medium pb-10'>
                            <button className='bg-white text-[#1f1f1f] rounded-3xl px-5 py-2' >
                               Our Services
                            </button>
                            <FaArrowRight
                                size={40}
                                className='bg-white text-[#1f1f1f] p-3 rounded-full rotate-45 hover:rotate-90 transition-all duration-300 hover:translate-x-4'
                            />
                        </div></Link>
                    </div>
                </div>
            </section>
            <section id="clients" className="py-10 md:py-20">
                {/* <div className='text-9xl absolute z-10 opacity-5 text-center right-[25%] font-black tracking-widest '>PARTNERS</div> */}
                <div className='text-6xl md:text-7xl lg:text-9xl text-white z-10 absolute  opacity-5 font-black tracking-widest left-3 md:left-28 leading-1 md:leading-10'>PARTNERS</div>
                <Swiper

                    slidesPerView={5}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 40
                        }
                    }}
                    spaceBetween={0}
                    freeMode={true}
                    centeredSlides={false}
                    loop={true}

                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,

                    }}
                    modules={[FreeMode, Autoplay, Pagination]}
                    className="mySwiper z-20 "
                >
                    <SwiperSlide>
                        <img width={120} height={100} src={careem} alt="Careem" className="client-logo pt-6 " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width={100} height={100} src={honda} alt="Honda" className="client-logo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width={100} height={100} src={redbull} alt="Red Bull" className="client-logo invert " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width={200} height={100} src={gloriajeans} alt="Gloria Jeans" className="client-logo invert pt-8" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width={70} height={50} src={jaffer} alt="Gloria Jeans" className="client-logo invert" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width={100} height={10} src={intDigital} alt="Gloria Jeans" className="client-logo pt-2 " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width={120} height={100} src={ds} alt="Gloria Jeans" className="client-logo pt-5" />
                    </SwiperSlide>
                    

                </Swiper>
            </section>
        </>
    );
};

export default About;
