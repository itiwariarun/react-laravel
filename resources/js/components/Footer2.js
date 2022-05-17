import React from 'react'
import ReactDOM from 'react-dom';

function Footer2() {
  return (
      <div className='  bg-gray-700 truncate object object-center  h-[1.5rem]  '>
      <div className=' h-[1rem] text-center text-sm text-slate-50 '><p>Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 1996-2022, MyCart.com, Inc. or its affiliates</p></div>

    


  

    </div>
  )
}

export default Footer2;
if (document.getElementById('Footer2')) {
  ReactDOM.render(<Footer2 />, document.getElementById('Footer2'));
}