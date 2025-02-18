<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    @vite(['resources/scss/app.scss', 'resources/js/app.js'])
  </head>
  <body>

    <div id="vue-app">

      <header id="header">
        <div class="l-wrapper">
          <a href="#" title="{{ config('app.name', 'Laravel') }}">
            <img src="#" alt="{{ config('app.name', 'Laravel') }}">
          </a>
        </div>
        <div class="mm-wrapper">
          <a class="@if(\Request::is(['#'])) active @endif" href="#" title="Test">
            <span>Test</span>
          </a>
        </div>
        <div class="hb-wrapper">
          @auth
          <a class="logout" href="{{route('logout')}}" title="Esci" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Logout</a>
          @endauth
        </div>
      </header>

      <main>
        {{ $slot }}
      </main>

      @auth

        <form id="logout-form" action="{{route('logout')}}" method="POST">
          @csrf
        </form>

      @endauth

    </div>

    <script>
      window.Laravel = {!! json_encode([
       'api_token' => $shared_data['current_user'] ? $shared_data['current_user']->api_token : null,
      ]) !!};
    </script>
  </body>
</html>
