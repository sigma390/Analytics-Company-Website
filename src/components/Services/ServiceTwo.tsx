import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import service_two from '/src/assets/image1.jpg';


const ServiceTwo = () => {
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
    <img src={service_two} alt="Your Image" className="h-96 w-96  object-cover hover:scale-110 hover:sm-scale-105 duration-300" />
    </div>
    <div className=" h-96 translate-right">
      {/* Your text content goes here */}
      <div className=" mt-16 border-black p-4">
        <h2 className=" text-4xl sm:text-3xl  md:text-3xl   lg:text-4xl mt-4 font-bold">Machine Learning Solutions<br/> </h2>
        <p className=' text-4xl  sm:text-3xl  md:text-3xl   lg:text-4xl mt-4 font-bold'>
        Natural Language Processing (NLP)<br/> Services Offered by
            </p> 
        <h2 className="mt-4 text-6xl sm:text-4xl  md:text-5xl lg:text-6xl text-orange-600 font-bold">
            
            Wisdom Peak Analytics.</h2>
          
      </div>
      
    </div>
    
  </div>
  <div className=' h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg  '>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left '>Machine Learning Solutions</h2>

  </div>
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
  {/* Custom Model Development: */}
  <div className="flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Custom Model Development:</h3>
    <p className="text-sm md:text-base flex-grow">
    Tailored machine learning models designed to address your unique business challenges.
    </p>
  </div>
  
  {/* Predictive Modeling:  */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Predictive Modeling: </h3>
    <p className="text-sm md:text-base flex-grow">
    Leverage historical data to predict future trends and outcomes with accuracy.
    </p>
  </div>
  
  {/* Model Deployment and Monitoring: */}
  <div className=" flex-col md:flex-row">
    <h3 className="font-bold mr-2">Model Deployment and Monitoring: </h3>
    <p className="text-sm md:text-base flex-grow">
    Seamless integration and ongoing monitoring to ensure optimal model performance.
    </p>
  </div>
</div>
{/*Cloud Data Storage Services Section starts here */}


<div className='h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg'>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left  '>Natural Language Processing (NLP)</h2>

  </div>
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
  {/*Text Analysis:   */}
  <div className="flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Text Analysis:  </h3>
    <p className="text-sm md:text-base flex-grow">
    Extract valuable insights from unstructured data, including sentiment analysis and content categorization.
    </p>
  </div>
  {/*Language Understanding:     */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Language Understanding: </h3>
    <p className="text-sm md:text-base flex-grow">
    Develop applications that comprehend and respond to human language in a natural way.
    </p>
  </div>
  
  {/*Chatbot Implementation:    */}
  <div className=" flex-col md:flex-row mb-4">
    <h3 className="font-bold mr-2">Chatbot Implementation:  </h3>
    <p className="text-sm md:text-base flex-grow">
    Integrate intelligent chatbots for enhanced customer interactions and support.
    </p>
  </div>
  
</div>

<div className='h-10 sm:h-24 bg-gray-300 mt-10 justify-center shadow-slate-500 shadow-lg '>
  <h2 className='text-center p-2 sm:p-6   sm:text-xl mt-10 md:text-3xl lg:text-4xl text-black text-xl  font-bold translate-left '>Computer Vision Solutions</h2>


  </div>




   
  <div className="ml-4 md:ml-20 mr-4 md:mr-20 mt-4 md:mt-10 p-4 md:p-8">
     {/*Image Recognition: */}
     <div className=" flex-col md:flex-row">
    <h3 className="font-bold mr-2">Image Recognition: </h3>
    <p className="text-sm md:text-base flex-grow">
    Identify and classify objects, patterns, and features within images and videos.
    </p>
  </div>
  {/*Object Detection and Tracking:  */}
  <div className=" flex-col mt-2 md:flex-row">
    <h3 className="font-bold mr-2">Object Detection and Tracking: </h3>
    <p className="text-sm md:text-base flex-grow">
    Enable machines to detect and track objects in real-time, enhancing security and automation.</p>
    {/*Cost-Effective Analytics:  */}
  <div className=" flex-col mt-2 md:flex-row">
    <h3 className="font-bold mr-2">Facial Recognition:  </h3>
    <p className="text-sm md:text-base flex-grow">
    Implement secure and efficient identity verification systems using facial recognition technology.</p>
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

export default ServiceTwo
