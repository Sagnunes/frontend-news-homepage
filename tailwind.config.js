/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontSize: {
                base: '15px'
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif']
            },
        },
        colors: {
            orange: {
                soft: 'hsl(35, 77%, 62%)'
            },
            red: {
                soft: 'hsl(5, 85%, 63%)'
            },
            blue: {
                grayish: 'hsl(233, 8%, 79%)',
                "dark-grayish": 'hsl(236, 13%, 42%)',
                "very-dark-grayish": 'hsl(240, 100%, 5%)',
            },
            "off-white": 'hsl(36, 100%, 99%)'
        }
    },
    plugins: [],
}