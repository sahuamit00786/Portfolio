import React from 'react'
import portfolios from '../component/Portfolios'

const Modal = ({activeId,setShowModal}) => {

  const portfolio = portfolios.find(portfolio=>portfolio.id === activeId) 

  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-black bg-opacity-50'>
        <div className='max-w-[600px] gap-3 border border-black transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute p-5 z-20 bg-white rounded-[8px]'>
            <div>
            <img width={200} className='mx-auto' src={portfolio.imgUrl} alt="image" />
            <div className='flex gap-4 flex-col items-center z-10 justify-center '>
                <h2 className='text-headingColor font-[800] pt-2 text-xl'>{portfolio.title}</h2>
                <p className='text-headingColor font-[500]' >{portfolio.description}</p>
                <div className='flex flex-row gap-3'>
                {
                    portfolio.technologies.map(technology=>(
                        <span className='border px-3 py-1 rounded-full'>{technology}</span>
                    ))
                }
                
                </div>
                <a className='py-1 mt-[10px] mx-auto font-[400] item-center bg-white hover:bg-primaryColor hover:text-white ease-in duration-100 border border-black rounded-[9px] px-3 border-solid flex hover:text-smallTextColor text-[17px] gap-2' href={portfolio.siteUrl}>Live site</a>
            </div>
            <button onClick={()=>setShowModal(false)} className='absolute right-[1.8rem] text-2xl top-[0.7rem] text-black'>x</button>
            </div>
            
        </div>
        
    </div>
  )
}

export default Modal