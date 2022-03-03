import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/index';

describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => {});
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  }); 

  
  
  const obj = {
  firstName : "Anand",
  lastName : "Ubale",
  emailID : "anandubale11@gmail.com",
  password : "1234567890"
 }

  const path = "localhost:3000/api/v1";
  describe(`POST /users`, () => {
    it('should register user', (done) => {
      request(app)
        .post('localhost:3000/api/v1/users/register')
        .send(obj)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.data).to.be.an(obj);

          done();
        });
    });
  });

});
 