@extends('layouts.app')

@section('content')
<div class="container pt-6">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="text-xl font-bold text-center bg-gray-800 card-header text-slate-50">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="mb-3 row">
                            <label for="name" class="font-serif text-xl col-md-4 col-form-label text-md-end">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control hover:shadow-xl hover:shadow-gray-500 @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="email" class="font-serif text-xl col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control hover:shadow-xl hover:shadow-gray-500 @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="password" class="font-serif text-xl col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control hover:shadow-xl hover:shadow-gray-500 @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="password-confirm" class="font-serif text-xl col-md-4 col-form-label text-md-end">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control hover:shadow-xl hover:shadow-gray-500" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                      <center>  <div class="">
                            <div class="">
                                <button type="submit" class="px-4 py-2 bg-blue-500 border-0 shadow-xl shadow-gray-600 rounded-2xl">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div></center>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
