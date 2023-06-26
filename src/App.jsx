import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import { About, Contact, Experience, Hero, Tech, Works } from './components';


const  App=()=> {
  return (
   <BrowserRouter>
   <div className='relative z-0 bg-hero-pattern'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className='relative z-0'>
      <Contact />
      </div>

   </div> 
   </BrowserRouter>
  )
}

export default App
