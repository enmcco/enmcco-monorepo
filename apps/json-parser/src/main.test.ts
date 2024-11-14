import request from 'supertest';
import app from './main';

describe('Koa app initialization', () => {
  it('should respond with 200 on the root path', async () => {
    const response = await request(app.callback()).get('/');
    expect(response.status).toBe(200);
  });
});