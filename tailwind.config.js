/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                rec: '#212121',
                btn: '#ff8a00',
            },
        },
    },
    plugins: [],
};
