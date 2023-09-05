# Contratación

## Contratar

Método para dar el alta de un préstamo amortizable en Bantotal

| Nombre publicación    | Programa | Global/País |
| --------------------- | -------- | ----------- |
| BTPrestamos.Contratar | RBTPG077 | Global      |

### Configuración Backend

1. Definir la transacción de alta, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1.

   - La cuenta vista de acreditación se almacena en el preformato 2.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

3. Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro.

> Ejemplo de invocación al método Contratar:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.Contratar>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>5453369fee4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>341</bts:operacionUId>
         <bts:clienteUId>161</bts:clienteUId>
         <bts:operacionUId_desembolso>281</bts:operacionUId_desembolso>
         <bts:operacionUId_cobro>281</bts:operacionUId_cobro>
      </bts:BTPrestamos.Contratar>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Contratar=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9d6db2ed-3171-3f9c-11d1-3ed6402467a1' \
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
    "operacionUId_desembolso": 281,
    "operacionUId_cobro": 281
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
      <BTPrestamos.ContratarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>5453369fee4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>101</movimientoUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>752</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.Contratar</Servicio>
            <Fecha>2017-11-30</Fecha>
            <Requerimiento/>
            <Hora>13:38:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarResponse>
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
    "movimientoUId": "102",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "755",
        "Estado": "OK",
        "Servicio": "BTPrestamos.Contratar",
        "Fecha": "2017-11-30",
        "Requerimiento": "",
        "Hora": "13:47:48",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre                  | Tipo | Comentarios                                                                                                                                                    |
| ----------------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| operacionUId            | Long | Identificador único de operación simulada.                                                                                                                     |
| clienteUId              | Long | Identificador único de cliente.                                                                                                                                |
| operacionUId_desembolso | Long | Identificador único de operación de la cuenta vista donde se acreditará el monto solicitado.                                                                   |
| operacionUId_cobro      | Long | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo. En caso de no solicitarse una operación de cobro, enviar valor 999999999. |

### Datos de salida

| Nombre        | Tipo | Comentarios                                 |
| ------------- | ---- | ------------------------------------------- |
| movimientoUId | Long | Identificador único de movimiento [Asiento] |

### Errores

| Código | Descripción                                                          |
| ------ | -------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de operación de préstamo.             |
| 30002  | No se recibió el identificador de operación de Acreditación.         |
| 30003  | No se recuperó la cuenta para el Identificador.                      |
| 30004  | El Identificador único de Producto es incorrecto.                    |
| 30005  | No se recibió la Fecha de Primer Pago desde el origen.               |
| 30006  | No se recibió el Monto de Capital desde el origen.                   |
| 31001  | La simulación no está vigente.                                       |
| 31002  | La simulación no existe.                                             |
| 40001  | La Cuenta indicada es incorrecta.                                    |
| 40012  | La Fecha de Primer Pago indicada es menor a la Fecha Valor.          |
| 40013  | La Fecha de Vencimiento indicada es menor a la Fecha Valor.          |
| 40014  | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento. |
| 40015  | El Plazo Total indicado es incorrecto.                               |
| 40016  | La Cantidad de Cuotas indicada es menor al mínimo permitido.         |
| 40017  | La Cantidad de Cuotas indicada es mayor al máximo permitido.         |
| 40018  | La Cantidad de Cuotas indicada es incorrecta.                        |
| 40019  | La Cantidad de Cuotas indicada no está preseteada.                   |
| 40020  | El período entre Cuotas indicado es menor al mínimo permitido.       |
| 40021  | El período entre Cuotas indicado es mayor al máximo permitido        |
| 40022  | El período entre Cuotas indicado es incorrecto.                      |
| 40023  | El período entre Cuotas indicado no está preseteado.                 |
| 40024  | El Valor Cuota indicado es incorrecto.                               |
| 40025  | El Capital indicado es menor al mínimo permitido.                    |
| 40026  | El Capital indicado es mayor al máximo permitido.                    |
| 40027  | El Capital indicado es incorrecto.                                   |
| 40037  | La Clase de Tasa indicada es incorrecta.                             |
| 40040  | La Tasa Fija indicada está fuera de tolerancia.                      |
| 40041  | La Tasa indicada es mayor a la Tasa de Usura.                        |
| 40048  | El período indicado es incorrecto.                                   |
| 40049  | El Tipo de Tasa indicado es incorrecto.                              |
| 40054  | La Tasa indicada es incorrecta.                                      |
| 40071  | El Plazo Total de la Operación es mayor al máximo permitido.         |
| 40072  | El Plazo Total de la Operación es menor al mínimo permitido.         |
| 40076  | El Producto indicado no está Preseteado.                             |
| 40147  | No se cumple el período mínimo entre Fecha Valor y Fecha de Prime.   |
| 40148  | El Capital indicado debe ser mayor al Valor Cuota.                   |
| 40149  | No se cumple el período máximo entre Fecha Valor y Fecha de Prime.   |

