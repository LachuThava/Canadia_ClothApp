import React from 'react';
import SmartSlider from 'react-smart-slider';
const About = () => {
  return (
    <div className=' md:flex justify-between '>
        <div className='sm:w-fit col md:w-1/2 min-h-min col-lg-6 col-md-12 col-sm-12 mt-10 flex justify-center items-center '>
            <img src='https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' className='p-2'/>
        </div>
        <div className='sm:w-fit  col md:w-1/2 right-10 mt-10 p-4 h-1/2 border-4 border-x-indigo-500 col-lg-6 col-md-12 col-sm-12 rounded-md relative'>
            <h2 className='text-3xl text-center'>ABOUT US</h2>
            <p className='text-xl mt-4 p-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos vero incidunt, id quidem vitae! Molestiae, atque tempore quod dolores et at dolore, odio, quo reiciendis consequuntur
                 itaque praesentium doloremque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque natus corporis dignissimos, amet inventore minima magnam nesciunt. Velit nam id odit at, illo esse numquam praesentium corrupti beatae dignissimos.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis sunt tempore ducimus placeat alias magnam eaque, suscipit sit iusto veritatis tempora eum distinctio quaerat a ad natus odio voluptatem iure!
                lorem
            </p>
        </div>
    </div>
  )
}

export default About