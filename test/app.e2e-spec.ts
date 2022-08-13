import 'dotenv/config';
import * as mongoose from 'mongoose';
import * as request from 'supertest';

const app = 'http://localhost:3000';

//mongodb clear
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await mongoose.connection.dropDatabase();
});

afterAll(async (done) => {
  await mongoose.disconnect(done);
});

describe('AppController (e2e)', () => {
  it('/ (GET)', () => {
    return request(app).get('/').expect(200).expect('Hello World!');
  });
});
