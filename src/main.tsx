import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.tsx'
import { Services } from './components/Services/Services.tsx'
import {Home} from './components/Home/Home.tsx'
import  Contact from './components/Contact/Contact.tsx'
import { About } from './components/About/About.tsx'
import ServiceOne from './components/Services/ServiceOne.tsx'
import ServiceTwo from './components/Services/ServiceTwo.tsx'
import ServiceThree from './components/Services/ServicesThree.tsx'
import ServiceFour from './components/Services/ServiceFour.tsx'
import ServiceSIx from './components/Services/ServiceSIx.tsx'
import ServiceFive from './components/Services/ServiceFive.tsx'




//================> 1ST WAY <=====================
// const router = createBrowserRouter([{
//   path:'/',
//   element:<Layout/>, //parent element
//   children:[{
//     path:'',
//     element:<Home/>

//   },{
//     path:'about',
//     element:<About/>

//   },{
//     path:'/contact',
//     element:<Contact/>
//   }]

// }])

//=======================>2nd WAY<=====================

const router = createBrowserRouter(
  
  createRoutesFromElements(
    //Route path '/' Roote Compoent Render Karaycha
    <Route path ='/' element={<Layout/>}> 
        {/* //children routes */}
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services/1' element={<ServiceOne/>}/>
        <Route path='/services/2' element={<ServiceTwo/>}/>
        <Route path='/services/3' element={<ServiceThree/>}/>
        <Route path='/services/4' element={<ServiceFour/>}/>
        <Route path='/services/5' element={<ServiceFive/>}/>
        <Route path='/services/6' element={<ServiceSIx/>}/>
        {/* //Dynamic Routing */}
        
       


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)