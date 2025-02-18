<?php

use Carbon\Carbon;

use Illuminate\Http\Request;

use App\Models\User;

Route::get('/user', function(Request $request){
  // Getting current user
    $current_user = auth('sanctum')->user();
  // Creating response array
    $response = array(
      'current_user' => $current_user,
    );
  // Return response
    return response()->json($response);
});
