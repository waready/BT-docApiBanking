## Obtener Plazos Fijo Con Avance

Método para obtener un listado de los plazos fijos de un cliente con su avance.

| Nombre publicación                    | Programa | Global/País |
| ------------------------------------- | -------- | ----------- |
| BTClientes.ObtenerPlazosFijoConAvance | RBTPG403 | Global      |

> Ejemplo de invocación al método Obtener Plazos Fijo Con Avance:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPlazosFijoConAvance>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1152085960F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>10010</bts:clienteUId>
      </bts:BTClientes.ObtenerPlazosFijoConAvance>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPlazosFijoConAvance=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "324915377F955E77534D3E02"
	},
    "clienteUId": "10010",
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
      <BTClientes.ObtenerPlazosFijoConAvanceResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1152085960F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtProductosPlazoFijo>
            <sBTProductoPlazoFijo>
               <operacionUId>10108</operacionUId>
               <idOperacionFmt>0000000292_000</idOperacionFmt>
               <idOperacionBT>0010000100022000000000000000002700000000000292001</idOperacionBT>
               <producto>
                  <productoUId>132</productoUId>
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Sucursal Beta</sucursal>
               <saldo>1000.00</saldo>
               <estado>Normal</estado>
               <fechaAlta>2018-10-15</fechaAlta>
               <fechaVencimiento>2019-10-15</fechaVencimiento>
               <plazoTotal>360</plazoTotal>
               <plazoTranscurrido>507</plazoTranscurrido>
               <porcentajeAvance>100.000000</porcentajeAvance>
            </sBTProductoPlazoFijo>
            <sBTProductoPlazoFijo>
               <operacionUId>7</operacionUId>
               <idOperacionFmt>0000000028_000</idOperacionFmt>
               <idOperacionBT>0010100000022000000000000000002700000000000028001</idOperacionBT>
               <producto>
                  <productoUId>132</productoUId>
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <saldo>15000.00</saldo>
               <estado>Normal</estado>
               <fechaAlta>2018-08-16</fechaAlta>
               <fechaVencimiento>2019-08-12</fechaVencimiento>
               <plazoTotal>361</plazoTotal>
               <plazoTranscurrido>567</plazoTranscurrido>
               <porcentajeAvance>100.000000</porcentajeAvance>
            </sBTProductoPlazoFijo>
            <sBTProductoPlazoFijo>
               <operacionUId>8</operacionUId>
               <idOperacionFmt>0000000085_000</idOperacionFmt>
               <idOperacionBT>0010100000022000000000000000002700000000000085001</idOperacionBT>
               <producto>
                  <productoUId>132</productoUId>
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <saldo>1500000.00</saldo>
               <estado>Normal</estado>
               <fechaAlta>2015-12-28</fechaAlta>
               <fechaVencimiento>2016-12-22</fechaVencimiento>
               <plazoTotal>360</plazoTotal>
               <plazoTranscurrido>1529</plazoTranscurrido>
               <porcentajeAvance>100.000000</porcentajeAvance>
            </sBTProductoPlazoFijo>
         </sdtProductosPlazoFijo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.ObtenerPlazosFijoConAvance</Servicio>
            <Fecha>2020-04-20</Fecha>
            <Hora>18:06:18</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7333</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.ObtenerPlazosFijoConAvanceResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "BANTOTAL",
        "Token": "324915377F955E77534D3E02",
        "Device": "AC"
    },
    "sdtProductosPlazoFijo": {
		"sBTProductoPlazoFijo": [
		  {
			"operacionUId": "10108",
			"idOperacionFmt": "0000000292_000",
			"idOperacionBT": "0010000100022000000000000000002700000000000292001",
			"producto": {
			  "productoUId": "132",
			  "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible",
			  "moneda": "$"
			},
			"sucursal": "Sucursal Beta",
			"saldo": "1000.00",
			"estado": "Normal",
			"fechaAlta": "2018-10-15",
			"fechaVencimiento": "2019-10-15",
			"plazoTotal": "360",
			"plazoTranscurrido": "507",
			"porcentajeAvance": "100.000000"
		  },
		  {
			"operacionUId": "7",
			"idOperacionFmt": "0000000028_000",
			"idOperacionBT": "0010100000022000000000000000002700000000000028001",
			"producto": {
			  "productoUId": "132",
			  "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible",
			  "moneda": "$"
			},
			"sucursal": "Casa Matriz",
			"saldo": "15000.00",
			"estado": "Normal",
			"fechaAlta": "2018-08-16",
			"fechaVencimiento": "2019-08-12",
			"plazoTotal": "361",
			"plazoTranscurrido": "567",
			"porcentajeAvance": "100.000000"
		  },
		  {
			"operacionUId": "8",
			"idOperacionFmt": "0000000085_000",
			"idOperacionBT": "0010100000022000000000000000002700000000000085001",
			"producto": {
			  "productoUId": "132",
			  "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible",
			  "moneda": "$"
			},
			"sucursal": "Casa Matriz",
			"saldo": "1500000.00",
			"estado": "Normal",
			"fechaAlta": "2015-12-28",
			"fechaVencimiento": "2016-12-22",
			"plazoTotal": "360",
			"plazoTranscurrido": "1529",
			"porcentajeAvance": "100.000000"
		  }
		]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTClientes.ObtenerPlazosFijoConAvance",
        "Fecha": "2019-11-19",
        "Hora": "13:05:22",
        "Requerimiento": "",
        "Numero": 6924,
        "Estado": "OK"
    }
}
```
</code-block>
</code-group>

### Datos de entrada

| Nombre     | Tipo | Comentarios                     |
| ---------- | ---- | ------------------------------- |
| clienteUId | Long | Identificador único de cliente. |

### Datos de salida

| Nombre                | Tipo                 | Comentarios              |
| --------------------- | -------------------- | ------------------------ |
| sdtProductosPlazoFijo | sBTProductoPlazoFijo | Listado de plazos fijos. |

Los campos del tipo de dato estructurado sBTProductoPlazoFijo son los siguientes

| Campo             | Tipo        | Comentarios                                                |
| ----------------- | ----------- | ---------------------------------------------------------- |
| operacionUId      | Long        | Identificador.                                             |
| idOperacionFmt    | String      | Identificador string.                                      |
| idOperacionBT     | String      | Identificador String 2.                                    |
| producto          | sBTProducto | Datos del producto.                                        |
| sucursal          | String      | Nombre de la sucursal de alta.                             |
| saldo             | Double      | Saldo de la operación.                                     |
| estado            | String      | Descrición de estado de la operación.                      |
| fechaAlta         | Date        | Fecha de alta de la operación.                             |
| fechaVencimiento  | Date        | Fecha de vencimiento de la operación.                      |
| plazoTotal        | Int         | Plazo total de la operación.                               |
| plazoTranscurrido | Int         | Plazo transcurrido desde la fecha de alta de la operación. |
| porcentajeAvance  | Double      | Porcentaje de avance.                                      |

Los campos del tipo de dato estructurado sBTProducto son los siguientes

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre del producto.             |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

### Errores

| Código | Descripción                                       |
| ------ | ------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.        |
| 30002  | No se recuperó la cuenta para el Identificador: ? |
