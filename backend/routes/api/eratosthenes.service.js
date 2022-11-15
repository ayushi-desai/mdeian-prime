/**
 * @param {Number} [n]
 * @return {Array} - median of prime numbers less than given n
 */

exports.getPrimeMedian = function (number) {
    var primes = new Array(number + 1);

    // Make an array from 2 to (n - 1)
    for (let i = 2; i <= number; i++) {
        primes[i] = i;
    }

    //Removing multiplies
    for (let i = 2; i <= number; i++) {
        //Check if its prime
        if (primes[i]) {
            //Eliminate the multiplies of i
            for (let j = i * 2; j <= number; j += i) {
                primes[j] = null;
            }
        }
    }

    // Add all indexes with true value from numbers to primes
    primes = removeNull(primes);

    // Dividing length of found prime numbers in half
    const mid = Math.floor(primes.length / 2);

    return primes.length % 2 !== 0 ? [primes[mid]] : [primes[mid - 1], primes[mid]];;
};

function removeNull(array) {
    return array.filter(x => x !== null)
};