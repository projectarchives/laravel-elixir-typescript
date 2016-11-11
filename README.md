# laravel-elixir-typescript [WIP]

## Usage

This Laravel Elixir extension allows you to compile Typescript.

## Installation

First, pull in the extension through NPM.

```
npm install --save-dev laravel-elixir-typescripts
```

That's it! You're all set to go!

## Usage

```js
elixir(function(mix) {
   mix.typescript('/**/*.ts');
});
```

...this will compile all of your `resources/assets/typescript` files to `./public/js`.

If you'd like to set a different output directory, you may pass a second argument to the `typescript()` method, like so:

```js
mix.typescript('/**/*.ts', './public/scripts')
```

If you want to override Typescript plugin options by passing custom options, you may pass an object as the third argument.

```js
mix.typescript('/**/*.ts', null, {});

// See options at: https://www.npmjs.com/package/gulp-typescript#options
```


### Todo:
Allow multiple `.ts` file to be compiled at once. Now it only supports `/**/*.ts` or single file compilation 


Inspiration:

https://github.com/JeffreyWay/laravel-elixir-stylus/