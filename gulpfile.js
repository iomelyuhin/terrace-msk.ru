const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const pug2html = require('./gulp/tasks/pug2html')
const pug2htmlDev = require('./gulp/tasks/pug2htmlDev')
const styles = require('./gulp/tasks/styles')
const stylesDev = require('./gulp/tasks/stylesDev')
const script = require('./gulp/tasks/script')
const scriptDev = require('./gulp/tasks/scriptDev')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const imageToWebp = require('./gulp/tasks/imageToWebp.js')
const imageToWebpDev = require('./gulp/tasks/imageToWebpDev.js')
const clean = require('./gulp/tasks/clean')
const copyDependencies = require('./gulp/tasks/copyDependencies')
const lighthouse = require('./gulp/tasks/lighthouse')
const svgSprite = require('./gulp/tasks/svgSprite')

const dev = gulp.parallel(pug2htmlDev, stylesDev, scriptDev, fonts, imageToWebpDev, svgSprite)

const build = gulp.series(clean, copyDependencies, pug2html, styles, script, fonts, imageMinify, imageToWebp, imageToWebp, svgSprite)

module.exports.start = gulp.series(dev, serve)
module.exports.build = build

module.exports.lighthouse = gulp.series(lighthouse)
