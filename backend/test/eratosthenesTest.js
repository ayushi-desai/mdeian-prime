let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../index');

//Our parent block
describe('MedianPrimes', () => {
    describe('/GET medianprimes', () => {
        it('it should GET the median prime numbers', (done) => {
            let number = 10000
            chai.request(server)
                .get('/medianprimes')
                .query({ number: number })
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a('object');
                    (res.body.data).should.have.lengthOf.above(1);
                    done();
                });
        });

        it('number is required', (done) => {
            chai.request(server)
                .get('/medianprimes')
                .end((err, res) => {
                    (res).should.have.status(402);
                    (res.body).should.be.a('object');
                    (res.body).should.have.key('message');
                    done();
                });
        });
    });
});