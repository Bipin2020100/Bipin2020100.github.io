describe("Sum of the array", function () {
  // ...
  it("filer of Bipin, ram, hari, 3 should return Bipin and hari ",
    function () {
      assert.equal(filterLongWords(["Bipin","ram","hari"], 3), ["Bipin","hari"]);
    });

  })

  