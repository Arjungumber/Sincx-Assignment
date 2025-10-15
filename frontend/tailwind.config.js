module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
        keyframes: {
            modalIn: {
            '0%': { opacity: '0', transform: 'scale(0.95)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
            },
            modalOut: {
            '0%': { opacity: '1', transform: 'scale(1)' },
            '100%': { opacity: '0', transform: 'scale(0.95)' },
            },
        },
        animation: {
            modalIn: 'modalIn 0.3s ease-out forwards',
            modalOut: 'modalOut 0.2s ease-in forwards',
        },
        },
    },
    plugins: [],
};
