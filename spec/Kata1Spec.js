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

describe("Problem 8", function () {
    // Discover the largest product of five consecutive digits in the 1000-digit number.
	
	it("returns 343 given 1276652177732116012", function () {
		expect(katas.largestProdOfNConsDigits("1276652177732116012", 3)).toEqual(343);
	});

    it("returns 40824 given 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450", function () {
        expect(katas.largestProdOfNConsDigits("7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450", 5)).toEqual(40824);
    });
});

describe("Problem 9", function () {
	// Find the only Pythagorean triplet, {a, b, c}, for which a + b + c = 1000.
	
	it("returns 60 given 12", function () {
		expect(katas.pythagoreanTripletProduct(12)).toEqual(60);
	});
	
	it("returns 5*12*13 given 5+12+13", function () {
		expect(katas.pythagoreanTripletProduct(30)).toEqual(780);
	});
	
	it("returns 31875000 given 1000", function () {
		expect(katas.pythagoreanTripletProduct(1000)).toEqual(31875000);
	});	
	
	it("returns 31875000 given 1000000", function () {
		expect(katas.pythagoreanTripletProduct(1000000)).toEqual(31875000000000000);
	});
});

describe("Problem 10", function () {
	// Calculate the sum of all the primes below two million.
	
	it("returns 17 given 10", function () {
		expect(katas.sumOfPrimes(10)).toEqual(17);
	});
	
	it("returns 142913828922 given 2000000", function () {
		expect(katas.sumOfPrimes(2000000)).toEqual(142913828922);
	});
});

describe("Problem 11", function () {
	// In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
	
	it("returns ??? given the array 20x20 array a size of 4", function () {
		expect(katas.largestNInARow(4, [
			[08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
			[49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
			[81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
			[52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
			[22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
			[24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
			[32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
			[67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
			[24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
			[21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
			[78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
			[16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
			[86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
			[19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
			[04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
			[88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
			[04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
			[20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
			[20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
			[01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48]])).toEqual("???");
	});
});