<!-- Contratar Ampliacion -->

## Contratar Ampliación

Método para dar alta de un préstamo ampliado en Bantotal, cancelando las operaciones indicadas en la simulación

| Nombre publicación              | Programa | Global/País |
| ------------------------------- | -------- | ----------- |
| BTPrestamos.ContratarAmpliacion | RBTPG235 | Global      |

> Ejemplo de invocación al método Contratar Ampliación:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ContratarAmpliacion>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:ampliacionId>122</bts:ampliacionId>
         <bts:clienteUId>221</bts:clienteUId>
         <bts:operacionUId_desembolso>211</bts:operacionUId_desembolso>
         <bts:operacionUId_cobro>211</bts:operacionUId_cobro>
      </bts:BTPrestamos.ContratarAmpliacion>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ContratarAmpliacion' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"ampliacionId":"122",
	"clienteUId":"221",
	"operacionUId_desembolso":"211",
	"operacionUId_cobro":"211",
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
      <BTPrestamos.ContratarAmpliacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>18bdf2801e4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>1536</movimientoUId>
         <Btoutreq>
            <Numero>4418</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ContratarAmpliacion</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>15:46:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarAmpliacionResponse>
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
    "movimientoUId": "1536",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "755",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ContratarAmpliacion",
        "Fecha": "2017-11-30",
        "Requerimiento": "",
        "Hora": "13:47:48",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Configuración Backend

1. Definir la transacción de alta, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1 para pfdid = cero.

   - La cuenta vista de acreditación se almacena en el preformato 2 para pfdid = cero.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

   - Las operaciones a cancelar se almacenan en el preformato 1 para pfdid > cero.

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

3. Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro. Ademas cargar en el Auxiliar Numérico el ordinal de baja de préstamo.

### Datos de entrada

| Nombre                  | Tipo   | Comentarios                                                                                  |
| ----------------------- | ------ | -------------------------------------------------------------------------------------------- |
| ampliacionId            | Long   | Identificador de la ampliación simulada.                                                     |
| clienteUId              | Long   | Identificador único de cliente.                                                              |
| accion                  | String | [Hidden: Valor fijo 'AMPLI' para este método].                                               |
| operacionUId_desembolso | Long   | Identificador único de operación de la cuenta vista donde se acreditará el monto solicitado. |
| operacionUId_cobro      | Long   | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo.         |

### Datos de salida

| Nombre        | Tipo | Comentarios                                   |
| ------------- | ---- | --------------------------------------------- |
| movimientoUId | Long | Identificador único del movimiento [Asiento]. |

### Errores

| Código | Descripción                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de ampliación.                                         |
| 30002  | El identificador de ampliación no es válido.                                          |
| 30003  | No se recibió el identificador de oper. de la cuenta vista.                           |
| 30004  | No se recuperó la cuenta vista para el identificador: [Número de Identificador].      |
| 30005  | No se recibió el identificador de oper. de la intrucción de cobro.                    |
| 30006  | No se recuperó la operación para el identificador: [Número de Identificador].         |
| 30007  | No se recibió el identificador de cliente.                                            |
| 30008  | No se recuperó la cuenta para el identificador de cliente: [Número de Identificador]. |
| 30009  | El préstamo no pertenece al cliente.                                                  |
| 30010  | La operación de cobro no pertenece al cliente.                                        |
| 30011  | La operación de cobro no pertenece al cliente.                                        |
| 30012  | No se recuperó la operación para el identificador: [Número de Identificador].         |
| 30013  | No se recuperó la operación simulada con identificador.                               |
| 40001  | en adelante, errores de contabilización.                                              |

