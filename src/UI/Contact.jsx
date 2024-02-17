import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='container mb-[200px]'>
        <hr className='pt-4'/>
        <div className='flex py-[40px]'>
         <h1 className='text-3xl font-medium mx-auto'>Get Connected</h1>
        </div>
        <div className='flex flex-row gap-5 justify-around'>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1741.2248903304026!2d80.97249316535436!3d26.769087100297945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708114488087!5m2!1sen!2sin" width="600" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className=' w-full'>
                <form className='flex flex-col gap-4' action="">
                    <div className='flex flex-col gap-2'>
                        <label>Name</label>
                        <input className='border py-2 pl-2 rounded-[10px] px-1' type='text' placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Email</label>
                        <input className='border py-2 pl-2 rounded-[10px] px-1' type='text' placeholder='Enter your email' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Message</label>
                        <textarea className='border py-2 pl-2 rounded-[10px] px-1' placeholder='Enter your message'></textarea>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <button className='py-1 mt-[10px] mx-auto font-[400] item-center bg-white hover:bg-primaryColor hover:text-white ease-in duration-100 border border-black rounded-[9px] px-3 border-solid w-full hover:text-smallTextColor text-[17px] gap-2' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact