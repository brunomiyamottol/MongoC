const assert = require ('assert');
const User = require ('../src/user');

describe('3. Deleting a user', () => {
let joe;

  beforeEach((done) => {
   joe = new User({name:'Joe'});
   joe.save()
    .then(() => done());
  });

  it('3.1 Model instance remove', (done) =>{
    //joe instace remove
    joe.remove()
     .then(() => User.findOne({name:'Joe'}))
     .then((user) => {
       assert(user === null);
       done();
     });
  });

  it('3.2 Class method remove', (done) => {
    //User class to remove a bunch of records with a given criteria
    User.remove({name:'Joe'})
     .then(() => User.findOne({name:'Joe'}))
     .then((user) => {
      assert(user ===null);
      done();
    });
  });

  it('3.3 Class method findOneAndRemove', (done) =>{
  //User class to remove a bunch of records with a given criteria
  User.findOneAndRemove({name:'Joe'})
   .then(() => User.findOne({name:'Joe'}))
   .then((user) => {
     assert(user === null);
     done();
   });
  });

  it('3.4 Class method findByIdAndRemove', (done) =>{
//User class to remove a bunch of records with a given criteria
 User.findByIdAndRemove(joe.id)
  .then(() => User.findOne({name:'joe'}))
  .then((user) => {
    assert(user === null);
    done();
  });
  });
});