<!-- Contratar Refinanciacion Deuda Total  -->

## Contratar Refinanciación por Deuda Total

Método para dar alta de un préstamo refinanciado en Bantotal, cancelando las operaciones indicadas en la simulación

| Nombre publicación                            | Programa | Global/País |
| --------------------------------------------- | -------- | ----------- |
| BTPrestamos.ContratarRefinanciacionDeudaTotal | RBTPG235 | Global      |

> Ejemplo de invocación al método Contratar Refinanciación por Deuda Total:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ContratarRefinanciacionDeudaTotal>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:refinanciacionId>122</bts:refinanciacionId>
         <bts:clienteUId>221</bts:clienteUId>
         <bts:operacionUId_cobro>211</bts:operacionUId_cobro>
      </bts:BTPrestamos.ContratarRefinanciacionDeudaTotal>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ContratarRefinanciacionDeudaTotal' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"refinanciacionId":"122",
	"clienteUId":"221",
	"operacionUId_cobro":"211",
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
      <BTPrestamos.ContratarRefinanciacionDeudaTotalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>18bdf2801e4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>1536</movimientoUId>
         <Btoutreq>
            <Numero>4418</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ContratarRefinanciacionDeudaTotal</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>15:46:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarRefinanciacionDeudaTotalResponse>
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
    "movimientoUId": "1536",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "755",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ContratarRefinanciacionDeudaTotal",
        "Fecha": "2017-11-30",
        "Requerimiento": "",
        "Hora": "13:47:48",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Configuración Backend

1. Definir la transacción de alta, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1 para pfdid = cero.

   - La cuenta vista de acreditación se almacena en el preformato 2 para pfdid = cero.

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.

   - Las operaciones a cancelar se almacenan en el preformato 1 para pfdid > cero.

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

3. Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro. Ademas cargar en el Auxiliar Numérico el ordinal de baja de préstamo.

### Datos de entrada

| Nombre             | Tipo   | Comentarios                                                                          |
| ------------------ | ------ | ------------------------------------------------------------------------------------ |
| refinanciacionId   | Long   | Identificador de la refinanciación simulada.                                         |
| clienteUId         | Long   | Identificador único de cliente.                                                      |
| accion             | String | [Hidden: Valor fijo 'REFIT' para este método].                                       |
| operacionUId_cobro | Long   | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo. |

### Datos de salida

| Nombre        | Tipo | Comentarios                                  |
| ------------- | ---- | -------------------------------------------- |
| movimientoUId | Long | Identificador único de movimiento [Asiento]. |

### Errores

| Código | Descripción                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de refinanciación.                                     |
| 30002  | El identificador de refinanciación no es válido.                                      |
| 30003  | No se recibió el identificador de oper. de la cuenta vista.                           |
| 30004  | No se recuperó la cuenta vista para el identificador: [Número de Identificador].      |
| 30005  | No se recibió el identificador de oper. de la intrucción de cobro.                    |
| 30006  | No se recuperó la operación para el identificador: [Número de Identificador].         |
| 30007  | No se recibió el identificador de cliente.                                            |
| 30008  | No se recuperó la cuenta para el identificador de cliente: [Número de Identificador]. |
| 30009  | El préstamo no pertenece al cliente.                                                  |
| 30010  | La operación de cobro no pertenece al cliente.                                        |
| 30011  | La operación de cobro no pertenece al cliente.                                        |
| 30012  | No se recuperó la operación para el identificador [Número de Identificador].          |
| 30013  | No se recuperó la operación simulada con identificador .                              |
| 40001  | en adelante, errores de contabilización.                                              |

<!-- Contratar Refinanciacion Saldo Capital -->

## Contratar Refinanciación por Saldo Capital

