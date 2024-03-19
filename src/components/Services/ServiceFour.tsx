import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import service_four from '/src/assets/down.jpg';


const ServiceFour = () => {

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
    <img src={service_four} alt="Your Image" className="h-96 w-96  object-cover hover:scale-110 hover:sm-scale-105 duration-300" />
    </div>
    <div className=" h-96 translate-right">
      {/* Your text content goes here */}
      <div className=" mt-16 border-black p-4">
        <h2 className="text-4xl mt-4 font-bold">Data Architecture Design<br/> </h2>
        <p className='text-4xl mt-4 font-bold'>
        and Database Administration Services Offered  by
            </p> 
        <h2 className="mt-4  text-6xl text-orange-600 font-bold">
            
            Wisdom Peak Analytics.</h2>
          
      </div>
      
    </div>
    
  </div>
  <div className='h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg'>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left  '>Data Architecture Design</h2>

  </div>
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
  {/* Customized Architectures:  */}
  <div className="flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Customized Architectures: </h3>
    <p className="text-sm md:text-base flex-grow">
    Customise data architectures to meet your scalability needs and commercial objectives.
    </p>
  </div>
  
  {/*Scalable Solutions:   */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Scalable Solutions: </h3>
    <p className="text-sm md:text-base flex-grow">
    Design platform to improve scalability and performance to handle growing data and processing requirements.
    </p>
  </div>
  
  
</div>
{/*Database Administration Services Section starts here */}


<div className='h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg'>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left  '>Database Administration</h2>

  </div>
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
  {/* Performance Tuning:   */}
  <div className="flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Performance Tuning: </h3>
    <p className="text-sm md:text-base flex-grow">
    Improve database performance to ensure that queries are executed and responded to more quickly.
    </p>
  </div>
  {/*Backup and Recovery:     */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Backup and Recovery: </h3>
    <p className="text-sm md:text-base flex-grow">
    Ensure accuracy and security of data for quick recovery in the event of unforeseen events.
    </p>
  </div>
  
  {/*Security Management:   */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Security Management: </h3>
    <p className="text-sm md:text-base flex-grow">
    Security protocols to protect confidential information in your databases.
    </p>
  </div>




  
  

  



















  
</div>

<div className='h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg'>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left  '>Cloud Platform Integration</h2>


  </div>




   
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
     {/*Seamless Integration:  */}
     <div className=" flex-col md:flex-row">
    <h3 className="font-bold mr-2">Seamless Integration: </h3>
    <p className="text-sm md:text-base flex-grow">
    Connect your cloud services to your data platforms to improve accessibility and scalability.
    </p>
  </div>
  {/*Hybrid Solutions: */}
  <div className=" flex-col mt-2 md:flex-row">
    <h3 className="font-bold mr-2">Hybrid Solutions:</h3>
    <p className="text-sm md:text-base flex-grow">
    Utilise cloud-based and on-premises technology to implement hybrid data solutions.</p>
    {/*Cost Optimization:   */}
  <div className=" flex-col mt-2 md:flex-row">
    <h3 className="font-bold mr-2">Cost Optimization:  </h3>
    <p className="text-sm md:text-base flex-grow">
    Formulate cost-effective strategies to minimize costs with a cloud-based data platform.</p>
  </div>
  </div>



  </div>
  <div className=" ml-4 md:ml-20 mr-4 md:mr-20 p-4 md:p-8">
    <div className='flex-col md:flex-row'>
    <p className="text-sm md:text-base flex-grow">
    At Wisdom Peak Analytics, our Data Platform Management Services enable your company to realize the complete potential of its data infrastructure. Our modern data architecture solutions ensure that your data platform is tailored to meet your customized business requirements.

With our Database Administration Services, we provide guaranteed performance, security, and recovery aspects of your databases, providing a strong foundation for your data ecosystem. Protection of sensitive information with the highest standards of integrity and in compliance with regulations.

Our expertise in cloud-based platform integration allows you to consolidate your data platforms with cloud services, providing scalability, security, and affordable solutions. Partner with Wisdom Peak Analytics for Comprehensive Data Platform Management to help your business achieve data-driven success.

 
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

export default ServiceFour
