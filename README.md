
# API Tienda en linea

API tienda de Bsale es una api la cual te ayuda a obtener los datos de los productos que se encuentran en la base de datos de Bsale.
Asi como tambien traer filtrado por categoria, hacer una busqueda de producto, asi como tambien ordenar los productos.

Esta api se comunica con una base de datos externa la cual se conecta con el api para ser consumida por el cliente.
La conexión se hace por medio del framework de lavarel el cual se comunica de la siguiente dirección:

mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com

La cual es necesaria una serie de parametros para hacer uso de esta base de datos.
Son los siguientes:

Motor: MySQL

● Host: mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com  
● Usuario: bsale_test  
● Contraseña: bsale_test  
● Nombre db: bsale_test

El consumo de la API de Bsale Tienda puede ser consumida del siguiente link:  
https://api-tienda-l7nar1kcp-brandonblain.vercel.app/api

Ejemplo:  
https://api-tienda-l7nar1kcp-brandonblain.vercel.app/api/api/AllBebidas

Para hacer uso del endpoint de Get all Productos.  
Retornar todos los productos.

Para hacer uso del siguiente link es necesario hacer uso de los endpoint correspondientes, en los pasos siguientes:
## API Referencias

### Get all Productos

Retorna todos los productos de la base de datos.

```http
  GET /api/AllBebidas
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | | No requiere parametros |

Ejemplo de respuesta:

```http
[  
    {
        "id": 53,  
        "name": "Mani Sin Sal",  
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",  
        "price": 500,  
        "discount": 0,  
        "category": 5,  
        "get_category": {  
            "id": 5,  
            "name": "snack"  
        }  
    }  
]
```

### Get by Category

Retorna los productos por categoria de producto.

```http
  GET /api/getByCategory
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|      | | No requiere parametros |

Ejemplo de respuesta:

```http
  {
    "Todos": [
        {
            "id": 53,
            "name": "Mani Sin Sal",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",
            "price": 500,
            "discount": 0,
            "category": 5,
            "get_category": {
                "id": 5,
                "name": "snack"
            }
        }
    ],
    "bebidaEnergetica": [
        {
            "id": 35,
            "name": "ENERGETICA MAKKA DRINKS",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/makka-drinks-250ml0455.jpg",
            "price": 1190,
            "discount": 0,
            "category": 1
        },
    ]    
  }      
```

### Get by Category

Retorna los productos buscados por nombre o parte del nombre.

```http
  POST /api/bebidas/buscar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|  `wordSearch` | `string` | Producto a buscar |

Ejemplo de respuesta:

```http
  [  
    {
        "id": 53,  
        "name": "Mani Sin Sal",  
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",  
        "price": 500,  
        "discount": 0,  
        "category": 5,  
    }  
]
```

### Get by Category

Retorna los productos acomodados por mayor o menor precio o por nombre Asc o Desc, o Descuento Mayor.

```http
  POST /api/bebidas/Order
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|   `order` | `string` | Tipo de ordenamiento |
|   `producto` | `string` | Categoria de producto a ordenar |

Ejemplo de respuesta:

```http
[
    {
            "id": 35,
            "name": "ENERGETICA MAKKA DRINKS",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/makka-drinks-250ml0455.jpg",
            "price": 1190,
            "discount": 0,
            "category": 1
    }
]
```





## Authors

- [@BrandonMartinez](https://github.com/brandonblain/ApiTienda)


