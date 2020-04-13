const gulp = require('gulp')

const imageMinify = require('./imageMinify')
const imageToWebp = require('./imageToWebp')
const svgSprite = require('./svgSprite')
const stylesDev = require('./stylesDev')
const pug2htmlDev = require('./pug2htmlDev')
const scriptDev = require('./scriptDev')
const copyDependencies = require('./copyDependencies')

const server = require('browser-sync').create()

module.exports = function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: false,
        cors: true
    })

    gulp.watch('src/assets/img/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageToWebp)).on('change', server.reload)
    gulp.watch('src/assets/img/sprite/*.svg', gulp.series(svgSprite)).on('change', server.reload)
    gulp.watch('src/assets/styles/**/*.scss', gulp.series(stylesDev, cb => gulp.src('build/assets/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/assets/js/**/*.js', gulp.series(scriptDev)).on('change', server.reload)
    gulp.watch('src/views/**/*.pug', gulp.series(pug2htmlDev))
    gulp.watch('build/*.htmsl').on('change', server.reload)

    gulp.watch('package.json', gulp.series(copyDependencies)).on('change', server.reload)

    return cb()
}
