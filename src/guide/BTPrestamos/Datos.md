# Datos

## Obtener Cronograma

Método para obtener el cronograma de un préstamo

| Nombre publicación            | Programa | Global/País |
| ----------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerCronograma | RBTPG072 | Global      |

> Ejemplo de invocación al método Obtener Cronograma:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerCronograma>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>361</bts:operacionUId>
      </bts:BTPrestamos.ObtenerCronograma>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCronograma=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 361
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
      <BTPrestamos.ObtenerCronogramaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>1</nroCuota>
               <fechaPago>2018-11-05</fechaPago>
               <tipoCuota>I</tipoCuota>
               <concepto>Interés Vencido</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>0.00</capital>
               <intereses>0.00</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>0.00</total>
               <estado>Paga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>2018-11-05</fechaUltimoPago>
               <importePago>1287.08</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>2</nroCuota>
               <fechaPago>2018-12-05</fechaPago>
               <tipoCuota>I</tipoCuota>
               <concepto>Interés Vencido</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>0.00</capital>
               <intereses>1287.08</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>1287.08</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>3</nroCuota>
               <fechaPago>2018-12-05</fechaPago>
               <tipoCuota>K</tipoCuota>
               <concepto>Capital</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>25000.00</capital>
               <intereses>0.00</intereses>
               <comisiones>0.00</comisiones>
               <seguros>200.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>25200.00</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>4</nroCuota>
               <fechaPago>2019-01-07</fechaPago>
               <tipoCuota>I</tipoCuota>
               <concepto>Interés Vencido</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>0.00</capital>
               <intereses>2027.16</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>2027.16</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>5</nroCuota>
               <fechaPago>2019-01-07</fechaPago>
               <tipoCuota>K</tipoCuota>
               <concepto>Capital</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>25000.00</capital>
               <intereses>0.00</intereses>
               <comisiones>0.00</comisiones>
               <seguros>200.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>25200.00</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>6</nroCuota>
               <fechaPago>2019-02-05</fechaPago>
               <tipoCuota>I</tipoCuota>
               <concepto>Interés Vencido</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>0.00</capital>
               <intereses>622.09</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>622.09</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>7</nroCuota>
               <fechaPago>2019-02-05</fechaPago>
               <tipoCuota>K</tipoCuota>
               <concepto>Capital</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>25000.00</capital>
               <intereses>0.00</intereses>
               <comisiones>0.00</comisiones>
               <seguros>200.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>25200.00</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>8</nroCuota>
               <fechaPago>2019-03-05</fechaPago>
               <tipoCuota>K</tipoCuota>
               <concepto>Capital</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>25000.00</capital>
               <intereses>0.00</intereses>
               <comisiones>0.00</comisiones>
               <seguros>200.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>25200.00</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
         </sdtCuotaPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>898</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerCronograma</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>11:44:49</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerCronogramaResponse>
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
    "sdtCuotaPrestamo": {
        "sBTCuotaPrestamo": [
            {
                "impuestos": "0.00",
                "importePago": "1287.08",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "0.00",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Interés Vencido",
                "interesMora": "0.00",
                "capital": "0.00",
                "diasMora": "0",
                "tipoCuota": "I",
                "nroCuota": "1",
                "seguros": "0.00",
                "fechaUltimoPago": "2018-11-05",
                "estado": "Paga",
                "fechaPago": "2018-11-05",
                "total": "0.00"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "1287.08",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Interés Vencido",
                "interesMora": "0.00",
                "capital": "0.00",
                "diasMora": "0",
                "tipoCuota": "I",
                "nroCuota": "2",
                "seguros": "0.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2018-12-05",
                "total": "1287.08"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "0.00",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Capital",
                "interesMora": "0.00",
                "capital": "25000.00",
                "diasMora": "0",
                "tipoCuota": "K",
                "nroCuota": "3",
                "seguros": "200.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2018-12-05",
                "total": "25200.00"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "2027.16",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Interés Vencido",
                "interesMora": "0.00",
                "capital": "0.00",
                "diasMora": "0",
                "tipoCuota": "I",
                "nroCuota": "4",
                "seguros": "0.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2019-01-07",
                "total": "2027.16"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "0.00",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Capital",
                "interesMora": "0.00",
                "capital": "25000.00",
                "diasMora": "0",
                "tipoCuota": "K",
                "nroCuota": "5",
                "seguros": "200.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2019-01-07",
                "total": "25200.00"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "622.09",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Interés Vencido",
                "interesMora": "0.00",
                "capital": "0.00",
                "diasMora": "0",
                "tipoCuota": "I",
                "nroCuota": "6",
                "seguros": "0.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2019-02-05",
                "total": "622.09"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "0.00",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Capital",
                "interesMora": "0.00",
                "capital": "25000.00",
                "diasMora": "0",
                "tipoCuota": "K",
                "nroCuota": "7",
                "seguros": "200.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2019-02-05",
                "total": "25200.00"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "0.00",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Capital",
                "interesMora": "0.00",
                "capital": "25000.00",
                "diasMora": "0",
                "tipoCuota": "K",
                "nroCuota": "8",
                "seguros": "200.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2019-03-05",
                "total": "25200.00"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerCronograma",
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

| Nombre       | Tipo | Comentarios                       |
| ------------ | ---- | --------------------------------- |
| operacionUId | Long | Identificador único de operación. |

### Datos de salida

| Nombre           | Tipo             | Comentarios              |
| ---------------- | ---------------- | ------------------------ |
| sdtCuotaPrestamo | sBTCuotaPrestamo | Cronograma del préstamo. |

Los campos del tipo de dato estructurado sBTCuotaPrestamo son los siguientes:

| Campo            | Tipo        | Comentarios                                                                                         |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| nroCuota         | Int         | Número de cuota.                                                                                    |
| fechaPago        | Date        | Fecha de pago prevista .                                                                            |
| tipoCuota        | String      | Tipo de cuota (Capital - K / Interés - I / Capital-Interés - M / Pago Mínimo - T / Cuota Fija - F). |
| concepto         | String      | (Capital / Interés / Capital-Interés / Pago Mínimo / Cuota Fija).                                   |
| impuestos        | Double      | Impuestos de la cuota.                                                                              |
| subsidios        | Double      | Subsidios de la cuota.                                                                              |
| capital          | Double      | Capital de la cuota.                                                                                |
| intereses        | Double      | Intereses de la cuota.                                                                              |
| comisiones       | Double      | Comisiones de la cuota.                                                                             |
| seguros          | Double      | Seguros de la cuota.                                                                                |
| interesMora      | Double      | Intereses de mora de la cuota.                                                                      |
| otrosConceptos   | Double      | Importe otros conceptos.                                                                            |
| detalleConceptos | sBTConcepto | Detalle de los conceptos adicionales.                                                               |
| total            | Double      | total de la cuota.                                                                                  |
| diasMora         | Int         | Días de mora de la cuota.                                                                           |
| estado           | String      | Estado de la cuota.                                                                                 |
| estadoDsc        | String      | Descripción del estado de la cuota.                                                                 |
| fechaUltimoPago  | Date        | Fecha de último pago de la cuota.                                                                   |
| importePago      | Double      | Importe pagado.                                                                                     |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el Identificador. |

<!-- Obtener Cronograma a Fecha -->

## Obtener Cronograma a Fecha

Dada una operación, devuelve el cronograma de la misma respecto a una fecha dada.

| Nombre publicación                  | Programa | Global/País |
| ----------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerCronogramaAFecha | RBTPG222 | Global      |

> Ejemplo de invocación al método Obtener Cronograma a Fecha:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerCronogramaAFecha>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>191631443CD285A89A23FBEE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>37675</bts:operacionUId>
         <bts:fecha>2019-08-26</bts:fecha>
      </bts:BTPrestamos.ObtenerCronogramaAFecha>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerCronogramaAFecha=' \
  -H 'content-type: application/json' \
  -H 'postman-token: d20f4b05-03a0-49c1-ba1f-d026339b8367,3f56f9d3-094e-474b-8730-6840899770d7' \
  -H 'cache-control: no-cache' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
        "operacionUId": "37675",
        "fecha": "2019-08-26"
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
      <BTPrestamos.ObtenerCronogramaAFechaResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>191631443CD285A89A23FBEE</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>1</nroCuota>
               <fechaPago>2019-08-07</fechaPago>
               <tipoCuota>M</tipoCuota>
               <concepto>Capital/Interés</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>523.74</capital>
               <intereses>1495.66</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>345.37</impuestos>
               <interesMora>74.19</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>2438.96</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>19</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>2</nroCuota>
               <fechaPago>2019-09-07</fechaPago>
               <tipoCuota>M</tipoCuota>
               <concepto>Capital/Interés</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>1125.28</capital>
               <intereses>1002.60</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>220.57</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>2348.45</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>3</nroCuota>
               <fechaPago>2019-10-07</fechaPago>
               <tipoCuota>M</tipoCuota>
               <concepto>Capital/Interés</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>1257.94</capital>
               <intereses>893.86</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>196.65</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>2348.45</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>4</nroCuota>
               <fechaPago>2019-11-07</fechaPago>
               <tipoCuota>M</tipoCuota>
               <concepto>Capital/Interés</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>1326.65</capital>
               <intereses>837.54</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>184.26</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>2348.45</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>5</nroCuota>
               <fechaPago>2019-12-07</fechaPago>
               <tipoCuota>M</tipoCuota>
               <concepto>Capital/Interés</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>1469.05</capital>
               <intereses>720.82</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>158.58</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>2348.45</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>6</nroCuota>
               <fechaPago>2020-01-07</fechaPago>
               <tipoCuota>M</tipoCuota>
               <concepto>Capital/Interés</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>1562.88</capital>
               <intereses>643.91</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>141.66</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>2348.45</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>7</nroCuota>
               <fechaPago>2020-02-07</fechaPago>
               <tipoCuota>M</tipoCuota>
               <concepto>Capital/Interés</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>1694.93</capital>
               <intereses>535.67</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>117.85</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>2348.45</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>8</nroCuota>
               <fechaPago>2020-03-07</fechaPago>
               <tipoCuota>M</tipoCuota>
               <concepto>Capital/Interés</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>1872.10</capital>
               <intereses>390.45</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>85.90</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>2348.45</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>9</nroCuota>
               <fechaPago>2020-04-07</fechaPago>
               <tipoCuota>M</tipoCuota>
               <concepto>Capital/Interés</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>1996.32</capital>
               <intereses>288.63</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>63.50</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>2348.45</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>10</nroCuota>
               <fechaPago>2020-05-07</fechaPago>
               <tipoCuota>M</tipoCuota>
               <concepto>Capital/Interés</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>2171.11</capital>
               <intereses>145.36</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>31.98</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>2348.45</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
         </sdtCuotaPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerCronogramaAFecha</Servicio>
            <Fecha>2019-07-26</Fecha>
            <Hora>11:35:37</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>120420</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerCronogramaAFechaResponse>
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
    "planPagos": {
        "sBTCuotaPrestamo": [
            {
              "nroCuota": "1",
              "fechaPago": "2019-08-07",
              "tipoCuota": "M",
              "concepto": "Capital/Interés",
              "fechaVencimiento": "0000-00-00",
              "capital": "523.74",
              "intereses": "1495.66",
              "comisiones": "0.00",
              "seguros": "0.00",
              "subsidios": "0.00",
              "impuestos": "345.37",
              "interesMora": "74.19",
              "otrosConceptos": "0.00",
              "total": "2438.96",
              "estado": "Impaga",
              "diasMora": "19",
              "fechaUltimoPago": "0000-00-00",
              "importePago": "0.00"
            },
            {
              "nroCuota": "2",
              "fechaPago": "2019-09-07",
              "tipoCuota": "M",
              "concepto": "Capital/Interés",
              "fechaVencimiento": "0000-00-00",
              "capital": "1125.28",
              "intereses": "1002.60",
              "comisiones": "0.00",
              "seguros": "0.00",
              "subsidios": "0.00",
              "impuestos": "220.57",
              "interesMora": "0.00",
              "otrosConceptos": "0.00",
              "total": "2348.45",
              "estado": "Impaga",
              "diasMora": "0",
              "fechaUltimoPago": "0000-00-00",
              "importePago": "0.00"
            },
            {
              "nroCuota": "3",
              "fechaPago": "2019-10-07",
              "tipoCuota": "M",
              "concepto": "Capital/Interés",
              "fechaVencimiento": "0000-00-00",
              "capital": "1257.94",
              "intereses": "893.86",
              "comisiones": "0.00",
              "seguros": "0.00",
              "subsidios": "0.00",
              "impuestos": "196.65",
              "interesMora": "0.00",
              "otrosConceptos": "0.00",
              "total": "2348.45",
              "estado": "Impaga",
              "diasMora": "0",
              "fechaUltimoPago": "0000-00-00",
              "importePago": "0.00"
            },
            {
              "nroCuota": "4",
              "fechaPago": "2019-11-07",
              "tipoCuota": "M",
              "concepto": "Capital/Interés",
              "fechaVencimiento": "0000-00-00",
              "capital": "1326.65",
              "intereses": "837.54",
              "comisiones": "0.00",
              "seguros": "0.00",
              "subsidios": "0.00",
              "impuestos": "184.26",
              "interesMora": "0.00",
              "otrosConceptos": "0.00",
              "total": "2348.45",
              "estado": "Impaga",
              "diasMora": "0",
              "fechaUltimoPago": "0000-00-00",
              "importePago": "0.00"
            },
            {
              "nroCuota": "5",
              "fechaPago": "2019-12-07",
              "tipoCuota": "M",
              "concepto": "Capital/Interés",
              "fechaVencimiento": "0000-00-00",
              "capital": "1469.05",
              "intereses": "720.82",
              "comisiones": "0.00",
              "seguros": "0.00",
              "subsidios": "0.00",
              "impuestos": "158.58",
              "interesMora": "0.00",
              "otrosConceptos": "0.00",
              "total": "2348.45",
              "estado": "Impaga",
              "diasMora": "0",
              "fechaUltimoPago": "0000-00-00",
              "importePago": "0.00"
            },
            {
              "nroCuota": "6",
              "fechaPago": "2020-01-07",
              "tipoCuota": "M",
              "concepto": "Capital/Interés",
              "fechaVencimiento": "0000-00-00",
              "capital": "1562.88",
              "intereses": "643.91",
              "comisiones": "0.00",
              "seguros": "0.00",
              "subsidios": "0.00",
              "impuestos": "141.66",
              "interesMora": "0.00",
              "otrosConceptos": "0.00",
              "total": "2348.45",
              "estado": "Impaga",
              "diasMora": "0",
              "fechaUltimoPago": "0000-00-00",
              "importePago": "0.00"
            },
            {
              "nroCuota": "7",
              "fechaPago": "2020-02-07",
              "tipoCuota": "M",
              "concepto": "Capital/Interés",
              "fechaVencimiento": "0000-00-00",
              "capital": "1694.93",
              "intereses": "535.67",
              "comisiones": "0.00",
              "seguros": "0.00",
              "subsidios": "0.00",
              "impuestos": "117.85",
              "interesMora": "0.00",
              "otrosConceptos": "0.00",
              "total": "2348.45",
              "estado": "Impaga",
              "diasMora": "0",
              "fechaUltimoPago": "0000-00-00",
              "importePago": "0.00"
            },
            {
              "nroCuota": "8",
              "fechaPago": "2020-03-07",
              "tipoCuota": "M",
              "concepto": "Capital/Interés",
              "fechaVencimiento": "0000-00-00",
              "capital": "1872.10",
              "intereses": "390.45",
              "comisiones": "0.00",
              "seguros": "0.00",
              "subsidios": "0.00",
              "impuestos": "85.90",
              "interesMora": "0.00",
              "otrosConceptos": "0.00",
              "total": "2348.45",
              "estado": "Impaga",
              "diasMora": "0",
              "fechaUltimoPago": "0000-00-00",
              "importePago": "0.00"
            },
            {
              "nroCuota": "9",
              "fechaPago": "2020-04-07",
              "tipoCuota": "M",
              "concepto": "Capital/Interés",
              "fechaVencimiento": "0000-00-00",
              "capital": "1996.32",
              "intereses": "288.63",
              "comisiones": "0.00",
              "seguros": "0.00",
              "subsidios": "0.00",
              "impuestos": "63.50",
              "interesMora": "0.00",
              "otrosConceptos": "0.00",
              "total": "2348.45",
              "estado": "Impaga",
              "diasMora": "0",
              "fechaUltimoPago": "0000-00-00",
              "importePago": "0.00"
            },
            {
              "nroCuota": "10",
              "fechaPago": "2020-05-07",
              "tipoCuota": "M",
              "concepto": "Capital/Interés",
              "fechaVencimiento": "0000-00-00",
              "capital": "2171.11",
              "intereses": "145.36",
              "comisiones": "0.00",
              "seguros": "0.00",
              "subsidios": "0.00",
              "impuestos": "31.98",
              "interesMora": "0.00",
              "otrosConceptos": "0.00",
              "total": "2348.45",
              "estado": "Impaga",
              "diasMora": "0",
              "fechaUltimoPago": "0000-00-00",
              "importePago": "0.00"
            }
          ]
        },
        "Btoutreq": {
			"Numero": 54,
			"Servicio": "BTPrestamos.ObtenerCronogramaAFecha",
			"Estado": "OK",
			"Fecha": "2019-10-25",
			"Requerimiento": "1",
			"Hora": "13:34:10",
			"Canal": "BTDIGITAL"
		}
      }
    }
  }'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                    |
| ------------ | ---- | ------------------------------ |
| operacionUId | Long | Identificador de la operación. |
| fecha        | Date | Fecha a consultar.             |

### Datos de salida

| Nombre           | Tipo             | Comentarios              |
| ---------------- | ---------------- | ------------------------ |
| sdtCuotaPrestamo | sBTCuotaPrestamo | Cronograma del préstamo. |

Los campos del tipo de dato estructurado sBTCuotaPrestamo son los siguientes:

| Campo            | Tipo        | Comentarios                                                                                         |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| nroCuota         | Int         | Número de cuota.                                                                                    |
| fechaPago        | Date        | Fecha de pago prevista.                                                                             |
| tipoCuota        | String      | Tipo de cuota (Capital - K / Interés - I / Capital-Interés - M / Pago Mínimo - T / Cuota Fija - F). |
| concepto         | String      | (Capital / Interés / Capital-Interés / Pago Mínimo / Cuota Fija).                                   |
| impuestos        | Double      | Impuestos de la cuota.                                                                              |
| subsidios        | Double      | Subsidios de la cuota.                                                                              |
| capital          | Double      | Capital de la cuota.                                                                                |
| intereses        | Double      | Intereses de la cuota.                                                                              |
| comisiones       | Double      | Comisiones de la cuota.                                                                             |
| seguros          | Double      | Seguros de la cuota.                                                                                |
| interesMora      | Double      | Intereses de mora de la cuota.                                                                      |
| otrosConceptos   | Double      | Importe otros conceptos.                                                                            |
| detalleConceptos | sBTConcepto | Detalle de los conceptos adicionales.                                                               |
| total            | Double      | total de la cuota.                                                                                  |
| diasMora         | Int         | Días de mora de la cuota.                                                                           |
| estado           | String      | Estado de la cuota.                                                                                 |
| estadoDsc        | String      | Descripción del estado de la cuota.                                                                 |
| fechaUltimoPago  | Date        | Fecha de último pago de la cuota.                                                                   |
| importePago      | Double      | Importe pagado.                                                                                     |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el Identificador. |
| 30003  | No se recibió fecha para consulta.                 |

<!-- Obtener Cronograma con Pagos a Fecha -->

## Obtener Cronograma con Pagos a Fecha

Método para obtener el cronograma de un préstamo con pagos a fecha.

| Nombre publicación                          | Programa | Global/País |
| ------------------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerCronogramaConPagosAFecha | RBTPG440 | Global      |

