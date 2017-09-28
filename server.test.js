const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('app', () => {
  describe ('GET /', () => {
    it('should return home page', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .end(done);
    });
  });
});
