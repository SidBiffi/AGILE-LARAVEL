<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Facades\Auth;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   */
  public function register(): void
  {
    //
  }

  /**
   * Bootstrap any application services.
   */
  public function boot(): void
  {
    // Using view composer to set following variables globally
    view()->composer('*',function($view){
      // Getting current user
        $current_user = Auth::user();

      $shared_data = array(
        'assets_version' => '2025_01_01',
        'current_user' => $current_user,
      );

      $view->with('shared_data', $shared_data);
    });
  }
}
