import  { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';


//image imports
import logo from '/src/assets/logo.png'






export const Header = () => {







const [isMenuOpen, setIsMenuOpen] = useState(false);





  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="shadow sticky z-50 top-0">
            <nav className="bg-[#aeffaa] border-gray-200 px-4 lg:px-6 py-2.5 shadow-lg  shadow-slate-400">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className="flex items-center">
            {/* Replace the logo with the menu bar icon */}
            <button onClick={toggleMenu} className="  sm:hidden md:hidden lg:hidden">
              <FaBars className="text-black" />
            </button>
            <Link to="/" className="flex items-center">
              {/* Add your logo here */}
              <img
                src={logo}
                className="hidden sm:block md:block lg:block mr-3 h-16 hover:scale-110 duration-150 rounded-full"
                alt="Logo"
              />
            </Link>
          </div>

          <div className=" sm:hidden md:hidden  lg:hidden">
            <h1 className="text-black font-semibold text-xl">
              Wisdom Peak Analytics
            </h1>
          </div>
                    <div className="flex items-center lg:order-2">
                       
                        <Link
                            to="/contact"
                            className="text-white bg-orange-700 hover:scale-110 duration-200
                             hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium 
                             rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get Callback
                        </Link>
                    </div>




                    <div
                        className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
            id="mobile-menu-2"
                    >
                      
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            
                            {/* list items on Header */}
                            <li>
                                <NavLink
                                  className={({ isActive }) => `block py-2
                                         pr-4 pl-3 
                                         duration-200
                                         ${isActive ?
                                          "text-orange-500" : "text-gray-700"}
                                          border-b
                                           border-gray-100
                                           text-xl
                                            hover:bg-gray-50 lg:hover:bg-transparent 
                                            lg:border-0 hover:text-orange-700 hover:scale-110 duration-200 lg:p-0 `} to='/'                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                  className={({ isActive }) => `block py-2
                                         pr-4 pl-3 
                                         duration-200
                                         ${isActive ?
                                          "text-orange-700" : "text-black"}
                                          border-b
                                          text-xl
                                           border-gray-100
                                            hover:bg-gray-50
                                             lg:hover:bg-transparent
                                              lg:border-0 hover:text-orange-700
                                               lg:p-0 hover:scale-110 duration-200`} to='/services'>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                  className={({ isActive }) => `block py-2
                                         pr-4 pl-3 
                                         duration-200
                                         ${isActive ?
                                          "text-orange-700" : "text-black"}
                                          border-b
                                          text-xl
                                           border-gray-100
                                            hover:bg-gray-50
                                             lg:hover:bg-transparent
                                              lg:border-0 hover:text-orange-700
                                               lg:p-0 hover:scale-110 duration-200`} to='/about'>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                  className={({ isActive }) => `block py-2
                                         pr-4 pl-3 
                                         duration-200
                                         ${isActive ?
                                          "text-orange-700" : "text-black"}
                                          border-b
                                          text-xl
                                           border-gray-100
                                            hover:bg-gray-50
                                             lg:hover:bg-transparent
                                              lg:border-0 hover:text-orange-700
                                               lg:p-0 hover:scale-110 duration-200`} to='/contact'>
                                    Contact
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
  )
}