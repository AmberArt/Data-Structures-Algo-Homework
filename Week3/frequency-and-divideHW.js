const majorityNum = (nums) => {
   const n = nums.length/2;

   const lookup = {};
   for (const value of nums) {
    lookup[value] = (lookup[value] ?? 0) + 1; 
   }
   for (const value in lookup) {
    if (lookup[value] > n){
        return value;
    }
   }
}

const binaryIterativeSearch = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end){
        let middleIndex = Math.floor((start + end) / 2);
        if (nums[middleIndex] === target) {
            return middleIndex;
        } else if (nums[middleIndex] < target) {
            start = middleIndex + 1;
        } else {
            end = middleIndex - 1;
        }
    }
    return -1;
}

console.log(binaryIterativeSearch([1, 2, 3, 4, 5], 4));
