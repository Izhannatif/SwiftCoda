// import React, { useEffect, useState } from 'react'
// import { gsap } from 'gsap'
// const Preloader = () => {

//     const [preLoaderactive, setPreLoaderActive] = useState(true);

//     useEffect(() => {

//         if (preLoaderactive === true) {
//             document.body.style.overflow = 'hidden';  // Disable scroll
//         } else if (preLoaderactive === false) {
//             document.body.style.overflow = 'auto';
//             const overlay = document.querySelector('.overlay');
//             console.log(overlay)
//             overlay.style.position = "absoute";
//             overlay.style.height = 0;
//             overlay.style.width = 0;
//             overlay.style.display = "none";
//             // Enable scroll
//         }
//         startPreloader();
//     }, [preLoaderactive]);

//     async function startPreloader() {
//         await gsap.to(".bar", 2, {
//             delay: 0,
//             height: 0,
//             stagger: {
//                 amount: 0.5,
//             },
//             ease: "power4.inOut"
//         });
//         setPreLoaderActive(false);

//     }
//     return (
//         <>
//             <div>
//                 <div className="overlay">
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                 </div> </div>
//         </>
//     )
// }

// export default Preloader

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
    const [preLoaderActive, setPreLoaderActive] = useState(true);

    useEffect(() => {
        if (preLoaderActive) {
            document.body.style.overflow = 'hidden';  // Disable scroll
            startPreloader();
        } else {
            document.body.style.overflow = 'auto'; // Enable scroll
            fadeOutOverlay();
        }
    }, [preLoaderActive]);

    async function startPreloader() {
        await gsap.to(".bar", {
            delay: 0,
            height: 0,
            stagger: {
                amount: 0.5,
            },
            ease: "power4.inOut",
            duration: 2
        });
        setPreLoaderActive(false);
    }

    function fadeOutOverlay() {
        gsap.to(".bar", {
            opacity: 0,
            height: 0,
            duration: 1,  // Duration of fade-out
            onComplete: () => {
                const overlay = document.querySelector('.overlay');
                overlay.style.display = 'none';  // Hide after fade-out is complete
            }
        });
    }

    return (
        <div>
            {preLoaderActive && (
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
                </div>
            )}
        </div>
    );
}

export default Preloader;
