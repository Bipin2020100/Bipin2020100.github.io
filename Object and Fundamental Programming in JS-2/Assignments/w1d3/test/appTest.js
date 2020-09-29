const assert = require('chai').assert;
const app = require('../app.js');

describe('app', functionn(){
  it('app should return hello', function(){
    assert.equal(app(),'hello');
  })
})