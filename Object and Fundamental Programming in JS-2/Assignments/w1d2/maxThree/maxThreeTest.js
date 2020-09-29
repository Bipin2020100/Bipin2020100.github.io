"use strict"

describe("Max of Three", function () {
      it(" max of 4 6 7 is 7", 
      function () {
        assert.equal(7, maxOfThree(4, 6, 7));
      });
      it(" max of 3 5 10 is 10", 
      function () {
        assert.equal(10, maxOfThree(3 , 5, 10));
      });
      it(" max of 6 3 20 is 20",
       function () {
        assert.equal(maxOfThree(6, 20 , 3), 20 );
      });
    });

  