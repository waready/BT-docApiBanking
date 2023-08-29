# Crear

## Crear

Método para crear una persona y cuenta cliente en Bantotal.

| Nombre publicación | Programa | Global/País |
| ------------------ | -------- | ----------- |
| BTClientes.Crear   | RBTPG027 | Global      |

> Ejemplo de invocación al método Crear:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.Crear>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0306ebbd9c4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtPersona>
            <bts:paisDocumentoId>845</bts:paisDocumentoId>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId>
            <bts:tipoDocumento></bts:tipoDocumento>
            <bts:nroDocumento>27573084</bts:nroDocumento>
            <bts:segundoNombre/>
            <bts:sexo>M</bts:sexo>
            <bts:estadoCivil>?</bts:estadoCivil>
            <bts:nacionalidad></bts:nacionalidad>
            <bts:ingresos>1500</bts:ingresos>
            <bts:ocupacionId>1</bts:ocupacionId>
            <bts:actividadLaboral></bts:actividadLaboral>
            <bts:apartamento>13B</bts:apartamento>
            <bts:localidad>10</bts:localidad>
            <bts:barrio/>
            <bts:sectorId>3</bts:sectorId>
            <bts:clasificacionInternaId>1</bts:clasificacionInternaId>
            <bts:telefonoCelular>091897718</bts:telefonoCelular>
            <bts:departamentoId>10</bts:departamentoId>
            <bts:nacionalidadId>845</bts:nacionalidadId>
            <bts:localidadId>10</bts:localidadId>
            <bts:clasificacionInterna></bts:clasificacionInterna>
            <bts:paisDomicilioId>845</bts:paisDomicilioId>
            <bts:sector></bts:sector>
            <bts:telefonoFijo>26004288</bts:telefonoFijo>
            <bts:codigoPostal/>
            <bts:primerNombre>aALEJANDRO</bts:primerNombre>
            <bts:fechaNacimiento>1976-02-26</bts:fechaNacimiento>
            <bts:actividadLaboralId>1112</bts:actividadLaboralId>
            <bts:primerApellido>vVAZQUEZ</bts:primerApellido>
            <bts:estadoCivilId>1</bts:estadoCivilId>
            <bts:segundoApellido>SZENTANDRASI</bts:segundoApellido>
            <bts:paisDocumento></bts:paisDocumento>
            <bts:fechaInicioActividad/>
            <bts:ocupacion></bts:ocupacion>
            <bts:paisDomicilio></bts:paisDomicilio>
            <bts:departamento></bts:departamento>
            <bts:fechaVencimiento></bts:fechaVencimiento>
            <bts:correoElectronico>AV@GMAIL.COM</bts:correoElectronico>
            <bts:numeroPuerta>7216</bts:numeroPuerta>
            <bts:calle>BAZZURRO</bts:calle>
            <bts:barrioId></bts:barrioId>
			<bts:ejecutivoId>1</bts:ejecutivoId>
			<bts:ejecutivo></bts:ejecutivo>
			<bts:piso>123</bts:piso>
         </bts:sdtPersona>
      </bts:BTClientes.Crear>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Crear=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtPersona": {
        "paisDocumentoId": 845,
        "tipoDocumentoId": 1,
        "nroDocumento": "41875255",
        "ingresos": "1500.00",
        "nacionalidad": "URUGUAY",
        "sexo": "M",
        "clasificacionInternaId": 1,
        "segundoNombre": "",
        "telefonoCelular": "",
        "departamentoId": 10,
        "ocupacionId": "1",
        "actividadLaboralId": 1112,
        "nacionalidadId": 845,
        "localidadId": "10",
        "paisDomicilioId": 845,
        "telefonoFijo": "26004288",
        "codigoPostal": "",
        "primerNombre": "aALEJANDRO",
        "fechaNacimiento": "1976-02-26",
        "primerApellido": "vVAZQUEZ",
        "estadoCivilId": "1",
        "segundoApellido": "SZENTANDRASI",
        "paisDocumento": "URUGUAY",
        "fechaInicioActividad": "1980-01-01",
        "ocupacion": "Empleado",
        "paisDomicilio": "URUGUAY",
        "fechaVencimiento": "2025-01-01",
        "correoElectronico": "AV@GMAIL.COM",
        "numeroPuerta": "7216",
        "calle": "BAZZURRO",
        "apartamento": "13B",
        "barrioId": 0,
        "sectorId": 3,
		"ejecutivoId": 1,
		"ejecutivo": "",
		"piso": "123"
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
      <BTClientes.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>0306ebbd9c4A8B5C60A82434</Token>
         </Btinreq>
         <clienteUId>181</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>770</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.Crear</Servicio>
            <Fecha>2017-12-14</Fecha>
            <Requerimiento/>
            <Hora>18:17:10</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.CrearResponse>
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
    "clienteUId": "202",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "835",
        "Estado": "OK",
        "Servicio": "BTClientes.Crear",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "01:48:53",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre     | Tipo        | Comentarios       |
