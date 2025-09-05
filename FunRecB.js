//Ques.1 Print the number of 11 in the array how many times occurs in the array

function Array11(index, nums) {
   if(index >= nums.length){
      return 0;
   }
   let count = nums[index] == 11 ? 1 : 0;
   return count + Array11(index + 1, nums); 
}

console.log(Array11(0, [1, 3, 11, 11, 2])); // start with index 0


//Ques.2  Print the elements using a Recursive approach and not using loops(for, while, etc).

function printArrayRecursive(arr,index,n){
     if(index>=n){
      return " "
     }
     //process.stdout.write(arr[index] + " ")  //arr[index] = current element  , + " " = uske baad ek space
   //  Ye line har recursive call me ek element space ke saath print karti hai without new line
   return arr[index] + " " + printArrayRecursive(arr,index+1,n)                                             
}
console.log(printArrayRecursive([3, 6, 5, 7, 2], 0, 5))


//Ques.3 print reverse array using recursion

function printReverseArrayRecursive(arr,i,n){
    if(i>=n){
      return ""
    }
    return printReverseArrayRecursive(arr,i+1,n) + arr[i] + " "
}
console.log(printReverseArrayRecursive([1, 2, 3, 4], 0, 4))

//Ques.4 last occurance

function lastOccurance(arr, i, n, a){
 if (i >= n) {
        return -1; // element nahi mila
    }

    // recursion se baaki array me check karo
    let restIndex = lastOccurance(arr, i + 1, n, a);

    // agar baad me mila to wahi return karo
    if (restIndex != -1) {
        return restIndex;
    }

    // warna current index check karo
    return arr[i] == a ? i : -1;
}
console.log(lastOccurance([8, 9, 4, 1, 1, 2], 0, 6, 1))