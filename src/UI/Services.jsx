import React from 'react'
import front from '../../src/assets/front-end.png'

const Services = () => {
  return (
    <section id='services' className='pb-1'>

      <div className="container">
        <hr />
        <div className="mt-[100px] text-center">
          <h1 className='font-[900] text-[40px]'>What do I help</h1>
          <p className='w-1/2 mt-5 mx-auto'>As a full-stack web developer, I handle both frontend and backend tasks. On the frontend, I craft user interfaces using HTML, CSS, and JavaScript, ensuring a seamless user experience. Simultaneously, on the backend, I manage databases, work with server-side languages like Node.js or Express, and maintain the server infrastructure to ensure the entire system functions optimally and securely.</p>
        </div>

        <div className='flex mt-[100px] flex-col justify-center sm:py-12'>
        <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
         <div className='relative text-gray-700 antialiased text-sm font-semibold'>
            <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2">
            </div>
            <div className="mt-6 sm:mt-0 sm:mb-12">

          {/* left side */}

              <div className="flex gap-5 items-center flex-col sm:flex-row">
                
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor
                     cursor-pointer ease-in duration-150'>
                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>Frontend Development</h3>
                        <p className='text-[15px] text-smallTextColor group-hover:text-white'>
                           I design and build website interfaces using HTML, CSS, and JavaScript, ensuring they're visually appealing and function smoothly.
                        </p>  
                    </div>
                  </div>
                </div>

                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute 
                left-1/2 tranform -translate-x-1/2 -translate-y-4 fle items-center justify-content">
                  <figure>
                    <img src={front} alt="" />
                  </figure>

                </div>

              </div>

              {/* right side */}

              <div className="flex items-center flex-col sm:flex-row">
                
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div data-aos='fade-left' data-aos-duration='1500' data-aos-delay='200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor
                     cursor-pointer ease-in duration-150'>
                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>Backend Development</h3>
                        <p className='text-[15px] text-smallTextColor group-hover:text-white'>
                        I craft website appearances using HTML, CSS, and JavaScript, making sure they look great and work flawlessly for users.
                        </p>  
                    </div>
                  </div>
                </div>

                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute 
                left-1/2 tranform -translate-x-1/2 -translate-y-4 fle items-center justify-content">
                  <figure>
                    <img src={front} alt="" />
                  </figure>

                </div>

              </div>

              {/* left side */}
              <div className="flex items-center flex-col sm:flex-row">
                
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div data-aos='fade-right' data-aos-duration='1800' data-aos-delay='200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor
                     cursor-pointer ease-in duration-150'>
                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>UI/UX Development</h3>
                        <p className='text-[15px] text-smallTextColor group-hover:text-white'>
                           I design and build website interfaces using Figma, ensuring they're visually appealing and function smoothly.
                        </p>  
                    </div>
                  </div>
                </div>

                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute 
                left-1/2 tranform -translate-x-1/2 -translate-y-4 fle items-center justify-content">
                  <figure>
                    <img src={front} alt="" />
                  </figure>

                </div>

              </div>

            </div>
         </div>
        </div>
        </div>
     </div>

    </section>
  )
}

export default Services