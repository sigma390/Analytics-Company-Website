import React from 'react';
import ClientsCard, { ClientCardProps } from './ClientsCard';

export const ClientList: ClientCardProps[] = [
  {
    name: 'Rahul Singh',
    company: 'Hartron Communication',
    note: 'I was impressed by Wisdom Peak Analytics data-driven approach anc their ability to translate complex information into actionable steps. Their clear communication and collaborative style made the entire process smooth and successful. We are now using data analytics to make informed decisions with greater confidence.',
    location:'-Gurugram'
},
  {
    name: 'Anil Kumar',
    company: 'Business Head Cogito',
    
    note: 'We were struggling to make sense of our vast amount of customer data. Wisdom Peak Analytics helped us uncover hidden insights that have transformed our marketing strategy. We have seen a significant increase in leads and conversions thanks to their expertise.',
    location:'-Noida'
}
,
{
    name: 'Priti Singh',
    company: 'Stack world ',
    
    note: 'Hiring Wisdom Peak Analytics was one of the best decisions we have made. They helped us streamline our data collection and analysis process, allowing us to gain valuable insights into our operations. Their proactive support ensures we stay ahead of the curve and optimize our performance continuously.',
    location:'-Gurugram'
},
{
    name: 'Akashy Singh',
    company: 'CSS Founder ',
    
    note: 'I needed a data analytics partner who could understand our unique challenges in the [Client Industry] sector. Wisdom Peak Analytics impressed me with their industry- specific knowledge and their ability to tailor their approach to our specific needs. They helped us make data-driven decisions that are positively impacting our competitive edge.',
    location:'-Delhi'
}
];

const Clients = () => {
  return (
    <div className='ml-5 mt-10 sm:mt-20 sm:ml-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-10'>
      {ClientList.map((client, index) => (
        <ClientsCard  key={index} {...client} />
      ))}
    </div>
  );
};

export default Clients;