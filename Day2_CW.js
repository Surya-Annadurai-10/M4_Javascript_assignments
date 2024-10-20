// Patterns problems

// Problem 1:


// let ans = "";
// let rows = 5;
// let sp = rows - 1;
// let st = 1;

// for (let i = 0; i < rows; i++){
//     for ( let j = 0; j < sp; j++){
//         ans += "  ";
//     }

//     for ( let j = 1; j <= st; j++){
//         ans += j + " ";
//     }

//     sp--;
//     st += 2;
//     ans += "\n";
// }

// console.log(ans);



// Problem 2:
// let input = 5;
// let rows = (input * 2) - 1;
// let ans = "";
// let st = 1;
// let sp = input - 1;

// for ( let i = 0; i < rows; i++){
//     for ( let j = 0; j < sp; j++){
//         ans +="  ";
//     }

//     for ( let j = 1; j <= st; j++){
//         ans += j + " ";
//     }

//     if ( i < (Math.floor(rows / 2))){
//         sp--;
//         st++;
//     }else{
//         sp++;
//         st--;
//     }
//     ans += "\n";
// }

// console.log(ans);



// Problem 3:

// let input = 5;
// let rows = (input * 2) - 1;
// let ans = "";
// let st = 1;

// for ( let i = 0; i < rows; i++){
//     for (let j = st; j >= 1; j--){
//         ans += j + " ";
//     }

//     if ( i < (Math.floor(rows / 2))){
//         st++;
//     }else {
//         st--;
//     }
//     ans +="\n";
// }

// console.log(ans);

// // Problem 4:
// let input = 5;
// let ans = "";
// let sp = 0;
// let st = (input * 2) - 1;

// for ( let i= 0; i < input; i++){
//     for ( let j = 0; j < sp; j++){
//         ans += "  ";
//     }

//     for ( let j = 1; j <= st; j++){
//         ans += j + " ";
//     }

//     st -=2;
//     sp++;
//     ans += "\n";
// }

// console.log(ans);

// -------------------------------------------------------------------------------------------


