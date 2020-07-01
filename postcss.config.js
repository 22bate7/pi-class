const tailwindcss = require('tailwindcss');

module.exports = {
    processCssUrls: false,
    plugins : [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        require('postcss-import')
    ]
}