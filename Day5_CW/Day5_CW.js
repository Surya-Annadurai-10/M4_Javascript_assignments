
// Day 5 -CW

// Q1

// let obj = {};

// obj.name = "John";
// obj.surname = "Smith";
// obj.name = "Pete"
// delete obj.name;

// console.log(obj)



// Q2



let schedule ={};

// let schedule ={
//    "8.30" : "get up"
// }
// function isEmpty(obj){
 
//   for (let key in obj){
//     if (obj.hasOwnProperty(key)){
//       // return false;
//       alert("false");
//      return;
//     }
//   }
//   // return true;
//   alert("true");
//   return;
// }

// isEmpty(schedule);



// Q3 

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let salaries1 = {

  }

function sum(salaries){
    let result = 0;

for (let amount in salaries){
    result += salaries[amount];
}
return result;
}

// console.log(sum(salaries));
// console.log(sum(salaries1));


// Q4

let calculator = {
  read : function(){
    this.a =Number( prompt("Enter The Value of a :"));
    this.b = Number(prompt("Enter The Value of b :"));
  },

  sum : function(){
    return this.a + this.b;
  },

  multiply : function(){
  return this.a * this.b;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.multiply());







   