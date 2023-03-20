/**
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

    There are preloaded dictionary you can use, named NATO
    The set of used punctuation is ,.!?.
    Punctuation should be kept in your return string, but spaces should not.
    Xray should not have a dash within.
    Every word and punctuation mark should be seperated by a space ' '.
    There should be no trailing whitespace

 */

const alphabetNATO = new Map([
        ['A', 'Alfa'],
        ['B', 'Bravo'],
        ['C', 'Charlie'],
        ['D', 'Delta'],
        ['E', 'Echo'],
        ['F', 'Foxtrot'],
        ['G', 'Golf'],
        ['H', 'Hotel'],
        ['I', 'India'],
        ['J', 'Juliett'],
        ['K', 'Kilo'],
        ['L', 'Lima'],
        ['M', 'Mike'],
        ['N', 'November'],
        ['O', 'Oscar'],
        ['P', 'Papa'],
        ['Q', 'Quebec'],
        ['R', 'Romeo'],
        ['S', 'Sierra'],
        ['T', 'Tango'],
        ['U', 'Uniform'],
        ['V', 'Victor'],
        ['W', 'Whiskey'],
        ['X', 'Xray'],
        ['Y', 'Yankee'],
        ['Z', 'Zulu'],
        ['1', 'One'],
        ['2', 'Two'],
        ['3', 'Three'],
        ['4', 'Four'],
        ['5', 'Five'],
        ['6', 'Six'],
        ['7', 'Seven'],
        ['8', 'Eight'],
        ['9', 'Nine'],
        ['0', 'Zero'],
]);

const to_nato = (words) =>
    words.replace(/[ ]/g, '').split('').reduce((accum, currItem) => {
        return accum.concat(alphabetNATO.has(currItem.toUpperCase()) ? alphabetNATO.get(currItem.toUpperCase()) : currItem);
    }, []).join(' ');

console.log(to_nato('I love you!'));
console.log(to_nato('If you can read'));
console.log(to_nato('Did not see that coming'));