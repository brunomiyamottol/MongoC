const assert = require ('assert');
const User = require('../src/user');

describe('5.Validating Records', () =>  {

it('5.1 Requires a User Name to save to the Database', (done) =>{
const user = new User({name:undefined});
const validationResult = user.validateSync();
const {message} = validationResult.errors.name;
assert(message === 'Name is Required.');
 done();
 });

 it('5.2 Requires a user\'s Name to be longer than 2 characters', (done) =>{
   const user = new User({name:'Al'});
   const validationResult = user.validateSync();
   const {message} = validationResult.errors.name;
   assert(message ==='Name must be longer than 2 characters.');
   done();
 });

 it('5.3 Disallows invalid records from being saved', (done) =>{
    const user = new User({name:'Al'});
    user.save()
      .catch((validationResult) => {
        const {message} = validationResult.errors.name;
        assert(message === 'Name must be longer than 2 characters.');
        done();
    });
 });
});
