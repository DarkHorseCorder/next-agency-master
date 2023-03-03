const withStyles = require('@webdeb/next-styles')
const withPWA = require('next-pwa')


module.exports = withPWA (withStyles({
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
  target: 'serverless',
  compress: true,
  ignoreBuildErrors: true,
  pwa: {
    dest: 'public'
  }
}))
