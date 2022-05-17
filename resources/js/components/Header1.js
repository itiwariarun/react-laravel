import React from 'react'

function Header() {
  return (
    <nav className='truncate bg-gray-900 shadow-3xl shadow-black'>

            <div className='container flex h-12 min-w-full gap-4 pt-1 pb-3 bg-gray-800 border shadow-2xl text-slate-50 columns-6 border-primary Border opacity:-50 shadow-black '>
        
<div className = " column column-xs  w-full pl-5 h-[1.5rem]">My Cart</div>
        
<div className = "w-full pb-1 column column-lg bg-slate-50">
 <span><select className='w-[3rem]  text-sm h-[2rem] pt-1 text-slate-900 bg-yellow-700 ' name="Language" id="Language">
    <option value="volvo">All</option>
    <option value="saab">Books</option>
    <option value="opel">Clothing</option>
    <option value="audi">Mobiles</option>
    <option value="audi">Electronics</option>
    <option value="audi">Home Kitchen</option>
    <option value="audi">Computers</option>
    <option value="audi">Fashion</option>

  </select><input className='h-[2rem] w-[16rem] ' type="text" placeholder="Search Products"/>    
   <button className='w-[2rem] text-sm 'type="submit"> <p><i className = "bg-yellow-700 fa fa-search text-slate-900 w-[2rem] h-[2rem] pt-3" class=""></i></p></button>
</span>
</div>
<div className = "w-full pt-1 text-gray-900 column column-lg"><select className = "bg-yellow-700" name="country"  id="Language">
    <option value="volvo">🇮🇳</option>
    <option value="saab">🇺🇳</option>
    <option value="opel">🇦🇺</option>
    <option value="audi">🇧🇩</option>
    <option value="audi">🇨🇦</option>
   

  </select></div>
<div className = "w-full column column-lg ">Account Settings</div>
<div className = "w-full column column-lg">My Orders</div>
<div className = "pr-4 ">CustomerService</div>




        
    </div>
    </nav>

  )
}

export default Header
if (document.getElementById('Header')) {
  ReactDOM.render(<Header />, document.getElementById('Header'));
}