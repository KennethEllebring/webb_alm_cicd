const request = require('supertest');

const app = require('../app');

describe('GET /', function () {
  it('should return text/html', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200, done);
  });
});
