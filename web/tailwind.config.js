module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    300: '#996DFF',
                    500: '#8257e6'
                },
                background: {
                    dark: '#09090A',
                    white: '#f3f3f3',
                },
            },
            borderRadius: {
                md: '4px'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar')
    ],
}
