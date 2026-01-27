/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#EA0050", // Brand Red/Pink
                secondary: "#EE4C85", // Softer Pink
                accent: "#FFD5E4", // Pale Pink
                "background-light": "#F6F6F6", // Light Gray Background
                "surface-light": "#FFFFFF",
                "surface-dark": "#1A1D2D",
                "text-light": "#2D334A",
                "text-dark": "#E6E8F0",
            },
            fontFamily: {
                display: ["Montserrat", "sans-serif"],
                body: ["Nunito", "sans-serif"],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            backgroundImage: {
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)',
            },
            animation: {
                'shimmer': 'shimmer 1.5s infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                shimmer: {
                    '100%': { transform: 'translateX(100%)' }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/container-queries'),
    ],
};
