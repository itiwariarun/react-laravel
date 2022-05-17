import React from 'react'
import ReactDOM from 'react-dom';

function ProductDet() {
  return (
    <div className='container  min-w-full h-[30rem] truncate m-3 leading-6'>
<h2 className='text-2xl font-bold'>Product Details</h2>

<p><span className='font-bold'>Batteries  : </span>1 Product Specific batteries required. (included)</p>
<p><span className='font-bold'>Product Dimensions  : </span>  3.6 x 3.5 x 1.5 cm; 60 Grams</p>
<p><span className='font-bold'>Date First Available  : </span>  30 January 2020</p>
<p><span className='font-bold'>Manufacturer  :  </span> Fossil India Pvt. Ltd.</p>
<p><span className='font-bold'>ASIN :  </span> B0846PJPW9</p>
<p><span className='font-bold'>Item model number : </span>  AX1343</p>
<p><span className='font-bold'>Country of Origin : </span>  China</p>
<p><span className='font-bold'>Department  :  </span> Men</p>
<p><span className='font-bold'>Manufacturer  :</span>  Fossil India Pvt. Ltd.</p>
<p><span className='font-bold'>Item Weight  : </span>60 g</p>
<p><span className='font-bold'>Item Dimensions LxWxH  :</span>  36 x 35 x 15 Millimeters</p>
<p><span className='font-bold'>Best Sellers Rank: </span>#258 in Watches (<span className='text-blue-700'>See Top 100 in Watches</span>)</p>
<p>#127 in<span className='text-blue-700'> Men's Wrist Watches</span></p>
<p><span className='font-bold'>Customer Reviews:</span> 4.5 out of 5 stars  <span className='pl-4 text-amber-400'>★★★★☆</span> <i  className='pl-3 pr-3  fa-solid fa-angle-down text-slate-900'></i> 16 ratings</p>

</div>





  )
}

export default ProductDet;
if (document.getElementById('ProductDet')) {
  ReactDOM.render(<ProductDet />, document.getElementById('ProductDet'));
}