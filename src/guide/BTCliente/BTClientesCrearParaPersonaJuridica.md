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
