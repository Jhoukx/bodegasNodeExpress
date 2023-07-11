# Prueba Backend NodeJS

**¿Cómo inicializar el proyecto?**

Para ejecutar correctamente el proyecto hace falta instalar las dependencias de NodeJS usadas en el proyecto, estas se indican en el archivo *package.json* 

**Cambios en el proyecto**

El archivo  *data.sql* tuvo una modificación, a continuación se detalla el motivo y el lugar :

- **Tabla users:** La *columna nombre* que tenía la restricción **UNIQUE** fue eliminada y reasignada a la columna email, debido a que podría ocurrir que un nombre se repita pero en el email cada dirección es diferente.
- **Inserts de tablas:** Ya que la *columna nombre* de las tablas **users,productos y bodegas** se repetian,se cambio algunos nombres para insertar correctamente los datos, respetando así la restricción **UNIQUE**.