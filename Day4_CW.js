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

  

// Decode String Problem

function decode(str) {
  let numArr = [];
  let strArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      let num = 0;
      while (str[i] >= "0" && str[i] <= "9") {
        let idx = str.charCodeAt(i) - 48;
        num = num * 10 + idx;
        i++;
      }
      if (!(str[i] >= "0" && str[i] <= "9")) {
        i--;
      }

      if (num > 0) {
        numArr.push(num);
      }
      // numArr.push(str[i]);
    } else if (str[i] == "]") {
      let j = strArr.length - 1;
      let newStr = "";
      while (strArr.length > 0 && strArr[j] != "[") {
        let poped = strArr.pop();
        newStr = poped + newStr;
        j--;
      }
      strArr.pop();
      let popednum = numArr.pop();
      let concateStr = "";

      for (let i = 0; i < popednum; i++) {
        concateStr += newStr;
      }

      strArr.push(concateStr);
    } else {
      strArr.push(str[i]);
    }
  }

  let ans = "";

  for (let i = 0; i < strArr.length; i++) {
    ans += strArr[i];
  }

  return ans;
}

// console.log(decode("3[a]2[bc]"));
// console.log(decode("3[a2[c]]"));
// console.log(decode("2[abc]3[cd]ef"));
// console.log(decode("100[leetcode]"));



//Remove adjacent duplicates Problem Day4 CW

function remove(str){
    let arr = [];
    for (let i = 0; i < str.length; i++){
        if (arr.length > 0 && str[i] == arr[arr.length - 1]){
             arr.pop();
        }else{
            arr.push(str[i]);
        }
    }

   return arr.join('');
}

// console.log(remove("abbaca"))
// console.log(remove("azxxzy"))
// console.log(remove("aactkkkllhadajoall"))


// Reorganize the string

function Reorganize(S){
    let hash = {};
    for (let c of S) hash[c] = hash[c] + 1 || 1;

    let sort = Object.keys(hash).sort((a,b)=>hash[b] - hash[a]);
    let res = [];
    let index = 0;

    for (let i = 0;i<sort.length;i++) {
        let occur = hash[sort[i]];
        if (occur > parseInt((S.length + 1)/2)) return "";
        for (let j = 0;j < occur;j++) {
            if (index >= S.length) index = 1;
            res[index] = sort[i];
            index += 2;
        }
    } 
    return res.join('');
}

// console.log(Reorganize("aab"))
// console.log(Reorganize("aaab"))



// Day 5 -CW

// Q1

let obj = {};

obj.name = "John";
obj.surname = "Smith";
obj.name = "Pete"
delete obj.name;

// console.log(obj)



// Q2

let schedule ={};

function isEmpty(obj){
 
  for (let key in obj){
    if (obj.hasOwnProperty(key)){
      return false;
    }

    return true;
  }
}

console.log(isEmpty(schedule));
