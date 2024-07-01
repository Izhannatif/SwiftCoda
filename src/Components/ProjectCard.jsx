import React, { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const ProjectCard = ({ imageUrl, date, projectName, cat1, cat2 }) => {
  const { setCursorStyle } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setCursorStyle({
      height: '150px',
      width: '150px',
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    });
    console.log('project mouse entered');
  };

  const handleMouseLeave = () => {
    setCursorStyle({
      height: '32px',
      width: '32px',
      backgroundColor: 'whitesmoke',
      mixBlendMode: 'normal',
    });
    console.log('project mouse left');
  };

  return (

    <div
      className='w-full lg:w-1/3 md:w-full sm:w-full h-[50vh] bg-cover bg-center rounded-lg shadow-md m-5  project-card relative '
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <div> */}
      <div className='w-max absolute top-0 left-4 project-card-hidden'>
        <p className='rounded-2xl px-5 py-1 text-lg text-white font-semibold bg-[#030303] rounded-tl-none rounded-tr-none shadow-2xl'>{date}</p>
      </div>
      <img src={imageUrl} className='z-10 h-full object-cover object-top rounded-lg shadow-[-1px 1px 10px black]' alt="" />
      <div className='flex justify-between items-center absolute bottom-4 left-0 right-0 project-card-hidden'>
        <p className='text-lg text-white px-5 py-2 bg-[#030303] w-max rounded-full rounded-tl-none rounded-bl-none shadow-2xl'>{cat1}</p>
        <p className='text-lg text-white px-5 py-2 bg-[#030303] w-max rounded-full rounded-tr-none rounded-br-none shadow-2xl'>{cat2}</p>
      </div>
      {/* </div> */}
      <div className='text-white text-xl font-semibold pb-10'>
        <p>{projectName}</p>
      </div>
    </div>

  );
};

export default ProjectCard;