> Ejemplo de invocación al método Obtener Cronograma con Pagos a Fecha:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerCronogramaConPagosAFecha>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>9aaec33a3bCD285A89A23FBE</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>8892</bts:operacionUId>
         <bts:fecha>2022-11-16</bts:fecha>
      </bts:BTPrestamos.ObtenerCronogramaConPagosAFecha>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCronogramaConPagosAFecha=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId" : 8892,
    "fecha" : "2022-11-16"
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
      <BTPrestamos.ObtenerCronogramaConPagosAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
        <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
        </Btinreq>
        <sdtCuotasPrestamos>
            <SdtsBTCuotaPrestamo>
                <impuestos>0</impuestos>
                <importePago>292.6</importePago>
                <subsidios>0</subsidios>
                <detalleConceptos>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto al Interés</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a la Mora</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a las Comisiones</concepto>
                    </SdtsBTConcepto>
                </detalleConceptos>
                <fechaVencimiento></fechaVencimiento>
                <intereses>0</intereses>
                <estadoDsc></estadoDsc>
                <comisiones>0</comisiones>
                <otrosConceptos>0</otrosConceptos>
                <concepto>Capital/Interés</concepto>
                <interesMora>0</interesMora>
                <capital>0</capital>
                <diasMora>0</diasMora>
                <tipoCuota>M</tipoCuota>
                <nroCuota>1</nroCuota>
                <seguros>0</seguros>
                <fechaUltimoPago>2022-11-07</fechaUltimoPago>
                <redondeo>0</redondeo>
                <estado>Paga</estado>
                <fechaPago>2022-09-21</fechaPago>
                <total>0</total>
            </SdtsBTCuotaPrestamo>
            <SdtsBTCuotaPrestamo>
                <impuestos>0</impuestos>
                <importePago>282.1</importePago>
                <subsidios>0</subsidios>
                <detalleConceptos>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto al Interés</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a la Mora</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a las Comisiones</concepto>
                    </SdtsBTConcepto>
                </detalleConceptos>
                <fechaVencimiento></fechaVencimiento>
                <intereses>0</intereses>
                <estadoDsc></estadoDsc>
                <comisiones>0</comisiones>
                <otrosConceptos>0</otrosConceptos>
                <concepto>Capital/Interés</concepto>
                <interesMora>0</interesMora>
                <capital>0</capital>
                <diasMora>0</diasMora>
                <tipoCuota>M</tipoCuota>
                <nroCuota>2</nroCuota>
                <seguros>0</seguros>
                <fechaUltimoPago>2022-11-16</fechaUltimoPago>
                <redondeo>0</redondeo>
                <estado>Paga</estado>
                <fechaPago>2022-10-15</fechaPago>
                <total>0</total>
            </SdtsBTCuotaPrestamo>
            <SdtsBTCuotaPrestamo>
                <impuestos>0</impuestos>
                <importePago>270.89</importePago>
                <subsidios>0</subsidios>
                <detalleConceptos>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto al Interés</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a la Mora</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a las Comisiones</concepto>
                    </SdtsBTConcepto>
                </detalleConceptos>
                <fechaVencimiento></fechaVencimiento>
                <intereses>0</intereses>
                <estadoDsc></estadoDsc>
                <comisiones>0</comisiones>
                <otrosConceptos>0</otrosConceptos>
                <concepto>Capital/Interés</concepto>
                <interesMora>0</interesMora>
                <capital>0</capital>
                <diasMora>0</diasMora>
                <tipoCuota>M</tipoCuota>
                <nroCuota>3</nroCuota>
                <seguros>0</seguros>
                <fechaUltimoPago>2022-11-16</fechaUltimoPago>
                <redondeo>0</redondeo>
                <estado>Paga</estado>
                <fechaPago>2022-10-31</fechaPago>
                <total>0</total>
            </SdtsBTCuotaPrestamo>
            <SdtsBTCuotaPrestamo>
                <impuestos>0</impuestos>
                <importePago>112.51</importePago>
                <subsidios>0</subsidios>
                <detalleConceptos>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto al Interés</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a la Mora</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a las Comisiones</concepto>
                    </SdtsBTConcepto>
                </detalleConceptos>
                <fechaVencimiento></fechaVencimiento>
                <intereses>0</intereses>
                <estadoDsc></estadoDsc>
                <comisiones>0</comisiones>
                <otrosConceptos>0</otrosConceptos>
                <concepto>Capital/Interés</concepto>
                <interesMora>0</interesMora>
                <capital>147.89</capital>
                <diasMora>1</diasMora>
                <tipoCuota>M</tipoCuota>
                <nroCuota>4</nroCuota>
                <seguros>0</seguros>
                <fechaUltimoPago>2022-11-16</fechaUltimoPago>
                <redondeo>0</redondeo>
                <estado>Pago parcial</estado>
                <fechaPago>2022-11-15</fechaPago>
                <total>147.89</total>
            </SdtsBTCuotaPrestamo>
            <SdtsBTCuotaPrestamo>
                <impuestos>6.22</impuestos>
                <importePago>0</importePago>
                <subsidios>0</subsidios>
                <detalleConceptos>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>6.22</valor>
                        <concepto>Impuesto al Interés</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a la Mora</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a las Comisiones</concepto>
                    </SdtsBTConcepto>
                </detalleConceptos>
                <fechaVencimiento></fechaVencimiento>
                <intereses>29.68</intereses>
                <estadoDsc></estadoDsc>
                <comisiones>4.9</comisiones>
                <otrosConceptos>0</otrosConceptos>
                <concepto>Capital/Interés</concepto>
                <interesMora>0</interesMora>
                <capital>218.9</capital>
                <diasMora>0</diasMora>
                <tipoCuota>M</tipoCuota>
                <nroCuota>5</nroCuota>
                <seguros>0</seguros>
                <fechaUltimoPago></fechaUltimoPago>
                <redondeo>0</redondeo>
                <estado>Impaga</estado>
                <fechaPago>2022-11-30</fechaPago>
                <total>259.7</total>
            </SdtsBTCuotaPrestamo>
            <SdtsBTCuotaPrestamo>
                <impuestos>5.22</impuestos>
                <importePago>0</importePago>
                <subsidios>0</subsidios>
                <detalleConceptos>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>5.22</valor>
                        <concepto>Impuesto al Interés</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a la Mora</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a las Comisiones</concepto>
                    </SdtsBTConcepto>
                </detalleConceptos>
                <fechaVencimiento></fechaVencimiento>
                <intereses>24.08</intereses>
                <estadoDsc></estadoDsc>
                <comisiones>4.9</comisiones>
                <otrosConceptos>0</otrosConceptos>
                <concepto>Capital/Interés</concepto>
                <interesMora>0</interesMora>
                <capital>225.5</capital>
                <diasMora>0</diasMora>
                <tipoCuota>M</tipoCuota>
                <nroCuota>6</nroCuota>
                <seguros>0</seguros>
                <fechaUltimoPago></fechaUltimoPago>
                <redondeo>0</redondeo>
                <estado>Impaga</estado>
                <fechaPago>2022-12-15</fechaPago>
                <total>259.7</total>
            </SdtsBTCuotaPrestamo>
            <SdtsBTCuotaPrestamo>
                <impuestos>4.4</impuestos>
                <importePago>0</importePago>
                <subsidios>0</subsidios>
                <detalleConceptos>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>4.4</valor>
                        <concepto>Impuesto al Interés</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a la Mora</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a las Comisiones</concepto>
                    </SdtsBTConcepto>
                </detalleConceptos>
                <fechaVencimiento></fechaVencimiento>
                <intereses>19.56</intereses>
                <estadoDsc></estadoDsc>
                <comisiones>4.9</comisiones>
                <otrosConceptos>0</otrosConceptos>
                <concepto>Capital/Interés</concepto>
                <interesMora>0</interesMora>
                <capital>230.84</capital>
                <diasMora>0</diasMora>
                <tipoCuota>M</tipoCuota>
                <nroCuota>7</nroCuota>
                <seguros>0</seguros>
                <fechaUltimoPago></fechaUltimoPago>
                <redondeo>0</redondeo>
                <estado>Impaga</estado>
                <fechaPago>2022-12-31</fechaPago>
                <total>259.7</total>
            </SdtsBTCuotaPrestamo>
            <SdtsBTCuotaPrestamo>
                <impuestos>3.12</impuestos>
                <importePago>0</importePago>
                <subsidios>0</subsidios>
                <detalleConceptos>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>3.12</valor>
                        <concepto>Impuesto al Interés</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a la Mora</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a las Comisiones</concepto>
                    </SdtsBTConcepto>
                </detalleConceptos>
                <fechaVencimiento></fechaVencimiento>
                <intereses>12.42</intereses>
                <estadoDsc></estadoDsc>
                <comisiones>4.9</comisiones>
                <otrosConceptos>0</otrosConceptos>
                <concepto>Capital/Interés</concepto>
                <interesMora>0</interesMora>
                <capital>239.26</capital>
                <diasMora>0</diasMora>
                <tipoCuota>M</tipoCuota>
                <nroCuota>8</nroCuota>
                <seguros>0</seguros>
                <fechaUltimoPago></fechaUltimoPago>
                <redondeo>0</redondeo>
                <estado>Impaga</estado>
                <fechaPago>2023-01-15</fechaPago>
                <total>259.7</total>
            </SdtsBTCuotaPrestamo>
            <SdtsBTCuotaPrestamo>
                <impuestos>2.1</impuestos>
                <importePago>0</importePago>
                <subsidios>0</subsidios>
                <detalleConceptos>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>2.1</valor>
                        <concepto>Impuesto al Interés</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a la Mora</concepto>
                    </SdtsBTConcepto>
                    <SdtsBTConcepto>
                        <texto></texto>
                        <valor>0</valor>
                        <concepto>Impuesto a las Comisiones</concepto>
                    </SdtsBTConcepto>
                </detalleConceptos>
                <fechaVencimiento></fechaVencimiento>
                <intereses>6.74</intereses>
                <estadoDsc></estadoDsc>
                <comisiones>4.9</comisiones>
                <otrosConceptos>0</otrosConceptos>
                <concepto>Capital/Interés</concepto>
                <interesMora>0</interesMora>
                <capital>246.9</capital>
                <diasMora>0</diasMora>
                <tipoCuota>M</tipoCuota>
                <nroCuota>9</nroCuota>
                <seguros>0</seguros>
                <fechaUltimoPago></fechaUltimoPago>
                <redondeo>0</redondeo>
                <estado>Impaga</estado>
                <fechaPago>2023-01-31</fechaPago>
                <total>260.64</total>
            </SdtsBTCuotaPrestamo>
	    </sdtCuotasPrestamos>
	    <Erroresnegocio></Erroresnegocio>
        <Btoutreq>
            <Numero>898</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerCronogramaConPagosAFechaResponse</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>11:44:49</Hora>
            <Canal>BTDIGITAL</Canal>
        </Btoutreq>
      </BTPrestamos.ObtenerCronogramaConPagosAFechaResponse>
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
    "sdtCuotasPrestamos": {
        "SdtsBTCuotaPrestamo": [
            {
                "impuestos": 0,
                "importePago": 292.6,
                "subsidios": 0,
                "detalleConceptos": {
                    "SdtsBTConcepto": [
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto al Interés"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a la Mora"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a las Comisiones"
                        }
                    ]
                },
                "fechaVencimiento": "\n\t\t",
                "intereses": 0,
                "estadoDsc": "",
                "comisiones": 0,
                "otrosConceptos": 0,
                "concepto": "Capital/Interés",
                "interesMora": 0,
                "capital": 0,
                "diasMora": 0,
                "tipoCuota": "M",
                "nroCuota": 1,
                "seguros": 0,
                "fechaUltimoPago": "2022-11-07",
                "redondeo": 0,
                "estado": "Paga",
                "fechaPago": "2022-09-21",
                "total": 0
            },
            {
                "impuestos": 0,
                "importePago": 282.1,
                "subsidios": 0,
                "detalleConceptos": {
                    "SdtsBTConcepto": [
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto al Interés"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a la Mora"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a las Comisiones"
                        }
                    ]
                },
                "fechaVencimiento": "\n\t\t",
                "intereses": 0,
                "estadoDsc": "",
                "comisiones": 0,
                "otrosConceptos": 0,
                "concepto": "Capital/Interés",
                "interesMora": 0,
                "capital": 0,
                "diasMora": 0,
                "tipoCuota": "M",
                "nroCuota": 2,
                "seguros": 0,
                "fechaUltimoPago": "2022-11-16",
                "redondeo": 0,
                "estado": "Paga",
                "fechaPago": "2022-10-15",
                "total": 0
            },
            {
                "impuestos": 0,
                "importePago": 270.89,
                "subsidios": 0,
                "detalleConceptos": {
                    "SdtsBTConcepto": [
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto al Interés"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a la Mora"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a las Comisiones"
                        }
                    ]
                },
                "fechaVencimiento": "\n\t\t",
                "intereses": 0,
                "estadoDsc": "",
                "comisiones": 0,
                "otrosConceptos": 0,
                "concepto": "Capital/Interés",
                "interesMora": 0,
                "capital": 0,
                "diasMora": 0,
                "tipoCuota": "M",
                "nroCuota": 3,
                "seguros": 0,
                "fechaUltimoPago": "2022-11-16",
                "redondeo": 0,
                "estado": "Paga",
                "fechaPago": "2022-10-31",
                "total": 0
            },
            {
                "impuestos": 0,
                "importePago": 112.51,
                "subsidios": 0,
                "detalleConceptos": {
                    "SdtsBTConcepto": [
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto al Interés"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a la Mora"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a las Comisiones"
                        }
                    ]
                },
                "fechaVencimiento": "\n\t\t",
                "intereses": 0,
                "estadoDsc": "",
                "comisiones": 0,
                "otrosConceptos": 0,
                "concepto": "Capital/Interés",
                "interesMora": 0,
                "capital": 147.89,
                "diasMora": 1,
                "tipoCuota": "M",
                "nroCuota": 4,
                "seguros": 0,
                "fechaUltimoPago": "2022-11-16",
                "redondeo": 0,
                "estado": "Pago parcial",
                "fechaPago": "2022-11-15",
                "total": 147.89
            },
            {
                "impuestos": 6.22,
                "importePago": 0,
                "subsidios": 0,
                "detalleConceptos": {
                    "SdtsBTConcepto": [
                        {
                            "texto": "",
                            "valor": 6.22,
                            "concepto": "Impuesto al Interés"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a la Mora"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a las Comisiones"
                        }
                    ]
                },
                "fechaVencimiento": "\n\t\t",
                "intereses": 29.68,
                "estadoDsc": "",
                "comisiones": 4.9,
                "otrosConceptos": 0,
                "concepto": "Capital/Interés",
                "interesMora": 0,
                "capital": 218.9,
                "diasMora": 0,
                "tipoCuota": "M",
                "nroCuota": 5,
                "seguros": 0,
                "fechaUltimoPago": "\n\t\t",
                "redondeo": 0,
                "estado": "Impaga",
                "fechaPago": "2022-11-30",
                "total": 259.7
            },
            {
                "impuestos": 5.22,
                "importePago": 0,
                "subsidios": 0,
                "detalleConceptos": {
                    "SdtsBTConcepto": [
                        {
                            "texto": "",
                            "valor": 5.22,
                            "concepto": "Impuesto al Interés"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a la Mora"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a las Comisiones"
                        }
                    ]
                },
                "fechaVencimiento": "\n\t\t",
                "intereses": 24.08,
                "estadoDsc": "",
                "comisiones": 4.9,
                "otrosConceptos": 0,
                "concepto": "Capital/Interés",
                "interesMora": 0,
                "capital": 225.5,
                "diasMora": 0,
                "tipoCuota": "M",
                "nroCuota": 6,
                "seguros": 0,
                "fechaUltimoPago": "\n\t\t",
                "redondeo": 0,
                "estado": "Impaga",
                "fechaPago": "2022-12-15",
                "total": 259.7
            },
            {
                "impuestos": 4.4,
                "importePago": 0,
                "subsidios": 0,
                "detalleConceptos": {
                    "SdtsBTConcepto": [
                        {
                            "texto": "",
                            "valor": 4.4,
                            "concepto": "Impuesto al Interés"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a la Mora"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a las Comisiones"
                        }
                    ]
                },
                "fechaVencimiento": "\n\t\t",
                "intereses": 19.56,
                "estadoDsc": "",
                "comisiones": 4.9,
                "otrosConceptos": 0,
                "concepto": "Capital/Interés",
                "interesMora": 0,
                "capital": 230.84,
                "diasMora": 0,
                "tipoCuota": "M",
                "nroCuota": 7,
                "seguros": 0,
                "fechaUltimoPago": "\n\t\t",
                "redondeo": 0,
                "estado": "Impaga",
                "fechaPago": "2022-12-31",
                "total": 259.7
            },
            {
                "impuestos": 3.12,
                "importePago": 0,
                "subsidios": 0,
                "detalleConceptos": {
                    "SdtsBTConcepto": [
                        {
                            "texto": "",
                            "valor": 3.12,
                            "concepto": "Impuesto al Interés"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a la Mora"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a las Comisiones"
                        }
                    ]
                },
                "fechaVencimiento": "\n\t\t",
                "intereses": 12.42,
                "estadoDsc": "",
                "comisiones": 4.9,
                "otrosConceptos": 0,
                "concepto": "Capital/Interés",
                "interesMora": 0,
                "capital": 239.26,
                "diasMora": 0,
                "tipoCuota": "M",
                "nroCuota": 8,
                "seguros": 0,
                "fechaUltimoPago": "\n\t\t",
                "redondeo": 0,
                "estado": "Impaga",
                "fechaPago": "2023-01-15",
                "total": 259.7
            },
            {
                "impuestos": 2.1,
                "importePago": 0,
                "subsidios": 0,
                "detalleConceptos": {
                    "SdtsBTConcepto": [
                        {
                            "texto": "",
                            "valor": 2.1,
                            "concepto": "Impuesto al Interés"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a la Mora"
                        },
                        {
                            "texto": "",
                            "valor": 0,
                            "concepto": "Impuesto a las Comisiones"
                        }
                    ]
                },
                "fechaVencimiento": "\n\t\t",
                "intereses": 6.74,
                "estadoDsc": "",
                "comisiones": 4.9,
                "otrosConceptos": 0,
                "concepto": "Capital/Interés",
                "interesMora": 0,
                "capital": 246.9,
                "diasMora": 0,
                "tipoCuota": "M",
                "nroCuota": 9,
                "seguros": 0,
                "fechaUltimoPago": "\n\t\t",
                "redondeo": 0,
                "estado": "Impaga",
                "fechaPago": "2023-01-31",
                "total": 260.64
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerCronograma",
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

| Nombre       | Tipo | Comentarios                       |
| ------------ | ---- | --------------------------------- |
| operacionUId | Long | Identificador único de operación. |
| fecha        | Date | Fecha de los pagos.               |

### Datos de salida

| Nombre             | Tipo             | Comentarios              |
| ------------------ | ---------------- | ------------------------ |
| sdtCuotasPrestamos | sBTCuotaPrestamo | Cronograma del préstamo. |

Los campos del tipo de dato estructurado sBTCuotaPrestamo son los siguientes:

###Versión V2R2

| Campo            | Tipo        | Comentarios                                                                                         |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| nroCuota         | Int         | Número de cuota.                                                                                    |
| fechaPago        | Date        | Fecha de pago prevista .                                                                            |
| tipoCuota        | String      | Tipo de cuota (Capital - K / Interés - I / Capital-Interés - M / Pago Mínimo - T / Cuota Fija - F). |
| concepto         | String      | (Capital / Interés / Capital-Interés / Pago Mínimo / Cuota Fija).                                   |
| impuestos        | Double      | Impuestos de la cuota.                                                                              |
| subsidios        | Double      | Subsidios de la cuota.                                                                              |
| capital          | Double      | Capital de la cuota.                                                                                |
| intereses        | Double      | Intereses de la cuota.                                                                              |
| comisiones       | Double      | Comisiones de la cuota.                                                                             |
| seguros          | Double      | Seguros de la cuota.                                                                                |
| interesMora      | Double      | Intereses de mora de la cuota.                                                                      |
| otrosConceptos   | Double      | Importe otros conceptos.                                                                            |
| detalleConceptos | sBTConcepto | Detalle de los conceptos adicionales.                                                               |
| total            | Double      | total de la cuota.                                                                                  |
| diasMora         | Int         | Días de mora de la cuota.                                                                           |
| estado           | String      | Estado de la cuota.                                                                                 |
| estadoDsc        | String      | Descripción del estado de la cuota.                                                                 |
| fechaUltimoPago  | Date        | Fecha de último pago de la cuota.                                                                   |
| importePago      | Double      | Importe pagado.                                                                                     |

###Versión V2R3

| Campo            | Tipo        | Comentarios                                                                                         |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| nroCuota         | Int         | Número de cuota.                                                                                    |
| fechaPago        | Date        | Fecha de pago prevista .                                                                            |
| tipoCuota        | String      | Tipo de cuota (Capital - K / Interés - I / Capital-Interés - M / Pago Mínimo - T / Cuota Fija - F). |
| concepto         | String      | (Capital / Interés / Capital-Interés / Pago Mínimo / Cuota Fija).                                   |
| impuestos        | Double      | Impuestos de la cuota.                                                                              |
| subsidios        | Double      | Subsidios de la cuota.                                                                              |
| capital          | Double      | Capital de la cuota.                                                                                |
| intereses        | Double      | Intereses de la cuota.                                                                              |
| comisiones       | Double      | Comisiones de la cuota.                                                                             |
| seguros          | Double      | Seguros de la cuota.                                                                                |
| interesMora      | Double      | Intereses de mora de la cuota.                                                                      |
| otrosConceptos   | Double      | Importe otros conceptos.                                                                            |
| detalleConceptos | sBTConcepto | Detalle de los conceptos adicionales.                                                               |
| total            | Double      | total de la cuota.                                                                                  |
| diasMora         | Int         | Días de mora de la cuota.                                                                           |
| estado           | String      | Estado de la cuota.                                                                                 |
| estadoDsc        | String      | Descripción del estado de la cuota.                                                                 |
| fechaUltimoPago  | Date        | Fecha de último pago de la cuota.                                                                   |
| importePago      | Double      | Importe pagado.                                                                                     |
| redondeo         | Double      | Redondeo.                                                                                           |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el Identificador. |
| 30003  | No se recibió fecha para consulta.                 |

<!-- Obtener Cronograma en Especie -->

## Obtener Cronograma en Especie

Método para obtener el cronograma de un préstamo.

| Nombre publicación                     | Programa | Global/País |
| -------------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerCronogramaEnEspecie | RBTPG342 | Global      |

> Ejemplo de invocación al método de Obtener Cronograma en Especie:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerCronogramaEnEspecie>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>361</bts:operacionUId>
      </bts:BTPrestamos.ObtenerCronogramaEnEspecie>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCronogramaEnEspecie=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 361
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
      <BTPrestamos.ObtenerCronogramaEnEspecieResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>1</nroCuota>
               <fechaPago>2018-11-05</fechaPago>
               <tipoCuota>I</tipoCuota>
               <concepto>Interés Vencido</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>0.00</capital>
               <intereses>0.00</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>0.00</total>
               <estado>Paga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>2018-11-05</fechaUltimoPago>
               <importePago>12.87</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>2</nroCuota>
               <fechaPago>2018-12-05</fechaPago>
               <tipoCuota>I</tipoCuota>
               <concepto>Interés Vencido</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>0.00</capital>
               <intereses>12.87</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>12.87</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>3</nroCuota>
               <fechaPago>2018-12-05</fechaPago>
               <tipoCuota>K</tipoCuota>
               <concepto>Capital</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>250.00</capital>
               <intereses>0.00</intereses>
               <comisiones>0.00</comisiones>
               <seguros>2.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>252.00</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>4</nroCuota>
               <fechaPago>2019-01-07</fechaPago>
               <tipoCuota>I</tipoCuota>
               <concepto>Interés Vencido</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>0.00</capital>
               <intereses>20.27</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>20.27</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>5</nroCuota>
               <fechaPago>2019-01-07</fechaPago>
               <tipoCuota>K</tipoCuota>
               <concepto>Capital</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>250.00</capital>
               <intereses>0.00</intereses>
               <comisiones>0.00</comisiones>
               <seguros>2.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>252.00</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>6</nroCuota>
               <fechaPago>2019-02-05</fechaPago>
               <tipoCuota>I</tipoCuota>
               <concepto>Interés Vencido</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>0.00</capital>
               <intereses>6.22</intereses>
               <comisiones>0.00</comisiones>
               <seguros>0.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>6.22</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>7</nroCuota>
               <fechaPago>2019-02-05</fechaPago>
               <tipoCuota>K</tipoCuota>
               <concepto>Capital</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>250.00</capital>
               <intereses>0.00</intereses>
               <comisiones>0.00</comisiones>
               <seguros>2.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>252.00</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
            <sBTCuotaPrestamo>
               <nroCuota>8</nroCuota>
               <fechaPago>2019-03-05</fechaPago>
               <tipoCuota>K</tipoCuota>
               <concepto>Capital</concepto>
               <fechaVencimiento>0000-00-00</fechaVencimiento>
               <capital>250.00</capital>
               <intereses>0.00</intereses>
               <comisiones>0.00</comisiones>
               <seguros>2.00</seguros>
               <subsidios>0.00</subsidios>
               <impuestos>0.00</impuestos>
               <interesMora>0.00</interesMora>
               <otrosConceptos>0.00</otrosConceptos>
               <detalleConceptos></detalleConceptos>
               <total>252.00</total>
               <estado>Impaga</estado>
               <estadoDsc/>
               <diasMora>0</diasMora>
               <fechaUltimoPago>0000-00-00</fechaUltimoPago>
               <importePago>0.00</importePago>
            </sBTCuotaPrestamo>
         </sdtCuotaPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>898</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerCronogramaEnEspecie</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>11:44:49</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerCronogramaEnEspecieResponse>
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
    "sdtCuotaPrestamo": {
        "sBTCuotaPrestamo": [
            {
                "impuestos": "0.00",
                "importePago": "12.87",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "0.00",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Interés Vencido",
                "interesMora": "0.00",
                "capital": "0.00",
                "diasMora": "0",
                "tipoCuota": "I",
                "nroCuota": "1",
                "seguros": "0.00",
                "fechaUltimoPago": "2018-11-05",
                "estado": "Paga",
                "fechaPago": "2018-11-05",
                "total": "0.00"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "12.87",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Interés Vencido",
                "interesMora": "0.00",
                "capital": "0.00",
                "diasMora": "0",
                "tipoCuota": "I",
                "nroCuota": "2",
                "seguros": "0.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2018-12-05",
                "total": "12.87"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "0.00",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Capital",
                "interesMora": "0.00",
                "capital": "250.00",
                "diasMora": "0",
                "tipoCuota": "K",
                "nroCuota": "3",
                "seguros": "2.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2018-12-05",
                "total": "252.00"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "20.27",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Interés Vencido",
                "interesMora": "0.00",
                "capital": "0.00",
                "diasMora": "0",
                "tipoCuota": "I",
                "nroCuota": "4",
                "seguros": "0.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2019-01-07",
                "total": "20.27"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "0.00",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Capital",
                "interesMora": "0.00",
                "capital": "250.00",
                "diasMora": "0",
                "tipoCuota": "K",
                "nroCuota": "5",
                "seguros": "2.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2019-01-07",
                "total": "252.00"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "6.22",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Interés Vencido",
                "interesMora": "0.00",
                "capital": "0.00",
                "diasMora": "0",
                "tipoCuota": "I",
                "nroCuota": "6",
                "seguros": "0.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2019-02-05",
                "total": "6.22"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "0.00",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Capital",
                "interesMora": "0.00",
                "capital": "250.00",
                "diasMora": "0",
                "tipoCuota": "K",
                "nroCuota": "7",
                "seguros": "2.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2019-02-05",
                "total": "252.00"
            },
            {
                "impuestos": "0.00",
                "importePago": "0.00",
                "subsidios": "0.00",
                "detalleConceptos": {
                    "sBTConcepto": []
                },
                "fechaVencimiento": "0000-00-00",
                "intereses": "0.00",
                "estadoDsc": "",
                "comisiones": "0.00",
                "otrosConceptos": "0.00",
                "concepto": "Capital",
                "interesMora": "0.00",
                "capital": "250.00",
                "diasMora": "0",
                "tipoCuota": "K",
                "nroCuota": "8",
                "seguros": "2.00",
                "fechaUltimoPago": "0000-00-00",
                "estado": "Impaga",
                "fechaPago": "2019-03-05",
                "total": "252.00"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerCronogramaEnEspecie",
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

| Nombre       | Tipo   | Comentarios                                |
| ------------ | ------ | ------------------------------------------ |
| operacionUId | Long   | Identificador único de operación.          |
| expresadoEn  | String | [Hidden: Valor fijo 'E' para este método]. |

### Datos de salida

| Nombre           | Tipo             | Comentarios              |
| ---------------- | ---------------- | ------------------------ |
| sdtCuotaPrestamo | sBTCuotaPrestamo | Cronograma del préstamo. |

Los campos del tipo de dato estructurado sBTCuotaPrestamo son los siguientes:

| Campo            | Tipo        | Comentarios                                                                                         |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| nroCuota         | Int         | Número de cuota.                                                                                    |
| fechaPago        | Date        | Fecha de pago prevista .                                                                            |
| tipoCuota        | String      | Tipo de cuota (Capital - K / Interés - I / Capital-Interés - M / Pago Mínimo - T / Cuota Fija - F). |
| concepto         | String      | (Capital / Interés / Capital-Interés / Pago Mínimo / Cuota Fija).                                   |
| impuestos        | Double      | Impuestos de la cuota.                                                                              |
| subsidios        | Double      | Subsidios de la cuota.                                                                              |
| capital          | Double      | Capital de la cuota.                                                                                |
| intereses        | Double      | Intereses de la cuota.                                                                              |
| comisiones       | Double      | Comisiones de la cuota.                                                                             |
| seguros          | Double      | Seguros de la cuota.                                                                                |
| interesMora      | Double      | Intereses de mora de la cuota.                                                                      |
| otrosConceptos   | Double      | Importe otros conceptos.                                                                            |
| detalleConceptos | sBTConcepto | Detalle de los conceptos adicionales.                                                               |
| total            | Double      | total de la cuota.                                                                                  |
| diasMora         | Int         | Días de mora de la cuota.                                                                           |
| estado           | String      | Estado de la cuota.                                                                                 |
| estadoDsc        | String      | Descripción del estado de la cuota.                                                                 |
| fechaUltimoPago  | Date        | Fecha de último pago de la cuota.                                                                   |
| importePago      | Double      | Importe pagado.                                                                                     |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el Identificador. |

<!-- Obtener Cronograma Original -->

## <sup style="color: red;" font-weight: bold;>Nuevo</sup> ObtenerCronogramaOriginal

Método que devuelve el cronograma original de un préstamo.

| Nombre publicación                    | Programa | Global/País |
| ------------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerCronogramaOriginal | RBTPG291 | Global      |

> Ejemplo de invocación al método ObtenerCronogramaOriginal:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerCronogramaOriginal>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>480647346F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10118</bts:operacionUId>
      </bts:BTPrestamos.ObtenerCronogramaOriginal>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerCronogramaOriginal' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"bts:Btinreq": {
	  "bts:Canal": "BTDIGITAL",
	  "bts:Requerimiento": "1",
	  "bts:Usuario": "BANTOTAL",
	  "bts:Token": "480647346F955E77534D3E02",
	  "bts:Device": "AC"
	},
	"operacionUId": 10118
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
      <BTPrestamos.ObtenerCronogramaOriginalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>480647346F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamoOriginal>
            <producto>
               <productoUId>105</productoUId>
               <nombre>Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel>$</papel>
            </producto>
            <sucursalId>1000</sucursalId>
            <sucursal>Casa Matriz</sucursal>
            <especie>Billete</especie>
            <fechaValor>2018-05-15</fechaValor>
            <tasa>23.000000</tasa>
            <modalidad>Francés con Seg.e Impu.</modalidad>
            <monedaId>0</monedaId>
            <simboloMoneda>$</simboloMoneda>
            <precio>0.00000000</precio>
            <fechaVencimiento>2019-05-16</fechaVencimiento>
            <totalCapital>19999.00</totalCapital>
            <totalIntereses>2613.64</totalIntereses>
            <totalMora>0.00</totalMora>
            <totalComisiones>0.00</totalComisiones>
            <totalImpuestos>0.00</totalImpuestos>
            <totalSeguros>240.00</totalSeguros>
            <totalPagar>22852.64</totalPagar>
            <planDePagos>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>1</nroCuota>
                  <fechaDesde>2018-05-15</fechaDesde>
                  <fechaHasta>2018-06-18</fechaHasta>
                  <plazo>34</plazo>
                  <saldoCapital>19999.00</saldoCapital>
                  <capital>1455.92</capital>
                  <intereses>428.47</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.39</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>2</nroCuota>
                  <fechaDesde>2018-06-18</fechaDesde>
                  <fechaHasta>2018-07-16</fechaHasta>
                  <plazo>28</plazo>
                  <saldoCapital>18543.08</saldoCapital>
                  <capital>1557.22</capital>
                  <intereses>327.17</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.39</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>3</nroCuota>
                  <fechaDesde>2018-07-16</fechaDesde>
                  <fechaHasta>2018-08-16</fechaHasta>
                  <plazo>31</plazo>
                  <saldoCapital>16985.86</saldoCapital>
                  <capital>1552.58</capital>
                  <intereses>331.81</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.39</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>4</nroCuota>
                  <fechaDesde>2018-08-16</fechaDesde>
                  <fechaHasta>2018-09-17</fechaHasta>
                  <plazo>32</plazo>
                  <saldoCapital>15433.28</saldoCapital>
                  <capital>1573.19</capital>
                  <intereses>311.20</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.39</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>5</nroCuota>
                  <fechaDesde>2018-09-17</fechaDesde>
                  <fechaHasta>2018-10-16</fechaHasta>
                  <plazo>29</plazo>
                  <saldoCapital>13860.09</saldoCapital>
                  <capital>1631.11</capital>
                  <intereses>253.28</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.39</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>6</nroCuota>
                  <fechaDesde>2018-10-16</fechaDesde>
                  <fechaHasta>2018-11-16</fechaHasta>
                  <plazo>31</plazo>
                  <saldoCapital>12228.98</saldoCapital>
                  <capital>1645.51</capital>
                  <intereses>238.88</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.39</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>7</nroCuota>
                  <fechaDesde>2018-11-16</fechaDesde>
                  <fechaHasta>2018-12-17</fechaHasta>
                  <plazo>31</plazo>
                  <saldoCapital>10583.47</saldoCapital>
                  <capital>1677.65</capital>
                  <intereses>206.74</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.39</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>8</nroCuota>
                  <fechaDesde>2018-12-17</fechaDesde>
                  <fechaHasta>2019-01-16</fechaHasta>
                  <plazo>30</plazo>
                  <saldoCapital>8905.82</saldoCapital>
                  <capital>1716.03</capital>
                  <intereses>168.36</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.39</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>9</nroCuota>
                  <fechaDesde>2019-01-16</fechaDesde>
                  <fechaHasta>2019-02-18</fechaHasta>
                  <plazo>33</plazo>
                  <saldoCapital>7189.79</saldoCapital>
                  <capital>1734.88</capital>
                  <intereses>149.51</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.39</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>10</nroCuota>
                  <fechaDesde>2019-02-18</fechaDesde>
                  <fechaHasta>2019-03-18</fechaHasta>
                  <plazo>28</plazo>
                  <saldoCapital>5454.91</saldoCapital>
                  <capital>1788.14</capital>
                  <intereses>96.25</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.39</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>11</nroCuota>
                  <fechaDesde>2019-03-18</fechaDesde>
                  <fechaHasta>2019-04-16</fechaHasta>
                  <plazo>29</plazo>
                  <saldoCapital>3666.77</saldoCapital>
                  <capital>1817.38</capital>
                  <intereses>67.01</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.39</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
               <sBTCuotaPrestamoOriginal>
                  <nroCuota>12</nroCuota>
                  <fechaDesde>2019-04-16</fechaDesde>
                  <fechaHasta>2019-05-16</fechaHasta>
                  <plazo>30</plazo>
                  <saldoCapital>1849.39</saldoCapital>
                  <capital>1849.39</capital>
                  <intereses>34.96</intereses>
                  <impuestos>0.00</impuestos>
                  <seguros>20.00</seguros>
                  <comisiones>0.00</comisiones>
                  <total>1904.35</total>
                  <situacion>PAGA</situacion>
               </sBTCuotaPrestamoOriginal>
            </planDePagos>
            <operacionUId>10118</operacionUId>
            <idOperacionBT>0010100000101000000000000000002800000000000074001</idOperacionBT>
            <cantidadCuotas>12</cantidadCuotas>
         </sdtPrestamoOriginal>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerCronogramaOriginal</Servicio>
            <Fecha>2021-03-18</Fecha>
            <Hora>10:03:41</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>8032</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerCronogramaOriginalResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "480647346F955E77534D3E02",
	  "Device": "AC"
	},
	"sdtPrestamoOriginal": {
	  "producto": {
		"productoUId": "105",
		"nombre": "Amortización Automática TF",
		"moneda": "$",
		"papel": "$"
	  },
	  "sucursalId": "1000",
	  "sucursal": "Casa Matriz",
	  "especie": "Billete",
	  "fechaValor": "2018-05-15",
	  "tasa": "23.000000",
	  "modalidad": "Francés con Seg.e Impu.",
	  "monedaId": "0",
	  "simboloMoneda": "$",
	  "precio": "0.00000000",
	  "fechaVencimiento": "2019-05-16",
	  "totalCapital": "19999.00",
	  "totalIntereses": "2613.64",
	  "totalMora": "0.00",
	  "totalComisiones": "0.00",
	  "totalImpuestos": "0.00",
	  "totalSeguros": "240.00",
	  "totalPagar": "22852.64",
	  "planDePagos": {
		"sBTCuotaPrestamoOriginal": [
		  {
			"nroCuota": "1",
			"fechaDesde": "2018-05-15",
			"fechaHasta": "2018-06-18",
			"plazo": "34",
			"saldoCapital": "19999.00",
			"capital": "1455.92",
			"intereses": "428.47",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.39",
			"situacion": "PAGA"
		  },
		  {
			"nroCuota": "2",
			"fechaDesde": "2018-06-18",
			"fechaHasta": "2018-07-16",
			"plazo": "28",
			"saldoCapital": "18543.08",
			"capital": "1557.22",
			"intereses": "327.17",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.39",
			"situacion": "PAGA"
		  },
		  {
			"nroCuota": "3",
			"fechaDesde": "2018-07-16",
			"fechaHasta": "2018-08-16",
			"plazo": "31",
			"saldoCapital": "16985.86",
			"capital": "1552.58",
			"intereses": "331.81",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.39",
			"situacion": "PAGA"
		  },
		  {
			"nroCuota": "4",
			"fechaDesde": "2018-08-16",
			"fechaHasta": "2018-09-17",
			"plazo": "32",
			"saldoCapital": "15433.28",
			"capital": "1573.19",
			"intereses": "311.20",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.39",
			"situacion": "PAGA"
		  },
		  {
			"nroCuota": "5",
			"fechaDesde": "2018-09-17",
			"fechaHasta": "2018-10-16",
			"plazo": "29",
			"saldoCapital": "13860.09",
			"capital": "1631.11",
			"intereses": "253.28",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.39",
			"situacion": "PAGA"
		  },
		  {
			"nroCuota": "6",
			"fechaDesde": "2018-10-16",
			"fechaHasta": "2018-11-16",
			"plazo": "31",
			"saldoCapital": "12228.98",
			"capital": "1645.51",
			"intereses": "238.88",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.39",
			"situacion": "PAGA"
		  },
		  {
			"nroCuota": "7",
			"fechaDesde": "2018-11-16",
			"fechaHasta": "2018-12-17",
			"plazo": "31",
			"saldoCapital": "10583.47",
			"capital": "1677.65",
			"intereses": "206.74",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.39",
			"situacion": "PAGA"
		  },
		  {
			"nroCuota": "8",
			"fechaDesde": "2018-12-17",
			"fechaHasta": "2019-01-16",
			"plazo": "30",
			"saldoCapital": "8905.82",
			"capital": "1716.03",
			"intereses": "168.36",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.39",
			"situacion": "PAGA"
		  },
		  {
			"nroCuota": "9",
			"fechaDesde": "2019-01-16",
			"fechaHasta": "2019-02-18",
			"plazo": "33",
			"saldoCapital": "7189.79",
			"capital": "1734.88",
			"intereses": "149.51",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.39",
			"situacion": "PAGA"
		  },
		  {
			"nroCuota": "10",
			"fechaDesde": "2019-02-18",
			"fechaHasta": "2019-03-18",
			"plazo": "28",
			"saldoCapital": "5454.91",
			"capital": "1788.14",
			"intereses": "96.25",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.39",
			"situacion": "PAGA"
		  },
		  {
			"nroCuota": "11",
			"fechaDesde": "2019-03-18",
			"fechaHasta": "2019-04-16",
			"plazo": "29",
			"saldoCapital": "3666.77",
			"capital": "1817.38",
			"intereses": "67.01",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.39",
			"situacion": "PAGA"
		  },
		  {
			"nroCuota": "12",
			"fechaDesde": "2019-04-16",
			"fechaHasta": "2019-05-16",
			"plazo": "30",
			"saldoCapital": "1849.39",
			"capital": "1849.39",
			"intereses": "34.96",
			"impuestos": "0.00",
			"seguros": "20.00",
			"comisiones": "0.00",
			"total": "1904.35",
			"situacion": "PAGA"
		  }
		]
	  },
	  "operacionUId": "10118",
	  "idOperacionBT": "0010100000101000000000000000002800000000000074001",
	  "cantidadCuotas": "12"
	},
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPrestamos.ObtenerCronogramaOriginal",
	  "Fecha": "2021-03-18",
	  "Hora": "10:03:41",
	  "Requerimiento": "1",
	  "Numero": "8032",
	  "Estado": "OK"
	}
}
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
operacionUId | Long | Identificador de la operación

