function fizzBuzzTests() {
    QUnit.test("FizzBuzz Output Test", function (assert) {

        assert.equal(fizzBuzz(0), "FizzBuzz");
        assert.equal(fizzBuzz(1), 1);
        assert.equal(fizzBuzz(3), "Fizz");
        assert.equal(fizzBuzz(5), "Buzz");
        assert.equal(fizzBuzz(30), "FizzBuzz");
        assert.equal(fizzBuzz(98), 98);
        assert.equal(fizzBuzz(), undefined);
    });
}