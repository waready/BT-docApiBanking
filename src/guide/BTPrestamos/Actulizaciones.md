# Actualización
<!-- informacion adicional -->
## Actualizar Información Adicional

Método para actualizar la información adicional de un préstamo.

| Nombre publicación                         | Programa | Global/País |
| ------------------------------------------ | -------- | ----------- |
| BTPrestamos.ActualizarInformacionAdicional | RBTPG469 | Global      |

> Ejemplo de invocación al servicio de Actualizar Información Adicional:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ActualizarInformacionAdicional>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>D06C78346B58598896F7D739</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>202</bts:operacionUId>
         <bts:sdtInformacionAdicional>
            <bts:sBTDatoLista>
               <bts:clave>Impuesto s/Intereses en Cuota </bts:clave>
               <bts:valor>N</bts:valor>
            </bts:sBTDatoLista>
         </bts:sdtInformacionAdicional>
      </bts:BTPrestamos.ActualizarInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ActualizarInformacionAdicional' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	 "operacionUId": 202,
        "sdtInformacionAdicional": {
          "sBTDatoLista": {
            "clave": "Impuesto s/Intereses en Cuota",
            "valor": "N"
          }
        }
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
      <BTPrestamos.ActualizarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>D06C78346B58598896F7D739</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10762</Numero>
            <Servicio>BTPrestamos.ActualizarInformacionAdicional</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-16</Fecha>
            <Hora>16:28:12</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ActualizarInformacionAdicionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">

```json
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
 
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ActualizarInformacionAdicional",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "17:08:56"
   }
}'
```
</code-block>

</code-group>

### Datos de entrada

| Nombre                  | Tipo         | Comentarios                                  |
| ----------------------- | ------------ | -------------------------------------------- |
| operacionUId            | Long         | Identificador único de prestamo.             |
| sdtInformacionAdicional | sBTDatoLista | Listado de datos.                            |
| modo                    | String       | [Hidden, valor fijo 'UPD' para este método]. |

Los campos del tipo de dato estructurado sBTDatoLista son los siguientes:

| Nombre | Tipo   | Comentarios                             |
| ------ | ------ | --------------------------------------- |
| clave  | String | Identificador de información adicional. |
| valor  | String | Valor de información adicional.         |

### Datos de salida

No aplica.

### Errores

| Código | Descripción                                                 |
| ------ | ----------------------------------------------------------- |
| 30001  | Debe ingresar identificador de operación.                   |
| 30004  | No se recupero la operación para el identificador recibido. |


<!-- Prestamos con Evento -->
## Actualizar Prestamos con Evento (Disponible únicamente para V4)

Método para actualizar préstamos con eventos de la tabla SNG912.

| Nombre publicación                       | Programa | Global/País |
| ---------------------------------------- | -------- | ----------- |
| BTPrestamos.ActualizarPrestamosConEvento | RBTPG473 | Global      |

> Ejemplo de invocación al método Actualizar Prestamos con Evento:

<code-group>
<code-block title="XML" active>

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ActualizarPrestamosConEvento>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>ad33e17b1199865B3A2E76CF</bts:Token>
         </bts:Btinreq>
      </bts:BTPrestamos.ActualizarPrestamosConEvento>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ActualizarPrestamosConEvento=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
      "Requerimiento": 0,
      "Canal": "BTDIGITAL",
      "Device": "GZ",
      "Usuario": "Instalador",
      "Token": "ad33e17b1199865B3A2E76CF"
    },
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
        <BTPrestamos.ActualizarPrestamosConEvento xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ad33e17b1199865B3A2E76CF</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>227694</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ActualizarPrestamosConEvento</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-05-09</Fecha>
            <Hora>18:31:58</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ActualizarPrestamosConEvento>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
'{
	"Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "d51ae0498699865B3A2E76CF"
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ActualizarPrestamosConEvento",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "12:27:52",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

No aplica.

### Datos de salida

No aplica.

### Errores

No aplica.

<!-- cuentas cobro -->

## Agregar Cuenta de Cobro

Método para agregar una cuenta de cobro de un préstamo

| Nombre publicación               | Programa | Global/País |
| -------------------------------- | -------- | ----------- |
| BTPrestamos.AgregarCuentaDeCobro | RBTPG132 | Global      |

> Ejemplo de invocación al método Agregar Cuenta de Cobro:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.AgregarCuentaDeCobro>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
         <bts:operacionUId_cobro>3</bts:operacionUId_cobro>
         <bts:permite_sobregirar>S</bts:permite_sobregirar>
         <bts:permite_pago_parcial>S</bts:permite_pago_parcial>
      </bts:BTPrestamos.AgregarCuentaDeCobro>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?AgregarCuentaDeCobro' \
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
		"operacionUId": 121,
		"operacionUId_cobro": 2,
		"permite_sobregirar": "S",
		"permite_pago_parcial": "S"
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
      <BTPrestamos.AgregarCuentaDeCobroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>100</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.AgregarCuentaDeCobro</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-04</Fecha>
            <Hora>18:04:42</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.AgregarCuentaDeCobroResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "101",
        "Estado": "OK",
        "Servicio": "BTPrestamos.AgregarCuentaDeCobro",
        "Requerimiento": "1",
        "Fecha": "2018-05-04",
        "Hora": "18:07:15",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre               | Tipo   | Comentarios                                                        |