## Datos de salida

| Nombre              | Tipo                | Comentarios                       |
| ------------------- | ------------------- | --------------------------------- |
| sdtPrestamoOriginal | sBTPrestamoOriginal | Información del préstamo original |

Los campos del tipo de dato estructurado sBTPrestamoAltaConDespeje son los siguientes:

| Campo            | Tipo                     | Comentarios                                                                                  |
| ---------------- | ------------------------ | -------------------------------------------------------------------------------------------- |
| producto         | sBTProducto              | Información del producto.                                                                    |
| sucursalId       | Int                      | Identificador de sucursal.                                                                   |
| sucursalId       | String                   | Nombre de la sucursal.                                                                       |
| especie          | String                   | Especie del préstamo.                                                                        |
| fechaValor       | Date                     | Fecha valor.                                                                                 |
| tasa             | Double                   | Tasa.                                                                                        |
| modalidad        | String                   | Modalidad.                                                                                   |
| monedaId         | Short                    | Identificador de moneda.                                                                     |
| simboloMoneda    | String                   | Símbolo de moneda,                                                                           |
| precio           | Double                   | Precio.                                                                                      |
| fechaVencimiento | Date                     | Fecha vencimiento.                                                                           |
| totalCapital     | Double                   | Capital total.                                                                               |
| totalIntereses   | Double                   | Total de intereses.                                                                          |
| totalMora        | Double                   | Total de mora.                                                                               |
| totalComisiones  | Double                   | Total comisiones.                                                                            |
| totalImpuestos   | Double                   | Total de impuestos.                                                                          |
| totalSeguros     | Double                   | Total de seguros.                                                                            |
| totalPagar       | Double                   | Total a pagar.                                                                               |
| planDePagos      | sBTCuotaPrestamoOriginal | Plan de pagos original.                                                                      |
| operacionUId     | Long                     | Identificador de la operación.                                                               |
| idOperacionBT    | String                   | Identificador String bantotal (concatenación de todos los conceptos claves de la operación). |
| cantidadCuotas   | Short                    | Cantidad de cuotas.                                                                          |

