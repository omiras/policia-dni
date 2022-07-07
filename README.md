# Detectar DNIs falsos

Los mossos de esquadra nos han pedido que, a partir de ahora, quieren registrar todos los documentos que comprueben en sus sistemas, y poderlos listar.

## Análisis

Vamos a insertar todas las entradas del formulario en una base de datos de nombre **foap-police**. Crearemos una colección de nombre **dnis**. Cada documento de la colección se va a componer de dos campos:
- campo dni. De tipo string, con el número de DNI comprobado
- campo valid. De tipo bool, indicando si el documento es válido

El código está preparado para tan solo realizar el trabajo de base de datos

## Requisito 1

Instala el paquete de terceros **mongodb**. Modifica la aplicación Express para que se conecte a tu base de datos MongoDB en el servidor Atlas. Puedes pasarte en el repositorio [query-restaurants](https://github.com/omiras/restaurants-express-mongodb)

## Requisito 2

Cada vez que se compruebe si un DNI es correcto o no, debe [insertarse un nuevo registro](https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/) en la colección **dnis** con los campos especificados en el análisis.

```
{
  "_id": {
    "$oid": "62c6a925d12193db1eeee30b"
  },
  "dni": "11050352W",
  "valid": true
}
```

## Requisito 3

Se debe modificar el controlador app.get("/list"); para que recupere todos los documentos de la base de datos y se los pase a la vista.

## BONUS

Antes de insertar el documento en la base de datos, comprueba si este ya existe. En tal caso, no debe ser insertado, y debemos mostrar algún mensaje de error al usuario