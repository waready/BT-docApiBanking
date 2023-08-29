# Productos

## Obtener Cuentas de Ahorro (Saldo Contable)

Método para obtener las cuentas de ahorro de un cliente, junto con el saldo contable de cada una.

| Nombre publicación              | Programa | Global/País |
| ------------------------------- | -------- | ----------- |
| BTClientes.ObtenerCuentasAhorro | RBTPG006 | Global      |

### Configuración Backend

1. Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores:

| Campo              | Valor                               |
| ------------------ | ----------------------------------- |
| Correlativo 1      | 2                                   |
| Correlativo 2      | 1                                   |
| Valor específico 1 | Identificador del módulo a incluir. |

2. Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores:

| Campo              | Valor                                   |
| ------------------ | --------------------------------------- |
| Correlativo 1      | 2                                       |
| Correlativo 2      | 2                                       |
| Valor específico 1 | Módulo del tipo de operación a excluir. |
| Valor específico 2 | Tipo de operación a excluir.            |

> Ejemplo de invocación al método Obtener Cuentas de Ahorro (Saldo Contable):

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerCuentasAhorro>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>161</bts:clienteUId>
      </bts:BTClientes.ObtenerCuentasAhorro>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerCuentasAhorro=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: af7c827f-03c0-79ac-a271-92fb1c13a461' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 161
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
      <BTClientes.ObtenerCuentasAhorroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPasivos>
            <sBTProductoPasivo>
               <operacionUId>281</operacionUId>
               <idOperacionFmt>000000011_001</idOperacionFmt>
               <idOperacionBT>0010100000021000000000000000001100001000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CA</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>PESOS</subCuenta>
               <saldo>7433400.28</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>282</operacionUId>
               <idOperacionFmt>000000011_004</idOperacionFmt>
               <idOperacionBT>0010000100021222200000000000001100004000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
                  <moneda>USD</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CA</tipoProducto>
               <sucursal>Sucursal Beta</sucursal>
               <subCuenta/>
               <saldo>0.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
         </sdtProductosPasivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>779</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerCuentasAhorro</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>11:41:09</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerCuentasAhorroResponse>
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
    "sdtProductosPasivos": {
        "sBTProductoPasivo": [
            {
                "tipoProducto": "CA",
                "estado": "Normal",
                "subCuenta": "PESOS",
                "operacionUId": "281",
                "saldo": "7433400.28",
                "idOperacionFmt": "000000011_001",
                "idOperacionBT": "0010100000021000000000000000001100001000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "CA",
                "estado": "Normal",
                "subCuenta": "",
                "operacionUId": "282",
                "saldo": "0.00",
                "idOperacionFmt": "000000011_004",
                "idOperacionBT": "0010000100021222200000000000001100004000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "USD",
                    "productoUId": "0",
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física"
                },
                "sucursal": "Sucursal Beta"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "780",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerCuentasAhorro",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "11:42:37",
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

| Nombre              | Tipo              | Comentarios                 |
| ------------------- | ----------------- | --------------------------- |
| sdtProductosPasivos | sBTProductoPasivo | Listado de cajas de ahorro. |

Los campos del tipo de dato estructurado sBTProductoPasivo son los siguientes

| Campo          | Tipo        | Comentarios                       |
| -------------- | ----------- | --------------------------------- |
| operacionUId   | Long        | Identificador único de operación. |
| idOperacionFmt | String      | Identificador string.             |
| idOperacionBT  | String      | Identificador String 2.           |
| producto       | sBTProducto | Datos del producto.               |
| tipoProducto   | String      | Símbolo de papel.                 |
| sucursal       | String      | Símbolo de papel.                 |
| subCuenta      | String      | Nombre subCuenta.                 |
| saldo          | Double      | Saldo contable de la CC.          |
| estado         | String      | Descripción de estado.            |

Los campos del tipo de dato estructurado sBTProducto son los siguientes

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre de producto.              |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recuperó la cuenta para el Identificador. |


## Obtener Cuentas de Ahorro (Saldo Disponible)

Método para obtener las cuentas de ahorro de un cliente junto con el saldo disponible de cada una.

| Nombre publicación                | Programa | Global/País |
| --------------------------------- | -------- | ----------- |
| BTClientes.ObtenerCuentasAhorroSD | RBTPG083 | Global      |

### Configuración Backend

1. Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores:

| Campo              | Valor                               |
| ------------------ | ----------------------------------- |
| Correlativo 1      | 2                                   |
| Correlativo 2      | 1                                   |
| Valor específico 1 | Identificador del módulo a incluir. |

2. Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores:

| Campo              | Valor                                   |
| ------------------ | --------------------------------------- |
| Correlativo 1      | 2                                       |
| Correlativo 2      | 2                                       |
| Valor específico 1 | Módulo del tipo de operación a excluir. |
| Valor específico 2 | Tipo de operación a excluir.            |

> Ejemplo de invocación al método Obtener Cuentas de Ahorro (Saldo Disponible):

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerCuentasAhorroSD>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>161</bts:clienteUId>
      </bts:BTClientes.ObtenerCuentasAhorroSD>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerCuentasAhorroSD=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: af7c827f-03c0-79ac-a271-92fb1c13a461' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 161
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
      <BTClientes.ObtenerCuentasAhorroSDResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPasivos>
            <sBTProductoPasivo>
               <operacionUId>281</operacionUId>
               <idOperacionFmt>000000011_001</idOperacionFmt>
               <idOperacionBT>0010100000021000000000000000001100001000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CA</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>PESOS</subCuenta>
               <saldo>7433400.28</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>282</operacionUId>
               <idOperacionFmt>000000011_004</idOperacionFmt>
               <idOperacionBT>0010000100021222200000000000001100004000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre>
                  <moneda>USD</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CA</tipoProducto>
               <sucursal>Sucursal Beta</sucursal>
               <subCuenta/>
               <saldo>0.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
         </sdtProductosPasivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>779</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerCuentasAhorro</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>11:41:09</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerCuentasAhorroSDResponse>
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
    "sdtProductosPasivos": {
        "sBTProductoPasivo": [
            {
                "tipoProducto": "CA",
                "estado": "Normal",
                "subCuenta": "PESOS",
                "operacionUId": "281",
                "saldo": "7433400.28",
                "idOperacionFmt": "000000011_001",
                "idOperacionBT": "0010100000021000000000000000001100001000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "CA",
                "estado": "Normal",
                "subCuenta": "",
                "operacionUId": "282",
                "saldo": "0.00",
                "idOperacionFmt": "000000011_004",
                "idOperacionBT": "0010000100021222200000000000001100004000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "USD",
                    "productoUId": "0",
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física"
                },
                "sucursal": "Sucursal Beta"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "780",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerCuentasAhorro",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "11:42:37",
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

| Nombre              | Tipo              | Comentarios                 |
| ------------------- | ----------------- | --------------------------- |
| sdtProductosPasivos | sBTProductoPasivo | Listado de cajas de ahorro. |

Los campos del tipo de dato estructurado sBTProductoPasivo son los siguientes

| Campo          | Tipo        | Comentarios                       |
| -------------- | ----------- | --------------------------------- |
| operacionUId   | Long        | Identificador único de operación. |
| idOperacionFmt | String      | Identificador string.             |
| idOperacionBT  | String      | Identificador String 2.           |
| producto       | sBTProducto | Datos del producto.               |
| tipoProducto   | String      | Símbolo de papel.                 |
| sucursal       | String      | Símbolo de papel.                 |
| subCuenta      | String      | Nombre subCuenta.                 |
| saldo          | Double      | Saldo disponible de la CC.        |
| estado         | String      | Descripción de estado.            |

Los campos del tipo de dato estructurado sBTProducto son los siguientes

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre de producto.              |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recuperó la cuenta para el identificador. |


## Obtener Cuentas Corrientes (Saldo Contable)

Método para obtener las cuentas corrientes de un cliente junto con el saldo contable de cada una.

Nombre publicación | Programa | Global/País
--------- | ----------- | -----------
BTClientes.ObtenerCuentasCorrientes | RBTPG008 | Global

### Configuración Backend

1) Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores:

Campo | Valor
--------- | ----------- 
Correlativo 1 | 1
Correlativo 2 | 1
Valor específico 1 | Identificador del módulo a incluir.


2) Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores:

Campo | Valor
--------- | ----------- 
Correlativo 1 | 1
Correlativo 2 | 2
Valor específico 1 | Módulo del tipo de operación a excluir.
Valor específico 2 | Tipo de operación a excluir.	

> Ejemplo de invocación al método Obtener Cuentas Corrientes (Saldo Contable):

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerCuentasCorrientes>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerCuentasCorrientes>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerCuentasCorrientes=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: d1963f3a-531c-6f87-db06-4ea6bee01768' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 4
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
      <BTClientes.ObtenerCuentasCorrientesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPasivos>
            <sBTProductoPasivo>
               <operacionUId>9</operacionUId>
               <idOperacionFmt>000000027_001</idOperacionFmt>
               <idOperacionBT>0010100000020000000000000000002700001000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CC</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>PESOS</subCuenta>
               <saldo>26675306.42</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>81</operacionUId>
               <idOperacionFmt>000000027_004</idOperacionFmt>
               <idOperacionBT>0010100000020000000000000000002700004000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CC</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>Prueba CC</subCuenta>
               <saldo>4500.00</saldo>
               <estado>Cobro Administrativo</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>61</operacionUId>
               <idOperacionFmt>000000027_003</idOperacionFmt>
               <idOperacionBT>0010100000020000000000000000002700003000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CC</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta/>
               <saldo>120000.00</saldo>
               <estado>Cobro Administrativo</estado>
            </sBTProductoPasivo>
         </sdtProductosPasivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>781</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerCuentasCorrientes</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>12:58:50</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerCuentasCorrientesResponse>
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
    "sdtProductosPasivos": {
        "sBTProductoPasivo": [
            {
                "tipoProducto": "CC",
                "estado": "Normal",
                "subCuenta": "PESOS",
                "operacionUId": "9",
                "saldo": "26675306.42",
                "idOperacionFmt": "000000027_001",
                "idOperacionBT": "0010100000020000000000000000002700001000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "CC",
                "estado": "Cobro Administrativo",
                "subCuenta": "Prueba CC",
                "operacionUId": "81",
                "saldo": "4500.00",
                "idOperacionFmt": "000000027_004",
                "idOperacionBT": "0010100000020000000000000000002700004000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "CC",
                "estado": "Cobro Administrativo",
                "subCuenta": "",
                "operacionUId": "61",
                "saldo": "120000.00",
                "idOperacionFmt": "000000027_003",
                "idOperacionBT": "0010100000020000000000000000002700003000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
                },
                "sucursal": "Casa Matriz"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "782",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerCuentasCorrientes",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "13:02:32",
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

### Datos de salida

Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtProductosPasivos | sBTProductoPasivo | Listado de cuentas corrientes.

Los campos del tipo de dato estructurado sBTProductoPasivo son los siguientes

Campo | Tipo | Comentarios
--------- | ----------- | -----------
operacionUId | Long | Identificador único de operación.
idOperacionFmt | String | Identificador string.
idOperacionBT | String | Identificador String 2.
producto | sBTProducto | Datos del producto.
tipoProducto | String | Símbolo de papel.
sucursal | String | Símbolo de papel.
subCuenta | String | Nombre subCuenta.
saldo | Double | Saldo contable de la CC.
estado | String | Descripción de estado.

Los campos del tipo de dato estructurado sBTProducto son los siguientes

Campo | Tipo | Comentarios
--------- | ----------- | -----------
productoUId | Long | Identificador único de producto.
nombre | String | Nombre de producto.
moneda | String | Símbolo de moneda.
papel | String | Símbolo de papel.

### Errores

Código | Descripción
--------- | -----------
30001 | No se recibió el identificador de cliente.
30002 | No se recuperó la cuenta para el Identificador.

## Obtener Cuentas Corrientes (Saldo Disponible)

Método para obtener las cuentas corrientes de un cliente junto con el saldo disponible de cada una.

| Nombre publicación                    | Programa | Global/País |
| ------------------------------------- | -------- | ----------- |
| BTClientes.ObtenerCuentasCorrientesSD | RBTPG084 | Global      |

### Configuración Backend

1. Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores:

| Campo              | Valor                               |
| ------------------ | ----------------------------------- |
| Correlativo 1      | 1                                   |
| Correlativo 2      | 1                                   |
| Valor específico 1 | Identificador del módulo a incluir. |

2. Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores:

| Campo              | Valor                                   |
| ------------------ | --------------------------------------- |
| Correlativo 1      | 1                                       |
| Correlativo 2      | 2                                       |
| Valor específico 1 | Módulo del tipo de operación a excluir. |
| Valor específico 2 | Tipo de operación a excluir.            |

> Ejemplo de invocación al método Obtener Cuentas Corrientes (Saldo Disponible):

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerCuentasCorrientes>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerCuentasCorrientes>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerCuentasCorrientes=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: d1963f3a-531c-6f87-db06-4ea6bee01768' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 4
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
      <BTClientes.ObtenerCuentasCorrientesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPasivos>
            <sBTProductoPasivo>
               <operacionUId>9</operacionUId>
               <idOperacionFmt>000000027_001</idOperacionFmt>
               <idOperacionBT>0010100000020000000000000000002700001000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CC</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>PESOS</subCuenta>
               <saldo>26675306.42</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>81</operacionUId>
               <idOperacionFmt>000000027_004</idOperacionFmt>
               <idOperacionBT>0010100000020000000000000000002700004000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CC</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta>Prueba CC</subCuenta>
               <saldo>4500.00</saldo>
               <estado>Cobro Administrativo</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>61</operacionUId>
               <idOperacionFmt>000000027_003</idOperacionFmt>
               <idOperacionBT>0010100000020000000000000000002700003000000000001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>CC</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta/>
               <saldo>120000.00</saldo>
               <estado>Cobro Administrativo</estado>
            </sBTProductoPasivo>
         </sdtProductosPasivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>781</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerCuentasCorrientes</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>12:58:50</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerCuentasCorrientesSDResponse>
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
    "sdtProductosPasivos": {
        "sBTProductoPasivo": [
            {
                "tipoProducto": "CC",
                "estado": "Normal",
                "subCuenta": "PESOS",
                "operacionUId": "9",
                "saldo": "26675306.42",
                "idOperacionFmt": "000000027_001",
                "idOperacionBT": "0010100000020000000000000000002700001000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "CC",
                "estado": "Cobro Administrativo",
                "subCuenta": "Prueba CC",
                "operacionUId": "81",
                "saldo": "4500.00",
                "idOperacionFmt": "000000027_004",
                "idOperacionBT": "0010100000020000000000000000002700004000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "CC",
                "estado": "Cobro Administrativo",
                "subCuenta": "",
                "operacionUId": "61",
                "saldo": "120000.00",
                "idOperacionFmt": "000000027_003",
                "idOperacionBT": "0010100000020000000000000000002700003000000000001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física"
                },
                "sucursal": "Casa Matriz"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "782",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerCuentasCorrientes",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "13:02:32",
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

| Nombre              | Tipo              | Comentarios                    |
| ------------------- | ----------------- | ------------------------------ |
| sdtProductosPasivos | sBTProductoPasivo | Listado de cuentas corrientes. |

Los campos del tipo de dato estructurado sBTProductoPasivo son los siguientes

| Campo          | Tipo        | Comentarios                       |
| -------------- | ----------- | --------------------------------- |
| operacionUId   | Long        | Identificador único de operación. |
| idOperacionFmt | String      | Identificador string.             |
| idOperacionBT  | String      | Identificador String 2.           |
| producto       | sBTProducto | Datos del producto.               |
| tipoProducto   | String      | Símbolo de papel.                 |
| sucursal       | String      | Símbolo de papel.                 |
| subCuenta      | String      | Nombre subCuenta.                 |
| saldo          | Double      | Saldo disponible de la CC.        |
| estado         | String      | Descripción de estado.            |

Los campos del tipo de dato estructurado sBTProducto son los siguientes

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre de producto.              |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recuperó la cuenta para el Identificador. |

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

## Obtener Plazos Fijos

Método para devolver el listado de los productos de depósito a plazo fijo de un cliente.

| Nombre publicación            | Programa | Global/País |
| ----------------------------- | -------- | ----------- |
| BTClientes.ObtenerPlazosFijos | RBTPG013 | Global      |

### Configuración Backend

1. Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores:

| Campo              | Valor                               |
| ------------------ | ----------------------------------- |
| Correlativo 1      | 3                                   |
| Correlativo 2      | 1                                   |
| Valor específico 1 | Identificador del módulo a incluir. |

2. Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores:

| Campo              | Valor                                   |
| ------------------ | --------------------------------------- |
| Correlativo 1      | 3                                       |
| Correlativo 2      | 2                                       |
| Valor específico 1 | Módulo del tipo de operación a excluir. |
| Valor específico 2 | Tipo de operación a excluir.            |

> Ejemplo de invocación al método Obtener Plazos Fijos:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPlazosFijos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerPlazosFijos>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPlazosFijos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 315347e0-dc1b-de4d-6160-6f4f39d19acb' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 4
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
      <BTClientes.ObtenerPlazosFijosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPasivos>
            <sBTProductoPasivo>
               <operacionUId>6</operacionUId>
               <idOperacionFmt>0000000028_000</idOperacionFmt>
               <idOperacionBT>0010100000022000000000000000002700000000000028001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>DP</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta/>
               <saldo>15000.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>7</operacionUId>
               <idOperacionFmt>0000000092_000</idOperacionFmt>
               <idOperacionBT>0010000100022000000000000000002700000000000092001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>DP</tipoProducto>
               <sucursal>Sucursal Beta</sucursal>
               <subCuenta/>
               <saldo>350000.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>381</operacionUId>
               <idOperacionFmt>0000000468_000</idOperacionFmt>
               <idOperacionBT>0010100000522000000000000000002700000000000468001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>AHORRO PROGRAMADO, Ahorro en Sueldo Pesos</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>DP</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta/>
               <saldo>15000.00</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
            <sBTProductoPasivo>
               <operacionUId>382</operacionUId>
               <idOperacionFmt>0000000469_001</idOperacionFmt>
               <idOperacionBT>0010100000522000000000000000002700001000000469001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>AHORRO PROGRAMADO, Ahorro en Sueldo Pesos</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <tipoProducto>DP</tipoProducto>
               <sucursal>Casa Matriz</sucursal>
               <subCuenta/>
               <saldo>33217.36</saldo>
               <estado>Normal</estado>
            </sBTProductoPasivo>
         </sdtProductosPasivos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>783</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerPlazosFijos</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>13:49:48</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPlazosFijosResponse>
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
    "sdtProductosPasivos": {
        "sBTProductoPasivo": [
            {
                "tipoProducto": "DP",
                "estado": "Normal",
                "subCuenta": "",
                "operacionUId": "6",
                "saldo": "15000.00",
                "idOperacionFmt": "0000000028_000",
                "idOperacionBT": "0010100000022000000000000000002700000000000028001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "DP",
                "estado": "Normal",
                "subCuenta": "",
                "operacionUId": "7",
                "saldo": "350000.00",
                "idOperacionFmt": "0000000092_000",
                "idOperacionBT": "0010000100022000000000000000002700000000000092001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible"
                },
                "sucursal": "Sucursal Beta"
            },
            {
                "tipoProducto": "DP",
                "estado": "Normal",
                "subCuenta": "",
                "operacionUId": "381",
                "saldo": "15000.00",
                "idOperacionFmt": "0000000468_000",
                "idOperacionBT": "0010100000522000000000000000002700000000000468001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "AHORRO PROGRAMADO, Ahorro en Sueldo Pesos"
                },
                "sucursal": "Casa Matriz"
            },
            {
                "tipoProducto": "DP",
                "estado": "Normal",
                "subCuenta": "",
                "operacionUId": "382",
                "saldo": "33217.36",
                "idOperacionFmt": "0000000469_001",
                "idOperacionBT": "0010100000522000000000000000002700001000000469001",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "AHORRO PROGRAMADO, Ahorro en Sueldo Pesos"
                },
                "sucursal": "Casa Matriz"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "784",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerPlazosFijos",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "13:50:44",
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

| Nombre              | Tipo              | Comentarios              |
| ------------------- | ----------------- | ------------------------ |
| sdtProductosPasivos | sBTProductoPasivo | Listado de plazos fijos. |

Los campos del tipo de dato estructurado sBTProductoPasivo son los siguientes

| Campo          | Tipo        | Comentarios                       |
| -------------- | ----------- | --------------------------------- |
| operacionUId   | Long        | Identificador único de operación. |
| idOperacionFmt | String      | Identificador string.             |
| idOperacionBT  | String      | Identificador String 2.           |
| producto       | sBTProducto | Datos del producto.               |
| tipoProducto   | String      | Símbolo de papel.                 |
| sucursal       | String      | Símbolo de papel.                 |
| saldo          | Double      | Saldo del DPF.                    |
| estado         | String      | Descripción de estado.            |

Los campos del tipo de dato estructurado sBTProducto son los siguientes

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre de producto.              |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recuperó la cuenta para el Identificador. |

## Obtener Préstamos

Método para obtener un listado de los productos de préstamo de un cliente.

| Nombre publicación          | Programa | Global/País |
| --------------------------- | -------- | ----------- |
| BTClientes.ObtenerPrestamos | RBTPG011 | Global      |

### Configuración Backend

1. Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores:

| Campo              | Valor                               |
| ------------------ | ----------------------------------- |
| Correlativo 1      | 50                                  |
| Correlativo 2      | 1                                   |
| Valor específico 1 | Identificador del módulo a incluir. |

2. Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores:

| Campo              | Valor                                   |
| ------------------ | --------------------------------------- |
| Correlativo 1      | 50                                      |
| Correlativo 2      | 2                                       |
| Valor específico 1 | Módulo del tipo de operación a excluir. |
| Valor específico 2 | Tipo de operación a excluir.            |

> Ejemplo de invocación al método de Obtener Obtener Préstamos:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPrestamos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerPrestamos>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPrestamos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 4
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
      <BTClientes.ObtenerPrestamosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPrestamos>
            <sBTProductoPrestamo>
               <operacionUId>1</operacionUId>
               <idOperacionFmt>0000000170-000</idOperacionFmt>
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Sucursal Beta</sucursal>
               <saldo>87128.11</saldo>
               <estado/>
            </sBTProductoPrestamo>
            <sBTProductoPrestamo>
               <operacionUId>2</operacionUId>
               <idOperacionFmt>0000000080-000</idOperacionFmt>
               <idOperacionBT>0010100000101000000000000000002700000000000080001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <saldo>124195.84</saldo>
               <estado/>
            </sBTProductoPrestamo>
            <sBTProductoPrestamo>
               <operacionUId>361</operacionUId>
               <idOperacionFmt>0000000412-000</idOperacionFmt>
               <idOperacionBT>0010100000101000000000000000002700000000000412003</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <saldo>100000.00</saldo>
               <estado/>
            </sBTProductoPrestamo>
         </sdtProductosPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>785</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerPrestamos</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>16:07:38</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPrestamosResponse>
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
    "sdtProductosPrestamos": {
        "sBTProductoPrestamo": [
            {
                "saldo": "87128.11",
                "sucursal": "Sucursal Beta",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad"
                },
                "idOperacionBT": "0010000100101000000000000000002700000000000170003",
                "operacionUId": "1",
                "idOperacionFmt": "0000000170-000",
                "estado": ""
            },
            {
                "saldo": "124195.84",
                "sucursal": "Casa Matriz",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
                },
                "idOperacionBT": "0010100000101000000000000000002700000000000080001",
                "operacionUId": "2",
                "idOperacionFmt": "0000000080-000",
                "estado": ""
            },
            {
                "saldo": "100000.00",
                "sucursal": "Casa Matriz",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad"
                },
                "idOperacionBT": "0010100000101000000000000000002700000000000412003",
                "operacionUId": "361",
                "idOperacionFmt": "0000000412-000",
                "estado": ""
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "786",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerPrestamos",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
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

| Nombre                | Tipo                | Comentarios           |
| --------------------- | ------------------- | --------------------- |
| sdtProductosPrestamos | sBTProductoPrestamo | Listado de préstamos. |

Los campos del tipo de dato estructurado sBTProductoPrestamo son los siguientes

| Campo          | Tipo        | Comentarios                       |
| -------------- | ----------- | --------------------------------- |
| operacionUId   | Long        | Identificador único de operación. |
| idOperacionFmt | String      | Identificador string.             |
| idOperacionBT  | String      | Identificador String 2.           |
| producto       | sBTProducto | Datos del producto.               |
| sucursal       | String      | Símbolo de papel.                 |
| saldo          | Double      | Capital.                          |
| estado         | String      | Descripción de estado.            |

Los campos del tipo de dato estructurado sBTProducto son los siguientes

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre de producto.              |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recuperó la cuenta para el identificador. |


## Obtener Prestamos Cancelados

Método para devolver un listado de las operaciones de préstamos cancelados para un cliente.

| Nombre publicación                    | Programa | Global/País |
| ------------------------------------- | -------- | ----------- |
| BTClientes.ObtenerPrestamosCancelados | RBTPG219 | Global      |

> Ejemplo de invocación al servicio Obtener Prestamos Cancelados:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPrestamosCancelados>
         <bts:Btinreq>
            <bts:Device>MC</bts:Device>
            <bts:Token>b674899860CD285A89A23FBE</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:clienteUId>5</bts:clienteUId>
      </bts:BTClientes.ObtenerPrestamosCancelados>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?ObtenerSaldoDisponible \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
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
      <BTClientes.ObtenerPrestamosCanceladosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b674899860CD285A89A23FBE</Token>
         </Btinreq>
         <prestamos>
            <sBTPrestamoCancelado>
               <operacionUId>1</operacionUId>
               <idOperacionFmt>0000000170-000</idOperacionFmt>
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Sucursal Beta</sucursal>
               <fechaValor>2019-01-15</fechaValor>
               <fechaVencimiento>2020-01-15</fechaVencimiento>
               <fechaCancelacion>2020-01-15</fechaCancelacion>
            </sBTPrestamoCancelado>
         </prestamos>
         <Erroresnegocio/>
         <Btoutreq>
            <Numero>270</Numero>
            <Servicio>BTClientes.ObtenerPrestamosCancelados</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-04-13</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>10:42:34</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPrestamosCanceladosResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
	"Btinreq": {
		"Device": "MC",
		"Usuario": "INSTALADOR",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "b674899860CD285A89A23FBE"
	},
	"prestamos": {
		"sBTPrestamoCancelado": {
			"operacionUId": "1",
			"idOperacionFmt": "0000000170-000",
			"idOperacionBT": "0010000100101000000000000000002700000000000170003",
			"producto": {
				"productoUId": "0",
				"nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad",
				"moneda": "$",
				"papel": ""
			},
			"sucursal": "Sucursal Beta",
			"fechaValor": "2019-01-15",
			"fechaVencimiento": "2020-01-15",
			"fechaCancelacion": "2020-01-15"
		}
	},
	"Erroresnegocio": "",
	"Btoutreq": {
		"Numero": "270",
		"Servicio": "BTClientes.ObtenerPrestamosCancelados",
		"Estado": "OK",
		"Fecha": "2020-04-13",
		"Requerimiento": "1",
		"Hora": "10:42:34",
		"Canal": "BTDIGITAL"
	},
}
```
</code-block>
</code-group>

### Datos de entrada

| Nombre     | Tipo | Comentarios               |
| ---------- | ---- | ------------------------- |
| clienteUId | Long | Identificador de cliente. |

### Datos de salida

| Nombre    | Tipo                 | Comentarios                      |
| --------- | -------------------- | -------------------------------- |
| prestamos | sBTPrestamoCancelado | Listado de préstamos cancelados. |

Los campos del tipo de dato estructurado sBTPrestamoCancelado son los siguientes

| Campo            | Tipo        | Comentarios                       |
| ---------------- | ----------- | --------------------------------- |
| operacionUId     | Long        | Identificador único de operación. |
| idOperacionFmt   | String      | Identificador string.             |
| idOperacionBT    | String      | Identificador String 2.           |
| producto         | sBTProducto | Datos del producto.               |
| sucursal         | String      | Nombre de la Sucursal.            |
| fechaValor       | Date        | Fecha valor de la operación.      |
| fechaVencimiento | Date        | Fecha de vencimiento.             |
| fechaCancelacion | Date        | Fecha de cancelación.             |

Los campos del tipo de dato estructurado sBTProducto son los siguientes

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| Campo       | Tipo   | Comentarios.                     |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre de producto.              |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recuperó la cuenta para el Identificador. |

## Obtener Préstamos Castigados

Método para devolver un listado los productos préstamos castigados de un cliente

| Nombre publicación                    | Programa | Global/País |
| ------------------------------------- | -------- | ----------- |
| BTClientes.ObtenerPrestamosCastigados | RBTPG185 | Global      |

### Configuración Backend

1. Se debe parametrizar el modulo correspondiente a castigos ingresando en la guía especial 1041 los siguientes valores:

| Campo              | Valor                               |
| ------------------ | ----------------------------------- |
| Correlativo 1      | 1                                   |
| Correlativo 2      | 1                                   |
| Valor específico 1 | Módulo correspondiente a castigos.  |
| Valor específico 2 | 67 (Estado de operación castigada). |

> Ejemplo de invocación al método Obtener Préstamos Castigados:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPrestamosCastigados>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>4</bts:clienteUId>
      </bts:BTClientes.ObtenerPrestamosCastigados>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPrestamosCastigados=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "clienteUId": 4
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
      <BTClientes.ObtenerPrestamosCastigadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>845cec4b724A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductosPrestamos>
            <sBTProductoPrestamo>
               <operacionUId>1</operacionUId>
               <idOperacionFmt>0000000170-000</idOperacionFmt>
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Sucursal Beta</sucursal>
               <saldo>87128.11</saldo>
               <estado/>
            </sBTProductoPrestamo>
         </sdtProductosPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>785</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerPrestamosCastigados</Servicio>
            <Fecha>2017-12-15</Fecha>
            <Requerimiento/>
            <Hora>16:07:38</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerPrestamosCastigadosResponse>
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
    "sdtProductosPrestamos": {
        "sBTProductoPrestamo": [
            {
                "saldo": "87128.11",
                "sucursal": "Sucursal Beta",
                "producto": {
                    "papel": "",
                    "moneda": "$",
                    "productoUId": "0",
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad"
                },
                "idOperacionBT": "0010000100101000000000000000002700000000000170003",
                "operacionUId": "1",
                "idOperacionFmt": "0000000170-000",
                "estado": ""
            },
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "786",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerPrestamosCastigados",
        "Fecha": "2017-12-15",
        "Requerimiento": "",
        "Hora": "16:35:22",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre      | Tipo | Comentarios                                                                                |
| ----------- | ---- | ------------------------------------------------------------------------------------------ |
| clienteUId  | Long | Identificador único de cliente.                                                            |
| correlativo | Int  | Correlativo en el que se guardó el módulo correspondiente a préstamos castigados [HIDDEN]. |

### Datos de salida

| Nombre                | Tipo                | Comentarios           |
| --------------------- | ------------------- | --------------------- |
| sdtProductosPrestamos | sBTProductoPrestamo | Listado de préstamos. |

Los campos del tipo de dato estructurado sBTProductoPrestamo son los siguientes

| Campo          | Tipo        | Comentarios                       |
| -------------- | ----------- | --------------------------------- |
| operacionUId   | Long        | Identificador único de operación. |
| idOperacionFmt | String      | Identificador string.             |
| idOperacionBT  | String      | Identificador String 2.           |
| producto       | sBTProducto | Datos del producto.               |
| sucursal       | String      | Símbolo de papel.                 |
| saldo          | Double      | Capital.                          |
| estado         | String      | Descripción de estado.            |

Los campos del tipo de dato estructurado sBTProducto son los siguientes

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre de producto.              |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recuperó la cuenta para el identificador. |

## Obtener Prestamos con Avance

Método para obtener un listado de los préstamos de un cliente con su avance

| Nombre publicación                   | Programa | Global/País |
| ------------------------------------ | -------- | ----------- |
| BTClientes.ObtenerPrestamosConAvance | RBTPG259 | Global      |

> Ejemplo de invocación al método Obtener Prestamos con Avance:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerPrestamosConAvance>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>324915377F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
      </bts:BTClientes.ObtenerPrestamosConAvance>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPrestamosConAvance=' \
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
    "clienteUId": "1",
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
      <BTClientes.ObtenerPrestamosConAvanceResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>324915377F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamos>
            <sBTProgresoPrestamo>
               <operacionUId>10</operacionUId>
               <idOperacionFmt>0000000170-000</idOperacionFmt>
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amort. Libre UI_Empresa</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Sucursal Beta</sucursal>
               <estado>Cobro Judicial</estado>
               <cantidadCuotas>12</cantidadCuotas>
               <cantidadCuotasPagas>2</cantidadCuotasPagas>
               <capitalDesembolsado>100000.00</capitalDesembolsado>
               <capitalCancelado>16666.67</capitalCancelado>
            </sBTProgresoPrestamo>
            <sBTProgresoPrestamo>
               <operacionUId>11</operacionUId>
               <idOperacionFmt>0000000048-000</idOperacionFmt>
               <idOperacionBT>0010100000101000000000000000002700000000000048001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <estado>Normal</estado>
               <cantidadCuotas>12</cantidadCuotas>
               <cantidadCuotasPagas>0</cantidadCuotasPagas>
               <capitalDesembolsado>515000.00</capitalDesembolsado>
               <capitalCancelado>16666.67</capitalCancelado>
            </sBTProgresoPrestamo>
            <sBTProgresoPrestamo>
               <operacionUId>12</operacionUId>
               <idOperacionFmt>0000000080-000</idOperacionFmt>
               <idOperacionBT>0010100000101000000000000000002700000000000080001</idOperacionBT>
               <producto>
                  <productoUId>0</productoUId>
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
                  <moneda>$</moneda>
                  <papel/>
               </producto>
               <sucursal>Casa Matriz</sucursal>
               <estado>Normal</estado>
               <cantidadCuotas>12</cantidadCuotas>
               <cantidadCuotasPagas>6</cantidadCuotasPagas>
               <capitalDesembolsado>765000.00</capitalDesembolsado>
               <capitalCancelado>142470.83</capitalCancelado>
            </sBTProgresoPrestamo>
         </sdtPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTClientes.ObtenerPrestamosConAvance</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>12:58:57</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6923</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTClientes.ObtenerPrestamosConAvanceResponse>
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
    "sdtPrestamos": {
        "sBTProgresoPrestamo": [
            {
                "operacionUId": 10,
                "idOperacionFmt": "0000000170-000",
                "idOperacionBT": "0010000100101000000000000000002700000000000170003",
                "producto": {
                    "productoUId": 0,
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amort. Libre UI_Empresa",
                    "moneda": "$",
                    "papel": ""
                },
                "sucursal": "Sucursal Beta",
                "estado": "Cobro Judicial",
                "cantidadCuotas": 12,
                "cantidadCuotasPagas": 2,
                "capitalDesembolsado": 100000.00,
                "capitalCancelado": 16666.67
            },
            {
                "operacionUId": 11,
                "idOperacionFmt": "0000000048-000",
                "idOperacionBT": "0010100000101000000000000000002700000000000048001",
                "producto": {
                    "productoUId": 0,
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF",
                    "moneda": "$",
                    "papel": ""
                },
                "sucursal": "Casa Matriz",
                "estado": "Normal",
                "cantidadCuotas": 12,
                "cantidadCuotasPagas": 0,
                "capitalDesembolsado": 515000.00,
                "capitalCancelado": 16666.67
            },
            {
                "operacionUId": 12,
                "idOperacionFmt": "0000000080-000",
                "idOperacionBT": "0010100000101000000000000000002700000000000080001",
                "producto": {
                    "productoUId": 0,
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF",
                    "moneda": "$",
                    "papel": ""
                },
                "sucursal": "Casa Matriz",
                "estado": "Normal",
                "cantidadCuotas": 12,
                "cantidadCuotasPagas": 6,
                "capitalDesembolsado": 765000.00,
                "capitalCancelado": 142470.83
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTClientes.ObtenerPrestamosConAvance",
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

| Nombre       | Tipo                | Comentarios           |
| ------------ | ------------------- | --------------------- |
| sdtPrestamos | sBTProgresoPrestamo | Listado de préstamos. |

Los campos del tipo de dato estructurado sBTProgresoPrestamo son los siguientes

| Campo               | Tipo        | Comentarios                            |
| ------------------- | ----------- | -------------------------------------- |
| operacionUId        | Long        | Identificador.                         |
| idOperacionFmt      | String      | Identificador string.                  |
| idOperacionBT       | String      | Identificador String 2.                |
| producto            | sBTProducto | Datos del producto.                    |
| sucursal            | String      | Nombre de la sucursal de alta.         |
| estado              | String      | Descrición de estado de la operación.  |
| cantidadCuotas      | Short       | Cantidad de cuotas del préstamo.       |
| cantidadCuotasPagas | Short       | Cantidad de cuotas pagas del préstamo. |
| capitalDesembolsado | Double      | Capital desembolsado del préstamo.     |
| capitalCancelado    | Double      | Capital cancelado del préstamo.        |

Los campos del tipo de dato estructurado sBTProducto son los siguientes

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre del producto.             |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

Los campos del tipo de dato estructurado sCTResumenProducto son los siguientes

| Campo       | Tipo   | Comentarios                          |
| ----------- | ------ | ------------------------------------ |
| descripcion | String | Descripción.                         |
| cantidad    | Int    | Cantidad de operaciones.             |
| saldoUSD    | Double | Saldo disponible en dólares.         |
| saldoMN     | Double | Saldo disponible en moneda nacional. |

### Errores

| Código | Descripción                                       |
| ------ | ------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.        |
| 30002  | No se recuperó la cuenta para el Identificador: ? |

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
