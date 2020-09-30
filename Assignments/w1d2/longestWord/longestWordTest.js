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
  
  
  
  