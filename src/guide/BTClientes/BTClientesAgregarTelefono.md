## Agregar Telefono

Método para agregar un teléfono a un cliente.

| Nombre publicación         | Programa | Global/País |
| -------------------------- | -------- | ----------- |
| BTClientes.AgregarTelefono | RBTPG216 | Global      |

> Ejemplo de invocación al método Agregar Telefono:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.AgregarTelefono>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>da17de6412</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>21</bts:clienteUId>
         <bts:domicilioId>2</bts:domicilioId>
         <bts:numeroTelefono>22929787</bts:numeroTelefono>
         <bts:tipoTelefonoId>1</bts:tipoTelefonoId>
      </bts:BTClientes.AgregarTelefono>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?AgregarTelefono' \
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
	"clienteUId":"21",
	"domicilioId":"2",
	"numeroTelefono":"22929787",
	"tipoTelefonoId":"1"	
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
      <BTClientes.AgregarTelefonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>da17de6412</Token>
         </Btinreq>
         <telefonoId>1</telefonoId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8435</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.AgregarTelefono</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>18:04:21</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.AgregarTelefonoResponse>
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
	"telefonoId": 1,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 8396,
        "Estado": "OK",
        "Servicio": "BTClientes.AgregarTelefono",
        "Requerimiento": "1",
        "Fecha": "2019-05-07",
        "Hora": "15:54:44",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre         | Tipo   | Comentarios                         |
| -------------- | ------ | ----------------------------------- |
| clienteUId     | Long   | Identificador único de cliente.     |
| domicilioId    | Byte   | Identificador de tipo de domicilio. |
| numeroTelefono | String | Número de teléfono.                 |
| tipoTelefonoId | Short  | Identificador de tipo de teléfono.  |

### Datos de salida

| Nombre     | Tipo | Comentarios                            |
| ---------- | ---- | -------------------------------------- |
| telefonoId | Byte | Identificador correlativo de teléfono. |

### Errores

| Código | Descripción                                  |
| ------ | -------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.   |
| 30002  | No se recibió el identificador de Domicilio. |
| 30003  | No se recibió Telefono.                      |
| 30004  | No se recibió Tipo de Telefono.              |
