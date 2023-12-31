# Pagos

## Abonar A Cuenta

Método para recibir un pago a un préstamo en el que por alguna condicion no se puediere operar en ese momento. El pago se realiza a un pasivo transitorio u otro rubro a definir, el cual luego debera ser volcado al prestamo.

| Nombre publicación        | Programa | Global/País |
| ------------------------- | -------- | ----------- |
| BTPrestamos.AbonarACuenta | RBTPG226 | Global      |

### Configuración Backend

1. Definir la transacción de pago, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1.

   - La cuenta vista de cobro se almacena en el preformato 2.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

3. Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro.

> Ejemplo de invocación al método Abonar A Cuenta:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.AbonarACuenta>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dc7d30c0044A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>321</bts:operacionUId>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:Importe>1000</bts:Importe>
         <bts:operacionUId_cobro>281</bts:operacionUId_cobro>
         <bts:referencia>AbonarACuenta</bts:referencia>
      </bts:BTPrestamos.AbonarACuenta>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?AbonarACuenta=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9bdf8096-2be0-d0b4-4017-971713b37367' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 342,
    "clienteUId": 161,
    "Importe": 1000,
    "operacionUId_cobro": 281,
    "referencia": "AbonarACuenta"
}'
```
</code-block>
</code-group>

> El POST retornará la siguiente estructura:

<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.AbonarACuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>dc7d30c0044A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>121</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>758</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.PagarCuota</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-05</Fecha>
            <Hora>13:32:15</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.AbonarACuentaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": "122",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "759",
        "Estado": "OK",
        "Servicio": "BTPrestamos.AbonarACuenta",
        "Requerimiento": "",
        "Fecha": "2017-12-05",
        "Hora": "13:39:04",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre               | Tipo   | Comentarios                                                                          |
| -------------------- | ------ | ------------------------------------------------------------------------------------ |
| operacionUId         | Long   | Identificador único de operación simulada.                                           |
| clienteUId           | Long   | Identificador único de cliente.                                                      |
| importe              | Double | Importe a pagar.                                                                     |
| recibeOperacionCobro | String | HIDDEN: Recibe o no operación de cobro (S/N).                                        |
| operacionUId_cobro   | Long   | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo. |
| referencia           | String | Referencia.                                                                          |

### Datos de salida

| Nombre        | Tipo | Comentarios                                  |
| ------------- | ---- | -------------------------------------------- |
| movimientoUId | Long | Identificador único de movimiento (asiento). |

### Errores

| Código | Descripción                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de operación de préstamo.                              |
| 30002  | No se recibió el identificador de operación de cobro.                                 |
| 30003  | Debe ingresar importe.                                                                |
| 30004  | No se recuperó la operacion para el Identificador: [Número de Identificador].         |
| 30005  | No se recuperó la operacion para el Identificador: [Número de Identificador].         |
| 30006  | No se recibió el identificador de cliente.                                            |
| 30007  | No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador]. |
| 30008  | El préstamo no pertenece al cliente.                                                  |
| 30009  | La operación no pertenece al cliente.                                                 |
| 30100  | Error en la contabilización.                                                          |
| 40001  | La Cuenta indicada es incorrecta.                                                     |

<!-- Cancelar  -->

## Cancelar

Método para realizar la cancelación de un préstamo

| Nombre publicación   | Programa | Global/País |
| -------------------- | -------- | ----------- |
| BTPrestamos.Cancelar | RBTPG076 | Global      |

### Configuración Backend

1. Definir la transacción de Pago, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1.

   - La cuenta vista de cobro se almacena en el preformato 2.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

3. Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro.

> Ejemplo de invocación al método Cancelar:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.Cancelar>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dc7d30c0044A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>321</bts:operacionUId>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:operacionUId_cobro>281</bts:operacionUId_cobro>
         <bts:referencia>Cancelar</bts:referencia>
      </bts:BTPrestamos.Cancelar>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Cancelar=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9bdf8096-2be0-d0b4-4017-971713b37367' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 342,
    "clienteUId": 161,
    "operacionUId_cobro": 281,
    "referencia": "Cancelar"
}'
```
</code-block>
</code-group>

