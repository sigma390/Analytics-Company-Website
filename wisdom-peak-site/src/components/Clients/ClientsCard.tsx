


import React from 'react'


export type ClientCardProps = {
  name:string,
  company:string,
  note:string,
  location:string
}








const ClientsCard = ({name,company,note,location}:ClientCardProps) => {
  return (
    <div className="h-auto ml-8 mr-10 w-full flex-col justify-center items-center mt-10  border-2 shadow-lg shadow-slate-400 border-gray-300 rounded-3xl ">
      <div className='flex border-b-2 border-gray-200 h-auto sm:h-28  '>
        
        <img src="/src/assets/account.png" className=' m-2 h-12 w-12' alt="" />
        
        <div>
        <h2 className='ml-2 mt-2  text-xl font-bold '>{name}</h2>
        <h3 className='ml-2 text-start'>{company}</h3>
        <h3 className='ml-2 text-start'>{location}</h3>
        </div>
         </div>
      <div><p className='p-3 text-base object-cover'>{note}</p></div>



    </div>

    
    )
}

export default ClientsCard