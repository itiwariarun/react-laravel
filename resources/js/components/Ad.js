import React from 'react'
import download from './download.jpg'
import ReactDOM from 'react-dom';

function Ad() {
  return (
      <div>
    <nav  className='object-center truncate bg-gray-700 object' >

            <div className='container h-16 min-w-full gap-0 bg-gray-200 shadow-2xl columns-2 Border opacity:-50 shadow-black '>
        <div className='mt-2 columns-3'><div className = "py-3 "></div>
<div className = "py-3 ml-4 text-center bg-gray-50">Timex</div><img className='h-[3rem] w-[8rem] ' src={download} alt="Titan"/></div>
<div className = "py-4 text-gray-700 ">Timex Analog Silver Dial Unixex's Watch-TW00PR231<span className='pl-4 text-amber-400'>★★★★☆</span><span className='pl-2 text-red-700'>₹4,395</span><span className='pl-3 text-blue-700'>prime</span></div>

</div>



        </nav>
        <div className='font-sans columns-2'>
          <div><i className="text-gray-600 fa-solid fa-chevron-left "></i>Back to results</div>
          <div className='text-right text-gray-600'>Sponsored<i className="text-gray-600 fa-solid fa-circle-info"></i></div>

          <div></div>
          </div>  
      
        </div>
  )
}

export default Ad;
if (document.getElementById('Ad')) {
  ReactDOM.render(<Ad />, document.getElementById('Ad'));
}