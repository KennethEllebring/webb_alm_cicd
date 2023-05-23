const request = require('supertest');

const assert = require('assert');

const app = require('../app');

describe('GET /calculator', function () {
  it('should return 200', function (done) {
    request(app)
      .get('/calculator')
      .expect(200)
      .end(function (err, response) {
        if (err) return done(err);
        assert.strictEqual(response.status, 200);
        return done();
      });
  });
});
