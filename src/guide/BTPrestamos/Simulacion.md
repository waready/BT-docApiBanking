# Simulación

## Obtener Productos

Método para devolver una lista de los productos de préstamos.

| Nombre publicación           | Programa | Global/País |
| ---------------------------- | -------- | ----------- |
| BTPrestamos.ObtenerProductos | RBTPG078 | Global      |

> Ejemplo de invocación al método Obtener Productos:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.ObtenerProductos>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>7f582501004A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTPrestamos.ObtenerProductos>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerProductos=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 20394f02-93fd-01a3-c079-81b84239bc48' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "fa2c02c95a4A8B5C60A82434"
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
      <BTPrestamos.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>7f582501004A8B5C60A82434</Token>
         </Btinreq>
         <sdtProductos>
            <sBTProducto>
               <productoUId>61</productoUId>
               <nombre>Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>62</productoUId>
               <nombre>Amortización Automática TF_UI</nombre>
               <moneda>$</moneda>
               <papel>UI</papel>
            </sBTProducto>
            <sBTProducto>
               <productoUId>63</productoUId>
               <nombre>Amortización Automática TF_USD</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>64</productoUId>
               <nombre>Amortización Automática TV</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>65</productoUId>
               <nombre>Amortización Automática TV_USD</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>66</productoUId>
               <nombre>Amor.Libre Empresa Int.Ad</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>67</productoUId>
               <nombre>Amort. Libre UI_Empresa</nombre>
               <moneda>$</moneda>
               <papel>UI</papel>
            </sBTProducto>
            <sBTProducto>
               <productoUId>68</productoUId>
               <nombre>Am.Automatica Empresa TF</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>69</productoUId>
               <nombre>Am.Automatica Empresa UI</nombre>
               <moneda>$</moneda>
               <papel>UI</papel>
            </sBTProducto>
            <sBTProducto>
               <productoUId>70</productoUId>
               <nombre>Am.Automatica Empresa USD</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>71</productoUId>
               <nombre>Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>72</productoUId>
               <nombre>Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>73</productoUId>
               <nombre>Amortización Automática TF</nombre>
               <moneda>$</moneda>
               <papel>UI</papel>
            </sBTProducto>
            <sBTProducto>
               <productoUId>74</productoUId>
               <nombre>Amortización Automática TF</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>75</productoUId>
               <nombre>Amortización Libre TF</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>76</productoUId>
               <nombre>Amortización Libre TF UI</nombre>
               <moneda>$</moneda>
               <papel>UI</papel>
            </sBTProducto>
            <sBTProducto>
               <productoUId>77</productoUId>
               <nombre>Pmos. Automotores</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>78</productoUId>
               <nombre>Amortización Micro</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>79</productoUId>
               <nombre>Plazo Fijo</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>80</productoUId>
               <nombre>Plazo Fijo Reajustable</nombre>
               <moneda>$</moneda>
               <papel>UI</papel>
            </sBTProducto>
            <sBTProducto>
               <productoUId>81</productoUId>
               <nombre>Plazo Fijo USD</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>82</productoUId>
               <nombre>Amortización Automática TF UI</nombre>
               <moneda>$</moneda>
               <papel>UI</papel>
            </sBTProducto>
            <sBTProducto>
               <productoUId>83</productoUId>
               <nombre>Amortización Automática TF USD</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>84</productoUId>
               <nombre>Amort. - S/valor residual.-T/F</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>85</productoUId>
               <nombre>Amort. - Capital F./Empr.- T/V</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>86</productoUId>
               <nombre>Irregular o Amort. Libre $</nombre>
               <moneda>$</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>87</productoUId>
               <nombre>Irregular o Amort. Libre</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
            <sBTProducto>
               <productoUId>88</productoUId>
               <nombre>Plazo Fijo</nombre>
               <moneda>USD</moneda>
               <papel/>
            </sBTProducto>
         </sdtProductos>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>723</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.ObtenerProductos</Servicio>
            <Fecha>2017-11-24</Fecha>
            <Requerimiento/>
            <Hora>13:09:53</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.ObtenerProductosResponse>
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
    "sdtProductos": {
        "sBTProducto": [
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "61",
                "nombre": "Amortización Automática TF"
            },
            {
                "papel": "UI",
                "moneda": "$",
                "productoUId": "62",
                "nombre": "Amortización Automática TF_UI"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "63",
                "nombre": "Amortización Automática TF_USD"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "64",
                "nombre": "Amortización Automática TV"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "65",
                "nombre": "Amortización Automática TV_USD"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "66",
                "nombre": "Amor.Libre Empresa Int.Ad"
            },
            {
                "papel": "UI",
                "moneda": "$",
                "productoUId": "67",
                "nombre": "Amort. Libre UI_Empresa"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "68",
                "nombre": "Am.Automatica Empresa TF"
            },
            {
                "papel": "UI",
                "moneda": "$",
                "productoUId": "69",
                "nombre": "Am.Automatica Empresa UI"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "70",
                "nombre": "Am.Automatica Empresa USD"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "71",
                "nombre": "Amortización Automática TF"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "72",
                "nombre": "Amortización Automática TF"
            },
            {
                "papel": "UI",
                "moneda": "$",
                "productoUId": "73",
                "nombre": "Amortización Automática TF"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "74",
                "nombre": "Amortización Automática TF"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "75",
                "nombre": "Amortización Libre TF"
            },
            {
                "papel": "UI",
                "moneda": "$",
                "productoUId": "76",
                "nombre": "Amortización Libre TF UI"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "77",
                "nombre": "Pmos. Automotores"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "78",
                "nombre": "Amortización Micro"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "79",
                "nombre": "Plazo Fijo"
            },
            {
                "papel": "UI",
                "moneda": "$",
                "productoUId": "80",
                "nombre": "Plazo Fijo Reajustable"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "81",
                "nombre": "Plazo Fijo USD"
            },
            {
                "papel": "UI",
                "moneda": "$",
                "productoUId": "82",
                "nombre": "Amortización Automática TF UI"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "83",
                "nombre": "Amortización Automática TF USD"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "84",
                "nombre": "Amort. - S/valor residual.-T/F"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "85",
                "nombre": "Amort. - Capital F./Empr.- T/V"
            },
            {
                "papel": "",
                "moneda": "$",
                "productoUId": "86",
                "nombre": "Irregular o Amort. Libre $"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "87",
                "nombre": "Irregular o Amort. Libre"
            },
            {
                "papel": "",
                "moneda": "USD",
                "productoUId": "88",
                "nombre": "Plazo Fijo"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "724",
        "Estado": "OK",
        "Servicio": "BTPrestamos.ObtenerProductos",
        "Fecha": "2017-11-24",
        "Requerimiento": "",
        "Hora": "13:13:45",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>
### Datos de entrada

No aplica.

### Datos de salida

| Nombre       | Tipo        | Comentarios           |
| ------------ | ----------- | --------------------- |
| sdtProductos | sBTProducto | Listado de productos. |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

### Errores

No aplica.

## Simular

Método para simular el alta de un préstamo amortizable.

| Nombre publicación  | Programa | Global/País |
| ------------------- | -------- | ----------- |
| BTPrestamos.Simular | RBTPG075 | Global      |

> Ejemplo de invocación al método Simular:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.Simular>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token>
            <bts:Device>AV</bts:Device>         
         </bts:Btinreq>
         <bts:sdtPrestamo>
            <bts:fechaPrimerPago>2019-01-12</bts:fechaPrimerPago>
            <bts:monto>10000</bts:monto>
            <bts:tasa>0</bts:tasa>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:productoUId>61</bts:productoUId>
            <bts:pizarra>0</bts:pizarra>
            <bts:clienteUId>4</bts:clienteUId>
            <bts:actividad>11200</bts:actividad>
         </bts:sdtPrestamo>
      </bts:BTPrestamos.Simular>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Simular=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
	"Btinreq": {
      "Canal": "BTDIGITAL",
      "Requerimiento": "1",
      "Usuario": "MINSTALADOR",
      "Token": "72e34bcd9d4A8B5C60A82434",
      "Device": "AV"
    },
    "sdtPrestamo": {
      "fechaPrimerPago": "2019-01-12",
      "monto": "10000",
      "tasa": "0",
      "periodoCuotas": "30",
      "cantidadCuotas": "12",
      "productoUId": "61",
      "pizarra": "0",
      "clienteUId": "4",
      "actividad": "11200"
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
      <BTPrestamos.SimularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>72e34bcd9d4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-01-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-02-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-03-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-04-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-05-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-06-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-07-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-08-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-09-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-10-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-11-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.04</importe>
                  <fechaPago>2019-12-12</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <fechaValor>2018-12-11</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>1288.18</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>14328.15</totalPrestamo>
            <valorCuota>1194.01</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>1</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2019-01-12</fechaPrimerPago>
            <fechaVencimiento>2019-12-12</fechaVencimiento>
            <plazo>361</plazo>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>61</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>623</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.Simular</Servicio>
            <Fecha>2019-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:23:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularResponse>
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
	  "Requerimiento": "1",
	  "Canal": "BTDIGITAL",
	  "Token": "72e34bcd9d4A8B5C60A82434"
	},
	"sdtSimulacion": {
	  "otrosConceptos": {
	  },
	  "cronograma": {
		"sBTCuotaPrestamoAlta": [
		  {
			"importe": "1194.01",
			"fechaPago": "2019-01-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-02-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-03-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-04-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-05-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-06-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-07-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-08-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-09-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-10-12"
		  },
		  {
			"importe": "1194.01",
			"fechaPago": "2019-11-12"
		  },
		  {
			"importe": "1194.04",
			"fechaPago": "2019-12-12"
		  }
		]
	  },
	  "fechaValor": "2018-12-11",
	  "capital": "10000.00",
	  "tasaEfectiva": "0.000000",
	  "intereses": "1288.18",
	  "tasaNominalAnual": "23.000000",
	  "totalPrestamo": "14328.15",
	  "valorCuota": "1194.01",
	  "tasaEfectivaAnual": "25.590075",
	  "operacionUId": "1",
	  "tasa": "23.000000",
	  "fechaPrimerPago": "2019-01-12",
	  "fechaVencimiento": "2019-12-12",
	  "plazo": "361",
	  "producto": {
		"papel": "$",
		"moneda": "$",
		"productoUId": "61",
		"nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
	  }
	},
	"Erroresnegocio": {
	},
	"Btoutreq": {
	  "Numero": "623",
	  "Estado": "OK",
	  "Servicio": "BTPrestamos.Simular",
	  "Fecha": "2019-11-20",
	  "Requerimiento": "1",
	  "Hora": "09:23:04",
	  "Canal": "BTDIGITAL"
	}
}'
```
</code-block>
</code-group>

### Configuración Backend

1. Si la opción general de procesos 3281 se encuentra activada, el servicio considera la sucursal del usuario de conexión, en caso contrario, simula con la sucursal de la cuenta cliente.

### Datos de entrada

| Nombre      | Tipo            | Comentarios             |
| ----------- | --------------- | ----------------------- |
| sdtPrestamo | sBTPrestamoAlta | Datos de la simulación. |

Los campos del tipo de dato estructurado sBTPrestamoAlta son los siguientes:

| Campo            | Tipo   | Comentarios                                                            |
| ---------------- | ------ | ---------------------------------------------------------------------- |
| clienteUId\*     | Long   | Identificador único de cliente.                                        |
| productoUId\*    | Long   | Identificador único de producto.                                       |
| fechaPrimerPago  | Date   | Fecha de primer pago.                                                  |
| cantidadCuotas\* | Int    | Cantidad de cuotas.                                                    |
| periodoCuotas    | Int    | Periodo entre las cuotas.                                              |
| monto\*          | Double | Capital solicitado.                                                    |
| pizarra          | Short  | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. |
| tasa             | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.      |
| actividad\*\*    | Long   | Código de actividad (Destino del crédito).                             |

### Datos de salida

| Nombre        | Tipo                  | Comentarios                 |
| ------------- | --------------------- | --------------------------- |
| sdtSimulacion | sBTSimulacionPrestamo | Datos del préstamo simulado |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo del préstamo.               |
| otrosConceptos    | sBTConcepto          | Otros conceptos.                  |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

### Errores

| Código | Descripción                                                              |
| ------ | ------------------------------------------------------------------------ |
| 30001  | No se recibió el identificador de cliente.                               |
| 30002  | No se recibió el identificador de producto.                              |
| 30003  | No se recuperó la cuenta para el Identificador.                          |
| 30004  | El Identificador único de Producto es incorrecto.                        |
| 30005  | No se resolvió el identificador único de la operación.                   |
| 40001  | La Cuenta indicada es incorrecta.                                        |
| 40012  | La Fecha de Primer Pago indicada es menor a la Fecha Valor.              |
| 40013  | La Fecha de Vencimiento indicada es menor a la Fecha Valor.              |
| 40014  | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimien.       |
| 40015  | El Plazo Total indicado es incorrecto.                                   |
| 40016  | La Cantidad de Cuotas indicada es menor al mínimo permitido.             |
| 40017  | La Cantidad de Cuotas indicada es mayor al máximo permitido.             |
| 40018  | La Cantidad de Cuotas indicada es incorrecta.                            |
| 40019  | La Cantidad de Cuotas indicada no está preseteada.                       |
| 40020  | El período entre Cuotas indicado es menor al mínimo permitido.           |
| 40021  | El período entre Cuotas indicado es mayor al máximo permitido            |
| 40022  | El período entre Cuotas indicado es incorrecto.                          |
| 40023  | El período entre Cuotas indicado no está preseteado.                     |
| 40024  | El Valor Cuota indicado es incorrecto.                                   |
| 40025  | El Capital indicado es menor al mínimo permitido.                        |
| 40026  | El Capital indicado es mayor al máximo permitido.                        |
| 40027  | El Capital indicado es incorrecto.                                       |
| 40037  | La Clase de Tasa indicada es incorrecta.                                 |
| 40040  | La Tasa Fija indicada está fuera de tolerancia.                          |
| 40041  | La Tasa indicada es mayor a la Tasa de Usura.                            |
| 40048  | El período indicado es incorrecto.                                       |
| 40049  | El Tipo de Tasa indicado es incorrecto.                                  |
| 40054  | La Tasa indicada es incorrecta.                                          |
| 40071  | El Plazo Total de la Operación es mayor al máximo permitido.             |
| 40072  | El Plazo Total de la Operación es menor al mínimo permitido.             |
| 40076  | El Producto indicado no está Preseteado.                                 |
| 40147  | No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago. |
| 40148  | El Capital indicado debe ser mayor al Valor Cuota.                       |
| 40149  | No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago. |

## Simular Amortizable Sin Cliente

Método para simular el alta de un préstamo amortizable sin cliente.

| Nombre publicación                       | Programa | Global/País |
| ---------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularAmortizableSinCliente | RBTPG265 | Global      |

> Ejemplo de invocación al método Simular Amortizable Sin Cliente:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularAmortizableSinCliente>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token>
            <bts:Device>AV</bts:Device>         
         </bts:Btinreq>
         <bts:sdtDatosAmortizable>
            <bts:monto>10000</bts:monto>
            <bts:productoUId>61</bts:productoUId>
            <bts:fechaPrimerPago>2019-01-12</bts:fechaPrimerPago>
            <bts:pizarra></bts:pizarra>
            <bts:tasa></bts:tasa>
            <bts:actividad>11200</bts:actividad>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
         </bts:sdtDatosAmortizable>
      </bts:BTPrestamos.SimularAmortizableSinCliente>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularAmortizableSinCliente=' \
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
    "sdtDatosAmortizable": {
        "productoUId": 61,
        "fechaPrimerPago": "2018-12-10",
        "monto": 1000,
        "cantidadCuotas": 12,
        "periodoCuotas": 30,
		"pizarra": 0,
		"tasa": 0,
		"actividad": 11200,
		"periodoCuotas": 30,
		"cantidadCuotas": 12
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
      <BTPrestamos.SimularAmortizableSinClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>72e34bcd9d4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-01-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-02-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-03-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-04-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-05-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-06-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-07-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-08-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-09-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-10-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-11-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.04</importe>
                  <fechaPago>2019-12-12</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <fechaValor>2018-12-11</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>1288.18</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>14328.15</totalPrestamo>
            <valorCuota>1194.01</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>1</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2019-01-12</fechaPrimerPago>
            <fechaVencimiento>2019-12-12</fechaVencimiento>
            <plazo>361</plazo>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>61</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>623</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularAmortizableSinCliente</Servicio>
            <Fecha>2019-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:23:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularAmortizableSinClienteResponse>
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
        "Token": "1017966210F955E77534D3E0",
        "Device": "AC"
    },
    "sdtSimulacionPrestamo": {
        "operacionUId": 1,
        "producto": {
            "productoUId": 61,
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF",
            "moneda": "$",
            "papel": "$"
        },
        "capital": 1000.00,
        "valorCuota": 420.44,
        "intereses": 87.11,
        "tasa": 3.052000,
        "tasaEfectiva": 0.000000,
        "tasaEfectivaAnual": 3.052000,
        "tasaNominalAnual": 3.010070,
        "totalPrestamo": 5045.27,
        "fechaValor": "2016-08-15",
        "fechaVencimiento": "2019-11-11",
        "fechaPrimerPago": "2018-12-10",
        "plazo": 1183,
        "otrosConceptos": {
            "sBTConcepto": []
        },
        "cronograma": {
            "sBTCuotaPrestamoAlta": [
                {
                    "fechaPago": "2018-12-10",
                    "importe": 2934.49
                },
                {
                    "fechaPago": "2019-01-10",
                    "importe": 192.14
                },
                {
                    "fechaPago": "2019-02-11",
                    "importe": 192.11
                },
                {
                    "fechaPago": "2019-03-11",
                    "importe": 192.00
                },
                {
                    "fechaPago": "2019-04-10",
                    "importe": 191.98
                },
                {
                    "fechaPago": "2019-05-10",
                    "importe": 191.93
                },
                {
                    "fechaPago": "2019-06-10",
                    "importe": 191.89
                },
                {
                    "fechaPago": "2019-07-10",
                    "importe": 191.83
                },
                {
                    "fechaPago": "2019-08-12",
                    "importe": 191.81
                },
                {
                    "fechaPago": "2019-09-10",
                    "importe": 191.73
                },
                {
                    "fechaPago": "2019-10-10",
                    "importe": 191.69
                },
                {
                    "fechaPago": "2019-11-11",
                    "importe": 191.67
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPrestamos.SimularAmortizableSinCliente",
        "Fecha": "2019-11-20",
        "Hora": "11:44:44",
        "Requerimiento": "1",
        "Numero": 7048,
        "Estado": "OK"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre              | Tipo                | Comentarios             |
| ------------------- | ------------------- | ----------------------- |
| sdtDatosAmortizable | sBTDatosAmortizable | Datos de la simulación. |

Los campos del tipo de dato estructurado sBTDatosAmortizable son los siguientes:

| Campo            | Tipo   | Comentarios                                                            |
| ---------------- | ------ | ---------------------------------------------------------------------- |
| productoUId\*    | Long   | Identificador único de producto.                                       |
| fechaPrimerPago  | Date   | Fecha de primer pago.                                                  |
| cantidadCuotas\* | Int    | Cantidad de cuotas.                                                    |
| monto\*          | Double | Capital solicitado.                                                    |
| pizarra          | Short  | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. |
| tasa             | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.      |
| actividad\*\*    | Long   | Código de actividad (Destino del crédito).                             |
| periodoCuotas    | Int    | Período entre cuotas.                                                  |

### Datos de salida

| Nombre        | Tipo                  | Comentarios                 |
| ------------- | --------------------- | --------------------------- |
| sdtSimulacion | sBTSimulacionPrestamo | Datos del préstamo simulado |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo del préstamo.               |
| otrosConceptos    | sBTConcepto          | Otros conceptos.                  |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

### Errores

| Código | Descripción                                                        |
| ------ | ------------------------------------------------------------------ |
| 30001  | No se recibió el identificador de cliente.                         |
| 30002  | No se recibió el identificador de producto.                        |
| 30003  | No se recuperó la cuenta para el Identificador.                    |
| 30004  | El Identificador único de Producto es incorrecto.                  |
| 30005  | No se recibió la Fecha de Primer Pago desde el origen.             |
| 30006  | No se recibió el Monto de Capital desde el origen.                 |
| 31001  | La simulación no está vigente.                                     |
| 31002  | La simulación no existe.                                           |
| 40001  | La Cuenta indicada es incorrecta.                                  |
| 40012  | La Fecha de Primer Pago indicada es menor a la Fecha Valor.        |
| 40013  | La Fecha de Vencimiento indicada es menor a la Fecha Valor.        |
| 40014  | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimien. |
| 40015  | El Plazo Total indicado es incorrecto.                             |
| 40016  | La Cantidad de Cuotas indicada es menor al mínimo permitido.       |
| 40017  | La Cantidad de Cuotas indicada es mayor al máximo permitido.       |
| 40018  | La Cantidad de Cuotas indicada es incorrecta.                      |
| 40019  | La Cantidad de Cuotas indicada no está preseteada.                 |
| 40020  | El período entre Cuotas indicado es menor al mínimo permitido.     |
| 40021  | El período entre Cuotas indicado es mayor al máximo permitido.     |
| 40022  | El período entre Cuotas indicado es incorrecto.                    |
| 40023  | El período entre Cuotas indicado no está preseteado.               |
| 40024  | El Valor Cuota indicado es incorrecto.                             |
| 40025  | El Capital indicado es menor al mínimo permitido.                  |
| 40026  | El Capital indicado es mayor al máximo permitido.                  |
| 40027  | El Capital indicado es incorrecto.                                 |
| 40037  | La Clase de Tasa indicada es incorrecta.                           |
| 40040  | La Tasa Fija indicada está fuera de tolerancia.                    |
| 40041  | La Tasa indicada es mayor a la Tasa de Usura.                      |
| 40048  | El período indicado es incorrecto.                                 |
| 40049  | El Tipo de Tasa indicado es incorrecto.                            |
| 40054  | La Tasa indicada es incorrecta.                                    |
| 40071  | El Plazo Total de la Operación es mayor al máximo permitido.       |
| 40072  | El Plazo Total de la Operación es menor al mínimo permitido.       |
| 40076  | El Producto indicado no está Preseteado.                           |
| 40147  | No se cumple el período mínimo entre Fecha Valor y Fecha de Prime. |
| 40148  | El Capital indicado debe ser mayor al Valor Cuota.                 |
| 40149  | No se cumple el período máximo entre Fecha Valor y Fecha de Prime. |

## Simular Ampliación

Método para simular una ampliación de uno o más préstamos.

| Nombre publicación            | Programa | Global/País |
| ----------------------------- | -------- | ----------- |
| BTPrestamos.SimularAmpliacion | RBTPG232 | Global      |

> Ejemplo de invocación al método Simular Ampliación:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularAmpliacion>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtAmpliacion>
            <bts:productoUId>61</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:clienteUId>221</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:tasa>0</bts:tasa>
            <bts:fechaPrimerPago/>
            <bts:operaciones>
            	<item>541</item>
            </bts:operaciones>
            <bts:pizarra>0</bts:pizarra>
         </bts:sdtAmpliacion>
      </bts:BTPrestamos.SimularAmpliacion>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularAmpliacion=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "72e34bcd9d4A8B5C60A82434"
	},
    "sdtPrestamo": {
        "clienteUId": 221,
        "productoUId": 61,
        "fechaPrimerPago": "",
        "monto": 20000,
        "cantidadCuotas": 12,
        "periodoCuotas": 30,
		"tasa": 0,
		"pizarra": 0,
		"actividad": 11200,
		"operaciones": {
			"item":541		
		}
		
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
      <BTPrestamos.SimularAmpliacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>72e34bcd9d4A8B5C60A82434</Token>
         </Btinreq>
         <ampliacionId>122</ampliacionId>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-01-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-02-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-03-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-04-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-05-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-06-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-07-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-08-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-09-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-10-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-11-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-12-12</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <fechaValor>2020-03-13</fechaValor>
            <capital>37524.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>2541.18</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>26742.34</totalPrestamo>
            <valorCuota>2228.53</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>1</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-04-13</fechaPrimerPago>
            <fechaVencimiento>2021-03-13</fechaVencimiento>
            <plazo>0</plazo>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>61</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>623</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularAmpliacion</Servicio>
            <Fecha>2019-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:23:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularAmpliacionResponse>
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
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "72e34bcd9d4A8B5C60A82434"
    },
    "ampliacionId": "122",
    "sdtSimulacion": {
      "otrosConceptos": {
      },
      "cronograma": {
        "sBTCuotaPrestamoAlta": [
          {
            "importe": "2228.53",
            "fechaPago": "2019-01-12"
          },
          {
            "importe": "2228.53",
            "fechaPago": "2019-02-12"
          },
          {
            "importe": "2228.53",
            "fechaPago": "2019-03-12"
          },
          {
            "importe": "2228.53",
            "fechaPago": "2019-04-12"
          },
          {
            "importe": "2228.53",
            "fechaPago": "2019-05-12"
          },
          {
            "importe": "2228.53",
            "fechaPago": "2019-06-12"
          },
          {
            "importe": "2228.53",
            "fechaPago": "2019-07-12"
          },
          {
            "importe": "2228.53",
            "fechaPago": "2019-08-12"
          },
          {
            "importe": "2228.53",
            "fechaPago": "2019-09-12"
          },
          {
            "importe": "2228.53",
            "fechaPago": "2019-10-12"
          },
          {
            "importe": "2228.53",
            "fechaPago": "2019-11-12"
          },
          {
            "importe": "2228.53",
            "fechaPago": "2019-12-12"
          }
        ]
      },
      "fechaValor": "2020-03-13",
      "capital": "37524.00",
      "tasaEfectiva": "0.000000",
      "intereses": "2541.18",
      "tasaNominalAnual": "23.000000",
      "totalPrestamo": "26742.34",
      "valorCuota": "2228.53",
      "tasaEfectivaAnual": "25.590075",
      "operacionUId": "1",
      "tasa": "23.000000",
      "fechaPrimerPago": "2020-04-13",
      "fechaVencimiento": "2021-03-13",
      "plazo": "0",
      "producto": {
        "papel": "$",
        "moneda": "$",
        "productoUId": "61",
        "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      }
    },
    "Erroresnegocio": {
    },
    "Btoutreq": {
      "Numero": "623",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularAmpliacion",
      "Fecha": "2019-11-20",
      "Requerimiento": "1",
      "Hora": "09:23:04",
      "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Configuración Backend

1. Tiempo de validez de la simulación de una ampliación o refinanciación:

   - Por defecto es 1440 minutos (24 horas). Este valor se puede modificar ingresando los minutos en el valor específico 1 de la guía especial 20100 para los correlativos 1, 2 y 3 igual cero.

### Datos de entrada

| Nombre        | Tipo              | Comentarios          |
| ------------- | ----------------- | -------------------- |
| sdtAmpliacion | sBTAmpliacionAlta | Datos de simulación. |

Los campos del tipo de dato estructurado sBTAmpliacionAlta son los siguientes:

| Campo            | Tipo   | Comentarios                                                            |
| ---------------- | ------ | ---------------------------------------------------------------------- |
| clienteUId\*     | Long   | Identificador único de cliente.                                        |
| productoUId\*    | Long   | Identificador único de producto.                                       |
| fechaPrimerPago  | Date   | Fecha de primer pago.                                                  |
| cantidadCuotas\* | Int    | Cantidad de cuotas.                                                    |
| plazo            | Int    | Plazo de la operación.                                                 |
| monto\*          | Double | Capital solicitado.                                                    |
| pizarra          | Short  | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. |
| tasa             | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.      |
| actividad\*\*    | Long   | Código de actividad (Destino del crédito).                             |
| operaciones      | Long   | Lista de idententificares de operaciones a cancelar.                   |

### Datos de salida

| Nombre                | Tipo                  | Comentarios                                               |
| --------------------- | --------------------- | --------------------------------------------------------- |
| ampliacionId          | Long                  | Identificador de ampliación.                              |
| sdtSimulacion         | sBTSimulacionPrestamo | Datos del préstamo simulado.                              |
| deudaTotalCancelacion | Double                | Monto de cancelación total de los préstamos a consolidar. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo del préstamo.               |
| otrosConceptos    | sBTConcepto          | Otros conceptos.                  |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

### Errores

| Código | Descripción                                                                  |
| ------ | ---------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.                                   |
| 30002  | No se recibió el identificador de producto.                                  |
| 30003  | No se recuperó la cuenta para el Identificador: [Número de Identificador].   |
| 30004  | No se indicaron operaciones a ampliar.                                       |
| 30005  | No se recuperó la operación para el identificador [Número de Identificador]. |
| 40001  | La Cuenta indicada es incorrecta.                                            |
| 40012  | La Fecha de Primer Pago indicada es menor a la Fecha Valor.                  |
| 40013  | La Fecha de Vencimiento indicada es menor a la Fecha Valor.                  |
| 40014  | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.         |
| 40015  | El Plazo Total indicado es incorrecto.                                       |
| 40016  | La Cantidad de Cuotas indicada es menor al mínimo permitido.                 |
| 40017  | La Cantidad de Cuotas indicada es mayor al máximo permitido.                 |
| 40018  | La Cantidad de Cuotas indicada es incorrecta.                                |
| 40019  | La Cantidad de Cuotas indicada no está preseteada.                           |
| 40020  | El período entre Cuotas indicado es menor al mínimo permitido.               |
| 40021  | El período entre Cuotas indicado es mayor al máximo permitido.               |
| 40022  | El período entre Cuotas indicado es incorrecto.                              |
| 40023  | El período entre Cuotas indicado no está preseteado.                         |
| 40024  | El Valor Cuota indicado es incorrecto.                                       |
| 40025  | El Capital indicado es menor al mínimo permitido.                            |
| 40026  | El Capital indicado es mayor al máximo permitido.                            |
| 40027  | El Capital indicado es incorrecto.                                           |
| 40037  | La Clase de Tasa indicada es incorrecta.                                     |
| 40040  | La Tasa Fija indicada está fuera de tolerancia.                              |
| 40041  | La Tasa indicada es mayor a la Tasa de Usura.                                |
| 40048  | El período indicado es incorrecto.                                           |
| 40049  | El Tipo de Tasa indicado es incorrecto.                                      |
| 40054  | La Tasa indicada es incorrecta.                                              |
| 40071  | El Plazo Total de la Operación es mayor al máximo permitido.                 |
| 40072  | El Plazo Total de la Operación es menor al mínimo permitido.                 |
| 40076  | El Producto indicado no está Preseteado.                                     |
| 40147  | No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago.     |
| 40148  | El Capital indicado debe ser mayor al Valor Cuota.                           |
| 40149  | No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago.     |

## Simular Ampliación Ingresando Seguros

Método para simular una ampliación de uno o más préstamos ingresando los seguros a aplicar. Se permite el ingreso de seguros cualesquiera que se encuentren preseteados para el producto, siempre y cuando los importes de los mismos se resuelvan automáticamente.

| Nombre publicación                             | Programa | Global/País |
| ---------------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularAmpliacionIngresandoSeguros | RBTPG488 | Global      |

> Ejemplo de invocación al método de Simular Ampliación Ingresando Seguros:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularAmpliacionIngresandoSeguros>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtAmpliacion>
            <bts:productoUId>61</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:clienteUId>221</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:tasa>0</bts:tasa>
            <bts:fechaPrimerPago/>
            <bts:operaciones>
            	<item>541</item>
            </bts:operaciones>
            <bts:pizarra>0</bts:pizarra>
         </bts:sdtAmpliacion>
         <bts:sinSeguros>N</bts:sinSeuros>
         <bts:sdtSeguros>
            <bts:sBTSegurosSimulacion>
                <bts:codigo>100</bts:codigo>
            </bts:sBTSegurosSimulacion>
         </bts:sdtSeguros>
      </bts:BTPrestamos.SimularAmpliacionIngresandoSeguros>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularAmpliacionIngresandoSeguros=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \
  -d '{
	"Btinreq": {
		"Device": "AV",
		"Usuario": "MINSTALADOR",
		"Requerimiento": "",
		"Canal": "BTDIGITAL",
		"Token": "72e34bcd9d4A8B5C60A82434"
	},
   "sdtAmpliacion": {
      "productoUId": 61,
      "monto": 20000,
      "clienteUId": 221,
      "actividad": 1111,
      "periodoCuotas": 30,
      "cantidadCuotas": 12,
      "tasa": 0,
      "fechaPrimerPago": "",
      "operaciones": {
         "item": 541
      },
      "pizarra": 0
   },
   "sinSeguros": "N",
   "sdtSeguros": {
      "sBTSegurosSimulacion": {
         "codigo": 100
      }
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
      <BTPrestamos.SimularAmpliacionIngresandoSegurosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>72e34bcd9d4A8B5C60A82434</Token>
         </Btinreq>
         <ampliacionId>122</ampliacionId>
         <sdtSimulacion>
            <sBTConceptos>
               <concepto>100</concepto>
               <valor>1500.00</valor>
               <texto>Seguro vida</texto>
            </sBTConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-01-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-02-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-03-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-04-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-05-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-06-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-07-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-08-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-09-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-10-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-11-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>2228.53</importe>
                  <fechaPago>2019-12-12</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <fechaValor>2020-03-13</fechaValor>
            <capital>37524.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>2541.18</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>26742.34</totalPrestamo>
            <valorCuota>2228.53</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>1</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-04-13</fechaPrimerPago>
            <fechaVencimiento>2021-03-13</fechaVencimiento>
            <plazo>0</plazo>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>61</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>623</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularAmpliacionIngresandoSeguros</Servicio>
            <Fecha>2019-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:23:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularAmpliacionIngresandoSegurosResponse>
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
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "72e34bcd9d4A8B5C60A82434"
   },
   "ampliacionId": 122,
   "sdtSimulacion": {
      "sBTConceptos": {
         "concepto": 100,
         "valor": 1500,
         "texto": "Seguro vida"
      },
      "cronograma": {
         "sBTCuotaPrestamoAlta": [
            {
               "importe": 2228.53,
               "fechaPago": "2019-01-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-02-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-03-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-04-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-05-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-06-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-07-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-08-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-09-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-10-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-11-12"
            },
            {
               "importe": 2228.53,
               "fechaPago": "2019-12-12"
            }
         ]
      },
      "fechaValor": "2020-03-13",
      "capital": 37524,
      "tasaEfectiva": 0,
      "intereses": 2541.18,
      "tasaNominalAnual": 23,
      "totalPrestamo": 26742.34,
      "valorCuota": 2228.53,
      "tasaEfectivaAnual": 25.590075,
      "operacionUId": 1,
      "tasa": 23,
      "fechaPrimerPago": "2020-04-13",
      "fechaVencimiento": "2021-03-13",
      "plazo": 0,
      "producto": {
      "papel": "$",
      "moneda": "$",
      "productoUId": 61,
      "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      }
   },
    "Erroresnegocio": {
    },
    "Btoutreq": {
      "Numero": "623",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularAmpliacionIngresandoSeguros",
      "Fecha": "2019-11-20",
      "Requerimiento": "1",
      "Hora": "09:23:04",
      "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Configuración Backend

1. Tiempo de validez de la simulación de una ampliación o refinanciación:

   - Por defecto es 1440 minutos (24 horas). Este valor se puede modificar ingresando los minutos en el valor específico 1 de la guía especial 20100 para los correlativos 1, 2 y 3 igual cero.

### Datos de entrada

| Nombre        | Tipo                 | Comentarios                                                                                                                                        |
| ------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| sdtAmpliacion | sBTAmpliacionAlta    | Datos de simulación.                                                                                                                               |
| sinSeguros    | String               | Acción a tomar cuando la lista de seguros a aplicar es vacía (S: Simula sin tener en cuenta ningún seguro, N: Simula con los seguros preseteados). |
| sdtSeguros    | sBTSegurosSimulacion | Listado de códigos de seguros a aplicar.                                                                                                           |

Los campos del tipo de dato estructurado sBTAmpliacionAlta son los siguientes:

| Campo            | Tipo   | Comentarios                                                            |
| ---------------- | ------ | ---------------------------------------------------------------------- |
| clienteUId\*     | Long   | Identificador único de cliente.                                        |
| productoUId\*    | Long   | Identificador único de producto.                                       |
| fechaPrimerPago  | Date   | Fecha de primer pago.                                                  |
| cantidadCuotas\* | Int    | Cantidad de cuotas.                                                    |
| plazo            | Int    | Plazo de la operación.                                                 |
| monto\*          | Double | Capital solicitado.                                                    |
| pizarra          | Short  | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. |
| tasa             | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.      |
| actividad\*\*    | Long   | Código de actividad (Destino del crédito).                             |
| operaciones      | Long   | Lista de idententificares de operaciones a cancelar.                   |

Los campos del tipo de dato estructurado sBTSegurosSimulacion son los siguientes:

| Campo  | Tipo | Comentarios                 |
| ------ | ---- | --------------------------- |
| codigo | Int  | Código de seguro a aplicar. |

### Datos de salida

| Nombre                | Tipo                  | Comentarios                                               |
| --------------------- | --------------------- | --------------------------------------------------------- |
| ampliacionId          | Long                  | Identificador de ampliación.                              |
| sdtSimulacion         | sBTSimulacionPrestamo | Datos del préstamo simulado.                              |
| deudaTotalCancelacion | Double                | Monto de cancelación total de los préstamos a consolidar. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo del préstamo.               |
| otrosConceptos    | sBTConcepto          | Otros conceptos.                  |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

### Errores

| Código | Descripción                                                                  |
| ------ | ---------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.                                   |
| 30002  | No se recibió el identificador de producto.                                  |
| 30003  | No se recuperó la cuenta para el Identificador: [Número de Identificador].   |
| 30004  | No se indicaron operaciones a ampliar.                                       |
| 30005  | No se recuperó la operación para el identificador [Número de Identificador]. |
| 40001  | La Cuenta indicada es incorrecta.                                            |
| 40012  | La Fecha de Primer Pago indicada es menor a la Fecha Valor.                  |
| 40013  | La Fecha de Vencimiento indicada es menor a la Fecha Valor.                  |
| 40014  | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.         |
| 40015  | El Plazo Total indicado es incorrecto.                                       |
| 40016  | La Cantidad de Cuotas indicada es menor al mínimo permitido.                 |
| 40017  | La Cantidad de Cuotas indicada es mayor al máximo permitido.                 |
| 40018  | La Cantidad de Cuotas indicada es incorrecta.                                |
| 40019  | La Cantidad de Cuotas indicada no está preseteada.                           |
| 40020  | El período entre Cuotas indicado es menor al mínimo permitido.               |
| 40021  | El período entre Cuotas indicado es mayor al máximo permitido.               |
| 40022  | El período entre Cuotas indicado es incorrecto.                              |
| 40023  | El período entre Cuotas indicado no está preseteado.                         |
| 40024  | El Valor Cuota indicado es incorrecto.                                       |
| 40025  | El Capital indicado es menor al mínimo permitido.                            |
| 40026  | El Capital indicado es mayor al máximo permitido.                            |
| 40027  | El Capital indicado es incorrecto.                                           |
| 40037  | La Clase de Tasa indicada es incorrecta.                                     |
| 40040  | La Tasa Fija indicada está fuera de tolerancia.                              |
| 40041  | La Tasa indicada es mayor a la Tasa de Usura.                                |
| 40048  | El período indicado es incorrecto.                                           |
| 40049  | El Tipo de Tasa indicado es incorrecto.                                      |
| 40054  | La Tasa indicada es incorrecta.                                              |
| 40071  | El Plazo Total de la Operación es mayor al máximo permitido.                 |
| 40072  | El Plazo Total de la Operación es menor al mínimo permitido.                 |
| 40076  | El Producto indicado no está Preseteado.                                     |
| 40147  | No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago.     |
| 40148  | El Capital indicado debe ser mayor al Valor Cuota.                           |
| 40149  | No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago.     |

## Simular Despejando Capital y Cantidad de Cuotas

Método para simular un préstamo despejando capital y cantidad de cuotas.

| Nombre publicación                             | Programa | Global/País |
| ---------------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularDespejandoCapitalCantCuotas | RBTPG322 | Global      |

> Ejemplo de invocación al método Simular Despejando Capital y Cantidad de Cuotas:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularDespejandoCapitalCantCuotas>
         <bts:Btinreq>
            <bts:Device>BTDIGITAL</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>d25cdaf98eCD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>181</bts:productoUId>
            <bts:monto></bts:monto>
            <bts:clienteUId>342</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas></bts:cantidadCuotas>
            <bts:tasa>0</bts:tasa>
            <bts:fechaPrimerPago>10-10-2021</bts:fechaPrimerPago>
            <bts:pizarra>0</bts:pizarra>
         </bts:sdtPrestamoAlta>
      </bts:BTPrestamos.SimularDespejandoCapitalCantCuotas>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularDespejandoCapitalCantCuotas' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
		"Btinreq": {
			"Canal": "BTDIGITAL",
			"Requerimiento": "1",
			"Usuario": "INSTALADOR",
			"Token": "d25cdaf98eCD285A89A23FBE",
			"Device": "BTDIGITAL"		
		}, 
		"sdtPrestamoAlta":{
		   "plazoTotal": "300",
		   "productoUId": "181",
		   "monto": [],
		   "clienteUId": "342",
		   "actividad": "1111",
		   "valorCuota": "5000",
		   "periodoCuotas": "30",
		   "cantidadCuotas": [],
		   "tasa": "0",
		   "fechaPrimerPago": "10-10-2021",
		   "pizarra": "0"
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
      <BTPrestamos.SimularDespejandoCapitalCantCuotasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>BTDIGITAL</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>d25cdaf98eCD285A89A23FBE</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2020-01-01</fechaValor>
            <capital>45587.56</capital>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>9594.84</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-02-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>9230.36</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-03-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>8859.63</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-04-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>8482.52</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-05-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>8098.96</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-06-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>7708.80</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-07-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>7311.97</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-08-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6908.30</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-09-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6497.72</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-10-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6080.09</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-01</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>4412.43</intereses>
            <tasaNominalAnual>20.878536</tasaNominalAnual>
            <totalPrestamo>78773.19</totalPrestamo>
            <valorCuota>7877.32</valorCuota>
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual>
            <operacionUId>1607</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-02-01</fechaPrimerPago>
            <fechaVencimiento>2020-11-01</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>181</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <plazo>300</plazo>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>110672</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularDespejandoCapitalCantCuotas</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-03-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:34:44</Hora>
         </Btoutreq>
      </BTPrestamos.SimularDespejandoCapitalCantCuotasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
   "Btinreq": {
      "Device": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "d25cdaf98eCD285A89A23FBE"
   },
   "sdtSimulacionPrestamo": {
	  "otrosConceptos": {
	  	"sBTConcepto": []
	  },
      "fechaValor": "2020-01-01",
      "capital": "45587.56",
      "cronograma": {
         "sBTCuotaPrestamoAlta": [
            {
               "importe": "9594.84",
               "redondeo": "0.00",
               "fechaPago": "2020-02-01"
            },
            {
               "importe": "9230.36",
               "redondeo": "0.00",
               "fechaPago": "2020-03-01"
            },
            {
               "importe": "8859.63",
               "redondeo": "0.00",
               "fechaPago": "2020-04-01"
            },
            {
               "importe": "8482.52",
               "redondeo": "0.00",
               "fechaPago": "2020-05-01"
            },
            {
               "importe": "8098.96",
               "redondeo": "0.00",
               "fechaPago": "2020-06-01"
            },
            {
               "importe": "7708.80",
               "redondeo": "0.00",
               "fechaPago": "2020-07-01"
            },
            {
               "importe": "7311.97",
               "redondeo": "0.00",
               "fechaPago": "2020-08-01"
            },
            {
               "importe": "6908.30",
               "redondeo": "0.00",
               "fechaPago": "2020-09-01"
            },
            {
               "importe": "6497.72",
               "redondeo": "0.00",
               "fechaPago": "2020-10-01"
            },
            {
               "importe": "6080.09",
               "redondeo": "0.00",
               "fechaPago": "2020-11-01"
            }
         ]
      },
      "tasaEfectiva": "0.000000",
      "intereses": "4412.43",
      "tasaNominalAnual": "20.878536",
      "totalPrestamo": "78773.19",
      "valorCuota": "7877.32",
      "tasaEfectivaAnual": "23.000000",
      "operacionUId": "1607",
      "tasa": "23.000000",
      "fechaPrimerPago": "2020-02-01",
      "fechaVencimiento": "2020-11-01",
      "producto": {
         "papel": "$",
         "moneda": "$",
         "productoUId": "181",
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      },
      "plazo": "300"
   },
   "Erroresnegocio": {
        "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "110672",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularDespejandoCapitalCantCuotas",
      "Requerimiento": "1",
      "Fecha": "2021-03-18",
      "Canal": "BTDIGITAL",
      "Hora": "12:34:44"
   }
}
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtPrestamoAlta | sBTPrestamoAltaConDespeje | Datos del préstamo a dar de alta.
modoDespeje  | Short | [Hidden: Valor fijo 5 para este método].

Los campos del tipo de dato estructurado sBTPrestamoAltaConDespeje son los siguientes:

| Campo           | Tipo   | Comentarios                 |
| --------------- | ------ | --------------------------- |
| clienteUId      | Long   | Identificador del cliente.  |
| productoUId     | Long   | Identificador del producto. |
| fechaPrimerPago | Date   | Fecha primer pago.          |
| cantidadCuotas  | Int    | Cantidad de cuotas.         |
| periodoCuotas   | Int    | Período entre cuotas.       |
| plazoTotal      | Int    | Plazo total.                |
| valorCuota      | Double | Valor cuota.                |
| monto           | Double | Monto del préstamo.         |
| pizarra         | Short  | Código de pizarra.          |
| tasa            | Double | Tasa.                       |
| actividad       | Long   | Código de actividad.        |

### Datos de salida

| Nombre                | Tipo                  | Comentarios             |
| --------------------- | --------------------- | ----------------------- |
| sdtSimulacionPrestamo | sBTSimulacionPrestamo | Datos de la simulación. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo.                            |
| otrosConceptos    | sBTConcepto          | Importe otros conceptos.          |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recibió el identificador de producto.     |
| 30003  | No se recuperó la cuenta para el Identificador: |

## Simular Despejando Capital y Cantidad de Cuotas Sin Cliente

Método para simular un préstamo sin cliente despejando capital y cantidad de cuotas.

| Nombre publicación                               | Programa | Global/País |
| ------------------------------------------------ | -------- | ----------- |
| BTPrestamos.SimularDespejandoCapitalCantCuotasSC | RBTPG466 | Global      |

> Ejemplo de invocación al método Simular Despejando Capital y Cantidad de Cuotas:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularDespejandoCapitalCantCuotasSC>
          <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>387E2B35D9F43B80C31D1FF0</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>71</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas></bts:cantidadCuotas>
            <bts:tasa></bts:tasa>
            <bts:fechaPrimerPago>2020-11-13</bts:fechaPrimerPago>
            <bts:pizarra></bts:pizarra>
         </bts:sdtPrestamoAlta>
      </bts:BTPrestamos.SimularDespejandoCapitalCantCuotasSC>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularDespejandoCapitalCantCuotasSC' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
		"Btinreq": {
			"Canal": "BTDIGITAL",
			"Requerimiento": "1",
			"Usuario": "INSTALADOR",
			"Token": "d25cdaf98eCD285A89A23FBE",
			"Device": "BTDIGITAL"		
		}, 
      "sdtPrestamoAlta": {
         "plazoTotal": "300",
         "productoUId": "71",
         "monto": "20000",
         "actividad": "1111",
         "valorCuota": "5000",
         "periodoCuotas": "30",
         "cantidadCuotas": "",
         "tasa": "",
         "fechaPrimerPago": "2020-11-13",
         "pizarra": ""
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
      <BTPrestamos.SimularDespejandoCapitalCantCuotasSCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>387E2B35D9F43B80C31D1FF0</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <cft>28.230000</cft>
            <plazo>360</plazo>
            <tasa>23.000000</tasa>
            <impuestos>1331.200000</impuestos>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <fechaVencimiento>2021-10-13</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>71</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <intereses>5978.07</intereses>
            <fechaPrimerPago>2020-11-13</fechaPrimerPago>
            <comisiones>0.000000</comisiones>
            <valorCuota>5000.00</valorCuota>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-12-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-01-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-02-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-03-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-04-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-05-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-06-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-07-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-08-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-09-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-10-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
            </cronograma>
            <totalPrestamo>60072.78</totalPrestamo>
            <capital>50895.94</capital>
            <operacionUId>1</operacionUId>
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual>
            <seguros>1810.800000</seguros>
            <tasaNominalAnual>20.881010</tasaNominalAnual>
            <fechaValor>2020-10-13</fechaValor>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11824</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularDespejandoCapitalCantCuotasSC</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>17:39:25</Hora>
         </Btoutreq>
      </BTPrestamos.SimularDespejandoCapitalCantCuotasSCResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
   "Btinreq": {
      "Device": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "d25cdaf98eCD285A89A23FBE"
   },
   "sdtSimulacionPrestamo": {
        "cft": "28.230000",
        "plazo": "360",
        "tasa": "23.000000",
        "impuestos": "1331.200000",
        "tasaEfectiva": "0.000000",
        "fechaVencimiento": "2021-10-13",
        "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": "71",
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
        },
        "intereses": "5978.07",
        "fechaPrimerPago": "2020-11-13",
        "comisiones": "0.000000",
        "valorCuota": "5000.00",
        "otrosConceptos": "",
        "cronograma": {
         "SdtsBTCuotaPrestamoAlta": [
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2020-11-13"
               },
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2020-12-13"
               },
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-01-13"
               },
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-02-13"
               },
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-03-13"
               },
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-04-13"
               },
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-05-13"
               },
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-06-13"
               },
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-07-13"
               },
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-08-13"
               },
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-09-13"
               },
               {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-10-13"
               }
         ]
        },
        "totalPrestamo": "60072.78",
        "capital": "50895.94",
        "operacionUId": "1",
        "tasaEfectivaAnual": "23.000000",
        "seguros": "1810.800000",
        "tasaNominalAnual": "20.881010",
        "fechaValor": "2020-10-13"
    },
   "Erroresnegocio": {
        "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "110672",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularDespejandoCapitalCantCuotasSC",
      "Requerimiento": "1",
      "Fecha": "2021-03-18",
      "Canal": "BTDIGITAL",
      "Hora": "12:34:44"
   }
}
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtPrestamoAlta | SdtsBTDatosDespejeSinCliente | Datos del préstamo a dar de alta.
modoDespeje  | Short | [Hidden: Valor fijo 5 para este método].

Los campos del tipo de dato estructurado SdtsBTDatosDespejeSinCliente son los siguientes:

| Campo           | Tipo   | Comentarios                 |
| --------------- | ------ | --------------------------- |
| productoUId     | Long   | Identificador del producto. |
| fechaPrimerPago | Date   | Fecha primer pago.          |
| cantidadCuotas  | Int    | Cantidad de cuotas.         |
| periodoCuotas   | Int    | Período entre cuotas.       |
| plazoTotal      | Int    | Plazo total.                |
| valorCuota      | Double | Valor cuota.                |
| monto           | Double | Monto del préstamo.         |
| pizarra         | Short  | Código de pizarra.          |
| tasa            | Double | Tasa.                       |
| actividad       | Long   | Código de actividad.        |

### Datos de salida

| Nombre                | Tipo                  | Comentarios             |
| --------------------- | --------------------- | ----------------------- |
| sdtSimulacionPrestamo | sBTSimulacionPrestamo | Datos de la simulación. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo.                            |
| otrosConceptos    | sBTConcepto          | Importe otros conceptos.          |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Errores

| Código | Descripción                                                                |
| ------ | -------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.                                 |
| 30002  | No se recibió el identificador de producto.                                |
| 30003  | No se recuperó la cuenta para el Identificador: [Número de Identificador]. |

## Simular Despejando Fecha de Vencimiento y Cantidad de Cuotas

Método para simular un préstamo despejando fecha de vencimiento y cantidad de cuotas.

| Nombre publicación                              | Programa | Global/País |
| ----------------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularDespejandoFechaVtoCantCuotas | RBTPG322 | Global      |

> Ejemplo de invocación al método Simular Despejando Fecha de Vencimiento y Cantidad de Cuotas:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularDespejandoFechaVtoCantCuotas>
         <bts:Btinreq>
            <bts:Device>BTDIGITAL</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>d25cdaf98eCD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>181</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:clienteUId>342</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas></bts:cantidadCuotas>
            <bts:tasa>0</bts:tasa>
            <bts:fechaPrimerPago>10-10-2021</bts:fechaPrimerPago>
            <bts:pizarra>0</bts:pizarra>
         </bts:sdtPrestamoAlta>
      </bts:BTPrestamos.SimularDespejandoFechaVtoCantCuotas>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularDespejandoFechaVtoCantCuotas' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
		"Btinreq": {
			"Canal": "BTDIGITAL",
			"Requerimiento": "1",
			"Usuario": "INSTALADOR",
			"Token": "d25cdaf98eCD285A89A23FBE",
			"Device": "BTDIGITAL"		
		}, 
		"sdtPrestamoAlta":{
		   "plazoTotal": "300",
		   "productoUId": "181",
		   "monto": "20000",
		   "clienteUId": "342",
		   "actividad": "1111",
		   "valorCuota": "5000",
		   "periodoCuotas": "30",
		   "cantidadCuotas": [],
		   "tasa": "0",
		   "fechaPrimerPago": "10-10-2021",
		   "pizarra": "0"
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
      <BTPrestamos.SimularDespejandoFechaVtoCantCuotasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>BTDIGITAL</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>d25cdaf98eCD285A89A23FBE</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2020-01-01</fechaValor>
            <capital>20000.00</capital>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>7059.37</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-02-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6656.94</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-03-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6247.60</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-04-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>5831.24</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-05-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1310.83</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-06-01</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>903.09</intereses>
            <tasaNominalAnual>20.878536</tasaNominalAnual>
            <totalPrestamo>27105.98</totalPrestamo>
            <valorCuota>5421.20</valorCuota>
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual>
            <operacionUId>1606</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-02-01</fechaPrimerPago>
            <fechaVencimiento>2020-06-01</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>181</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <plazo>150</plazo>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>110671</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularDespejandoFechaVtoCantCuotas</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-03-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:33:02</Hora>
         </Btoutreq>
      </BTPrestamos.SimularDespejandoFechaVtoCantCuotasResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
   "Btinreq": {
      "Device": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "d25cdaf98eCD285A89A23FBE"
   },
   "sdtSimulacionPrestamo": {
	  "otrosConceptos": {
	  	"sBTConcepto": []
	  },
      "fechaValor": "2020-01-01",
      "capital": "20000.00",
      "cronograma": {
         "sBTCuotaPrestamoAlta": [
            {
               "importe": "7059.37",
               "redondeo": "0.00",
               "fechaPago": "2020-02-01"
            },
            {
               "importe": "6656.94",
               "redondeo": "0.00",
               "fechaPago": "2020-03-01"
            },
            {
               "importe": "6247.60",
               "redondeo": "0.00",
               "fechaPago": "2020-04-01"
            },
            {
               "importe": "5831.24",
               "redondeo": "0.00",
               "fechaPago": "2020-05-01"
            },
            {
               "importe": "1310.83",
               "redondeo": "0.00",
               "fechaPago": "2020-06-01"
            }
         ]
      },
      "tasaEfectiva": "0.000000",
      "intereses": "903.09",
      "tasaNominalAnual": "20.878536",
      "totalPrestamo": "27105.98",
      "valorCuota": "5421.20",
      "tasaEfectivaAnual": "23.000000",
      "operacionUId": "1606",
      "tasa": "23.000000",
      "fechaPrimerPago": "2020-02-01",
      "fechaVencimiento": "2020-06-01",
      "producto": {
         "papel": "$",
         "moneda": "$",
         "productoUId": "181",
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      },
      "plazo": "150"
   },
   "Erroresnegocio": {
        "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "110671",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularDespejandoFechaVtoCantCuotas",
      "Requerimiento": "1",
      "Fecha": "2021-03-18",
      "Canal": "BTDIGITAL",
      "Hora": "12:33:02"
   }
}
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtPrestamoAlta | sBTPrestamoAltaConDespeje | Datos del préstamo a dar de alta.
modoDespeje  | Short | [Hidden: Valor fijo 4 para este método].

Los campos del tipo de dato estructurado sBTPrestamoAltaConDespeje son los siguientes:

| Campo           | Tipo   | Comentarios                 |
| --------------- | ------ | --------------------------- |
| clienteUId      | Long   | Identificador del cliente.  |
| productoUId     | Long   | Identificador del producto. |
| fechaPrimerPago | Date   | Fecha primer pago.          |
| cantidadCuotas  | Int    | Cantidad de cuotas.         |
| periodoCuotas   | Int    | Período entre cuotas.       |
| plazoTotal      | Int    | Plazo total.                |
| valorCuota      | Double | Valor cuota.                |
| monto           | Double | Monto del préstamo.         |
| pizarra         | Short  | Código de pizarra.          |
| tasa            | Double | Tasa.                       |
| actividad       | Long   | Código de actividad.        |

### Datos de salida

| Nombre                | Tipo                  | Comentarios             |
| --------------------- | --------------------- | ----------------------- |
| sdtSimulacionPrestamo | sBTSimulacionPrestamo | Datos de la simulación. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo.                            |
| otrosConceptos    | sBTConcepto          | Importe otros conceptos.          |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recibió el identificador de producto.     |
| 30003  | No se recuperó la cuenta para el Identificador: |

## Simular Despejando Fecha de Vencimiento y Cantidad de Cuotas Sin Cliente

Método para simular un préstamo sin cliente despejando fecha de vencimiento y cantidad de cuotas.

| Nombre publicación                                | Programa | Global/País |
| ------------------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularDespejandoFechaVtoCantCuotasSC | RBTPG466 | Global      |

> Ejemplo de invocación al método Simular Despejando Fecha de Vencimiento y Cantidad de Cuotas Sin Cliente:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularDespejandoFechaVtoCantCuotasSC>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>387E2B35D9F43B80C31D1FF0</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>71</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas></bts:cantidadCuotas>
            <bts:tasa></bts:tasa>
            <bts:fechaPrimerPago>2020-11-13</bts:fechaPrimerPago>
            <bts:pizarra></bts:pizarra>
         </bts:sdtPrestamoAlta>
      </bts:BTPrestamos.SimularDespejandoFechaVtoCantCuotasSC>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularDespejandoFechaVtoCantCuotasSC' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
		"Btinreq": {
			"Canal": "BTDIGITAL",
			"Requerimiento": "1",
			"Usuario": "INSTALADOR",
			"Token": "d25cdaf98eCD285A89A23FBE",
			"Device": "BTDIGITAL"		
		}, 
		"sdtPrestamoAlta": {
          "plazoTotal": "300",
          "productoUId": "71",
          "monto": "20000",
          "actividad": "1111",
          "valorCuota": "5000",
          "periodoCuotas": "30",
          "cantidadCuotas": "",
          "tasa": "",
          "fechaPrimerPago": "2020-11-13",
          "pizarra": ""
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
      <BTPrestamos.SimularDespejandoFechaVtoCantCuotasSCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>387E2B35D9F43B80C31D1FF0</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <cft>28.000000</cft>
            <plazo>150</plazo>
            <tasa>23.000000</tasa>
            <impuestos>214.890000</impuestos>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <fechaVencimiento>2021-03-13</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>71</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <intereses>948.17</intereses>
            <fechaPrimerPago>2020-11-13</fechaPrimerPago>
            <comisiones>0.000000</comisiones>
            <valorCuota>5000.00</valorCuota>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-12-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-01-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-02-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1756.77</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-03-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
            </cronograma>
            <totalPrestamo>21785.37</totalPrestamo>
            <capital>20000.00</capital>
            <operacionUId>1</operacionUId>
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual>
            <seguros>600.000000</seguros>
            <tasaNominalAnual>20.881010</tasaNominalAnual>
            <fechaValor>2020-10-13</fechaValor>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11916</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularDespejandoFechaVtoCantCuotasSC</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-19</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>10:40:22</Hora>
         </Btoutreq>
      </BTPrestamos.SimularDespejandoFechaVtoCantCuotasSCResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
   "Btinreq": {
      "Device": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "d25cdaf98eCD285A89A23FBE"
   },
   "sdtSimulacionPrestamo": {
      "cft": "28.000000",
      "plazo": "150",
      "tasa": "23.000000",
      "impuestos": "214.890000",
      "tasaEfectiva": "0.000000",
      "fechaVencimiento": "2021-03-13",
      "producto": {
         "papel": "$",
         "moneda": "$",
         "productoUId": "71",
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      },
      "intereses": "948.17",
      "fechaPrimerPago": "2020-11-13",
      "comisiones": "0.000000",
      "valorCuota": "5000.00",
      "otrosConceptos": "",
      "cronograma": {
         "SdtsBTCuotaPrestamoAlta": [
            {
            "importe": "5000.00",
            "redondeo": "0.00",
            "fechaPago": "2020-11-13"
            },
            {
            "importe": "5000.00",
            "redondeo": "0.00",
            "fechaPago": "2020-12-13"
            },
            {
            "importe": "5000.00",
            "redondeo": "0.00",
            "fechaPago": "2021-01-13"
            },
            {
            "importe": "5000.00",
            "redondeo": "0.00",
            "fechaPago": "2021-02-13"
            },
            {
            "importe": "1756.77",
            "redondeo": "0.00",
            "fechaPago": "2021-03-13"
            }
         ]
      },
      "totalPrestamo": "21785.37",
      "capital": "20000.00",
      "operacionUId": "1",
      "tasaEfectivaAnual": "23.000000",
      "seguros": "600.000000",
      "tasaNominalAnual": "20.881010",
      "fechaValor": "2020-10-13"
   },
   "Erroresnegocio": {
        "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "110671",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularDespejandoFechaVtoCantCuotasSC",
      "Requerimiento": "1",
      "Fecha": "2021-03-18",
      "Canal": "BTDIGITAL",
      "Hora": "12:33:02"
   }
}
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtPrestamoAlta | SdtsBTDatosDespejeSinCliente | Datos del préstamo a dar de alta.
modoDespeje  | Short | [Hidden: Valor fijo 4 para este método].

Los campos del tipo de dato estructurado SdtsBTDatosDespejeSinCliente son los siguientes:

| Campo           | Tipo   | Comentarios                 |
| --------------- | ------ | --------------------------- |
| productoUId     | Long   | Identificador del producto. |
| fechaPrimerPago | Date   | Fecha primer pago.          |
| cantidadCuotas  | Int    | Cantidad de cuotas.         |
| periodoCuotas   | Int    | Período entre cuotas.       |
| plazoTotal      | Int    | Plazo total.                |
| valorCuota      | Double | Valor cuota.                |
| monto           | Double | Monto del préstamo.         |
| pizarra         | Short  | Código de pizarra.          |
| tasa            | Double | Tasa.                       |
| actividad       | Long   | Código de actividad.        |

### Datos de salida

| Nombre                | Tipo                  | Comentarios             |
| --------------------- | --------------------- | ----------------------- |
| sdtSimulacionPrestamo | sBTSimulacionPrestamo | Datos de la simulación. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo.                            |
| otrosConceptos    | sBTConcepto          | Importe otros conceptos.          |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Errores

| Código | Descripción                                                                |
| ------ | -------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.                                 |
| 30002  | No se recibió el identificador de producto.                                |
| 30003  | No se recuperó la cuenta para el Identificador: [Número de Identificador]. |

## Simular Despejando Fecha de Vencimiento y Tasa

Método para simular un préstamo despejando fecha de vencimiento y tasa.

| Nombre publicación                        | Programa | Global/País |
| ----------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularDespejandoFechaVtoTasa | RBTPG322 | Global      |

> Ejemplo de invocación al método Simular Despejando Fecha de Vencimiento y Tasa:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularDespejandoFechaVtoTasa>
         <bts:Btinreq>
            <bts:Device>BTDIGITAL</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>d25cdaf98eCD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>181</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:clienteUId>342</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:tasa>0</bts:tasa>
            <bts:fechaPrimerPago>10-10-2021</bts:fechaPrimerPago>
            <bts:pizarra>0</bts:pizarra>
         </bts:sdtPrestamoAlta>
      </bts:BTPrestamos.SimularDespejandoFechaVtoTasa>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SSimularDespejandoFechaVtoTasa' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
		"Btinreq": {
			"Canal": "BTDIGITAL",
			"Requerimiento": "1",
			"Usuario": "INSTALADOR",
			"Token": "d25cdaf98eCD285A89A23FBE",
			"Device": "BTDIGITAL"		
		}, 
		"sdtPrestamoAlta":{
		   "plazoTotal": "300",
		   "productoUId": "181",
		   "monto": "20000",
		   "clienteUId": "342",
		   "actividad": "1111",
		   "valorCuota": "5000",
		   "periodoCuotas": "30",
		   "cantidadCuotas": "12",
		   "tasa": "0",
		   "fechaPrimerPago": "10-10-2021",
		   "pizarra": "0"
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
      <BTPrestamos.SimularDespejandoFechaVtoTasaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>BTDIGITAL</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>d25cdaf98eCD285A89A23FBE</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2020-01-01</fechaValor>
            <capital>20000.00</capital>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>7465.93</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-02-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>7144.25</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-03-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6792.17</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-04-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6406.83</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-05-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>5985.07</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-06-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1858.61</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-07-01</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>6335.15</intereses>
            <tasaNominalAnual>0.000000</tasaNominalAnual>
            <totalPrestamo>35652.86</totalPrestamo>
            <valorCuota>5942.14</valorCuota>
            <tasaEfectivaAnual>0.000000</tasaEfectivaAnual>
            <operacionUId>1608</operacionUId>
            <tasa>0.000000</tasa>
            <fechaPrimerPago>2020-02-01</fechaPrimerPago>
            <fechaVencimiento>2020-07-01</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>181</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <plazo>180</plazo>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>110675</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularDespejandoFechaVtoTasa</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-03-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>13:06:04</Hora>
         </Btoutreq>
      </BTPrestamos.SimularDespejandoFechaVtoTasaResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
   "Btinreq": {
      "Device": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "d25cdaf98eCD285A89A23FBE"
   },
   "sdtSimulacionPrestamo": {
	  "otrosConceptos": {
	  	"sBTConcepto": []
	  },
      "fechaValor": "2020-01-01",
      "capital": "20000.00",
      "cronograma": {
         "sBTCuotaPrestamoAlta": [
            {
               "importe": "7465.93",
               "redondeo": "0.00",
               "fechaPago": "2020-02-01"
            },
            {
               "importe": "7144.25",
               "redondeo": "0.00",
               "fechaPago": "2020-03-01"
            },
            {
               "importe": "6792.17",
               "redondeo": "0.00",
               "fechaPago": "2020-04-01"
            },
            {
               "importe": "6406.83",
               "redondeo": "0.00",
               "fechaPago": "2020-05-01"
            },
            {
               "importe": "5985.07",
               "redondeo": "0.00",
               "fechaPago": "2020-06-01"
            },
            {
               "importe": "1858.61",
               "redondeo": "0.00",
               "fechaPago": "2020-07-01"
            }
         ]
      },
      "tasaEfectiva": "0.000000",
      "intereses": "6335.15",
      "tasaNominalAnual": "0.000000",
      "totalPrestamo": "35652.86",
      "valorCuota": "5942.14",
      "tasaEfectivaAnual": "0.000000",
      "operacionUId": "1608",
      "tasa": "0.000000",
      "fechaPrimerPago": "2020-02-01",
      "fechaVencimiento": "2020-07-01",
      "producto": {
         "papel": "$",
         "moneda": "$",
         "productoUId": "181",
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      },
      "plazo": "180"
   },
   "Erroresnegocio": {
        "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "110675",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularDespejandoFechaVtoTasa",
      "Requerimiento": "1",
      "Fecha": "2021-03-18",
      "Canal": "BTDIGITAL",
      "Hora": "13:06:04"
   }
}
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtPrestamoAlta | sBTPrestamoAltaConDespeje | Datos del préstamo a dar de alta.
modoDespeje  | Short | [Hidden: Valor fijo 7 para este método].

Los campos del tipo de dato estructurado sBTPrestamoAltaConDespeje son los siguientes:

| Campo           | Tipo   | Comentarios                 |
| --------------- | ------ | --------------------------- |
| clienteUId      | Long   | Identificador del cliente.  |
| productoUId     | Long   | Identificador del producto. |
| fechaPrimerPago | Date   | Fecha primer pago.          |
| cantidadCuotas  | Int    | Cantidad de cuotas.         |
| periodoCuotas   | Int    | Período entre cuotas.       |
| plazoTotal      | Int    | Plazo total.                |
| valorCuota      | Double | Valor cuota.                |
| monto           | Double | Monto del préstamo.         |
| pizarra         | Short  | Código de pizarra.          |
| tasa            | Double | Tasa.                       |
| actividad       | Long   | Código de actividad.        |

### Datos de salida

| Nombre                | Tipo                  | Comentarios             |
| --------------------- | --------------------- | ----------------------- |
| sdtSimulacionPrestamo | sBTSimulacionPrestamo | Datos de la simulación. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo.                            |
| otrosConceptos    | sBTConcepto          | Importe otros conceptos.          |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recibió el identificador de producto.     |
| 30003  | No se recuperó la cuenta para el Identificador: |

## Simular Despejando Fecha de Vencimiento y Tasa Sin Cliente

Método para simular un préstamo sin cliente despejando fecha de vencimiento y tasa.

| Nombre publicación                          | Programa | Global/País |
| ------------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularDespejandoFechaVtoTasaSC | RBTPG466 | Global      |

> Ejemplo de invocación al método Simular Despejando Fecha de Vencimiento y Tasa Sin Cliente:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularDespejandoFechaVtoTasaSC>
         <bts:Btinreq>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Device>GP</bts:Device>
            <bts:Token>387E2B35D9F43B80C31D1FF0</bts:Token>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>71</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas></bts:cantidadCuotas>
            <bts:tasa></bts:tasa>
            <bts:fechaPrimerPago>2020-11-13</bts:fechaPrimerPago>
            <bts:pizarra></bts:pizarra>
         </bts:sdtPrestamoAlta>
      </bts:BTPrestamos.SimularDespejandoFechaVtoTasaSC>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SSimularDespejandoFechaVtoTasaSC' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
		"Btinreq": {
			"Canal": "BTDIGITAL",
			"Requerimiento": "1",
			"Usuario": "INSTALADOR",
			"Token": "d25cdaf98eCD285A89A23FBE",
			"Device": "BTDIGITAL"		
		}, 
		"sdtPrestamoAlta": {
         "plazoTotal": "300",
         "productoUId": "71",
         "monto": "20000",
         "actividad": "1111",
         "valorCuota": "5000",
         "periodoCuotas": "30",
         "cantidadCuotas": "",
         "tasa": "",
         "fechaPrimerPago": "2020-11-13",
         "pizarra": ""
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
      <BTPrestamos.SimularDespejandoFechaVtoTasaSCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>387E2B35D9F43B80C31D1FF0</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <cft>268.850000</cft>
            <plazo>180</plazo>
            <tasa>0.000000</tasa>
            <impuestos>1596.620000</impuestos>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <fechaVencimiento>2021-04-13</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>71</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <intereses>7228.75</intereses>
            <fechaPrimerPago>2020-11-13</fechaPrimerPago>
            <comisiones>0.000000</comisiones>
            <valorCuota>5000.00</valorCuota>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-12-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-01-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-02-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-03-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>4539.08</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-04-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
            </cronograma>
            <totalPrestamo>29567.68</totalPrestamo>
            <capital>20000.00</capital>
            <operacionUId>1</operacionUId>
            <tasaEfectivaAnual>0.000000</tasaEfectivaAnual>
            <seguros>720.000000</seguros>
            <tasaNominalAnual>0.000000</tasaNominalAnual>
            <fechaValor>2020-10-13</fechaValor>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11918</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularDespejandoFechaVtoTasaSC</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-19</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:07:52</Hora>
         </Btoutreq>
      </BTPrestamos.SimularDespejandoFechaVtoTasaSCResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
   "Btinreq": {
      "Device": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "d25cdaf98eCD285A89A23FBE"
   },
   "sdtSimulacionPrestamo": {
      "cft": "268.850000",
      "plazo": "180",
      "tasa": "0.000000",
      "impuestos": "1596.620000",
      "tasaEfectiva": "0.000000",
      "fechaVencimiento": "2021-04-13",
      "producto": {
         "papel": "$",
         "moneda": "$",
         "productoUId": "71",
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      },
      "intereses": "7228.75",
      "fechaPrimerPago": "2020-11-13",
      "comisiones": "0.000000",
      "valorCuota": "5000.00",
      "otrosConceptos": "",
      "cronograma": {
         "SdtsBTCuotaPrestamoAlta": [
            {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2020-11-13"
            },
            {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2020-12-13"
            },
            {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-01-13"
            },
            {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-02-13"
            },
            {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2021-03-13"
            },
            {
               "importe": "4539.08",
               "redondeo": "0.00",
               "fechaPago": "2021-04-13"
            }
         ]
      },
      "totalPrestamo": "29567.68",
      "capital": "20000.00",
      "operacionUId": "1",
      "tasaEfectivaAnual": "0.000000",
      "seguros": "720.000000",
      "tasaNominalAnual": "0.000000",
      "fechaValor": "2020-10-13"
   },
   "Erroresnegocio": {
        "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "110675",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularDespejandoFechaVtoTasaSC",
      "Requerimiento": "1",
      "Fecha": "2021-03-18",
      "Canal": "BTDIGITAL",
      "Hora": "13:06:04"
   }
}
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtPrestamoAlta | SdtsBTDatosDespejeSinCliente | Datos del préstamo a dar de alta.
modoDespeje  | Short | [Hidden: Valor fijo 7 para este método].

Los campos del tipo de dato estructurado SdtsBTDatosDespejeSinCliente son los siguientes:

| Campo           | Tipo   | Comentarios                 |
| --------------- | ------ | --------------------------- |
| productoUId     | Long   | Identificador del producto. |
| fechaPrimerPago | Date   | Fecha primer pago.          |
| cantidadCuotas  | Int    | Cantidad de cuotas.         |
| periodoCuotas   | Int    | Período entre cuotas.       |
| plazoTotal      | Int    | Plazo total.                |
| valorCuota      | Double | Valor cuota.                |
| monto           | Double | Monto del préstamo.         |
| pizarra         | Short  | Código de pizarra.          |
| tasa            | Double | Tasa.                       |
| actividad       | Long   | Código de actividad.        |

### Datos de salida

| Nombre                | Tipo                  | Comentarios             |
| --------------------- | --------------------- | ----------------------- |
| sdtSimulacionPrestamo | sBTSimulacionPrestamo | Datos de la simulación. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo.                            |
| otrosConceptos    | sBTConcepto          | Importe otros conceptos.          |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Errores

| Código | Descripción                                                                |
| ------ | -------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.                                 |
| 30002  | No se recibió el identificador de producto.                                |
| 30003  | No se recuperó la cuenta para el Identificador: [Número de Identificador]. |

## Simular Ingresando Balloon

Método para simular un préstamo ingresando el balloon.

| Nombre publicación                   | Programa | Global/País |
| ------------------------------------ | -------- | ----------- |
| BTPrestamos.SimularIngresandoBalloon | RBTPG322 | Global      |

> Ejemplo de invocación al método Simular Ingresando Balloon:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularIngresandoBalloon>
         <bts:Btinreq>
            <bts:Device>BTDIGITAL</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>d25cdaf98eCD285A89A23FBE</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>181</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:clienteUId>342</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:tasa>0</bts:tasa>
            <bts:fechaPrimerPago>10-10-2021</bts:fechaPrimerPago>
            <bts:pizarra>0</bts:pizarra>
         </bts:sdtPrestamoAlta>
      </bts:BTPrestamos.SimularIngresandoBalloon>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularIngresandoBalloon' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
		"Btinreq": {
			"Canal": "BTDIGITAL",
			"Requerimiento": "1",
			"Usuario": "INSTALADOR",
			"Token": "d25cdaf98eCD285A89A23FBE",
			"Device": "BTDIGITAL"		
		}, 
		"sdtPrestamoAlta":{
		   "plazoTotal": "300",
		   "productoUId": "181",
		   "monto": "20000",
		   "clienteUId": "342",
		   "actividad": "1111",
		   "valorCuota": "5000",
		   "periodoCuotas": "30",
		   "cantidadCuotas": "12",
		   "tasa": "0",
		   "fechaPrimerPago": "10-10-2021",
		   "pizarra": "0"
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
      <BTPrestamos.SimularIngresandoBalloonResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>BTDIGITAL</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>d25cdaf98eCD285A89A23FBE</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2020-01-01</fechaValor>
            <capital>45587.56</capital>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>9594.84</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-02-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>9230.36</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-03-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>8859.63</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-04-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>8482.52</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-05-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>8098.96</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-06-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>7708.80</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-07-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>7311.97</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-08-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6908.30</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-09-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6497.72</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-10-01</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>6080.09</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-01</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>4412.43</intereses>
            <tasaNominalAnual>20.878536</tasaNominalAnual>
            <totalPrestamo>78773.19</totalPrestamo>
            <valorCuota>7877.32</valorCuota>
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual>
            <operacionUId>1607</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-02-01</fechaPrimerPago>
            <fechaVencimiento>2020-11-01</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>181</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <plazo>300</plazo>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>110672</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularIngresandoBalloon</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2021-03-18</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:34:44</Hora>
         </Btoutreq>
      </BTPrestamos.SimularIngresandoBalloonResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
   "Btinreq": {
      "Device": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "d25cdaf98eCD285A89A23FBE"
   },
   "sdtSimulacionPrestamo": {
	  "otrosConceptos": {
	  	"sBTConcepto": []
	  },
      "fechaValor": "2020-01-01",
      "capital": "45587.56",
      "cronograma": {
         "sBTCuotaPrestamoAlta": [
            {
               "importe": "9594.84",
               "redondeo": "0.00",
               "fechaPago": "2020-02-01"
            },
            {
               "importe": "9230.36",
               "redondeo": "0.00",
               "fechaPago": "2020-03-01"
            },
            {
               "importe": "8859.63",
               "redondeo": "0.00",
               "fechaPago": "2020-04-01"
            },
            {
               "importe": "8482.52",
               "redondeo": "0.00",
               "fechaPago": "2020-05-01"
            },
            {
               "importe": "8098.96",
               "redondeo": "0.00",
               "fechaPago": "2020-06-01"
            },
            {
               "importe": "7708.80",
               "redondeo": "0.00",
               "fechaPago": "2020-07-01"
            },
            {
               "importe": "7311.97",
               "redondeo": "0.00",
               "fechaPago": "2020-08-01"
            },
            {
               "importe": "6908.30",
               "redondeo": "0.00",
               "fechaPago": "2020-09-01"
            },
            {
               "importe": "6497.72",
               "redondeo": "0.00",
               "fechaPago": "2020-10-01"
            },
            {
               "importe": "6080.09",
               "redondeo": "0.00",
               "fechaPago": "2020-11-01"
            }
         ]
      },
      "tasaEfectiva": "0.000000",
      "intereses": "4412.43",
      "tasaNominalAnual": "20.878536",
      "totalPrestamo": "78773.19",
      "valorCuota": "7877.32",
      "tasaEfectivaAnual": "23.000000",
      "operacionUId": "1607",
      "tasa": "23.000000",
      "fechaPrimerPago": "2020-02-01",
      "fechaVencimiento": "2020-11-01",
      "producto": {
         "papel": "$",
         "moneda": "$",
         "productoUId": "181",
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      },
      "plazo": "300"
   },
   "Erroresnegocio": {
        "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "110672",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularIngresandoBalloon",
      "Requerimiento": "1",
      "Fecha": "2021-03-18",
      "Canal": "BTDIGITAL",
      "Hora": "12:34:44"
   }
}
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtPrestamoAlta | sBTPrestamoAltaConDespeje | Datos del préstamo a dar de alta.
modoDespeje  | Short | [Hidden: Valor fijo 6 para este método].

Los campos del tipo de dato estructurado sBTPrestamoAltaConDespeje son los siguientes:

| Campo           | Tipo   | Comentarios                 |
| --------------- | ------ | --------------------------- |
| clienteUId      | Long   | Identificador del cliente.  |
| productoUId     | Long   | Identificador del producto. |
| fechaPrimerPago | Date   | Fecha primer pago.          |
| cantidadCuotas  | Int    | Cantidad de cuotas.         |
| periodoCuotas   | Int    | Período entre cuotas.       |
| plazoTotal      | Int    | Plazo total.                |
| valorCuota      | Double | Valor cuota.                |
| monto           | Double | Monto del préstamo.         |
| pizarra         | Short  | Código de pizarra.          |
| tasa            | Double | Tasa.                       |
| actividad       | Long   | Código de actividad.        |

### Datos de salida

| Nombre                | Tipo                  | Comentarios             |
| --------------------- | --------------------- | ----------------------- |
| sdtSimulacionPrestamo | sBTSimulacionPrestamo | Datos de la simulación. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo.                            |
| otrosConceptos    | sBTConcepto          | Importe otros conceptos.          |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Errores

| Código | Descripción                                     |
| ------ | ----------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.      |
| 30002  | No se recibió el identificador de producto.     |
| 30003  | No se recuperó la cuenta para el Identificador: |

## Simular Ingresando Balloon Sin Cliente

Método para simular un préstamo sin cliente ingresando el balloon.

| Nombre publicación                     | Programa | Global/País |
| -------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularIngresandoBalloonSC | RBTPG466 | Global      |

> Ejemplo de invocación al método Simular Ingresando Balloon Sin Cliente:

<code-group>
<code-block title="XML" active>
```xml
<bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>71</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas/>
            <bts:tasa/>
            <bts:fechaPrimerPago>2020-11-13</bts:fechaPrimerPago>
            <bts:pizarra/>
         </bts:sdtPrestamoAlta>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularIngresandoBalloonSC' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '{
		"Btinreq": {
			"Canal": "BTDIGITAL",
			"Requerimiento": "1",
			"Usuario": "INSTALADOR",
			"Token": "d25cdaf98eCD285A89A23FBE",
			"Device": "BTDIGITAL"		
		}, 
		"sdtPrestamoAlta": {
         "plazoTotal": "300",
         "productoUId": "71",
         "monto": "20000",
         "actividad": "1111",
         "valorCuota": "5000",
         "periodoCuotas": "30",
         "cantidadCuotas": "",
         "tasa": "",
         "fechaPrimerPago": "2020-11-13",
         "pizarra": ""
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
      <BTPrestamos.SimularIngresandoBalloonSCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>387E2B35D9F43B80C31D1FF0</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <cft>27.380000</cft>
            <plazo>31</plazo>
            <tasa>23.000000</tasa>
            <impuestos>82.850000</impuestos>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <fechaVencimiento>2020-11-14</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>71</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <intereses>348.02</intereses>
            <fechaPrimerPago>2020-11-13</fechaPrimerPago>
            <comisiones>0.000000</comisiones>
            <valorCuota>15544.58</valorCuota>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>15544.58</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-14</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
            </cronograma>
            <totalPrestamo>20573.18</totalPrestamo>
            <capital>20000.00</capital>
            <operacionUId>1</operacionUId>
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual>
            <seguros>120.000000</seguros>
            <tasaNominalAnual>20.881010</tasaNominalAnual>
            <fechaValor>2020-10-13</fechaValor>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11920</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularIngresandoBalloonSC</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-19</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>11:36:39</Hora>
         </Btoutreq>
      </BTPrestamos.SimularIngresandoBalloonSCResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
{
   "Btinreq": {
      "Device": "BTDIGITAL",
      "Usuario": "INSTALADOR",
      "Requerimiento": "1",
      "Canal": "BTDIGITAL",
      "Token": "d25cdaf98eCD285A89A23FBE"
   },
   "sdtSimulacionPrestamo": {
      "cft": "27.380000",
      "plazo": "31",
      "tasa": "23.000000",
      "impuestos": "82.850000",
      "tasaEfectiva": "0.000000",
      "fechaVencimiento": "2020-11-14",
      "producto": {
         "papel": "$",
         "moneda": "$",
         "productoUId": "71",
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      },
      "intereses": "348.02",
      "fechaPrimerPago": "2020-11-13",
      "comisiones": "0.000000",
      "valorCuota": "15544.58",
      "otrosConceptos": "",
      "cronograma": {
         "SdtsBTCuotaPrestamoAlta": [
            {
               "importe": "15544.58",
               "redondeo": "0.00",
               "fechaPago": "2020-11-13"
            },
            {
               "importe": "5000.00",
               "redondeo": "0.00",
               "fechaPago": "2020-11-14"
            }
         ]
      },
      "totalPrestamo": "20573.18",
      "capital": "20000.00",
      "operacionUId": "1",
      "tasaEfectivaAnual": "23.000000",
      "seguros": "120.000000",
      "tasaNominalAnual": "20.881010",
      "fechaValor": "2020-10-13"
   },
   "Erroresnegocio": {
        "BTErrorNegocio": []
   },
   "Btoutreq": {
      "Numero": "110672",
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularIngresandoBalloonSC",
      "Requerimiento": "1",
      "Fecha": "2021-03-18",
      "Canal": "BTDIGITAL",
      "Hora": "12:34:44"
   }
}
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtPrestamoAlta | SdtsBTDatosDespejeSinCliente | Datos del préstamo a dar de alta.
modoDespeje  | Short | [Hidden: Valor fijo 6 para este método].

Los campos del tipo de dato estructurado SdtsBTDatosDespejeSinCliente son los siguientes:

| Campo           | Tipo   | Comentarios                 |
| --------------- | ------ | --------------------------- |
| productoUId     | Long   | Identificador del producto. |
| fechaPrimerPago | Date   | Fecha primer pago.          |
| cantidadCuotas  | Int    | Cantidad de cuotas.         |
| periodoCuotas   | Int    | Período entre cuotas.       |
| plazoTotal      | Int    | Plazo total.                |
| valorCuota      | Double | Valor cuota.                |
| monto           | Double | Monto del préstamo.         |
| pizarra         | Short  | Código de pizarra.          |
| tasa            | Double | Tasa.                       |
| actividad       | Long   | Código de actividad.        |

### Datos de salida

| Nombre                | Tipo                  | Comentarios             |
| --------------------- | --------------------- | ----------------------- |
| sdtSimulacionPrestamo | sBTSimulacionPrestamo | Datos de la simulación. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo.                            |
| otrosConceptos    | sBTConcepto          | Importe otros conceptos.          |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios |
| -------- | ------ | ----------- |
| concepto | String | Concepto.   |
| valor    | Double | Importe.    |
| texto    | String | Texto.      |

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Errores

| Código | Descripción                                                                |
| ------ | -------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.                                 |
| 30002  | No se recibió el identificador de producto.                                |
| 30003  | No se recuperó la cuenta para el Identificador: [Número de Identificador]. |

## Simular Ingresando Seguros

Método para simular el alta de un prestamo ingresando los seguros a aplicar. Se permite el ingreso de seguros cualesquiera que se encuentren preseteados para el producto, siempre y cuando los importes de los mismos se resuelvan automáticamente.

| Nombre publicación                   | Programa | Global/País |
| ------------------------------------ | -------- | ----------- |
| BTPrestamos.SimularIngresandoSeguros | RBTPG509 | Global      |

> Ejemplo de invocación al método Simular Ingresando Seguros:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularIngresandoSeguros>
         <bts:Btinreq>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Device>GL</bts:Device>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Token>01D45E9964612A4C8CCB1055</bts:Token>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:fechaPrimerPago>2019-01-12</bts:fechaPrimerPago>
            <bts:monto>10000</bts:monto>
            <bts:tasa>0</bts:tasa>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:productoUId>61</bts:productoUId>
            <bts:pizarra>0</bts:pizarra>
            <bts:clienteUId>4</bts:clienteUId>
            <bts:actividad>11200</bts:actividad>
         </bts:sdtPrestamoAlta>
         <bts:sinSeguros>N</bts:sinSeuros>
         <bts:sdtSeguros>
            <bts:sBTSegurosSimulacion>
                <bts:codigo>100</bts:codigo>
            </bts:sBTSegurosSimulacion>
         </bts:sdtSeguros>
      </bts:BTPrestamos.SimularIngresandoSeguros>
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
          "Canal": "BTDIGITAL",
          "Usuario": "MINSTALADOR",
          "Device": "GL",
          "Requerimiento": 1,
          "Token": "01D45E9964612A4C8CCB1055"
        },
        "sdtPrestamoAlta": {
          "fechaPrimerPago": "2019-01-12",
          "monto": 10000,
          "tasa": 0,
          "periodoCuotas": 30,
          "cantidadCuotas": 12,
          "productoUId": 61,
          "pizarra": 0,
          "clienteUId": 4,
          "actividad": 11200
        },
        "sinSeguros": "N",
        "sdtSeguros": {
          "sBTSegurosSimulacion": {
            "codigo": 100
          }
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
      <BTPrestamos.SimularIngresandoSegurosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>72e34bcd9d4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos>
                <sBTConceptos>
                    <concepto>100</concepto>
                    <valor>1500.00</valor>
                    <texto>Seguro vida</texto>
                </sBTConceptos>
            </otrosConceptos>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-01-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-02-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-03-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-04-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-05-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-06-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-07-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-08-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-09-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-10-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.01</importe>
                  <fechaPago>2019-11-12</fechaPago>
               </sBTCuotaPrestamoAlta>
               <sBTCuotaPrestamoAlta>
                  <importe>1194.04</importe>
                  <fechaPago>2019-12-12</fechaPago>
               </sBTCuotaPrestamoAlta>
            </cronograma>
            <fechaValor>2018-12-11</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>1288.18</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>14328.15</totalPrestamo>
            <valorCuota>1194.01</valorCuota>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <operacionUId>1</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2019-01-12</fechaPrimerPago>
            <fechaVencimiento>2019-12-12</fechaVencimiento>
            <plazo>361</plazo>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>61</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>623</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularIngresandoSeguros</Servicio>
            <Fecha>2019-11-20</Fecha>
            <Requerimiento>1</Requerimiento>
            <Hora>09:23:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularIngresandoSegurosResponse>
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
          "Requerimiento": 1,
          "Canal": "BTDIGITAL",
          "Token": "72e34bcd9d4A8B5C60A82434"
        },
        "sdtSimulacion": {
          "otrosConceptos": {
            "sBTConceptos": {
              "concepto": 100,
              "valor": 1500,
              "texto": "Seguro vida"
            }
          },
          "cronograma": {
            "sBTCuotaPrestamoAlta": [
              {
                "importe": 1194.01,
                "fechaPago": "2019-01-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-02-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-03-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-04-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-05-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-06-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-07-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-08-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-09-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-10-12"
              },
              {
                "importe": 1194.01,
                "fechaPago": "2019-11-12"
              },
              {
                "importe": 1194.04,
                "fechaPago": "2019-12-12"
              }
            ]
          },
          "fechaValor": "2018-12-11",
          "capital": 10000,
          "tasaEfectiva": 0,
          "intereses": 1288.18,
          "tasaNominalAnual": 23,
          "totalPrestamo": 14328.15,
          "valorCuota": 1194.01,
          "tasaEfectivaAnual": 25.590075,
          "operacionUId": 1,
          "tasa": 23,
          "fechaPrimerPago": "2019-01-12",
          "fechaVencimiento": "2019-12-12",
          "plazo": 361,
          "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": 61,
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
          }
        },
        "Erroresnegocio": "",
        "Btoutreq": {
          "Numero": 623,
          "Estado": "OK",
          "Servicio": "BTPrestamos.SimularIngresandoSeguros",
          "Fecha": "2019-11-20",
          "Requerimiento": 1,
          "Hora": "09:23:04",
          "Canal": "BTDIGITAL"
        }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre          | Tipo                 | Comentarios                                                                                                                                        |
| --------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| sdtPrestamoAlta | sBTPrestamoAlta      | Datos de la simulación.                                                                                                                            |
| sinSeguros      | String               | Acción a tomar cuando la lista de seguros a aplicar es vacía (S: Simula sin tener en cuenta ningún seguro, N: Simula con los seguros preseteados). |
| sdtSeguros      | sBTSegurosSimulacion | Listado de códigos de seguros a aplicar.                                                                                                           |

Los campos del tipo de dato estructurado sBTPrestamoAlta son los siguientes:

| Campo           | Tipo   | Comentarios                                                            |
| --------------- | ------ | ---------------------------------------------------------------------- |
| clienteUId      | Long   | Identificador único de cliente.                                        |
| productoUId     | Long   | Identificador único de producto.                                       |
| fechaPrimerPago | Date   | Fecha de primer pago.                                                  |
| cantidadCuotas  | Int    | Cantidad de cuotas.                                                    |
| monto           | Double | Capital solicitado.                                                    |
| pizarra         | Short  | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. |
| tasa            | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.      |
| actividad       | Long   | Código de actividad (Destino del crédito).                             |

Los campos del tipo de dato estructurado sBTSegurosSimulacion son los siguientes:

| Campo  | Tipo | Comentarios                 |
| ------ | ---- | --------------------------- |
| codigo | Int  | Código de seguro a aplicar. |

### Datos de salida

| Nombre                | Tipo                  | Comentarios                       |
| --------------------- | --------------------- | --------------------------------- |
| sBTSimulacionPrestamo | sBTSimulacionPrestamo | Datos de simulación del prestamo. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo del préstamo.               |
| otrosConceptos    | sBTConcepto          | Otros conceptos.                  |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios             |
| -------- | ------ | ----------------------- |
| concepto | String | Codigo del seguro.      |
| valor    | Double | Importe del seguro.     |
| texto    | String | Descripcion del seguro. |

### Errores

| Código | Descripción                                                                |
| ------ | -------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de producto.                                |
| 30002  | No se recuperó la cuenta para el Identificador: [Número de identificador]. |

## Simular Ingresando Seguros Sin Cliente

Método para simular el alta de un prestamo sin cliente ingresando los seguros a aplicar. Se permite el ingreso de seguros cualesquiera que se encuentren preseteados para el producto, siempre y cuando los importes de los mismos se resuelvan automáticamente.

| Nombre publicación                     | Programa | Global/País |
| -------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularIngresandoSegurosSC | RBTPG467 | Global      |

> Ejemplo de invocación al método Simular Ingresando Seguros Sin Clientes:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularIngresandoSegurosSC>
         <bts:Btinreq>
            <bts:Device>GP</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>387E2B35D9F43B80C31D1FF0</bts:Token>
            <bts:Usuario>INSTALADOR</bts:Usuario>
            <bts:Requerimiento>1</bts:Requerimiento>
         </bts:Btinreq>
         <bts:sdtPrestamoAlta>
            <bts:plazoTotal>300</bts:plazoTotal>
            <bts:productoUId>71</bts:productoUId>
            <bts:monto>20000</bts:monto>
            <bts:actividad>1111</bts:actividad>
            <bts:valorCuota>5000</bts:valorCuota>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas></bts:cantidadCuotas>
            <bts:tasa></bts:tasa>
            <bts:fechaPrimerPago>2020-11-13</bts:fechaPrimerPago>
            <bts:pizarra></bts:pizarra>
         </bts:sdtPrestamoAlta>
         <bts:sinSeguros>N</bts:sinSeguros>
         <bts:sdtSeguros>
            <bts:sBTSeguroSimulacion>
               <bts:codigo>100</bts:codigo>
            </bts:sBTSeguroSimulacion>
         </bts:sdtSeguros>
      </bts:BTPrestamos.SimularIngresandoSegurosSC>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularIngresandoSegurosSC' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \
  -d '{
	"Btinreq": {
      "Canal": "BTDIGITAL",
      "Usuario": "MINSTALADOR",
      "Device": "GL",
      "Requerimiento": 1,
      "Token": "01D45E9964612A4C8CCB1055"
   },
   "sdtPrestamoAlta": {
      "plazoTotal": "300",
      "productoUId": "71",
      "monto": "20000",
      "actividad": "1111",
      "valorCuota": "5000",
      "periodoCuotas": "30",
      "cantidadCuotas": "",
      "tasa": "",
      "fechaPrimerPago": "2020-11-13",
      "pizarra": ""
   },
   "sinSeguros": "N",
   "sdtSeguros": {
      "sBTSeguroSimulacion": {
      "codigo": "100"
      }
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
      <BTPrestamos.SimularIngresandoSegurosSCResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>GP</Device>
            <Usuario>INSTALADOR</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>387E2B35D9F43B80C31D1FF0</Token>
         </Btinreq>
         <sdtSimulacionPrestamo>
            <cft>28.210000</cft>
            <plazo>360</plazo>
            <tasa>23.000000</tasa>
            <impuestos>452.410000</impuestos>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <fechaVencimiento>2021-10-13</fechaVencimiento>
            <producto>
               <papel>$</papel>
               <moneda>$</moneda>
               <productoUId>71</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <intereses>2027.72</intereses>
            <fechaPrimerPago>2020-11-13</fechaPrimerPago>
            <comisiones>0.000000</comisiones>
            <valorCuota>5000.00</valorCuota>
            <otrosConceptos>
               <SdtsBTConcepto>
                  <texto>SANCOR - Vida - Variante 1</texto>
                  <valor>1440.00</valor>
                  <concepto>100</concepto>
               </SdtsBTConcepto>
            </otrosConceptos>
            <cronograma>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>5000.00</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-11-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2020-12-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-01-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-02-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-03-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-04-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-05-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-06-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-07-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-08-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-09-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
               <SdtsBTCuotaPrestamoAlta>
                  <importe>1719.44</importe>
                  <redondeo>0.00</redondeo>
                  <fechaPago>2021-10-13</fechaPago>
               </SdtsBTCuotaPrestamoAlta>
            </cronograma>
            <totalPrestamo>23942.44</totalPrestamo>
            <capital>20000.00</capital>
            <operacionUId>1</operacionUId>
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual>
            <seguros>1440.000000</seguros>
            <tasaNominalAnual>20.881010</tasaNominalAnual>
            <fechaValor>2020-10-13</fechaValor>
         </sdtSimulacionPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>11921</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularIngresandoSegurosSC</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2023-05-19</Fecha>
            <Canal>BTDIGITAL</Canal>
            <Hora>12:42:21</Hora>
         </Btoutreq>
      </BTPrestamos.SimularIngresandoSegurosSCResponse>
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
      "Requerimiento": 1,
      "Canal": "BTDIGITAL",
      "Token": "72e34bcd9d4A8B5C60A82434"
   },
   "sdtSimulacionPrestamo": {
      "cft": "28.210000",
      "plazo": "360",
      "tasa": "23.000000",
      "impuestos": "452.410000",
      "tasaEfectiva": "0.000000",
      "fechaVencimiento": "2021-10-13",
      "producto": {
      "papel": "$",
      "moneda": "$",
      "productoUId": "71",
      "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF"
      },
      "intereses": "2027.72",
      "fechaPrimerPago": "2020-11-13",
      "comisiones": "0.000000",
      "valorCuota": "5000.00",
      "otrosConceptos": {
      "SdtsBTConcepto": {
         "texto": "SANCOR - Vida - Variante 1",
         "valor": "1440.00",
         "concepto": "100"
      }
      },
      "cronograma": {
      "SdtsBTCuotaPrestamoAlta": [
         {
            "importe": "5000.00",
            "redondeo": "0.00",
            "fechaPago": "2020-11-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2020-12-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-01-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-02-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-03-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-04-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-05-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-06-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-07-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-08-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-09-13"
         },
         {
            "importe": "1719.44",
            "redondeo": "0.00",
            "fechaPago": "2021-10-13"
         }
      ]
      },
      "totalPrestamo": "23942.44",
      "capital": "20000.00",
      "operacionUId": "1",
      "tasaEfectivaAnual": "23.000000",
      "seguros": "1440.000000",
      "tasaNominalAnual": "20.881010",
      "fechaValor": "2020-10-13"
   },
   "Erroresnegocio": "",
   "Btoutreq": {
      "Numero": 623,
      "Estado": "OK",
      "Servicio": "BTPrestamos.SimularIngresandoSeguros",
      "Fecha": "2019-11-20",
      "Requerimiento": 1,
      "Hora": "09:23:04",
      "Canal": "BTDIGITAL"
   }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre          | Tipo                         | Comentarios                                                                                                                                        |
| --------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| sdtPrestamoAlta | SdtsBTDatosDespejeSinCliente | Datos de la simulación.                                                                                                                            |
| sinSeguros      | String                       | Acción a tomar cuando la lista de seguros a aplicar es vacía (S: Simula sin tener en cuenta ningún seguro, N: Simula con los seguros preseteados). |
| sdtSeguros      | sBTSegurosSimulacion         | Listado de códigos de seguros a aplicar.                                                                                                           |

Los campos del tipo de dato estructurado SdtsBTDatosDespejeSinCliente son los siguientes:

| Campo           | Tipo   | Comentarios                 |
| --------------- | ------ | --------------------------- |
| productoUId     | Long   | Identificador del producto. |
| fechaPrimerPago | Date   | Fecha primer pago.          |
| cantidadCuotas  | Int    | Cantidad de cuotas.         |
| periodoCuotas   | Int    | Período entre cuotas.       |
| plazoTotal      | Int    | Plazo total.                |
| valorCuota      | Double | Valor cuota.                |
| monto           | Double | Monto del préstamo.         |
| pizarra         | Short  | Código de pizarra.          |
| tasa            | Double | Tasa.                       |
| actividad       | Long   | Código de actividad.        |

Los campos del tipo de dato estructurado sBTSegurosSimulacion son los siguientes:

| Campo  | Tipo | Comentarios                 |
| ------ | ---- | --------------------------- |
| codigo | Int  | Código de seguro a aplicar. |

### Datos de salida

| Nombre                | Tipo                  | Comentarios                       |
| --------------------- | --------------------- | --------------------------------- |
| sBTSimulacionPrestamo | sBTSimulacionPrestamo | Datos de simulación del prestamo. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                       |
| ----------------- | -------------------- | --------------------------------- |
| operacionUId      | Long                 | Identificador único de operación. |
| producto          | sBTProducto          | Datos del producto.               |
| capital           | Double               | Capital del préstamo.             |
| valorCuota        | Double               | Valor cuota.                      |
| intereses         | Double               | Intereses.                        |
| tasa              | Double               | Tasa.                             |
| tasaEfectiva      | Double               | Tasa efectiva.                    |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.              |
| tasaNominalAnual  | Double               | Tasa nominal anual.               |
| totalPrestamo     | Double               | Total a pagar.                    |
| fechaValor        | Date                 | Fecha valor.                      |
| fechaVencimiento  | Date                 | Fecha de vencimiento.             |
| fechaPrimerPago   | Date                 | Fecha de primer pago.             |
| plazo             | Int                  | Plazo del préstamo.               |
| otrosConceptos    | sBTConcepto          | Otros conceptos.                  |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

Los campos del tipo de dato estructurado sBTConcepto son los siguientes:

| Campo    | Tipo   | Comentarios             |
| -------- | ------ | ----------------------- |
| concepto | String | Codigo del seguro.      |
| valor    | Double | Importe del seguro.     |
| texto    | String | Descripcion del seguro. |

### Errores

| Código | Descripción                                                                |
| ------ | -------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de producto.                                |
| 30002  | No se recuperó la cuenta para el Identificador: [Número de identificador]. |

## Simular Libre Amortización

Método para simular el alta de un préstamo libre amortizacion.

| Nombre publicación                   | Programa | Global/País |
| ------------------------------------ | -------- | ----------- |
| BTPrestamos.SimularLibreAmortizacion | RBTPG231 | Global      |

> Ejemplo de invocación al método Simular Libre Amortización:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularLibreAmortizacion>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>fe9c2c642d4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtPrestamo>
            <bts:productoUId>75</bts:productoUId>
            <bts:monto>10000</bts:monto>
            <bts:clienteUId>221</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:periodoCuotas/>
            <bts:cantidadCuotas>?</bts:cantidadCuotas>
            <bts:tasa/>
            <bts:cuotasInteres/>
            <bts:pizarra/>
            <bts:cuotasCapital>
            	<bts:sBTCuotaPrestamoAlta>
            		<bts:fechaPago>2020-04-15</bts:fechaPago>
            		<bts:importe>3000</bts:importe>
            	</bts:sBTCuotaPrestamoAlta>
            	<bts:sBTCuotaPrestamoAlta>
            		<bts:fechaPago>2020-05-15</bts:fechaPago>
            		<bts:importe>3000</bts:importe>
            	</bts:sBTCuotaPrestamoAlta>
            	<bts:sBTCuotaPrestamoAlta>
            		<bts:fechaPago>2020-06-15</bts:fechaPago>
            		<bts:importe>4000</bts:importe>
            	</bts:sBTCuotaPrestamoAlta>
            	</bts:cuotasCapital>
         </bts:sdtPrestamo>
      </bts:BTPrestamos.SimularLibreAmortizacion>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularLibreAmortizacion \
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
        "sdtPrestamo": {
          "productoUId": "75",
          "monto": "10000",
          "clienteUId": "221",
          "actividad": "1111",
          "cantidadCuotas": "?",
          "cuotasCapital": {
            "sBTCuotaPrestamoAlta": [
              {
                "fechaPago": "2020-04-15",
                "importe": "3000"
              },
              {
                "fechaPago": "2020-05-15",
                "importe": "3000"
              },
              {
                "fechaPago": "2020-06-15",
                "importe": "4000"
              }
            ]
          }
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
      <BTPrestamos.SimularLibreAmortizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>fe9c2c642d4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-04-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>160.74</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>160.74</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-04-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>3000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>217.73</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>3217.73</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-05-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>102.21</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>102.21</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-05-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>3000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>216.38</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>3216.38</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-06-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>60.37</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>60.37</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-06-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>4000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>215.03</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>4215.03</cuota>
               </sBTCuotaSimulacion>
            </cronograma>
            <fechaValor>2020-03-13</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <impuestos>0.00</impuestos>
            <intereses>323.32</intereses>
            <tasaNominalAnual>17.522024</tasaNominalAnual>
            <totalPrestamo>10000.00</totalPrestamo>
            <tasaEfectivaAnual>19.000000</tasaEfectivaAnual>
            <operacionUId>682</operacionUId>
            <tasa>19.000000</tasa>
            <fechaPrimerPago>2020-04-15</fechaPrimerPago>
            <fechaVencimiento>2020-06-15</fechaVencimiento>
            <plazo>0</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS CONSUMO, Amortización Libre TF</nombre>
            </producto>
            <comisiones>0.00</comisiones>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12993</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularLibreAmortizacion</Servicio>
            <Requerimiento/>
            <Fecha>2019-03-06</Fecha>
            <Hora>13:00:00</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularLibreAmortizacionResponse>
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
    "sdtSimulacion": {
        "otrosConceptos": {
            "sBTConcepto": []
        },
        "capital": "10000.00",
        "fechaValor": "2018-10-30",
        "cronograma": {
            "sBTCuotaSimulacion": [
                {
                    "otrosConceptos": "0.00",
                    "capital": "2937.53",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "I",
                    "cuota": "2937.53",
                    "fechaPago": "2020-04-15",
                    "seguros": "0.00"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "3000.00",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "K",
                    "cuota": "3245.50",
                    "fechaPago": "2020-04-15",
                    "seguros": "245.50"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "102.21",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "I",
                    "cuota": "102.21",
                    "fechaPago": "2020-05-15",
                    "seguros": "0.00"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "3000.00",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "K",
                    "cuota": "3244.15",
                    "fechaPago": "2020-05-15",
                    "seguros": "244.15"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "60.37",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "I",
                    "cuota": "60.37",
                    "fechaPago": "2020-06-15",
                    "seguros": "0.00"
                },
                {
                    "otrosConceptos": "0.00",
                    "capital": "4000.00",
                    "impuestos": "0.00",
                    "intereses": "0.00",
                    "concepto": "",
                    "tipoCuota": "K",
                    "cuota": "4242.80",
                    "fechaPago": "2020-06-15",
                    "seguros": "242.80"
                }
            ]
        },
        "impuestos": "0.00",
        "tasaEfectiva": "0.000000",
        "intereses": "3100.11",
        "tasaNominalAnual": "17.522024",
        "totalPrestamo": "10000.00",
        "tasaEfectivaAnual": "19.000000",
        "operacionUId": "761",
        "tasa": "19.000000",
        "fechaPrimerPago": "2020-04-15",
        "fechaVencimiento": "2020-06-15",
        "plazo": "0",
        "producto": {
            "papel": "$",
            "moneda": "$",
            "productoUId": "0",
            "nombre": "PRÉSTAMOS CONSUMO, Amortización Libre TF"
        },
        "comisiones": "0.00"
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "13299",
        "Estado": "OK",
        "Servicio": "BTPrestamos.SimularLibreAmortizacion",
        "Fecha": "2019-04-24",
        "Requerimiento": "",
        "Hora": "10:35:16",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre             | Tipo              | Comentarios                                                          |
| ------------------ | ----------------- | -------------------------------------------------------------------- |
| sdtPrestamo        | sBTPrestamoAltaLA | Datos de la simulación.                                              |
| generaCuotaInteres | String            | Indica si se generan cuotas de intereses. [Hidden: Valores 'S'/'N']. |

Los campos del tipo de dato estructurado sBTPrestamoAltaLA son los siguientes:

| Campo          | Tipo                 | Comentarios                                                            |
| -------------- | -------------------- | ---------------------------------------------------------------------- |
| clienteUId\*   | Long                 | Identificador único de cliente.                                        |
| productoUId\*  | Long                 | Identificador único de producto.                                       |
| cantidadCuotas | Long                 | Cantidad de cuotas del préstamo.                                       |
| periodoCuotas  | Long                 | Período entre vencimiento de cada cuota.                               |
| monto          | Double               | Capital solicitado.                                                    |
| pizarra        | Short                | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. |
| tasa           | Double               | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.      |
| actividad      | Long                 | Código de actividad (Destino del crédito).                             |
| cuotasCapital  | sBTCuotaPrestamoAlta | Cuotas de capital.                                                     |
| cuotasInteres  | sBTCuotaPrestamoAlta | Cuotas de intereses.                                                   |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios               |
| --------- | ------ | ------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota |
| importe   | Double | Importe de la cuota       |

### Datos de salida

| Nombre        | Tipo                    | Comentarios                  |
| ------------- | ----------------------- | ---------------------------- |
| sdtSimulacion | sBTSimulacionPrestamoLA | Datos del préstamo simulado. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamoLA son los siguientes:

| Campo             | Tipo        | Comentarios                       |
| ----------------- | ----------- | --------------------------------- |
| operacionUId      | Long        | Identificador único de operación. |
| producto          | sBTProducto | Datos del producto.               |
| fechaValor        | Date        | Fecha valor.                      |
| fechaPrimerPago   | Date        | Fecha de primer pago.             |
| fechaVencimiento  | Date        | Fecha de vencimiento.             |
| capital           | Double      | Capital del préstamo.             |
| intereses         | Double      | Intereses.                        |
| impuestos         | Double      | Impuestos.                        |
| comisiones        | Double      | Comisiones.                       |
| totalPrestamo     | Double      | Total a pagar.                    |
| plazo             | Int         | Plazo.                            |
| tasa              | Double      | Tasa.                             |
| tasaEfectiva      | Double      | Tasa efectiva.                    |
| tasaEfectivaAnual | Double      | Tasa efectiva anual.              |
| tasaNominalAnual  | Double      | Tasa nominal anual.               |

otrosConceptos | sBTConcepto | Importe otros conceptos.
cronograma | sBTCuotaSimulacion | Cronograma del préstamo.

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

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

| Código | Descripción                                                        |
| ------ | ------------------------------------------------------------------ |
| 30001  | No se recibió el identificador de cliente.                         |
| 30002  | No se recibió el identificador de producto.                        |
| 30003  | No se recuperó la cuenta para el Identificador.                    |
| 30004  | El Identificador único de Producto es incorrecto.                  |
| 30005  | No se recibió la Fecha de Primer Pago desde el origen.             |
| 30006  | No se recibió el Monto de Capital desde el origen.                 |
| 31001  | La simulación no está vigente.                                     |
| 31002  | La simulación no existe.                                           |
| 40001  | La Cuenta indicada es incorrecta..                                 |
| 40012  | La Fecha de Primer Pago indicada es menor a la Fecha Valor.        |
| 40013  | La Fecha de Vencimiento indicada es menor a la Fecha Valor.        |
| 40014  | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimien. |
| 40015  | El Plazo Total indicado es incorrecto.                             |
| 40016  | La Cantidad de Cuotas indicada es menor al mínimo permitido.       |
| 40017  | La Cantidad de Cuotas indicada es mayor al máximo permitido.       |
| 40018  | La Cantidad de Cuotas indicada es incorrecta.                      |
| 40019  | La Cantidad de Cuotas indicada no está preseteada.                 |
| 40020  | El período entre Cuotas indicado es menor al mínimo permitido.     |
| 40021  | El período entre Cuotas indicado es mayor al máximo permitido.     |
| 40022  | El período entre Cuotas indicado es incorrecto.                    |
| 40023  | El período entre Cuotas indicado no está preseteado.               |
| 40024  | El Valor Cuota indicado es incorrecto.                             |
| 40025  | El Capital indicado es menor al mínimo permitido.                  |
| 40026  | El Capital indicado es mayor al máximo permitido.                  |
| 40027  | El Capital indicado es incorrecto.                                 |
| 40037  | La Clase de Tasa indicada es incorrecta.                           |
| 40040  | La Tasa Fija indicada está fuera de tolerancia.                    |
| 40041  | La Tasa indicada es mayor a la Tasa de Usura.                      |
| 40048  | El período indicado es incorrecto.                                 |
| 40049  | El Tipo de Tasa indicado es incorrecto.                            |
| 40054  | La Tasa indicada es incorrecta.                                    |
| 40071  | El Plazo Total de la Operación es mayor al máximo permitido.       |
| 40072  | El Plazo Total de la Operación es menor al mínimo permitido.       |
| 40076  | El Producto indicado no está Preseteado.                           |
| 40147  | No se cumple el período mínimo entre Fecha Valor y Fecha de Prime. |
| 40148  | El Capital indicado debe ser mayor al Valor Cuota.                 |
| 40149  | No se cumple el período máximo entre Fecha Valor y Fecha de Prime. |

## Simular Libre Amortización Sin Cliente

Método para simular el alta de un préstamo libre amortizacion sin cliente.

| Nombre publicación                             | Programa | Global/País |
| ---------------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularLibreAmortizacionSinCliente | RBTPG267 | Global      |

> Ejemplo de invocación al método Simular Libre Amortización Sin Cliente:

<code-group>
<code-block title="XML" active>
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
</code-block>
 
<code-block title="JSON">
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
</code-block>
</code-group>

> El POST retornará la siguiente estructura:

<code-group>
<code-block title="XML" active>
```xml
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <SOAP-ENV:Body>
      <BTPrestamos.SimularLibreAmortizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>fe9c2c642d4A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <cronograma>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-04-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>160.74</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>160.74</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-04-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>3000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>217.73</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>3217.73</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-05-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>102.21</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>102.21</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-05-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>3000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>216.38</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>3216.38</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-06-15</fechaPago>
                  <tipoCuota>I</tipoCuota>
                  <concepto/>
                  <capital>60.37</capital>
                  <intereses>0.00</intereses>
                  <seguros>0.00</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>60.37</cuota>
               </sBTCuotaSimulacion>
               <sBTCuotaSimulacion>
                  <fechaPago>2020-06-15</fechaPago>
                  <tipoCuota>K</tipoCuota>
                  <concepto/>
                  <capital>4000.00</capital>
                  <intereses>0.00</intereses>
                  <seguros>215.03</seguros>
                  <impuestos>0.00</impuestos>
                  <otrosConceptos>0.00</otrosConceptos>
                  <cuota>4215.03</cuota>
               </sBTCuotaSimulacion>
            </cronograma>
            <fechaValor>2020-03-13</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <impuestos>0.00</impuestos>
            <intereses>323.32</intereses>
            <tasaNominalAnual>17.522024</tasaNominalAnual>
            <totalPrestamo>10000.00</totalPrestamo>
            <tasaEfectivaAnual>19.000000</tasaEfectivaAnual>
            <operacionUId>682</operacionUId>
            <tasa>19.000000</tasa>
            <fechaPrimerPago>2020-04-15</fechaPrimerPago>
            <fechaVencimiento>2020-06-15</fechaVencimiento>
            <plazo>0</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS CONSUMO, Amortización Libre TF</nombre>
            </producto>
            <comisiones>0.00</comisiones>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12993</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularLibreAmortizacion</Servicio>
            <Requerimiento/>
            <Fecha>2019-03-06</Fecha>
            <Hora>13:00:00</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularLibreAmortizacionResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
'{
    "Btinreq": {
        "Canal": "BTDIGITAL",
        "Requerimiento": "",
        "Usuario": "BANTOTAL",
        "Token": "1017966210F955E77534D3E0",
        "Device": "AC"
    },
    "sdtSimulacion": {
        "operacionUId": 0,
        "producto": {
            "productoUId": 0,
            "nombre": "PRÉSTAMOS SECTORIALES (PASIVO), Irregular o Amort. Libre",
            "moneda": "$",
            "papel": "$"
        },
        "fechaValor": "2016-08-15",
        "fechaPrimerPago": "2019-01-10",
        "fechaVencimiento": "2019-06-10",
        "capital": 10000.00,
        "intereses": 3946.66,
        "impuestos": 868.26,
        "comisiones": 0.00,
        "totalPrestamo": 10000.00,
        "plazo": 0,
        "tasa": 15.000000,
        "tasaEfectiva": 0.000000,
        "tasaEfectivaAnual": 16.068320,
        "tasaNominalAnual": 15.000000,
        "otrosConceptos": {
            "sBTConcepto": []
        },
        "cronograma": {
            "sBTCuotaSimulacion": [
                {
                    "fechaPago": "2019-01-10",
                    "tipoCuota": "I",
                    "concepto": "",
                    "capital": 3658.33,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 804.83,
                    "otrosConceptos": 0.00,
                    "cuota": 4463.16
                },
                {
                    "fechaPago": "2019-01-10",
                    "tipoCuota": "K",
                    "concepto": "",
                    "capital": 2000.00,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 0.00,
                    "otrosConceptos": 0.00,
                    "cuota": 2000.00
                },
                {
                    "fechaPago": "2019-02-10",
                    "tipoCuota": "I",
                    "concepto": "",
                    "capital": 103.33,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 22.73,
                    "otrosConceptos": 0.00,
                    "cuota": 126.06
                },
                {
                    "fechaPago": "2019-02-10",
                    "tipoCuota": "K",
                    "concepto": "",
                    "capital": 2000.00,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 0.00,
                    "otrosConceptos": 0.00,
                    "cuota": 2000.00
                },
                {
                    "fechaPago": "2019-03-10",
                    "tipoCuota": "I",
                    "concepto": "",
                    "capital": 70.00,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 15.40,
                    "otrosConceptos": 0.00,
                    "cuota": 85.40
                },
                {
                    "fechaPago": "2019-03-10",
                    "tipoCuota": "K",
                    "concepto": "",
                    "capital": 1000.00,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 0.00,
                    "otrosConceptos": 0.00,
                    "cuota": 1000.00
                },
                {
                    "fechaPago": "2019-04-10",
                    "tipoCuota": "I",
                    "concepto": "",
                    "capital": 64.58,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 14.21,
                    "otrosConceptos": 0.00,
                    "cuota": 78.79
                },
                {
                    "fechaPago": "2019-04-10",
                    "tipoCuota": "K",
                    "concepto": "",
                    "capital": 2000.00,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 0.00,
                    "otrosConceptos": 0.00,
                    "cuota": 2000.00
                },
                {
                    "fechaPago": "2019-05-10",
                    "tipoCuota": "I",
                    "concepto": "",
                    "capital": 37.50,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 8.25,
                    "otrosConceptos": 0.00,
                    "cuota": 45.75
                },
                {
                    "fechaPago": "2019-05-10",
                    "tipoCuota": "K",
                    "concepto": "",
                    "capital": 2000.00,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 0.00,
                    "otrosConceptos": 0.00,
                    "cuota": 2000.00
                },
                {
                    "fechaPago": "2019-06-10",
                    "tipoCuota": "I",
                    "concepto": "",
                    "capital": 12.92,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 2.84,
                    "otrosConceptos": 0.00,
                    "cuota": 15.76
                },
                {
                    "fechaPago": "2019-06-10",
                    "tipoCuota": "K",
                    "concepto": "",
                    "capital": 1000.00,
                    "intereses": 0.00,
                    "seguros": 0.00,
                    "impuestos": 0.00,
                    "otrosConceptos": 0.00,
                    "cuota": 1000.00
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPrestamos.SimularLibreAmortizacionSinCliente",
        "Fecha": "2019-11-20",
        "Hora": "11:19:16",
        "Requerimiento": "",
        "Numero": 7035,
        "Estado": "OK"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

| Nombre                    | Tipo                      | Comentarios                                                          |
| ------------------------- | ------------------------- | -------------------------------------------------------------------- |
| sdtDatosLibreAmortizacion | sBTDatosLibreAmortizacion | Datos de la simulación.                                              |
| generaCuotaInteres        | Character                 | Indica si se generan cuotas de intereses. [Hidden: Valores 'S'/'N']. |

Los campos del tipo de dato estructurado sBTDatosLibreAmortizacion son los siguientes:

| Campo          | Tipo                 | Comentarios                                                            |
| -------------- | -------------------- | ---------------------------------------------------------------------- |
| productoUId\*  | Long                 | Identificador único de producto.                                       |
| cantidadCuotas | Long                 | Cantidad de cuotas del préstamo.                                       |
| periodoCuotas  | Long                 | Período entre vencimiento de cada cuota.                               |
| monto          | Double               | Capital solicitado.                                                    |
| pizarra        | Short                | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. |
| tasa           | Double               | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.      |
| actividad      | Long                 | Código de actividad (Destino del crédito).                             |
| cuotasCapital  | sBTCuotaPrestamoAlta | Cuotas de capital.                                                     |
| cuotasInteres  | sBTCuotaPrestamoAlta | Cuotas de intereses.                                                   |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Datos de salida

| Nombre        | Tipo                    | Comentarios                  |
| ------------- | ----------------------- | ---------------------------- |
| sdtSimulacion | sBTSimulacionPrestamoLA | Datos del préstamo simulado. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamoLA son los siguientes:

| Campo             | Tipo               | Comentarios                       |
| ----------------- | ------------------ | --------------------------------- |
| operacionUId      | Long               | Identificador único de operación. |
| producto          | sBTProducto        | Datos del producto.               |
| fechaValor        | Date               | Fecha valor.                      |
| fechaPrimerPago   | Date               | Fecha de primer pago.             |
| fechaVencimiento  | Date               | Fecha de vencimiento.             |
| capital           | Double             | Capital del préstamo.             |
| intereses         | Double             | Intereses.                        |
| impuestos         | Double             | Impuestos.                        |
| comisiones        | Double             | Comisiones.                       |
| totalPrestamo     | Double             | Total a pagar.                    |
| plazo             | Int                | Plazo.                            |
| tasa              | Double             | Tasa.                             |
| tasaEfectiva      | Double             | Tasa efectiva.                    |
| tasaEfectivaAnual | Double             | Tasa efectiva anual.              |
| tasaNominalAnual  | Double             | Tasa nominal anual.               |
| otrosConceptos    | sBTConcepto        | Importe otros conceptos.          |
| cronograma        | sBTCuotaSimulacion | Cronograma del préstamo.          |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                      |
| ----------- | ------ | -------------------------------- |
| productoUId | Long   | Identificador único de producto. |
| nombre      | String | Nombre de producto.              |
| moneda      | String | Símbolo de moneda.               |
| papel       | String | Símbolo de papel.                |

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

| Código | Descripción                                                        |
| ------ | ------------------------------------------------------------------ |
| 30001  | No se recibió el identificador de cliente.                         |
| 30002  | No se recibió el identificador de producto.                        |
| 30003  | No se recuperó la cuenta para el Identificador.                    |
| 30004  | El Identificador único de Producto es incorrecto.                  |
| 30005  | No se recibió la Fecha de Primer Pago desde el origen.             |
| 30006  | No se recibió el Monto de Capital desde el origen.                 |
| 31001  | La simulación no está vigente.                                     |
| 31002  | La simulación no existe.                                           |
| 40001  | La Cuenta indicada es incorrecta.                                  |
| 40012  | La Fecha de Primer Pago indicada es menor a la Fecha Valor.        |
| 40013  | La Fecha de Vencimiento indicada es menor a la Fecha Valor.        |
| 40014  | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimien. |
| 40015  | El Plazo Total indicado es incorrecto.                             |
| 40016  | La Cantidad de Cuotas indicada es menor al mínimo permitido.       |
| 40017  | La Cantidad de Cuotas indicada es mayor al máximo permitido.       |
| 40018  | La Cantidad de Cuotas indicada es incorrecta.                      |
| 40019  | La Cantidad de Cuotas indicada no está preseteada.                 |
| 40020  | El período entre Cuotas indicado es menor al mínimo permitido.     |
| 40021  | El período entre Cuotas indicado es mayor al máximo permitido.     |
| 40022  | El período entre Cuotas indicado es incorrecto.                    |
| 40023  | El período entre Cuotas indicado no está preseteado.               |
| 40024  | El Valor Cuota indicado es incorrecto.                             |
| 40025  | El Capital indicado es menor al mínimo permitido.                  |
| 40026  | El Capital indicado es mayor al máximo permitido.                  |
| 40027  | El Capital indicado es incorrecto.                                 |
| 40037  | La Clase de Tasa indicada es incorrecta.                           |
| 40040  | La Tasa Fija indicada está fuera de tolerancia.                    |
| 40041  | La Tasa indicada es mayor a la Tasa de Usura.                      |
| 40048  | El período indicado es incorrecto.                                 |
| 40049  | El Tipo de Tasa indicado es incorrecto.                            |
| 40054  | La Tasa indicada es incorrecta.                                    |
| 40071  | El Plazo Total de la Operación es mayor al máximo permitido.       |
| 40072  | El Plazo Total de la Operación es menor al mínimo permitido.       |
| 40076  | El Producto indicado no está Preseteado.                           |
| 40147  | No se cumple el período mínimo entre Fecha Valor y Fecha de Prime. |
| 40148  | El Capital indicado debe ser mayor al Valor Cuota.                 |
| 40149  | No se cumple el período máximo entre Fecha Valor y Fecha de Prime. |

## Simular Ofertas

Método para simular ofertas de préstamos.

| Nombre publicación         | Programa | Global/País |
| -------------------------- | -------- | ----------- |
| BTPrestamos.SimularOfertas | RBTPG124 | Global      |

> Ejemplo de invocación al método Simular Ofertas:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularOfertas>
         <bts:Btinreq>
            <bts:Device>AC</bts:Device>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Requerimiento>1</bts:Requerimiento>
            <bts:Usuario>BANTOTAL</bts:Usuario>
            <bts:Token>52005b89a6F955E77534D3E0</bts:Token>
         </bts:Btinreq>
         <bts:clienteUId>1</bts:clienteUId>
         <bts:sdtSimulacion>
            <bts:fechaPrimerPago>2020-05-05</bts:fechaPrimerPago>
            <bts:monto>1000</bts:monto>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:productoUId>43</bts:productoUId>
            <bts:cuotas>
               <bts:sBTCuota>
                  <bts:cantidadCuotas>12</bts:cantidadCuotas>
               </bts:sBTCuota>
            </bts:cuotas>
         </bts:sdtSimulacion>
      </bts:BTPrestamos.SimularOfertas>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularOfertas=' \
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
	"sdtSimulacion": {
		"fechaPrimerPago": "2020-05-05",
		"monto": "1000",
		"periodoCuotas": "30",
		"productoUId": "43",
		"cuotas": {
		  "sBTCuota": { 
			"cantidadCuotas": "12" 
			}
		}
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
      <BTPrestamos.SimularOfertasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AC</Device>
            <Usuario>BANTOTAL</Usuario>
            <Requerimiento>1</Requerimiento>
            <Canal>BTDIGITAL</Canal>
            <Token>52005b89a6F955E77534D3E0</Token>
         </Btinreq>
         <simulacionUId>39</simulacionUId>
         <sdtOfertasPrestamo>
            <sBTOfertaPrestamo>
               <otrosConceptos>0.00</otrosConceptos>
               <fechaValor>2019-11-25</fechaValor>
               <capital>1000.00</capital>
               <totalComisiones>0.00</totalComisiones>
               <valorCuota>101.81</valorCuota>
               <cantidadCuotas>12</cantidadCuotas>
               <tasa>23.000000</tasa>
               <totalSeguros>0.00</totalSeguros>
               <fechaPrimerPago>2020-05-05</fechaPrimerPago>
               <totalIntereses>221.74</totalIntereses>
               <fechaVencimiento>2021-04-05</fechaVencimiento>
               <tea>25.590075</tea>
               <plazo>497</plazo>
               <totalAPagar>1221.74</totalAPagar>
               <totalImpuestos>0.00</totalImpuestos>
               <cft>25.030000</cft>
            </sBTOfertaPrestamo>
         </sdtOfertasPrestamo>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>677</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularOfertas</Servicio>
            <Requerimiento>1</Requerimiento>
            <Fecha>2020-04-23</Fecha>
            <Hora>16:17:04</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularOfertasResponse>
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
	"simulacionUId": 39,
	"sdtOfertasPrestamo": {
		"sBTOfertaPrestamo": {
		  "otrosConceptos": "0.00",
		  "fechaValor": "2019-11-25",
		  "capital": "1000.00",
		  "totalComisiones": "0.00",
		  "valorCuota": "101.81",
		  "cantidadCuotas": "12",
		  "tasa": "23.000000",
		  "totalSeguros": "0.00",
		  "fechaPrimerPago": "2020-05-05",
		  "totalIntereses": "221.74",
		  "fechaVencimiento": "2021-04-05",
		  "tea": "25.590075",
		  "plazo": "497",
		  "totalAPagar": "1221.74",
		  "totalImpuestos": "0.00",
		  "cft": "25.030000"
		}
	}
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Canal": "BTDIGITAL",
        "Servicio": "BTPrestamos.SimularOfertas",
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

### Configuración Backend

1. Si la opción general de procesos 3281 se encuentra activada, el servicio considera la sucursal del usuario de conexión, caso contrario, simula con la sucursal de la cuenta cliente.

### Datos de entrada

| Nombre        | Tipo               | Comentarios                          |
| ------------- | ------------------ | ------------------------------------ |
| clienteUId    | Long               | Identificador único del cliente.     |
| sdtSimulacion | sBTDatosSimulacion | Datos necesarios para la simulación. |

Los campos del tipo de dato estructurado sBTDatosSimulacion son los siguientes:

| Campo           | Tipo     | Comentarios                                   |
| --------------- | -------- | --------------------------------------------- |
| fechaPrimerPago | Date     | Fecha de primer pago.                         |
| monto           | Double   | Monto del préstamo.                           |
| periodoCuotas   | Int      | Período entre cuotas.                         |
| productoUId     | Long     | Identificador único del producto.             |
| cuotas          | sBTCuota | Colección de cantidad de cuotas para simular. |

Los campos del tipo de dato estructurado sBTCuota son los siguientes:

| Campo          | Tipo | Comentarios         |
| -------------- | ---- | ------------------- |
| cantidadCuotas | Int  | Cantidad de cuotas. |

### Datos de salida

| Nombre             | Tipo              | Comentarios                           |
| ------------------ | ----------------- | ------------------------------------- |
| simulacionUId      | Long              | Identificador único de la simulación. |
| sdtOfertasPrestamo | sBTOfertaPrestamo | Colección de ofertas de préstamo.     |

Los campos del tipo de dato estructurado sBTOfertaPrestamo son los siguientes:

| Campo            | Tipo   | Comentarios                  |
| ---------------- | ------ | ---------------------------- |
| otrosConceptos   | Double | Monto para otros conceptos.  |
| fechaValor       | Date   | Fecha valor.                 |
| capital          | Double | Capital del préstamo.        |
| totalComisiones  | Double | Monto total para comisiones. |
| valorCuota       | Double | Valor cuota.                 |
| cantidadCuotas   | Int    | Cantidad de las cuotas.      |
| tasa             | Double | Tasa del préstamo.           |
| totalSeguros     | Double | Monto total para seguros.    |
| fechaPrimerPago  | Date   | Fecha de primer pago.        |
| totalIntereses   | Double | Monto total para intereses.  |
| fechaVencimiento | Date   | Fecha de vencimiento.        |
| tea              | Double | TEA del préstamo.            |
| plazo            | Int    | Plazo para el préstamo.      |
| totalAPagar      | Double | Total a pagar.               |
| totalImpuestos   | Double | Monto total para impuestos.  |
| cft              | Double | CFT del préstamo.            |

### Errores

| Código | Descripción                                                                |
| ------ | -------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.                                 |
| 30002  | No se recibió el identificador de producto.                                |
| 30003  | No se recuperó la cuenta para el Identificador: [Número de Identificador]. |
| 30004  | El Identificador único de Producto es incorrecto                           |
| 30005  | No se recibió Lista de cuotas a simular.                                   |
| 30006  | No se recibió el Monto de Capital desde el origen.                         |

## Simular Plazo Fijo

Método para simular el alta de un préstamo plazo fijo.

| Nombre publicación           | Programa | Global/País |
| ---------------------------- | -------- | ----------- |
| BTPrestamos.SimularPlazoFijo | RBTPG230 | Global      |

> Ejemplo de invocación al método Simular Plazo Fijo:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularPlazoFijo>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>3252eea5d94A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtPrestamoPlazoFijo>
            <bts:clienteUId>221</bts:clienteUId>
            <bts:monto>10000</bts:monto>
            <bts:tasa/>
            <bts:fechaVencimiento/>
            <bts:plazo>360</bts:plazo>
            <bts:productoUId>79</bts:productoUId>
            <bts:pizarra/>
            <bts:actividad>1111</bts:actividad>
         </bts:sdtPrestamoPlazoFijo>
      </bts:BTPrestamos.SimularPlazoFijo>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularPlazoFijo' \
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
    "sdtPrestamoPlazoFijo": {
        "clienteUId": 221,
        "productoUId": 79,
        "fechaPrimerPago": "",
        "monto": 10000,
        "plazo": 360,
        "pizarra": 0,
        "tasa": 0,
        "actividad": 1111
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
      <BTPrestamos.SimularPlazoFijoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>3252eea5d94A8B5C60A82434</Token>
         </Btinreq>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2020-03-13</fechaValor>
            <capital>10000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>1200.00</intereses>
            <tasaNominalAnual>12.000000</tasaNominalAnual>
            <totalPrestamo>11200.00</totalPrestamo>
            <tasaEfectivaAnual>12.000000</tasaEfectivaAnual>
            <valorCuota>11200.00</valorCuota>
            <operacionUId>661</operacionUId>
            <tasa>12.000000</tasa>
            <fechaPrimerPago>2021-03-08</fechaPrimerPago>
            <fechaVencimiento>2021-03-08</fechaVencimiento>
            <plazo>360</plazo>
            <producto>
               <moneda>$</moneda>
               <papel>$</papel>
               <productoUId>0</productoUId>
               <nombre>PRÉSTAMOS CAPITAL DE TRABAJO, Plazo Fijo</nombre>
            </producto>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2017-08-10</fechaPago>
                  <importe>10000.00</importe>
               </sBTCuotaPrestamoAlta>
            </cronograma>
         </sdtSimulacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>12535</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularPlazoFijo</Servicio>
            <Requerimiento/>
            <Fecha>2019-02-25</Fecha>
            <Hora>14:47:13</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularPlazoFijoResponse>
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
    "sdtSimulacion": {
        "otrosConceptos": {
            "sBTConcepto": []
        },
        "fechaValor": "2020-03-13",
        "capital": "10000.00",
        "tasaEfectiva": "0.000000",
        "intereses": "1200.00",
        "tasaNominalAnual": "12.000000",
        "totalPrestamo": "11200.00",
        "tasaEfectivaAnual": "12.000000",
        "valorCuota": "11200.00",
        "operacionUId": "662",
        "tasa": "12.000000",
        "fechaPrimerPago": "2021-03-08",
        "fechaVencimiento": "2021-03-08",
        "plazo": "360",
        "producto": {
            "moneda": "$",
            "papel": "$",
            "productoUId": "0",
            "nombre": "PRÉSTAMOS CAPITAL DE TRABAJO, Plazo Fijo"
        }
        "cronograma": {
            "sBTCuotaPrestamoAlta": [
                {
                    "fechaPago": "2017-08-10",
                    "importe": 10000.00
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "12536",
        "Estado": "OK",
        "Servicio": "BTPrestamos.SimularPlazoFijo",
        "Requerimiento": "",
        "Fecha": "2019-02-25",
        "Hora": "15:13:12",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>
 
### Datos de entrada
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtPrestamoPlazoFijo | sBTPrestamoAltaPF | Datos de la simulación.
 
Los campos del tipo de dato estructurado sBTPrestamoAltaPF son los siguientes:
 
Campo | Tipo | Comentarios
--------- | ----------- | -----------
clienteUId* | Long | Identificador único de cliente.
productoUId* | Long | Identificador único de producto.
fechaVencimiento | Date | Fecha de Vencimiento (Obligatorio si no se carga plazo).
plazo | Int | Plazo (Obligatorio si no se carga Fecha de Vencimiento).
monto* | Double | Capital solicitado.
pizarra | Short | Tipo de pizzarra. Si no se indica toma la preseteada para el producto.
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.
actividad** | Long | Código de actividad (Destino del crédito).
  
### Datos de salida
 
Nombre | Tipo | Comentarios
--------- | ----------- | -----------
sdtSimulacion | sBTSimulacionPrestamo | Datos del préstamo simulado.
 
Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:
 
Campo | Tipo | Comentarios
--------- | ----------- | -----------
operacionUId | Long | Identificador único de la operación.
producto | sBTProducto | Datos del producto.
capital | Double | Capital del préstamo.
intereses | Double | Intereses.
valorCuota | Double | Valor cuota.
tasa | Double | Tasa.
tasaEfectiva | Double | Tasa efectiva.
tasaEfectivaAnual | Double | Tasa efectiva anual.
tasaNominalAnual | Double | Tasa nominal anual.
totalPrestamo | Double | Total a pagar.
fechaPrimerPago | Date | Fecha de primer pago.
fechaValor | Date | Fecha valor.
fechaVencimiento | Date | Fecha de vencimiento.
plazo | Int | Plazo.
otrosConceptos | sBTConcepto | Otros conceptos.
cronograma | sBTCuotaPrestamoAlta | Cronograma del préstamo.

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Errores

| Código | Descripción                                                        |
| ------ | ------------------------------------------------------------------ |
| 30001  | No se recibió el identificador de cliente.                         |
| 30002  | No se recibió el identificador de producto.                        |
| 30003  | No se recuperó la cuenta para el Identificador.                    |
| 30004  | El Identificador único de Producto es incorrecto.                  |
| 30005  | No se recibió la Fecha de Primer Pago desde el origen.             |
| 30006  | No se recibió el Monto de Capital desde el origen.                 |
| 31001  | La simulación no está vigente.                                     |
| 31002  | La simulación no existe.                                           |
| 40001  | La Cuenta indicada es incorrecta.                                  |
| 40012  | La Fecha de Primer Pago indicada es menor a la Fecha Valor.        |
| 40013  | La Fecha de Vencimiento indicada es menor a la Fecha Valor.        |
| 40014  | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimien. |
| 40015  | El Plazo Total indicado es incorrecto.                             |
| 40016  | La Cantidad de Cuotas indicada es menor al mínimo permitido.       |
| 40017  | La Cantidad de Cuotas indicada es mayor al máximo permitido.       |
| 40018  | La Cantidad de Cuotas indicada es incorrecta.                      |
| 40019  | La Cantidad de Cuotas indicada no está preseteada.                 |
| 40020  | El período entre Cuotas indicado es menor al mínimo permitido.     |
| 40021  | El período entre Cuotas indicado es mayor al máximo permitido.     |
| 40022  | El período entre Cuotas indicado es incorrecto.                    |
| 40023  | El período entre Cuotas indicado no está preseteado.               |
| 40024  | El Valor Cuota indicado es incorrecto.                             |
| 40025  | El Capital indicado es menor al mínimo permitido.                  |
| 40026  | El Capital indicado es mayor al máximo permitido.                  |
| 40027  | El Capital indicado es incorrecto.                                 |
| 40037  | La Clase de Tasa indicada es incorrecta.                           |
| 40040  | La Tasa Fija indicada está fuera de tolerancia.                    |
| 40041  | La Tasa indicada es mayor a la Tasa de Usura.                      |
| 40048  | El período indicado es incorrecto.                                 |
| 40049  | El Tipo de Tasa indicado es incorrecto.                            |
| 40054  | La Tasa indicada es incorrecta.                                    |
| 40071  | El Plazo Total de la Operación es mayor al máximo permitido.       |
| 40072  | El Plazo Total de la Operación es menor al mínimo permitido.       |
| 40076  | El Producto indicado no está Preseteado.                           |
| 40147  | No se cumple el período mínimo entre Fecha Valor y Fecha de Prime. |
| 40148  | El Capital indicado debe ser mayor al Valor Cuota.                 |
| 40149  | No se cumple el período máximo entre Fecha Valor y Fecha de Prime. |

## Simular Refinanciación por Deuda Total

Método para simular una refinanciación uno o más prestamos, siendo el capital del nuevo préstamo la suma de las deuda total de los seleccionados.

| Nombre publicación                          | Programa | Global/País |
| ------------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularRefinanciacionDeudaTotal | RBTPG234 | Global      |

> Ejemplo de invocación al método Simular Refinanciación por Deuda Total:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularRefinanciacionDeudaTotal>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtRefinanciacion>
            <bts:productoUId>61</bts:productoUId>
            <bts:clienteUId>221</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:tasa>0</bts:tasa>
            <bts:fechaPrimerPago/>
            <bts:operaciones>
            	<item>541</item>
               </bts:operaciones>
            <bts:pizarra>0</bts:pizarra>
         </bts:sdtRefinanciacion>
      </bts:BTPrestamos.SimularRefinanciacionDeudaTotal>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularRefinanciacionDeudaTotal=' \
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
    "sdtRefinanciacion": {
        "clienteUId": 4,
        "productoUId": 61,
        "fechaPrimerPago": "2018-12-10",
        "monto": 1000,
        "cantidadCuotas": 12,
        "periodoCuotas": 30,
		"tasa": 0,
		"pizarra": 0,
		"actividad": 11200
		"operaciones": {
			"item":541		
		}
		
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
      <BTPrestamos.SimularRefinanciacionDeudaTotalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>18bdf2801e4A8B5C60A82434</Token>
         </Btinreq>
         <refinanciacionId>122</refinanciacionId>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2020-03-13</fechaValor>
            <capital>34500.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>2541.84</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>26742.34</totalPrestamo>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <valorCuota>2228.53</valorCuota>
            <operacionUId>541</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-04-13</fechaPrimerPago>
            <fechaVencimiento>2021-03-13</fechaVencimiento>
            <plazo>0</plazo>
            <producto>
               <papel/>
               <moneda>$</moneda>
               <productoUId>61</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2017-08-10</fechaPago>
                  <importe>10000.00</importe>
               </sBTCuotaPrestamoAlta>
            </cronograma>
         </sdtSimulacion>
         <saldoCapitalCancelacion>33000.00</saldoCapitalCancelacion>
         <deudaTotalCancelacion>34500.00</deudaTotalCancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>4417</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularRefinanciacionDeudaTotal</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>15:19:29</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularRefinanciacionDeudaTotalResponse>
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
        "cronograma": {
            "sBTCuotaPrestamoAlta": [
                {
                    "fechaPago": "2017-08-10",
                    "importe": 10000.00
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "727",
        "Estado": "OK",
        "Servicio": "BTPrestamos.SimularRefinanciacionDeudaTotal",
        "Fecha": "2017-11-24",
        "Requerimiento": "",
        "Hora": "15:59:42",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Configuración Backend

1. Tiempo de validez de la simulación de una ampliación o refinanciación:

   - Por defecto es 1440 minutos (24 horas). Este valor se puede modificar ingresando los minutos en el valor específico 1 de la guía especial 20100 para los correlativos 1, 2 y 3 igual cero.

### Datos de entrada

| Nombre            | Tipo                  | Comentarios                                    |
| ----------------- | --------------------- | ---------------------------------------------- |
| sdtRefinanciacion | sBTRefinanciacionAlta | Datos de simulación.                           |
| accion            | String                | [Hidden: Valor fijo 'REFIT' para este método]. |

Los campos del tipo de dato estructurado sBTRefinanciacionAlta son los siguientes:

| Campo            | Tipo   | Comentarios                                                            |
| ---------------- | ------ | ---------------------------------------------------------------------- |
| clienteUId\*     | Long   | Identificador único de cliente.                                        |
| productoUId\*    | Long   | Identificador único de producto.                                       |
| fechaPrimerPago  | Date   | Fecha de primer pago.                                                  |
| cantidadCuotas\* | Int    | Cantidad de cuotas.                                                    |
| plazo            | Int    | Plazo de la operación.                                                 |
| pizarra          | Short  | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. |
| tasa             | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.      |
| actividad\*\*    | Long   | Código de actividad (Destino del crédito).                             |
| operaciones      | Long   | Lista de idententificares de operaciones a cancelar.                   |

### Datos de salida

| Nombre                  | Tipo                  | Comentarios                                               |
| ----------------------- | --------------------- | --------------------------------------------------------- |
| refinanciacionId        | Long                  | Identificador de refinanciación.                          |
| sdtSimulacion           | sBTSimulacionPrestamo | Datos del préstamo simulado.                              |
| saldoCapitalCancelacion | Double                | Saldo de capital total de los préstamos a consolidar.     |
| deudaTotalCancelacion   | Double                | Monto de cancelación total de los préstamos a consolidar. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                          |
| ----------------- | -------------------- | ------------------------------------ |
| operacionUId      | Long                 | Identificador único de la operación. |
| producto          | sBTProducto          | Datos del producto.                  |
| capital           | Double               | Capital del préstamo.                |
| intereses         | Double               | Intereses.                           |
| valorCuota        | Double               | Valor cuota.                         |
| tasa              | Double               | Tasa.                                |
| tasaEfectiva      | Double               | Tasa efectiva.                       |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.                 |
| tasaNominalAnual  | Double               | Tasa nominal anual.                  |
| totalPrestamo     | Double               | Total a pagar.                       |
| fechaPrimerPago   | Date                 | Fecha de primer pago.                |
| fechaValor        | Date                 | Fecha valor.                         |
| fechaVencimiento  | Date                 | Fecha de vencimiento.                |
| plazo             | Int                  | Plazo.                               |
| otrosConceptos    | sBTConcepto          | Otros conceptos.                     |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.             |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Errores

| Código | Descripción                                                                  |
| ------ | ---------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.                                   |
| 30002  | No se recibió el identificador de producto.                                  |
| 30003  | No se recuperó la cuenta para el Identificador: [Número de Identificador].   |
| 30004  | No se indicaron operaciones a ampliar.                                       |
| 30005  | No se recuperó la operación para el identificador [Número de Identificador]. |
| 40001  | La Cuenta indicada es incorrecta..                                           |
| 40012  | La Fecha de Primer Pago indicada es menor a la Fecha Valor.                  |
| 40013  | La Fecha de Vencimiento indicada es menor a la Fecha Valor.                  |
| 40014  | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.         |
| 40015  | El Plazo Total indicado es incorrecto.                                       |
| 40016  | La Cantidad de Cuotas indicada es menor al mínimo permitido.                 |
| 40017  | La Cantidad de Cuotas indicada es mayor al máximo permitido.                 |
| 40018  | La Cantidad de Cuotas indicada es incorrecta.                                |
| 40019  | La Cantidad de Cuotas indicada no está preseteada.                           |
| 40020  | El período entre Cuotas indicado es menor al mínimo permitido.               |
| 40021  | El período entre Cuotas indicado es mayor al máximo permitido.               |
| 40022  | El período entre Cuotas indicado es incorrecto.                              |
| 40023  | El período entre Cuotas indicado no está preseteado.                         |
| 40024  | El Valor Cuota indicado es incorrecto.                                       |
| 40025  | El Capital indicado es menor al mínimo permitido.                            |
| 40026  | El Capital indicado es mayor al máximo permitido.                            |
| 40027  | El Capital indicado es incorrecto.                                           |
| 40037  | La Clase de Tasa indicada es incorrecta.                                     |
| 40040  | La Tasa Fija indicada está fuera de tolerancia.                              |
| 40041  | La Tasa indicada es mayor a la Tasa de Usura.                                |
| 40048  | El período indicado es incorrecto.                                           |
| 40049  | El Tipo de Tasa indicado es incorrecto.                                      |
| 40054  | La Tasa indicada es incorrecta.                                              |
| 40071  | El Plazo Total de la Operación es mayor al máximo permitido.                 |
| 40072  | El Plazo Total de la Operación es menor al mínimo permitido.                 |
| 40076  | El Producto indicado no está Preseteado.                                     |
| 40147  | No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago.     |
| 40148  | El Capital indicado debe ser mayor al Valor Cuota.                           |
| 40149  | No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago.     |

## Simular Refinanciación por Saldo Capital

Método para simular una refinanciación uno o más prestamos, siendo el capital del nuevo préstamo la suma de los saldos capitales de los seleccionados.

| Nombre publicación                            | Programa | Global/País |
| --------------------------------------------- | -------- | ----------- |
| BTPrestamos.SimularRefinanciacionSaldoCapital | RBTPG234 | Global      |

> Ejemplo de invocación al método Simular Refinanciación por Saldo Capital:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTPrestamos.SimularRefinanciacionSaldoCapital>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento></bts:Requerimiento>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
         <bts:sdtRefinanciacion>
            <bts:productoUId>61</bts:productoUId>
            <bts:clienteUId>221</bts:clienteUId>
            <bts:actividad>1111</bts:actividad>
            <bts:periodoCuotas>30</bts:periodoCuotas>
            <bts:cantidadCuotas>12</bts:cantidadCuotas>
            <bts:tasa>0</bts:tasa>
            <bts:fechaPrimerPago/>
            <bts:operaciones>
            	<item>541</item>
               </bts:operaciones>
            <bts:pizarra>0</bts:pizarra>
         </bts:sdtRefinanciacion>
      </bts:BTPrestamos.SimularRefinanciacionSaldoCapital>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularRefinanciacionSaldoCapital=' \
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
    "sdtRefinanciacion": {
        "clienteUId": 4,
        "productoUId": 61,
        "fechaPrimerPago": "2018-12-10",
        "monto": 1000,
        "cantidadCuotas": 12,
        "periodoCuotas": 30,
		"tasa": 0,
		"pizarra": 0,
		"actividad": 11200,
		"operaciones": {
			"item":541		
		}
		
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
      <BTPrestamos.SimularRefinanciacionSaldoCapitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>18bdf2801e4A8B5C60A82434</Token>
         </Btinreq>
         <refinanciacionId>122</refinanciacionId>
         <sdtSimulacion>
            <otrosConceptos></otrosConceptos>
            <fechaValor>2020-03-13</fechaValor>
            <capital>33000.00</capital>
            <tasaEfectiva>0.000000</tasaEfectiva>
            <intereses>2541.84</intereses>
            <tasaNominalAnual>23.000000</tasaNominalAnual>
            <totalPrestamo>26742.34</totalPrestamo>
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual>
            <valorCuota>2228.53</valorCuota>
            <operacionUId>541</operacionUId>
            <tasa>23.000000</tasa>
            <fechaPrimerPago>2020-04-13</fechaPrimerPago>
            <fechaVencimiento>2021-03-13</fechaVencimiento>
            <plazo>0</plazo>
            <producto>
               <papel/>
               <moneda>$</moneda>
               <productoUId>61</productoUId>
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre>
            </producto>
            <cronograma>
               <sBTCuotaPrestamoAlta>
                  <fechaPago>2017-08-10</fechaPago>
                  <importe>10000.00</importe>
               </sBTCuotaPrestamoAlta>
            </cronograma>
         </sdtSimulacion>
         <saldoCapitalCancelacion>33000.00</saldoCapitalCancelacion>
         <deudaTotalCancelacion>34500.00</deudaTotalCancelacion>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>4417</Numero>
            <Estado>OK</Estado>
            <Servicio>BTPrestamos.SimularRefinanciacionSaldoCapital</Servicio>
            <Fecha>2018-12-14</Fecha>
            <Requerimiento/>
            <Hora>15:19:29</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTPrestamos.SimularRefinanciacionSaldoCapitalResponse>
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
        "cronograma": {
            "sBTCuotaPrestamoAlta": [
                {
                    "fechaPago": "2017-08-10",
                    "importe": 10000.00
                }
            ]
        }
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "727",
        "Estado": "OK",
        "Servicio": "BTPrestamos.SimularRefinanciacionSaldoCapital",
        "Fecha": "2017-11-24",
        "Requerimiento": "",
        "Hora": "15:59:42",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Configuración Backend

1. Tiempo de validez de la simulación de una ampliación o refinanciación:

   - Por defecto es 1440 minutos (24 horas). Este valor se puede modificar ingresando los minutos en el valor específico 1 de la guía especial 20100 para los correlativos 1, 2 y 3 igual cero.

### Datos de entrada

| Nombre            | Tipo                  | Comentarios                                    |
| ----------------- | --------------------- | ---------------------------------------------- |
| sdtRefinanciacion | sBTRefinanciacionAlta | Datos de simulación.                           |
| accion            | String                | [Hidden: Valor fijo 'REFIS' para este método]. |

Los campos del tipo de dato estructurado sBTRefinanciacionAlta son los siguientes:

| Campo            | Tipo   | Comentarios                                                            |
| ---------------- | ------ | ---------------------------------------------------------------------- |
| clienteUId\*     | Long   | Identificador único de cliente.                                        |
| productoUId\*    | Long   | Identificador único de producto.                                       |
| fechaPrimerPago  | Date   | Fecha de primer pago.                                                  |
| cantidadCuotas\* | Int    | Cantidad de cuotas.                                                    |
| plazo            | Int    | Plazo de la operación.                                                 |
| pizarra          | Short  | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. |
| tasa             | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra.      |
| actividad\*\*    | Long   | Código de actividad (Destino del crédito).                             |
| operaciones      | Long   | Lista de idententificares de operaciones a cancelar.                   |

### Datos de salida

| Nombre                  | Tipo                  | Comentarios                                               |
| ----------------------- | --------------------- | --------------------------------------------------------- |
| refinanciacionId        | Long                  | Identificador de refinanciación.                          |
| sdtSimulacion           | sBTSimulacionPrestamo | Datos del préstamo simulado.                              |
| saldoCapitalCancelacion | Double                | Saldo de capital total de los préstamos a consolidar.     |
| deudaTotalCancelacion   | Double                | Monto de cancelación total de los préstamos a consolidar. |

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes:

| Campo             | Tipo                 | Comentarios                          |
| ----------------- | -------------------- | ------------------------------------ |
| operacionUId      | Long                 | Identificador único de la operación. |
| producto          | sBTProducto          | Datos del producto.                  |
| capital           | Double               | Capital del préstamo.                |
| intereses         | Double               | Intereses.                           |
| valorCuota        | Double               | Valor cuota.                         |
| tasa              | Double               | Tasa.                                |
| tasaEfectiva      | Double               | Tasa efectiva.                       |
| tasaEfectivaAnual | Double               | Tasa efectiva anual.                 |
| tasaNominalAnual  | Double               | Tasa nominal anual.                  |
| totalPrestamo     | Double               | Total a pagar.                       |
| fechaPrimerPago   | Date                 | Fecha de primer pago.                |
| fechaValor        | Date                 | Fecha valor.                         |
| fechaVencimiento  | Date                 | Fecha de vencimiento.                |
| plazo             | Int                  | Plazo.                               |
| otrosConceptos    | sBTConcepto          | Otros conceptos.                     |
| cronograma        | sBTCuotaPrestamoAlta | Cronograma del préstamo.             |

Los campos del tipo de dato estructurado sBTProducto son los siguientes:

| Campo       | Tipo   | Comentarios                     |
| ----------- | ------ | ------------------------------- |
| productoUId | Long   | Identificador único de producto |
| nombre      | String | Nombre de producto              |
| moneda      | String | Símbolo de moneda               |
| papel       | String | Símbolo de papel                |

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:

| Campo     | Tipo   | Comentarios                |
| --------- | ------ | -------------------------- |
| fechaPago | Date   | Fecha de pago de la cuota. |
| importe   | Double | Importe de la cuota.       |

### Errores

| Código | Descripción                                                                  |
| ------ | ---------------------------------------------------------------------------- |
| 30001  | No se recibió el identificador de cliente.                                   |
| 30002  | No se recibió el identificador de producto.                                  |
| 30003  | No se recuperó la cuenta para el Identificador: [Número de Identificador].   |
| 30004  | No se indicaron operaciones a ampliar.                                       |
| 30005  | No se recuperó la operación para el identificador [Número de Identificador]. |
| 40001  | La Cuenta indicada es incorrecta.                                            |
| 40012  | La Fecha de Primer Pago indicada es menor a la Fecha Valor.                  |
| 40013  | La Fecha de Vencimiento indicada es menor a la Fecha Valor.                  |
| 40014  | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimiento.         |
| 40015  | El Plazo Total indicado es incorrecto.                                       |
| 40016  | La Cantidad de Cuotas indicada es menor al mínimo permitido.                 |
| 40017  | La Cantidad de Cuotas indicada es mayor al máximo permitido.                 |
| 40018  | La Cantidad de Cuotas indicada es incorrecta.                                |
| 40019  | La Cantidad de Cuotas indicada no está preseteada.                           |
| 40020  | El período entre Cuotas indicado es menor al mínimo permitido.               |
| 40021  | El período entre Cuotas indicado es mayor al máximo permitido.               |
| 40022  | El período entre Cuotas indicado es incorrecto.                              |
| 40023  | El período entre Cuotas indicado no está preseteado.                         |
| 40024  | El Valor Cuota indicado es incorrecto.                                       |
| 40025  | El Capital indicado es menor al mínimo permitido.                            |
| 40026  | El Capital indicado es mayor al máximo permitido.                            |
| 40027  | El Capital indicado es incorrecto.                                           |
| 40037  | La Clase de Tasa indicada es incorrecta.                                     |
| 40040  | La Tasa Fija indicada está fuera de tolerancia.                              |
| 40041  | La Tasa indicada es mayor a la Tasa de Usura.                                |
| 40048  | El período indicado es incorrecto.                                           |
| 40049  | El Tipo de Tasa indicado es incorrecto.                                      |
| 40054  | La Tasa indicada es incorrecta.                                              |
| 40071  | El Plazo Total de la Operación es mayor al máximo permitido.                 |
| 40072  | El Plazo Total de la Operación es menor al mínimo permitido.                 |
| 40076  | El Producto indicado no está Preseteado.                                     |
| 40147  | No se cumple el período mínimo entre Fecha Valor y Fecha de Primer Pago.     |
| 40148  | El Capital indicado debe ser mayor al Valor Cuota.                           |
| 40149  | No se cumple el período máximo entre Fecha Valor y Fecha de Primer Pago.     |
