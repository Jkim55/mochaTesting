const chai = require('chai')
const should = chai.should()
const expect = chai.expect;
const assert = chai.assert

describe('Canary test', ()=>{
  it('the string hello should be hello', () =>{
    const hello = 'hello'
    hello.should.be.equal('hello')
  })

  it('typeof string should be string with should', () => {
    // const strType = typeof('fddfg')=== 'string'
    // strType.should.be.equal(strType === true)
    const str = 'fddfg'
    str.should.be.a('string')
  })


    it('typeof string should be string with expect', () => {
      const str = 'fddfg'
      expect(str).to.be.a('string')
    })

    it('typeof string should be string with assert', () => {
      const str = 'fddfg'
      assert.typeOf(str, 'string')
    })
})
