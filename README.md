# eslint-plugin-dollarshaveclub

Dollar Shave Club's official custom JavaScript rules. Linting code to shave the world!

## Installation

You'll first need to install [ESLint](http://eslint.org):

```shell
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-dollarshaveclub`:

```shell
$ npm install eslint-plugin-dollarshaveclub --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-dollarshaveclub` globally.

## Usage

Add `eslint-plugin-dollarshaveclub` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "extends": [
      "plugin:dollarshaveclub/ember"
    ],
    "plugins": [
      "dollarshaveclub"
    ]
}
```

## Supported Rules

* [spread-mixins](docs/rules/spread-mixins.md)

## Contributing

### Working with ESLint

First, read about working with [plugins](http://eslint.org/docs/developer-guide/working-with-plugins). Then read about writing [custom rules](http://eslint.org/docs/developer-guide/working-with-rules).

Using Esprima's [parser](http://esprima.org/demo/parse.html) is also very helpful with understanding the [ESTree Spec](https://github.com/estree/estree). Here is an [example](http://esprima.org/demo/parse.html?code=%2F%2F%20Life%2C%20Universe%2C%20and%20Everything%0Aexport%20default%20Ember.Component.extend(MixinOne%2C%20MixinTwo%2C%20%7B%7D)%3B%0A)

ESLint uses [Mocha](https://mochajs.org/) for testing so please install it globaly:

```shell
$ npm install -g mocha
```
