# unplugin

```scss
$border-color: () !default;
$border-color: map.merge(
  (
    '': #dcdfe6,
    'light': #e4e7ed,
    'lighter': #ebeef5,
    'extra-light': #f2f6fc,
    'dark': #d4d7de,
    'darker': #cdd0d6,
  ),
  $border-color
);
```

```scss
@use 'sass:map';

@use 'config';
@use 'function' as *;
@use '../common/var' as *;

// set css var value, because we need translate value to string
// for example:
// @include set-css-var-value(('color', 'primary'), red);
// --el-color-primary: red;
@mixin set-css-var-value($name, $value) {
  #{joinVarName($name)}: #{$value};
}

// @include set-css-var-type('color', 'primary', $map);
// --el-color-primary: #{map.get($map, 'primary')};
@mixin set-css-var-type($name, $type, $variables) {
  #{getCssVarName($name, $type)}: #{map.get($variables, $type)};
}

@mixin set-css-color-type($colors, $type) {
  @include set-css-var-value(('color', $type), map.get($colors, $type, 'base'));

  @each $i in (3, 5, 7, 8, 9) {
    @include set-css-var-value(
      ('color', $type, 'light', $i),
      map.get($colors, $type, 'light-#{$i}')
    );
  }

  // @include set-css-var-value(
  //   ('color', $type, 'dark-2'),
  //   map.get($colors, $type, 'dark-2')
  // );
}

// set all css var for component by map
@mixin set-component-css-var($name, $variables) {
  @each $attribute, $value in $variables {
    @if $attribute == 'default' {
      #{getCssVarName($name)}: #{$value};
    } @else {
      #{getCssVarName($name, $attribute)}: #{$value};
    }
  }
}

@mixin set-css-color-rgb($type) {
  $color: map.get($colors, $type, 'base');
  @include set-css-var-value(
    ('color', $type, 'rgb'),
    #{red($color),
    green($color),
    blue($color)}
  );
}

// generate css var from existing css var
// for example:
// @include css-var-from-global(('button', 'text-color'), ('color', $type))
// --el-button-text-color: var(--el-color-#{$type});
@mixin css-var-from-global($var, $gVar) {
  $varName: joinVarName($var);
  $gVarName: joinVarName($gVar);
  #{$varName}: var(#{$gVarName});
}
```