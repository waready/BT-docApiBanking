
## Configuración Backend

1. Si la opciòn general de procesos 3281 se encuentra activada, el servicio considera la sucursal del usuario de conexiòn, caso contrario, simula con la sucursal de la cuenta cliente.

### Datos de entrada

| Nombre      | Tipo            | Comentarios             |
| ----------- | --------------- | ----------------------- |
| sdtPrestamo | sBTPrestamoAlta | Datos de la simulación. |

Los campos del tipo de dato estructurado sBTPrestamoAlta son los siguientes:

| Campo            | Tipo   | Comentarios                                                            |
| ---------------- | ------ | ---------------------------------------------------------------------- |
| clienteUId\*     | Long   | Identificador único de cliente.                                        |
| productoUId\*    | Long   | Identificador único de producto.                                       |
| fechaPrimerPago  | Date   | Fecha de primer pago.                                                  |
| cantidadCuotas\* | Int    | Cantidad de cuotas.                                                    |
| monto\*          | Double | Capital solicitado.                                                    |
| pizarra          | Short  | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. |
| tasa             | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.      |
| actividad\*\*    | Long   | Código de actividad (Destino del crédito).                             |

### Datos de salida

| Nombre        | Tipo                  | Comentarios                 |
| ------------- | --------------------- | --------------------------- |
| sdtSimulacion | sBTSimulacionPrestamo | Datos del préstamo simulado |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo        | Comentarios                       |
| ----------------- | ----------- | --------------------------------- |
| producto          | sBTProducto | Datos del producto.               |
| capital           | Double      | Capital del préstamo.             |
| intereses         | Double      | Intereses.                        |
| valorCuota        | Double      | Valor cuota.                      |
| tasa              | Double      | Tasa.                             |
| tasaEfectiva      | Double      | Tasa efectiva.                    |
| tasaEfectivaAnual | Double      | Tasa efectiva anual.              |
| tasaNominalAnual  | Double      | Tasa nominal anual.               |
| totalPrestamo     | Double      | Total a pagar.                    |
| fechaPrimerPago   | Date        | Fecha de primer pago.             |
| fechaValor        | Date        | Fecha valor.                      |
| fechaVencimiento  | Date        | Fecha de vencimiento.             |
| operacionUId      | Long        | Identificador único de operación. |