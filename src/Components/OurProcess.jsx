import React, { useEffect, useRef } from 'react';

const OurProcess = () => {
  const processRef1 = useRef(null);
  const processRef2 = useRef(null);
  const processRef3 = useRef(null);

  useEffect(() => {
    const processSections = [processRef1.current, processRef2.current, processRef3.current];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const processNumber = entry.target.querySelector('span');
        const processDiv = entry.target.querySelector('div');

        if (entry.isIntersecting) {
          processNumber.style.opacity = '1';
          processNumber.style.transform = 'translateY(0)'
          processNumber.classList.add('process-number');
          processDiv.style.opacity = '1';
          processDiv.style.transform = 'translateY(0)'
        } else {
          processNumber.style.opacity = '0';
          processDiv.style.opacity = '0';
          processNumber.style.transform = 'translateY(100px)';
          processDiv.style.transform = 'translateY(100px)';
          processNumber.classList.remove('process-number');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    processSections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      processSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id='process' className='pl-1 lg:pl-20 pt-16 pb-3 pr-5 flex flex-col items-center justify-start w-full our-process-section'>
      <div className='text-4xl text-left w-full font-semibold py-5'>
        <span className='italic uppercase font-black'>Unleashing Your Digital Masterpiece</span> / Our Process
      </div>
      <br />
      <hr color='white' className='w-full' />
      <div className='process-div w-full px-5 lg:px-10 py-20 transition-all duration-500' ref={processRef1}>
        <div className='w-full flex flex-col lg:flex-row justify-between items-center space-x-5 lg:space-x-72 process-step'>
          <div className='w-full lg:w-1/4 text-2xl lg:text-4xl md:text-3xl font-black text-nowrap pb-5 lg:pb-40 uppercase italic'>
            <span>01</span> <br /> Unearthing the Spark
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
            <span>02</span><br /> Building on Bedrock
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
            <span>03</span><br />From Chaos to Canvas
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
