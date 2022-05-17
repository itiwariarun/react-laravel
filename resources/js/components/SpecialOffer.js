import React from 'react'
import ReactDOM from 'react-dom';

function SpecialOffer() {
  return (
    <div className='container  min-w-full h-[13.5rem] truncate m-3  '>
<h2 className='bg-slate-50  w-full h-[2rem] font-bold text-2xl mt-3 ml-2'>Special offers and product promotions</h2>


<ul><li> • 10% Instant Discount up to INR 2000 on Bank of Baroda Credit Card EMI Transactions. Minimum purchase value INR 7500.<span className='text-blue-700'> Here's how<i  className='pl-3 pr-3  fa-solid fa-angle-down text-slate-900'></i></span></li>
<li> • 10% Instant Discount up to INR 1500 on Bank of Baroda Credit Card (Non EMI) Transactions. Minimum purchase value INR 7500. <span className='text-blue-700'> Here's how<i  className='pl-3 pr-3  fa-solid fa-angle-down text-slate-900'></i></span></li>
<li> • No cost EMI available on select cards. Please check 'EMI options' above for more details.<span className='text-blue-700'> Here's how<i  className='pl-3 pr-3 fa-solid fa-angle-down text-slate-900'></i></span></li>
<li> • Get GST invoice and save up to 28% on business purchases. <span className='text-blue-700'> Here's how<i  className='pl-3 pr-3  fa-solid fa-angle-down text-slate-900'></i></span></li></ul>



</div>





  )
}

export default SpecialOffer;
if (document.getElementById('SpecialOffer')) {
  ReactDOM.render(<SpecialOffer />, document.getElementById('SpecialOffer'));
}