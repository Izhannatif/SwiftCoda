import React from 'react'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            imageUrl: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/sketch-website.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1707141871&s=438e1e3662fb9fbb53df517ff93b4a4a',
            date: '2024',
            name: 'Project 101',
            cat1: 'Branding',
            cat2: 'Website'
        },
        {
            imageUrl: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Monday-Clicks/Thumbnail-Square-2.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1683035994&s=87c7136fa83e17615f921ba511fc96da',
            date: '2022',
            name: 'Innovative Designs',
            cat1: 'Website',
            cat2: 'Branding'
        },
        {
            imageUrl: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Idyll-Home/LIFESTYLE_MODULE-MOUSSE.jpeg?w=1119&h=839.25&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1619171556&s=f799965d6c518f9d3684b13e20af5513',
            date: '2021',
            name: 'Tech Advancements',
            cat1: 'Marketing',
            cat2: 'Website'
        },
        {
            imageUrl: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Time/Time-Thumbnail.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1674121789&s=c81c471c983dbf624bd474b4f665bc59',
            date: '2019',
            name: 'Dynamic Web',
            cat1: 'Website',
            cat2: 'Marketing'
        },
    ];

    return (
        <section id='work' className='p-1 lg:p-20 project-section w-full h-full py-10 lg:py-5'>
            <div className='pl-1 lg:pl-32 md:pl-5 sm:pl-5 text-3xl lg:text-5xl project-heading'>Take a look at <br className='hidden lg:block' /> our projects</div>
            <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col justify-around items-center flex-nowrap lg:flex-wrap'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imageUrl={project.imageUrl}
                        date={project.date}
                        name={project.name}
                        cat1={project.cat1}
                        cat2={project.cat2}
                    />
                ))}
            </div>
            <div className='float-none lg:float-right mt-0 lg:-mt-24 pr-0 lg:pr-60 pt-5 lg:pt-0'>
                <div className='text-4xl  pb-5 lg:pb-0 '>Like what you see?</div>
                <div className='flex flex-row items-center -space-x-2 mt-2 font-medium'>
                    <button
                        onClick={() => {
                            console.log('Button clicked');
                        }}
                        className='bg-white text-[#1f1f1f] rounded-3xl px-4 py-2 text-md'
                    >
                       Contact us
                    </button>
                    <FaArrowRight
                        size={35}
                        className='bg-white text-[#1f1f1f] p-3 rounded-full -rotate-45 hover:-rotate-0 transition-all duration-300 hover:translate-x-4'
                    />
                </div>
            </div>

        </section>
    )
}

export default Projects