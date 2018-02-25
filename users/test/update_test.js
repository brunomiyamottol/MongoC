const assert = require ('assert');
const User = require('../src/user');


describe('4.Updating Records', () => {
let joe;

beforeEach((done) => {
  joe = new User({name:'Joe', postCount:0})
  joe.save()
  .then (() => done());
});


function assertName(operation, done) {
   operation
   .then(() => User.find({}))
   .then((users) => {
     assert(users.length ===1)
     assert(users[0].name === 'Alex');
     done();
});
}

it('4.1 instance type using Save and save', (done) =>{
 joe.set('name', 'Alex');
 assertName(joe.save(), done);
 });


it('4.2 A model instance can update Bulk ' , (done) =>{
  assertName(joe.update({name:'Alex'}), done);
});

it('4.3 A model class can Update', (done) => {
  assertName(
    User.update({ name: 'Joe'},{ name: 'Alex'  }),
    done
  );
});

it('4.4 A model class can update one record', (done) =>{
assertName(
  User.findOneAndUpdate({name:'Joe'}, {name:'Alex'}),
  done
);
});

it('4.5 A model class can find a record with an Id and Update', (done) =>{
assertName(
 User.findByIdAndUpdate(joe.id, {name:'Alex'}),
 done
  );
 });

it('4.6 A user can have their post count incremented by 10', (done) =>{
  User.update({name:'Joe'}, {$inc:{postCount:10}})
  .then(() => User.findOne({name:'Joe'}))
  .then((user) => {
    assert(user.postCount ===10);
    done();
  });
 });
});
