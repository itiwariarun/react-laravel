import React from 'react'
import ReactDOM from 'react-dom';

function Footer() {
  return (
      <div className='  bg-gray-700 truncate object object-center  h-[30rem]  '>
      <div className=' h-[3rem] text-center  text-slate-50 '><p><a href="#"  className='fa-solid fa-angle-up leading-1 text-slate-900 '></a></p><p  className='leading-3'>Back To Top</p></div>

            <div className='container  min-w-full gap-4 h-[19rem] columns-4 leading-10 text-sm bg-gray-800 text-slate-50  py-3 Border opacity:-50 shadow-2xl shadow-black  '>
        
           
            <div className = " column column-lg  w-full pl-3  h-[19rem] leading-6 pt-12 "><h2 className='font-bold'>Get to Know Us</h2>
<p>About Us</p>
<p>Careers</p>
<p>Press Releases</p>
<p>Amazon Cares</p>
<p>Gift a Smile</p>
<p>Amazon Science</p>
</div>
            
            <div className = " column column-lg  w-full pl-3  h-[14rem] leading-6 pb-9 "><h2 className='font-bold'>Connect with Us</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            
        </div>
          
            <div className = " column column-lg  w-full pl-3    h-[14rem] leading-6 pt-4 "><h2 className='font-bold'>Make Money with Us</h2>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Amazon Global Selling</p>
            <p>Become an Affiliate</p>
            <p>Fulfilment by Amazon</p>
            <p>Advertise Your Products</p>
            <p>Amazon Pay on Merchants</p></div>
        
            <div className = " column column-lg  w-full   h-[15rem] leading-6 pt-10 "><h2 className='font-bold'>Let Us Help You</h2>
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Amazon Assistant Download</p>
            <p>Help</p></div>


</div>
<div className=' h-[8rem] text-center pt-7 leading-7'><p><span className='pr-4 text-slate-50'>MyCart</span>
<select className='bg-gray-900 text-slate-50' name="Language" id="Language">
    <option value="volvo">English</option>
    <option value="saab">Hindi</option>
    <option value="opel">French</option>
    <option value="audi">Dutch</option>
    <option value="audi">Spanish</option>
    <option value="audi">Arabic</option>
    <option value="audi">Urdu</option>
    <option value="audi">Tamil</option>

  </select>
    </p>
    <p className='text-xs text-center text-gray-300 leadin-5'>Australia Brazil Canada China France Germany Italy Japan Mexico Netherlands Poland Singapore<br/> Spain Turkey United Arab Emirates United Kingdom United States</p>

    </div>
      </div>
  )
}

export default Footer;
if (document.getElementById('Footer')) {
  ReactDOM.render(<Footer />, document.getElementById('Footer'));
}