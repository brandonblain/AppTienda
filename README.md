
# Web Application Tienda en linea

Bsale Tienda en linea es una aplicación web de una tienda en linea para adiquirir productos de diferentes categorias.
la que se pueden observar imágenes de los productos, leer sus especificaciones. 
Este servicio le da al cliente rapidez en la compra, la posibilidad de hacerlo desde cualquier lugar y a cualquier hora del día. 

![App Screenshot](https://drive.google.com/uc?export=view&id=19yurM8tBtmKx7l2_ps-BprmUG0E2j0pT&rl)


## Funciones

### Categorización
Se muestran en la web productos agrupados por la categoría a la que pertenecen, con su descripción (Precio, Nombre, Imagen, Descuento).
Esto se puede usar al hacer click en el botón de categorias ubicado en la parte superior o lateral de la aplicación. 

![App Screenshot](https://drive.google.com/uc?export=view&id=12R6hY5xJD84WHlakcCyHiNcR7HiUk5Kh)

### Busqueda
El usuario puede hacer busquedas de algun producto en específico haciendo uso de la barra de busqueda de la aplicación, ubicada en la parte superior derecha de la pantalla.

![App Screenshot](https://drive.google.com/uc?export=view&id=1YvY9w5Zk0QYf9JccjYjj5Hxgn2yUu6EQ)


### Ordenamiento
Si el usuario lo requiere se puede hacer un ordenamiento por:

#### Nombre A-Z        
Ordenamiento comenzando por la letra A hata la Z
#### Nombre Z-A        
Ordenamiento comenzando por la letra A hata la Z
#### Precio Mayor      
Ordenamiento por el mayor precio de los productos hasta el menor
#### Precio Menor
Ordenamiento por el menor precio de los productos hasta el mayor
#### Mayor Descuento
Ordenamiento de Mayor descuento del producto

![App Screenshot](https://drive.google.com/uc?export=view&id=1q1lhnsKXiE6yexrGJTzGEzAOgxcqBGL0)


#### *Estos ordenamientos se encuentran ubicados del lado izquierdo de la pantalla en una barra desplegable.

La esta haciendo uso de una Api Rest alojada en un servidor en la web, con la dirección.
https://api-tienda-l7nar1kcp-brandonblain.vercel.app/api cuyo lenguaje y framework es laravel
. Los cuales del lado del cliente, los datos de productos deben llegan filtrados al cliente. Tambien se implementaron filtros por atributo, ordenar productos y categorización.

La aplicación de cliente tiene que esta desarrollada con vanilla javascript
(javascript puro), sin ningún framework, usando la librería
, boopstrap y Jquery.

Finalmente, la aplicación y el repositorio con el código en un hosting que es Netlity.
Con la dirección de https://brandontiendaapp.netlify.app/index.html

## Authors

- [@BrandonMartinez](https://github.com/brandonblain/ApiTienda)


