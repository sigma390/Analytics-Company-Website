import React, { useEffect } from 'react'
import { ClientList } from '../Clients/Clients'
import ClientsCard from '../Clients/ClientsCard'
import { Link } from 'react-router-dom'

export const About = () => {

  useEffect(() => {
    // Scroll to the top when the component mounts 
  }, []); // Dependency array includes 


  return (
    <>
    <div className="bg-red-200 h-40 w-full flex flex-col items-center">
  <img className='w-full h-full object-cover' src="/src/assets/about.jpg" alt="" />
  
</div>
<div className=" h-auto sm:h-24 bg-gray-300 mt-0 sm:mt-0 lg:mt-0 justify-center shadow-slate-500 shadow-lg">
<h2 className='text-center p-2 sm:p-6   sm:text-xl  md:text-3xl lg:text-4xl text-black text-base  font-bold translate-left  '>
Welcome to Wisdom Peak Analytics</h2>
</div>

<div className=" ml-4 md:ml-20 mr-4 md:mr-20 p-4 md:p-8">
    <div className='flex-col md:flex-row'>
    <p className="text-sm md:text-base flex-grow">
    Welcome to <span className=' font-bold'>Wisdom Peak Analytics</span> , a leading data analytics consultancy established in February 2024. At Wisdom Peak Analytics, we specialize in delivering a diverse range of business solutions tailored to harness the power of data, resolving intricate business challenges through insightful analysis. Our commitment is to elevate organizational decision-making processes, empowering businesses to thrive in today's dynamic landscape.
    <br className='mt-10' />

As pioneers in the field of data analytics, we bring a wealth of expertise to the table, helping organizations unlock the full potential of their data. Our dedicated team of professionals is passionate about turning raw data into meaningful insights, enabling clients to make informed decisions that drive success.

At Wisdom Peak Analytics, we understand that in an era defined by data, every piece of information holds valuable potential. Our comprehensive suite of services covers a spectrum of industries, providing customized solutions that align with your unique business needs. Whether you're looking to enhance operational efficiency, optimize resource allocation, or gain a competitive edge, our data-driven approach is designed to address your specific objectives.

With a focus on continual innovation, we stay ahead of the curve in the rapidly evolving landscape of data analytics. Our commitment to excellence and client satisfaction is reflected in our track record of delivering tangible results. Partnering with Wisdom Peak Analytics means embarking on a journey toward enhanced decision-making, strategic growth, and lasting success.

Experience the difference with Wisdom Peak Analytics – where data meets insight, and decisions transform into success. Elevate your business to new heights with our cutting-edge data analytics solutions. Your journey to informed and empowered decision-making starts here.
  </p>

    </div>
    
  
</div>

{/* Vision mission Section context */}

<div className=" h-auto sm:h-24 bg-gray-300 mt-0 sm:mt-0 lg:mt-0 justify-center shadow-slate-500 shadow-lg">
  <h2 className='text-center p-2 sm:p-6   sm:text-xl  md:text-3xl lg:text-4xl text-black text-base  font-bold translate-left  '>
        Mission & Vision
  </h2>
</div>
      <div className=" ml-4 md:ml-20 mr-4 md:mr-20 p-4 md:p-8">
          <div className='flex-col md:flex-row'>
            <p className="text-sm md:text-base flex-grow">
                At <span className=' font-bold'>Wisdom Peak Analytics</span> , we are guided by a clear
                and ambitious mission – to empower organizations through data-driven excellence. Our vision
                  is to be the forefront of innovation in the data analytics industry, facilitating transformative
                  solutions that elevate businesses to unparalleled success. We are committed to delivering superior
                    insights, fostering a culture of continuous improvement,
                and enabling our clients to navigate the complexities of the modern business landscape with confidence.
            </p>
          </div>
      </div>

{/* our mission Section context */}
      <div className=" h-auto sm:h-24 bg-gray-300 mt-0 sm:mt-0 lg:mt-0 justify-center shadow-slate-500 shadow-lg">
        <h2 className='text-center p-2 sm:p-6   sm:text-xl  md:text-3xl lg:text-4xl text-black text-base  font-bold translate-left  '>
            Our Mission
        </h2>
      </div>
      <div className=" ml-4 md:ml-20 mr-4 md:mr-20 p-4 md:p-8">
          <div className='flex-col md:flex-row'>
            <p className="text-sm md:text-base flex-grow">
            To harness the power of data and provide
             cutting-edge analytics solutions that drive informed
             decision-making, operational efficiency, and strategic growth for our clients.
            </p>
          </div>
      </div>
{/* our Vision Section context */}

      <div className=" h-auto sm:h-24 bg-gray-300 mt-0 sm:mt-0 lg:mt-0 justify-center shadow-slate-500 shadow-lg">
        <h2 className='text-center p-2 sm:p-6   sm:text-xl  md:text-3xl lg:text-4xl text-black text-base  font-bold translate-left  '>
            Our Vision
        </h2>
      </div>
      <div className=" ml-4 md:ml-20 mr-4 md:mr-20 p-4 md:p-8">
          <div className='flex-col md:flex-row'>
            <p className="text-sm md:text-base flex-grow">
            To be the trusted partner for organizations seeking to unlock the full
             potential of their data, setting industry standards for excellence in analytics, innovation, and client satisfaction.
            At Wisdom Peak Analytics,
            our mission and vision are not just statements; they are the driving force behind every solution we deliver, ensuring that we consistently
            exceed expectations and contribute to the success of our clients in a rapidly evolving digital era.
            </p>
          </div>
      </div>

{/* Trusted by Our Clients Section */}

<div className=" h-auto sm:h-24 bg-gray-300 mt-0 sm:mt-0 lg:mt-0 justify-center shadow-slate-500 shadow-lg">
        <h2 className='text-center p-2 sm:p-6   sm:text-xl  md:text-3xl lg:text-4xl text-black text-base  font-bold translate-left  '>
        Trusted by Our Clients
        </h2>
      </div>
      <div className=' ml-36 mr-36 grid grid-cols-1 translate-left  sm:grid-cols-1 sm:mt-4 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 '>
     {/* Render service cards using ServicesCard component */}
     {ClientList.map((client, index) => (
        <ClientsCard  key={index} {...client} />
      ))}
    

  </div>

  <div className="ml-4 md:ml-20 mr-4 md:mr-20 flex items-center justify-center mt-10">
  
  <Link to='/'>
  <button className=" border-black border-2 p-2 md:p-4 text-xl rounded-2xl bg-[#6bfc63] hover:bg-green-200 hover:border-gray-500 focus:outline-none focus:border-gray-500">
    Want to know more? Book a Session now!!
  </button>
  
  </Link>

  
</div>







    
    
    </>
  )
}
