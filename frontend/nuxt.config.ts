// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        socket: '/tmp/nitro/myapp-worker.sock'
    },
    server: {
        port: 8080, // default: 3000
        host: '0.0.0.0', // default: localhost
    },
})
