import React, { useEffect } from 'react'


export type Toolsprops = {
    
        src:string,
        alt:string
    
}








export const Tools = ({src,alt}:Toolsprops) => {

  return (
    <div className="h-full  shadow-orange-300 w-full border-2 shadow-md flex 
    flex-col justify-center items-center hover:scale-105 duration-200 ">
        <img className="h-auto w-auto object-contain" src={src} alt={alt}/>

    </div>
  )
}

export default Tools;