
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    /*process.env.NODE_ENV === 'production' && */require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
        './src/**/*.scss',
      ],
      css: ['./src/**/*.scss'],
      whitelist: ['!red-text'], //Пример с переменной, находящейся в style.scss//
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  ]
}
