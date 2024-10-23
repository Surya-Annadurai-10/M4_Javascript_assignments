// Day 6 HW :

// Problem 1 : Search in Rotated Sorted Array
 
function searchInRotatedSortedArray(arr, target) {
    let i = 0;
    let j = arr.length - 1; 

    while ( i <= j){
        let mid = Math.floor((i + j) / 2);

        if (arr[mid] == target){
            return mid;
        }else if (arr[mid] >= arr[i]){
            if (target >= arr[i] && target <= arr[mid]){
                j = mid - 1;
            }else{
                i = mid + 1;
            }
        }else if (arr[j] >= arr[mid]){
            if (target >= arr[mid] && target <= arr[j]){
                i = mid + 1;
            }else{
                j = mid - 1;
            }
        }
    }
    return -1;
};

// console.log(searchInRotatedSortedArray( [4,5,6,7,0,1,2] , 0));
// console.log(searchInRotatedSortedArray([4,5,6,7,0,1,2] , 3));
// console.log(searchInRotatedSortedArray([1] , 0));


// Problem 2 : Container with Most water

function ContainerWithMostWater(arr) {
    let maxArea = -Infinity;

    let i = 0;
    let j = arr.length - 1;

    while ( i < j){
        let area = Math.min(arr[i],arr[j]) * (j - i);  // area of rectangle = L x B

        if (area > maxArea){
            maxArea = area;
        }

        if (arr[i] < arr[j]){    // shortest height will be omitted and moves one step forward
            i++;
        }else{
            j--;
        }
    }

    return maxArea;
};

// console.log(ContainerWithMostWater( [1,8,6,2,5,4,8,3,7]))
// console.log(ContainerWithMostWater([1,1]))
// console.log(ContainerWithMostWater([3,6,8,9,2,1,5,7,3,5,6,0,9]))


// Problem 3 : Gas Station

function gasStation(arr, cost) {
    let sumArr = arr.reduce((acc, curr) =>{
       return acc + curr;
    },0);
   
     let sumCost = cost.reduce((acc, curr) =>{
       return acc + curr;
    },0); 
   
    if ( sumCost > sumArr){
       return -1;
    }
    let curr = 0;
    let start = 0;
   
    for (let i = 0; i < arr.length; i++){
       curr += arr[i] - cost[i];
   
       if (curr < 0){
           curr = 0;
           start = i + 1;
       }
    }
    return start;
   };

   console.log(gasStation([1,2,3,4,5],[3,4,5,1,2]))
   console.log(gasStation([2,3,4] , [3,4,3]))
   console.log(gasStation([7 , 3, 8 ,5, 2, 1] , [5 , 9 ,3 ,5, 1, 1]))