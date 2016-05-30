var gulp = require('gulp'), //подключаем gulp
	sass = require('gulp-sass'), // compile Sass in to the Css
	browserSync = require('browser-sync'), //производит автообновление страницы во всех браузерах на всех устройствах при изменениями не только клиентских или даже серверных файлов. А плюс ко всему синхронизирует позицию скроллинга и заполненные данные в формах.
	concat = require('gulp-concat'), //объединит все js файлы в один файл
	uglify = require('gulp-uglify'), // для сжатия JS
	cssnano = require('gulp-cssnano'), //минификация CSS
	rename = require('gulp-rename'), //переименование файлов
	del = require('del'), //удаление файлов и папок
	imagemin = require('gulp-imagemin'), // Минификация изображений
	pngquant = require('pngquant'), //для работы с png
	cache = require('gulp-cache'), //Большое количество картинок будет обрабатываться значительно дольше, поэтому к обработке изображений было бы неплохо добавить кеш, чтобы картинки кешировались, экономя наше время.
	autoprefix = require('gulp-autoprefixer'), // автоматически добавляет вендорные префиксы к CSS свойствам
	uncss = require('gulp-uncss'); //анализирует HTML код и находит все неиспользуемые и продублированные стили. 
//===========================================================
//Создаем таск Sass
gulp.task('sass', function() {
	return gulp.src('app/scss/main.scss') //файлы, которые обрабатываем
		.pipe(sass()) //Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // using gulp-autoprefixer
		.pipe(uncss({
			html: ['app/index.html', ]
		}))
		.pipe(gulp.dest('app/css/')) // результат пишем по указанному адрессу
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});
//===========================================================
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});
//===========================================================
gulp.task('js', function() {
	return gulp.src('app/js/**/*.js') //path to src of all js files
		.pipe(concat('all.js')) //склеиваем все JS
		.pipe(uglify()) //получившуюся "портянку" минифицируем 
		.pipe(gulp.dest('dist/js/'))
});
//===========================================================
gulp.task('css',['sass'], function(){
	return gulp.src('app/css/**/*.css')
	.pipe(cssnano()) //сжимаем
	.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
	.pipe(gulp.dest('dist/css')); // Выгружаем в папку app/css
});
//===========================================================
gulp.task('watch', ['css', 'js'], function() {
    gulp.watch('app/scss/**/*', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});
//===========================================================
gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});
//===========================================================
gulp.task('img', function() {
    return gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});
//===========================================================
//Если возникнут проблемы с изображениями или другими кешируемыми файлами, просто почистите кеш.
gulp.task('clear', function () { //очисткa кеша Gulp
    return cache.clearAll();
})
gulp.task('default', ['watch']);