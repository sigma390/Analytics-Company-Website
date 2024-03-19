
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


import one from "/src/assets/dataEn.jpg"


const ServiceOne = () => {
  let { id } = useParams(); // Assuming you're using react-router for routing

  
  useEffect(() => {
    // Scroll to the top when the component mounts or when id changes
    window.scrollTo(0, 0);
  }, [id]); // Dependency array includes id so that scroll happens when id changes


  return (
    <>
    <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 m-5 sm:mt-16">
    <div className=" h-72 sm:h-auto flex justify-center translate-left">
      {/* Your image content goes here */}
    <img src={one} alt="Your Image" className="h-96 w-96   object-cover hover:scale-110 hover:sm-scale-105 duration-300" />
    </div>
    <div className=" h-96 sm: translate-right">
      {/* Your text content goes here */}
      <div className=" mt-0 sm:mt-16 border-black p-4">
        <h2 className="text-4xl mt-4 font-bold">Data Analytics Solutions<br/> </h2>
        <p className='text-4xl m-0 sm:mt-4 font-bold'>
        Data Engineering Services Offered by
            </p> 
        <h2 className="mt-4  text-6xl text-orange-600 font-bold">
            
            Wisdom Peak Analytics.</h2>
          
      </div>
    </div>
    
  </div>
  <div className=' h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left  '>Data Analytics Solutions</h2>

  </div>
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
  {/* Descriptive Analytics */}
  <div className="flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Descriptive Analytics:</h3>
    <p className="text-sm md:text-base flex-grow">
      Examine past data to find patterns and trends, integrated descriptive analytics tools, diagnostic insights, performance monitoring, data visualization, and summarization.
    </p>
  </div>
  
  {/* Predictive Analytics */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Predictive Analytics:</h3>
    <p className="text-sm md:text-base flex-grow">
      Make proactive decisions by using sophisticated algorithms to predict future trends. Services include scoring and probability, decision support, statistical algorithms, predictive modeling techniques, and data modeling.
    </p>
  </div>
  
  {/* Prescriptive Analytics */}
  <div className=" flex-col md:flex-row">
    <h3 className="font-bold mr-2">Prescriptive Analytics:</h3>
    <p className="text-sm md:text-base flex-grow">
      Optimize decision making through optimization models, recommendation engine, simulation methods, and decision support systems.
    </p>
  </div>
</div>
{/* Data Engineering Services Section starts here */}


<div className=' h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left '>Data Engineering Services</h2>

  </div>
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
  {/* Descriptive Analytics */}
  <div className="flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Descriptive Analytics:</h3>
    <p className="text-sm md:text-base flex-grow">
    Consolidate and integrate data from several sources in a seamless manner to create an accurate structure.
    </p>
  </div>
  
  {/*Data Warehousing:  */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Data Integration :</h3>
    <p className="text-sm md:text-base flex-grow">
    Custom data warehousing solutions for efficient storage and retrieval.
    </p>
  </div>
  
  {/*ETL (Extract, Transform, Load) Processes: */}
  <div className=" flex-col md:flex-row">
    <h3 className="font-bold mr-2">ETL (Extract, Transform, Load) Processes :</h3>
    <p className="text-sm md:text-base flex-grow">
    Affordable ETL tools and services with optimized ETL architecture design, ensuring data accuracy and reliability.
    </p>
  </div>
  {/*Big Data Analytics: */}
  <div className=" flex-col mt-2 md:flex-row">
    <h3 className="font-bold mr-2">Big Data Analytics :</h3>
    <p className="text-sm md:text-base flex-grow">
    Examination and analysis of large structured and unstructured data sets through
     advanced solutions with Hadoop, spark and Real-time data processing and analytics.</p>
  </div>
</div>

<div className=" ml-4 md:ml-20 mr-4 md:mr-20 p-4 md:p-8">
    <div className='flex-col md:flex-row'>
    <p className="text-sm md:text-base flex-grow">
    At Wisdom Peak Analytics, we provide answers to your business questions through our Data Analytics and Engineering services tailored to your business needs. Our Advanced Data Analytics Solutions utilize cutting-edge methods to convert unprocessed data into actionable insights, enabling your company to make informed decisions.

    With our Professional Data Engineering Services, we specialize in creating effective data warehousing systems, streamlining data integration from multiple sources, and optimizing ETL procedures. This ensures that your data infrastructure serves as a dynamic resource for strategic advancement.

    Explore our Data Analytics and Engineering services to unlock the true potential of your data and transform it into a tactical advantage that advances your company.
  </p>

    </div>
    
  
</div>

<div className="ml-4 md:ml-20 mr-4 md:mr-20 flex items-center justify-center">
  
  <Link to='/'>
  <button className=" border-black border-2 p-2 md:p-4 rounded-xl bg-[#6bfc63] hover:bg-gray-100 hover:border-gray-500 focus:outline-none focus:border-gray-500">
    Want to know more? Book a Session now!!
  </button>
  
  </Link>

  
</div>


    
    
    
    
    
    
    
    </>
    
  )
}

export default ServiceOne
