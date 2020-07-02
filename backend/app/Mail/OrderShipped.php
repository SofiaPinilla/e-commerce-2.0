<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderShipped extends Mailable
{
    use Queueable, SerializesModels;
    public $order;
    /**
     
     * @return void
     */
    public function __construct($order)
    {
       $this->order =$order;
    }

    /**
    
     * @return $this
     */
    public function build()
    {
        return $this->from('noreply@armaslocas.com')->view('emails.order-email');
    }
}
