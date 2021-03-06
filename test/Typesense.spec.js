import chai from 'chai'
import Typesense from '../src/Typesense'

let expect = chai.expect

describe('Typesense', function () {
  it('should have a Client object that can be instantiated', function (done) {
    let client = new Typesense.Client()
    expect(client.configuration).to.be.an('object')
    done()
  })
})
