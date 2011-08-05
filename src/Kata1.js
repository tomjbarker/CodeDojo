var katas = (function(){
	function getNextFib(nMinus1, nMinus2) {
		return (nMinus1 + nMinus2);
	}
	
	// Returns an array of size n + 1.
	// Elements that contain 0 are NOT prime.
	// Elements that contain undefined ARE prime.
	function sieveOfEratosthenes(n) {
		var i, p, array = new Array(n + 1);
		
		for (p = 2; p <= n; p += 1) {
			if (array[p] === 0) {
				continue;
			}
			for (i = p * p; i <= n; i += p) {
				array[i] = 0;
			}
		}

		return array;
	}
	
	function primeFactors(n) {
		var array = [];
	
		function factorize(n, p) {
			if (n % p === 0) {
				if (n / p === 1) {
					array.push(p);
				} else {
					factorize(p, 2);
					factorize(n / p, p);
				}
			} else {
				factorize(n, p + 1);
			}
		}
		
		factorize(n, 2);
		
		return array;
	}
	
	return{
		nextLowestPalindrome : function (n, base) {
			var base = base || 10,
				orgN = n,
				numOfDigits = parseInt(Math.log(n, 10) / Math.log(base, 10), base),
				min = 1,
				max = Math.pow(base, numOfDigits),
				palin = 0;
			
			function findPalindrome(nArg, minArg, maxArg) {
				var p = parseInt(nArg / maxArg, base),
					minP = minArg * p,
					maxP = maxArg * p,
					nextMin = minArg * base,
					nextMax = maxArg / base,
					nextN = nArg - maxP;
					
				palin += minP + maxP;
				
				function adjustPalindrome(amount, action) {
					if (action === "add") {
						if (palin + amount <= orgN) {
							palin += amount;
							adjustPalindrome(amount, action);
						} else {
							return;
						}
					} else {
						if (palin > orgN) {
							palin -= amount;
							adjustPalindrome(amount, action);
						} else {
							return;
						}
					}
				}
				
				if (nextMin > nextMax) {
					adjustPalindrome(nextMin + nextMax, "sub");
				} else if (nextMin === nextMax) {
					adjustPalindrome(nextMin, "add");
				} else {
					findPalindrome(nextN, nextMin, nextMax);
				}
			}
			
			findPalindrome(n, min, max);
			return palin;
		},
		
		largestPalindromeWithFactors : function (numOfDigitsInFactor, base) {
			var min = Math.pow(base, numOfDigitsInFactor - 1),
				max = Math.pow(base, numOfDigitsInFactor) - 1,
				self = this,
				i, j, factor1;

			function largestPalindrome(palinArg) {
				for(i = max; i > min; i -= 1) {
					if (palinArg % i === 0) {
						factor1 = i;
						for(j = factor1; j > min; j -= 1) {
							if (factor1 * j === palinArg) {
								return palinArg;
							}
						}
					}
				}
				if (palinArg < Math.pow(min, 2)) {
					return -1;
				} else {
					return largestPalindrome(self.nextLowestPalindrome(palinArg - 1, base));
				}
			}
			return largestPalindrome(self.nextLowestPalindrome(Math.pow(max, 2), base));
		},
		
		getLargestPrimeFactor : function (n) {			
			var array = primeFactors(n);
			
			return array[array.length - 1];
		},
		
		smallestNumDivisablefrom1to : function(ceiling){
			var i, j, array = [], result = 1;
			
			for (i = 2; i <= ceiling; i+= 1) {
				array[i] = i;
			}
			
			for (i = 2; i <= ceiling; i += 1) {
				for (j = 2 * i; j <= ceiling; j += 1) {
					if (array[j] % array[i] === 0) {
						array[j] /= array[i];
					}
				}
				result *= array[i];
			}
			
			return result;
		},
		
		sumOfSqMinusSqOfSums : function(limit){
			var i, sumOfSq = 0, sqOfSums = 0;
			
			for(i = 1; i <= limit; i += 1) {
				sumOfSq += i*i;
				sqOfSums += i;
			}
			sqOfSums *= sqOfSums;
			
			return sqOfSums - sumOfSq;
		},
			
		sumFibonacciNumbers : function(ceiling){
			var fibResult = 0, result = 0, nMinus1 = 1, nMinus2 = 0;
			
			while (fibResult < ceiling - 1) {
				fibResult = getNextFib(nMinus1, nMinus2);
				nMinus2 = nMinus1;
				nMinus1 = fibResult;
				if (fibResult % 2 == 0) {
					result += fibResult;
				}
			}
			return result;
		},
		
		
		sumNaturalNumbers : function(ceiling, arrayOfFactors){
			var sum = 0, i, j;
			
			for (i=0; i < ceiling; i++) {
				for (j=0; j < arrayOfFactors.length; j++) {
					if (i % arrayOfFactors[j] == 0) {
						sum += i;
						break;
					}
				}
			}
			return sum;
		}
	};
})();