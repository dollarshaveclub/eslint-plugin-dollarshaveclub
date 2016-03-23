# Use the ES6 spread operator to add Ember Mixins. (spread-mixins)

Inlining individual Mixins when creating or extending ES6 Modules can result in large white space diffs, unecessary levels of indentation, and unintentional breakages of Git history.

Creating an array of mixins and using the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) these issues.

## Rule Details

This rule encorces using the spread operator for mixins when extending or creating an ES6 module.

# Never

The following patterns are incorrect:

```js

export default Ember.Component.extend(MixinOne, {});

export default Ember.Component.extend(
  MixinOne,
  MixinTwo,
  {
    property: 'value'
  }
);

export default Ember.Component.extend(
  MixinOne,
  {
    property: 'value'
  }
);

export default Ember.Component.extend(
  MixinOne,
  MixinTwo,
{
  property: 'value'
});
```

The following patterns are correct:

```js

const mixins = [
  MixinOne,
  MixinTwo,
];
export default Ember.Component.extend(...mixins, {
  property: 'value'
});


const mixins = [ MixinOne, MixinTwo ];
export default Ember.Component.extend(...mixins, {
  property: 'value'
});

const mixins = [ MixinOne ];
export default Ember.Component.extend(...mixins, {
  property: 'value'
});

```

## When Not To Use It

You can turn this rule off you if are not concerned with unecessary whitespace diffs or breaking Git history.

## Version

This was introduced in `eslint-config-dollarshaveclub@1.0.0`.

## Further Reading

* [ES6 spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

