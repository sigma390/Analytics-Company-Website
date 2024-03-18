import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"


const ServiceFive = () => {
  let { id } = useParams(); // Assuming you're using react-router for routing

  
  useEffect(() => {
    // Scroll to the top when the component mounts or when id changes
    window.scrollTo(0, 0);
  }, [id]); // Dependency array includes id so that scroll happens when id changes


  return (
    
    
    
    
    
    
<>
    <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 mt-16">
    <div className=" h-72 sm:h-auto flex justify-center translate-left">
      {/* Your image content goes here */}
    <img src="/src/assets/image1.jpg" alt="Your Image" className="h-96 w-96  object-cover hover:scale-110 hover:sm-scale-105 duration-300" />
    </div>
    <div className=" h-96 translate-right">
      {/* Your text content goes here */}
      <div className=" mt-16 border-black p-4">
        <h2 className="text-4xl mt-4 font-bold">Cloud Data Migration<br/> </h2>
        <p className='text-4xl mt-4 font-bold'>
        Cloud Data Storage Services Offered by
            </p> 
        <h2 className="mt-4  text-6xl text-orange-600 font-bold">
            
            Wisdom Peak Analytics.</h2>
          
      </div>
      
    </div>
    
  </div>
  <div className='  h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg  '>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left   '>Cloud Data Migration</h2>

  </div>
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
  {/* Efficient Transition: */}
  <div className="flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Efficient Transition:</h3>
    <p className="text-sm md:text-base flex-grow">
    Transfer your data to the cloud in a smooth manner with the least amount of operational interruption.
    </p>
  </div>
  
  {/* Data Validation: */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Data Validation:</h3>
    <p className="text-sm md:text-base flex-grow">
    Guarantee to maintain the integrity and accuracy of data throughout the migration process.
    </p>
  </div>
  
  {/* Optimization Strategies: */}
  <div className=" flex-col md:flex-row">
    <h3 className="font-bold mr-2">Prescriptive Analytics:</h3>
    <p className="text-sm md:text-base flex-grow">
    Get the most out of your investment by implementing cost-effective strategies for cloud resource utilization.
    </p>
  </div>
</div>
{/*Cloud Data Storage Services Section starts here */}


<div className='  h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg  '>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left  '>Cloud Data Storage</h2>

  </div>
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
  {/* Scalable Solutions:  */}
  <div className="flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Scalable Solutions: </h3>
    <p className="text-sm md:text-base flex-grow">
    Make use of cloud storage options that can grow on demand to meet your expanding data requirements.
    </p>
  </div>
  {/*Security Protocols:    */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Security Protocols:  </h3>
    <p className="text-sm md:text-base flex-grow">
    Protect your data from unauthorized access by putting security measures in place.
    </p>
  </div>
  
  {/*Data Accessibility:   */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Data Accessibility: </h3>
    <p className="text-sm md:text-base flex-grow">
    Ensure access and retrieval of data from anywhere, at any time, and on any device.
    </p>
  </div>
  

  



















  
</div>

<div className='  h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg  '>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left   '>Cloud Data Analytics</h2>


  </div>




   
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
     {/*Real-time Analysis: */}
     <div className=" flex-col md:flex-row">
    <h3 className="font-bold mr-2">Real-time Analysis:</h3>
    <p className="text-sm md:text-base flex-grow">
    Explore and analyze data in real-time through data streams and visualization tools.
    </p>
  </div>
  {/*Scalable Processing: */}
  <div className=" flex-col mt-2 md:flex-row">
    <h3 className="font-bold mr-2">Big Data Analytics :</h3>
    <p className="text-sm md:text-base flex-grow">
    Efficiently process and analyze large volumes of data by using scalable computing resources.</p>
    {/*Cost-Effective Analytics:  */}
  <div className=" flex-col mt-2 md:flex-row">
    <h3 className="font-bold mr-2">Cost-Effective Analytics: </h3>
    <p className="text-sm md:text-base flex-grow">
    Optimize your cost by only paying for the resource that you use on an hourly or per-second basis.</p>
  </div>
  </div>



  </div>
  <div className=" ml-4 md:ml-20 mr-4 md:mr-20 p-4 md:p-8">
    <div className='flex-col md:flex-row'>
    <p className="text-sm md:text-base flex-grow">
    At Wisdom Peak Analytics, our cloud data services accommodate the needs of growing businesses, offering integrated affordable, secure, and custom Cloud Data
     Migration solutions. Our secure Cloud Data Storage and Backup Services certify seamless scalable storage of your data by minimizing downtime and maximizing efficiency.

With Cloud Data Analytics, we help you
 achieve your business goals by providing advanced analytical tools and capabilities that enable. you to make data-driven decision-making.

Adapt our cloud data services to empower your business with innovative ideas and gain competitive advantage through optimum resource
 utilization, improved efficiency, and strategic planning. Achieve your business objectives in the digital age with Wisdom Peak Analytics. 
  </p>

    </div>
    
  
</div>
    
<div className="ml-4 md:ml-20 mr-4 md:mr-20 flex items-center justify-center">
  
  <Link to='/'>
  <button className=" border-black border-2 p-2 md:p-4 text-xl rounded-2xl bg-[#6bfc63] hover:bg-green-200 hover:border-gray-500 focus:outline-none focus:border-gray-500">
    Want to know more? Book a Session now!!
  </button>
  
  </Link>

  
</div>

    
    
    
    
    
    
    </>
    
    
    
  )
}

export default ServiceFive
