const assert  = require('assert');
const User = require('../src/user');

describe('1.Creating Records', () =>{
  it('save a user', (done) => {
   const joe = new User({name:'Joe'});

   joe.save()
      .then(() => {
        //has joe been successfully saved
      assert(!joe.isNew);
      done();
      });
  });
});


//describe function is the Mocha initialization and encompases all it functions that