| ---------- | ----------- | ----------------- |
| sdtPersona | sBTPersona1 | Datos de cliente. |

Los campos del tipo de dato estructurado sBTPersona1 son los siguientes

| Campo                  | Tipo   | Comentarios                             |
| ---------------------- | ------ | --------------------------------------- |
| paisDocumentoId\*      | Short  | Identificador de país del documento.    |
| tipoDocumentoId\*      | Short  | Identificador de tipo de documento.     |
| nroDocumento\*         | String | Número de documento.                    |
| fechaVencimiento       | Date   | Fecha de vencimiento de documento.      |
| primerApellido\*       | String | Primer apellido.                        |
| segundoApellido        | String | Segundo apellido.                       |
| primerNombre\*         | String | Primer nombre.                          |
| segundoNombre          | String | Segundo nombre.                         |
| sexo\*                 | String | Sexo (M/F).                             |
| fechaNacimiento\*      | Date   | Fecha de nacimiento.                    |
| estadoCivilId          | String | Identificador de estado civil.          |
| nacionalidadId         | Short  | Identificador de país.                  |
| ocupacionId\*          | Int    | Identificador de ocupación.             |
| actividadLaboralId\*   | Int    | Identificador de actividad laboral.     |
| fechaInicioActividad   | Date   | Fecha inicio actividad.                 |
| ingresos               | Double | Ingresos.                               |
| sectorId\*             | Short  | Identificador de sector.                |
| clasificacionInternaId | Short  | Identificador de clasificacion interna. |
| paisDomicilioId\*      | Short  | Identificador de país de domicilio.     |
| departamentoId\*       | Int    | Identificador de departamento.          |
| localidadId            | Int    | Identificador de localidad.             |
| barrioId               | Int    | Identificador de barrio.                |
| Calle\*                | String | Calle.                                  |
| numeroPuerta           | String | Número de puerta.                       |
| apartamento            | String | Apartamento.                            |
| codigoPostal           | String | Código postal.                          |
| telefonoFijo\*\*       | String | Teléfono fijo.                          |
| telefonoCelular\*\*    | String | Teléfono celular.                       |
| correoElectronico      | String | Correo electrónico.                     |
| ejecutivoId            | Int    | Identificador de ejecutivo.             |
| piso                   | String | Piso del domicilio.                     |

### Datos de salida

| Nombre     | Tipo | Comentarios                     |
| ---------- | ---- | ------------------------------- |
| clienteUId | Long | Identificador único de cliente. |

### Errores

