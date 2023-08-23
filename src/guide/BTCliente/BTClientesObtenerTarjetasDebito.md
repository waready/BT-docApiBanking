## Obtener Tarjetas de Debito

Método para obtener un listado de las tarjetas de debito de un cliente.

| Nombre publicación               | Programa | Global/País |
| -------------------------------- | -------- | ----------- |
| BTClientes.ObtenerTarjetasDebito | RBTPG015 | Global      |

> Ejemplo de invocación al método Obtener Tarjetas de Debito:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerTarjetasDebito>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>81</bts:clienteUId>
      </bts:BTClientes.ObtenerTarjetasDebito>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerTarjetasDebito=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: d89acb55-7235-c1e6-3866-0e89f6f76091' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": "81"
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
      <BTClientes.ObtenerTarjetasDebitoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>1</tarjetaUId>
               <numeroTarjeta>5010730101000000089</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>2</tarjetaUId>
               <numeroTarjeta>5010730101000000132</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>3</tarjetaUId>
               <numeroTarjeta>5010730101000000098</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>4</tarjetaUId>
               <numeroTarjeta>5010730101000000105</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>5</tarjetaUId>
               <numeroTarjeta>5010730101000000141</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
            <sBDProductoTarjeta>
               <tarjetaUId>6</tarjetaUId>
               <numeroTarjeta>5010730101000000123</numeroTarjeta>
               <tipoTarjeta/>
               <sucursal>Casa Matriz</sucursal>
            </sBDProductoTarjeta>
         </sdtProductosTarjeta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>839</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerTarjetasDebito</Servicio>
            <Fecha>2017-12-18</Fecha>
            <Requerimiento/>
            <Hora>02:12:35</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerTarjetasDebitoResponse>
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
    "sdtProductosTarjeta": {
        "sBDProductoTarjeta": [
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000089",
                "tipoTarjeta": "",
                "tarjetaUId": "1"
            },
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000132",
                "tipoTarjeta": "",
                "tarjetaUId": "2"
            },
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000098",
                "tipoTarjeta": "",
                "tarjetaUId": "3"
            },
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000105",
                "tipoTarjeta": "",
                "tarjetaUId": "4"
            },
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000141",
                "tipoTarjeta": "",
                "tarjetaUId": "5"
            },
            {
                "sucursal": "Casa Matriz",
                "numeroTarjeta": "5010730101000000123",
                "tipoTarjeta": "",
                "tarjetaUId": "6"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "840",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerTarjetasDebito",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "02:16:29",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre     | Tipo | Comentarios                     |
| ---------- | ---- | ------------------------------- |
| clienteUId | Long | Identificador único de cliente. |

### Datos de salida

| Nombre              | Tipo               | Comentarios          |
| ------------------- | ------------------ | -------------------- |
| sdtProductosTarjeta | sBDProductoTarjeta | Listado de tarjetas. |

Los campos del tipo de dato estructurado sBDProductoTarjeta son los siguientes

| Campo         | Tipo   | Comentarios                               |
| ------------- | ------ | ----------------------------------------- |
| tarjetaUId    | Long   | Identificador único de tarjeta de debito. |
| numeroTarjeta | String | Numero de tarjeta.                        |
| tipoTarjeta   | String | Tipo de tarjeta.                          |
| sucursal      | String | Sucursal de la tarjeta.                   |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recuperó la cuenta para el Identificador. |