> El POST retornará la siguiente estructura:

<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.CancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>dc7d30c0044A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>121</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>758</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.Cancelar</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-05</Fecha>
            <Hora>13:32:15</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.CancelarResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": "122",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "759",
        "Estado": "OK",
        "Servicio": "BTPrestamos.Cancelar",
        "Requerimiento": "",
        "Fecha": "2017-12-05",
        "Hora": "13:39:04",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre             | Tipo   | Comentarios                                                                       |
| ------------------ | ------ | --------------------------------------------------------------------------------- |
| operacionUId       | Long   | Identificador único de operación simulada.                                        |
| clienteUId         | Long   | Identificador único de cliente.                                                   |
| operacionUId_cobro | Long   | Identificador único de operación de la cuenta vista donde se cobrará el préstamo. |
| referencia         | String | Referencia.                                                                       |

### Datos de salida

| Nombre        | Tipo | Comentarios                                   |
| ------------- | ---- | --------------------------------------------- |
| movimientoUId | Long | Identificador único del movimiento [Asiento]. |

### Errores

| Código | Descripción                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de operación de préstamo.                              |
| 30002  | No se recibió el identificador de operación de cobro.                                 |
| 30004  | No se recuperó la operacion para el Identificador: [Número de Identificador].         |
| 30005  | No se recuperó la operación para el Identificador: [Número de Identificador]-         |
| 30006  | No se recibió el identificador de cliente.                                            |
| 30007  | No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador]. |
| 30008  | El préstamo no pertenece al cliente.                                                  |
| 30009  | La operación de cobro no pertenece al cliente.                                        |
| 40001  | La Cuenta indicada es incorrecta.                                                     |

<!-- CancelarAFecha -->

## Cancelar A Fecha

Método para realizar la cancelación de un préstamo a una fecha valor dada.

| Nombre publicación         | Programa | Global/País |
| -------------------------- | -------- | ----------- |
| BTPrestamos.CancelarAFecha | RBTPG246 | Global      |

### Configuración Backend

1. Definir la transacción de Pago, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1.

   - La cuenta vista de cobro se almacena en el preformato 2.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

3. Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro.