| Código | Descripción                                                    |
| ------ | -------------------------------------------------------------- |
| 30001  | No se pudo obtener un identificador del cliente.               |
| 40001  | Debe ingresar País del Documento.                              |
| 40002  | El País del Documento no existe.                               |
| 40003  | Debe ingresar Tipo de Documento.                               |
| 40004  | El Tipo de Documento no existe.                                |
| 40005  | Debe ingresar Nro de Documento.                                |
| 40006  | Número de Documento incorrecto.                                |
| 40007  | Debe ingresar Primer Apellido.                                 |
| 40008  | Debe ingresar Primer Nombre.                                   |
| 40009  | Debe ingresar Fecha de Nacimiento.                             |
| 40010  | La Fecha de Nacimiento no puede ser posterior a hoy.           |
| 40011  | La persona no es mayor de 18 años.                             |
| 40012  | Debe ingresar Sexo.                                            |
| 40013  | Debe ingresar Ocupación.                                       |
| 40014  | El código de Ocupación no existe.                              |
| 40015  | La Fecha de Iinicio de Actividad no puede ser posterior a hoy. |
| 40016  | Caracteres incorrectos en nombre/apellido.                     |
| 40019  | Debe ingresar País del Domicilio.                              |
| 40020  | El País del Domicilio no existe.                               |
| 40021  | Debe ingresar Departamento.                                    |
| 40022  | El Departamento no existe.                                     |
| 40023  | Debe ingresar Localidad.                                       |
| 40024  | La Localidad no existe.                                        |
| 40025  | El barrio no existe.                                           |
| 40026  | Debe ingresar calle.                                           |
| 40028  | Debe ingresar al menos un Teléfono.                            |
| 40029  | Email inválido.                                                |
| 40030  | Persona en lista de inhabilitados.                             |
| 40035  | Debe ingresar Segmento.                                        |
| 40036  | El código de Segmento no existe.                               |
| 40037  | Debe ingresar clasificación interna.                           |
| 40038  | El código de clasificación interna no existe.                  |
| 40039  | Debe ingresar código de sector.                                |
| 40040  | El código de Sector no existe.                                 |
| 40041  | Debe ingresar Actividad Laboral.                               |
| 40042  | El código de Actividad Laboral no existe.                      |
| 40049  | Error al obtener el número de cuenta Bantotal.                 |
| 40051  | La persona ya existe.                                          |


## Crear con Persona Existente

Método para crear una cuenta cliente a partir de una persona extistente.

| Nombre publicación                  | Programa | Global/País |
| ----------------------------------- | -------- | ----------- |
| BTClientes.CrearConPersonaExistente | RBTPG218 | Global      |

###Versión V2R3

> Ejemplo de invocación al método Crear con Persona Existente V2R3:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.CrearConPersonaExistente>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>da17de0A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>22</bts:personaUId>
         <bts:sectorId>1</bts:sectorId>
         <bts:clasificacionInternaId>1</bts:clasificacionInternaId>
         <bts:ejecutivoId></bts:ejecutivoId>
      </bts:BTClientes.CrearConPersonaExistente>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?CrearConPersonaExistente' \
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
	"personaUId":"22",
	"sectorId":"1",
	"clasificacionInternaId":"1",
	"ejecutivoId":"",
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
      <BTClientes.CrearConPersonaExistenteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>da17de0A82434</Token>
         </Btinreq>
         <clienteUId>201</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8449</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.CrearConPersonaExistente</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>19:12:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.CrearConPersonaExistenteResponse>
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
	"clienteUId": 201,
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
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
personaUId | Long | Identificador único de la persona titular de la cuenta.
sectorId | Short | Identificador de sector.
clasificacionInternaId | Short | Identificador de clasificación interna.
ejecutivoId | Short | Identificador de ejecutivo de cuenta.
 
### Datos de salida

| Nombre     | Tipo | Comentarios                           |
| ---------- | ---- | ------------------------------------- |
| clienteUId | Long | Identificador único de cuenta creada. |

### Errores

| Código | Descripción                                                 |
| ------ | ----------------------------------------------------------- |
| 30001  | No se recibió el identificador de persona.                  |
| 30002  | No se recibió el identificador del sector.                  |
| 30003  | No se recibió el identificador de la clasificación interna. |
| 30005  | Ya existe la cuenta.                                        |

###Versión V2R2

