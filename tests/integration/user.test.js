import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import HttpStatus from 'http-status-codes';

import app from '../../src/index';
import { response } from 'express';

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

  
  
  

  describe(`POST /users`, () => {

    // it('should register user.1', (done) => {

    //   const obj1 = {
    //     firstName : "Anand",
    //     lastName : "Ubale",
    //     emailID : "anandubale11@gmail.com",
    //     password : "1234567890"
    //    };

    //   request(app)
    //     .post('/api/v1/users/register')
    //     .send(obj1)
    //     .end((err, res) => {
    //       expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
    //       done();
    //     });
    // });


    it('A)firstName is wrong', (done) => {

      const obj1 = {
        firstName : "A",
        lastName : "Ubale",
        emailID : "anandubale11@gmail.com",
        password : "1234567890"
       };

      request(app)
        .post('/api/v1/users/register')
        .send(obj1)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
          done();
        });
    });

    // it('B)lastName is wrong', (done) => {

    //   const obj1 = {
    //     firstName : "Anand",
    //     lastName : "U",
    //     emailID : "anandubale11@gmail.com",
    //     password : "1234567890"
    //    };

    //   request(app)
    //     .post('/api/v1/users/register')
    //     .send(obj1)
    //     .end((err, res) => {
    //       expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
    //       done();
    //     });
    // });

    // it('C)emailID is wrong', (done) => {

    //   const obj1 = {
    //     firstName : "Anand",
    //     lastName : "Ubale",
    //     emailID : " ",
    //     password : "1234567890"
    //    };

    //   request(app)
    //     .post('/api/v1/users/register')
    //     .send(obj1)
    //     .end((err, res) => {
    //       expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
    //       done();
    //     });
    // });

    
    // it('D)password is short wrong', (done) => {

    //   const obj1 = {
    //     firstName : "A",
    //     lastName : "Ubale",
    //     emailID : "anandubale11@gmail.com",
    //     password : "12345678"
    //    };

    //   request(app)
    //     .post('/api/v1/users/register')
    //     .send(obj1)
    //     .end((err, res) => {
    //       expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
    //       done();
    //     });
    // });






  


  
  // describe(`POST/login`, () => {
  //   it('', (done) => {
  //     const obj2 = {
    
  //       emailID : "anandubale11@gmail.com",
  //       password : "1234567890"
  //      };

  //     request(app)
  //       .post('/api/v1/users/login')
  //       .send(obj2)
  //       .end((err, res) => {
  //         expect(res.statusCode).to.be.equal(HttpStatus.OK);
  //         done();
  //       });
  //   });
  // });

  

  
  // describe(`POST/forget`, () => {
  //     it('A )Right email Ok test.3', (done) => {
  //       const obj2 = {
  //         emailID : "anandubale11@gmail.com",
  //       };

  //       request(app)
  //         .post('/api/v1/users/forget')
  //         .send(obj2)
  //         .end((err, res) => {
  //           expect(res.statusCode).to.be.equal(HttpStatus.OK);
  //           done();
  //         });
  //     });
  // });

  
    
    // describe(`PUT/Reset`, () => {
    //   it('A )Right email Ok test.3', (done) => {
    //     const obj2 = {
    //       password : "asdfg@gmail.com"

    //     };
    //     const jwtToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElEIjoiYW5hbmR1YmFsZTExQGdtYWlsLmNvbSIsImlkIjoiNjIyMjA1NWEwNTg1MDg0NWUwMWJmMjM0IiwiaWF0IjoxNjQ2Mzk2NzYyfQ.Bnjs7VGcl8JVhutBMPmoExm3tI_ebS0bv-N_z8ack7s"

    //     request(app)
    //       .put('/api/v1/users/reset')
    //       .set('Authorization',`${jwtToken}`)
    //       .send(obj2)
    //       .end((err, res) => {
    //         expect(res.statusCode).to.be.equal(HttpStatus.OK);
    //         done();
    //       });
    //   });
  // });

});

});