Los campos del tipo de dato estructurado sBTProducto son los siguientes

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre del producto.             |
| moneda      | String | Símbolo de la moneda.            |
| papel       | String | Símbolo del papel.               |

Los campos del tipo de dato estructurado sBTCuotaPrestamoOriginal son los siguientes

| Campo        | Tipo   | Comentarios        |
| ------------ | ------ | ------------------ |
| nroCuota     | Short  | Número de cuota.   |
| fechaDesde   | Date   | Fecha desde.       |
| fechaHasta   | Date   | Fecha hasta.       |
| plazo        | Int    | Plazo.             |
| saldoCapital | Double | Saldo capital.     |
| capital      | Double | Capital.           |
| intereses    | Double | Intereses.         |
| impuestos    | Double | Impuestos.         |
| seguros      | Double | Seguros.           |
| comisiones   | Double | Comisiones.        |
| total        | Double | Total de la cuota. |
| situacion    | String | Situación.         |

### Errores

| Código | Descripción                                    |
| ------ | ---------------------------------------------- |
| 30001  | No se recibió el identificador de operación.   |
| 30002  | No se recuperó préstamo para el identificador: |

<!-- Obtener Cuenta de Cobro -->

## Obtener Cuenta de Cobro

Método para obtener un listado de las cuentas de cobro de un préstamo

| Nombre publicación               | Programa | Global/País |
| -------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerCuentaDeCobro | RBTPG134 | Global      |

> Ejemplo de invocación al método Obtener Cuenta de Cobro:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerCuentaDeCobro>
		<bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
      </bts:BTPrestamos.ObtenerCuentaDeCobro>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCuentaDeCobro' \
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
		"operacionUId": 121
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
      <BTPrestamos.ObtenerCuentaDeCobroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>0d2dc7b1654A8B5C60A82434</Token>
         </Btinreq>
         <sdtIdOperaciones>
            <sBTIdOperacion>
               <idOperacion>2</idOperacion>
            </sBTIdOperacion>
            <sBTIdOperacion>
               <idOperacion>3</idOperacion>
            </sBTIdOperacion>
         </sdtIdOperaciones>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>110</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerCuentaDeCobro</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-04</Fecha>
            <Hora>18:26:07</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerCuentaDeCobroResponse>
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
    "sdtIdOperaciones": {
        "sBTIdOperacion": [
            {
                "idOperacion": "2"
            },
            {
                "idOperacion": "3"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "111",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerCuentaDeCobro",
        "Requerimiento": "1",
        "Fecha": "2018-05-04",
        "Hora": "18:27:34",
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

### Datos de salida

| Nombre           | Tipo           | Comentarios                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| sdtIdOperaciones | sBTIdOperacion | Listado de identificadores únicos de operación. |

Los campos del tipo de dato estructurado sBTIdOperacion son los siguientes:

| Campo       | Tipo | Comentarios                                   |
| ----------- | ---- | --------------------------------------------- |
| IdOperacion | Long | Identificador único de operación de préstamo. |

### Errores

| Código | Descripción                                                                   |
| ------ | ----------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador único de operación de préstamo.                |
| 30002  | No se recuperó la operación para el identificador: [Número de Identificador]. |

<!-- Obtener Detalle -->

## Obtener Detalle

Método para obtener los datos de un préstamo

| Nombre publicación         | Programa | Global/País |
| -------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerDetalle | RBTPG012 | Global      |

> Ejemplo de invocación al método Obtener Detalle:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalle>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6453f934f94A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:OperacionUId>142</bts:OperacionUId>
      </bts:BTPrestamos.ObtenerDetalle>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalle=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "OperacionUId": 142
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
      <BTPrestamos.ObtenerDetalleResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtPrestamo>
            <interesVigente>6812.75</interesVigente>
            <deudaTotalVencida>17614.00</deudaTotalVencida>
            <tipoTasaMora>Lineal Anual</tipoTasaMora>
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso>
            <sucursal>Sucursal Beta</sucursal>
            <diasMoraPromedio>0</diasMoraPromedio>
            <plus>0.000000</plus>
            <actividad>01112 Trigo</actividad>
            <tasaOriginal>10.000000</tasaOriginal>
            <idOperacionBT>0010000100115000000000000000002700000000000326001</idOperacionBT>
            <diasMora>83</diasMora>
            <cantidadCuotas>37</cantidadCuotas>
            <estado>Normal</estado>
            <capitalOriginal>180000.00</capitalOriginal>
            <tipoDia>Meses Calendario</tipoDia>
            <fechaPrimerPago>2018-07-18</fechaPrimerPago>
            <claseTasa/>
            <tipoAmortizacion>Leasing</tipoAmortizacion>
            <simboloMoneda>$</simboloMoneda>
            <operacionUId>142</operacionUId>
            <fechaPrimerCuotaImpaga>2018-07-18</fechaPrimerCuotaImpaga>
            <valorCuota>0.00</valorCuota>
            <diasRevision>0</diasRevision>
            <precioOriginal>0.000000</precioOriginal>
            <tasaVigente>10.000000</tasaVigente>
            <tasaMoraVigente>0.000000</tasaMoraVigente>
            <interesDevengado>0.00</interesDevengado>
            <interesSuspenso>0.00</interesSuspenso>
            <deudaCancelacionTotal>213849.01</deudaCancelacionTotal>
            <plazo>1096</plazo>
            <tipoTasa>Lineal Anual</tipoTasa>
            <interesMora>154.45</interesMora>
            <saldoCapital>174180.15</saldoCapital>
            <precioActual>0.000000</precioActual>
            <cantidadCuotasVencidas>3</cantidadCuotasVencidas>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>LEASING, Amort. - Capital F./Empr.- T/F</nombre>
            </producto>
            <fechaUltimoPago>2018-05-18</fechaUltimoPago>
            <interesMoraDevengado>0.00</interesMoraDevengado>
            <idOperacionFmt>326-0</idOperacionFmt>
            <fechaProximoVencimiento>2018-10-18</fechaProximoVencimiento>
            <fechaValor>2018-05-18</fechaValor>
            <tasaMoraOriginal>10.000000</tasaMoraOriginal>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <totalImpuestos>0.00</totalImpuestos>
            <coeficienteIVA>0.000000</coeficienteIVA>
            <periodicidad>30</periodicidad>
            <resultadoInteresNormalDevengado>0.00</resultadoInteresNormalDevengado>
            <fechaVencimiento>2021-05-18</fechaVencimiento>
            <cantidadCuotasImpagas>36</cantidadCuotasImpagas>
            <cuentaContable>Ds.P/Arrend.Financ.No Reaj.Res.</cuentaContable>
            <tipoAno>360 Días</tipoAno>
            <interesPunitorio>0.00</interesPunitorio>
            <tipoProducto>AM</tipoProducto>
            <tasaPunitorios>0.000000</tasaPunitorios>
            <deudaTotalAFecha>23433.85</deudaTotalAFecha>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>950</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDetalle</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>18:33:21</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleResponse>
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
    "sdtPrestamo": {
        "interesVigente": "6812.75",
        "deudaTotalVencida": "17614.00",
        "tipoTasaMora": "Lineal Anual",
        "cuotasPagasConRetaso": "0",
        "sucursal": "Sucursal Beta",
        "diasMoraPromedio": "0",
        "plus": "0.000000",
        "actividad": "01112 Trigo",
        "tasaOriginal": "10.000000",
        "idOperacionBT": "0010000100115000000000000000002700000000000326001",
        "diasMora": "83",
        "cantidadCuotas": "37",
        "estado": "Normal",
        "capitalOriginal": "180000.00",
        "tipoDia": "Meses Calendario",
        "fechaPrimerPago": "2018-07-18",
        "claseTasa": "",
        "tipoAmortizacion": "Leasing",
        "simboloMoneda": "$",
        "operacionUId": "142",
        "fechaPrimerCuotaImpaga": "2018-07-18",
        "valorCuota": "0.00",
        "diasRevision": "0",
        "precioOriginal": "0.000000",
        "tasaVigente": "10.000000",
        "tasaMoraVigente": "0.000000",
        "interesDevengado": "0.00",
        "interesSuspenso": "0.00",
        "deudaCancelacionTotal": "213849.01",
        "plazo": "1096",
        "tipoTasa": "Lineal Anual",
        "interesMora": "154.45",
        "saldoCapital": "174180.15",
        "precioActual": "0.000000",
        "cantidadCuotasVencidas": "3",
        "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": "0",
            "nombre": "LEASING, Amort. - Capital F./Empr.- T/F"
        },
        "fechaUltimoPago": "2018-05-18",
        "interesMoraDevengado": "0.00",
        "idOperacionFmt": "326-0",
        "fechaProximoVencimiento": "2018-10-18",
        "fechaValor": "2018-05-18",
        "tasaMoraOriginal": "10.000000",
        "tasaEfectiva": "0.000000",
        "totalImpuestos": "0.00",
        "coeficienteIVA": "0.000000",
        "periodicidad": "30",
        "resultadoInteresNormalDevengado": "0.00",
        "fechaVencimiento": "2021-05-18",
        "cantidadCuotasImpagas": "36",
        "cuentaContable": "Ds.P/Arrend.Financ.No Reaj.Res.",
        "tipoAno": "360 Días",
        "interesPunitorio": "0.00",
        "tipoProducto": "AM",
        "tasaPunitorios": "0.000000",
        "deudaTotalAFecha": "23433.85"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "951",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDetalle",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "18:34:34",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                                |
| ------------ | ---- | ------------------------------------------ |
| operacionUId | Long | Identificador único de operación simulada. |

### Datos de salida

| Nombre      | Tipo        | Comentarios         |
| ----------- | ----------- | ------------------- |
| sdtPrestamo | sBTPrestamo | Datos del préstamo. |

Los campos del tipo de dato estructurado sBTPrestamo son los siguientes:

| Campo                           | Tipo                  | Comentarios                                   |
| ------------------------------- | --------------------- | --------------------------------------------- |
| operacionUId                    | Long                  | Identificador único de la operación simulada. |
| interesVigente                  | Double                | Monto de interés vigente.                     |
| deudaTotalVencida               | Double                | Monto de la deuda vencida a la fecha.         |
| tipoTasaMora                    | String                | Tipo de tasa de mora.                         |
| cuotasPagasConRetaso            | Int                   | Cantidad de cuotas pagas con atraso.          |
| sucursal                        | String                | Sucursal del préstamo.                        |
| diasMoraPromedio                | Int                   | Días de mora promedio.                        |
| plus                            | Double                | Tasa plus.                                    |
| actividad                       | String                | Actividad.                                    |
| tasaOriginal                    | Double                | Tasa original.                                |
| idOperacionBT                   | String                | Identificador texto de operación.             |
| diasMora                        | Int                   | Días de mora del préstamo.                    |
| cantidadCuotas                  | Int                   | Cantidad de cuotas del préstamo.              |
| estado                          | String                | Esta del préstamo.                            |
| capitalOriginal                 | Double                | Capital original del préstamo.                |
| tipoDia                         | String                | Tipo de día del préstamo.                     |
| fechaPrimerPago                 | Fecha de primer pago. |
| claseTasa                       | String                | Clase de tasa.                                |
| tipoAmortizacion                | String                | Tipo de amortización.                         |
| simboloMoneda                   | String                | Símbolo monetario.                            |
| fechaPrimerCuotaImpaga          | Date                  | Fecha de la primera cuota impaga.             |
| valorCuota                      | Double                | Valor de la cuota.                            |
| diasRevision                    | Int                   | Días de revisión (Tasa variable).             |
| precioOriginal                  | Double                | Precio original del papel.                    |
| tasaVigente                     | Double                | Tasa vigente.                                 |
| tasaMoraVigente                 | Double                | Tasa de mora vigente.                         |
| interesDevengado                | Double                | Intereses devengados.                         |
| interesSuspenso                 | Double                | Intereses en suspenso.                        |
| deudaCancelacionTotal           | Double                | Monto de cancelación total.                   |
| plazo                           | Int                   | Plazo del préstamo.                           |
| tipoTasa                        | String                | Tipo de tasa.                                 |
| interesMora                     | Double                | Intereses de mora.                            |
| saldoCapital                    | Double                | Saldo de capital.                             |
| precioActual                    | Double                | Precio del papel actual.                      |
| cantidadCuotasVencidas          | Int                   | Cantidad de cuotas vencidas.                  |
| fechaUltimoPago                 | Date                  | Fecha de último pago de cuota.                |
| interesMoraDevengado            | Double                | Intereses de mora devengados.                 |
| fechaProximoVencimiento         | Date                  | Fecha de vencimiento de la próxima cuota.     |
| fechaValor                      | Date                  | Fecha de alta del préstamo.                   |
| tasaMoraOriginal                | Double                | Tasa de mora original.                        |
| tasaEfectiva                    | Double                | Tasa efectiva anual.                          |
| totalImpuestos                  | Double                | Total de impuestos.                           |
| coeficienteIVA                  | Double                | Coeficiente de IVA.                           |
| periodicidad                    | Int                   | Período entre cuotas.                         |
| resultadoInteresNormalDevengado | Double                | Resultado de intereses normal devengados.     |
| fechaVencimiento                | Date                  | Fecha de vencimiento del préstamo.            |
| cantidadCuotasImpagas           | Int                   | Cantidad de cuotas impagas.                   |
| cuentaContable                  | String                | Descripción del rubro.                        |
| tipoAno                         | String                | Tipo de año.                                  |
| interesPunitorio                | Double                | Intereses punitorios.                         |
| tipoProducto                    | String                | Tipo de producto (Amortizable/Plan de pagos). |
| tasaPunitorios                  | Double                | Tasa punitorios.                              |
| deudaTotalAFecha                | Double                | Monto a pagar para estar al día.              |
| producto                        | sBTProducto           | Producto.                                     |
| idOperacionFmt                  | String                | Identificador de la operación en BT.          |
| costoFinancieroTotal            | Double                | Costo financiero total (Argentina).           |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el identificador. |

<!-- Obtener Detalle a Fecha -->

## Obtener Detalle A Fecha

Método para obtener los datos de un préstamo a una fecha especifica

| Nombre publicación               | Programa | Global/País |
| -------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerDetalleAFecha | RBTPG223 | Global      |

> Ejemplo de invocación al método Obtener Detalle A Fecha:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleAFecha>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>324915377F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>15</bts:operacionUId>
         <bts:fecha>2018-11-15</bts:fecha>
      </bts:BTPrestamos.ObtenerDetalleAFecha>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleAFecha=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 142,
	"fecha": "2018-11-15"
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
      <BTPrestamos.ObtenerDetalleAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>324915377F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamo>
            <claseTasa/>
            <tipoTasa>Lineal Anual</tipoTasa>
            <tipoDia>Meses Calendario</tipoDia>
            <tipoAno>360 Días</tipoAno>
            <tasaOriginal>19.000000</tasaOriginal>
            <tasaVigente>19.000000</tasaVigente>
            <plus>0.000000</plus>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <diasRevision>0</diasRevision>
            <tipoTasaMora>Lineal Anual</tipoTasaMora>
            <tasaMoraOriginal>19.000000</tasaMoraOriginal>
            <tasaMoraVigente>0.000000</tasaMoraVigente>
            <tasaPunitorios>0.000000</tasaPunitorios>
            <operacionUId>15</operacionUId>
            <idOperacionFmt>189-0</idOperacionFmt>
            <idOperacionBT>0010000100103000000000000000002700000000000189001</idOperacionBT>
            <producto>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS CONSUMO, Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel>$</papel>
            </producto>
            <tipoProducto>AM</tipoProducto>
            <sucursal>Sucursal Beta</sucursal>
            <simboloMoneda>$</simboloMoneda>
            <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
            <cuentaContable>Consumo reajustables</cuentaContable>
            <actividad>01112 Trigo</actividad>
            <estado>Normal</estado>
            <precioOriginal>0.000000</precioOriginal>
            <precioActual>0.000000</precioActual>
            <coeficienteIVA>22.000000</coeficienteIVA>
            <capitalOriginal>12000.00</capitalOriginal>
            <saldoCapital>12000.00</saldoCapital>
            <valorCuota>1231.74</valorCuota>
            <fechaValor>2018-09-25</fechaValor>
            <fechaVencimiento>2019-09-25</fechaVencimiento>
            <interesDevengado>0.00</interesDevengado>
            <interesMoraDevengado>0.00</interesMoraDevengado>
            <resultadoInteresNormalDevengado>0.00</resultadoInteresNormalDevengado>
            <interesSuspenso>0.00</interesSuspenso>
            <deudaCancelacionTotal>14793.06</deudaCancelacionTotal>
            <deudaTotalAFecha>2475.64</deudaTotalAFecha>
            <cantidadCuotasVencidas>1</cantidadCuotasVencidas>
            <deudaTotalVencida>1243.90</deudaTotalVencida>
            <interesVigente>313.03</interesVigente>
            <interesMora>9.97</interesMora>
            <interesPunitorio>0.00</interesPunitorio>
            <totalImpuestos>287.27</totalImpuestos>
            <periodicidad>30</periodicidad>
            <plazo>365</plazo>
            <diasMora>21</diasMora>
            <diasMoraPromedio>0</diasMoraPromedio>
            <cantidadCuotas>12</cantidadCuotas>
            <cantidadCuotasImpagas>12</cantidadCuotasImpagas>
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso>
            <fechaPrimerPago>2018-10-25</fechaPrimerPago>
            <fechaProximoVencimiento>2018-11-26</fechaProximoVencimiento>
            <fechaPrimerCuotaImpaga>2018-10-25</fechaPrimerCuotaImpaga>
            <fechaUltimoPago>0000-00-00</fechaUltimoPago>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDetalleAFecha</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>16:03:15</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6975</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleAFechaResponse>
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
    "sdtPrestamo": {
        "interesVigente": "6812.75",
        "deudaTotalVencida": "17614.00",
        "tipoTasaMora": "Lineal Anual",
        "cuotasPagasConRetaso": "0",
        "sucursal": "Sucursal Beta",
        "diasMoraPromedio": "0",
        "plus": "0.000000",
        "actividad": "01112 Trigo",
        "tasaOriginal": "10.000000",
        "idOperacionBT": "0010000100115000000000000000002700000000000326001",
        "diasMora": "83",
        "cantidadCuotas": "37",
        "estado": "Normal",
        "capitalOriginal": "180000.00",
        "tipoDia": "Meses Calendario",
        "fechaPrimerPago": "2018-07-18",
        "claseTasa": "",
        "tipoAmortizacion": "Leasing",
        "simboloMoneda": "$",
        "operacionUId": "142",
        "fechaPrimerCuotaImpaga": "2018-07-18",
        "valorCuota": "0.00",
        "diasRevision": "0",
        "precioOriginal": "0.000000",
        "tasaVigente": "10.000000",
        "tasaMoraVigente": "0.000000",
        "interesDevengado": "0.00",
        "interesSuspenso": "0.00",
        "deudaCancelacionTotal": "213849.01",
        "plazo": "1096",
        "tipoTasa": "Lineal Anual",
        "interesMora": "154.45",
        "saldoCapital": "174180.15",
        "precioActual": "0.000000",
        "cantidadCuotasVencidas": "3",
        "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": "0",
            "nombre": "LEASING, Amort. - Capital F./Empr.- T/F"
        },
        "fechaUltimoPago": "2018-05-18",
        "interesMoraDevengado": "0.00",
        "idOperacionFmt": "326-0",
        "fechaProximoVencimiento": "2018-10-18",
        "fechaValor": "2018-05-18",
        "tasaMoraOriginal": "10.000000",
        "tasaEfectiva": "0.000000",
        "totalImpuestos": "0.00",
        "coeficienteIVA": "0.000000",
        "periodicidad": "30",
        "resultadoInteresNormalDevengado": "0.00",
        "fechaVencimiento": "2021-05-18",
        "cantidadCuotasImpagas": "36",
        "cuentaContable": "Ds.P/Arrend.Financ.No Reaj.Res.",
        "tipoAno": "360 Días",
        "interesPunitorio": "0.00",
        "tipoProducto": "AM",
        "tasaPunitorios": "0.000000",
        "deudaTotalAFecha": "23433.85"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "951",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDetalleAFecha",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "18:34:34",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                                |
| ------------ | ---- | ------------------------------------------ |
| operacionUId | Long | Identificador único de operación simulada. |
| fecha        | Date | Fecha a consultar.                         |

### Datos de salida

| Nombre      | Tipo        | Comentarios         |
| ----------- | ----------- | ------------------- |
| sdtPrestamo | sBTPrestamo | Datos del préstamo. |

Los campos del tipo de dato estructurado sBTPrestamo son los siguientes:

| Campo                           | Tipo                  | Comentarios                                   |
| ------------------------------- | --------------------- | --------------------------------------------- |
| operacionUId                    | Long                  | Identificador único de la operación simulada. |
| interesVigente                  | Double                | Monto de interés vigente.                     |
| deudaTotalVencida               | Double                | Monto de la deuda vencida a la fecha.         |
| tipoTasaMora                    | String                | Tipo de tasa de mora.                         |
| cuotasPagasConRetaso            | Int                   | Cantidad de cuotas pagas con atraso.          |
| sucursal                        | String                | Sucursal del préstamo.                        |
| diasMoraPromedio                | Int                   | Días de mora promedio.                        |
| plus                            | Double                | Tasa plus.                                    |
| actividad                       | String                | Actividad.                                    |
| tasaOriginal                    | Double                | Tasa original.                                |
| idOperacionBT                   | String                | Identificador texto de operación.             |
| diasMora                        | Int                   | Días de mora del préstamo.                    |
| cantidadCuotas                  | Int                   | Cantidad de cuotas del préstamo.              |
| estado                          | String                | Esta del préstamo.                            |
| capitalOriginal                 | Double                | Capital original del préstamo.                |
| tipoDia                         | String                | Tipo de día del préstamo.                     |
| fechaPrimerPago                 | Fecha de primer pago. |
| claseTasa                       | String                | Clase de tasa.                                |
| tipoAmortizacion                | String                | Tipo de amortización.                         |
| simboloMoneda                   | String                | Símbolo monetario.                            |
| fechaPrimerCuotaImpaga          | Date                  | Fecha de la primera cuota impaga.             |
| valorCuota                      | Double                | Valor de la cuota.                            |
| diasRevision                    | Int                   | Días de revisión (Tasa variable).             |
| precioOriginal                  | Double                | Precio original del papel.                    |
| tasaVigente                     | Double                | Tasa vigente.                                 |
| tasaMoraVigente                 | Double                | Tasa de mora vigente.                         |
| interesDevengado                | Double                | Intereses devengados.                         |
| interesSuspenso                 | Double                | Intereses en suspenso.                        |
| deudaCancelacionTotal           | Double                | Monto de cancelación total.                   |
| plazo                           | Int                   | Plazo del préstamo.                           |
| tipoTasa                        | String                | Tipo de tasa.                                 |
| interesMora                     | Double                | Intereses de mora.                            |
| saldoCapital                    | Double                | Saldo de capital.                             |
| precioActual                    | Double                | Precio del papel actual.                      |
| cantidadCuotasVencidas          | Int                   | Cantidad de cuotas vencidas.                  |
| fechaUltimoPago                 | Date                  | Fecha de último pago de cuota.                |
| interesMoraDevengado            | Double                | Intereses de mora devengados.                 |
| fechaProximoVencimiento         | Date                  | Fecha de vencimiento de la próxima cuota.     |
| fechaValor                      | Date                  | Fecha de alta del préstamo.                   |
| tasaMoraOriginal                | Double                | Tasa de mora original.                        |
| tasaEfectiva                    | Double                | Tasa efectiva anual.                          |
| totalImpuestos                  | Double                | Total de impuestos.                           |
| coeficienteIVA                  | Double                | Coeficiente de IVA.                           |
| periodicidad                    | Int                   | Período entre cuotas.                         |
| resultadoInteresNormalDevengado | Double                | Resultado de intereses normal devengados.     |
| fechaVencimiento                | Date                  | Fecha de vencimiento del préstamo.            |
| cantidadCuotasImpagas           | Int                   | Cantidad de cuotas impagas.                   |
| cuentaContable                  | String                | Descripción del rubro.                        |
| tipoAno                         | String                | Tipo de año.                                  |
| interesPunitorio                | Double                | Intereses punitorios.                         |
| tipoProducto                    | String                | Tipo de producto (Amortizable/Plan de pagos). |
| tasaPunitorios                  | Double                | Tasa punitorios.                              |
| deudaTotalAFecha                | Double                | Monto a pagar para estar al día.              |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el identificador. |
| 30003  | No se recibió fecha.                               |

<!-- Obtener Detalle de Oferta -->

## Obtener Detalle de Oferta

Método para obtener el detalle de una oferta de préstamo simulada.

| Nombre publicación               | Programa | Global/País |
| -------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerDetalleOferta | RBTPG125 | Global      |

> Ejemplo de invocación al método Obtener Detalle de Oferta:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleOferta>
         <bts:Btinreq>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:simulacionUId>47</bts:simulacionUId>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:cantidadCuotas>12</bts:cantidadCuotas>
         <bts:actividad>1111</bts:actividad>
      </bts:BTPrestamos.ObtenerDetalleOferta>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerDetalleOferta=' \
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
	"simulacionUId": 47,
    "clienteUId": "1",
	"cantidadCuotas": "12",
	"actividad": 1111
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
      <BTPrestamos.ObtenerDetalleOfertaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>52005b89a6F955E77534D3E0</Token>
         </Btinreq>
         <sdtOferta>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2019-11-25</fechaValor>
            <capital>1000.00</capital>
            <cronograma>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-05-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-06-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-07-06</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-08-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-09-07</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-10-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-11-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2020-12-07</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2021-01-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2021-02-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.67</cuota>
                  <fechaPago>2021-03-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <otrosConceptos>0.00</otrosConceptos>
                  <capital>0.00</capital>
                  <impuestos>0.00</impuestos>
                  <intereses>0.00</intereses>
                  <concepto/>
                  <tipoCuota/>
                  <cuota>268.60</cuota>
                  <fechaPago>2021-04-05</fechaPago>
                  <seguros>0.00</seguros>
               </sBTCuotaSimulacion>
            </cronograma>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>279.90</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>3223.97</totalPrestamo>
            <valorCuota>268.67</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>194</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-05-05</fechaPrimerPago>
            <idOperacionBT>0010100000101000000000000000004200000000000418001</idOperacionBT>
            <fechaVencimiento>2021-04-05</fechaVencimiento>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>43</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <plazo>497</plazo>
         </sdtOferta>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>697</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDetalleOferta</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-04-24</Fecha>
            <Hora>12:42:27</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleOfertaResponse>
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
	"sdtOferta": {
		"otrosConceptos" : {},
		"fechaValor": "2019-11-25",
		"capital": "1000.00",
		"cronograma": {
		  "sBTCuotaSimulacion": [
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.67",
			  "fechaPago": "2020-05-05",
			  "seguros": "0.00"
			},
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.67",
			  "fechaPago": "2020-06-05",
			  "seguros": "0.00"
			},
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.67",
			  "fechaPago": "2020-07-06",
			  "seguros": "0.00"
			},
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.67",
			  "fechaPago": "2020-08-05",
			  "seguros": "0.00"
			},
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.67",
			  "fechaPago": "2020-09-07",
			  "seguros": "0.00"
			},
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.67",
			  "fechaPago": "2020-10-05",
			  "seguros": "0.00"
			},
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.67",
			  "fechaPago": "2020-11-05",
			  "seguros": "0.00"
			},
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.67",
			  "fechaPago": "2020-12-07",
			  "seguros": "0.00"
			},
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.67",
			  "fechaPago": "2021-01-05",
			  "seguros": "0.00"
			},
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.67",
			  "fechaPago": "2021-02-05",
			  "seguros": "0.00"
			},
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.67",
			  "fechaPago": "2021-03-05",
			  "seguros": "0.00"
			},
			{
			  "otrosConceptos": "0.00",
			  "capital": "0.00",
			  "impuestos": "0.00",
			  "intereses": "0.00",
			  "concepto": "",
			  "tipoCuota": "",
			  "cuota": "268.60",
			  "fechaPago": "2021-04-05",
			  "seguros": "0.00"
			}
		  ]
		},
		"tasaEfectiva": "0.000000",
		"intereses": "279.90",
		"tasaNominalAnual": "23.000000",
		"totalPrestamo": "3223.97",
		"valorCuota": "268.67",
		"tasaEfectivaAnual": "25.590075",
		"operacionUId": "194",
		"tasa": "23.000000",
		"fechaPrimerPago": "2020-05-05",
		"idOperacionBT": "0010100000101000000000000000004200000000000418001",
		"fechaVencimiento": "2021-04-05",
		"producto": {
		  "moneda": "$",
		  "papel": "$",
		  "productoUId": "43",
		  "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
		},
		"plazo": "497"
	}
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPrestamos.ObtenerDetalleOferta",
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

