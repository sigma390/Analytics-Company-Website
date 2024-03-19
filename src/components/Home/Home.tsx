


import { useEffect } from 'react';
import { ClientList } from '../Clients/Clients';
import ClientsCard from '../Clients/ClientsCard';
import Faq from '../FAQ/Faq';

import ServicesCard, { ServicecardProps } from '../Services/ServicesCard'
import Tools from '../Tools/Tools';



// all image imports

import homeImg from "/src/assets/image1.jpg"

//serviceList Image

import service_one from '/src/assets/dataEn.jpg'
import service_two from '/src/assets/image1.jpg'
import service_three from '/src/assets/Improve.jpg'
import service_four from '/src/assets/down.jpg'
import service_five from '/src/assets/cloud 2.png'
import service_six from '/src/assets/Firefly Data Modernization Services 1467.jpg'


//tools and tech imports

import tool_one from  '/src/assets/1.jpg'
import tool_two from  '/src/assets/2.jpg'
import tool_three from '/src/assets/3.jpg'
import tool_four from '/src/assets/4.png'
import tool_five from '/src/assets/5.jpg'
import tool_six from '/src/assets/6.png'
import tool_seven from '/src/assets/7.jpg'
import tool_eight from '/src/assets/8.svg'
import tool_nine from '/src/assets/9.jpg'
import tool_ten from '/src/assets/10.jpg'
import tool_eleven from '/src/assets/11.svg'
import tool_twelve from '/src/assets/12.svg'
import tool_thirteen from '/src/assets/13.svg'
import tool_fourteen from '/src/assets/14.svg'
import tool_fifteen from '/src/assets/15.svg'
// import logo 
import logo from '/src/assets/logo.png'









export const serviceList: ServicecardProps[] = [


  
  {
    id:1,
    name: 'Data Analytics & Engineering',
    image: service_one,
    description: "Data Analytics Services-Transforming raw data into actionable insights through advanced analytics and engineering solutions for informed decision-making."
  },
  // Add dummy data for other services
  {
    id:2,
    name: 'Artificial Intelligence Services',
    image: service_two,
    description: "Harnessing the power of Artificial Intelligence to deliver cutting-edge solutions, from machine learning applications to intelligent automation, tailored to meet diverse business needs. "
  },
  {
    id:3,
    name: 'Improve the use of data insights in decision-making',
    image: service_three,
    description: "Elevating decision-making processes by enhancing the utilization of data insights, optimizing strategies, and fostering informed and impactful choices for business success.  "
  },
  {
    id:4,
    name: 'Data Platform Management Services',
    image: service_four,
    description: "Data Management Services -Streamlining and optimizing data platform management to ensure efficiency, reliability, and security, empowering organizations to leverage their data infrastructure effectively. "
  },
  {
    id:5,
    name: 'Cloud Data Platform Management',
    image: service_five,
    description: "Unlocking the full potential of cloud technology to drive innovation, scalability, and agility, delivering comprehensive cloud services tailored to your business objectives. "
  },
  {
    id:6,
    name: 'Data Modernization Services',
    image: service_six,
    description: "Revolutionizing data ecosystems through comprehensive modernization services, enhancing agility, scalability, and performance for a data-driven and future-ready organization. "
  },

];

// const images = [one,two,three,four,five, six]


type ToolsTechProps = {
  
    id:number,
    src: string;
  alt: string;
  
}

const techs:ToolsTechProps[] = [{
  id:1,
  
    src:tool_one,
    alt:'/src/assets/1.jpg' 
},
{
  id:2,
  src:tool_two,
  alt:'/src/assets/1.jpg'
}, 
{
  id:3,
  src:tool_three,
  alt:tool_three
}, 
{
  id:4,
  src:tool_four,
  alt:tool_four
}, 
{
  id:5,
  src:tool_five,
  alt:tool_five
},{
id:6,
  
src:tool_six,
alt:tool_six
},
{
id:7,
src:tool_seven,
alt:tool_seven
}, 
{
id:8,
src:tool_eight,
alt:tool_eight
}, 
{
id:9,
src:tool_nine,
alt:tool_nine
}, 
{
id:10,
src:tool_ten,
alt:tool_ten
},
{
  id:11, 
  src:tool_eleven,
  alt:tool_eleven
  },
  {
  id:12,
  src:tool_twelve,
  alt:tool_twelve
  }, 
  {
  id:13,
  src:tool_thirteen,
  alt:tool_thirteen
  }, 
  {
  id:14,
  src:tool_fourteen,
  alt:tool_fourteen
  }, 
  {
  id:15,
  src:tool_fifteen,
  alt:tool_fifteen
  },
]






