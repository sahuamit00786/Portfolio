import './App.css'
import React, {useEffect} from 'react'
import Aos from 'aos';
import Header from './component/Header';
import Hero from './UI/Hero';
import Services from './UI/Services';
import Portfolio from './UI/Portfolio';
import Contact from './UI/Contact';
import Personal from './UI/Personal';



function App() {

  useEffect(()=>{
    
     Aos.init({
     offset: 200,
     duration: 600,
     });      

  },[])

  return (
    <div>
     <Header/>
     <Hero/>
     <Services/>
     <Portfolio/>
     <Contact/>
     <Personal/>
    </div>
  )
}

export default App