| Nombre         | Tipo | Comentarios                           |
| -------------- | ---- | ------------------------------------- |
| simulacionUId  | Long | Identificador único de la simulación. |
| clienteUId     | Long | Identificador único del cliente.      |
| cantidadCuotas | Int  | Cantidad de cuotas.                   |
| actividad      | Long | Destino del crédito.                  |

### Datos de salida

| Nombre    | Tipo                        | Comentarios                       |
| --------- | --------------------------- | --------------------------------- |
| sdtOferta | sBTSimulacionPrestamoOferta | Detalle de la oferta de préstamo. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamoOferta son los siguientes:

| Campo             | Tipo               | Comentarios                                                                                  |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------------- |
| otrosConceptos    | sBTConcepto        | Otros conceptos de la simulación.                                                            |
| fechaValor        | Date               | Fecha valor.                                                                                 |
| capital           | Double             | Capital total.                                                                               |
| cronograma        | sBTCuotaSimulacion | Cronograma del préstamo.                                                                     |
| tasaEfectiva      | Double             | Tasa efectiva.                                                                               |
| intereses         | Double             | Intereses totales.                                                                           |
| tasaNominalAnual  | Double             | Tasa nominal anual.                                                                          |
| totalPrestamo     | Double             | Total del préstamo.                                                                          |
| tasaEfectivaAnual | Double             | Tasa efectiva anual.                                                                         |
| valorCuota        | Double             | Valor cuota.                                                                                 |
| operacionUId      | Long               | Identificador único de la operación.                                                         |
| tasa              | Double             | Tasa del préstamo.                                                                           |
| fechaPrimerPago   | Date               | Fecha primer pago.                                                                           |
| fechaVencimiento  | Date               | Fecha vencimiento.                                                                           |
| idOperacionBT     | String             | Identificador String bantotal (concatenación de todos los conceptos claves de la operación). |
| plazo             | Int                | Plazo del préstamo.                                                                          |
| producto          | sBTProducto        | Descripción del producto.                                                                    |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes:

| Campo          | Tipo   | Comentarios                                |
| -------------- | ------ | ------------------------------------------ |
| fechaPago      | Date   | Fecha de pago.                             |
| tipoCuota      | String | Tipo de la cuota (Capital/Interés).        |
| concepto       | String | Concepto.                                  |
| capital        | Double | Monto de capital en la cuota.              |
| interes        | Double | Monto de intereses en la cuota.            |
| seguros        | Double | Monto de seguros en la cuota.              |
| impuestos      | Double | Monto de impuestos en la cuota.            |
| otrosConceptos | Double | Importe correspondiente a otros conceptos. |
| cuota          | Double | Importe total de la cuota.                 |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre de producto.              |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

### Errores

| Código | Descripción                                                                |
| ------ | -------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.                                 |
| 30002  | No se recibió el identificador de simulación.                              |
| 30003  | No se recuperó la cuenta para el Identificador: [Número de Identificador]. |
| 30004  | La simulación no corresponde al cliente: [Número de Cliente].              |
| 30005  | La cantidad de cuotas indicada no forma parte de las ofertas.              |
| 30012  | La simulación no existe.                                                   |
| 40238  | El Código de Actividad indicado es incorrecto.                             |

<!-- Obtener Detalle de Préstamo Cancelado -->

## Obtener Detalle de Préstamo Cancelado

Devuelve el detalle del préstamo cancelado indicado

| Nombre publicación                          | Programa | Global/País |
| ------------------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerDetallePrestamoCancelado | RBTPG248 | Global      |

> Ejemplo de invocación al método Obtener Detalle de Préstamo Cancelado:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetallePrestamoCancelado>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>1576177365F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10118</bts:operacionUId>
      </bts:BTPrestamos.ObtenerDetallePrestamoCancelado>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerDetallePrestamoCancelado' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
	"operacionUId": "10118"
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
      <BTPrestamos.ObtenerDetallePrestamoCanceladoResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>1576177365F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamo>
            <operacionUId>10118</operacionUId>
            <idOperacionFmt>74-0</idOperacionFmt>
            <idOperacionBT>0010100000101000000000000000002800000000000074001</idOperacionBT>
            <producto>
               <productoUId>36</productoUId>
               <nombre>Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel>$</papel>
            </producto>
            <tipoProducto>AM</tipoProducto>
            <sucursal>Casa Matriz</sucursal>
            <simboloMoneda>$</simboloMoneda>
            <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
            <capitalOriginal>19999.00</capitalOriginal>
            <fechaValor>2018-05-15</fechaValor>
            <fechaVencimiento>2019-05-16</fechaVencimiento>
            <periodicidad>30</periodicidad>
            <plazo>366</plazo>
            <cantidadCuotas>12</cantidadCuotas>
            <fechaCancelacion>2020-03-05</fechaCancelacion>
            <claseTasa/>
            <tipoTasa>Lineal Anual</tipoTasa>
            <tipoDia>Meses Calendario</tipoDia>
            <tipoAno>365 Días</tipoAno>
            <tasaOriginal>23.000000</tasaOriginal>
            <plus>0.000000</plus>
            <cronograma>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2486.68</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2499.33</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2466.81</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2442.12</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2431.69</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2403.76</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2380.28</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2358.28</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2326.69</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2307.67</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2280.59</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
               <sBTCuotaCancelada>
                  <fechaPago>2020-03-05</fechaPago>
                  <importePago>2251.73</importePago>
                  <diasMora>0</diasMora>
               </sBTCuotaCancelada>
            </cronograma>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDetallePrestamoCancelado</Servicio>
            <Fecha>2019-08-13</Fecha>
            <Hora>10:04:44</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6656</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDetallePrestamoCanceladoResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
'{
	"Btinreq": {
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1",
	  "Usuario": "BANTOTAL",
	  "Token": "1576177365F955E77534D3E0",
	  "Device": "AC"
	},
	"sdtPrestamo": {
	  "operacionUId": "10118",
	  "idOperacionFmt": "74-0",
	  "idOperacionBT": "0010100000101000000000000000002800000000000074001",
	  "producto": {
		"productoUId": "36",
		"nombre": "Amortización Automática TF",
		"moneda": "$",
		"papel": "$"
	  },
	  "tipoProducto": "AM",
	  "sucursal": "Casa Matriz",
	  "simboloMoneda": "$",
	  "tipoAmortizacion": "Francés con Seg.e Impu.",
	  "capitalOriginal": "19999.00",
	  "fechaValor": "2018-05-15",
	  "fechaVencimiento": "2019-05-16",
	  "periodicidad": "30",
	  "plazo": "366",
	  "cantidadCuotas": "12",
	  "fechaCancelacion": "2020-03-05",
	  "tipoTasa": "Lineal Anual",
	  "tipoDia": "Meses Calendario",
	  "tipoAno": "365 Días",
	  "tasaOriginal": "23.000000",
	  "plus": "0.000000",
	  "cronograma": {
		"sBTCuotaCancelada": [
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2486.68",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2499.33",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2466.81",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2442.12",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2431.69",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2403.76",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2380.28",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2358.28",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2326.69",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2307.67",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2280.59",
			"diasMora": "0"
		  },
		  {
			"fechaPago": "2020-03-05",
			"importePago": "2251.73",
			"diasMora": "0"
		  }
		]
	  }
	},
	"Btoutreq": {
	  "Canal": "BTDIGITAL",
	  "Servicio": "BTPrestamos.ObtenerDetallePrestamoCancelado",
	  "Fecha": "2019-08-13",
	  "Hora": "10:04:44",
	  "Requerimiento": "1",
	  "Numero": "6656",
	  "Estado": "OK"
	}
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                          |
| ------------ | ---- | ------------------------------------ |
| operacionUId | Long | Identificador único de la operación. |

### Datos de salida

| Nombre      | Tipo                 | Comentarios                   |
| ----------- | -------------------- | ----------------------------- |
| sdtPrestamo | sBTPrestamoCancelado | Datos del préstamo cancelado. |

Los campos del tipo de dato estructurado sBTPrestamoCancelado son los siguientes:

| Campo            | Tipo              | Comentarios                                   |
| ---------------- | ----------------- | --------------------------------------------- |
| operacionUId     | Long              | Identificador único de la operación simulada. |
| producto         | sBTProducto       | Datos del Producto.                           |
| sucursal         | String            | Sucursal del préstamo.                        |
| plus             | Double            | Tasa plus.                                    |
| tasaOriginal     | Double            | Tasa original.                                |
| idOperacionFmt   | String            | Identificador string.                         |
| idOperacionBT    | String            | Identificador texto de operación.             |
| cantidadCuotas   | Int               | Cantidad de cuotas del préstamo.              |
| capitalOriginal  | Double            | Capital original del préstamo.                |
| tipoDia          | String            | Tipo de día del préstamo.                     |
| claseTasa        | String            | Clase de tasa.                                |
| tipoAmortizacion | String            | Tipo de amortización.                         |
| simboloMoneda    | String            | Símbolo monetario.                            |
| plazo            | Int               | Plazo del préstamo.                           |
| tipoTasa         | String            | Tipo de tasa.                                 |
| fechaValor       | Date              | Fecha de alta del préstamo.                   |
| tasaEfectiva     | Double            | Tasa efectiva anual.                          |
| periodicidad     | Int               | Período entre cuotas.                         |
| fechaVencimiento | Date              | Fecha de vencimiento del préstamo.            |
| tipoAno          | String            | Tipo de año.                                  |
| tipoProducto     | String            | Tipo de producto (Amortizable/Plan de pagos). |
| fechaCancelacion | Date              | Fecha de cancelación del préstamo.            |
| cronograma       | sBTCuotaCancelada | Cronograma de pagos del préstamo.             |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre de producto.              |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

Los campos del tipo de dato estructurado sBTCuotaCancelada son los siguientes:

| Campo       | Tipo   | Comentarios                               |
| ----------- | ------ | ----------------------------------------- |
| fechaPago   | date   | Fecha de pago                             |
| importePago | double | Importe total pago de la cuota            |
| diasMora    | Short  | Días de mora con los que se pago la cuota |

### Errores

| Código | Descripción                                                                   |
| ------ | ----------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador único de operación.                            |
| 30002  | No se recuperó la operación para el Identificador: [Número de Identificador]. |
| 30003  | El préstamo no se encuentra cancelado.                                        |

<!-- Obtener Detalle Pago Préstamo -->

## Obtener Detalle Reducido

Método para obtener los datos básicos de un préstamo

| Nombre publicación                 | Programa | Global/País |
| ---------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerDetalleReducido | RBTPG073 | Global      |

