import React, {useEffect, useState} from 'react'
import portfolios from '../component/Portfolios'
import Modal from './Modal';

const Portfolio = () => {

  const [nextLoad, setLoad] = useState(6);
  const[portfolio,setPorfolio] = useState(portfolios)
  const[selectTab,setSelectTab] = useState('all')
  const[showModal, setShowModal] = useState(false)
  const[activeId, setActiveId] = useState(null)

  useEffect(()=>{

    if(selectTab === 'all'){
      setPorfolio(portfolios)
    }

    if(selectTab === 'Web Design'){
      const filteredData = portfolios.filter(item=>item.category === 'Web Design')
      setPorfolio(filteredData)
    }
    if(selectTab === 'ux'){
      const filteredData = portfolios.filter(item=>item.category === 'ux')
      setPorfolio(filteredData)
    }

  },[selectTab])

  const handleLoad = () =>{
    setLoad(nextLoad + 2);
  }

  const handleModal = (id) =>{
    setShowModal(true);
    setActiveId(id);
  }

  return (
    <section id='portfolio'>
        <div className="container ">
            <div className="flex items-center px-10 justify-between">
                <div className="mb-7 sm:mb-0">
                 <h3 className='text-3xl font-bold'>My recent Projects</h3>
                </div>
                <div className="flex gap-3">
                    <button onClick={()=>setSelectTab('all')} className='py-1 font-[400] item-center bg-white hover:bg-primaryColor hover:text-white ease-in duration-100 border rounded-[9px] px-3 border-solid flex hover:text-smallTextColor text-[17px] gap-2'>
                        All
                    </button>
                    <button onClick={()=>setSelectTab('Web Design')} className='py-1 font-[400] item-center bg-white hover:bg-primaryColor hover:text-white ease-in duration-100 border rounded-[9px] px-3 border-solid flex hover:text-smallTextColor text-[17px] gap-2'>
                        Frontend
                    </button>
                    <button onClick={()=>setSelectTab('ux')} className='py-1 font-[400] item-center bg-white hover:bg-primaryColor hover:text-white ease-in duration-100 border rounded-[9px] px-3 border-solid flex hover:text-smallTextColor text-[17px] gap-2'>
                        Backend
                    </button>
                </div>
            </div>

            <div className="flex px-10 justify-between items-center gap-5 flex-wrap mt-12">
                 {
                    <div className="grid grid-cols-3 gap-8 ml-5">
                    {portfolio.slice(0,nextLoad).map(portfolio => (
                      <div className="portfolio-item" key={portfolio.id}>
                        <div className="portfolio-image">
                          <img width="300px" src={portfolio.imgUrl} alt="" />
                          <div className="portfolio-details flex">
                            <div className='mx-auto pt-[60px]'>
                            <button onClick={()=>handleModal(portfolio.id)} className='py-1 mt-[10px] mx-auto font-[400] item-center bg-white hover:bg-primaryColor hover:text-white ease-in duration-100 border border-black rounded-[9px] px-3 border-solid flex hover:text-smallTextColor text-[17px] gap-2'>
                              View Details
                            </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                 }
            </div>
        </div>
        <div>
          {
            nextLoad < portfolios.length && (
              <button onClick={handleLoad} className='py-1 mt-[50px] mx-auto font-[400] item-center bg-white hover:bg-primaryColor hover:text-white ease-in duration-100 border rounded-[9px] px-3 border-solid flex hover:text-smallTextColor text-[17px] gap-2'>
              Load more
          </button>)
          }
        </div>
        {
          showModal && <Modal setShowModal={setShowModal} activeId={activeId}/>
        }
    </section>
  )
}

export default Portfolio