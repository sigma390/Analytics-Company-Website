import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import service_six from '/src/assets/Firefly Data Modernization Services 1467.jpg';


const ServiceSIx = () => {
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
    <img src={service_six} alt="Your Image" className="h-96 w-96  object-cover hover:scale-110 hover:sm-scale-105 duration-300" />
    </div>
    <div className=" h-96 translate-right">
      {/* Your text content goes here */}
      <div className=" mt-16 border-black p-4">
        <h2 className="text-2xl sm:text-3xl mg:text-4xl mt-4 font-bold">Machine Learning Solutions<br/> </h2>
        <p className='  sm:text-4xl  md:text-4xl mt-4 font-bold'>
        Natural Language Processing (NLP)<br/> Services Offered by
            </p> 
        <h2 className="mt-4  text-6xl text-orange-600 font-bold">
            
            Wisdom Peak Analytics.</h2>
          
      </div>
      
    </div>
    
  </div>
  <div className=' h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left '>Data Integration and Interoperability</h2>

  </div>
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
  {/* Custom Model Development: */}
  <div className="flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Seamless Data Flow:</h3>
    <p className="text-sm md:text-base flex-grow">
    Our solutions streamline data flow, enabling seamless communication and collaboration across
     your organization for enhanced insights and decision-making.
    </p>
  </div>
  
  {/* Predictive Modeling:  */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">API Development: </h3>
    <p className="text-sm md:text-base flex-grow">
    Facilitate seamless data exchange and system integration with
     our custom API development services.
    </p>
  </div>
  
  {/*Real-time Data Exchange: */}
  <div className=" flex-col md:flex-row">
    <h3 className="font-bold mr-2">Real-time Data Exchange: </h3>
    <p className="text-sm md:text-base flex-grow">
    Our real-time data exchange capabilities empower timely decision-making by providing instant access to accurate and synchronized 
    data across all your systems and processes.
    </p>
  </div>
</div>
{/*Cloud Data Storage Services Section starts here */}


<div className=' h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left '>Data Virtualization</h2>

  </div>
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
  {/*Unified Data Access:   */}
  <div className="flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Unified Data Access:  </h3>
    <p className="text-sm md:text-base flex-grow">
    Elevate your data accessibility with our virtualized layer,enabling unified access
     to data through optimized unified data access solutions.
    </p>
  </div>
  {/*Cost-Effective Infrastructure    */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Cost-Effective Infrastructure: </h3>
    <p className="text-sm md:text-base flex-grow">
    We streamline operations and reduce expenses, enabling you to maximize the value of your infrastructure
     without compromising on performance or scalability.
    </p>
  </div>
  
 
  
</div>

<div className=' h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left '>Modern Data Architecture</h2>

  </div>




   
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
     {/*Scalable Solutions: */}
     <div className=" flex-col md:flex-row">
    <h3 className="font-bold mr-2">Scalable Solutions: </h3>
    <p className="text-sm md:text-base flex-grow">
    Future-proof your organization with our scalable data infrastructures, designed to
     adapt to the evolving demands of your business growth.
    </p>
  </div>
  {/*Cloud-Native Implementations:  */}
  <div className=" flex-col mt-2 md:flex-row">
    <h3 className="font-bold mr-2">Cloud-Native Implementations: </h3>
    <p className="text-sm md:text-base flex-grow">
    Unlock the power of cloud technology with our cloud-native implementations, creating flexible
     and expandable data systems tailored to your needs.</p>
    {/*Advanced Analytics Integration:  */}
  <div className=" flex-col mt-2 md:flex-row">
    <h3 className="font-bold mr-2">Advanced Analytics Integration:  </h3>
    <p className="text-sm md:text-base flex-grow">
    Elevate your data insights with our seamless
     integration of contemporary analytics tools, 
     allowing you to gain valuable insights to drive informed 
    decision-making and business innovation.</p>
  </div>
  </div>



  </div>
  <div className=" ml-4 md:ml-20 mr-4 md:mr-20 p-4 md:p-8">
    <div className='flex-col md:flex-row'>
    <p className="text-sm md:text-base flex-grow">
    At Wisdom Peak Analytics, our Artificial Intelligence Services embrace the transformative potential of AI 
    technologies to revolutionize your business landscape. Our Machine Learning Solutions offer predictive power, enabling data-driven decision-making at its finest.

In the realm of Natural Language Processing, we empower your organization to derive meaningful insights from text,
 enhancing communication and customer engagement. Our Computer Vision Solutions unlock the visual dimension of data, bringing advanced image recognition and facial recognition capabilities.

Additionally, our AI Consulting and Strategy services guide you through the entire AI journey – from needs assessment to implementation, ensuring that your organization harnesses the full potential of artificial intelligence.
 Partner with Wisdom Peak Analytics for intelligent, data-driven solutions that propel your business into the future. 
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

export default ServiceSIx
