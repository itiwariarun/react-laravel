<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>React-Laravel</title>

        
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdn.tailwindcss.com"></script>

        
        <style>
        </style>

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    </head>
    <body class="min-h-full">
      
         
            <nav class='truncate bg-gray-900 shadow-3xl shadow-black'>
        
                    <div class='container flex h-12 min-w-full gap-4 pt-1 pb-3 bg-gray-800 border shadow-2xl text-slate-50 columns-8 border-primary Border opacity:-50 shadow-black '>
                
        <div class = " column column-xs  w-full pl-5 h-[1.5rem]">My Cart</div>
                
        <div class = "w-[3rem] h-[1.5rem]   column column-sm bg-gray-800">
            <span><select class='w-[3rem]  align-left text-sm h-[1.5rem] pt-0 mb-1 mr-1 text-slate-900 bg-yellow-700 ' name="Language" id="Language">
               <option value="volvo">All</option>
               <option value="saab">Books</option>
               <option value="opel">Clothing</option>
               <option value="audi">Mobiles</option>
               <option value="audi">Electronics</option>
               <option value="audi">Home Kitchen</option>
               <option value="audi">Computers</option>
               <option value="audi">Fashion</option>
           
             </select><input  class="mb-3 md:w-[22rem]" type="text" placeholder="search"/>    
              <button class='mt-1 mb-1 text-sm 'type="submit"> <p><i class = "bg-yellow-700 fa fa-search text-slate-900 w-[3rem] pt-2 h-[2rem]" class=""></i></p></button>
           </span>
           </div>
           <div class = "w-full pt-2.5 text-gray-900 pl-80 "><select class = "ml-20 bg-yellow-700" name="country"  id="Language">
               <option value="Language">🇮🇳</option>
               <option value="Language">🇺🇳</option>
               <option value="Language">🇦🇺</option>
               <option value="Language">🇧🇩</option>
               <option value="Language">🇨🇦</option>
              
           
           
        
          </select></div>
        <div class = "w-full column column-lg"><a href="/login">My Orders</a></div>
        
        <div class=" w-full column column-lg    columns-3  h-[3rem]">
            @if (Route::has('login'))
                <div class="w-full column column-lg">
                    @auth
                    <div>
                        <a href="{{ url('/home') }}" >Home</a>
                    </div>
                    @else
                    <div>
                        <a href="{{ route('login') }}" >Log in</a>
                    </div>
<div>
                        @if (Route::has('register'))
<div >
                            <a href="{{ route('register') }}"  >Register</a></div>
                        @endif
</div>
                    @endauthhttps://github.com/itiwariarun/react-laravel.git
                </div>
            @endif
        </div>
        <div class = "pr-10 ">CustomerService</div>

        
            </nav>
            
        
            <div id="Header1" >
     
        </div>
        <div id="Menu" >
     
        </div> <div id="Categories" >
     
        </div> <div id="Ad" >
     
        </div> <div id="Product" >
     
        </div> <div id="BuyItWith" >
     
        </div> <div id="SpecialOffer" >
     
        </div>
        <div id="AboutCompany" >
     
        </div> <div id="ProductSpec" >
     
        </div> <div id="ProductDet" >
     
        </div>
        <div id="Footer" >
     
        </div>
        <div id="Footer2" >
     
        </div>
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