> Ejemplo de invocación al método Cancelar A Fecha:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.CancelarAFecha>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dc7d30c0044A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>321</bts:operacionUId>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:operacionUId_cobro>281</bts:operacionUId_cobro>
         <bts:referencia>Cancelar</bts:referencia>
		 <bts:fecha>2016-10-10</bts:fecha>
      </bts:BTPrestamos.CancelarafECHA>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?CancelarAFecha=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9bdf8096-2be0-d0b4-4017-971713b37367' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 342,
    "clienteUId": 161,
    "operacionUId_cobro": 281,
    "referencia": "Cancelar"
	"fecha": "2020-10-10"
}'
```
</code-block>
</code-group>

> El POST retornará la siguiente estructura:

<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.CancelarAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>dc7d30c0044A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>121</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>758</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.CancelarAFecha</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-05</Fecha>
            <Hora>13:32:15</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.CancelarAFechaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": "122",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "759",
        "Estado": "OK",
        "Servicio": "BTPrestamos.CancelarAFecha",
        "Requerimiento": "",
        "Fecha": "2017-12-05",
        "Hora": "13:39:04",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre                    | Tipo   | Comentarios                                                                             |
| ------------------------- | ------ | --------------------------------------------------------------------------------------- |
| operacionUId              | Long   | Identificador único de operación simulada.                                              |
| clienteUId                | Long   | Identificador único de cliente.                                                         |
| operacionUId_cobro        | Long   | Identificador único de operación de la cuenta vista donde se cobrará el préstamo.       |
| referencia                | String | Referencia.                                                                             |
| fecha                     | Date   | Fecha valor de la cancelación.                                                          |
| controlaExistenciaOpCobro | String | Indica si se controla la existencia de la operación de cobro [Hidden: Valores 'S'/'N']. |

### Datos de salida

| Nombre        | Tipo | Comentarios                         |
| ------------- | ---- | ----------------------------------- |
| movimientoUId | Long | Identificador único del movimiento. |

### Errores

| Código | Descripción                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de operación de préstamo.                              |
| 30002  | No se recibió el identificador de operación de cobro.                                 |
| 30004  | No se recuperó la operacion para el Identificador: [Número de Identificador].         |
| 30005  | No se recuperó la operación para el Identificador: [Número de Identificador]-         |
| 30006  | No se recibió el identificador de cliente.                                            |
| 30007  | No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador]. |
| 30008  | El préstamo no pertenece al cliente.                                                  |
| 30009  | La operación de cobro no pertenece al cliente.                                        |
| 40001  | La Cuenta indicada es incorrecta.                                                     |

<!-- Cancelar A Fecha Terceros -->

## Cancelar a Fecha Terceros

Método para realizar la cancelación de un préstamo a terceros, a una fecha valor dada.

| Nombre publicación                 | Programa | Global/País |
| ---------------------------------- | -------- | ----------- |
| BTPrestamos.CancelarAFechaTerceros | RBTPG833 | Global      |

### Configuración Backend

1. Definir la transacción de Pago, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1.

   - La cuenta vista de cobro se almacena en el preformato 2.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

3. Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro.

> Ejemplo de invocación al método Cancelar a Fecha Terceros:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.CancelarAFechaTerceros>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dc7d30c0044A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>321</bts:operacionUId>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:operacionCobroUId>281</bts:operacionCobroUId>
         <bts:referencia>Cancelar</bts:referencia>
		 <bts:fecha>2016-10-10</bts:fecha>
        <bts:controlaExistenciaOperacionCobro>N</bts:controlaExistenciaOperacionCobro>
      </bts:BTPrestamos.CancelarAFechaTerceros>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?CancelarAFechaTerceros=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9bdf8096-2be0-d0b4-4017-971713b37367' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 342,
    "clienteUId": 161,
    "operacionCobroUId": 281,
    "referencia": "Cancelar",
	"fecha": "2020-10-10",
    "controlaExistenciaOperacionCobro": "N"
}'
```
</code-block>
</code-group>

> El POST retornará la siguiente estructura:

<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.CancelarAFechaTercerosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>dc7d30c0044A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>121</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>758</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.CancelarAFechaTerceros</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-05</Fecha>
            <Hora>13:32:15</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.CancelarAFechaTercerosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": "122",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "759",
        "Estado": "OK",
        "Servicio": "BTPrestamos.CancelarAFechaTerceros",
        "Requerimiento": "",
        "Fecha": "2017-12-05",
        "Hora": "13:39:04",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre                           | Tipo   | Comentarios                                                                             |
| -------------------------------- | ------ | --------------------------------------------------------------------------------------- |
| operacionUId                     | Long   | Identificador único de operación simulada.                                              |
| clienteUId                       | Long   | Identificador único de cliente.                                                         |
| operacionCobroUId                | Long   | Identificador único de operación de la cuenta vista donde se cobrará el préstamo.       |
| referencia                       | String | Referencia.                                                                             |
| fecha                            | Date   | Fecha valor de la cancelación.                                                          |
| controlaExistenciaOperacionCobro | String | Indica si se controla la existencia de la operación de cobro [Hidden: Valores 'S'/'N']. |

### Datos de salida

| Nombre        | Tipo | Comentarios                         |
| ------------- | ---- | ----------------------------------- |
| movimientoUId | Long | Identificador único del movimiento. |

### Errores

| Código | Descripción                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de operación de préstamo.                              |
| 30002  | No se recibió el identificador de operación de cobro.                                 |
| 30004  | No se recuperó la operacion para el Identificador: [Número de Identificador].         |
| 30005  | No se recuperó la operación para el Identificador: [Número de Identificador]-         |
| 30006  | No se recibió el identificador de cliente.                                            |
| 30007  | No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador]. |
| 30008  | El préstamo no pertenece al cliente.                                                  |
| 30009  | La operación de cobro no pertenece al cliente.                                        |
| 30100  | Error en la contabilización.                                                          |
| 40001  | La Cuenta indicada es incorrecta.                                                     |


