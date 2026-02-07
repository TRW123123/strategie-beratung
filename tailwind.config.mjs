/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#A1EA34',
                'primary-hover': '#8FCD2E',
                'primary-text': '#101519',
                'surface': '#1A202C',
                'surface-subtle': '#161B22',
            },
            fontFamily: {
                heading: ['Space Grotesk', 'sans-serif'],
                body: ['Space Grotesk', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
