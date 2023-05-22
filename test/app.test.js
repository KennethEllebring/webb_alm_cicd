const request = require('supertest');

const app = require('../app');

describe('Error handling middleware', function () {
  it('should generate a 404 error', function (done) {
    request(app)
      .get('/no-route')
      .expect(404, done);
  });
});