Método para dar alta de un préstamo refinanciado en Bantotal, cancelando las operaciones indicadas en la simulación

| Nombre publicación                              | Programa | Global/País |
| ----------------------------------------------- | -------- | ----------- |
| BTPrestamos.ContratarRefinanciacionSaldoCapital | RBTPG235 | Global      |

> Ejemplo de invocación al método Contratar Refinanciación por Saldo Capital:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ContratarRefinanciacionSaldoCapital>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:refinanciacionId>122</bts:refinanciacionId>
         <bts:clienteUId>221</bts:clienteUId>
         <bts:operacionUId_dif>211</bts:operacionUId_dif>
         <bts:operacionUId_cobro>211</bts:operacionUId_cobro>
      </bts:BTPrestamos.ContratarRefinanciacionSaldoCapital>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ContratarRefinanciacionSaldoCapital' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"refinanciacionId":"122",
	"clienteUId":"221",
	"operacionUId_dif":"211",
	"operacionUId_cobro":"211",
}'
```
</code-block>
</code-group>

### Configuración Backend

1. Definir la transacción de alta, teniendo en cuenta que:

   - El préstamo se almacena en el preformato 1 para pfdid = cero. La diferencia entre deuda total y saldo capital se almacena en el importe 2

   - La cuenta vista de acreditación se almacena en el preformato 2 para pfdid = cero

   - Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal

   - Las operaciones a cancelar se almacenan en el preformato 1 para pfdid > cero

2. Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).

   Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro. Ademas cargar en el Auxiliar Numérico el ordinal de baja de préstamo.

> El POST retornará la siguiente estructura:

<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.ContratarRefinanciacionSaldoCapitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>18bdf2801e4A8B5C60A82434</Token>
         </Btinreq>
         <movimientoUId>1536</movimientoUId>
         <Btoutreq>
            <Numero>4418</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ContratarRefinanciacionSaldoCapital</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>15:46:01</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ContratarRefinanciacionSaldoCapitalResponse>
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
    "movimientoUId": "1536",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "755",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ContratarRefinanciacionSaldoCapital",
        "Fecha": "2017-11-30",
        "Requerimiento": "",
        "Hora": "13:47:48",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre             | Tipo   | Comentarios                                                                                                                                                                |
| ------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| refinanciacionId   | Long   | Identificador de la refinanciación simulada.                                                                                                                               |
| clienteUId         | Long   | Identificador único de cliente.                                                                                                                                            |
| accion             | String | [Hidden: Valor fijo 'REFIS' para este método].                                                                                                                             |
| operacionUId_dif   | Long   | Identificador único de operación de la cuenta vista de donde se cobrará la diferencia entre la deuda total de los préstamos a refinanciar y el capital del nuevo préstamo. |
| operacionUId_cobro | Long   | Identificador único de operación de la cuenta vista de donde se cobrará el préstamo.                                                                                       |

### Datos de salida

| Nombre        | Tipo | Comentarios                                  |
| ------------- | ---- | -------------------------------------------- |
| movimientoUId | Long | Identificador único de movimiento [Asiento]. |

### Errores

| Código | Descripción                                                                           |
| ------ | ------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de refinanciación.                                     |
| 30002  | El identificador de refinanciación no es válido.                                      |
| 30003  | No se recibió el identificador de oper. de la cuenta vista.                           |
| 30004  | No se recuperó la cuenta vista para el identificador: [Número de Identificador].      |
| 30005  | No se recibió el identificador de oper. de la intrucción de cobro.                    |
| 30006  | No se recuperó la operación para el identificador: [Número de Identificador].         |
| 30007  | No se recibió el identificador de cliente.                                            |
| 30008  | No se recuperó la cuenta para el identificador de cliente: [Número de Identificador]. |
| 30009  | El préstamo no pertenece al cliente.                                                  |
| 30010  | La operación de cobro no pertenece al cliente.                                        |
| 30011  | La operación de cobro no pertenece al cliente.                                        |
| 30012  | No se recuperó la operación para el identificador [Número de Identificador].          |
| 30013  | No se recuperó la operación simulada con identificador.                               |
| 40001  | en adelante, errores de contabilización.                                              |
