const assert = require ('assert');
const User = require ('../src/user');

describe('2.Reading Users out of the Database', () => {
 let joe;

 beforeEach((done) => {
  joe = new User({name:'Joe'});
  joe.save()
    .then(() => done());
});

  it('2.1-Finds all users with a name of joe', (done) => {
    User.find({name: 'Joe' })
    .then((users) => {
      //console.log(users);
    //  console.log(users[0]._id);
    //  console.log(joe._id);
      assert(users[0]._id.toString() === joe._id.toString());
      done();
    });
  });

  it('2.2 Find User with a perticular id', (done) => {
      User.findOne({_id: joe._id})
      .then((user) => {
        assert(user.name === 'Joe');
        done();
      });
  });

});