| -------------------- | ------ | ------------------------------------------------------------------ |
| operacionUId         | Long   | Identificador único de operación del préstamo.                     |
| operacionUId_cobro   | Long   | Identificador único de operación de la cuenta de cobro.            |
| permite_sobregirar   | String | Define si la cuenta de cobro puede sobregirar o no (S/N).          |
| permite_pago_parcial | String | Define si se permiten pagos parciales de la cuenta de cobro (S/N). |

### Datos de salida

No aplica.

### Errores

| Código | Descripción                                                                            |
| ------ | -------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador único de operación de Préstamo.                         |
| 30002  | No se recuperó la operación para el Identificador: [Número de Identificador].          |
| 30003  | No se recibió el identificador único de operación de cobro.                            |
| 30004  | No se recuperó la operación de cobro para el Identificador: [Número de Identificador]. |



<!-- Agregar Informacion Adicional -->
## Agregar Información Adicional

Método para agregar la información adicional de un préstamo.

| Nombre publicación                      | Programa | Global/País |
| --------------------------------------- | -------- | ----------- |
| BTPrestamos.AgregarInformacionAdicional | RBTPG469 | Global      |

> Ejemplo de invocación al servicio de Agregar Información Adicional:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.AgregarInformacionAdicional>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>D06C78346B58598896F7D739</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>127</bts:operacionUId>
         <bts:sdtInformacionAdicional>
            <bts:sBTDatoLista>
               <bts:clave>Renovación</bts:clave>
               <bts:valor>S</bts:valor>
            </bts:sBTDatoLista>
         </bts:sdtInformacionAdicional>
      </bts:BTPrestamos.AgregarInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?AgregarInformacionAdicional' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "3JPL6DC33CD84655A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"operacionUId": 127,
        "sdtInformacionAdicional": {
          "sBTDatoLista": {
            "clave": "Renovación",
            "valor": "S"
          }
        }	
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
      <BTPrestamos.AgregarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>D06C78346B58598896F7D739</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>10762</Numero>
            <Servicio>BTPrestamos.AgregarInformacionAdicional</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-16</Fecha>
            <Hora>14:46:32</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.AgregarInformacionAdicionalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">

```json
{
   "Btinreq": {
      "Device": "1",
      "Usuario": "MINSTALADOR",
      "Token": "16c1cFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },

   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPrestamos.AgregarInformacionAdicional",
      "Requerimiento": "1",
      "Fecha": "2023-05-10",
      "Canal": "BTDIGITAL",
      "Hora": "14:28:56"
   }
}'
```

</code-block>
</code-group>

### Datos de entrada

| Nombre                  | Tipo         | Comentarios                                  |
| ----------------------- | ------------ | -------------------------------------------- |
| operacionUId            | Long         | Identificador único de prestamo.             |
| sdtInformacionAdicional | sBTDatoLista | Listado de datos.                            |
| modo                    | String       | [Hidden, valor fijo 'INS' para este método]. |

Los campos del tipo de dato estructurado sBTDatoLista son los siguientes:

| Nombre | Tipo   | Comentarios                             |
| ------ | ------ | --------------------------------------- |
| clave  | String | Identificador de información adicional. |
| valor  | String | Valor de información adicional.         |

### Datos de salida

No aplica.

### Errores

| Código | Descripción                                                 |
| ------ | ----------------------------------------------------------- |
| 30001  | Debe ingresar identificador de operación.                   |
| 30004  | No se recupero la operación para el identificador recibido. |

<!-- eliminar cuenta de cobro -->

## Eliminar Cuenta de Cobro

Método para eliminar una cuenta de cobro de un préstamo

| Nombre publicación                | Programa | Global/País |
| --------------------------------- | -------- | ----------- |
| BTPrestamos.EliminarCuentaDeCobro | RBTPG133 | Global      |

> Ejemplo de invocación al método Eliminar Cuenta de Cobro:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.EliminarCuentaDeCobro>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
         <bts:operacionUId_cobro>3</bts:operacionUId_cobro>
      </bts:BTPrestamos.EliminarCuentaDeCobro>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?EliminarCuentaDeCobro' \
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
		"operacionUId": 121,
		"operacionUId_cobro": 2
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
      <BTPrestamos.EliminarCuentaDeCobroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>105</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.EliminarCuentaDeCobro</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-04</Fecha>
            <Hora>18:19:52</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.EliminarCuentaDeCobroResponse>
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
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "106",
        "Estado": "OK",
        "Servicio": "BTPrestamos.EliminarCuentaDeCobro",
        "Requerimiento": "1",
        "Fecha": "2018-05-04",
        "Hora": "18:22:19",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group> 

### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
operacionUId | Long | Identificador único de operación de préstamo.
operacionUId_cobro | Long | Identificador único de operación de la cuenta de cobro.

### Datos de salida

No aplica.

### Errores

| Código | Descripción                                                                            |
| ------ | -------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador único de operación de préstamo.                         |
| 30002  | No se recuperó la operación para el identificador: [Número de Identificador].          |
| 30003  | No se recibió el identificador único de operación de cobro.                            |
| 30004  | No se recuperó la operación de cobro para el identificador: [Número de Identificador]. |
