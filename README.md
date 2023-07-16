# Prueba Backend NodeJS

#### **¿Cómo inicializar el proyecto?**

Para ejecutar correctamente el proyecto se recomienda tener instalado la version `18.16.1` de  NodeJS. A continuación se detallan la configuracion de dependencias que se utilizaron para el proyecto.

```json
{
  "name": "pruebagbp",
  "version": "1.0.0",
  "description": "Prueba de ingreso GBP",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "tsc": "tsc -w",
    "dev": "nodemon --quiet server.js",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "class-transformer": "0.5.1",
    "dotenv": "16.3.1",
    "express": "4.18.2",
    "mysql2": "3.5.1",
    "nodemon": "3.0.1",
    "reflect-metadata": "0.1.13",
    "typescript": "5.1.6"
  }
}
```



#### **Endpoints**

- **Bodegas**:
  ````
  http://HOST/bodegas
  ````

  **GET**
  
  Para una consulta general:  (se recibe un JSON con los datos de bodegas)
  
  Para consulta filtrada: 

  ​	**_sor** = cualquier columna de la tabla bodegas
  
  ​	**_order** = orden alfabetico  asc o desc
  
  ​	(se recibe un JSON con datos filtrados)
  
  ````
  http://HOST/bodegas?_sort=nombre&_order=desc
  ````

​		**POST**

​		Permite crear una bodegas; los datos principales para enviar son:

```json
{
    "nombre":"/*Debe contener solo letras*/",
    "id_responsable":"/*Debe contener solo numeros*/",
    "estado":"/*Debe contener solo numeros*/",
    "created_by":"/*Debe contener solo numeros*/"
}
```

- **Inventarios**

  ```
  http://HOST/inventarios

​		**POST**

```json
{
    "id_producto":"/*Debe contener solo numeros*/",
    "id_bodega":"/*Debe contener solo numeros*/",
    "cantidad":"/*Debe contener solo numeros*/"
}
```

- **Productos**

  ````
  http://HOST/productos
  ````

  **GET**

   Permite listar todos los productos en orden descendente por el campo "Total" (cantidad total del producto encontrado en todas las bodegas). (se recibe un JSON)

  **POST**

  Permite insertar un productos y a su vez asigna una cantidad inicial del mismo en la tabla inventarios en "Bodega Default" (bodega previamente insertada).  los datos principales para enviar son:

  ````json
  {
  	"nombre":"/*Debe contener solo letras*/",
      "created_by":"/*Debe contener solo numeros*/",
      "cantidad":"/*Debe contener solo numeros*/" //Esta cantidad es para la tabla 'Inventarios'
  }
  ````

  

#### **Cambios en el proyecto**

El archivo  *data.sql* tuvo una modificación, a continuación se detalla el motivo y el lugar :

- **Tabla users:** La *columna nombre* que tenía la restricción **UNIQUE** fue eliminada y reasignada a la columna email, debido a que podría ocurrir que un nombre se repita pero en el email cada dirección es diferente.
- **Inserts de tablas:** Ya que la *columna nombre* de las tablas **users,productos y bodegas** se repetian,se cambio algunos nombres para insertar correctamente los datos, respetando así la restricción **UNIQUE**.