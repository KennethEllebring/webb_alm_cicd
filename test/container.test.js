const request = require('supertest');

describe('Check against remote container', function () {
  it('hello nginx', function () {
    return request('http://localhost:8080')
      .get('/')
      .expect('Content-Type', /text/)
      .expect(200);
  });
});
