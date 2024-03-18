import { Link } from "react-router-dom";

export type ServicecardProps = {
    id:number,
    name:string;
    image:string;
    description:string;


}





const ServicesCard = ({name,image,description,id}:ServicecardProps) => {
  return (
    <div className=' h-full border-2 w-full  
    shadow-lg shadow-slate-400 flex 
    flex-col justify-center items-center hover:scale-105 duration-200'>
        <img src={image}  className=" p-10 object-contain  "/>
        <h2 className="text-xl text-center font-bold mb-2">{name}</h2>
        <p  className="text-sm text-center px-4">{description}</p>
        <Link className=" hover:text-orange-500" to={`/services/${id}`}>...Know more</Link>
    </div>

  )
}

export default ServicesCard