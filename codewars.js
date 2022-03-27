// This function returns the first non consecutive number in an arrayu or returns null if the entire array is consecutive

function firstNonConsecutive (arr) {
    let result = null;
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] !== arr[i + 1] - 1)
        result = arr[i + 1];
    }
    return result 
  }