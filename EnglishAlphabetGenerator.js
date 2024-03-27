
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

