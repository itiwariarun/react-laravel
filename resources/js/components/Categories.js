import React from 'react'
import ReactDOM from 'react-dom';

function Categories() {
  return (
    <nav  className='flex object-center max-w-full truncate bg-gray-700 container-sm object ' >

    <div className='h-12 min-w-full py-3 text-gray-700 shadow-2xl max-gap-9 columns-8 bg-slate-300 Border opacity:-50 shadow-black'>

        
<div className = "pl-3 ">Fashion</div>
<div className = "">Women</div>
<div className = "">Men</div>
<div className = "">Kids</div>
<div className = "">Luggage</div>
<div className = "">Sportswear</div>
<div className = "">Sales&nbsp;Deals</div>
<div className = "text-blue-800">30DaysReturn</div>

</div>



        </nav>
  )
}

export default Categories;
if (document.getElementById('Categories')) {
  ReactDOM.render(<Categories />, document.getElementById('Categories'));
}