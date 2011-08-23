var katas = (function(){
    // Problem 1 helper
    function addFactor(n, arr) {
        var j;

        for (j=0; j < arr.length; j++) {
            if (n % arr[j] == 0) {
                return n;
            }
        }
        return 0;
    }

    // Problem 2 helper
    function getNextFib(nMinus1, nMinus2) {
        return (nMinus1 + nMinus2);
    }

    // Problme 3 helper
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

    // Problem 4 helper
    function numberOfDigits(n, base) {
        base = base || 10;
        return parseInt(Math.log(n, 10) / Math.log(base, 10), base);
    }

    // Problem 7 helper
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

    // Problem 7 helper
    // Eric Bach, Jeffrey Shallit (1996). Algorithmic Number Theory. 1. MIT Press. p. 233. ISBN 0-262-02405-5.
    function nthPrimeUpperBound(n) {
        return parseInt(n*Math.log(n) + n*Math.log(Math.log(n)), 10);
    }

	// Problem 8 Misinterpretation
    function prodOfNIntsWithIdenticalDigits (strNum, n, base) {
        base = base || 10;

		var i, j = 0, consNums = [], result = 1;
		
		consNums[0] = "";
		for (i = 0; i < strNum.length; i += 1) {
			if (strNum[i] === strNum[i + 1]) {
				consNums[j] += strNum[i];
				if (strNum[i + 1] !== strNum[i + 2]) {
					consNums[j] += strNum[i + 1];
					j += 1;
					consNums[j] = "";
				}
			}
		}
		consNums = consNums.sort(function (a, b) {
			return parseInt(a, base) < parseInt(b, base);
		});

		for (i = 0; i < n; i += 1) {
			result *= parseInt(consNums[i], base);
		}

		return result;
    }

    return{
		// Problem 9
		pythagoreanTripletProduct : function (sumOfTriplet) {
			var	m, n, k, a, b, c;
			for (m = 2; m < sumOfTriplet; m += 1) {
				for (n = m-1; n > 0; n -= 1) {
					for (k = 1; k < sumOfTriplet; k += 1) {
						a = k*((m*m)-(n*n));
						b = k*(2*m*n);
						c = k*((m*m)+(n*n));
						if (a+b+c === sumOfTriplet) {
							return a*b*c;
						}
					}
				}
			}
			return -1;
		},
	
        // Problem 8
        largestProdOfNConsDigits : function (strNum, n, base) {
            base = base || 10;

			var i, temp, result = 1, array = strNum.split(/0+/).filter(function (subNum) {
				return (subNum.length >= n);
			});
			
			for(i = 0; i < array.length; i += 1) {
				temp = katas._largestProdOfNNonZeroConsDigits(array[i], n, base);
				if (temp > result) {
					result = temp;
				}
			}
			
			return result;
        },

		// Problem 8 helper
		_largestProdOfNNonZeroConsDigits: function (strNum, n, base) {
			base = base || 10;
			
			var i, j, temp, result = 1;
			
			for (i = 0; i + n - 1 < strNum.length; i += 1) {
				temp = 1;
				for (j = i; j < i + n; j += 1) {
					temp *= parseInt(strNum[j], base);
				}
				if (temp > result) {
					result = temp;
				}
			}
			
			return result;
		},

        // Problem 7
        nthPrime : function (n) {
            var upperBound = nthPrimeUpperBound(n),
                array, i, j = 0;

            array = sieveOfEratosthenes(upperBound);

            for (i = 2; i < array.length; i += 1) {
                if (typeof array[i] === "undefined") {
                    j += 1;
                    if (j === n) {
                        return i;
                    }
                }
            }

            return -1;
        },

        // Problem 6
        sumOfSqMinusSqOfSums : function(limit){
            var i, sumOfSq = 0, sqOfSums = 0;

            for(i = 1; i <= limit; i += 1) {
                sumOfSq += i*i;
                sqOfSums += i;
            }
            sqOfSums *= sqOfSums;

            return sqOfSums - sumOfSq;
        },

        // Problem 5
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

        // Problem 4 helper
        nextLowestPalindrome : function (n, base) {
            var base = base || 10,
                orgN = n,
                numOfDigits = numberOfDigits(n, base),
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

        // Problem 4
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

        // Problem 3
        getLargestPrimeFactor : function (n) {
            var array = primeFactors(n);

            return array[array.length - 1];
        },

        // Problem 2
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

        // Problem 1
        sumNaturalNumbers : function(ceiling, arrayOfFactors){
            var sum = 0, i;

            for (i=0; i < ceiling; i++) {
                sum += addFactor(i, arrayOfFactors);
            }
            return sum;
        }
    };
})();