> Ejemplo de invocación al método Obtener Detalle Reducido:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleReducido>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6453f934f94A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:OperacionUId>142</bts:OperacionUId>
      </bts:BTPrestamos.ObtenerDetalleReducido>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleReducido=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "OperacionUId": 142
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
      <BTPrestamos.ObtenerDetalleReducidoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>6453f934f94A8B5C60A82434</Token>
         </Btinreq>
         <sdtPrestamo>
            <sucursal>Sucursal Beta</sucursal>
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso>
            <idOperacionBT>0010000100115000000000000000002700000000000326001</idOperacionBT>
            <cantidadCuotas>37</cantidadCuotas>
            <capitalOriginal>180000.00</capitalOriginal>
            <estado>Normal</estado>
            <operacionUId>142</operacionUId>
            <tasaVigente>10.000000</tasaVigente>
            <plazo>1096</plazo>
            <saldoCapital>-174180.15</saldoCapital>
            <tipoTasa>Lineal Anual</tipoTasa>
            <producto>
               <papel/>
               <moneda/>
               <productoUId>0</productoUId>
               <nombre>Amort. - Capital F./Empr.- T/F</nombre>
            </producto>
            <idOperacionFmt>326-0</idOperacionFmt>
            <fechaValor>2018-05-18</fechaValor>
            <fechaVencimiento>2021-05-18</fechaVencimiento>
            <cantidadCuotasImpagas>36</cantidadCuotasImpagas>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>766</Numero>
            <Servicio>BTPrestamos.ObtenerDetalleReducido</Servicio>
            <Estado>OK</Estado>
            <Requerimiento/>
            <Fecha>2017-12-12</Fecha>
            <Hora>10:55:30</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleReducidoResponse>
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
    "sdtPrestamo": {
        "sucursal": "Sucursal Beta",
        "idOperacionBT": "0010000100115000000000000000002700000000000326001",
        "cantidadCuotas": "37",
        "capitalOriginal": "180000.00",
        "estado": "Normal",
        "operacionUId": "142",
        "tasaVigente": "10.000000",
        "plazo": "1096",
        "saldoCapital": "-174180.15",
        "tipoTasa": "Lineal Anual",
        "producto": {
            "papel": "",
            "moneda": "",
            "productoUId": "0",
            "nombre": "Amort. - Capital F./Empr.- T/F"
        },
        "fechaValor": "2018-05-18",
        "fechaVencimiento": "2021-05-18",
        "cantidadCuotasImpagas": "36",
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "767",
        "Servicio": "BTPrestamos.ObtenerDetalleReducido",
        "Estado": "OK",
        "Requerimiento": "",
        "Fecha": "2017-12-12",
        "Hora": "11:15:09",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                                |
| ------------ | ---- | ------------------------------------------ |
| operacionUId | Long | Identificador único de operación simulada. |

### Datos de salida

| Nombre      | Tipo        | Comentarios        |
| ----------- | ----------- | ------------------ |
| sdtPrestamo | sBTPrestamo | Datos del préstamo |

Los campos del tipo de dato estructurado sBTPrestamo son los siguientes:

| Campo                 | Tipo        | Comentarios                                   |
| --------------------- | ----------- | --------------------------------------------- |
| operacionUId          | Long        | Identificador único de la operación simulada. |
| sucursal              | String      | Sucursal del préstamo.                        |
| idOperacionBT         | String      | Identificador texto de operación.             |
| idOperacionFmt        | String      | Identificador de la operación en BT.          |
| cantidadCuotas        | Int         | Cantidad de cuotas del préstamo.              |
| estado                | String      | Esta del préstamo.                            |
| capitalOriginal       | Double      | Capital original del préstamo.                |
| simboloMoneda         | String      | Símbolo monetario.                            |
| tasaVigente           | Double      | Tasa vigente.                                 |
| plazo                 | Int         | Plazo del préstamo.                           |
| tipoTasa              | String      | Tipo de tasa.                                 |
| saldoCapital          | Double      | Saldo de capital.                             |
| fechaValor            | Date        | Fecha de alta del préstamo.                   |
| fechaVencimiento      | Date        | Fecha de vencimiento del préstamo.            |
| cantidadCuotasImpagas | Int         | Cantidad de cuotas impagas.                   |
| producto              | sBTProducto | Producto.                                     |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el identificador. |

<!-- Obtener Detalle Reducido -->

## Obtener Detalle Reducido

Método para obtener los datos básicos de un préstamo

| Nombre publicación                 | Programa | Global/País |
| ---------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerDetalleReducido | RBTPG073 | Global      |

> Ejemplo de invocación al método Obtener Detalle Reducido:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleReducido>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>6453f934f94A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:OperacionUId>142</bts:OperacionUId>
      </bts:BTPrestamos.ObtenerDetalleReducido>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleReducido=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "OperacionUId": 142
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
      <BTPrestamos.ObtenerDetalleReducidoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>6453f934f94A8B5C60A82434</Token>
         </Btinreq>
         <sdtPrestamo>
            <sucursal>Sucursal Beta</sucursal>
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso>
            <idOperacionBT>0010000100115000000000000000002700000000000326001</idOperacionBT>
            <cantidadCuotas>37</cantidadCuotas>
            <capitalOriginal>180000.00</capitalOriginal>
            <estado>Normal</estado>
            <operacionUId>142</operacionUId>
            <tasaVigente>10.000000</tasaVigente>
            <plazo>1096</plazo>
            <saldoCapital>-174180.15</saldoCapital>
            <tipoTasa>Lineal Anual</tipoTasa>
            <producto>
               <papel/>
               <moneda/>
               <productoUId>0</productoUId>
               <nombre>Amort. - Capital F./Empr.- T/F</nombre>
            </producto>
            <idOperacionFmt>326-0</idOperacionFmt>
            <fechaValor>2018-05-18</fechaValor>
            <fechaVencimiento>2021-05-18</fechaVencimiento>
            <cantidadCuotasImpagas>36</cantidadCuotasImpagas>
         </sdtPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>766</Numero>
            <Servicio>BTPrestamos.ObtenerDetalleReducido</Servicio>
            <Estado>OK</Estado>
            <Requerimiento/>
            <Fecha>2017-12-12</Fecha>
            <Hora>10:55:30</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleReducidoResponse>
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
    "sdtPrestamo": {
        "sucursal": "Sucursal Beta",
        "idOperacionBT": "0010000100115000000000000000002700000000000326001",
        "cantidadCuotas": "37",
        "capitalOriginal": "180000.00",
        "estado": "Normal",
        "operacionUId": "142",
        "tasaVigente": "10.000000",
        "plazo": "1096",
        "saldoCapital": "-174180.15",
        "tipoTasa": "Lineal Anual",
        "producto": {
            "papel": "",
            "moneda": "",
            "productoUId": "0",
            "nombre": "Amort. - Capital F./Empr.- T/F"
        },
        "fechaValor": "2018-05-18",
        "fechaVencimiento": "2021-05-18",
        "cantidadCuotasImpagas": "36",
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "767",
        "Servicio": "BTPrestamos.ObtenerDetalleReducido",
        "Estado": "OK",
        "Requerimiento": "",
        "Fecha": "2017-12-12",
        "Hora": "11:15:09",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                                |
| ------------ | ---- | ------------------------------------------ |
| operacionUId | Long | Identificador único de operación simulada. |

### Datos de salida

| Nombre      | Tipo        | Comentarios        |
| ----------- | ----------- | ------------------ |
| sdtPrestamo | sBTPrestamo | Datos del préstamo |

Los campos del tipo de dato estructurado sBTPrestamo son los siguientes:

| Campo                 | Tipo        | Comentarios                                   |
| --------------------- | ----------- | --------------------------------------------- |
| operacionUId          | Long        | Identificador único de la operación simulada. |
| sucursal              | String      | Sucursal del préstamo.                        |
| idOperacionBT         | String      | Identificador texto de operación.             |
| idOperacionFmt        | String      | Identificador de la operación en BT.          |
| cantidadCuotas        | Int         | Cantidad de cuotas del préstamo.              |
| estado                | String      | Esta del préstamo.                            |
| capitalOriginal       | Double      | Capital original del préstamo.                |
| simboloMoneda         | String      | Símbolo monetario.                            |
| tasaVigente           | Double      | Tasa vigente.                                 |
| plazo                 | Int         | Plazo del préstamo.                           |
| tipoTasa              | String      | Tipo de tasa.                                 |
| saldoCapital          | Double      | Saldo de capital.                             |
| fechaValor            | Date        | Fecha de alta del préstamo.                   |
| fechaVencimiento      | Date        | Fecha de vencimiento del préstamo.            |
| cantidadCuotasImpagas | Int         | Cantidad de cuotas impagas.                   |
| producto              | sBTProducto | Producto.                                     |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el identificador. |

<!-- Obtener Detalle Simulación -->

## <sup style="color: red;" font-weight: bold;>Nuevo</sup> Obtener Detalle Simulacion

Método que detalle simulación de prestamo.

| Nombre publicación                   | Programa | Global/País |
| ------------------------------------ | -------- | ----------- |
| BTPrestamos.ObtenerDetalleSimulacion | RBTPG456 | Global      |

> Ejemplo de invocación al método Obtener Facultades:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDetalleSimulacion>
         <bts:Btinreq>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>AV</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>DC534B7EE96C31983417C526</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>18544</bts:operacionUId>
         <bts:clienteUId>342</bts:clienteUId>
      </bts:BTPrestamos.ObtenerDetalleSimulacion>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
          "Requerimiento": 1,
          "Usuario": "MINSTALADOR",
          "Device": "AV",
          "Canal": "BTDIGITAL",
          "Token": "DC534B7EE96C31983417C526"
        },
        "operacionUId": 18544,
        "clienteUId": 342
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
      <BTPrestamos.ObtenerDetalleSimulacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Token>DC534B7EE96C31983417C526</Token>
            <Canal>BTDIGITAL</Canal>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
         </Btinreq>
         <sdtDetalleSimulacion>
            <cft>28.21</cft>
            <tasa>23.00</tasa>
            <plazo>360</plazo>
            <impuestos>25.30</impuestos>
            <tasaEfectiva>0.00</tasaEfectiva>
            <fechaVencimiento>2021-01-02</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <intereses>115.01</intereses>
            <fechaPrimerPago>2020-02-02</fechaPrimerPago>
            <comisiones>650.84</comisiones>
            <valorCuota>263.74</valorCuota>
            <otrosConceptos>
               <SdtsBTConcepto>
                  <texto/>
                  <valor>10.00</valor>
                  <concepto>COMIS_DESEMB</concepto>
               </SdtsBTConcepto>
            </otrosConceptos>
            <cronograma>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>90.52</otrosConceptos>
                  <capital>75.76</capital>
                  <impuestos>5.609999999999999</impuestos>
                  <intereses>17.16</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>301.90</cuota>
                  <fechaPago>2020-02-02</fechaPago>
                  <seguros>112.85000000000001</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>84.28999999999999</otrosConceptos>
                  <capital>77.06</capital>
                  <impuestos>5.32</impuestos>
                  <intereses>15.86</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>295.35</cuota>
                  <fechaPago>2020-03-02</fechaPago>
                  <seguros>112.82000000000001</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>77.96</otrosConceptos>
                  <capital>78.38</capital>
                  <impuestos>5.03</impuestos>
                  <intereses>14.54</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>288.69</cuota>
                  <fechaPago>2020-04-02</fechaPago>
                  <seguros>112.78</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>71.52</otrosConceptos>
                  <capital>79.73</capital>
                  <impuestos>4.73</impuestos>
                  <intereses>13.19</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>281.92</cuota>
                  <fechaPago>2020-05-02</fechaPago>
                  <seguros>112.75</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>64.97</otrosConceptos>
                  <capital>81.10</capital>
                  <impuestos>4.43</impuestos>
                  <intereses>11.82</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>275.03</cuota>
                  <fechaPago>2020-06-02</fechaPago>
                  <seguros>112.71000000000001</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>58.30</otrosConceptos>
                  <capital>82.49000000000001</capital>
                  <impuestos>4.12</impuestos>
                  <intereses>10.43</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>268.01</cuota>
                  <fechaPago>2020-07-02</fechaPago>
                  <seguros>112.67</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>51.519999999999996</otrosConceptos>
                  <capital>83.90</capital>
                  <impuestos>3.81</impuestos>
                  <intereses>9.02</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>260.89</cuota>
                  <fechaPago>2020-08-02</fechaPago>
                  <seguros>112.64</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>44.62</otrosConceptos>
                  <capital>85.34</capital>
                  <impuestos>3.50</impuestos>
                  <intereses>7.58</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>253.64</cuota>
                  <fechaPago>2020-09-02</fechaPago>
                  <seguros>112.60000000000001</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>37.61</otrosConceptos>
                  <capital>86.81</capital>
                  <impuestos>3.17</impuestos>
                  <intereses>6.11</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>246.26</cuota>
                  <fechaPago>2020-10-02</fechaPago>
                  <seguros>112.56</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>30.47</otrosConceptos>
                  <capital>88.30</capital>
                  <impuestos>2.85</impuestos>
                  <intereses>4.62</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>238.76</cuota>
                  <fechaPago>2020-11-02</fechaPago>
                  <seguros>112.52000000000001</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>23.22</otrosConceptos>
                  <capital>89.81</capital>
                  <impuestos>2.5100000000000002</impuestos>
                  <intereses>3.11</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>231.13</cuota>
                  <fechaPago>2020-12-02</fechaPago>
                  <seguros>112.48</seguros>
               </SdtsBTCuotaSimulacion>
               <SdtsBTCuotaSimulacion>
                  <otrosConceptos>15.84</otrosConceptos>
                  <capital>91.32000000000001</capital>
                  <impuestos>2.18</impuestos>
                  <intereses>1.57</intereses>
                  <concepto>Capital/Interés</concepto>
                  <tipoCuota>M</tipoCuota>
                  <cuota>223.35</cuota>
                  <fechaPago>2021-01-02</fechaPago>
                  <seguros>112.44000000000001</seguros>
               </SdtsBTCuotaSimulacion>
            </cronograma>
            <totalPrestamo>3164.93</totalPrestamo>
            <capital>1000.00</capital>
            <operacionUId>18544</operacionUId>
            <tasaEfectivaAnual>23.00</tasaEfectivaAnual>
            <seguros>1351.82</seguros>
            <tasaNominalAnual>20.878535</tasaNominalAnual>
            <montoDesembolso>3154.93</montoDesembolso>
            <fechaValor>2020-01-02</fechaValor>
         </sdtDetalleSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Estado>OK</Estado>
            <Canal>BTDIGITAL</Canal>
            <Fecha>2022-11-25</Fecha>
            <Servicio>BTPrestamos.ObtenerDetalleSimulacion</Servicio>
            <Hora>08:48:45</Hora>
            <Numero>225610</Numero>
            <Requerimiento>1</Requerimiento>
         </Btoutreq>
      </BTPrestamos.ObtenerDetalleSimulacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
'{
	"Btinreq": {
          "Token": "DC534B7EE96C31983417C526",
          "Canal": "BTDIGITAL",
          "Device": "AV",
          "Usuario": "MINSTALADOR",
          "Requerimiento": 1
        },
        "sdtDetalleSimulacion": {
          "cft": 28.21,
          "tasa": 23,
          "plazo": 360,
          "impuestos": 25.3,
          "tasaEfectiva": 0,
          "fechaVencimiento": "2021-01-02",
          "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": 0,
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
          },
          "intereses": 115.01,
          "fechaPrimerPago": "2020-02-02",
          "comisiones": 650.84,
          "valorCuota": 263.74,
          "otrosConceptos": {
            "SdtsBTConcepto": {
              "texto": "",
              "valor": 10,
              "concepto": "COMIS_DESEMB"
            }
          },
          "cronograma": {
            "SdtsBTCuotaSimulacion": [
              {
                "otrosConceptos": 90.52,
                "capital": 75.76,
                "impuestos": 5.609999999999999,
                "intereses": 17.16,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 301.9,
                "fechaPago": "2020-02-02",
                "seguros": 112.85000000000001
              },
              {
                "otrosConceptos": 84.28999999999999,
                "capital": 77.06,
                "impuestos": 5.32,
                "intereses": 15.86,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 295.35,
                "fechaPago": "2020-03-02",
                "seguros": 112.82000000000001
              },
              {
                "otrosConceptos": 77.96,
                "capital": 78.38,
                "impuestos": 5.03,
                "intereses": 14.54,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 288.69,
                "fechaPago": "2020-04-02",
                "seguros": 112.78
              },
              {
                "otrosConceptos": 71.52,
                "capital": 79.73,
                "impuestos": 4.73,
                "intereses": 13.19,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 281.92,
                "fechaPago": "2020-05-02",
                "seguros": 112.75
              },
              {
                "otrosConceptos": 64.97,
                "capital": 81.1,
                "impuestos": 4.43,
                "intereses": 11.82,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 275.03,
                "fechaPago": "2020-06-02",
                "seguros": 112.71000000000001
              },
              {
                "otrosConceptos": 58.3,
                "capital": 82.49000000000001,
                "impuestos": 4.12,
                "intereses": 10.43,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 268.01,
                "fechaPago": "2020-07-02",
                "seguros": 112.67
              },
              {
                "otrosConceptos": 51.519999999999996,
                "capital": 83.9,
                "impuestos": 3.81,
                "intereses": 9.02,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 260.89,
                "fechaPago": "2020-08-02",
                "seguros": 112.64
              },
              {
                "otrosConceptos": 44.62,
                "capital": 85.34,
                "impuestos": 3.5,
                "intereses": 7.58,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 253.64,
                "fechaPago": "2020-09-02",
                "seguros": 112.60000000000001
              },
              {
                "otrosConceptos": 37.61,
                "capital": 86.81,
                "impuestos": 3.17,
                "intereses": 6.11,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 246.26,
                "fechaPago": "2020-10-02",
                "seguros": 112.56
              },
              {
                "otrosConceptos": 30.47,
                "capital": 88.3,
                "impuestos": 2.85,
                "intereses": 4.62,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 238.76,
                "fechaPago": "2020-11-02",
                "seguros": 112.52000000000001
              },
              {
                "otrosConceptos": 23.22,
                "capital": 89.81,
                "impuestos": 2.5100000000000002,
                "intereses": 3.11,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 231.13,
                "fechaPago": "2020-12-02",
                "seguros": 112.48
              },
              {
                "otrosConceptos": 15.84,
                "capital": 91.32000000000001,
                "impuestos": 2.18,
                "intereses": 1.57,
                "concepto": "Capital/Interés",
                "tipoCuota": "M",
                "cuota": 223.35,
                "fechaPago": "2021-01-02",
                "seguros": 112.44000000000001
              }
            ]
          },
          "totalPrestamo": 3164.93,
          "capital": 1000,
          "operacionUId": 18544,
          "tasaEfectivaAnual": 23,
          "seguros": 1351.82,
          "tasaNominalAnual": 20.878535,
          "montoDesembolso": 3154.93,
          "fechaValor": "2020-01-02"
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Estado": "OK",
          "Canal": "BTDIGITAL",
          "Fecha": "2022-11-25",
          "Servicio": "BTPrestamos.ObtenerDetalleSimulacion",
          "Hora": "08:48:45",
          "Numero": 225610,
          "Requerimiento": 1
        }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                      |
| ------------ | ---- | -------------------------------- |
| operacionUId | Long | Identificador único de operaión. |
| clienteUId   | Long | Identificador único de cliente.  |

### Datos de salida

| Nombre               | Tipo                 | Comentarios                       |
| -------------------- | -------------------- | --------------------------------- |
| sdtDetalleSimulacion | sBTDetalleSimulacion | Coleccion de datos de facultades. |

Los campos del tipo de dato estructurado sBTDetalleSimulacion son los siguientes:

| Campo             | Tipo               | Comentarios                      |
| ----------------- | ------------------ | -------------------------------- |
| operacionUId      | Long               | Identificador único de operaión. |
| producto          | sBTProducto        | Datos del Producto.              |
| capital           | Double             | Capital.                         |
| valorCuota        | Double             | Valor de cuota.                  |
| intereses         | Double             | Intereses.                       |
| tasa              | Double             | Tasa.                            |
| tasaEfectiva      | Double             | Tasa efectiva.                   |
| tasaEfectivaAnual | Double             | Tasa efectiva anual.             |
| tasaNominalAnual  | Double             | Tasa nominal anual.              |
| totalPrestamo     | Double             | Total del prestamo.              |
| montoDesembolso   | Double             | Monto de desembolso.             |
| fechaValor        | Date               | Fecha de valor.                  |
| fechaVencimiento  | Date               | Fecha de vencimiento.            |
| fechaPrimerPago   | Date               | Fecha de primer pago.            |
| plazo             | Int                | Plazo.                           |
| otrosConceptos    | sBTConceptos       | Datos conceptos.                 |
| cronograma        | sBTCuotaSimulacion | Cronograma.                      |
| impuestos         | Double             | Impuestos.                       |
| seguros           | Double             | Seguros.                         |
| comisiones        | Double             | Comisiones.                      |
| cft               | Double             | CFT.                             |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre del producto.             |
| moneda      | String | Símbolo de la moneda.            |
| papel       | String | Símbolo del papel.               |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes:

| Campo          | Tipo   | Comentarios                                |
| -------------- | ------ | ------------------------------------------ |
| fechaPago      | Date   | Fecha de pago.                             |
| tipoCuota      | String | Tipo de la cuota (Capital/Interés).        |
| concepto       | String | Concepto.                                  |
| capital        | Double | Monto de capital en la cuota.              |
| interes        | Double | Monto de intereses en la cuota.            |
| seguros        | Double | Monto de seguros en la cuota.              |
| impuestos      | Double | Monto de impuestos en la cuota.            |
| otrosConceptos | Double | Importe correspondiente a otros conceptos. |
| cuota          | Double | Importe total de la cuota.                 |

### Errores

| Código | Descripción                                                                |
| ------ | -------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador único de operación.                         |
| 30002  | No se recibió el identificador de cliente.                                 |
| 30003  | No se recuperó la cuenta para el Identificador: [Número de identificador]. |

<!-- Obtener Deuda -->

## Obtener Deuda

Método para obtener la deuda de un préstamo a una determinada fecha

| Nombre publicación       | Programa | Global/País |
| ------------------------ | -------- | ----------- |
| BTPrestamos.ObtenerDeuda | RBTPG081 | Global      |

