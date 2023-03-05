/* extraemos las dependencias ya instaladas para hacer uso de ellas
 {} las llaves significa que
 vamos a exportar multiples funciones de gulp 
 src = sirve para ideptificar la ruta de archivo .scss el 
 
 .scss debe ser el archivo principal que compila todos los .scss
 dest : almacena la nueva ruta donde se guardara la hoja de sass
 compilada
  */
const { src, dest, watch, series, parallel } = require('gulp')
//exportando gulp-sass y sass y todo los almacena la función de sass
const sass = require('gulp-sass')(require('sass'));

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


const imagemin = require('gulp-imagemin');

const sourcemaps = require('gulp-sourcemaps');

const cssnano = require('cssnano');
const init = require('gulp-sourcemaps/src/init');






//función para compilar sass
function css(done){
    //Ideptificamos la hoja de sass
    src('src/scss/app.scss')
    .pipe(sourcemaps.init())

    //compilar la hoja de sass utilizando pipe
    .pipe(sass({outputStyle: 'compressed'} ))

     //pipe para el autoprefixer
     .pipe( postcss([autoprefixer(),cssnano()]))
     
     //guardamos el sourcemap
     .pipe(sourcemaps.write('.'))
    //guardar la hoja ya compilada utilizando pipe

    .pipe(dest('build/css'))

   done()
}

function script(done){
     src('src/js/**/*')

    .pipe(dest('build/js'));



  done();
}
function imagenes(done){

  src('src/img/**/*')
  .pipe(imagemin({optimizationLevel: 3}))
  .pipe(dest('build/img'));

  done();
}

function dev(done){
/*   //este watch está atento a cualquier cambio de los
 archivos sass(.scss)
  escanea la ruta del archivo, en caso de detectar algún cambio
   vuelve a llamar a la función de css 
   */
  watch('src/scss/**/*.scss', css);
  watch('src/img/**/*', imagenes);
  watch('src/js/**/*.js', script);


   done();
}
exports.css = css;
exports.script = script
exports.dev = dev;
exports.imagenes = imagenes

//tareas que corre todas las funciones anteriores por default
exports.default = series(script, imagenes,css,dev );