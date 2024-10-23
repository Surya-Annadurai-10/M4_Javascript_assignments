// DAY 6 CW:-

// Problem 1 : Two Sum

function twoSum(nums, target) {
  let arr = [...nums];
  arr.sort((a, b) => {
    return a - b;
  });
  let ans = [];
  let i = 0;
  let j = arr.length - 1;
  let sumArr = [];
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      ans.push(arr[i]);
      ans.push(arr[j]);
      i++;
      j--;
    }
  }
  let idx = [];
  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (ans[i] == nums[j]) {
        idx.push(j);
        delete nums[j];
      }
    }
  }
  return idx;
}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// Problem 2 : 3 sum

function threeSum(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  let ans = [];

  for (let k = 0; k < arr.length; k++) {
    if (k > 0 && arr[k] === arr[k - 1]) {
      continue;
    }
    let i = k + 1 ,  j = arr.length - 1 , target = -1 * arr[k];

    while (i < j) {
      let sum = arr[i] + arr[j];

      if (sum == target) {
        let val = [arr[k] , arr[i] , arr[j]];
        ans.push(val);
        i++;
        j--;
        while (arr[i] == arr[i - 1]) i++;
        while (arr[j] == arr[j + 1]) j--;
      } else if (sum < target) {
        i++;
      } else if (sum > target) {
        j--;
      }
    }
  }
  return ans;
}
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0]));



// Problem 3 : Plaindrome number

function PalindromeNumber(x) {
    let str = x.toString();
    let arr = str.split("");

    arr.reverse();

    let str1 = arr.join("");

    if (str == str1){
        return true;
    }else{
        return false;
    }
};

// console.log(PalindromeNumber(121));
// console.log(PalindromeNumber(-121));
// console.log(PalindromeNumber(10));

// Problem 4 : Maximum Sum Subarray;

function maxSubarray(arr) {
    let sumSoFar = -Infinity;
    let maxSum = -Infinity;

    for (let i = 0; i < arr.length; i++){
        if ( sumSoFar < 0){
            sumSoFar = arr[i];
        }else{
            sumSoFar += arr[i];
        }

        if (sumSoFar > maxSum){
            maxSum = sumSoFar;
        }
    }

    return maxSum;
};

console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubarray([1]))
console.log(maxSubarray([5,4,-1,7,8]));