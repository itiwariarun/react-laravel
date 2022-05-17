import React from 'react'
import ReactDOM from 'react-dom';

function ProductSpec() {
  return (
    <div className='container  min-w-full h-[60rem] truncate  '>
<h2 className='ml-4 text-2xl font-bold'>Product Specifications</h2>
<h3 className='ml-4 text-lg font-bold'>Watch Information</h3>
<table className='w-full m-2 border-2 border-gray-200'>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Band Colour 
    </td>
    <td className='border-2 border-gray-200'>
    Black    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Band Material	
    </td>
    <td className='border-2 border-gray-200'>
    Silicone    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Band Width	   </td>
    <td className='border-2 border-gray-200'>
    22 Millimeters     </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Bezel Material	    </td>
    <td className='border-2 border-gray-200'>
    Resin    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Brand	   </td>
    <td className='border-2 border-gray-200'>
    Armani Exchange     </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Case Diameter	
  </td>
    <td className='border-2 border-gray-200'>
    44 Millimeters    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Case Material	
    </td>
    <td className='border-2 border-gray-200'>
    Resin    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Case Thickness	
    </td>
    <td className='border-2 border-gray-200'>
    13 Millimeters    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Clasp	
    </td>
    <td className='border-2 border-gray-200 '>
    Buckle    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Dial Colour	
    </td>
    <td className='border-2 border-gray-200'>
    Black    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Crystal Material	
    </td>
    <td className='border-2 border-gray-200'>
    Mineral    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Display Type	
    </td>
    <td className='border-2 border-gray-200'>
    Analog    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Case Shape	
    </td>
    <td className='border-2 border-gray-200'>
    Round    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Item Weight	
    </td>
    <td className='border-2 border-gray-200'>
    60 Grams    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Model Number	
    </td>
    <td className='border-2 border-gray-200'>
    AX1343    </td>
</tr>
<tr>
    <td className='border-gray-200 w-1/3border-2 bg-orange-50'>
    Part Number	

     </td>
    <td className='border-2 border-gray-200'>
    AX1343    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Special Features	
    </td>
    <td className='border-2 border-gray-200'>
    Water Resistant    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Water Resistance Depth	     </td>
    <td className='border-2 border-gray-200'>
    30 Meters    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Movement	    </td>
    <td className='border-2 border-gray-200'>
    Quartz    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
Warranty  Description  </td>
    <td className='border-2 border-gray-200'>
    <p>2 Years manufacturer warranty from the date of purchase</p>  
    <p>How to avail Warranty?</p>  
    <p>• Register your product on https://www.fossilcare.com/registration/</p>  
    <p>• To claim your warranty, produce original bill copy/invoice at authorized<br/> fossil service center (Warranty card & stamp is not<br/> mandatory for online purchases)</p>  
    <p>• For any service related enquiries and feedback, call Fossil India toll <br/>free number 000-800-9190-951 Monday to Sunday, 10.00 am to 7.00 <br/>pm or mail at service.in@fossil.com.</p>    </td>
</tr>
<tr>
    <td className='w-1/3 border-2 border-gray-200 bg-orange-50'>
    Warranty    </td>
    <td className='border-2 border-gray-200'>
    If this product is sold by Amazon, please review the manufacturer’s website<br/> for warranty information. If this product is sold by another party, <br/>please contact the seller directly for warranty information<br/> for this product. You may also be able to find warranty <br/>information on the manufacturer’s website.    </td>
</tr>



    </table>


</div>





  )
}

export default ProductSpec;
if (document.getElementById('ProductSpec')) {
    ReactDOM.render(<ProductSpec />, document.getElementById('ProductSpec'));
  }