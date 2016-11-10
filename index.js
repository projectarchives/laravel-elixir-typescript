var Elixir = require('laravel-elixir');
var tsconfig = require('./tsconfig.json');
var Typescript = require('typescript');
var config = Elixir.config;

/*
 |----------------------------------------------------------------
 | Typescript Compilation Task
 |----------------------------------------------------------------
 |
 | This task will compile your Typescript.
 |
 */

Elixir.config.js.typescript = {
	folder: 'typescript',
	search: '/**/*.ts',
	plugin: Typescript,
	pluginOptions: {}
};


Elixir.extend('typescript', function (src,output,options) {
	var paths = getPaths(src, output);
	new Elixir.Task('typescript', function () {
		return gulp
			.src(paths.src.baseDir)
			.pipe(Typescript(tsconfig.compilerOptions))
			.pipe(gulp.dest(paths.output.baseDir));
	}).watch(paths.src.path);
});

/**
 * Prep the Gulp src and output paths.
 * Source: https://github.com/JeffreyWay/laravel-elixir-stylus/blob/master/index.js
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @return {object}
 */
var getPaths = function(src, output) {
	return new Elixir.GulpPaths()
		.src(src, Elixir.config.get('assets.js.typescript.folder'))
		.output(output || Elixir.config.get('public.js.outputFolder'), 'app.js');
};