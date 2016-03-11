# gl-light

[![NPM version][npm-image]][npm-url]
![experimental][experimental-image]
[![js-standard-style][standard-image]][standard-url]

Create 3d lights for use with [`stack.gl`](http://stack.gl). 

## install

```
npm install gl-light
```

## example

Define data for your light

```javascript
var data = {
  position: [0, 10, 20, 1]
}
```

Then create it

```javascript
var light = require('gl-light')(data)
```

## usage

##### `light = require('gl-light')(data)`

Create a light by providing `data`.

The following properties on `data` are required:
- `position` a 3 or 4 vector with the position, with the fourth element specifying point or directional light

The fourth element of `position` specifies a point (1) or directional (0) light. If a 3 vector is passed, the fourth element will be set to 1.

##### `light.position([x, y, z, [w]])`

Update the position. If a 3 vector is passed, the fourth element will be kept the same.
