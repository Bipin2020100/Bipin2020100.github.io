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