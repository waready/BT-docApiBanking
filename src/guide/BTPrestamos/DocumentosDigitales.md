# Documentos Digitales

## Actualizar Documento Digital

Método para actualizar el documento digital de un préstamo

| Nombre publicación                     | Programa | Global/País |
| -------------------------------------- | -------- | ----------- |
| BTPrestamos.ActualizarDocumentoDigital | RBTPG173 | Global      |

> Ejemplo de invocación al método Actualizar Documento Digital:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ActualizarDocumentoDigital>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>5744be79064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
         <bts:documentoId>118</bts:documentoId>
         <bts:nombreDelDocumento>ejemplo</bts:nombreDelDocumento>
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado>
         <bts:fechaDeEmision>2010-10-10</bts:fechaDeEmision>
         <bts:fechaDeVencimiento>2020-10-10</bts:fechaDeVencimiento>
      </bts:BTPrestamos.ActualizarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ActualizarDocumentoDigital' \
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
	"operacionUId":"121",
    "documentoId":"118",
    "nombreDelDocumento":"ejemplo",
    "archivoCodificado":"RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
    "fechaDeEmision":"2010-10-10",
    "fechaDeVencimiento": "2020-10-10"
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
      <BTPrestamos.ActualizarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>5744be79064A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>870</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ActualizarDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>12:55:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ActualizarDocumentoDigitalResponse>
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
        "Numero": 872,
        "Estado": "OK",
        "Servicio": "BTPrestamos.ActualizarDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-13",
        "Hora": "13:02:09",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group> 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
operacionUId | Long | Identificador único de operación del préstamo.
documentoId | Long | Identificador del documento.
nombre | String | Nombre del documento.
archivoCodificado | String | Archivo a asociar codificado.
fechaVencimiento | Date | Fecha de emisión del documento (en caso que corresponda).
fechaEmision | Date | Fecha de emisión del documento (en caso que corresponda).

### Datos de salida

No corresponde

### Errores

| Código | Descripción                                                                                                           |
| ------ | --------------------------------------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de instancia de documento digital.                                                     |
| 30002  | No se recibió nombre.                                                                                                 |
| 30003  | No se recibió el identificador de la operación.                                                                       |
| 30013  | No existe registro para el identificador indicado.                                                                    |
| 30041  | Debe ingresar la fecha de emisión del documento.                                                                      |
| 30042  | Debe ingresar la fecha de vencimiento del documento.                                                                  |
| 30130  | Ocurrio un error al recibir el archivo, puede que el mismo este corrupto.                                             |
| 31013  | Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío.                              |
| 31024  | Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora. |

<!-- AsociarDocumentoDigital -->

## Asociar Documento Digital

Método para asociar documento digital a un préstamo

| Nombre publicación                  | Programa | Global/País |
| ----------------------------------- | -------- | ----------- |
| BTPrestamos.AsociarDocumentoDigital | RBTPG172 | Global      |

> Ejemplo de invocación al método Asociar Documento Digital:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.AsociarDocumentoDigital>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>5744be79064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
         <bts:tipoDocumentoId>31</bts:tipoDocumentoId>
         <bts:nombre>ejemplo</bts:nombre>
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado>
         <bts:fechaEmision>2010-10-10</bts:fechaEmision>
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento>
      </bts:BTPrestamos.AsociarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?AsociarDocumentoDigital' \
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
	"operacionUId":"121",
    "tipoDocumentoId":"31",
    "nombre":"ejemplo",
    "archivoCodificado":"RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
    "fechaEmision":"2010-10-10",
    "fechaVencimiento": "2020-10-10"
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
      <BTPrestamos.AsociarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>5744be79064A8B5C60A82434</Token>
         </Btinreq>
         <documentoId>118</documentoId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>852</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.AsociarDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>12:44:03</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.AsociarDocumentoDigitalResponse>
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
    "documentoId": 115,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 818,
        "Estado": "OK",
        "Servicio": "BTPrestamos.AsociarDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "17:42:23",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre            | Tipo   | Comentarios                                               |
| ----------------- | ------ | --------------------------------------------------------- |
| operacionUId      | Long   | Identificador único de la operación.                      |
| tipoDocumentoId   | Long   | Identificador del tipo de documento.                      |
| nombre            | String | Nombre del documento.                                     |
| archivoCodificado | String | Archivo a asociar codificado.                             |
| fechaEmision      | Date   | Fecha de emisión del documento (en caso que corresponda). |
| fechaVencimiento  | Date   | Fecha de emisión del documento (en caso que corresponda). |

### Datos de salida

| Nombre      | Tipo | Comentarios                           |
| ----------- | ---- | ------------------------------------- |
| documentoId | Long | Identificador del documento asociado. |

### Errores

