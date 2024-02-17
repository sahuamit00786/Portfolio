import React from 'react'
import resume from '../assets/resume.pdf'

const Header = () => {
  return (
    <header className='w-full h-[80px] mt-2.5 flex items-center'>
        <div className="container">
            <div className="flex items-center justify-between">
                <div className='flex pb-2 items-center gap-[10px]'>
                    <span className='w-[50px] h-[50px] bg-primaryColor pt-2 text-white text-[20px] font-[500] rounded-full flex item-center justify-center'>
                        A
                    </span>

                    <div className='font-medium leading-[20px]'>
                        <h2 className='text-[27px]'>Amit</h2>
                        <p className='pl-[3px] text-[14px]'> personal</p>
                    </div>
                </div>

                <div className='menu'>
                    <ul className='flex gap-[25px] font-medium pb-5 items-center'>
                        <li><a className='text-smallTextColor border-container hover:text-primaryColor' href="#about">About</a></li>
                        <li><a className='text-smallTextColor border-container hover:text-primaryColor' href="#services">Services</a></li>
                        <li><a className='text-smallTextColor border-container hover:text-primaryColor' href="#portfolio">Portfolio</a></li>
                        <li><a className='text-smallTextColor border-container hover:text-primaryColor' href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className='flex items-center pb-3 gap-4'>
                    <button className=' py-1 font-medium item-center hover:bg-primaryColor hover:text-white ease-in duration-100 border rounded-[9px] px-3 border-solid flex text-smallTextColor text-[17px] gap-2'>
                        <i class="ri-send-plane-line"></i>
                        <a target='blank' href='https://drive.google.com/file/d/1uCH3KWgq8-9mvV8qGv8e9Ls6v_-rUaZ2/view?usp=drive_link' download='https://drive.google.com/file/d/1uCH3KWgq8-9mvV8qGv8e9Ls6v_-rUaZ2/view?usp=drive_link'>
                          Resume
                        </a>
                    </button>
                </div>

            </div>
        </div>
    </header>


  )
}

export default Header