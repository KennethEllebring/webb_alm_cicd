const request = require('supertest');

describe('Supertest against remote', function () {
  it('hello nginx', function () {
    return request('http://localhost:8080')
      .get('/')
      .expect('Content-Type', /text/)
      .expect(200);
  });
});
