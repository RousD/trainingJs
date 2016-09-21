var sortrosarinear= require ("../utils/sortrosarinear")
var assert = require("assert")
describe("Mandar una frase con S en el final", function(){
  it("escriba la frase", function(){
  assert.equal(sortrosarinear.rosarino("Estamos viejos como los trapos"), "Estamo viejo como lo trapo")
  })
})

describe("Mandar una frase sin S en el final", function(){
  it("escriba la frase", function(){
  assert.equal(sortrosarinear.rosarino("Estoy como loco escribiendo el test"), "Estoy como loco escribiendo el test")
  })
})
