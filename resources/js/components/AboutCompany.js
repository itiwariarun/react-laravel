import React from 'react'
import download from './download.jpg'
import ReactDOM from 'react-dom';

import a from './1.jpg'
import b from './2.jpg'
import c from './3.jpg'
import d from './4.jpg'

function AboutCompany() {
  return (
      <div>
    <nav  className='object-center mb-3 truncate bg-gray-200 border-2 object h-18 border-b-gray-500' >
<h1 className='pl-8 text-3xl font-bold'>From The Manufacturer</h1>
            <div className='container  bg-gray-200 min-w-full gap-0 columns-2  h-[42rem]    opacity:-50 shadow-2xl shadow-black  '>
            <div className='container  bg-gray-200 ml-16 w-11/12 gap-0  h-[42rem] Border opacity:-50 shadow-2xl shadow-black  '>
            <div className='container truncate leading-8 columns-2 pl-4 pt-4 bg-gray-200 min-w-full  gap-0  h-[21rem]    Border opacity:-50 shadow-2xl shadow-black  '>
<div><img src={b}/></div>
<div className='pt-8 pr-6'><h2 className='font-bold'>About Us</h2><p><span className='font-bold'>Armani Exchange </span> was created by Giorgio Armani <br/>in 1991. The brand style is inspired by the bold and <br/>youthful street culture. Made for the fast-fashioned <br/>generation, Armani focusses on unique,<br/> urban designs.</p></div>
            </div>
            <div className='container truncate columns-2 leading-8 pl-4 pt-5 bg-gray-200 min-w-full  gap-0  h-[21rem]    Border opacity:-50 shadow-2xl shadow-black  '>
            <div>            <img src={a}/>
</div>
            <div className='pt-8 pr-8'><h2 className='font-bold'>Water-resistant</h2><p>
            
3ATM: Can withstand brief water immersions <br/>or splashes<br/>

5 ATM: Safe to wear around household sinks <br/>or in shallow waters<br/>

10 ATM: Suitable for bathing, swimming <br/>or snorkelling</p></div>

            </div>

            </div>
            <div className='container truncate bg-gray-200 w-11/12 ml-6 gap-0  h-[42rem]    Border opacity:-50 shadow-2xl shadow-black  '>
            <div className='container leading-8 columns-2 pl-4 pt-4 bg-gray-200 min-w-full  gap-0  h-[21rem]   Border opacity:-50 shadow-2xl shadow-black  '>
            <div>            <img src={c}/>
</div>
<div className='pt-8 pr-8'><h2 className='font-bold'>Premium packaging</h2><p>
We believe that packaging is the face of a brand.<br/> Thus, our premium packages are a seamless blend<br/> of form & function and an extension of our<br/> brand promise.</p></div>

            </div>
            
            <div className='container truncate leading-8 columns-2 pt-5 pl-4 bg-gray-200 min-w-full  gap-0  h-[21rem]    Border opacity:-50 shadow-2xl shadow-black  '>
            
            <div><img src={d}/></div>
            <div className='pt-8'>
            <h1 className='font-bold'>About the movement</h1>
<p>Three-hand Quartz: This electronic watch<br/> movement features a quartz crystal that <br/>oscillates when a current is applied to it.</p>

<p>Multifunction: Quartz movement typically<br/> built into three separate sub-eyes for <br/>the day of the week, date of the month <br/>and 24-hour time.</p>

<p>Chronograph: A multifunction watch with<br/> stopwatch functionality.</p>

            </div>

            </div>

            </div>




</div>
</nav>
         
      
        </div>
  )
}

export default AboutCompany;
if (document.getElementById('AboutCompany')) {
  ReactDOM.render(<AboutCompany />, document.getElementById('AboutCompany'));
}