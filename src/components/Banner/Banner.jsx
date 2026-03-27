import React from 'react'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { Link } from 'react-router';
import hero from '../../assets/hero.png'
function Banner() {
  return (
    <div className='mt-16'>
 
      <div className='text-5xl font-bold text-center space-y-2'>
        <h1>We Build</h1>
        <h1><span className='text-violet-600'>Productive</span> Apps</h1>
      </div>

      <div className='flex justify-center mt-10'>

     <div className='flex justify-center gap-6'>
           <Link to={'https://play.google.com/store/apps?hl=en'} className='flex items-center gap-3 px-5 py-1 border-gray-500 border-2 rounded-xl'>
          <span className='text-orange-500'><IoLogoGooglePlaystore /></span>
          <span>Play Store</span>
        </Link>
        <Link to={'https://www.apple.com/app-store/'} className='flex items-center gap-3 px-5 py-1 border-gray-500 border-2 rounded-xl'>
          <span className='text-blue-300'><FaAppStoreIos /></span>
          <span>App Store</span>
        </Link>
     </div>

      </div>

      <div className='mt-8 text-center w-8/12 mx-auto'>
        <p className='text-gray-400'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      </div>

      <div className='mt-8'>
      <div className='w-80 lg:w-2xl mx-auto'><img  src={hero} /></div>
      </div>

      <div class="w-full bg-linear-to-r from-purple-600 to-indigo-600 py-16 text-white text-center">
  <h2 class="text-3xl md:text-4xl font-semibold mb-10">
    Trusted By Millions, Built For You
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div>
      <p class="text-sm opacity-80 mb-2">Total Downloads</p>
      <h3 class="text-4xl font-bold">29.6M</h3>
      <p class="text-sm opacity-70 mt-2">21% More Than Last Month</p>
    </div>

    <div>
      <p class="text-sm opacity-80 mb-2">Total Reviews</p>
      <h3 class="text-4xl font-bold">906K</h3>
      <p class="text-sm opacity-70 mt-2">46% More Than Last Month</p>
    </div>

    <div>
      <p class="text-sm opacity-80 mb-2">Active Apps</p>
      <h3 class="text-4xl font-bold">132+</h3>
      <p class="text-sm opacity-70 mt-2">31 More Will Launch</p>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Banner
