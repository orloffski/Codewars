/**
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

 */

const solution = (input, markers) =>
    input.split('\n').reduce((result, currItem) => {
        let line = currItem;

        for(let i = 0; i < markers.length; i++){
            if(currItem.includes(markers[i])){
                line = currItem.split(markers[i])[0].trim();;
                break;
            }
        }

        return result + line + '\n';
    },'').trimRight();

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));