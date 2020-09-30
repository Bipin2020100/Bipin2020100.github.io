let brr = [5, 2, 1, -10, 8];

function shortDecreasing(arr){
  arr.sort((a,b) => b - a );
  alert(arr);
}

//second solution:
// arr.sort(function(a,b){return b-a});