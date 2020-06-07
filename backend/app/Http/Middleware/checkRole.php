<?php

namespace App\Http\Middleware;

use Closure;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $roles)
    {
         //se puede usar Auth::user()->role;
         $role = $request->user()->role;//rol del usuario que quiere realizar la acción
         $allowedRoles = explode('|', $roles);//roles permitidos vienen en string y los convertimos en array
         // dd($allowedRoles,$role,in_array($role,$allowedRoles));
         if (!in_array($role, $allowedRoles)) {//in_array es como includes comprueba si el $role esta incluido en nuestra array $allowedRoles, en caso de no estar el flujo se corta aquí
             return response(['message' => 'You are not allowed to perform this action'], 403);
         }
         return $next($request);
    }
}
