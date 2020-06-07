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
        <div class="num_pedido">
            <h5>Nº PEDIDO</h5>
            <span>{{ $order->id }}</span>
        </div>
        <div class="fecha">
            <h5>FECHA</h5>
            <span>{{ $order->created_at }}</span>

        </div>
        <div class="codigo_cliente">
            <h5>A NOMBRE DE:</h5>
            <span>{{ $order->user->name }}</span>

        </div>
    </div>
    <div class="cuerpoTitulo" style="
        flex: 1;
        text-align: center;">
        <div class="codigo">CÓDIGO</div>

        <div class="descripcion" style="
        flex: 1;
        text-align: center;">NOMBRE</div>
        <div class="descripcion" style="
        flex: 1;
        text-align: center;">DESCRIPCIÓN</div>

        <div class="price" style="
        width: 6rem;
        text-align: center;">PRECIO</div>
        <div class="ean" style="
        width: 6rem;
        text-align: center;">EAN</div>
        <div class="cantidad" style="
        width: 6rem;
        text-align: center;">CANT.</div>

    </div>
    <div class="cuerpo" style=" margin: 0.5rem 0;
        border: 1px solid black;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;">
        @foreach ($order->products as $product)
        <div class="producto" style="display: flex;justify-content:space-between;padding: 0.5rem;">
            <div class="cod_prod" styel="
        width: 6rem;
        text-align: center;">{{$product->id}}</div>
            <div class="nombre" style="
        width: 6rem;
        text-align: center;">{{$product->name}}</div>
            <div class="formato" style="
        width: 6rem;
        text-align: center;">{{$product->description}}</div>
            <div class="cantidad" style="
        width: 6rem;
        text-align: center;">{{$product->pivot->units}}</div>
        </div>
        @endforeach
    </div>
</body>

</html>