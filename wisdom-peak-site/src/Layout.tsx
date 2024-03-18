import React from 'react'

import { Outlet } from 'react-router'
import { Header } from './components/Header/Header'
import Footer from './components/Footer/Footer'


export const Layout= () => {
  return (
    <>
        <Header/>
        <Outlet/> 
        <Footer/>
        
    </>
  )
}