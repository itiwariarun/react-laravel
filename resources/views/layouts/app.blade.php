<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>React-Laravel</title>

    <script src="{{ asset('js/app.js') }}" defer></script>

    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdn.tailwindcss.com"></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>

    <div id="app" class="bg-slate-300">
        
         
        <nav class='truncate bg-gray-900 shadow-3xl shadow-black'>
        
            <div class='container flex h-12 min-w-full gap-4 pt-1 pb-3 space-x-20 bg-gray-800 border shadow-2xl text-slate-50 columns-9 border-primary Border opacity:-50 shadow-black '>
        
<div class = "  w-full pl-5 pt-2 h-[1.5rem]">My Cart</div>
<div class = "  w-full pl-5 pt-2 h-[1.5rem]" ><a href="/">Home</a></div>

<div class = "w-[3rem] h-[1rem] pb-1 column column-sm bg-gray-800">
 <span><select class='w-[3rem]  align-left text-sm h-[1.5rem] pt-0 text-slate-900 bg-yellow-700 ' name="Language" id="Language">
    <option value="volvo">All</option>
    <option value="saab">Books</option>
    <option value="opel">Clothing</option>
    <option value="audi">Mobiles</option>
    <option value="audi">Electronics</option>
    <option value="audi">Home Kitchen</option>
    <option value="audi">Computers</option>
    <option value="audi">Fashion</option>

  </select><input  class="mb-3 md:w-[22rem]" type="text" placeholder="search"/>    
   <button class='mt-2 text-sm 'type="submit"> <p><i class = "bg-yellow-700 fa fa-search text-slate-900 w-[3rem] pt-2 h-[2rem]" class=""></i></p></button>
</span>
</div>
<div class = "w-full pt-2.5 text-gray-900 pl-80 "><select class = "bg-yellow-700" name="country"  id="Language">
    <option value="Language">🇮🇳</option>
    <option value="Language">🇺🇳</option>
    <option value="Language">🇦🇺</option>
    <option value="Language">🇧🇩</option>
    <option value="Language">🇨🇦</option>
   

  </select></div>
                    <div >
                        
                        @guest
                            @if (Route::has('login'))
                                <div class=" text-slate-50">
                                    <a class="" href="{{ route('login') }}">{{ __('Login') }}</a>
                                
                            @endif

                            @if (Route::has('register'))
                                <div class="">
                                    <a class="" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </div>
                            @endif
                        @else
                            <div class="container space-x-20 columns-2">
                              <div class="pt-2 ">  <a href="#"  >
                                    {{ Auth::user()->name }}
                                </a>
                              </div>
                                <div class="pt-2 text-white ">
                                    <a href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </div>
                        @endguest
                    </div><div class = "w-full pt-2 column column-lg">My Orders</div>


<div class = "pt-2 pr-10">CustomerService</div>


    
      
            
               


                </div>
            </div>
        </nav>

        <div class="py-0">
            @yield('content')
        </div>
    </div>

</nav>
</div>
</body>
</html>
