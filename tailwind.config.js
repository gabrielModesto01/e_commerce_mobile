/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
   "./App.{js,jsx,ts,tsx}",
   "./src/**/*.{js,jsx,ts,tsx}"
 ],
 theme: {
   extend: {
     colors: {
       background: '#E0E0E0',
       background_Details: '#FFFBFB'
     },
     fontFamily: {
       regular: 'Inter_400Regular',
       semibold: 'Inter_600SemiBold',
       bold: 'Inter_700Bold',
       chivo_bold: 'Chivo_700Bold',
     }
   },
 },
 plugins: [],
}