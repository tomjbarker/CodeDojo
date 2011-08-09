describe("Problem 1", function(){
    // Add all the natural numbers below one thousand that are multiples of 3 or 5.

	it("given ceiling is 10 and an array of factors [2,3,5], sum should 37", function(){
		expect(katas.sumNaturalNumbers(10, [2,3,5])).toEqual(37);
	});	
	
	it("given ceiling is 10 sum should 23", function(){
		expect(katas.sumNaturalNumbers(10, [3,5])).toEqual(23);
	});	
	
	it("returns 35 given a ceiling of 12", function () {
		expect(katas.sumNaturalNumbers(12, [3,5])).toEqual(33);
	});
	
	it("returns 45 given a ceiling of 15", function () {
		expect(katas.sumNaturalNumbers(15, [3,5])).toEqual(45);
	});
	
	it("returns 60 given a ceiling of 16", function () {
		expect(katas.sumNaturalNumbers(16, [3,5])).toEqual(60);
	});
	
	it("returns 233168 given a ceiling of 1000", function () {
		expect(katas.sumNaturalNumbers(1000, [3,5])).toEqual(233168);
	});
});

describe("Problem 2", function(){
    // By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

    it("given a ceiling of 2 the result should be 0", function(){
		expect(katas.sumFibonacciNumbers(2)).toEqual(0);
	});

	it("given a ceiling of 3 the result should be 2", function(){
		expect(katas.sumFibonacciNumbers(3)).toEqual(2);
	});

	it("given a ceiling of 13 the result should be 10", function(){
		expect(katas.sumFibonacciNumbers(13)).toEqual(2 + 8);
	});
	
	it("given a ceiling of 4000000 the result should be 4613732", function(){
		expect(katas.sumFibonacciNumbers(4000000)).toEqual(4613732);
	});
});

describe("Problem 3", function () {
    // Find the largest prime factor of a composite number.

	it("returns 2 given 2", function () {
		expect(katas.getLargestPrimeFactor(2)).toEqual(2);
	});

	it("returns 3 given 3", function () {
		expect(katas.getLargestPrimeFactor(3)).toEqual(3);
	});

	it("returns 2 given 4", function () {
		expect(katas.getLargestPrimeFactor(4)).toEqual(2);
	});

	it("returns 5 given 5", function () {
		expect(katas.getLargestPrimeFactor(5)).toEqual(5);
	});

	it("returns 3 given 6", function () {
		expect(katas.getLargestPrimeFactor(6)).toEqual(3);
	});

	it("returns 29 given 13195", function () {
		expect(katas.getLargestPrimeFactor(13195)).toEqual(29);
	});

	it("returns 6857 given 600851475143", function () {
		expect(katas.getLargestPrimeFactor(600851475143)).toEqual(6857);
	});
});

describe("Problem 4", function () {
    // Find the largest palindrome made from the product of two 3-digit numbers.

	it("returns 9009 given 2 base 10", function () {
		expect(katas.largestPalindromeWithFactors(2, 10)).toEqual(9009);
	});

	it("returns 906609 given 3 base 10", function () {
		expect(katas.largestPalindromeWithFactors(3, 10)).toEqual(906609);
	});
});

describe("Next Lowest Palindrome", function () {
    // Problem 4 helper function.

	it("returns 9779 given 9801", function () {
		expect(katas.nextLowestPalindrome(9801)).toEqual(9779);
	});

	it("returns 997799 given 998001", function () {
		expect(katas.nextLowestPalindrome(998001)).toEqual(997799);
	});

	it("returns 98289 given 98301", function () {
		expect(katas.nextLowestPalindrome(98301)).toEqual(98289);
	});

	it("returns 9983899 given 9984001", function () {
		expect(katas.nextLowestPalindrome(9984001)).toEqual(9983899);
	});

	it("returns 9890989, given 9906001", function () {
		expect(katas.nextLowestPalindrome(9906001)).toEqual(9905099);
	});
});

describe("Problem 5", function () {
    // What is the smallest number divisible by each of the numbers 1 to 20?

	it("returns 2 given 2", function () {
		expect(katas.smallestNumDivisablefrom1to(2)).toEqual(2);
	});

	it("returns 6 given 3", function () {
		expect(katas.smallestNumDivisablefrom1to(3)).toEqual(6);
	});

	it("returns 12 given 4", function () {
		expect(katas.smallestNumDivisablefrom1to(4)).toEqual(12);
	});

	it("returns 60 given 5", function () {
		expect(katas.smallestNumDivisablefrom1to(5)).toEqual(60);
	});

	it("returns 2520 given 10", function () {
		expect(katas.smallestNumDivisablefrom1to(10)).toEqual(2520);
	});

	it("returns 232792560 given 20", function () {
		expect(katas.smallestNumDivisablefrom1to(20)).toEqual(232792560);
	});
});

describe("Problem 6", function () {
    // What is the difference between the sum of the squares and the square of the sums?

	it("returns 1^2 - 1^2 == 0", function () {
		expect(katas.sumOfSqMinusSqOfSums(1,1)).toEqual(0);
	});
	
	it("returns 4 given an input of 2", function () {
		expect(katas.sumOfSqMinusSqOfSums(2)).toEqual(4);
	});
	
	it("returns 2640 given an input of 10", function () {
		expect(katas.sumOfSqMinusSqOfSums(10)).toEqual(2640);
	});
	
	it("returns 25164150 given an input of 100", function () {
		expect(katas.sumOfSqMinusSqOfSums(100)).toEqual(25164150);
	});
});

describe("Problem 7", function () {
    // Find the 10001st prime.

    it("returns 13 given 6", function () {
        expect(katas.nthPrime(6)).toEqual(13);
    });

    it("returns 104743 given 10001", function () {
        expect(katas.nthPrime(10001)).toEqual(104743);
    });
});
