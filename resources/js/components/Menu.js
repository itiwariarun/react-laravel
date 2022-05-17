import React from 'react'
import ReactDOM from 'react-dom';

function Menu() {
  return (
      <div>
    <nav  className='object-center truncate bg-gray-900 object' >

            <div className='hidden h-12 min-w-full gap-4 py-3 bg-gray-700 shadow-2xl md:block container-sm columns-10 text-slate-50 Border opacity:-50 shadow-black '>
        
<div className = "w-full pl-3 column column-lg">&#8801;All</div>
<div className = "w-full column column-lg">BestSellers</div>
<div className = "w-full column column-lg">Mobles</div>
<div className = "w-full column column-lg">Fashion</div>
<div className = "w-full column column-lg">Electronics</div>
<div className = "w-full column column-lg">HomeKitchen</div>
<div className = "w-full column column-lg ">New&nbsp;Releases</div>
<div className = "w-full column column-lg">ToysGames</div>
<div className = "w-full column column-lg ">Computers</div>
<div className = "w-full column column-lg">Books</div>

</div>
</nav>
   
      </div>
  )
}

export default Menu;
if (document.getElementById('Menu')) {
  ReactDOM.render(<Menu />, document.getElementById('Menu'));
}