import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const Responsive = () => {

    const [nav, setNav] = useState(false);
    const handleNav =() => {
     setNav(!nav);
     console.log('state has changed')
    };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
            <div className='fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20'>
                <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center text-black no-underline rounded-full shadow-lg bg-gray-300 shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20} />
                    <span className='pl-4'>Home</span>
                </a>
                <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center text-black no-underline rounded-full shadow-lg bg-gray-300 shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects size={20} />
                    <span className='pl-4'>Work</span>
                </a>
                <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center text-black no-underline rounded-full shadow-lg bg-gray-300 shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject size={20} />
                    <span className='pl-4'>Project</span>
                </a>
                <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center text-black no-underline rounded-full shadow-lg bg-gray-300 shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson size={20} />
                    <span className='pl-4'>Resume</span>
                </a>
                <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center text-black no-underline rounded-full shadow-lg bg-gray-300 shadow-gray-900 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20} />
                    <span className='pl-4'>Contact</span>
                </a>
            </div>
        )
        : (
           ''
        )
      }
    </div>
  );
};

export default Responsive;
