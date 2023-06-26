import { Link } from "react-router-dom"
import { useState } from "react"
import {navLinks} from '../constants/index'
import { menu ,  close, logo} from "../assets";


const Navbar = () => {
  const  [active , setActive]=useState("");
  const [toggle , settoggel]=useState(false)
  console.log(active)
  return (
    <nav className={`w-full flex  items-center py-5 fixed top-0 z-20 bg-slate-200 sm:px-16 px-6`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to='/' className="flex items-center gap-2" 
          onClick={()=> {
            setActive("");
            window.scrollTo(0, 0);
          }}>
            <img src={logo} alt='logo' className="w-20 h-20 object-contain" />
          <p className="text-black text-[18px] font-bold cursor-pointer">Oussama / Rida</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link,index)=>(
            <li
            key={index}
            className={`${active===link.title ? "text-black" : 'text-secondary'} hover:text-black text-[18px] font-medium cursor-pointer`}
            onClick={()=> {
              setActive(link.title);
            }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" 
            onClick={()=> settoggel(!toggle)}
            />
            <div className={`${!toggle ? 'hidden': 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link,index)=>(
            <li
            key={index}
            className={`${active===link.title ? "text-black" : 'text-secondary'} hover:text-white text-[18px] font-poppins  cursor-pointer font-medium text-[16px] `}
            onClick={()=> {
              settoggel(!toggle);
              setActive(link.title);
            }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar