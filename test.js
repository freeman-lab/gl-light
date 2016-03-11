var test = require('tape')
var allclose = require('test-allclose')
var light = require('./index.js')

test('construction', function (t) {
  var result = light()
  t.ok(result.attributes.position, 'light defined')
  allclose(t)(result.attributes.position, [0, 0, 0, 1])
  t.end()
})

test('position', function (t) {
  var result = light({position: [0, 1, 2, 1]})
  allclose(t)(result.attributes.position, [0, 1, 2, 1])
  t.end()
})

test('position 3 vector', function (t) {
  var result = light({position: [0, 1, 2]})
  allclose(t)(result.attributes.position, [0, 1, 2, 1])
  t.end()
})

test('position update', function (t) {
  var result = light({position: [0, 0, 0, 1]})
  allclose(t)(result.attributes.position, [0, 0, 0, 1])
  result.position([1, 2, 3, 1])
  allclose(t)(result.attributes.position, [1, 2, 3, 1])
  t.end()
})

test('position update function', function (t) {
  var result = light({position: [0, 0, 0, 1]})
  allclose(t)(result.attributes.position, [0, 0, 0, 1])
  result.position(function (d) {return [d[0] + 1, d[1] + 1, d[2] + 1, d[3]]})
  allclose(t)(result.attributes.position, [1, 1, 1, 1])
  t.end()
})