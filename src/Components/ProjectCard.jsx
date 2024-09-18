import React, { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const ProjectCard = ({ imageUrl, date, projectName, cat1, cat2, projectUrl }) => {
  const { setCursorStyle } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setCursorStyle({
      height: '150px',
      width: '150px',
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    });
  };

  const handleMouseLeave = () => {
    setCursorStyle({
      height: '32px',
      width: '32px',
      backgroundColor: 'whitesmoke',
      mixBlendMode: 'normal',
    });
  };

  return (
    <div
      className='w-full lg:w-[60vh] md:w-full sm:w-full h-[55vh] bg-cover bg-center rounded-3xl shadow-md m-5 project-card relative p-2 group transition-all duration-500'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={projectUrl} target='_blank'>
        {/* <div className='w-max absolute top-0 left-4 '>
          <p className='rounded-2xl px-5 py-1 text-lg text-white font-semibold bg-[#030303] rounded-tl-none rounded-tr-none shadow-2xl'>{date}</p>
        </div> */}
        <img src={imageUrl} className='z-10 h-full w-full object-cover object-top rounded-3xl shadow-[-1px 1px 10px black]' alt="" />
        <div className='flex justify-between items-center absolute top-1 right-5  z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out '>
          <p className='text-sm text-white bg-[#0a0a0a] px-4 py-1 mx-2 w-max rounded-full shadow-2xl'>{cat1}</p>
          <p className='text-sm text-white bg-[#0a0a0a] px-4 py-1 mx-2 w-max rounded-full shadow-2xl'>{cat2}</p>
        </div>
        <div className='text-white text-xl font-semibold pb-10'>
          <p>{projectName}</p>
        </div>
      </a>

      {/* SVG container */}
      <div className='absolute top-1 right-[5px] ease-in-out transform group-hover:translate-y-0 -translate-y-10 duration-500 z-0 opacity-0 group-hover:opacity-100'>
        <svg className='' width="375" height="81" viewBox="0 0 375 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M374.5 1V73.4147C373.741 70.2586 372.406 66.3762 370.053 62.491C364.583 53.4599 353.667 44.5 332 44.5H70.0442C69.2281 44.3559 68.241 44.246 67.1293 44.1223C60.8432 43.4226 50.5723 42.2794 44.7078 31.9969C43.3319 29.5844 42.2781 26.99 41.2147 24.3718C40.7833 23.3098 40.3504 22.244 39.8938 21.1848C38.3245 17.5447 36.4897 14.0296 33.5032 11.2942C26.3633 4.7545 17.6551 2.44336 7.83285 1H374.5Z" stroke="transparent" fill="#030303" />
        </svg>
      </div>
    </div>
  );
};

export default ProjectCard;
