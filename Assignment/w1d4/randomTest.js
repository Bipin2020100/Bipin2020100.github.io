

describe("test for random number", function(){
  it ("this will give a random number between 10 and 30", function(){
    let x = (parseInt(10 + (Math.random()*(20)) ))
    assert.equal(random(10,30), x)
  })
}

)

