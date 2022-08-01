import colors from "vuetify/es5/util/colors";
import th from "./i18n/locales/th"
import en from "./i18n/locales/en"

export default {
    target: "static",
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s - hello-word",
        title: "hello-word",
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            {hid: "description", name: "description", content: ""},
            {name: "format-detection", content: "telephone=no"},
        ],
        link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
        script: [
            {
                charset: "utf-8",
                src: "https://static.line-scdn.net/liff/edge/2/sdk.js",
            },
        ],
    },

    router: {
        middleware: 'authenticated'
    },

    //เลือกวันที่ชำระเงิน => แยกวัรที่ชำระ
    //defaultDate: ใข้วันที่ปัจจุบัน
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],


    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        "@nuxtjs/composition-api/module",

        "@pinia/nuxt",

        "@nuxtjs/vuetify",

        '@nuxtjs/ngrok',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/i18n',
        "cookie-universal-nuxt",
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/pwa
        "@nuxtjs/pwa",
        // https://go.nuxtjs.dev/content
        "@nuxt/content",
    ],
    i18n: {
        locales: ['en', 'th',],
        defaultLocale: 'th',
        vueI18n: {
            fallbackLocale: 'th',
            messages: {
                en: en,
                th: th,
            }
        }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "/",
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: "en",
        },
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},
    target: "server",
    server: {
        port: process.env.PORT || 3000,
        host: "0.0.0.0",
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: "#386bf9",
                    accent: "#9155fd",
                    secondary: "#8a8d93",
                    info: "#16b1ff",
                    warning: "#ffb400",
                    error: "#ff4c51",
                    success: "#56ca00",
                },
                light: {
                    primary: "#386bf9",
                    accent: "#9155fd",
                    secondary: "#8a8d93",
                    info: "#16b1ff",
                    warning: "#ffb400",
                    error: "#ff4c51",
                    success: "#56ca00",
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // babel: {
        //   compact: true,
        // },

        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                },
            });
        },
    },
    bridge: {
        vite: true,
    },
    vite: {
        css: {
            modules: {
                generateScopedName: "[local]__[hash:base64:5]",
            },
        },
    },
};
