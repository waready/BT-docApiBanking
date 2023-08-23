const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Api Banking",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  markdown: {
    lineNumbers: true,
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ['link', { rel: 'stylesheet', href: '/styles/style.css' }],

  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Config",
        link: "/config/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '', // Enlace a README.md
            {
              title: 'BTCliente',
              collapsable: true,
              children: [
                'BTCliente/BTClientesActualizar',
                'BTCliente/BTClienteActualizarDocumentoDigital',
                'BTCliente/BTClientesActualizarDomicilio',
                'BTCliente/BTClientesAgregarDomicilio',
                'BTCliente/BTClientesAgregarIntegrante',
                'BTCliente/BTClientesAgregarTelefono',
                'BTCliente/BTClientesAsociarDocumentoDigital',
                'BTCliente/BTClientesCrear',
                'BTCliente/BTClientesCrearConPersonaExistente',
                'BTCliente/BTClientesCrearParaPersonaJuridica',
                'BTCliente/BTClientesEliminarDocumentoDigital',
                'BTCliente/BTClientesModificarEjecutivo',
                // 
                'BTCliente/BTClientesObtener',
                'BTCliente/BTClientesObtenerClasificacionesInternas',
                'BTCliente/BTClientesObtenerCuentaCliente',
                'BTCliente/BTClientesObtenerCuentasAhorro',
                'BTCliente/BTClientesObtenerCuentasAhorroSD',
                'BTCliente/BTClientesObtenerCuentasCorrientes',
                'BTCliente/BTClientesObtenerCuentasCorrientesSD',
                'BTCliente/BTClientesObtenerDocumentoDigital',
                'BTCliente/BTClientesObtenerDocumentosDigitales',
                'BTCliente/BTClientesObtenerDomicilios',
                'BTCliente/BTClientesObtenerIdentificadorUnico',
                'BTCliente/BTClientesObtenerIntegrantes',
                //
                'BTCliente/BTClientesObtenerLímites',
                'BTCliente/BTClientesObtenerPerfil',
                'BTCliente/BTClientesObtenerPlazosFijoConAvance',
                'BTCliente/BTClientesObtenerPlazosFijos',
                'BTCliente/BTClientesObtenerPrestamos',
                'BTCliente/BTClientesObtenerPrestamosCancelados',
                'BTCliente/BTClientesObtenerPrestamosCastigados',
                'BTCliente/BTClientesObtenerPrestamosConAvance',
                'BTCliente/BTClientesObtenerResumenPorProductoACierreAnio',
                'BTCliente/BTClientesObtenerResumenProductos',
                'BTCliente/BTClientesObtenerResumenProductosACierreAnio',
                'BTCliente/BTClientesObtenerResumenProductosSD',
                
                'BTCliente/BTClientesObtenerRiesgoCredito',
                'BTCliente/BTClientesObtenerSaldosProducto',
                'BTCliente/BTClientesObtenerSectores',
                'BTCliente/BTClientesObtenerSegmentos',
                'BTCliente/BTClientesObtenerTarjetasDebito',
                'BTCliente/BTClientesObtenerTelefonos',
                'BTCliente/BTClientesObtenerTiposDeIntegracion',
                'BTCliente/BTClientesObtenerTitularRepresentativo',

                'BTCliente/BTClientesValidarExistencia',
                'BTCliente/BTClientesVerificarEmpleado',
              ]
            }
          ]
        }
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
