/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#1E40AF',
                'primary-hover': '#1E3A8A',
                'primary-text': '#FFFFFF',
                'accent': '#2563EB',
                'accent-hover': '#1D4ED8',
                'surface': '#FFFFFF',
                'surface-subtle': '#F1F5F9',
                'bg-alt': '#F7F8FA',
            },
            fontFamily: {
                heading: ['Space Grotesk', 'sans-serif'],
                body: ['Space Grotesk', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
