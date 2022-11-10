const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('books/:id should return a book detail by id', async () => {
    const resp = await request(app).get('/books/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released: expect.any(Number),
      authors: expect.any(Array),
    });
  });
  it('/books should return a list of all books and the authors', async () => {
    const resp = await request(app).get('/books');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(8);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released: expect.any(Number),
      authors: expect.any(Array),
    });
  });
  afterAll(() => {
    pool.end();
  });
});
