/**
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. 
Ignore numbers and punctuation.

 */

const isPangram = string => {
    let checkMap =  string.toLowerCase().split('').reduce((accum, currItem) => {
        return /[a-z]/.test(currItem) 
            ? 
            accum.has(currItem) ? accum.set(currItem, accum.get(currItem) + 1) : accum.set(currItem, 1) 
            :
            accum;
    }, new Map());

    return checkMap.size == 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
//console.log(isPangram());