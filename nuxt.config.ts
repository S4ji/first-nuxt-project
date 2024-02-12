import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  alias :{
    "@": resolve( __dirname ,"/")
  }
})
