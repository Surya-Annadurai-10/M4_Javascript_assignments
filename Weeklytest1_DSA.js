// Weekly Test 1 : Module 4

//Problem 1: String Reversal
function reverseString(input) {
    let arr = [];
  
    for (let i = 0; i < input.length; i++) {
      arr.push(input[i]);
    }
  
    let i = 0;
    let j = input.length - 1;
  
    while (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  
    let ans = "";
  
    for (let i = 0; i < arr.length; i++) {
      ans += arr[i];
    }
  
    console.log(ans);
  }
  
  // reverseString("Hello world");
  // reverseString("Geekster");
  
  // Problem 2: Anagram Check
  
  function anagram(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");
  
    if (arr1.length != arr2.length) {
      return false;
    }
    arr1.sort();
    arr2.sort();
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  // console.log(anagram("anagram", "nagaram"));
  // console.log(anagram("state","taste"));
  // console.log(anagram("geekster", "geekstor"))
  
  //Problem 3: String Palindrome
  
  function Palindrome(str) {
    let n = str.length;
    let i = 0;
    let j = n - 1;
  
    while (i < j) {
      if (str[i] != str[j]) {
        return false;
      }
      i++;
      j--;
    }
  
    return true;
  }
  
  // console.log(Palindrome("madam"));
  // console.log(Palindrome("racecar"));
  // console.log(Palindrome("geekster"));
  
  //Problem 4: Array intersection
  
  function arrayintersection(arr1, arr2) {
    let ans = "";
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
          ans += arr1[i] + " ";
          break;
        }
      }
    }
  
    console.log(ans);
  }
  
  // arrayintersection([1,8,4,7,3,4] , [2,8,0,4,6,2])
  // arrayintersection([6,3,6,2,1,9,2] , [5,4,1,3,8,0,4])
  // arrayintersection([2,5,9,2,4,1,0] , [8,3,9])
  
  //Problem 5: Array Rotation
  
  function rotateArray(arr, k) {
    let n = arr.length;
  
    reverse(arr, n - k, n - 1);
    reverse(arr, 0, n - k - 1);
    reverse(arr, 0, n - 1);
  
    let ans = "";
  
    for (let i = 0; i < arr.length; i++) {
      ans += arr[i];
    }
  
    console.log(ans);
  
    function reverse(arr, i, j) {
      while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
      }
    }
  
    function swap(arr, x, y) {
      let temp = arr[x];
      arr[x] = arr[y];
      arr[y] = temp;
    }
  }
  // rotateArray(['g','e','e','k','s','t','e','r'] , 5);
  // rotateArray(['g','e','e','k','s','t','e','r'] , 3);
  
  // Problem 6; Array Sum
  
  function arraySum(arr, target) {
    let sortedArr = arr.sort((a, b) => {
      return a - b;
    });
  
    let i = 0;
    let j = arr.length - 1;
  
    while (i < j) {
      let sum = arr[i] + arr[j];
  
      if (sum == target) {
        console.log(arr[i], arr[j]);
        i++;
        j--;
      } else if (sum > target) {
        j--;
      } else if (sum < target) {
        i++;
      }
    }
  }
  // arraySum([4,8,2,9,0,2,1], 3);
  // arraySum([4,8,2,9,0,2,1], 8);
  // arraySum([4,8,2,9,0,2,1], 10);\
  
  //Problem 7: String Compression
  
  function StringCom(str) {
    let arr = str.split("");
    let n = arr.length;
    let ans = "";
    let i = 0;
    let j = 0;
  
    while (j < n) {
      let count = 0;
      ans += arr[i];
      while (j < n && arr[i] == arr[j]) {
        count++;
        j++;
      }
  
      i = j;
      ans += count;
    }
  
    console.log(ans);
  }
  
  // StringCom("aabcccccaaa");
  // StringCom("fffzzzqqqqqqoooooooo");
  // StringCom("nnnnniiiiyyyyyllll");
  
  // Problem 8: Longgest Substring without Repeating Characters
  
  function substring(s) {
    let n = s.length;
    let set = new Set();
    let maxLength = 0;
    let start = 0;
    let maxStart = 0;
    let maxEnd = 0;
    let i = 0,
      j = 0;
  
    while (i < n && j < n) {
      if (!set.has(s[j])) {
        set.add(s[j++]);
        if (j - i > maxLength) {
          maxLength = j - i;
          maxStart = i;
          maxEnd = j;
        }
      } else {
        set.delete(s[i++]);
      }
    }
  
    return s.substring(maxStart, maxEnd);
  }
  
  //   let str = "abcabcbb";
  //   let str1="jnfsdskkalll"
  //   let str2="jsfwejnasknaO"
  //   console.log(substring(str));
  //   console.log(substring(str1));
  //   console.log(substring(str2));
  
  // DAY 4 - Class Assignment
  
  // Problem 2: Valid Anagram
  
  function anagram(str1, str2) {
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);
  
    if (str1.length != str2.length) {
      return false;
    }
  
    for (let i = 0; i < str1.length; i++) {
      let idx = str1.charCodeAt(i) - 97;
      arr1[idx]++;
    }
  
    for (let i = 0; i < str2.length; i++) {
      let idx = str2.charCodeAt(i) - 97;
      arr2[idx]++;
    }
  
    for (let i = 0; i < str1.length; i++) {
      let idx = str1.charCodeAt(i) - 97;
  
      if (arr1[idx] != arr2[idx]) {
        return false;
      }
    }
    return true;
  }
  console.log(anagram("anagram", "nagaram"));
  console.log(anagram("rar", "car"));
  console.log(anagram("bat", "tab"));
  