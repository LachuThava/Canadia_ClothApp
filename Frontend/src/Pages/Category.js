import React from 'react';
import men from '../assets/Categories/men.jpg';
import women from '../assets/Categories/women.jpg';
import children from '../assets/Categories/children.jpg';
import baby from '../assets/Categories/baby.jpg';
import Dress from './Dress';

const Category = () => {
  return (
    <div className='col'>
        <div className='text-center row'>
          <h2 className='sm:text-5xl md:text-6xl font-MaShanZheng text-red-500'>CATEGORIES</h2>
        </div>
        <div className='md:flex'>
            <div onClick={() =>{window.location.href ="/Dress/Men ";}} className='col-lg-3 col-md-6 cursor-pointer rounded-lg col-sm-12 shadow-sm h-80 flex-col flex justify-center items-center border-2  bg-transparent mr-2'>
              <span className='text-3xl row '>Men</span>
              <img src={men} className="w-36 h-44 row rounded-md" alt="" />
            </div>
            <div onClick={() =>{window.location.href ="/Dress/Women";}} className='col-lg-3 col-md-6 cursor-pointer rounded-lg col-sm-12 shadow-sm h-80 flex-col flex justify-center items-center border-2  bg-transparent mr-2'>
              <span className='text-3xl row'>Women</span>
              <img src={women} className="w-36 h-40 row rounded-md" alt="" />
            </div>
            <div onClick={() =>{window.location.href ="/Dress/Children ";}} className='col-lg-3 col-md-6 cursor-pointer rounded-lg col-sm-12 shadow-sm h-80 flex-col flex justify-center items-center border-2  bg-transparent mr-2'>
              <span className='text-3xl row'>Children</span>
              <img src={children} className="w-36 h-40 row rounded-md" alt="" />
            </div>
            <div onClick={() =>{window.location.href ="/Dress/Babies ";}} className='col-lg-3 col-md-6 cursor-pointer rounded-lg col-sm-12 shadow-sm h-80 flex-col flex justify-center items-center border-2  bg-transparent mr-2'>
              <span className='text-3xl row'>Babies</span>
              <img src={baby} className="w-36 h-40 row rounded-md" alt="" />
            </div>
        </div>
      </div>
  )
}

export default Category