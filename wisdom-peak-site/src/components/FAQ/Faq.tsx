import  { useEffect, useState } from 'react'

interface FAQ {
    question: string;
    answer: string;
  }
  






const Faq = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts or when id changes
    window.scrollTo(0, 0);
  }, []); // Dependency array includes id so that scroll happens when id changes

    const [expandedIndex, setExpandedIndex] = useState<number>(-1); // -1 indicates no question is expanded
    const questions: FAQ[] = [
        {
          question: '+ What are the benefits of using a data analytics consultancy service?',
          answer: "Partnering with a data analytics consultancy offers several benefits, including:Expertise: Our team possesses the skills and experience to handle complex data analysis tasks, saving you time and resources.Objectivity: We provide unbiased insights and recommendations, free from internal biases or preconceived notions.Technology and tools: We leverage advanced data analytics tools and technologies, ensuring efficient and comprehensive analysis.Strategic guidance: We help you translate data insights into actionable strategies that drive positive business outcomes.."
        },
        {
          question: '+ How can data analytics help improve my business?',
          answer: 'Data analytics can significantly benefit your business by:Identifying customer trends and preferences: Understand your target audience better to personalize marketing efforts and improve customer satisfaction.Optimizing operational efficiency: Identify areas for improvement in processes and resource allocation.Making data-driven decisions: Move beyond intuition and gut feelings, relying on substantiated insights to make informed choices.Predicting future outcomes: Gain insights into potential future trends and market shifts to proactively adapt and stay ahead of the curve.'
        },
        {
          question: '+ What are the different types of data analytics services you offer?',
          answer: '  We offer a comprehensive range of data analytics services, including:Data collection and cleaning: We gather and prepare your data for analysis, ensuring its accuracy and consistency.Exploratory data analysis (EDA): We gain initial insights into your data to understand its characteristics and potential.Data visualization: We create clear and compelling visuals to communicate complex data insights effectively.Statistical modeling and machine learning: We leverage advanced techniques to uncover hidden patterns and predict future trends.Reporting and recommendations: We deliver clear and actionable reports with tailored recommendations to guide your decision-making.'
        },
        {
            question: '+ How much does your data analytics consultancy service cost?',
            answer: ' Our pricing structure is flexible and depends on several factors, including:Project scope and complexity Required data analysis techniques and tools Project duration and timeline We offer free consultations to discuss your specific needs and provide a tailored quote. Contact Now '
          }
      ];

      const handleExpand = (index: number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
      };
    
  
  
    return (
        <div>
        {questions.map((faq, index) => (
          <div className='w-full sm:w-full h-auto border-2  shadow-lg shadow-slate-300 mt-10 bg-orange-200' key={index}>
            <div className='border-2 border-b-black black' onClick={() => handleExpand(index)} style={{ cursor: 'pointer' }}>
              <h3 className='text-2xl font-bold'>{faq.question}</h3>
              <hr style={{backgroundColor: 'black'}} />
            </div>
            {expandedIndex === index && <p className='text-lg p-2'>{faq.answer}</p>}
          </div>
        ))}
      </div>
  )
}

export default Faq