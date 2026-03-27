import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet, useNavigation } from "react-router";
import Footer from '../components/Footer/Footer'

export default function MainLayout() {

   const navigation = useNavigation();
   
  return (
    <div className='max-w-350 mx-auto'>

    <Navbar></Navbar>
  {navigation.state === "loading" && <div className='flex justify-center items-center min-h-screen'><span className="loading loading-bars loading-xl"></span></div>}

    <Outlet></Outlet>
    <Footer></Footer> 
      
    </div>
  )
}
