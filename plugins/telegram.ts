import { init } from "@telegram-apps/sdk-vue"

export default defineNuxtPlugin((nuxtApp) => {
    if(process.client){
        init()
    }
})
 