| Código | Descripción                                                                                                           |
| ------ | --------------------------------------------------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de tipo de documento digital.                                                          |
| 30002  | No se recibió nombre.                                                                                                 |
| 30003  | No se recibió el identificador de la operación.                                                                       |
| 30041  | Debe ingresar la fecha de emisión del documento.                                                                      |
| 30042  | Debe ingresar la fecha de vencimiento del documento.                                                                  |
| 30044  | La operación seleccionada no corresponde a un producto de Préstamos.                                                  |
| 31030  | Ocurrio un error al recibir el archivo, puede que el mismo este corrupto.                                             |
| 31013  | Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío.                              |
| 31024  | Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora. |

<!-- EliminarDocumentoDigital  -->

## Eliminar Documento Digital

Método para eliminar un documento digital de un préstamo

| Nombre publicación                   | Programa | Global/País |
| ------------------------------------ | -------- | ----------- |
| BTPrestamos.EliminarDocumentoDigital | RBTPG174 | Global      |

> Ejemplo de invocación al método Eliminar Documento Digital:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.EliminarDocumentoDigital>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>5744be79064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
         <bts:documentoId>115</bts:documentoId>
      </bts:BTPrestamos.EliminarDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?EliminarDocumentoDigital' \
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
	"operacionUId":"121",
    "documentoId":"123"
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
      <BTPrestamos.EliminarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>5744be79064A8B5C60A82434</Token>
         </Btinreq>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>795</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.EliminarDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-12</Fecha>
            <Hora>16:29:16</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.EliminarDocumentoDigitalResponse>
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
        "Numero": 838,
        "Estado": "NEG_ERROR",
        "Servicio": "BTPrestamos.EliminarDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-13",
        "Hora": "12:23:28",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>  
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
clienteUId | Long | Identificador único de cliente.
documentoId | Long | Identificador del documento asociado.
 
### Datos de salida
 
No aplica
 
### Errores
 
Código | Descripción
--------- | -----------
30001 | No se recibió el identificador de instancia de documento digital.
30003 | No se recibió el identificador de la operación.
30421 | El registro no existe.

<!-- Obtener Documento Digital -->

## Obtener Documento Digital

Método para obtener los datos de un documento digital de un préstamo

| Nombre publicación                  | Programa | Global/País |
| ----------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerDocumentoDigital | RBTPG191 | Global      |

