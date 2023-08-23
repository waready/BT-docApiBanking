## Obtener Clasificaciones Internas

Método para obtener un listado de las clasificaciones internas ingresadas en Bantotal.

| Nombre publicación                        | Programa | Global/País |
| ----------------------------------------- | -------- | ----------- |
| BTClientes.ObtenerClasificacionesInternas | RBTPG057 | Global      |

> Ejemplo de invocación al método Obtener Clasificaciones Internas:

<code-group>
<code-block title="XML" active>
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">
   <soapenv:Header/>
   <soapenv:Body>
      <bts:BTClientes.ObtenerClasificacionesInternas>
         <bts:Btinreq>
            <bts:Device>AV</bts:Device>
            <bts:Usuario>MINSTALADOR</bts:Usuario>
            <bts:Requerimiento/>
            <bts:Canal>BTDIGITAL</bts:Canal>
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token>
         </bts:Btinreq>
      </bts:BTClientes.ObtenerClasificacionesInternas>
   </soapenv:Body>
</soapenv:Envelope>
```
</code-block>
 
<code-block title="JSON">
```json
curl -X POST \
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerClasificacionesInternas=' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a2504c18-058f-9846-0d61-85f4904ec027' \
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
      <BTClientes.ObtenerClasificacionesInternasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">
         <Btinreq>
            <Device>AV</Device>
            <Usuario>MINSTALADOR</Usuario>
            <Requerimiento/>
            <Canal>BTDIGITAL</Canal>
            <Token>268b6d23eb4A8B5C60A82434</Token>
         </Btinreq>
         <sdtClasificacionesInternas>
            <sBTClasificacionInterna>
               <identificador>1</identificador>
               <descripcion>IFE - Actividades bursátiles</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>3</identificador>
               <descripcion>IFE - Adm. de Mer. Financieros</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>4</identificador>
               <descripcion>IFE - Agencia de viajes</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>12</identificador>
               <descripcion>Emp. Fin no bancaria</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>13</identificador>
               <descripcion>IFE - Inmobiliarias</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>15</identificador>
               <descripcion>Otros Tipos Inter. Financiera</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>17</identificador>
               <descripcion>IFE - Hoteles</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>19</identificador>
               <descripcion>Soc. Offshore inv/neg. inter</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>20</identificador>
               <descripcion>IFE - Bancos</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>21</identificador>
               <descripcion>Const. Ed. comp/partes</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>22</identificador>
               <descripcion>Neg. grandes Vol. efectivo</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>23</identificador>
               <descripcion>IFE - Publicidad</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>25</identificador>
               <descripcion>IFE - Actividades de hospitale</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>26</identificador>
               <descripcion>IFE - Actividades veterinarias</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>29</identificador>
               <descripcion>IFE - Comerciantes mayoristas</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>30</identificador>
               <descripcion>IFE - Comerciantes minoristas</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>31</identificador>
               <descripcion>Cult. Agri. y cria animales</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>32</identificador>
               <descripcion>IFE - Elab. de productos Alim.</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>33</identificador>
               <descripcion>IFE - Explotación ganadera</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>34</identificador>
               <descripcion>IFE - Exportadores</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>35</identificador>
               <descripcion>IFE - Fab.de productos Plast.</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>36</identificador>
               <descripcion>IFE - Fab. de vehiculos Autom.</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>37</identificador>
               <descripcion>Impo/Comer. Prod. Agricolas</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>38</identificador>
               <descripcion>IFE - Importadores</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>39</identificador>
               <descripcion>IFE - Otras act. de servicio</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>40</identificador>
               <descripcion>IFE - Otras Act.empresariales</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>41</identificador>
               <descripcion>IFE - Servicios agrícolas</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>42</identificador>
               <descripcion>IFE - Servicios ganaderos</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>43</identificador>
               <descripcion>Venta. Art. x menor Ferreteria</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>44</identificador>
               <descripcion>IFE - INDUSTRIA FRIGORIFICA</descripcion>
            </sBTClasificacionInterna>
            <sBTClasificacionInterna>
               <identificador>9999</identificador>
               <descripcion>No Corresponde</descripcion>
            </sBTClasificacionInterna>
         </sdtClasificacionesInternas>
         <Erroresnegocio></Erroresnegocio>
         <Btoutreq>
            <Numero>849</Numero>
            <Estado>OK</Estado>
            <Servicio>BTClientes.ObtenerClasificacionesInternas</Servicio>
            <Fecha>2017-12-18</Fecha>
            <Requerimiento/>
            <Hora>02:32:18</Hora>
            <Canal>BTDIGITAL</Canal>
         </Btoutreq>
      </BTClientes.ObtenerClasificacionesInternasResponse>
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
    "sdtClasificacionesInternas": {
        "sBTClasificacionInterna": [
            {
                "descripcion": "IFE - Actividades bursátiles",
                "identificador": "1"
            },
            {
                "descripcion": "IFE - Adm. de Mer. Financieros",
                "identificador": "3"
            },
            {
                "descripcion": "IFE - Agencia de viajes",
                "identificador": "4"
            },
            {
                "descripcion": "Emp. Fin no bancaria",
                "identificador": "12"
            },
            {
                "descripcion": "IFE - Inmobiliarias",
                "identificador": "13"
            },
            {
                "descripcion": "Otros Tipos Inter. Financiera",
                "identificador": "15"
            },
            {
                "descripcion": "IFE - Hoteles",
                "identificador": "17"
            },
            {
                "descripcion": "Soc. Offshore inv/neg. inter",
                "identificador": "19"
            },
            {
                "descripcion": "IFE - Bancos",
                "identificador": "20"
            },
            {
                "descripcion": "Const. Ed. comp/partes",
                "identificador": "21"
            },
            {
                "descripcion": "Neg. grandes Vol. efectivo",
                "identificador": "22"
            },
            {
                "descripcion": "IFE - Publicidad",
                "identificador": "23"
            },
            {
                "descripcion": "IFE - Actividades de hospitale",
                "identificador": "25"
            },
            {
                "descripcion": "IFE - Actividades veterinarias",
                "identificador": "26"
            },
            {
                "descripcion": "IFE - Comerciantes mayoristas",
                "identificador": "29"
            },
            {
                "descripcion": "IFE - Comerciantes minoristas",
                "identificador": "30"
            },
            {
                "descripcion": "Cult. Agri. y cria animales",
                "identificador": "31"
            },
            {
                "descripcion": "IFE - Elab. de productos Alim.",
                "identificador": "32"
            },
            {
                "descripcion": "IFE - Explotación ganadera",
                "identificador": "33"
            },
            {
                "descripcion": "IFE - Exportadores",
                "identificador": "34"
            },
            {
                "descripcion": "IFE - Fab.de productos Plast.",
                "identificador": "35"
            },
            {
                "descripcion": "IFE - Fab. de vehiculos Autom.",
                "identificador": "36"
            },
            {
                "descripcion": "Impo/Comer. Prod. Agricolas",
                "identificador": "37"
            },
            {
                "descripcion": "IFE - Importadores",
                "identificador": "38"
            },
            {
                "descripcion": "IFE - Otras act. de servicio",
                "identificador": "39"
            },
            {
                "descripcion": "IFE - Otras Act.empresariales",
                "identificador": "40"
            },
            {
                "descripcion": "IFE - Servicios agrícolas",
                "identificador": "41"
            },
            {
                "descripcion": "IFE - Servicios ganaderos",
                "identificador": "42"
            },
            {
                "descripcion": "Venta. Art. x menor Ferreteria",
                "identificador": "43"
            },
            {
                "descripcion": "IFE - INDUSTRIA FRIGORIFICA",
                "identificador": "44"
            },
            {
                "descripcion": "No Corresponde",
                "identificador": "9999"
            }
        ]
    },
    "Erroresnegocio": {
        "BTErrorNegocio": []
    },
    "Btoutreq": {
        "Numero": "850",
        "Estado": "OK",
        "Servicio": "BTClientes.ObtenerClasificacionesInternas",
        "Fecha": "2017-12-18",
        "Requerimiento": "",
        "Hora": "02:32:36",
        "Canal": "BTDIGITAL"
    }
}'
```
</code-block>
</code-group>

### Datos de entrada

No aplica.

### Datos de salida

| Nombre                     | Tipo                    | Comentarios                          |
| -------------------------- | ----------------------- | ------------------------------------ |
| sdtClasificacionesInternas | sBTClasificacionInterna | Listado de clasificaciones internas. |

Los campos del tipo de dato estructurado sBTClasificacionInterna son los siguientes

| Campo         | Tipo   | Comentarios                             |
| ------------- | ------ | --------------------------------------- |
| identificador | Short  | Identificador de clasificacion interna. |
| descripcion   | String | Descripción de clasificacion interna.   |

### Errores

No aplica.
