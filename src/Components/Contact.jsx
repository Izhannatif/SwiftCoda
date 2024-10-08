import React, { useEffect, useRef, useState } from 'react'
import { InlineWidget, PopupButton, PopupWidget } from 'react-calendly';
import Marquee from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";
const Contact = () => {
    const [isContactInView, setIsContactInView] = useState(false);
    const contactRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // console.log('contact in view')
                setIsContactInView(entry.isIntersecting);
            },
            {
                threshold: 0.5,
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
                <p className='text-6xl lg:text-8xl font-black uppercase tracking-tighter'>LET'S WORK TOGETHER&nbsp;.&nbsp;</p>
            </Marquee>
            <Marquee loop={0} speed={100} autoFill={true} direction='right' className='overflow-hidden py-0 lg:py-2'>
                <p className='text-6xl lg:text-8xl font-black uppercase tracking-tighter'>LET'S WORK TOGETHER&nbsp;.&nbsp;</p>
            </Marquee>
            {/* <PopupButton styles={{textAlign:'center', width:'100%', overflow:'hidden'}} rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                textColor="#ffffff"
                color="#00a2ff" url='https://calendly.com/hello-swiftcoda/30min' /> */}
            <PopupWidget
                url="https://calendly.com/hello-swiftcoda/30min"
                rootElement={document.getElementById("root")}
                text="Book Your Free Session!"
                textColor="#000"

                color="#ffff"
            />
            <div className='pl-1 lg:pl-20 pr-5 py-5 flex flex-col lg:flex-row justify-around items-center'>
                <div className='text-6xl font-medium'>Have something in mind? 💡 <br /><span className='pt-2 text-4xl flex'>Reach out to us.
                    <a href='mailto:hello@swiftcoda.com'><MdArrowOutward size={40} className='ml-2 bg-[#1f1f1f] text-white rounded-full p-1 hover:translate-x-5 hover:rotate-45 transition-all duration-500' /></a>
                </span>
                </div>
                <div className='text-3xl lg:text-5xl contact-email font-light animate-bounce pt-10 lg:p-0'>
                    <a href='mailto:hello@swiftcoda.com'>
                        hello@swiftcoda.com
                    </a>
                </div>
            </div>
        </section >
    )
}

export default Contact