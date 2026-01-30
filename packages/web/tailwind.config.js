/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // SELAM Ocean Theme
                "primary": "#0d9488",           // Teal-600 - Main brand color
                "primary-light": "#14b8a6",     // Teal-500
                "primary-dark": "#0f766e",      // Teal-700
                "deep-navy": "#0a1628",         // Deepest ocean
                "ocean-blue": "#0d3b66",        // Mid ocean
                "ocean-mid": "#1e3a5f",         // Ocean middle depth
                "teal": "#14b8a6",              // Coral reef zone
                "cyan": "#22d3ee",              // Surface light
                "foam": "#e0f7fa",              // Ocean foam
                "bioluminescent": "#06b6d4",    // Deep glow
                "background-light": "#f0fdfa",  // Light teal tint
                "background-dark": "#0a1628",   // Deep navy
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "serif": ["Playfair Display", "serif"],
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },
            animation: {
                'ocean-wave': 'oceanWave 20s infinite alternate',
                'ocean-wave-reverse': 'oceanWaveReverse 25s infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'bubble': 'bubble 8s ease-in-out infinite',
                'slide-hint': 'slideHint 1.5s ease-in-out infinite',
                'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
                'depth-pulse': 'depthPulse 4s ease-in-out infinite',
            },
            keyframes: {
                oceanWave: {
                    '0%': { transform: 'translate(0, 0) scale(1)' },
                    '50%': { transform: 'translate(10%, -5%) scale(1.05)' },
                    '100%': { transform: 'translate(20%, -10%) scale(1.1)' },
                },
                oceanWaveReverse: {
                    '0%': { transform: 'translate(0, 0) scale(1)' },
                    '50%': { transform: 'translate(-8%, 5%) scale(1.1)' },
                    '100%': { transform: 'translate(-15%, 10%) scale(1.2)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                bubble: {
                    '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
                    '50%': { transform: 'translateY(-20px) scale(1.1)', opacity: '1' },
                },
                slideHint: {
                    '0%, 100%': { transform: 'translateX(0)', opacity: '0.4' },
                    '50%': { transform: 'translateX(6px)', opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                depthPulse: {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '0.6' },
                }
            }
        },
    },
    plugins: [],
}