> Ejemplo de invocación al método Crear con Persona Existente V2R2:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.CrearConPersonaExistente>
         <bts:Btinreq>
            <bts:Device>10</bts:Device>
            <bts:Token>da17de0A82434</bts:Token>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:personaUId>22</bts:personaUId>
         <bts:sectorId>1</bts:sectorId>
         <bts:clasificacionInternaId>1</bts:clasificacionInternaId>
         <bts:ejecutivoId></bts:ejecutivoId>
         <bts:actividadEconomicaId></bts:actividadEconomicaId>
         <bts:segmentoId></bts:segmentoId>
      </bts:BTClientes.CrearConPersonaExistente>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?CrearConPersonaExistente' \
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
	"personaUId":"22",
	"sectorId":"1",
	"clasificacionInternaId":"1",
	"ejecutivoId":"",
	"actividadEconomicaId":"",
	"segmentoId":""
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
      <BTClientes.CrearConPersonaExistenteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>10</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>da17de0A82434</Token>
         </Btinreq>
         <clienteUId>201</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>8449</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.CrearConPersonaExistente</Servicio>
            <Fecha>2019-05-07</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>19:12:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.CrearConPersonaExistenteResponse>
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
	"clienteUId": 201,
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

| Nombre                 | Tipo  | Comentarios                                             |
| ---------------------- | ----- | ------------------------------------------------------- |
| personaUId             | Long  | Identificador único de la persona titular de la cuenta. |
| sectorId               | Short | Identificador de sector.                                |
| clasificacionInternaId | Short | Identificador de clasificación interna.                 |
| ejecutivoId            | Short | Identificador de ejecutivo de cuenta.                   |
| actividadEconomicaId   | Int   | Identificador de actividad económica.                   |
| segmentoId             | Byte  | Identificador de segmento.                              |

### Datos de salida

| Nombre     | Tipo | Comentarios                           |
| ---------- | ---- | ------------------------------------- |
| clienteUId | Long | Identificador único de cuenta creada. |

### Errores

| Código | Descripción                                                 |
| ------ | ----------------------------------------------------------- |
| 30001  | No se recibió el identificador de persona.                  |
| 30002  | No se recibió el identificador del sector.                  |
| 30003  | No se recibió el identificador de la clasificación interna. |
| 30005  | Ya existe la cuenta.                                        |


## <sup style="color: red;" font-weight: bold;>Nuevo</sup> Crear Para Persona Jurídica

Método para crear una persona jurídica y su cuenta cliente.

| Nombre publicación                  | Programa | Global/País |
| ----------------------------------- | -------- | ----------- |
| BTClientes.CrearParaPersonaJuridica | RBTPG282 | Global      |

