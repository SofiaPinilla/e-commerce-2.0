# e-commerce-2.0
Este proyecto es un e-commerce, donde se puede ver los productos y buscar los que desemos en tiempo real, ordenarlos por precio o por
categoria, añadirlos al carrito o a nuestra lista de deseos y comentar sobre cualquier producto. 
Cuenta con una vista de admin, donde se pueden buscar los productos existentes, editarlos, borrarlos, o crear uno nuevo.
Así mismo, cuenta con guards que protegen la página de manera que si no estas conectad@ no puedes acceder a ciertas vistas de TecnoShop.
Además tenemos nuestro propio perfil donde podemos ver nuestros datos, nuestros pedidos y nuestra lista de deseos.
También cuenta con un formulario de contacto donde se puede contactar con atención al cliente, y una vista de "about" donde se habla un 
poco a cerca de TecnoShop.

## Tecnologías que he utilizado 🛠️

>Mi proyecto esta creado con Angular en el frontend y Bulma como framework de css. Y con PHP Laravel en el backend y MySQL como base de
datos.

#### Preview
Vista de home:

![foto](frontend/src/assets/images/foto1.PNG) 

![foto](frontend/src/assets/images/foto2.PNG) 

Vista products:

![foto](frontend/src/assets/images/foto3.PNG) 

Aquí puedes buscar productos en tiempo real y filtar por precio o por categoria.

![foto](frontend/src/assets/images/busquedayfiltros.gif) 
 
 En el detalle del producto, podemos ver su información mas detallada, añadirlo al carrito o a nuestra lista de deseos  y comentar.
 
 ![foto](frontend/src/assets/images/detail.PNG) 
 
 Aquí accedemos al carrito donde podemos seleccionar la cantidad deseada, eliminar el producto que no queremos y finalizar la compra.
 
 ![foto](frontend/src/assets/images/carrito.gif) 
 
TecnoShop también cuenta con la vista de Admin a la cual solo puedes acceder si tienes el role de admin.

 En nuestra vista de admin podemos buscar los diferentes productos, además de contar con una páginación.
 
 ![foto](frontend/src/assets/images/busquedatiemporealAdmin.gif) 
 
Además podemos crear, editar y borrar productos:

![foto](frontend/src/assets/images/create.gif) 

![foto](frontend/src/assets/images/edit,delete-product.gif) 


Vista del perfil donde podemos encontrar nuestros pedidos y nuestros productos en la lista de deseos:

![foto](frontend/src/assets/images/perfilorders.PNG) 

![foto](frontend/src/assets/images/listadeseos.PNG) 

Página 404:

![foto](frontend/src/assets/images/notfound.PNG) 

Vista de contacto:
![foto](frontend/src/assets/images/contact.PNG) 

Vista de about:
![foto](frontend/src/assets/images/foto4.PNG) 

Vista de registro:
![foto](frontend/src/assets/images/registro.PNG)

Vista de login:
![foto](frontend/src/assets/images/login.PNG) 

Guards:
![foto](frontend/src/assets/images/guards.gif) 

### Pre-requisitos 📋

Para que la aplicación funciona debes tener instalado Angular y PHP Laravel.

```
npm install -g @angular/cli
```
Para poder utilizar Laravel debes tener composer instalada si aún no lo tienes lo puedes descargar [aquí](https://getcomposer.org/download/)
```
composer global require "laravel/installer"
```

### Instalación 🔧

Para poder iniciar el proyecto primero haz un clone:

```
git clone https://github.com/SofiaPinilla/e-commerce-2.0.git
```
Una vez clonado el proyecto, debes instalar los modulos necesarios con npm:

```
cd frontend y npm install y cd backend y npm install
```

Ya esta listo el proyecto, ahora para iniciarlo situate en la carpeta inicial:
```
npm start
```


---
Hecho por [Sofía Pinilla](https://github.com/SofiaPinilla) 😊
