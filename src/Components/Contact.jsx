import React, { useEffect, useRef, useState } from 'react'
import Marquee from "react-fast-marquee";

const Contact = () => {
    const [isContactInView, setIsContactInView] = useState(false);
    const contactRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('contact in view')
                setIsContactInView(entry.isIntersecting);
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <section id='contact' ref={contactRef} className={`py-10 transition-colors duration-700 ${isContactInView ? 'bg-white text-[#1f1f1f]' : 'bg-[#030303] text-white'}`}>

            <Marquee loop={0} speed={100} autoFill={true} className='overflow-hidden py-0 lg:py-2'>
                <p className='text-6xl lg:text-8xl font-black uppercase tracking-tighter'> LET'S WORK TOGETHER.</p>
            </Marquee>
            <Marquee loop={0} speed={100} autoFill={true} direction='right' className='overflow-hidden py-0 lg:py-2'>
                <p className='text-6xl lg:text-8xl font-black uppercase tracking-tighter'> LET'S WORK TOGETHER.</p>
            </Marquee>

            <div className='pl-1 lg:pl-20 pr-5 py-5 flex flex-col lg:flex-row justify-around items-center'>
                <div className='text-6xl font-medium'>Have something in mind? 💡 <br /><span className='text-4xl'>Reach out to us.</span></div>
                <div className='text-3xl lg:text-5xl contact-email font-light animate-bounce pt-10 lg:p-0'>hello@swiftcoda.com</div>
            </div>
        </section>
    )
}

export default Contact