<!--Cancelar cuota terceros  -->

##  Cancelar Cuota Terceros

Método para realizar la cancelación de un préstamo con una cuenta de cobro de terceros.

| Nombre publicación                | Programa | Global/País |
| --------------------------------- | -------- | ----------- |
| BTPrestamos.CancelarCuotaTerceros | RBTPG830 | Global      |

### Configuración Backend

1. Definir la transacción de Pago, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1

   - La cuenta vista de cobro se almacena en el preformato 2

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

   Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro

> Ejemplo de invocación al método Cancelar Cuota Terceros:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.CancelarCuotaTerceros>
         <bts:Btinreq>
            <bts:Device>bms</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>b6275b301e4A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:operacionUId>39</bts:operacionUId>
         <bts:clienteUId>9</bts:clienteUId>
         <bts:operacionCobroUId>850</bts:operacionCobroUId>
         <bts:referencia>Cancelacion con terceros</bts:referencia>
      </bts:BTPrestamos.CancelarCuotaTerceros>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?CancelarCuotaTerceros' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "operacionUId": "40",
    "clienteUId": "9",
    "operacionCobroUId": "865",
    "referencia": "Paga cuota terceros"
}'
```
</code-block>
</code-group>

> El POST retornará la siguiente estructura:

<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.CancelarCuotaTercerosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b6275b301e4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>59</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1091</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.CancelarCuotaTerceros</Servicio>
            <Fecha>2020-10-30</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:48:17</Hora>
         </Btoutreq>
      </BTPrestamos.CancelarCuotaTercerosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "movimientoUId": 62,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1094,
        "Estado": "OK",
        "Servicio": "BTPrestamos.CancelarCuotaTerceros",
        "Fecha": "2020-10-30",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Hora": "14:30:59"
    }
}
```
</code-block>
</code-group>

### Datos de entrada

| Nombre            | Tipo   | Comentarios                                                                       |
| ----------------- | ------ | --------------------------------------------------------------------------------- |
| operacionUId      | Long   | Identificador único de operación simulada.                                        |
| clienteUId        | Long   | Identificador único de cliente.                                                   |
| operacionCobroUId | Long   | Identificador único de operación de la cuenta vista donde se cobrará el préstamo. |
| referencia        | String | Referencia.                                                                       |

### Datos de salida

| Nombre        | Tipo | Comentarios                                   |
| ------------- | ---- | --------------------------------------------- |
| movimientoUId | Long | Identificador único del movimiento (asiento). |

### Errores

| Código | Descripción                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de operación de préstamo.                              |
| 30004  | No se recuperó la operación para el Identificador: [Número de Identificador].         |
| 30006  | No se recibió el identificador de cliente.                                            |
| 30007  | No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador]. |
| 30008  | El préstamo no pertenece al cliente.                                                  |
| 30100  | Error en la Contabilización.                                                          |


## Pagar Cuota

Método para realizar el pago de cuota de un préstamo.

| Nombre publicación     | Programa | Global/País |
| ---------------------- | -------- | ----------- |
| BTPrestamos.PagarCuota | RBTPG034 | Global      |

### Configuración Backend

1. Definir la transacción de pago, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1.

   - La cuenta vista de cobro se almacena en el preformato 2.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

3. Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro.

