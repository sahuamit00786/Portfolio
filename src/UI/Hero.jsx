import React from 'react'
import CountUp from 'react-countup'
import hero from '../../src/assets/hero-img.png'
import Portfolio from './Portfolio'
import Contact from './Contact'

const Hero = () => {
  return (
      <section className='pt-4 flex' id='about'>

        <div className="md:basis-3/4 pl-[150px] container pt-5">
            <div className='flex md:basis-6/6 flex-col gap-10 mt-10'>

              <div>
                <h5 className='text-headingColor font-[500] text-[18px]' data-aos='fade-right' data-aos-duration='1500'>Hello welcome <span className='text-[30px]'>,</span></h5>
                <h1 data-aos='fade-up' data-aos-duration='1500' 
                className='text-headingColor mt-6 leading-10  font-bold font-[500] sm:text-[40px] text-[2rem]'>I'm Amit Sahu <br/> Developer</h1>
              </div>

              <div data-aos='fade-up' data-aos-delay='200' data-aos-duration='1800' className='flex gap-5 items-center'>
                <a href="#contact"> 
                 <button className=' py-1 font-[400] item-center hover:bg-white bg-primaryColor text-white ease-in duration-100 border rounded-[9px] px-3 border-solid flex hover:text-smallTextColor text-[17px] gap-2'>
                    <i class="ri-mail-line"></i>
                    Hire me
                  </button>
                </a>
                <a href={Portfolio}> 
                 <button className='border-container flex gap-1 text-smallTextColor hover:text-primaryColor font-[600] hover:border-smallTextColor text-[16px] border-b border-solid'>
                    <i class="ri-eye-line"></i>
                    See Portfolio
                  </button>
                </a>
              </div>

              <p data-aos='fade-left' data-aos-duration='1800' 
               className='flex w-1/2 gap-2 text-headingColor mt-3 font-[500] text-[15px] leading-7'>
                <span>
                 <i class="ri-apps-2-line"></i>
                </span>
                "I'm a web developer who thrives on crafting user-friendly websites. I specialize in using cutting-edge tools and skills to create seamless online experiences that are both functional and visually impressive." 
              </p>

              <div className='flex gap-4'>
                <span className='text-smallTextColor text-[17px] font-[600]'>
                  Follow me :
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/sahuamit00786/" target='blank' className='hover:text-primaryColor text-smallTextColor text-[18px] font-[500]'>
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </span>
                <span>
                  <a href="mailto:sahuamit00786@gmail.com"  className='hover:text-primaryColor text-smallTextColor text-[18px] font-[500]'>
                    <i class="ri-mail-fill"></i>
                  </a>
                </span>
                <span>
                  <a href="https://github.com/sahuamit00786" target='blank' className='hover:text-primaryColor text-smallTextColor text-[18px] font-[500]'>
                    <i class="ri-github-fill"></i>
                  </a>
                </span>
              </div>

            </div>
        </div>

        <div className=' mx-auto pr-[40px] mt-[120px]'>
          <figure className='w-[350px]'>
            <img src={hero} alt="" />
          </figure>
        </div>

        <div className='md:basis-1/5 mt-5 flex-wrap flex gap-3 flex-col md:gap-[60px] md:justify-start basis-1/5 justify-between text-center md:text-end'>
          <div>
            <h2 className='text-headingColor font-[700] text-[25px]'>
             <CountUp start={0} end={6} duration={2} suffix='+' />
            </h2>
            <h4 className='text-headingColor font-[500] text-[16px]' >Years of Experience</h4>
          </div>
          <div>
            <h2 className='text-headingColor font-[700] text-[25px]'>
             <CountUp start={0} end={100} duration={2} suffix='%' />
            </h2>
            <h4 className='text-headingColor font-[500] text-[16px]' >Success rate</h4>
          </div>
          <div>
            <h2 className='text-headingColor font-[700] text-[25px]'>
             <CountUp start={0} end={6} duration={2} suffix='+' />
            </h2>
            <h4 className='text-headingColor font-[500] text-[16px]' >Projects</h4>
          </div>
        </div>

      </section>
  )
}

export default Hero