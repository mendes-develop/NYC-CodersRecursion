

//1, 1, 2, 3, 5, 8
function fib(n) {
  if (n > 0 && n <= 2) return 1;
  else if (n <= 0) return 0;
  else return fib(n - 1) + fib(n - 2);
  
}
//console.log(fib(6));


function flattenArrayReduce(inputArray) {
  return inputArray.reduce((flatarray, eacharray) => {
    if (Array.isArray(eacharray)) {
      // return flatarray.concat(flattenArrayReduce(eacharray));
      return [...flatarray, ...flattenArrayReduce(eacharray)]
    } else {
      // return flatarray.concat(eacharray);
      return [...flatarray, eacharray]
    }
  }, [])
}

const helper = (array, res) => {
  for (let ii = 0; ii < array.length; ii++) {
    let curr = array[ii];
    if (Array.isArray(curr)) {
      helper(curr, res);
    } else {
      res.push(curr);
    }
  }
  return res;
}

const flattenArray = array => { 
  if (array.length === 0) {
    return array
  } else {
    return helper(array, [])
  }
}
console.log(flattenArray([1, 2, [3, [4, 5], 6], [7]]));

// console.log(flattenArrayHelper([1, 2, [3, [4, 5], 6], [7]]));
console.log(flattenArrayReduce([1, 2, [3, [4, 5], 6], [7]]));

const multiplyArray = array => {
  if (array.length === 0) return 1
  // return array[0] * multiplyArray(array.slice(1));
  // 1 * [1, 2, 3, 4].slice(1)
  // 2 * [2, 3, 4].slice(1)
  // 3 * [3, 4].slice(1)
  // 4 * [4].slice(1)
  // 1 * []
  return array[0] * multiplyArray(array.splice(1, array.length - 1));
  // 1 * [1, 2, 3, 4].splice(1, array.length - 1)
  // 2 * [2, 3, 4].splice(1, array.length - 1)
  // 3 * [3, 4].splice(1, array.length - 1)
  // 4 * [4].splice(1, array.length - 1)
  // 1 * []
}

// const multiplyArrayReduce = array => {
//   return array.reduce((multiply, eachElt) => {
//     return multiply * eachElt;
//   }, 1);
// }

// console.log(multiplyArray([1, 2, 3, 4]))

const isPalendrome = str => {
  // if (str.length == 1) {
  //   return true;
  // } else {
  //   if (str.substr(0, 1) === str.substr(str.length - 1, 1)) {
  //     return isPalendrome(str.substr(1, str.length - 2));
  //   } else {
  //     return false
  //   }
  // }
  return (str.length === 1) ? true : (str.substr(0, 1) === str.substr(str.length - 1, 1)) ? isPalendrome(str.substr(1, str.length - 2)) : false
}

console.log(isPalendrome('aab'));
console.log(isPalendrome('aaa'));
console.log(isPalendrome('aba'));
console.log(isPalendrome('abc'));
console.log(isPalendrome('racecar'));