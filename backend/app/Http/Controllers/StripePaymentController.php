<?php

namespace App\Http\Controllers;
   
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Customer;
use Stripe\Charge;
   
class StripePaymentController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
 
  
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripePost(Request $request)
    {
        try {
            Stripe::setApiKey(config('services.stripe.secret'));
        $customer = Customer::create(array(
                'email' => $request->stripeEmail,
                'source' => $request->stripeToken
            ));
        $charge = Charge::create(array(
                'customer' => $customer->id,
                'amount' => 1990,
                'currency' => 'usd'
            ));
        return 'Cargo exitoso!';
        } catch (\Exception $ex) {
            return $ex->getMessage();
        }
    }
}