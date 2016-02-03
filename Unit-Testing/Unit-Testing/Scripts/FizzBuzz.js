function fizzBuzz(number) {
    // Return 'Fizz' if number is divisible by 3.
    // Return 'Buzz' if number is divisible by 5.
    // Return the number if not.

    var responseString = "";

    if (number % 3 === 0) {
        responseString = "Fizz";
    }

    if (number % 5 === 0) {
        responseString += "Buzz";
    }

    if (responseString === "") {
        responseString = number;
    }
    return responseString;
}