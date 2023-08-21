# metodos de simulacion

## Simular

Método para simular el alta de un préstamo amortizable en Bantotal

| Nombre publicación  | Programa | Global/País |
| ------------------- | -------- | ----------- |
| BTPrestamos.Simular | RBTPG075 | Global      |

> Ejemplo de invocación al método Simular:


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.Simular>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>f097d678404A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtPrestamo>
            <bts:fechaPrimerPago>2018-12-10</bts:fechaPrimerPago>
            <bts:monto>10000</bts:monto>
            <bts:tasa>0</bts:tasa>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:catidadCuotas>
            <bts:productoUId>61</bts:productoUId>
            <bts:pizarra>0</bts:pizarra>
            <bts:clienteUId>4</bts:clienteUId>
            <bts:actividad>11200</bts:actividad>
         </bts:sdtPrestamo>
      </bts:BTPrestamos.Simular>
   </soapenv:Body>
</soapenv:Envelope>
```

```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Simular=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtPrestamo": {
        "clienteUId": 4,
        "productoUId": 61,
        "fechaPrimerPago": "2018-12-10",
        "monto": 1000,
        "cantidadCuotas": 12,
        "periodoCuotas": 30,
		"pizarra": 0,
		"tasa": 0,
		"actividad": 11200
    }
}'
```


> El POST retornará la siguiente estructura:


```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>f097d678404A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2018-11-05</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>289.66</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>14349.64</totalPrestamo>
            <valorCuota>1195.80</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>241</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2018-12-10</fechaPrimerPago>
            <fechaVencimiento>2019-11-10</fechaVencimiento>
            <producto>
               <papel/>
               <moneda>$</moneda>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>726</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.Simular</Servicio>
            <Fecha>2017-11-24</Fecha>
            <Requerimiento/>
            <Hora>15:39:37</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

```json
'{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
	},
    "sdtSimulacion": {
        "otrosConceptos": {
            "sBTConcepto": []
        },
        "fechaValor": "2018-11-05",
        "capital": "1000.00",
        "tasaEfectiva": "0.000000",
        "intereses": "28.97",
        "tasaNominalAnual": "23.000000",
        "totalPrestamo": "2515.00",
        "valorCuota": "209.58",
        "tasaEfectivaAnual": "25.590075",
        "operacionUId": "261",
        "tasa": "23.000000",
        "fechaPrimerPago": "2018-12-10",
        "fechaVencimiento": "2019-11-10",
        "producto": {
            "papel": "",
            "moneda": "$",
            "productoUId": "0",
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "727",
        "Estado": "OK",
        "Servicio": "BTPrestamos.Simular",
        "Fecha": "2017-11-24",
        "Requerimiento": "",
        "Hora": "15:59:42",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>


> Ejemplo de invocación al método Simular Libre Amortización Sin Cliente:

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularLibreAmortizacionSinCliente>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token>
            <bts:Device>AV</bts:Device>         
         </bts:Btinreq>
         <bts:sdtDatosLibreAmortizacion>
            <bts:actividad>11200</bts:actividad>
            <bts:pizarra>0</bts:pizarra>
            <bts:tasa>0</bts:tasa>
            <bts:productoUId>75</bts:productoUId>
            <bts:monto>10000</bts:monto>
            <bts:cantidadCuotas>0</bts:cantidadCuotas>
            <bts:periodoCuotas>30</bts:periodoCuotas>
			   <bts:cuotasCapital>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-01-10</bts:fechaPago>
					   <bts:importe>2000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-02-10</bts:fechaPago>
					   <bts:importe>2000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-03-10</bts:fechaPago>
					   <bts:importe>1000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-04-10</bts:fechaPago>
					   <bts:importe>2000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-05-10</bts:fechaPago>
					   <bts:importe>2000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
				   <bts:sBTCuotaPrestamoAlta>
					   <bts:fechaPago>2019-06-10</bts:fechaPago>
					   <bts:importe>1000</bts:importe>
				   </bts:sBTCuotaPrestamoAlta>
			   </bts:cuotasCapital>
         </bts:sdtDatosLibreAmortizacion>
      </bts:BTPrestamos.SimularLibreAmortizacionSinCliente>
   </soapenv:Body>
</soapenv:Envelope>
```

```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularLibreAmortizacionSinCliente' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
        "Btinreq": {
          "Device": "AV",
          "Usuario": "MINSTALADOR",
          "Canal": "BTDIGITAL",
          "Token": "658fcb0b034A8B5C60A82434"
        },
		"sdtDatosLibreAmortizacion": {
			"actividad": "11200",
			"pizarra": "0",
			"tasa": "0",
			"productoUId": "75",
			"monto": "10000",
			"cantidadCuotas": "0",
			"periodoCuotas": "30",
			"cuotasCapital": {
			  "sBTCuotaPrestamoAlta": [
			  	  {
			  	  	"fechaPago": "2019-01-10",
			  	  	"importe": "2000"
			  	  },
			  	  {
			  	  	"fechaPago": "2019-02-10",
			  	  	"importe": "2000"
			  	  },
			  	  {
			  	  	"fechaPago": "2019-03-10",
			  	  	"importe": "1000"
			  	  },
			  	  {
			  	  	"fechaPago": "2019-04-10",
			  	  	"importe": "2000"
			  	  },
			  	  {
			  	  	"fechaPago": "2019-05-10",
			  	  	"importe": "2000"
			  	  },
			  	  {
			  	  	"fechaPago": "2019-06-10",
			  	  	"importe": "1000"
			  	  }
			  	]
			  }
	  }
}'
```
