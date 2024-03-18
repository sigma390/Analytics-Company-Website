import React, { useEffect } from 'react'
import { serviceList } from '../Home/Home'
import ServicesCard from './ServicesCard'

export const Services = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts or when id changes
    window.scrollTo(0, 0);
  }, []); // Dependency array includes id so that scroll happens when id changes
  return (
    <div className=' ml-36 mr-36 grid grid-cols-1 translate-left  sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 '>
     {/* Render service cards using ServicesCard component */}
     {serviceList.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
    

  </div>
  )
}
