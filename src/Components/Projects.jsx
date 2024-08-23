import React from 'react'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import project11 from '../assets/project-11.png'
import project12 from '../assets/project-12.jpg'
import project13 from '../assets/project-13.jpg'
import project9 from '../assets/project-9.png'
import project14 from '../assets/project-14.png'
const Projects = () => {
    const projects = [
        {
            imageUrl: project14,
            date: '2022',
            name: 'Ecommerce Store',
            cat1: 'Branding',
            cat2: 'Web Design',
            projectUrl: 'https://ecommerce-swiftcoda.vercel.app'
        },
        {
            imageUrl: project13,
            date: '2024',
            name: 'Doze Mods',
            cat1: 'Website',
            cat2: 'Branding',
            projectUrl: 'https://www.dozemods.com'
        },
        {
            imageUrl: project11,
            date: '2023',
            name: 'Cypherpunk Digital',
            cat1: 'Branding',
            cat2: 'Website',
            projectUrl: 'https://www.cypherpunk.digital'
        },
        {
            imageUrl: project12,
            date: '2023',
            name: 'Kindle Draft Publishers',
            cat1: 'Website',
            cat2: 'Marketing',
            projectUrl: 'https://www.kindledraftpublishers.com'
        },
    ];

    return (
        <section id='work' className='p-1 lg:p-20 project-section w-full h-full py-10 lg:py-5'>
            <div className='pl-1 lg:pl-32 md:pl-5 sm:pl-5 text-3xl lg:text-5xl project-heading'>Take a look at <br className='hidden lg:block' /> our projects</div>
            <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col justify-around items-center flex-nowrap lg:flex-wrap md:flex-nowrap'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imageUrl={project.imageUrl}
                        date={project.date}
                        cat1={project.cat1}
                        cat2={project.cat2}
                        projectName={project.name}
                        projectUrl={project.projectUrl}
                    />
                ))}
            </div>
            <div className='float-none lg:float-right mt-0 lg:-mt-24 pr-0 lg:pr-60 pt-5 lg:pt-0'>
                <div className='text-4xl  pb-5 lg:pb-0 '>Like what you see?</div>
                <Link to='contact'><div className='flex flex-row items-center -space-x-2 mt-2 font-medium'>
                    <button
                        className='bg-white text-[#1f1f1f] rounded-3xl px-4 py-2 text-md'
                    >
                        Contact us
                    </button>
                    <FaArrowRight
                        size={35}
                        className='bg-white text-[#1f1f1f] p-3 rounded-full -rotate-45 hover:-rotate-0 transition-all duration-300 hover:translate-x-4'
                    />
                </div></Link>
            </div>

        </section>
    )
}

export default Projects