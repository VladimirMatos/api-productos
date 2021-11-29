# API Gestor de productos
Esta API podemos Lista,Crear,Eliminar y Editar productos con sus respectivos codigos de barras a los cuales se le puede aplicar CRUD

## ENDPOINT
https://api-productos.ngrok.io/api/

## METODOS
GET/POST/DELETE/PATCH
## Recomendacion
* Probar los metodos en una aplicacion para probar todos los metodos. Recomiendo [Insomnia](https://insomnia.rest) y [Postman](https://www.postman.com) .
* Crear primero un producto para luego probrar los demas metodos.

# Productos
## Mostrar los productos 
### Request
######  `GET /products/`
#### Ejemplo URL
 `https://api-productos.ngrok.io/api/products/` 
### Response Json

    [
        {
         "id_producto": 1,
         "nombre": "RedDraon K551",
         "precio": 15000,
         "numbarcode": 1798847477416
        },
        {
         "id_producto": 2,
         "nombre": "RedDragon K55R",
         "precio": 15000,
         "numbarcode": 1557854947595
        }
    ]
### Mostrar producto usando el ID del producto
### Request
##### `GET /products/:id`
#### Ejemplo de :id
##### :id = "id_producto": 1

#### Ejemplo URL
`https://api-productos.ngrok.io/api/products/1`

### Response Json
    [
     
       {
        "id_producto": 1,
        "nombre": "RedDraon K551",
        "precio": 15000,
        "numbarcode": 1770879470437
       }
    ]  
### Mostrar producto usando el codigo de barra del producto
### Request
###### `GET /barcode/:barCode`
##### :barCode = "numbarcode": 1770879470437
#### Ejemplo URL
`https://api-productos.ngrok.io/api/barcode/1770879470437`

### Response Json
    [
        {
          "id_producto": 1,
          "nombre": "RedDraon K551",
          "precio": 15000,
          "numbarcode": 1770879470437
        }
    ]
        
## Crear un nuevo producto
### Request
##### `POST /products`
### Ejemplo URL
`https://api-productos.ngrok.io/api/products`
### Body Json
    {
	"nombre": "Logitech G915 TKL",
	"categoria":"Teclados",
	"precio": 10000
    }

### Response Json
  [
  
     {
         "id_producto": 1,
        "nombre": "RedDraon K551",
        "precio": 15000,
        "numbarcode": 1476636354324
     },
     {
        "id_producto": 2,
        "nombre": "RedDragon K55R",
        "precio": 15000,
        "numbarcode": 1709616956496
     },
     {
        "id_producto": 3,
        "nombre": "Logitech G915 TKL",
        "precio": 10000,
        "numbarcode": 1318175747169
     }
  ]

## Editar producto
### Request
#### `PATCH /products/:id`
#### Ejemplo de :id
##### :id = "id_producto": 1
#### Ejemplo URL
`https://api-productos.ngrok.io/api/products/1`
### Body Json
    {
	"nombre": "RAZER HUNTSMAN V2",
	"categoria":"Teclados",
	"precio": 18000
    }
### Response Json
{

    "message": "Producto editado"
  
}

## Eliminar producto
### Eliminar producto usando ID
### Request
#### `DELETE /products/:id`
#### Ejemplo de :id
##### :id = "id_producto": 1
#### Ejemplo URL
`https://api-productos.ngrok.io/api/products/1`

### Response Json
{

    "message": "Producto eliminado"
  
}

## Eliminar producto usando el codigo de barra
### Request
###### `DELETE /barcode/:barCode`
##### :barCode = "numbarcode": 1770879470437
#### Ejemplo URL
`https://api-productos.ngrok.io/api/barcode/1770879470437`

### Response Json
{

    "message": "Producto eliminado"
  
}

#Codigo de barras

## Mostrar todos los codigo de barras
### Request
###### `Get /barcode/`
#### Ejemplo URL
`https://api-productos.ngrok.io/api/barcode/`

### Response Json
  [
  
     {
         "id_barcode": 3,
         "id_producto": 3,
         "numbarcode": 1318175747169
     }
    
  ]
    
## Mostrar codigo de barras usando id de producto
### Request
###### `GET /barcode/buscar/:id`
#### Ejemplo de :id
##### :id = "id_producto": 1
#### Ejemplo URL
`https://api-productos.ngrok.io/api/barcode/buscar/3`

### Response Json
  [
  
     {
         "id_barcode": 3,
         "id_producto": 3,
         "numbarcode": 1318175747169
     }
    
  ]

## Crear nuevo codigo de barra para un producto 
### Request
#### `POST /barcode/:id`
#### Ejemplo de :id
##### :id = "id_producto": 1
#### Ejemplo URL
`https://api-productos.ngrok.io/api/barcode/3`

### Response Json
  [
  
        {
         "id_barcode": 4,
         "id_producto": 3,
         "numbarcode": 1234567891234
        }
    
  ]


### Tecnologias 
* Node Js.
* Express.
* MySql.
* Docker.
* Ngrok.