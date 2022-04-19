import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import HttpStatus from 'http-status-codes';

import app from '../../src/index';
import { response } from 'express';
import { token } from 'morgan';

let token1 ; 
let _id;

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

  
    //test cases for registers

    describe(`POST /users`, () => {                  //pass

      it('should register user.1', (done) => {

        const obj1 = {
          firstName : "Anand",
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


      // it('Already registered user', (done) => {

      //   const obj1 = {
      //     firstName : "Anand",
      //     lastName : "Ubale",
      //     emailID : "anandubale11@gmail.com",
      //     password : "1234567890"
      //   };

      //   request(app)
      //     .post('/api/v1/users/register')
      //     .send(obj1)
      //     .end((err, res) => {
      //       expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
      //       done();
      //     });
      // });


    //   it('A)firstName is wrong', (done) => {

    //     const obj1 = {
    //       firstName : "A",
    //       lastName : "Ubale",
    //       emailID : "anandubale11@gmail.com",
    //       password : "1234567890"
    //     };

    //     request(app)
    //       .post('/api/v1/users/register')
    //       .send(obj1)
    //       .end((err, res) => {
    //         expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
    //         done();
    //       });
    //   });

    //   it('B)lastName is wrong', (done) => {

    //     const obj1 = {
    //       firstName : "Anand",
    //       lastName : "U",
    //       emailID : "anandubale11@gmail.com",
    //       password : "1234567890"
    //     };

    //     request(app)
    //       .post('/api/v1/users/register')
    //       .send(obj1)
    //       .end((err, res) => {
    //         expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
    //         done();
    //       });
    //   });

    //   it('C)emailID is wrong', (done) => {

    //     const obj1 = {
    //       firstName : "Anand",
    //       lastName : "Ubale",
    //       emailID : " ",
    //       password : "1234567890"
    //     };

    //     request(app)
    //       .post('/api/v1/users/register')
    //       .send(obj1)
    //       .end((err, res) => {
    //         expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
    //         done();
    //       });
    //   });

      
    //   it('D)password is short wrong', (done) => {

    //     const obj1 = {
    //       firstName : "A",
    //       lastName : "Ubale",
    //       emailID : "anandubale11@gmail.com",
    //       password : "12345678"
    //     };

    //     request(app)
    //       .post('/api/v1/users/register')
    //       .send(obj1)
    //       .end((err, res) => {
    //         expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
    //         done();
    //       });
    //   });
    });



    //login : 

    describe(`POST/login`, () => {
        it('shoud pass for login', (done) => {
          const obj2 = {
            emailID : "anandubale11@gmail.com",
            password : "1234567890"
          };

          request(app)
            .post('/api/v1/users/login')
            .send(obj2)
            .end((err, res) => {
              token1 = res.body.data;
              console.log("this is token "+ token);
              expect(res.statusCode).to.be.equal(HttpStatus.OK);
              done();
            });
        });
      });


      // describe(`POST/login`, () => {
      //   it('password is incorrect', (done) => {
      //     const obj2 = {
        
      //       emailID : "anandubale11@gmail.com",
      //       password : "1234567891"
      //     };

      //     request(app)
      //       .post('/api/v1/users/login')
      //       .send(obj2)
      //       .end((err, res) => {
      //         expect(res.statusCode).to.be.equal(HttpStatus.BAD_REQUEST);
      //         done();
      //       });
      //   });
      // });

      // describe(`POST/login`, () => {
      //   it('EMailID is not in database', (done) => {
      //     const obj2 = {
        
      //       emailID : "anandubale112@gmail.com",
      //       password : "1234567891"
      //     };

      //     request(app)
      //       .post('/api/v1/users/login')
      //       .send(obj2)
      //       .end((err, res) => {
      //         expect(res.statusCode).to.be.equal(HttpStatus.NOT_FOUND);
      //         done();
      //       });
      //   });
      // });

    

      // //Forget password
    
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

    
      // //Reset password:

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


      
      // describe(`PUT/Reset`, () => {
      //   it('B)Wrong Token test.3', (done) => {
      //     const obj2 = {
      //       password : "asdfg@gmail.com"

      //     };
      //     const jwtToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElEIjoiYW5hbmR1YmFsZTExQGdtYWlsLmNvbSIsImlkIjoiNjIyMjA1NWEwNTg1MDg0NWUwMWJmMjM0IiwiaWF0IjoxNjQ2Mzk2NzYyfQ.Bnjs7VGcl8JVhutBMPmoExm3tI_ebS0bv-N_z8ack"

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


      // describe(`POST/login`, () => {
      //   it('shoud pass for login', (done) => {
      //     const obj2 = {
        
      //       emailID : "anandubale11@gmail.com",
      //       password : "1234567890"
      //     };

      //     request(app)
      //       .post('/api/v1/users/login')
      //       .send(obj2)
      //       .end((err, res) => {
      //         token = res.token;
      //         expect(res.statusCode).to.be.equal(HttpStatus.OK);
      //         done();
      //       });
      //   });
      // });








      // create note

      describe(`create Note`, () => {
          it('A )OK note', (done) => {
            const obj2 = {
              Title : "Title1",
              Descreption : "Descreption",
              color : "red" 
            };
            let bearerToken = "Bearer " + token1;
            console.log(token);
            request(app)
              .post('/api/v1/note')
              .set('Authorization', `${bearerToken}`)
              .send(obj2)
              .end((err, res) => {
                _id = res.body.data._id;
                expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
                done();
              });
          });


          it('B )To Chech Title', (done) => {
            const obj2 = {
              Title : "T",
              Descreption : "Descreption",
              color : "red" 
            };
            let bearerToken = "Bearer " + token1;
            console.log(token);
            request(app)
              .post('/api/v1/note')
              .set('Authorization', `${bearerToken}`)
              .send(obj2)
              .end((err, res) => {
                expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
                done();
              });
          });

          it('C )To Check Descreption', (done) => {
            const obj2 = {
              Title : "Title1",
              Descreption : "D",
              color : "red" 
            };
            let bearerToken = "Bearer " + token1;
            console.log(token);
            request(app)
              .post('/api/v1/note')
              .set('Authorization', `${bearerToken}`)
              .send(obj2)
              .end((err, res) => {
                expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
                done();
              });
          });


          it('C )To Check color', (done) => {
            const obj2 = {
              Title : "Title1",
              Descreption : "D",
              color : 238403840 
            };
            let bearerToken = "Bearer " + token1;
            console.log(token);
            request(app)
              .post('/api/v1/note')
              .set('Authorization', `${bearerToken}`)
              .send(obj2)
              .end((err, res) => {
                expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
                done();
              });
      });
    });

    




      //get all notes


      describe(`get All Notes`, () => {
        it('A )ok', (done) => {
          
          let bearerToken = "Bearer " + token1;
          console.log(token);
          request(app)
            .get('/api/v1/note')
            .set('Authorization', `${bearerToken}`)
            .end((err, res) => {
              expect(res.statusCode).to.be.equal(HttpStatus.OK);
              done();
            });
        });


        it('B )get all with wrong token', (done) => {
          
          let bearerToken = token1;   //bearer word  is removed
          console.log(token);
          request(app)
            .get('/api/v1/note')
            .set('Authorization', `${bearerToken}`)
            .end((err, res) => {
              expect(res.statusCode).to.be.equal(HttpStatus.OK);
              done();
            });
        });
      });


    //get note by iD:

    describe(`Get note by ID`, () => {
      it('A )ok', (done) => {
      
        let bearerToken = "Bearer " + token1;
        console.log(_id);
        request(app)
          .get(`/api/v1/note/${_id}`)
          .set('Authorization', `${bearerToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(HttpStatus.OK);
            done();
          });
      });
      

      it('B )token is Incorrect', (done) => {
      
        let bearerToken = "Beare " + token1;
        console.log(_id);
        request(app)
          .get(`/api/v1/note/${_id}`)
          .set('Authorization', `${bearerToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(HttpStatus.OK);
            done();
          });
      });
    });
    



    //update by ID
    describe(`update note by ID`, () => {
      it('A )ok', (done) => {
          const obj2 = {
              Title : "Title2",
              Descreption : "Descreption2",
              color : "red" 
            };

      
        let bearerToken = "Bearer " + token1;
        console.log(_id);
        request(app)
          .put(`/api/v1/note/${_id}`)
          .set('Authorization', `${bearerToken}`)
          .send(obj2)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(HttpStatus.OK);
            done();
          });
      });


      it('B)Id is incorrect', (done) => {
        const obj2 = {
            Title : "Title2",
            Descreption : "Descreption2",
            color : "red" 
          };

    
      let bearerToken = "Bearer " + token1;
      console.log(_id);
      request(app)
        .put(`/api/v1/note/4${_id}`)
        .set('Authorization', `${bearerToken}`)
        .send(obj2)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(HttpStatus.OK);
          done();
        });
     });
    });

    // isArchive

    describe(`Archive note by ID`, () => {
      it('A )ok', (done) => {
      
        let bearerToken = "Bearer " + token1;
        console.log(_id);
        request(app)
          .put(`/api/v1/note/archive/${_id}`)
          .set('Authorization', `${bearerToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(HttpStatus.OK);
            done();
          });
      });
    });

    //trash
    
    describe(`trash note by ID`, () => {
      it('A )ok', (done) => {
      
        let bearerToken = "Bearer " + token1;
        console.log(_id);
        request(app)
          .put(`/api/v1/note/trash/${_id}`)
          .set('Authorization', `${bearerToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(HttpStatus.OK);
            done();
          });
      });
    });

    //delete note 

    describe(`Delete note by ID`, () => {
      it('A )ok', (done) => {
      
        let bearerToken = "Bearer " + token1;
        console.log(_id);
        request(app)
          .delete(`/api/v1/note/${_id}`)
          .set('Authorization', `${bearerToken}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(HttpStatus.OK);
            done();
          });
      });
    });
  
});