> Ejemplo de invocación al método Obtener Deuda:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDeuda>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:OperacionUId>142</bts:OperacionUId>
         <bts:FechaCalculo></bts:FechaCalculo>
      </bts:BTPrestamos.ObtenerDeuda>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDeuda=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 7f7508f7-ea98-f808-db74-b5d31b90b392' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "OperacionUId": 142
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
      <BTPrestamos.ObtenerDeudaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <Deuda>23433.85</Deuda>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>916</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerDeuda</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>17:05:07</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerDeudaResponse>
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
    "Deuda": "23433.85",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "918",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDeuda",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:05:42",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                                |
| ------------ | ---- | ------------------------------------------ |
| operacionUId | Long | Identificador único de operación simulada. |
| fechaCalculo | Date | Fecha a la que se calcula la deuda.        |

### Datos de salida

| Nombre | Tipo   | Comentarios       |
| ------ | ------ | ----------------- |
| deuda  | Double | Deuda a la fecha. |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el identificador. |

<!-- Obtener Deuda Préstamo Castigado -->

## Obtener Deuda Prestamo Castigado

Método para obtener la deuda de un préstamo castigado

| Nombre publicación                        | Programa | Global/País |
| ----------------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerDeudaPrestamoCastigado | RBTPG080 | Global      |

> Ejemplo de invocación al método Obtener Deuda Prestamo Castigado:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDeudaPrestamoCastigado>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>908433382F955E77534D3E02</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>10164</bts:operacionUId>
      </bts:BTPrestamos.ObtenerDeudaPrestamoCastigado>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDeudaPrestamoCastigado=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \
  -d '{
	"Btinreq": {
		"Device": "AC",
		"Usuario": "BANTOTAL",
		"Requerimiento": "1",
		"Canal": "BTDIGITAL",
		"Token": "908433382F955E77534D3E02"
	},
    "operacionUId": 10164
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
      <BTPrestamos.ObtenerDeudaPrestamoCastigadoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>908433382F955E77534D3E02</Token>
            <Device>AC</Device>
         </Btinreq>
         <sdtPrestamoCastigado>
            <interes>0.00</interes>
            <interesSuspenso>0.00</interesSuspenso>
            <mora>0.00</mora>
            <moraSuspenso>0.00</moraSuspenso>
            <seguros>0.00</seguros>
            <saldoCapital>10456.01</saldoCapital>
         </sdtPrestamoCastigado>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDeudaPrestamoCastigado</Servicio>
            <Fecha>2020-04-13</Fecha>
            <Hora>17:33:24</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>7295</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDeudaPrestamoCastigadoResponse>
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
    "sdtPrestamoCastigado": {
        "interes": 0.00, 
        "interesSuspenso": 0.00, 
        "mora": 0.00, 
        "moraSuspenso": 0.00, 
        "seguros": 0.00, 
        "saldoCapital": 10456.01, 
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "951",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDeudaPrestamoCastigado",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "18:34:34",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                                |
| ------------ | ---- | ------------------------------------------ |
| operacionUId | Long | Identificador único de operación simulada. |

### Datos de salida

| Nombre               | Tipo                 | Comentarios         |
| -------------------- | -------------------- | ------------------- |
| sdtPrestamoCastigado | sBTPrestamoCastigado | Datos del préstamo. |

Los campos del tipo de dato estructurado sBTPrestamoCastigado son los siguientes:

| Campo           | Tipo   | Comentarios                 |
| --------------- | ------ | --------------------------- |
| interes         | Double | Interés generado.           |
| interesSuspenso | Double | Interés suspenso.           |
| mora            | Double | Mora generada.              |
| moraSuspenso    | Double | Mora suspenso.              |
| seguros         | Double | Seguros.                    |
| saldoCapital    | Double | Saldo capital del préstamo. |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el identificador. |

<!-- Obtener Deuda Vencida -->

## Obtener Deuda Vencida

Método para obtener la deuda vencida de un préstamo a una determinada fecha

| Nombre publicación              | Programa | Global/País |
| ------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerDeudaVencida | RBTPG404 | Global      |

> Ejemplo de invocación al método Obtener Deuda Vencida:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerDeudaVencida>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>2062732190F955E77534D3E0</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>12</bts:operacionUId>
         <bts:fechaDeCalculo>2020-11-11</bts:fechaDeCalculo>
      </bts:BTPrestamos.ObtenerDeudaVencida>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDeudaVencida=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 7f7508f7-ea98-f808-db74-b5d31b90b392' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 142,
	"fechaDeCalculo": "2020-11-11"
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
      <BTPrestamos.ObtenerDeudaVencidaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>BANTOTAL</Usuario>
            <Token>2062732190F955E77534D3E0</Token>
            <Device>AC</Device>
         </Btinreq>
         <deuda>262752.52</deuda>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerDeudaVencida</Servicio>
            <Fecha>2019-11-19</Fecha>
            <Hora>16:56:39</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>6989</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerDeudaVencidaResponse>
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
    "deuda": "23433.85",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "918",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerDeudaVencida",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "17:05:42",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre         | Tipo | Comentarios                                |
| -------------- | ---- | ------------------------------------------ |
| operacionUId   | Long | Identificador único de operación simulada. |
| fechaDeCalculo | Date | Fecha a la que se calcula la deuda.        |

### Datos de salida

| Nombre | Tipo   | Comentarios       |
| ------ | ------ | ----------------- |
| deuda  | Double | Deuda a la fecha. |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el identificador. |

<!-- Obtener Fecha de Incumplimiento -->

## Obtener Fecha de Incumplimiento

Método para obtener fecha de incumplimiento de un préstamo.

| Nombre publicación                       | Programa | Global/País |
| ---------------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerFechaDeIncumplimiento | RBTPG135 | Global      |

> Ejemplo de invocación al método Obtener Fecha de Incumplimiento:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerFechaDeIncumplimiento>
		<bts:Btinreq>            
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b3c6f2d0e34A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
      </bts:BTPrestamos.ObtenerFechaDeIncumplimiento>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerFechaDeIncumplimiento' \
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
		"operacionUId": 121
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
      <BTPrestamos.ObtenerFechaDeIncumplimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b3c6f2d0e34A8B5C60A82434</Token>
         </Btinreq>
         <fecha_incumplimiento>2018-02-08</fecha_incumplimiento>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>138</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerFechaDeIncumplimiento</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-07</Fecha>
            <Hora>12:10:44</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerFechaDeIncumplimientoResponse>
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
    "fecha_incumplimiento": "2018-02-08",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "141",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerFechaDeIncumplimiento",
        "Requerimiento": "1",
        "Fecha": "2018-05-07",
        "Hora": "12:18:58",
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

### Datos de salida

| Nombre               | Tipo | Comentarios              |
| -------------------- | ---- | ------------------------ |
| fecha_incumplimiento | Date | Fecha de incumplimiento. |

### Errores

| Código | Descripción                                                                   |
| ------ | ----------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador único de operación de préstamo.                |
| 30002  | No se recuperó la operación para el Identificador: [Número de Identificador]. |

<!-- Obtener Fechas de Pago -->

## Obtener Fechas de Pago

Método para obtener fechas de pago de un préstamo.

| Nombre publicación            | Programa | Global/País |
| ----------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerFechasPago | RBTPG137 | Global      |

> Ejemplo de invocación al método Obtener Fechas de Pago:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerFechasPago>
		<bts:Btinreq>            
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b3c6f2d0e34A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
      </bts:BTPrestamos.ObtenerFechasPago>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerFechasPago' \
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
		"operacionUId": 121
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
      <BTPrestamos.ObtenerFechasPagoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b3c6f2d0e34A8B5C60A82434</Token>
         </Btinreq>
         <fecha_incumplimiento>2018-02-08</fecha_incumplimiento>
         <fecha_ultimo_pago>2018-04-09</fecha_ultimo_pago>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>144</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerFechasPago</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-07</Fecha>
            <Hora>12:45:32</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerFechasPagoResponse>
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
    "fecha_incumplimiento": "2018-02-08",
    "fecha_ultimo_pago": "2018-04-09",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "145",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerFechasPago",
        "Requerimiento": "1",
        "Fecha": "2018-05-07",
        "Hora": "12:50:44",
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

### Datos de salida

| Nombre               | Tipo | Comentarios                     |
| -------------------- | ---- | ------------------------------- |
| fecha_incumplimiento | Date | Fecha de primer incumplimiento. |
| fecha_ultimo_pago    | Date | Fecha de ultimo pago.           |

### Errores

| Código | Descripción                                                                   |
| ------ | ----------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador único de operación de préstamo.                |
| 30002  | No se recuperó la operación para el Identificador: [Número de Identificador]. |

<!-- Obtener Fecha de Ultimo Pago -->

## Obtener Fecha de Ultimo Pago

Método para obtener fechas de ultimo pago de un préstamo.

| Nombre publicación                 | Programa | Global/País |
| ---------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerFechaUltimoPago | RBTPG136 | Global      |

> Ejemplo de invocación al método Obtener Fecha de Ultimo Pago:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerFechaUltimoPago>
		<bts:Btinreq>            
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>b3c6f2d0e34A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>121</bts:operacionUId>
      </bts:BTPrestamos.ObtenerFechaUltimoPago>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerFechaUltimoPago' \
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
		"operacionUId": 121
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
      <BTPrestamos.ObtenerFechaUltimoPagoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>b3c6f2d0e34A8B5C60A82434</Token>
         </Btinreq>
         <fecha_ultimo_pago>2018-04-09</fecha_ultimo_pago>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>146</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerFechaUltimoPago</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2018-05-07</Fecha>
            <Hora>13:07:41</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerFechaUltimoPagoResponse>
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
    "fecha_ultimo_pago": "2018-04-09",
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "147",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerFechaUltimoPago",
        "Requerimiento": "1",
        "Fecha": "2018-05-07",
        "Hora": "13:08:19",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                                    |
| ------------ | ---- | ---------------------------------------------- |
| operacionUId | Long | Identificador único de operación del préstamo. |

### Datos de salida

| Nombre            | Tipo | Comentarios           |
| ----------------- | ---- | --------------------- |
| fecha_ultimo_pago | Date | Fecha de ultimo pago. |

### Errores

| Código | Descripción                                                                   |
| ------ | ----------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador único de operación de préstamo.                |
| 30002  | No se recuperó la operación para el identificador: [Número de Identificador]. |

<!-- Obtener Información Adicional -->

## <sup style="color: red;" font-weight: bold;>Nuevo</sup> Obtener Información Adicional

Método para obtener información adicional de un préstamo.

| Nombre publicación                      | Programa | Global/País |
| --------------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerInformacionAdicional | RBTPG468 | Global      |

> Ejemplo de invocación al servicio de Obtener Información Adicional:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerInformacionAdicional>
         <bts:Btinreq>
            <bts:Device>1</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>D6F899CBE6D99B71A5E627F1</bts:Token>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:operacionUId>61</bts:operacionUId>
      </bts:BTPrestamos.ObtenerInformacionAdicional>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerInformacionAdicional' \
	-H 'cache-control: no-cache' \
	-H 'content-type: application/json' \
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
	-d '{
	"Btinreq": {
	  "Device": "1",
	  "Usuario": "MINSTALADOR",
	  "Token": "16c1cFC33CD93505A5382434",
	  "Canal": "BTDIGITAL",
	  "Requerimiento": "1"
	},
	"operacionUId": "101",
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
      <BTPrestamos.ObtenerInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>1</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>976EB9CBE6D99B71A5E627F1</Token>
         </Btinreq>
         <sdtInformacionAdicional>
            <sBTDatoLista>
		   <clave>Impuesto s/Intereses en Cuota</clave>
               <valor>S</valor>
            </sBTDatoLista>
            <sBTDatoLista>
		   <clave>Renovar a 30 dias</clave>
               <valor>N</valor>
            </sBTDatoLista>
         </sdtInformacionAdicional>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11261</Numero>
            <Servicio>BTPrestamos.ObtenerInformacionAdicional</Servicio>
            <Estado>OK</Estado>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-16</Fecha>
            <Hora>15:48:08</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerInformacionAdicionalResponse>
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
      "Token": "27c9bFC33CD93505A5382434",
      "Canal": "BTDIGITAL",
      "Requerimiento": "1"
   },
   "sdtInformacionAdicional": {
      "sBTDatoLista": [
      {
         "clave": "Impuesto s/Intereses en Cuota",
         "valor": "S"
      },
      {
          "clave": "Renovar a 30 dias",
          "valor": "N"
      }
      ]
   },
   "Btoutreq": {
      "Numero": "111399",
      "Estado": "OK",
      "Servicio": "BTPrestamos.ObtenerInformacionAdicional",
      "Requerimiento": "1",
      "Fecha": "2023-05-16",
      "Canal": "BTDIGITAL",
      "Hora": "16:01:52"
   }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                       |
| ------------ | ---- | --------------------------------- |
| operacionUId | Long | Identificador único de operación. |

### Datos de salida

| Nombre                  | Tipo         | Comentarios                     |
| ----------------------- | ------------ | ------------------------------- |
| sdtInformacionAdicional | sBTDatoLista | Informacion Adicional de datos. |

Los campos del tipo de dato estructurado sBTDatoLista son los siguientes:

| Campo | Tipo   | Comentarios                             |
| ----- | ------ | --------------------------------------- |
| clave | String | Identificador de información adicional. |
| valor | String | Valor de información adicional.         |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | Debe ingresar identificador de operación.       |
| 30013  | No existe registro para el identificador único. |

<!-- Obtener Monto de Cancelación -->

## Obtener Monto de Cancelación

Dada una operación, devuelve el monto de cancelación de la misma.

| Nombre publicación                  | Programa | Global/País |
| ----------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerMontoCancelacion | RBTPG224 | Global      |

> Ejemplo de invocación al método Obtener Monto de Cancelación:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerMontoCancelacion>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Token>191631443CD285A89A23FBEE</bts:Token>
            <bts:Device>AC</bts:Device>
         </bts:Btinreq>
         <bts:operacionUId>37675</bts:operacionUId>
         <bts:fecha>2019-07-26</bts:fecha>
      </bts:BTPrestamos.ObtenerMontoCancelacion>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerFechaUltimoPago' \
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
      "bts:fecha": "2019-07-26"
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
      <BTPrestamos.ObtenerMontoCancelacionResponse>
         <Btinreq>
            <Canal>BTDIGITAL</Canal>
            <Requerimiento>1</Requerimiento>
            <Usuario>INSTALADOR</Usuario>
            <Token>191631443CD285A89A23FBEE</Token>
            <Device>AC</Device>
         </Btinreq>
         <montoCancelacion>16824.71</montoCancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Canal>BTDIGITAL</Canal>
            <Servicio>BTPrestamos.ObtenerMontoCancelacion</Servicio>
            <Fecha>2019-07-26</Fecha>
            <Hora>11:57:25</Hora>
            <Requerimiento>1</Requerimiento>
            <Numero>120424</Numero>
            <Estado>OK</Estado>
         </Btoutreq>
      </BTPrestamos.ObtenerMontoCancelacionResponse>
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
    "montoCancelacion": 16824.71,
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": 55,
        "Servicio": "BTPrestamos.ObtenerMontoCancelacion",
        "Estado": "NEG_ERROR",
        "Fecha": "2019-10-25",
        "Requerimiento": "1",
        "Hora": "13:39:43",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                    |
| ------------ | ---- | ------------------------------ |
| operacionUId | Long | Identificador de la operación. |
| fecha        | Date | Fecha a consultar.             |

### Datos de salida

| Nombre           | Tipo   | Comentarios                           |
| ---------------- | ------ | ------------------------------------- |
| montoCancelacion | Double | Monto de cancelación de la operación. |

### Errores

| Código | Descripción                                                                   |
| ------ | ----------------------------------------------------------------------------- |
| 30001  | No se recibió el Identificador de la operación.                               |
| 30002  | No se recuperó la operación para el Identificador: [Número de Identificador]. |

<!-- Obtener Pagos de un Préstamo -->

## Obtener Pagos de un Préstamo

Método para obtener el detalle de pagos de una cuota de préstamos.

| Nombre publicación       | Programa | Global/País |
| ------------------------ | -------- | ----------- |
| BTPrestamos.ObtenerPagos | RBTPG096 | Global      |

> Ejemplo de invocación al método Obtener Pagos de un Préstamo:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerPagos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>361</bts:operacionUId>
         <bts:fechaHasta>2020-03-05</bts:fechaHasta>
		 <bts:fechaDesde>2019-03-05</bts:fechaDesde>
      </bts:BTPrestamos.ObtenerPagos>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPagos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 663f7ea1-30e7-309b-9c23-7792294641cc' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 361,
	 "fechaHasta": "2020-03-05",
	 "fechaDesde": "2019-03-05"
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
      <BTPrestamos.ObtenerPagosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtPagos>
            <sBTPagoPrestamo>
               <hora/>
               <fecha>2018-05-15</fecha>
               <operacionUIdCobro>0</operacionUIdCobro>
               <importe>25000.00</importe>
               <movimientoUId>0</movimientoUId>
            </sBTPagoPrestamo>
			<sBTPagoPrestamo>
               <hora/>
               <fecha>2018-06-15</fecha>
               <operacionUIdCobro>0</operacionUIdCobro>
               <importe>22199.00</importe>
               <movimientoUId>0</movimientoUId>
            </sBTPagoPrestamo>
			<sBTPagoPrestamo>
               <hora/>
               <fecha>2018-07-15</fecha>
               <operacionUIdCobro>0</operacionUIdCobro>
               <importe>34520.00</importe>
               <movimientoUId>0</movimientoUId>
            </sBTPagoPrestamo>
			<sBTPagoPrestamo>
               <hora/>
               <fecha>2018-08-15</fecha>
               <operacionUIdCobro>0</operacionUIdCobro>
               <importe>45680.00</importe>
               <movimientoUId>0</movimientoUId>
            </sBTPagoPrestamo>
         </sdtPagos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>905</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerPagos</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>13:05:51</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerPagosResponse>
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
    "sdtPagos": {
          "sBTPagoPrestamo": [
            {
              "fecha": "2018-05-15",
              "operacionUIdCobro": "0",
              "importe": "25000.00",
              "movimientoUId": "0"
            },
            {
              "fecha": "2018-06-15",
              "operacionUIdCobro": "0",
              "importe": "22199.00",
              "movimientoUId": "0"
            },
            {
              "fecha": "2018-07-15",
              "operacionUIdCobro": "0",
              "importe": "34520.00",
              "movimientoUId": "0"
            },
            {
              "fecha": "2018-08-15",
              "operacionUIdCobro": "0",
              "importe": "45680.00",
              "movimientoUId": "0"
            }
          ]
	},
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "906",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerPagos",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "13:56:38",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                                    |
| ------------ | ---- | ---------------------------------------------- |
| operacionUId | Long | Identificador único de operación del préstamo. |
| fechaHasta   | Date | Fecha hasta la cual buscar pagos.              |
| fechaDesde   | Date | Fecha desde la cual buscar pagos.              |

### Datos de salida

| Nombre   | Tipo            | Comentarios                      |
| -------- | --------------- | -------------------------------- |
| sdtPagos | sBTPagoPrestamo | Colección de pagos del préstamo. |

Los campos del tipo de dato estructurado sBTPagoPrestamo son los siguientes:

| Campo             | Tipo   | Comentarios                                   |
| ----------------- | ------ | --------------------------------------------- |
| fecha             | Date   | Fecha de pago.                                |
| importe           | Double | Importe pagado.                               |
| operacionUIdCobro | Long   | Identificador único de la operación de cobro. |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el Identificador. |

<!-- Obtener Pagos de Cuota -->

## Obtener Pagos de Cuota

Método para obtener el detalle de pagos de una cuota de préstamos

| Nombre publicación            | Programa | Global/País |
| ----------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerPagosCuota | RBTPG095 | Global      |

