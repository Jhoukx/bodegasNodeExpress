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
    "dev": "nodemon --quiet sever.js",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "dotenv": "16.3.1",
    "express": "4.18.2",
    "mysql2": "3.5.1",
    "nodemon": "3.0.1"
  }
}
```



#### **Endpoints**

- **Bodegas**:

  Se crearon dos funcionalidades para este endpoint, la primera es 





#### **Cambios en el proyecto**

El archivo  *data.sql* tuvo una modificación, a continuación se detalla el motivo y el lugar :

- **Tabla users:** La *columna nombre* que tenía la restricción **UNIQUE** fue eliminada y reasignada a la columna email, debido a que podría ocurrir que un nombre se repita pero en el email cada dirección es diferente.
- **Inserts de tablas:** Ya que la *columna nombre* de las tablas **users,productos y bodegas** se repetian,se cambio algunos nombres para insertar correctamente los datos, respetando así la restricción **UNIQUE**.