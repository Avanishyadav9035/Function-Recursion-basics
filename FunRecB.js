//Ques.1 Print the number of 11 in the array how many times occurs in the array

function Array11(index, nums) {
   if(index >= nums.length){
      return 0;
   }
   let count = nums[index] == 11 ? 1 : 0;
   return count + Array11(index + 1, nums); // ✅ correct order
}

console.log(Array11(0, [1, 3, 11, 11, 2])); // start with index 0
