<!doctype html>
<html>

<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Order</title>

</head>
<style>
    * {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body {
        padding: 2.5rem;
    }
    .logoHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .headers {
        display: flex;
        justify-content: space-between;
    }
    .cliente,
    .proveedor {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        border: 1px solid black;
        border-radius: 15px;
        width: 40%;
    }
    .subheaders {
        display: flex;
        justify-content: space-between;
        width: 70vw;
    }
    .subheaders div {
        border: 1px solid black;
        border-radius: 15px;
        margin: 0.5rem 0;
    }
    .subheaders div h5 {
        padding: 0.4rem;
        background-color: #e3e3e3;
        border: 1px solid black;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        text-align: center;
    }
    .cuerpoTitulo div {
        padding: 0.4rem;
        background-color: #e3e3e3;
        border: 1px solid black;
    }
    .subheaders div span {
        padding: 1rem;
    }
    .cuerpo {
        margin: 0.5rem 0;
        border: 1px solid black;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .cuerpoTitulo,
    .producto {
        display: flex;
    }
    .cod_prod,
    .nombre,
    .formato,
    .ean,
    .cantidad {
        width: 6rem;
        text-align: center;
    }
    .producto {
        padding: 0.5rem;
    }
    .producto .nombre {
        flex: 1;
    }
    .cuerpoTitulo .descripcion {
        flex: 1;
        text-align: center;
    }
    .codigo {
        border-top-left-radius: 15px;
    }
    .descripcion {
        border-radius: 0px;
    }
    .formato {
        border-radius: 0px
    }
    .ean {
        border-radius: 0px
    }
    .cantidad {
        border-top-right-radius: 15px;
    }
</style>

<body class="emailPedido">
    <div class="headers" style="display: flex;">
        <div class="cliente">
            <b>TecnoShop</b>
            <b>TecnoShop S. A.</b>

            <span>
                28006
                Valencia
            </span>
            <span>Valencia</span>

            <span>
                CIF:B-4567894X
            </span>
            <span>
                TELF:964 456 789
            </span>
        </div>
    </div>
    <div class="subheaders" style="display: flex;">
        <div class="num_pedido" style="margin: 0.5rem;">
            <h5>Nº PEDIDO <span>{{ $order->id }}</span></h5>
            
        </div>
        <div class="fecha" style="margin: 0.5rem;">
            <h5>FECHA <span>{{ $order->created_at }}</span></h5>
            

        </div>
        <div class="codigo_cliente" style="margin: 0.5rem;">
            <h5>A NOMBRE DE:  <span>{{ $order->user->name }}</span></h5>
           

        </div>
    </div>
    <div class="cuerpo" style=" margin: 0.5rem 0;
        border: 1px solid black;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;">
        @foreach ($order->products as $product)
        <div class="producto" style="display: flex;justify-content:space-between;padding: 0.5rem; margin: 0.5rem;">
        
            <div class="nombre" style="
        width: 6rem;
        text-align: center;">{{$product->name}}</div>
            <div class="formato" style="
        width: 6rem;
        text-align: center;">{{$product->price}} €</div>
            <div class="cantidad" style="
        width: 6rem;
        text-align: center;">{{$product->pivot->units}} units</div>
        </div>
      
        @endforeach
    </div>
</body>

</html>