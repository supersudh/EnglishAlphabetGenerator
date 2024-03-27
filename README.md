function EngLishAlphabetGenerator(upperCase = true) { // Pass upperCase as true if you require upper case alphabets
    try {
        let [lowerBound, upperBound] = [(upperCase ? 'A' : 'a').charCodeAt(0), (upperCase ? 'Z' : 'z').charCodeAt(0)]
        const result = [];
        for (; ;) {
            result.push(String.fromCharCode(lowerBound++)); // or toString(............)
            if (lowerBound > upperBound) return result;
        }

    } catch (error) {
        throw new Error(error); // We are safe
    }
}

lowercasealphabets = EngLishAlphabetGenerator();
UPPERCASEALPHABETS = EngLishAlphabetGenerator(false);

// The result array will be printed here as a 1D Matrix
console.log(lowercasealphabets);
console.log(UPPERCASEALPHABETS); 

// OUTPUT:
/*
[
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ]
  [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ]
*/
