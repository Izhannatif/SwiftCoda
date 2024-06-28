// import React, { useEffect, useRef, useState } from 'react';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

// const services = [
//     {
//         name: 'BRANDING',
//         categories: ['Brand Identity', 'Brand Strategy', 'Packaging'],
//     },
//     {
//         name: 'DESIGN',
//         categories: ['Web/Mobile Design', 'Graphic Design', 'UI/UX', 'Illustration'],
//     },
//     {
//         name: 'DEVELOPMENT',
//         categories: ['Web Development', 'App Development', 'E-commerce', 'SEO'],
//     },
//     {
//         name: 'DIGITAL',
//         categories: ['Social Media', 'Email Marketing', 'Content Creation', 'Analytics'],
//     },
//     {
//         name: 'MARKETING',
//         categories: ['SEO', 'PPC', 'Content Marketing', 'Affiliate Marketing'],
//     },
// ];

// const Services = () => {
//     const [hoveredService, setHoveredService] = useState(null);
//     const servicesRef = useRef(null)

//     const handleMouseEnter = (service) => {
//         setHoveredService(service);
//     };

//     const handleMouseLeave = () => {
//         setHoveredService(null);
//     };


//     useEffect(() => {
//         const handleScroll = (event) => {
//             if (servicesRef.current && servicesRef.current.contains(event.target)) {
//                 servicesRef.current.scrollLeft += event.deltaY;
//                 console.log(servicesRef.current)
//             }

//         };

//         window.addEventListener('wheel', handleScroll, { passive: true });

//         return () => {
//             window.removeEventListener('wheel', handleScroll);
//         };
//     }, []);

//     return (
//         <ParallaxProvider>
//             <section className='pl-20 py-10 h-screen pr-5 flex flex-col bg-white text-black'>
//                 <div className='flex justify-center items-center flex-col w-full'>
//                     <div className='text-3xl font-semibold mb-5'>When it comes to</div>
//                     <div className='services-service text-7xl w-full h-full flex flex-col justify-around items-center font-bold tracking-tighter'>
//                         {services.map((service, index) => (
//                             <Parallax key={service.name} translateX={index % 2 === 0 ? [25, -20] : [-25, 20]}>
//                                 <div
//                                     className={`service-item px-5 py-2 mx-5 ${hoveredService && hoveredService.name !== service.name ? 'fade' : ''
//                                         }`}
//                                     onMouseEnter={() => handleMouseEnter(service)}
//                                     onMouseLeave={handleMouseLeave}
//                                 >
//                                     <div>{service.name}</div>

//                                     {hoveredService && hoveredService.name === service.name && (
//                                         <div className='categories'>
//                                             {hoveredService.categories.map((category, i) => (
//                                                 <div key={i} className='category-item text-lg tracking-normal font-normal'>
//                                                     {category}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </Parallax>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </ParallaxProvider>
//     );
// };

// export default Services;


import React, { useEffect, useRef, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const services = [
    {
        name: 'BRANDING',
        categories: ['Brand Identity', 'Brand Strategy', 'Packaging'],
    },
    {
        name: 'DESIGN',
        categories: ['Web/Mobile Design', 'Graphic Design', 'UI/UX', 'Illustration'],
    },
    {
        name: 'DEVELOPMENT',
        categories: ['Web Development', 'App Development', 'E-commerce', 'SEO'],
    },
    {
        name: 'DIGITAL',
        categories: ['Social Media', 'Email Marketing', 'Content Creation', 'Analytics'],
    },
    {
        name: 'MARKETING',
        categories: ['SEO', 'PPC', 'Content Marketing', 'Affiliate Marketing'],
    },
];

const Services = () => {
    const [hoveredService, setHoveredService] = useState(null);
    const [isServicesInView, setIsServicesInView] = useState(false);
    const servicesRef = useRef(null);

    const handleMouseEnter = (service) => {
        setHoveredService(service);
    };

    const handleMouseLeave = () => {
        setHoveredService(null);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsServicesInView(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
        };
    }, []);

    return (
        <ParallaxProvider>
            <section
            id='services'
                ref={servicesRef}
                className={`pl-0 lg:pl-20 py-20 pr-5 flex flex-col transition-colors duration-700 ${isServicesInView ? 'bg-white text-[#1f1f1f] services-section ' : 'bg-[#030303] text-white '
                    }`}
            >
                <div className='flex justify-center items-center flex-col w-full'>
                    <div className='text-3xl font-semibold mb-5'>When it comes to</div>
                    <div className='services-service text-4xl lg:text-7xl md:text-5xl w-full h-full flex flex-col justify-around items-center font-bold tracking-tighter pb-10'>
                        {services.map((service, index) => (
                            <Parallax key={service.name} translateX={index % 2 === 0 ? [50, -50] : [-50, 50]}>
                                <div
                                    className={`service-item px-5 py-2 mx-5 h-full ${hoveredService && hoveredService.name !== service.name ? 'fade' : ''
                                        }`}
                                    onMouseEnter={() => handleMouseEnter(service)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div>{service.name}</div>

                                    {hoveredService && hoveredService.name === service.name && (
                                        <div className='categories absolute flex flex-row flex-nowrap lg:flex-wrap justify-center top-full lg:top-1/2 left-0 lg:left-full text-nowrap pt-3 mb-10'>
                                            {hoveredService.categories.map((category, i) => (
                                                <div key={i} className='category-item text-sm lg:text-lg tracking-tight font-normal bg-[#f5f5f5] text-[#1f1f1f] py-1 px-3 m-2 rounded-full'>
                                                    {category}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </Parallax>
                        ))}
                    </div>
                    {hoveredService && hoveredService.name === 'MARKETING' ? <div className='text-center text-xl lg:text-3xl font-semibold mb-5'>we are the storytellers.</div> : null}
                    {hoveredService && hoveredService.name === 'BRANDING' ? <div className='text-center text-xl lg:text-3xl font-semibold mb-5'>we build legacies.</div> : null}

                    {hoveredService && hoveredService.name === 'DESIGN' ? <div className='text-center text-xl lg:text-3xl font-semibold mb-5'>we speak the language of visuals.</div> : null}

                    {hoveredService && hoveredService.name === 'DEVELOPMENT' ? <div className='text-center text-xl lg:text-3xl font-semibold mb-5'> we bridge the gap between ideas and reality.</div> : null}

                    {hoveredService && hoveredService.name === 'DIGITAL' ? <div className='text-center text-xl lg:text-3xl font-semibold mb-5'> we future proof your brand.</div> : null}

                    {!hoveredService && <div className='text-center text-3xl font-semibold mb-5'>we are your one stop solution</div>}
                </div>
            </section>
        </ParallaxProvider>
    );
};

export default Services;