> Ejemplo de invocación al método Crear Para Persona Jurídica:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.CrearParaPersonaJuridica>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>247d9cc0a3CD285A89A23FBE</bts:Token>
            <bts:Device>MC</bts:Device>
         </bts:Btinreq>
         <bts:sdtPersonaJuridica>
            <bts:nroDocumento>219999990016</bts:nroDocumento>
            <bts:numeroPuerta>1</bts:numeroPuerta>
            <bts:nombreReducido>prueba</bts:nombreReducido>
            <bts:paisDomicilio></bts:paisDomicilio>
            <bts:razonSocial>EMPRESA</bts:razonSocial>
            <bts:departamento></bts:departamento>
            <bts:nroRegistro></bts:nroRegistro>
            <bts:naturalezaJuridica>1</bts:naturalezaJuridica>
            <bts:barrio>1</bts:barrio>
            <bts:apartamento></bts:apartamento>
            <bts:tipoDocumentoId>2</bts:tipoDocumentoId>
            <bts:tipoActividadId>1</bts:tipoActividadId>
            <bts:fechaConstitucion>2020-01-01</bts:fechaConstitucion>
            <bts:paisId>845</bts:paisId>
            <bts:actividad></bts:actividad>
            <bts:paisDomicilioId>845</bts:paisDomicilioId>
            <bts:pais></bts:pais>
            <bts:codigoPostal>91000</bts:codigoPostal>
            <bts:tipoActividad></bts:tipoActividad>
            <bts:barrioId>1</bts:barrioId>
            <bts:localidad></bts:localidad>
            <bts:localidadId>1008</bts:localidadId>
            <bts:actividadId>1111</bts:actividadId>
            <bts:calle>1</bts:calle>
            <bts:tipoDocumento>2</bts:tipoDocumento>
            <bts:naturalezaJuridicaId>1</bts:naturalezaJuridicaId>
            <bts:departamentoId>2</bts:departamentoId>
         </bts:sdtPersonaJuridica>
         <bts:sdtIntegrantesJuridicosAlta>
            <bts:sBTIntegranteJuridicoAlta>
               <bts:vinculoId>1</bts:vinculoId>
               <bts:personaUId>141</bts:personaUId>
            </bts:sBTIntegranteJuridicoAlta>
         </bts:sdtIntegrantesJuridicosAlta>
      </bts:BTClientes.CrearParaPersonaJuridica>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?CrearParaPersonaJuridica' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
   "Btinreq": {
   "Canal": "BTDIGITAL",
   "Requerimiento": "1",
   "Usuario": "INSTALADOR",
   "Token": "247d9cc0a3CD285A89A23FBE",
   "Device": "MC"
   },
   "sdtPersonaJuridicaAlta": {
   "nroDocumento": "219999990016",
   "numeroPuerta": "1",
   "nombreReducido": "prueba",
   "paisDomicilio": null,
   "razonSocial": "EMPRESA",
   "departamento": null,
   "nroRegistro": null,
   "naturalezaJuridica": "1",
   "barrio": "1",
   "apartamento": null,
   "tipoDocumentoId": "2",
   "tipoActividadId": "1",
   "fechaConstitucion": "2020-01-01",
   "paisId": "845",
   "actividad": null,
   "paisDomicilioId": "845",
   "pais": null,
   "codigoPostal": "91000",
   "tipoActividad": null,
   "barrioId": "1",
   "localidad": null,
   "localidadId": "1008",
   "actividadId": "1111",
   "calle": "1",
   "tipoDocumento": "2",
   "naturalezaJuridicaId": "1",
   "departamentoId": "2"
   },
   "sdtIntegrantesJuridicosAlta": {
   "sBTIntegranteJuridicoAlta": [
      {
         "vinculoId": "1",
         "personaUId": "141"
         }
   ]
   }
}
```
</code-block>
</code-group>
 
> El POST retornará la siguiente estructura:
 
<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTClientes.CrearParaPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>MC</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>247d9cc0a3CD285A89A23FBE</Token>
         </Btinreq>
         <clienteUId>783</clienteUId>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>107355</Numero>
            <Servicio>BTClientes.CrearParaPersonaJuridica</Servicio>
            <Estado>OK</Estado>
            <Fecha>2020-11-06</Fecha>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:42:14</Hora>
         </Btoutreq>
      </BTClientes.CrearParaPersonaJuridicaResponse>
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
		"Token": "247d9cc0a3CD285A89A23FBE"
	 },
	 "clienteUId": "783",
	 "Erroresnegocio": null,
	 "Btoutreq": {
		"Numero": "107338",
		"Servicio": "BTClientes.CrearParaPersonaJuridica",
		"Estado": "OK",
		"Fecha": "2020-11-05",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Hora": "12:31:25"
	 }
 }
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtPersonaJuridica | sBTPersonaJuridica1 | Datos de la persona jurídica.
sdtIntegrantesJuridicosAlta | sBTIntegranteJuridicoAlta | Listado de personas físicas integrantes de la persona jurídica.

Los campos del tipo de dato estructurado sBTPersonaJuridica1 son los siguientes:

| Campo                | Tipo   | Comentarios                           |
| -------------------- | ------ | ------------------------------------- |
| paisId               | Short  | Identificador del país.               |
| pais                 | String | Nombre del país.                      |
| tipoDocumentoId      | Short  | Identificador del tipo de documento.  |
| tipoDocumento        | String | Nombre del tipo de documento.         |
| nroDocumento         | String | Número de documento.                  |
| razonSocial          | String | Razón social.                         |
| nombreReducido       | String | Nombre reducido.                      |
| fechaConstitucion    | Date   | Fecha de constitución.                |
| tipoActividadId      | Long   | Identificador de tipo de actividad.   |
| tipoActividad        | String | Nombre de tipo de actividad.          |
| actividadId          | Long   | Identificador de actividad.           |
| actividad            | String | Nombre de actividad.                  |
| naturalezaJuridicaId | Short  | Identificador de naturaleza jurídica. |
| naturalezaJuridica   | String | Nombre de naturaleza jurídica.        |
| nroRegistro          | Long   | Número de registro.                   |
| paisDomicilioId      | Short  | Identificador del país de domicilio.  |
| paisDomicilio        | String | Nombre del país de domicilio.         |
| departamentoId       | Int    | Identificador de departamento.        |
| departamento         | String | Nombre de departamento.               |
| localidadId          | Int    | Identificador de localidad.           |
| localidad            | String | Nombre de localidad.                  |
| barrioId             | Int    | Identificador de barrio.              |
| barrio               | String | Nombre de barrio.                     |
| calle                | String | Calle.                                |
| numeroPuerta         | String | Número de puerta.                     |
| apartamento          | String | Apartamento.                          |
| codigoPostal         | String | Código postal.                        |

Los campos del tipo de dato estructurado sBTIntegranteJuridicoAlta son los siguientes:

| Campo         | Tipo   | Comentarios                                 |
| ------------- | ------ | ------------------------------------------- |
| personaUId    | Long   | Identificador único de persona.             |
| vinculoId     | Short  | Identificador de vínculo.                   |
| participacion | Double | Porcentaje de participación del integrante. |

### Datos de salida

| Nombre     | Tipo | Comentarios                     |
| ---------- | ---- | ------------------------------- |
| clienteUId | Long | Identificador único de cliente. |

### Errores

| Código | Descripción                                                             |
| ------ | ----------------------------------------------------------------------- |
| 30001  | Debe ingresar al menos un integrante.                                   |
| 30002  | Debe ingresar identificador de vínculo.                                 |
| 30003  | No se pudo obtener identificador único de la persona.                   |
| 30004  | No se pudo recuperar el número de cuenta.                               |
| 30005  | No se pudo obtener identificador único de la cuenta.                    |
| 40001  | Ya existe persona con los datos ingresados.                             |
| 40002  | Debe ingresar país.                                                     |
| 40003  | El país ingresado no existe.                                            |
| 40004  | Debe ingresar tipo de documento.                                        |
| 40005  | El tipo de documento ingresado no existe.                               |
| 40006  | El tipo de documento ingresado no aplica para una persona jurídica.     |
| 40007  | Debe ingresar número de documento.                                      |
| 40008  | Número de documento incorrecto.                                         |
| 40009  | Debe ingresar razón social.                                             |
| 40010  | Carcteres incorrectos en razón social.                                  |
| 40011  | Carcteres incorrectos en nombre reducido.                               |
| 40012  | Debe ingresar naturaleza jurídica.                                      |
| 40013  | La naturaleza jurídica ingresada no existe.                             |
| 40014  | Debe ingresar la fecha de constitución.                                 |
| 40015  | La fecha de constitución no puede ser posterior a la fecha de apertura. |
| 40016  | Debe ingresar tipo de actividad.                                        |
| 40017  | El tipo de actividad ingresado no existe.                               |
| 40018  | Debe ingresar actividad.                                                |
| 40019  | La actividad ingresada no existe.                                       |
| 40020  | Debe ingresar país del domicilio.                                       |
| 40021  | El país del domicilio no existe.                                        |
| 40022  | Debe ingresar departamento.                                             |
| 40023  | El departamento no existe.                                              |
| 40024  | Debe ingresar localidad.                                                |
| 40025  | La localidad no existe.                                                 |
| 40026  | El barrio no existe.                                                    |