> Ejemplo de invocación al método Obtener Documento Digital:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDocumentoDigital>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
         <bts:documentoId>35</bts:documentoId>
      </bts:BTPrestamos.ObtenerDocumentoDigital>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDocumentoDigital' \
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
	"operacionUId": "121",
	"documentoId": "35",
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
      <BTPrestamos.ObtenerDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <sdtDocumentosDigitales>
            <sBTVersionDocumentoDigital>
               <FechaEmision>2016-08-09</FechaEmision>
               <Archivo>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</Archivo>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Plan de Pagos</TipoDocumentoDigital>
               <Version>1</Version>
               <Nombre>CarpetaDigital.txt</Nombre>
               <documentoId>35</documentoId>
            </sBTVersionDocumentoDigital>
         </sdtDocumentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>888</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDocumentoDigital</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>13:16:43</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDocumentoDigitalResponse>
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
    "sdtDocumentosDigitales": {
        "sBTVersionDocumentoDigital": [
            {
                "FechaEmision": "2016-08-09",
                "Archivo": "RG9jdW1lbnRvIGRlIGVqZW1wbG8=",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Plan de Pagos",
                "Version": 1,
                "Nombre": "CarpetaDigital.txt",
                "documentoId": 35
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 890,
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDocumentoDigital",
        "Requerimiento": "1",
        "Fecha": "2018-11-13",
        "Hora": "13:17:56",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
operacionUId | Long | Identificador único de operación.
documentoId | Long | Identificador del documento.
 
### Datos de salida
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtDocumentosDigitales | sBTVersionDocumentoDigital | Version de documento digital.
 
Los campos del tipo de dato estructurado sBTVersionDocumentoDigital son los siguientes:
 
Campo | Tipo | Comentarios
--------- | ----------- | -----------
DocumentoId | Long | Titulo del documento digital.
FechaEmision | Date | Fecha de emisión del documento digital.
Archivo | String | Documento digital codificado en base 64.
FechaVencimiento | Date | Fecha de vencimiento del documento digital.
TipoDocumentoDigital | String | tipo del documento digital.
Nombre | String | Nombre del documento digital.
Version | Int | Número de versión del documento digital.

### Errores

| Código | Descripción                                                  |
| ------ | ------------------------------------------------------------ |
| 30001  | No se recibió el identificador de la operación.              |
| 30002  | No se recibió el identificador de documento.                 |
| 30024  | No se recupero la operación para el identificador recibido.  |
| 30031  | El documento digital no existe.                              |
| 30032  | Ocurrio un error al obtener la ultima versión del documento. |

<!-- Obtener Documentos Digitales -->

## Obtener Documentos Digitales

Dados los datos de un préstamo, el método devolverá una lista de los documentos digitales asociados a la misma.

| Nombre publicación                     | Programa | Global/País |
| -------------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerDocumentosDigitales | RBTPG180 | Global      |

> Ejemplo de invocación al método Obtener Documentos Digitales:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDocumentosDigitales>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0868626a064A8B5C60A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>10.12.10.159</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
      </bts:BTPrestamos.ObtenerDocumentosDigitales>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDocumentosDigitales' \
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
	"operacionUId": "121",
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
      <BTPrestamos.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10.12.10.159</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0868626a064A8B5C60A82434</Token>
         </Btinreq>
         <sdtDocumentosDigitales>
            <sBTDocumentoDigital>
               <Titulo>Plan de Pagos</Titulo>
               <FechaActualizacion>2016-08-09</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Plan de Pagos</TipoDocumentoDigital>
               <documentoId>35</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Contrato</Titulo>
               <FechaActualizacion>2017-12-08</FechaActualizacion>
               <FechaVencimiento>2019-08-22</FechaVencimiento>
               <TipoDocumentoDigital>Contrato</TipoDocumentoDigital>
               <documentoId>36</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Constitución</Titulo>
               <FechaActualizacion>2017-03-28</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Constitución de Prenda</TipoDocumentoDigital>
               <documentoId>74</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>constitución 2</Titulo>
               <FechaActualizacion>2017-03-28</FechaActualizacion>
               <FechaVencimiento>2018-03-28</FechaVencimiento>
               <TipoDocumentoDigital>Constitución de Prenda</TipoDocumentoDigital>
               <documentoId>75</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>contarto</Titulo>
               <FechaActualizacion>0000-00-00</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Contrato de Cesión</TipoDocumentoDigital>
               <documentoId>78</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>contarto 2</Titulo>
               <FechaActualizacion>0000-00-00</FechaActualizacion>
               <FechaVencimiento>0000-00-00</FechaVencimiento>
               <TipoDocumentoDigital>Contrato de Cesión</TipoDocumentoDigital>
               <documentoId>79</documentoId>
            </sBTDocumentoDigital>
            <sBTDocumentoDigital>
               <Titulo>Prueba Asociar</Titulo>
               <FechaActualizacion>2017-10-11</FechaActualizacion>
               <FechaVencimiento>2018-12-08</FechaVencimiento>
               <TipoDocumentoDigital>Contrato de Cesión</TipoDocumentoDigital>
               <documentoId>103</documentoId>
            </sBTDocumentoDigital>
         </sdtDocumentosDigitales>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>832</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDocumentosDigitales</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-11-13</Fecha>
            <Hora>11:57:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDocumentosDigitalesResponse>
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
    "sdtDocumentosDigitales": {
        "sBTDocumentoDigital": [
            {
                "Titulo": "Plan de Pagos",
                "FechaActualizacion": "2016-08-09",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Plan de Pagos",
                "documentoId": 35
            },
            {
                "Titulo": "Contrato",
                "FechaActualizacion": "2017-12-08",
                "FechaVencimiento": "2019-08-22",
                "TipoDocumentoDigital": "Contrato",
                "documentoId": 36
            },
            {
                "Titulo": "Constitución",
                "FechaActualizacion": "2017-03-28",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Constitución de Prenda",
                "documentoId": 74
            },
            {
                "Titulo": "constitución 2",
                "FechaActualizacion": "2017-03-28",
                "FechaVencimiento": "2018-03-28",
                "TipoDocumentoDigital": "Constitución de Prenda",
                "documentoId": 75
            },
            {
                "Titulo": "contarto",
                "FechaActualizacion": "0000-00-00",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Contrato de Cesión",
                "documentoId": 78
            },
            {
                "Titulo": "contarto 2",
                "FechaActualizacion": "0000-00-00",
                "FechaVencimiento": "0000-00-00",
                "TipoDocumentoDigital": "Contrato de Cesión",
                "documentoId": 79
            },
            {
                "Titulo": "Prueba Asociar",
                "FechaActualizacion": "2017-10-11",
                "FechaVencimiento": "2018-12-08",
                "TipoDocumentoDigital": "Contrato de Cesión",
                "documentoId": 103
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 823,
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDocumentosDigitales",
        "Requerimiento": "1",
        "Fecha": "2018-11-12",
        "Hora": "17:47:27",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
operacionUId | Long | Identificador único de operación.
 
### Datos de salida
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtDocumentosDigitales | sBTDocumentoDigital | Listado de documentos digitales.
 
Los campos del tipo de dato estructurado sBTDocumentoDigital son los siguientes:
 
Campo | Tipo | Comentarios
--------- | ----------- | -----------
titulo | String | Titulo del documento digital.
FechaActualizacion | Date | Fecha de actualizacion del documento digital.
FechaVencimiento | Date | Fecha de vencimiento del documento digital.
TipoDocumentoDigital | String | Tipo del documento digital.
documentoId | Long | Identificador del documento digital.

### Errores

| Código | Descripción                                                          |
| ------ | -------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de la operación.                      |
| 30021  | No se recupero la operación para el identificador recibido.          |
| 30031  | La operación seleccionada no corresponde a un producto de préstamos. |