> Ejemplo de invocación al método Pagar Cuota:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.PagarCuota>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>dc7d30c0044A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>321</bts:operacionUId>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:Importe>161</bts:Importe>
         <bts:operacionUId_cobro>281</bts:operacionUId_cobro>
         <bts:referencia>PagarCuota</bts:referencia>
      </bts:BTPrestamos.PagarCuota>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?PagarCuota=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9bdf8096-2be0-d0b4-4017-971713b37367' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 342,
    "clienteUId": 161,
    "Importe": 1000,
    "operacionUId_cobro": 281,
    "referencia": "Cancelar"
}'
```
</code-block>
</code-group>

> El POST retornará la siguiente estructura:

<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.PagarCuotaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>dc7d30c0044A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>121</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>758</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.PagarCuota</Servicio>
            <Requerimiento/>
            <Fecha>2017-12-05</Fecha>
            <Hora>13:32:15</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.PagarCuotaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": "122",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "759",
        "Estado": "OK",
        "Servicio": "BTPrestamos.PagarCuota",
        "Requerimiento": "",
        "Fecha": "2017-12-05",
        "Hora": "13:39:04",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre             | Tipo   | Comentarios                                                                          |
| ------------------ | ------ | ------------------------------------------------------------------------------------ |
| operacionUId       | Long   | Identificador único de operación simulada.                                           |
| clienteUId         | Long   | Identificador único de cliente.                                                      |
| importe            | Double | Importe a pagar.                                                                     |
| operacionUId_cobro | Long   | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo. |
| referencia         | String | Referencia.                                                                          |

### Datos de salida

| Nombre        | Tipo | Comentarios                                  |
| ------------- | ---- | -------------------------------------------- |
| movimientoUId | Long | Identificador único de movimiento [Asiento]. |

### Errores

| Código | Descripción                                                                              |
| ------ | ---------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de operación de préstamo.                                 |
| 30002  | No se recibió el identificador de operación de cobro.                                    |
| 30003  | Debe ingresar importe.                                                                   |
| 30004  | No se recuperó la operación para el Identificador: [Número de Identificador].            |
| 30005  | No se recuperó la operación para el Identificador: [Número de Identificador].            |
| 30006  | No se recibió el identificador de cliente.                                               |
| 30007  | No se recuperó la operación para el Identificador de Cliente: [Número de Identificador]. |
| 30008  | El préstamo no pertenece al cliente.                                                     |
| 30009  | La operación de cobro no pertenece al cliente.                                           |
| 30100  | Error en la contabilización.                                                             |
| 40001  | La Cuenta indicada es incorrecta.                                                        |

## Pagar Cuota a Fecha

Método para realizar el pago de cuota de un préstamo a una fecha valor.

| Nombre publicación           | Programa | Global/País |
| ---------------------------- | -------- | ----------- |
| BTPrestamos.PagarCuotaAFecha | RBTPG225 | Global      |

### Configuración Backend

1. Definir la transacción de pago, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1.

   - La cuenta vista de cobro se almacena en el preformato 2.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

   Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro.

> Ejemplo de invocación al método Pagar Cuota a Fecha:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.PagarCuotaAFecha>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>191631443CD285A89A23FBEE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>37675</bts:operacionUId>
         <bts:clienteUId>1600</bts:clienteUId>
         <bts:importe>1000</bts:importe>
         <bts:operacionUId_cobro>59</bts:operacionUId_cobro>
         <bts:referencia>Prueba</bts:referencia>
         <bts:fecha>2019-07-26</bts:fecha>
      </bts:BTPrestamos.PagarCuotaAFecha>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?PagarCuota=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9bdf8096-2be0-d0b4-4017-971713b37367' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 342,
    "clienteUId": 161,
    "Importe": 1000,
    "operacionUId_cobro": 281,
    "referencia": "Cancelar"
}'
```
</code-block>
</code-group>

> El POST retornará la siguiente estructura:

<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.PagarCuotaAFechaResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>191631443CD285A89A23FBEE</Token>
            <Device>AC</Device>
         </Btinreq>
         <movimientoUId>1807</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.PagarCuotaAFecha</Servicio>
            <Fecha>2019-07-26</Fecha>
            <Hora>12:04:55</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>120425</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.PagarCuotaAFechaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": "1807",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "120425",
        "Estado": "OK",
        "Servicio": "BTPrestamos.PagarCuotaAFecha",
        "Requerimiento": "",
        "Fecha": "2019-07-26",
        "Hora": "12:04:55",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre             | Tipo   | Comentarios                                                                          |
| ------------------ | ------ | ------------------------------------------------------------------------------------ |
| operacionUId       | Long   | Identificador único de operación simulada.                                           |
| clienteUId         | Long   | Identificador único de cliente.                                                      |
| importe            | Double | Importe a pagar.                                                                     |
| operacionUId_cobro | Long   | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo. |
| referencia         | String | Referencia.                                                                          |
| fecha              | Date   | Fecha Valor del pago.                                                                |

