var sortutils= require ("../utils/sortutils")
var assert = require("assert")
describe ("Test para Sort Ascendente, probando que ordene valores numericos", function(){
  it("insertar valores numericos", function(){
    assert.deepEqual(sortutils.ordenarasc(["5", "9", "1"]), ["1", "5", "9"])
  })
})
describe ("Test para Sort Ascendente, probando que no ordene valores alfabeticos", function(){
  it("insertar valores alfabeticos", function(){
    assert.deepEqual(sortutils.ordenarasc(["b", "w", "a"]), ["b", "w", "a"])
  })
})

describe("Test para Sort Descendente, probando que ordene valores numericos", function(){
  it("insertar valores numericos", function(){
    assert.deepEqual(sortutils.ordenardesc(["5", "9", "1"]), ["9", "5", "1"])
  })
})


describe("Test para Sort Descendente, probando que no ordene valores alfabeticos", function(){
  it("insertar valores alfabeticos", function(){
    assert.deepEqual(sortutils.ordenardesc(["b", "w", "a"]), ["b", "w", "a"])
  })
})
