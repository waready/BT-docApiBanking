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
              title: 'BTClientes',
              collapsable: true,
              children: [
                'BTClientes/BTClientesActualizar',
                'BTClientes/BTClienteActualizarDocumentoDigital',
                'BTClientes/BTClientesActualizarDomicilio',
                'BTClientes/BTClientesAgregarDomicilio',
                'BTClientes/BTClientesAgregarIntegrante',
                'BTClientes/BTClientesAgregarTelefono',
                'BTClientes/BTClientesAsociarDocumentoDigital',
                // 'BTClientes/BTClientesCrear',
                // 'BTClientes/BTClientesCrearConPersonaExistente',
                // 'BTClientes/BTClientesCrearParaPersonaJuridica',
                'BTClientes/creacion',
                'BTClientes/productos',
                'BTClientes/BTClientesEliminarDocumentoDigital',
                'BTClientes/BTClientesModificarEjecutivo',
                // 
                'BTClientes/BTClientesObtener',
                'BTClientes/BTClientesObtenerClasificacionesInternas',
                'BTClientes/BTClientesObtenerCuentaCliente',
                // 'BTClientes/BTClientesObtenerCuentasAhorro',
                // 'BTClientes/BTClientesObtenerCuentasAhorroSD',
                // 'BTClientes/BTClientesObtenerCuentasCorrientes',
                // 'BTClientes/BTClientesObtenerCuentasCorrientesSD',
                'BTClientes/BTClientesObtenerDocumentoDigital',
                'BTClientes/BTClientesObtenerDocumentosDigitales',
                'BTClientes/BTClientesObtenerDomicilios',
                'BTClientes/BTClientesObtenerIdentificadorUnico',
                'BTClientes/BTClientesObtenerIntegrantes',
                //
                'BTClientes/BTClientesObtenerLímites',
                'BTClientes/BTClientesObtenerPerfil',
                // 'BTClientes/BTClientesObtenerPlazosFijoConAvance',
                // 'BTClientes/BTClientesObtenerPlazosFijos',
                // 'BTClientes/BTClientesObtenerPrestamos',
                // 'BTClientes/BTClientesObtenerPrestamosCancelados',
                // 'BTClientes/BTClientesObtenerPrestamosCastigados',
                // 'BTClientes/BTClientesObtenerPrestamosConAvance',
                'BTClientes/BTClientesObtenerResumenPorProductoACierreAnio',
                'BTClientes/BTClientesObtenerResumenProductos',
                'BTClientes/BTClientesObtenerResumenProductosACierreAnio',
                'BTClientes/BTClientesObtenerResumenProductosSD',
                
                'BTClientes/BTClientesObtenerRiesgoCredito',
                'BTClientes/BTClientesObtenerSaldosProducto',
                'BTClientes/BTClientesObtenerSectores',
                'BTClientes/BTClientesObtenerSegmentos',
                // 'BTClientes/BTClientesObtenerTarjetasDebito',
                'BTClientes/BTClientesObtenerTelefonos',
                'BTClientes/BTClientesObtenerTiposDeIntegracion',
                'BTClientes/BTClientesObtenerTitularRepresentativo',

                'BTClientes/BTClientesValidarExistencia',
                'BTClientes/BTClientesVerificarEmpleado',
              ]
            },
            {
              title: 'BTPrestamos',
              collapsable: true,
              children: [
                'BTPrestamos/Actulizaciones',
                'BTPrestamos/Contratacion',
                'BTPrestamos/Datos',
                'BTPrestamos/DocumentosDigitales',
                'BTPrestamos/Pagos',
                'BTPrestamos/Simulacion'
              ],
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