### Datos de salida

| Nombre        | Tipo | Comentarios                                  |
| ------------- | ---- | -------------------------------------------- |
| movimientoUId | Long | Identificador único de movimiento [Asiento]. |

### Errores

| Código | Descripción                                                                              |
| ------ | ---------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de operación de préstamo.                                 |
| 30002  | No se recibió el identificador de operación de cobro.                                    |
| 30004  | No se recuperó la operación para el Identificador: [Número de Identificador].            |
| 30005  | No se recuperó la operación para el Identificador: [Número de Identificador].            |
| 30006  | No se recibió el identificador de cliente.                                               |
| 30007  | No se recuperó la operación para el Identificador de Cliente: [Número de Identificador]. |
| 30008  | El préstamo no pertenece al cliente.                                                     |
| 30009  | La operación de cobro no pertenece al cliente.                                           |
| 30010  | No se recibió una fecha para la operación.                                               |
| 40001  | La Cuenta indicada es incorrecta.                                                        |

## Pagar Cuota a Fecha Terceros

Método para realizar el pago de cuota de un préstamo a terceros, a una fecha valor.

| Nombre publicación                   | Programa | Global/País |
| ------------------------------------ | -------- | ----------- |
| BTPrestamos.PagarCuotaAFechaTerceros | RBTPG832 | Global      |

### Configuración Backend

1. Definir la transacción de pago, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1.

   - La cuenta vista de cobro se almacena en el preformato 2.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

   Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro.

> Ejemplo de invocación al método Pagar Cuota a Fecha Terceros:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.PagarCuotaAFechaTerceros>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>191631443CD285A89A23FBEE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>37675</bts:operacionUId>
         <bts:clienteUId>1600</bts:clienteUId>
         <bts:operacionCobroUId>59</bts:operacionCobroUId>
         <bts:referencia>Prueba</bts:referencia>
         <bts:importe>1000</bts:importe>
         <bts:fecha>2019-07-26</bts:fecha>
      </bts:BTPrestamos.PagarCuotaAFechaTerceros>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?PagarCuotaAFechaTerceros=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9bdf8096-2be0-d0b4-4017-971713b37367' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 342,
    "clienteUId": 161,
    "operacionCobroUId": 281,
    "referencia": "Prueba",
    "importe": 1000,
    "fecha": "2019-07-26"
}'
```
</code-block>
</code-group>

> El POST retornará la siguiente estructura:

<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.PagarCuotaAFechaTercerosResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>191631443CD285A89A23FBEE</Token>
            <Device>AC</Device>
         </Btinreq>
         <movimientoUId>1807</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.PagarCuotaAFechaTerceros</Servicio>
            <Fecha>2019-07-26</Fecha>
            <Hora>12:04:55</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>120425</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.PagarCuotaAFechaTercerosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "movimientoUId": "1807",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "120425",
        "Estado": "OK",
        "Servicio": "BTPrestamos.PagarCuotaAFechaTerceros",
        "Requerimiento": "",
        "Fecha": "2019-07-26",
        "Hora": "12:04:55",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre                           | Tipo   | Comentarios                                                                             |
| -------------------------------- | ------ | --------------------------------------------------------------------------------------- |
| operacionUId                     | Long   | Identificador único de operación simulada.                                              |
| clienteUId                       | Long   | Identificador único de cliente.                                                         |
| importe                          | Double | Importe a pagar.                                                                        |
| operacionCobroUId                | Long   | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo.    |
| referencia                       | String | Referencia.                                                                             |
| fecha                            | Date   | Fecha Valor del pago.                                                                   |
| controlaExistenciaOperacionCobro | String | Indica si se controla la existencia de la operación de cobro [Hidden: Valores 'S'/'N']. |

### Datos de salida

| Nombre        | Tipo | Comentarios                                  |
| ------------- | ---- | -------------------------------------------- |
| movimientoUId | Long | Identificador único de movimiento [Asiento]. |

### Errores

| Código | Descripción                                                                              |
| ------ | ---------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de operación de préstamo.                                 |
| 30002  | No se recibió el identificador de operación de cobro.                                    |
| 30003  | Debe ingresar importe.                                                                   |
| 30004  | No se recuperó la operación para el Identificador: [Número de Identificador].            |
| 30005  | No se recuperó la operación para el Identificador: [Número de Identificador].            |
| 30006  | No se recibió el identificador de cliente.                                               |
| 30007  | No se recuperó la operación para el Identificador de Cliente: [Número de Identificador]. |
| 30008  | El préstamo no pertenece al cliente.                                                     |
| 30010  | No se recibió una fecha para la operación.                                               |
| 30100  | Error en la contabilización.                                                             |
| 40001  | La Cuenta indicada es incorrecta.                                                        |

## Pagar Cuota Terceros

Método para realizar el pago de cuota de un préstamo con una cuenta de cobro de terceros.

| Nombre publicación             | Programa | Global/País |
| ------------------------------ | -------- | ----------- |
| BTPrestamos.PagarCuotaTerceros | RBTPG831 | Global      |

### Configuración Backend

1. Definir la transacción de pago, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1

   - La cuenta vista de cobro se almacena en el preformato 2

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

   Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro

> Ejemplo de invocación al método Pagar Cuota Terceros:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.PagarCuotaTerceros>
         <bts:Btinreq>
            <bts:Device>bms</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Token>b6275b301e4A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:operacionUId>39</bts:operacionUId>
         <bts:clienteUId>9</bts:clienteUId>
         <bts:importe>1000</bts:importe>
         <bts:operacionCobroUId>800</bts:operacionCobroUId>
         <bts:referencia>Una cuenta de terceros</bts:referencia>
      </bts:BTPrestamos.PagarCuotaTerceros>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?PagarCuotaTerceros' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "operacionUId": "40",
    "clienteUId": "9",
    "importe": "950",
    "operacionCobroUId": "865",
    "referencia": "Paga cuota terceros"
}'
```
</code-block>
</code-group>

