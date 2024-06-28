// import React from 'react';

// const ProjectCard = ({ imageUrl, date, name, cat1, cat2 }) => {
//     return (
//         <div
//             className='w-1/3 h-[60vh] bg-cover bg-center rounded-lg shadow-md m-4 project-card'>
//             <div className='w-max absolute mt-3 mx-2 project-card-hidden'>
//                 <p className='rounded-full -m-1 px-6 text-lg text-white font-semibold bg-[#030303]'>{date}</p>
//             </div>
//             <img src={imageUrl} className='z-10 h-full object-cover rounded-lg shadow-[-1px 1px 10px black]' alt="" />
//             <div className='flex justify-between -mt-5 mx-2  project-card-hidden'>
//                 <p className='text-md text-white -mt-5 px-5 bg-[#030303] w-max rounded-full'>{cat1}</p>
//                 <p className='text-md text-white -mt-5 px-5 bg-[#030303] w-max rounded-full'>{cat2}</p>
//             </div>
//             <p></p>
//         </div>
//     );
// };

// export default ProjectCard;


import React, { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const ProjectCard = ({ imageUrl, date, name, cat1, cat2 }) => {
  const { setCursorStyle } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setCursorStyle({
      height: '150px',
      width: '150px',
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    });
    console.log('mouse entered');
  };

  const handleMouseLeave = () => {
    setCursorStyle({
      height: '32px',
      width: '32px',
      backgroundColor: 'whitesmoke',
      mixBlendMode: 'normal',
    });
    console.log('mouse left');
  };

  return (
    <div
      className='w-full lg:w-1/3 md:w-full sm:w-full h-[60vh] bg-cover bg-center rounded-lg shadow-md m-4 project-card relative overflow-hidden'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='w-max absolute top-4 left-4 project-card-hidden'>
        <p className='rounded-full px-6 text-lg text-white font-semibold bg-[#030303]'>{date}</p>
      </div>
      <img src={imageUrl} className='z-10 h-full object-cover rounded-lg shadow-[-1px 1px 10px black]' alt="" />
      <div className='flex justify-between absolute bottom-4 left-4 right-4 project-card-hidden'>
        <p className='text-md text-white px-5 bg-[#030303] w-max rounded-full'>{cat1}</p>
        <p className='text-md text-white px-5 bg-[#030303] w-max rounded-full'>{cat2}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
