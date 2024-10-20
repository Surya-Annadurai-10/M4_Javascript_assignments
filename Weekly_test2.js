function sumFibs(num) {
    let a = 0;
    let b = 1;
    let sum = 0;
    let oddSum = 0;
  
    while (sum <= num){
        if (b % 2 != 0){
          oddSum += b;
        }
        sum = a + b;
        a = b;
        b = sum;
    }
  
    return oddSum;
  }
  
 console.log( sumFibs(4000000));
// sumFibs(4);