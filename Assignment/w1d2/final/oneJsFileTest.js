/* eslint-disable no-undef */
/* eslint-disable strict */

describe("Sum of the array", function () {
  // ...
  it("filer of Bipin, ram, hari, 3 should return Bipin and hari ",
    function () {
      assert.deepEqual(filterLongWords(["Bipin","ram","hari"], 3), ["Bipin","hari"]);
    });

  })

/////////////////////////////////////////////////

describe("Sum of the array", function () {
  // ...
  it("The highest number of string available in the elements of array is 12",
    function () {
      assert.equal(findLongestWord(['Bipin','happiness','explore life']), 12);
    });

    it("The highest number of string available in the elements of array is 7",
    function () {
      assert.equal(findLongestWord(['Rabin','great','explore']), 7);
    });

    it("The highest number of string available in the elements of array is 8",
    function () {
      assert.equal(findLongestWord(['gama','Maharshi','expe']), 8);
    });

});
///////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////

describe("Sum of the array", function () {
  // ...
  it("reverse of jag testar should be ratset gaj",
    function () {
      assert.equal(reverseArray("jag testar"), "ratset gaj");
    });

  })

  ////////////////////////////////////////////////////////

  describe("Sum of the array", function () {
    // ...
    it("The sum of the array with 2 -1 is 1",
      function () {
        assert.equal(sum([2, -1]), 1);
      });
    it("sum of the array with 6 3 -2 is 7",
      function () {
        assert.equal(sum([6, 3, -2]), 7);
      })
    it("sum of the array with 5,6,3 is 14",
      function () {
        assert.equal(sum([5, 6, 3]), 14);
      })
  });

  //////////////////////////////////////////////////////

  describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
    });
   });