> Ejemplo de invocación al método Obtener Pagos de Cuota:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerPagosCuota>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:operacionUId>361</bts:operacionUId>
         <bts:numeroCuota>1</bts:numeroCuota>
      </bts:BTPrestamos.ObtenerPagosCuota>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPagosCuota=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 663f7ea1-30e7-309b-9c23-7792294641cc' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "operacionUId": 361,
    "numeroCuota": 1
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
      <BTPrestamos.ObtenerPagosCuotaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>75e20bd1614A8B5C60A82434</Token>
         </Btinreq>
         <sdtPagoDeCuota>
            <fechaUltimoPago>2018-11-05</fechaUltimoPago>
            <detalle>
               <sBTDetallePagoCuota>
                  <fechaPago>2018-11-05</fechaPago>
                  <capital>0.00</capital>
                  <intereses>1287.08</intereses>
                  <comisiones>0.00</comisiones>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <detalleConceptos></detalleConceptos>
                  <total>1287.08</total>
               </sBTDetallePagoCuota>
            </detalle>
            <importePago>1287.08</importePago>
         </sdtPagoDeCuota>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>905</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerPagosCuota</Servicio>
            <Fecha>2017-12-21</Fecha>
            <Requerimiento/>
            <Hora>13:05:51</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerPagosCuotaResponse>
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
    "sdtPagoDeCuota": {
        "fechaUltimoPago": "2018-11-05",
        "detalle": {
            "sBTDetallePagoCuota": [
                {
                    "otrosConceptos": "0.00",
                    "capital": "0.00",
                    "impuestos": "0.00",
                    "intereses": "1287.08",
                    "total": "1287.08",
                    "fechaPago": "2018-11-05",
                    "detalleConceptos": {
                        "sBTConcepto": []
                    },
                    "seguros": "0.00",
                    "comisiones": "0.00"
                }
            ]
        },
        "importePago": "1287.08"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "906",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerPagosCuota",
        "Fecha": "2017-12-21",
        "Requerimiento": "",
        "Hora": "13:56:38",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre       | Tipo | Comentarios                                    |
| ------------ | ---- | ---------------------------------------------- |
| operacionUId | Long | Identificador único de operación del préstamo. |
| numeroCuota  | Int  | Número de cuota.                               |

### Datos de salida

| Nombre         | Tipo           | Comentarios                                  |
| -------------- | -------------- | -------------------------------------------- |
| sdtPagoDeCuota | sBTPagoDeCuota | Identificador único de movimiento [Asiento]. |

Los campos del tipo de dato estructurado sBTPagoDeCuota son los siguientes:

| Campo           | Tipo                | Comentarios                       |
| --------------- | ------------------- | --------------------------------- |
| fechaUltimoPago | Date                | Fecha de último pago de la cuota. |
| importePago     | Double              | Importe pagado.                   |
| detalle         | sBTDetallePagoCuota | Listado de pagos de una cuota.    |

Los campos del tipo de dato estructurado sBTDetallePagoCuota son los siguientes:

| Campo            | Tipo        | Comentarios                           |
| ---------------- | ----------- | ------------------------------------- |
| fechaPago        | Date        | Fecha de pago prevista.               |
| capital          | Double      | Capital de la cuota.                  |
| intereses        | Double      | Intereses de la cuota.                |
| comisiones       | Double      | Comisiones de la cuota.               |
| seguros          | Double      | Seguros de la cuota.                  |
| impuestos        | Double      | Impuestos de la cuota.                |
| otrosConceptos   | Double      | Importe otros conceptos.              |
| detalleConceptos | sBTConcepto | Detalle de los conceptos adicionales. |
| total            | Double      | total de la cuota.                    |

### Errores

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 30001  | No se recibió el identificador de operación.       |
| 30002  | No se recuperó la operación para el Identificador. |

<!-- Obtener Prestamos a Vencer (Disponible únicamente para V3R1) -->

## Obtener Prestamos a Vencer (Disponible únicamente para V4)

Método para obtener los préstamos que estan por vencer dentro de determinados días.

| Nombre publicación                  | Programa | Global/País |
| ----------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerPrestamosAVencer | RBTPG472 | Global      |

> Ejemplo de invocación al método Obtener Prestamos Por Rango Mora:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerPrestamosAVencer>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>ad33e17b1199865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:diasVtoCuota>2</bts:diasVtoCuota>
      </bts:BTPrestamos.ObtenerPrestamosAVencer>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosAVencer=' \
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
  "diasVtoCuota": 2
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
        <BTPrestamos.ObtenerPrestamosAVencerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ad33e17b1199865B3A2E76CF</Token>
         </Btinreq>
         <sdtDatosPrestamos>
            <sBTDatosPrestamo>
               <plazo>124</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>0.00</deudaTotalVencida>
               <periodicidad>15</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2023-05-31</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>S/</moneda>
                  <productoUId>1</productoUId>
                  <nombre>PRÉSTAMO-Financiero 9</nombre>
               </producto>
               <clienteUId>407</clienteUId>
               <fechaProximoVencimiento>2023-03-31</fechaProximoVencimiento>
               <tasaVigente>83.230000</tasaVigente>
               <fechaPrimerCuotaImpaga>2023-03-31</fechaPrimerCuotaImpaga>
               <valorCuota>106.10</valorCuota>
               <saldoCapital>458.21</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>0</cantidadCuotasVencidas>
               <capitalOriginal>800.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>530.57</deudaCancelacionTotal>
               <diasMora>0</diasMora>
               <operacionUId>10752</operacionUId>
               <cantidadCuotasImpagas>5</cantidadCuotasImpagas>
               <deudaTotalAFecha>106.10</deudaTotalAFecha>
               <cuotasPagasConRetraso>3</cuotasPagasConRetraso>
               <fechaUltimoPago>2023-03-29</fechaUltimoPago>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>40.000000</tasaMoraVigente>
               <sucursal>MIRAFLORES</sucursal>
               <fechaValor>2023-01-27</fechaValor>
               <cantidadCuotas>9</cantidadCuotas>
            </sBTDatosPrestamo>
         </sdtDatosPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>227484</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerPrestamosAVencer</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-05-09</Fecha>
            <Hora>12:58:32</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerPrestamosAVencerResponse>
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
    "sdtDatosPrestamos": {
    "sBTDatosPrestamo": {
      "plazo": 124,
      "eventosPosteriores": "N",
      "deudaTotalVencida": 0,
      "periodicidad": 15,
      "simboloMoneda": "$",
      "fechaVencimiento": "2023-05-31",
      "producto": {
        "papel": "$",
        "moneda": "S/",
        "productoUId": 1,
        "nombre": "PRÉSTAMO-Financiero 9"
      },
      "clienteUId": 407,
      "fechaProximoVencimiento": "2023-03-31",
      "tasaVigente": 83.23,
      "fechaPrimerCuotaImpaga": "2023-03-31",
      "valorCuota": 106.1,
      "saldoCapital": 458.21,
      "otrosConceptos": "",
      "cantidadCuotasVencidas": 0,
      "capitalOriginal": 800,
      "tir": 0,
      "deudaCancelacionTotal": 530.57,
      "diasMora": 0,
      "operacionUId": 10752,
      "cantidadCuotasImpagas": 5,
      "deudaTotalAFecha": 106.1,
      "cuotasPagasConRetraso": 3,
      "fechaUltimoPago": "2023-03-29",
      "tipoAmortizacion": "Francés con Seg.e Impu.",
      "datosAdicionales": "",
      "estado": "Normal",
      "tasaMoraVigente": 40,
      "sucursal": "MIRAFLORES",
      "fechaValor": "2023-01-27",
      "cantidadCuotas": 9
    }
  },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerPrestamosAVencer",
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

| Nombre       | Tipo   | Comentarios                                                            |
| ------------ | ------ | ---------------------------------------------------------------------- |
| diasVtoCuota | Int    | Días que faltan para el vencimiento de los prestamos.                  |
| upd912       | String | Habilita la actualización en la tabla SNG912 [Hidden: Valor fijo 'S']. |

### Datos de salida

| Nombre            | Tipo             | Comentarios                                                         |
| ----------------- | ---------------- | ------------------------------------------------------------------- |
| sdtDatosPrestamos | sBTDatosPrestamo | Listado de los prestamos que estan por vencer en determinados días. |

Los campos del tipo de dato estructurado sBTDatosPrestamo son los siguientes:

| Campo                   | Tipo             | Comentarios                               |
| ----------------------- | ---------------- | ----------------------------------------- |
| plazo                   | Int              | Plazo.                                    |
| eventosPosteriores      | String           | Hay eventos posteriores (S/N).            |
| deudaTotalVencida       | Double           | Monto de la deuda vencida a la fecha.     |
| periodicidad            | Int              | Período entre cuotas.                     |
| simboloMoneda           | Sting            | Símbolo monetario.                        |
| fechaVencimiento        | Date             | Fecha de vencimiento del préstamo.        |
| clienteUId              | Int              | Identificador único del cliente.          |
| producto                | sBTProducto      | Descripción del producto.                 |
| fechaProximoVencimiento | Date             | Fecha de vencimiento de la próxima cuota. |
| tasaVigente             | Double           | Tasa vigente.                             |
| fechaPrimerCuotaImpaga  | Date             | Fecha de la primera cuota impaga.         |
| valorCuota              | Double           | Valor de la cuota.                        |
| saldoCapital            | Double           | Saldo de capital.                         |
| otrosConceptos          | sBTConceptos     | Otros conceptos del prestamo.             |
| cantidadCuotasVencidas  | Int              | Cantidad de cuotas vencidas.              |
| capitalOriginal         | Double           | Capital original del préstamo.            |
| tir                     | Double           | Tir.                                      |
| deudaCancelacionTotal   | Double           | Monto de cancelación total.               |
| diasMora                | Int              | Días de mora del préstamo.                |
| operacionUId            | Long             | Identificador único de la operación.      |
| cantidadCuotasImpagas   | Int              | Cantidad de cuotas impagas.               |
| cuotasPagasConRetraso   | Int              | Cantidad de cuotas pagas con retraso.     |
| deudaTotalAFecha        | Double           | Monto a pagar para estar al día.          |
| fechaUltimoPago         | Date             | Fecha de último pago de cuota.            |
| tipoAmortizacion        | String           | Tipo de amortización.                     |
| datosAdicionales        | sbTDatoAdicional | Listado de datos adicionales.             |
| estado                  | String           | Estado.                                   |
| tasaMoraVigente         | Double           | Tasa de mora vigente.                     |
| sucursal                | String           | Sucursal del préstamo.                    |
| fechaValor              | Date             | Fecha de alta del préstamo.               |
| cantidadCuotas          | Int              | Cantidad de cuotas del préstamo.          |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre del producto.             |
| moneda      | String | Símbolo de la moneda.            |
| papel       | String | Símbolo del papel.               |

Los campos del tipo de dato estructurado sBTConceptos son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:

| Campo   | Tipo   | Comentarios                |
| ------- | ------ | -------------------------- |
| detalle | String | Detalle de dato adicional. |

### Errores

| Código | Descripción                                   |
| ------ | --------------------------------------------- |
| 30003  | No existe registro para el producto indicado. |

<!-- Obtener ObtenerPrestamosPorRangoMora -->

## <sup style="color: red;" font-weight: bold;>Nuevo</sup> Obtener Prestamos Por Rango Mora (Disponible únicamente para V4)

Método para obtener los préstamos que esten dentro del rango de mora ingresado.

| Nombre publicación                       | Programa | Global/País |
| ---------------------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerPrestamosPorRangoMora | RBTPG471 | Global      |

> Ejemplo de invocación al método Obtener Prestamos Por Rango Mora:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerPrestamosPorRangoMora>
         <bts:Btinreq>
            <bts:Requerimiento>0</bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GZ</bts:Device>
            <bts:Usuario>Instalador</bts:Usuario>
            <bts:Token>d51ae0498699865B3A2E76CF</bts:Token>
         </bts:Btinreq>
         <bts:diasMoraDesde>23</bts:diasMoraDesde>
         <bts:diasMoraHasta>100</bts:diasMoraHasta>
      </bts:BTPrestamos.ObtenerPrestamosPorRangoMora>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosPorRangoMora=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \
  -d '{
	"Btinreq": {
    "Requerimiento": 0,
    "Canal": "BTDIGITAL",
    "Device": "GZ",
    "Usuario": "Instalador",
    "Token": "d51ae0498699865B3A2E76CF"
  },
  "diasMoraDesde": 23,
  "diasMoraHasta": 100
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
        <BTPrestamos.ObtenerPrestamosPorRangoMoraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GZ</Device>
            <Usuario>Instalador</Usuario>
            <Requerimiento>0</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>ad33e17b1199865B3A2E76CF</Token>
         </Btinreq>
         <sdtDatosPrestamos>
            <sBTDatosPrestamo>
               <plazo>113</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>521.12</deudaTotalVencida>
               <periodicidad>15</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2023-02-15</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>S/</moneda>
                  <productoUId>1</productoUId>
                  <nombre>PRÉSTAMO-Financiero 9</nombre>
               </producto>
               <clienteUId>253</clienteUId>
               <fechaProximoVencimiento>2023-01-31</fechaProximoVencimiento>
               <tasaVigente>83.230000</tasaVigente>
               <fechaPrimerCuotaImpaga>2022-10-25</fechaPrimerCuotaImpaga>
               <valorCuota>75.77</valorCuota>
               <saldoCapital>500.00</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>6</cantidadCuotasVencidas>
               <capitalOriginal>500.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>672.70</deudaCancelacionTotal>
               <diasMora>95</diasMora>
               <operacionUId>5819</operacionUId>
               <cantidadCuotasImpagas>8</cantidadCuotasImpagas>
               <deudaTotalAFecha>596.89</deudaTotalAFecha>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>40.000000</tasaMoraVigente>
               <sucursal>MIRAFLORES</sucursal>
               <fechaValor>2022-10-25</fechaValor>
               <cantidadCuotas>8</cantidadCuotas>
            </sBTDatosPrestamo>
            <sBTDatosPrestamo>
               <plazo>112</plazo>
               <eventosPosteriores>N</eventosPosteriores>
               <deudaTotalVencida>770.80</deudaTotalVencida>
               <periodicidad>15</periodicidad>
               <simboloMoneda>$</simboloMoneda>
               <fechaVencimiento>2023-02-15</fechaVencimiento>
               <producto>
                  <papel>$</papel>
                  <moneda>S/</moneda>
                  <productoUId>1</productoUId>
                  <nombre>PRÉSTAMO-Financiero 9</nombre>
               </producto>
               <clienteUId>310</clienteUId>
               <fechaProximoVencimiento>2023-01-31</fechaProximoVencimiento>
               <tasaVigente>83.230000</tasaVigente>
               <fechaPrimerCuotaImpaga>2022-10-26</fechaPrimerCuotaImpaga>
               <valorCuota>117.50</valorCuota>
               <saldoCapital>800.00</saldoCapital>
               <otrosConceptos></otrosConceptos>
               <cantidadCuotasVencidas>6</cantidadCuotasVencidas>
               <capitalOriginal>800.00</capitalOriginal>
               <tir>0.000000</tir>
               <deudaCancelacionTotal>1006.52</deudaCancelacionTotal>
               <diasMora>94</diasMora>
               <operacionUId>9197</operacionUId>
               <cantidadCuotasImpagas>8</cantidadCuotasImpagas>
               <deudaTotalAFecha>888.30</deudaTotalAFecha>
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso>
               <fechaUltimoPago/>
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion>
               <datosAdicionales></datosAdicionales>
               <estado>Normal</estado>
               <tasaMoraVigente>40.000000</tasaMoraVigente>
               <sucursal>MIRAFLORES</sucursal>
               <fechaValor>2022-10-26</fechaValor>
               <cantidadCuotas>8</cantidadCuotas>
            </sBTDatosPrestamo>
         </sdtDatosPrestamos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>227484</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerPrestamosPorRangoMora</Servicio>
            <Requerimiento>0</Requerimiento>
            <Fecha>2023-05-09</Fecha>
            <Hora>12:58:32</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerPrestamosPorRangoMoraResponse>
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
    "sdtDatosPrestamos": {
    "sBTDatosPrestamo": [
      {
        "plazo": 113,
        "eventosPosteriores": "N",
        "deudaTotalVencida": 521.12,
        "periodicidad": 15,
        "simboloMoneda": "$",
        "fechaVencimiento": "2023-02-15",
        "producto": {
          "papel": "$",
          "moneda": "S/",
          "productoUId": 1,
          "nombre": "PRÉSTAMO-Financiero 9"
        },
        "clienteUId": 253,
        "fechaProximoVencimiento": "2023-01-31",
        "tasaVigente": 83.23,
        "fechaPrimerCuotaImpaga": "2022-10-25",
        "valorCuota": 75.77,
        "saldoCapital": 500,
        "otrosConceptos": "",
        "cantidadCuotasVencidas": 6,
        "capitalOriginal": 500,
        "tir": 0,
        "deudaCancelacionTotal": 672.7,
        "diasMora": 95,
        "operacionUId": 5819,
        "cantidadCuotasImpagas": 8,
        "deudaTotalAFecha": 596.89,
        "cuotasPagasConRetraso": 0,
        "fechaUltimoPago": "",
        "tipoAmortizacion": "Francés con Seg.e Impu.",
        "datosAdicionales": "",
        "estado": "Normal",
        "tasaMoraVigente": 40,
        "sucursal": "MIRAFLORES",
        "fechaValor": "2022-10-25",
        "cantidadCuotas": 8
      },
      {
        "plazo": 112,
        "eventosPosteriores": "N",
        "deudaTotalVencida": 770.8,
        "periodicidad": 15,
        "simboloMoneda": "$",
        "fechaVencimiento": "2023-02-15",
        "producto": {
          "papel": "$",
          "moneda": "S/",
          "productoUId": 1,
          "nombre": "PRÉSTAMO-Financiero 9"
        },
        "clienteUId": 310,
        "fechaProximoVencimiento": "2023-01-31",
        "tasaVigente": 83.23,
        "fechaPrimerCuotaImpaga": "2022-10-26",
        "valorCuota": 117.5,
        "saldoCapital": 800,
        "otrosConceptos": "",
        "cantidadCuotasVencidas": 6,
        "capitalOriginal": 800,
        "tir": 0,
        "deudaCancelacionTotal": 1006.52,
        "diasMora": 94,
        "operacionUId": 9197,
        "cantidadCuotasImpagas": 8,
        "deudaTotalAFecha": 888.3,
        "cuotasPagasConRetraso": 0,
        "fechaUltimoPago": "",
        "tipoAmortizacion": "Francés con Seg.e Impu.",
        "datosAdicionales": "",
        "estado": "Normal",
        "tasaMoraVigente": 40,
        "sucursal": "MIRAFLORES",
        "fechaValor": "2022-10-26",
        "cantidadCuotas": 8
      }
    ]
  },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "901",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerPrestamosPorRangoMora",
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

| Nombre        | Tipo   | Comentarios                                                            |
| ------------- | ------ | ---------------------------------------------------------------------- |
| diasMoraDesde | Int    | Días de mora desde.                                                    |
| diasMoraHasta | Int    | Días de mora hasta.                                                    |
| upd912        | String | Habilita la actualización en la tabla SNG912 [Hidden: Valor fijo 'S']. |

### Datos de salida

| Nombre            | Tipo             | Comentarios                                                          |
| ----------------- | ---------------- | -------------------------------------------------------------------- |
| sdtDatosPrestamos | sBTDatosPrestamo | Listado de los prestamos que estan dentro del rango de dias de mora. |

Los campos del tipo de dato estructurado sBTDatosPrestamo son los siguientes:

| Campo                   | Tipo             | Comentarios                               |
| ----------------------- | ---------------- | ----------------------------------------- |
| plazo                   | Int              | Plazo.                                    |
| eventosPosteriores      | String           | Hay eventos posteriores (S/N).            |
| deudaTotalVencida       | Double           | Monto de la deuda vencida a la fecha.     |
| periodicidad            | Int              | Período entre cuotas.                     |
| simboloMoneda           | Sting            | Símbolo monetario.                        |
| fechaVencimiento        | Date             | Fecha de vencimiento del préstamo.        |
| clienteUId              | Int              | Identificador único del cliente.          |
| producto                | sBTProducto      | Descripción del producto.                 |
| fechaProximoVencimiento | Date             | Fecha de vencimiento de la próxima cuota. |
| tasaVigente             | Double           | Tasa vigente.                             |
| fechaPrimerCuotaImpaga  | Date             | Fecha de la primera cuota impaga.         |
| valorCuota              | Double           | Valor de la cuota.                        |
| saldoCapital            | Double           | Saldo de capital.                         |
| otrosConceptos          | sBTConceptos     | Otros conceptos del prestamo.             |
| cantidadCuotasVencidas  | Int              | Cantidad de cuotas vencidas.              |
| capitalOriginal         | Double           | Capital original del préstamo.            |
| tir                     | Double           | Tir.                                      |
| deudaCancelacionTotal   | Double           | Monto de cancelación total.               |
| diasMora                | Int              | Días de mora del préstamo.                |
| operacionUId            | Long             | Identificador único de la operación.      |
| cantidadCuotasImpagas   | Int              | Cantidad de cuotas impagas.               |
| cuotasPagasConRetraso   | Int              | Cantidad de cuotas pagas con retraso.     |
| deudaTotalAFecha        | Double           | Monto a pagar para estar al día.          |
| fechaUltimoPago         | Date             | Fecha de último pago de cuota.            |
| tipoAmortizacion        | String           | Tipo de amortización.                     |
| datosAdicionales        | sbTDatoAdicional | Listado de datos adicionales.             |
| estado                  | String           | Estado.                                   |
| tasaMoraVigente         | Double           | Tasa de mora vigente.                     |
| sucursal                | String           | Sucursal del préstamo.                    |
| fechaValor              | Date             | Fecha de alta del préstamo.               |
| cantidadCuotas          | Int              | Cantidad de cuotas del préstamo.          |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre del producto.             |
| moneda      | String | Símbolo de la moneda.            |
| papel       | String | Símbolo del papel.               |

Los campos del tipo de dato estructurado sBTConceptos son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:

| Campo   | Tipo   | Comentarios                |
| ------- | ------ | -------------------------- |
| detalle | String | Detalle de dato adicional. |

### Errores

| Código | Descripción                                       |
| ------ | ------------------------------------------------- |
| 30001  | DiasMoraHasta no puede ser menor a DiasMoraDesde. |
| 30003  | No existe registro para el producto indicado.     |
