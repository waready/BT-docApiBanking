/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // ...apply enhancements for the site.
  // router.afterEach(() => {
  //   //alert("holi")
  //   const sidebar = document.querySelector('.sidebar');
  //   console.log("sidebar",sidebar)
  //   if (sidebar) {
  //     const simularItem = sidebar.getElementsByTagName('section');
  //     console.log("simular", simularItem)
  //     if (simularItem) {
  //       //simularItem.classList.remove('is-sub-group');

  //       for (var i = 0; i < simularItem.length; i++) {
  //         if (simularItem[i].classList.contains("is-sub-group")) {
  //           simularItem[i].classList.remove("is-sub-group");
  //         }
  //       }
  //       // const listItem = simularItem.closest('li.sidebar-item');
  //       // if (listItem) {
  //       //   listItem.classList.remove('is-sub-group');
  //       // }
  //     }
  //   }
  // });
  Vue.mixin({
    mounted() {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        const simularItem = sidebar.getElementsByTagName('section');
        if (simularItem) {
          for (var i = 0; i < simularItem.length; i++) {
            if (simularItem[i].classList.contains("is-sub-group")) {
              simularItem[i].classList.remove("is-sub-group");
            }
          }
        }
      }
    }
  });

}
