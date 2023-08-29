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