> El POST retornará la siguiente estructura:

<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.PagarCuotaTercerosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>bms</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b6275b301e4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>58</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>1090</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.PagarCuotaTerceros</Servicio>
            <Fecha>2020-10-30</Fecha>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:46:32</Hora>
         </Btoutreq>
      </BTPrestamos.PagarCuotaTercerosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
    "Btinreq": {
        "Device": "bms",
        "Usuario": "MINSTALADOR",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Token": "faa36bd33f4A8B5C60A82434"
    },
    "movimientoUId": 61,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 1093,
        "Estado": "OK",
        "Servicio": "BTPrestamos.PagarCuotaTerceros",
        "Fecha": "2020-10-30",
        "Requerimiento": "0",
        "Canal": "BTDIGITAL",
        "Hora": "14:29:28"
    }
}
```
</code-block>
</code-group>

### Datos de entrada

| Nombre            | Tipo   | Comentarios                                                                          |
| ----------------- | ------ | ------------------------------------------------------------------------------------ |
| operacionUId      | Long   | Identificador único de operación simulada.                                           |
| clienteUId        | Long   | Identificador único de cliente.                                                      |
| importe           | Double | Importe a pagar.                                                                     |
| operacionCobroUId | Long   | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo. |
| referencia        | String | Referencia.                                                                          |

### Datos de salida

| Nombre        | Tipo | Comentarios                                  |
| ------------- | ---- | -------------------------------------------- |
| movimientoUId | Long | Identificador único de movimiento (asiento). |

### Errores

| Código | Descripción                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de operación de préstamo.                              |
| 30003  | Debe ingresar importe.                                                                |
| 30004  | No se recuperó la operación para el Identificador: [Número de Identificador].         |
| 30006  | No se recibió el identificador de cliente.                                            |
| 30007  | No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador]. |
| 30008  | El préstamo no pertenece al cliente.                                                  |
| 30100  | Error en la Contabilización.                                                          |

