export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BookList',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
serverMiddleware: [
  {path: '/api', handler:'~/api/index.js'},
],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-vue-select', {'Andaman and Nicobar Islands': Andaman_and_Nicobar_Islands,'Andhra Pradesh': Andhra_Pradesh, 'Arunachal Pradesh': Arunachal_Pradesh, 'Assam':Assam, 'Bihar':Bihar, 'Chandigarh':Chandigarh, 'Chhattisgarh':Chhattisgarh, 'Dadra and Nagar Haveli':Dadra_and_Nagar_Haveli, 'Daman and Diu':Daman_and_Diu, 'Delhi':Delhi, 'Goa':Goa, 'Gujarat':Gujarat, 'Haryana':Haryana, 'Himachal Pradesh':Himachal_Pradesh, 'Jammu and Kashmir':Jammu_and_Kashmir, 'Jharkhand':Jharkhand, 'Karnataka':Karnataka, 'Kerala':Kerala, 'Lakshadweep':Lakshadweep, 'Madhya Pradesh':Madhya_Pradesh, 'Maharashtra':Maharashtra, 'Manipur':Manipur, 'Meghalaya':Meghalaya, 'Mizoram':Mizoram, 'Nagaland':Nagaland, 'Orissa':Orissa, 'Pondicherry':Pondicherry, 'Punjab':Punjab, 'Rajasthan':Rajasthan, 'Sikkim':Sikkim, 'Tamil Nadu':Tamil_Nadu, 'Tripura':Tripura, 'Uttranchal':Uttranchal, 'Uttar Pradesh':Uttar_Pradesh, 'West Bengal':West_Bengal}
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
