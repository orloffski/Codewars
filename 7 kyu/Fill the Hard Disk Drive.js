/**
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. 
The files must be saved in the order they appear in the queue.
Input:

    Array of file sizes (0 <= s <= 100)
    Capacity of the HD (0 <= c <= 500)

Output:

    Number of files that can be fully saved in the HD.

Examples:

save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12

save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11

Do not expect any negative or invalid inputs.

 */

const save = (sizes, hd) => {
    let index = 0;

    let usedHd = sizes.reduce((accum, currItem, currIndex) => {
        if(accum <= hd){
            index = currIndex;
        }

        return accum + currItem;
    }, 0);

    return index == sizes.length - 1 && usedHd <= hd ? ++index : index;
}

console.log(save([4, 4, 4, 3, 3], 12));
console.log(save([4, 4, 4, 3, 3], 11));
console.log(save([4, 8, 15, 16, 23, 42], 108));
console.log(save([13], 13));
console.log(save([1, 2, 3, 4], 250));
console.log(save([100], 500));
console.log(save([11, 13, 15, 17, 19], 8));
console.log(save([45], 12));
console.log(save([8,1,5,1,2,20,0,19,3,6,16], 77));