export const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts 
  }, []); // Dependency array includes 



  // const settings = {
  //   infinite:true,
  //   lazyLoad:true,
  //   speed:300,
  //   slidesToShow:3,
  //   centerMode:true,
  //   centerPadding:0
  // }




  
  return (
    <>
     <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 mt-16">
    <div className=" h-72 sm:h-auto flex justify-center translate-left">
      {/* Your image content goes here */}
    <img src={homeImg} alt="Your Image" className="h-96 w-96  object-cover hover:scale-110 hover:sm-scale-105 duration-300" />
    </div>
    <div className=" h-96 translate-right">
      {/* Your text content goes here */}
      <div className=" mt-16 border-black p-4">
        <h2 className="text-4xl mt-4 font-bold">Unlock the Power of data.<br/> </h2>
        <p className='text-4xl mt-4 font-bold'>
        Drive informed decisions with
            </p> 
        <h2 className="mt-4  text-6xl text-orange-600 font-bold">
            
            Wisdom Peak Analytics.</h2>
          
      </div>
    </div>
    
  </div>
  
  <div className=' h-32 bg-gray-300 mt-0 sm:mt-24 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-10 text-black text-4xl mt-10 font-bold translate-left '>Our Services</h2>

  </div>
  <div className=' ml-36 mr-36 grid grid-cols-1 translate-left  sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 '>
     {/* Render service cards using ServicesCard component */}
     {serviceList.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
    

  </div>
  <div className=' h-32 bg-gray-300 mt-24 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-10 text-black text-4xl mt-10 font-bold translate-left '>Tools and Technologies</h2>

  </div>

  <div className='ml-36 mr-36 grid grid-cols-1 translate-left  sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-16' >
    {
      techs.map((tech)=>(
        <Tools key={tech.id} src={tech.src} alt={tech.alt}/>
      ))
    }
    </div>
    <div className=' h-32 bg-gray-300 mt-24 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-10 text-black text-4xl mt-10 font-bold translate-left '>About</h2>

  </div>
  <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3 md:gap-x-12">

      <div className="md:col-span-1">
        <div className="ml-0 md:ml-36 mt-10 hover:scale-105 duration-300 translate-left">
          <img className="shadow-lg shadow-slate-400" src={logo} alt="" />
        </div>
      </div>

      <div className="md:col-span-2">
        <div className="mr-0 md:mr-36 mt-10 translate-right">
          <h2 className="text-3xl p-4 md:p-10">
            "At <span className='text-orange-500'>Wisdom Peak Analytics</span>, we specialize in harnessing the power of data to empower businesses with actionable insights. Our cutting-edge analytics and tailored solutions drive informed decisions, enabling our clients to thrive in today's competitive landscape."
          </h2>
        </div>
      </div>

    </div>
    <div className=' h-32 bg-gray-300 mt-24 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-10 text-black text-4xl mt-10 font-bold translate-left '>What our Clients Say</h2>

  </div>

  {/* <div className="mx-4 sm:mx-8 lg:mx-12">
  <div className="mt-10 sm:mt-20">
    <Clients />
  </div>
</div> */}

<div className=' ml-10 sm:ml-28 mr-36 grid grid-cols-1 translate-left  sm:grid-cols-1 sm:mt-4 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 '>
     {/* Render service cards using ServicesCard component */}
     {ClientList.map((client, index) => (
        <ClientsCard  key={index} {...client} />
      ))}
    

  </div>





    <div className=' h-32 bg-gray-300 mt-24 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-10 text-black text-4xl mt-10 font-bold translate-left '>Frequently asked questions</h2>

  </div>
  <div className='ml-1 sm:ml-24 sm:mr-1 mt-10 sm:mr-24'>
  <Faq />
</div>
  <div className=' h-32 bg-gray-300 mt-24 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-10 sm:text-xl md:text-3xl lg:text-4xl text-black text-4xl mt-10 font-bold translate-left '>Reach Us</h2>

  </div>
  <div className='ml-36 mr-36 grid grid-cols-1 translate-left lg:grid-cols-2 gap-10 mt-16'>
    <div className='h-full  w-full  flex 
    flex-col justify-center items-center hover:scale-105 duration-200'>
    <h2 className="text-2xl font-bold underline mb-5 text-center ">WisdomPeak Analytics Pvt. Ltd</h2>
   
   <iframe
     className=' shadow-lg shadow-slate-400  '
       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7015.847994440166!2d77.0967691!3d28.4517074!
       3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b5f19df9e3%3A0x487cc5982fbc303a!2sThe%20Executive%20Centre%20
       -%20Two%20Horizon%20Center%20%7C%20Serviced%20%26%20Virtual%20Offices%20and%20Workspace!5e0!3m2!1sen!2sus!4v1709959418763!5m2!1sen!2sus"
       width="385"
       height="300"
       style={{ border: '0' }}
       
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
     ></iframe>
     



    </div>
    <div className='h-full  w-full   flex 
    flex-col justify-center items-center '>
      <h2 className='text-xl md:text-3xl lg:text-4xl text-center md:text-left'>
  One Horizon Center Dlf Phase 5 Sector 43 Gurugram 122003
  <br />
  <span className="text-sm md:text-2xl lg:text-4xl">
    (Contact Us - +91 9389883992 or support@wisdompeakanalytics.agency)
  </span>
</h2>
    </div>
  



  </div>


    



  


    
    
    
    </>
   
  
    
  )
}
