const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: true,
    theme: {
        fontFamily: {
            'sans': ['ui-sans-serif', 'Montserrat'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
        },
        extend: {
            colors: {
                'knotta-primary': '#363851',
                'knotta-secondary': '#0061FF',
                'knotta-cyan': '#75BDD3'
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.neutral,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            blue: colors.blue,
            sky: colors.sky,

        }
    },
    variants: {
        extend: {
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        styled: true,
        themes: [
            'light', // and some pre-defined theme
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        darkTheme: "dark",
    },
}
