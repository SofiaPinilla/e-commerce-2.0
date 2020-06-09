<?php

namespace App\Http\Controllers;

use App\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactUsController extends Controller
{
    public function contactUsPost(Request $request)
    {
        $this->validate($request, [
         'name' => 'required',
         'email' => 'required|email',
         'message' => 'required'
         ]);
        ContactUs::create($request->all());
         Mail::send('email',
         array(
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'user_message' => $request->get('message')
         ), function($message)
        {
        $message->to('btabeyondthearmy@gmail.com', 'TecnoShop')
        ->subject('Contact from TecnoShop');
       });
       
    return back()->with('success', 'Thanks for contacting us!'); 
    }
 
}
