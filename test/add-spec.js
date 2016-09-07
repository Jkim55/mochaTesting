const chai = require('chai')                // **npm modules**
const supertest = require('supertest')

const app = require('../app.js')            // **file modules**

const should = chai.should()                  // **declaring variables**
const api = supertest(app) // using super test to bring in an api for the test

describe('Sending a POST to /api/add', () => {
  describe('should succeed', () => {  // adding another describe
    it('in adding two numbers together', (done) => {   //optional call back function, when passing in done, test will not pass until function completes
      api.post('/api/add')
      .send({
        num1: 5,
        num2: 2
      })
      .expect(200) //returning status code:200
      .end ((err, res) => {
        if(err) return done(err)

        res.body.result.should.be.equal(7)
        done()
      })
    })
  })

  describe('should fail', () => {
    it('when the nothing is sent in', (done) => {
      api.post('/api/add')
      .expect(432)
      .end((err, res) => {
        if(err) return done(err)
        res.body.message.should.be.equal('No data sent.Thus, no calculations returned.')
        done()
      })
    })
  })
})
