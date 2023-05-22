const request = require('supertest');

const app = require('../app');

describe('GET /calculator', function () {
  it('text/html', function (done) {
    request(app)
      .get('/calculator')
      .expect('Content-Type', /text\/html/)
      .expect(200, done);
  });
});
