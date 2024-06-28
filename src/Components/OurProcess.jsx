// import React from 'react'

// const OurProcess = () => {
//     return (
//         <section className='pl-20 pt-16 pb-3 pr-5 flex flex-col items-center justify-start w-full our-process-section'>
//             <div className='text-4xl text-left w-full font-semibold py-5'> <span className='italic uppercase font-black'>Unleashing Your Digital Masterpiece</span> / Our Process</div>
//             <br />
//             <hr color='white' className='w-full' />
//             <div className='process-div w-full px-10 py-20'>
//                 <div className='w-full flex flex-row justify-between items-center space-x-72 process-step'>
//                     <div className='w-1/4 text-4xl font-black text-nowrap pb-40 uppercase italic'> <span className='process-number'>01</span> <br />  Unearthing the Spark</div>
//                     <div className='w-1/2 text-3xl font-medium text-wrap text-left'>We embark on a collaborative quest, diving deep to understand your brand's DNA. We bridge the gap between whimsy and practicality, crafting a design vision that ignites.</div>
//                 </div>
//             </div>
//             <br />
//             <hr color='white' className='w-full' />
//             <div className='w-full px-10 py-20'>
//                 <div className='w-full flex flex-row justify-between items-center space-x-72 process-step'>
//                     <div className='w-1/4 text-4xl font-black text-nowrap pb-36 uppercase italic'> <span className='process-number'>02</span><br /> Building on Bedrock</div>
//                     <div className='w-1/2 text-3xl font-medium text-wrap text-left'>Like architects wielding the power of Next.js, we lay the foundation for your digital empire. This isn't just any tool. It's our secret weapon, meticulously chosen for its strength and resilience.</div>
//                 </div>
//             </div>
//             <br />
//             <hr color='white' className='w-full' />
//             <div className='w-full px-10 py-20'>
//                 <div className='w-full flex flex-row justify-between items-center space-x-72 process-step'>
//                     <div className='w-1/4 text-4xl font-black text-nowrap pb-36 uppercase italic'> <span className='process-number'>03 </span><br />From Chaos to Canvas</div>
//                     <div className='w-1/2 text-3xl font-medium text-wrap text-left'>We embrace the initial "mess" of great ideas. Let the creative chaos flow! We'll guide you through this transformative journey, transforming the whirlwind into a masterpiece that wows.</div>
//                 </div>
//             </div>
//             <hr color='white' className='w-full' />

//         </section>

//     )
// }

// export default OurProcess

import React, { useEffect, useRef } from 'react';

const OurProcess = () => {
  const processRef1 = useRef(null);
  const processRef2 = useRef(null);
  const processRef3 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const process1 = processRef1.current;
      const process2 = processRef2.current;
      const process3 = processRef3.current;

      const offset = window.innerHeight / 1.5; // Offset to start overlapping

      if (scrollTop > process1.offsetTop - offset) {
        process1.style.opacity = 1;
        process1.style.transform = 'translateY(0)';
      } else {
        process1.style.opacity = 0;
        process1.style.transform = 'translateY(100px)';
      }

      if (scrollTop > process2.offsetTop - offset) {
        process2.style.opacity = 1;
        process2.style.transform = 'translateY(0)';
      } else {
        process2.style.opacity = 0;
        process2.style.transform = 'translateY(100px)';
      }

      if (scrollTop > process3.offsetTop - offset) {
        process3.style.opacity = 1;
        process3.style.transform = 'translateY(0)';
      } else {
        process3.style.opacity = 0;
        process3.style.transform = 'translateY(100px)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='pl-1 lg:pl-20 pt-16 pb-3 pr-5 flex flex-col items-center justify-start w-full our-process-section'>
      <div className='text-4xl text-left w-full font-semibold py-5'>
        <span className='italic uppercase font-black'>Unleashing Your Digital Masterpiece</span> / Our Process
      </div>
      <br />
      <hr color='white' className='w-full' />
      <div className='process-div w-full px-5 lg:px-10 py-20 transition-all duration-500' ref={processRef1}>
        <div className='w-full flex flex-col lg:flex-row justify-between items-center space-x-5 lg:space-x-72 process-step'>
          <div className='w-full lg:w-1/4 text-2xl lg:text-4xl md:text-3xl font-black text-nowrap pb-5 lg:pb-40 uppercase italic'>
            <span className='process-number'>01</span> <br /> Unearthing the Spark
          </div>
          <div className='w-full lg:w-1/2 text-xl lg:text-3xl font-medium text-wrap text-left'>
            We embark on a collaborative quest, diving deep to understand your brand's DNA. We bridge the gap between whimsy and practicality, crafting a design vision that ignites.
          </div>
        </div>
      </div>
      <br />
      <hr color='white' className='w-full' />
      <div className='process-div w-full px-5 lg:px-10 py-20 transition-all duration-500' ref={processRef2}>
        <div className='w-full flex flex-col lg:flex-row justify-between items-center space-x-5 lg:space-x-72 process-step'>
          <div className='w-full lg:w-1/4 text-2xl lg:text-4xl md:text-3xl font-black text-nowrap pb-5 lg:pb-40 uppercase italic'>
            <span className='process-number'>02</span><br /> Building on Bedrock
          </div>
          <div className='w-full lg:w-1/2 text-xl lg:text-3xl font-medium text-wrap text-left'>
            Like architects wielding the power of Next.js, we lay the foundation for your digital empire. This isn't just any tool. It's our secret weapon, meticulously chosen for its strength and resilience.
          </div>
        </div>
      </div>
      <br />
      <hr color='white' className='w-full' />
      <div className='process-div w-full px-5 lg:px-10 py-20 transition-all duration-500' ref={processRef3}>
        <div className='w-full flex flex-col lg:flex-row justify-between items-center space-x-5 lg:space-x-72 process-step'>
          <div className='w-full lg:w-1/4 text-2xl lg:text-4xl md:text-3xl font-black text-nowrap pb-5 lg:pb-40 uppercase italic'>
            <span className='process-number'>03</span><br />From Chaos to Canvas
          </div>
          <div className='w-full lg:w-1/2 text-xl lg:text-3xl font-medium text-wrap text-left'>
            We embrace the initial "mess" of great ideas. Let the creative chaos flow! We'll guide you through this transformative journey, transforming the whirlwind into a masterpiece that wows.
          </div>
        </div>
      </div>
      <hr color='white' className='w-full' />
    </section>
  );
}

export default OurProcess;
