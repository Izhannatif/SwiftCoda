import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
const Preloader = () => {

    const [preLoaderactive, setPreLoaderActive] = useState(true);

    useEffect(() => {

        if (preLoaderactive === true) {
            document.body.style.overflow = 'hidden';  // Disable scroll
        } else if (preLoaderactive === false) {
            document.body.style.overflow = 'auto';    // Enable scroll
        }
        startPreloader();
    }, [preLoaderactive]);

    function startPreloader() {
        let counterElement = document.querySelector(".counter");
        let currentValue = 0;

        function updateCounter() {
            if (currentValue === 100) {
                setPreLoaderActive(false);
                return;
            }
            currentValue += Math.floor(Math.random() * 10) + 1;

            if (currentValue >= 100) {
                currentValue = 100
            }
            preLoaderactive ? counterElement.textContent = currentValue : null;
            let delay = Math.floor(Math.random() * 200) + 50;
            setTimeout(updateCounter, delay);

        }
        updateCounter();
        gsap.to(".counter", 0.25, {
            delay: 3.5,
            opacity: 0,
        });

        gsap.to(".bar", 2, {
            delay: 2.5,
            height: 0,
            stagger: {
                amount: 0.5,
            },
            ease: "power4.inOut"
        });
    }
    return (
        <>
            <div>
                <h1 className="counter">0</h1>
                <div className="overlay">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div> </div>
        </>
    )
}

export default Preloader