// Sum All Numbers in a Range

function smallAll(arr){
    let first = arr[0];
    let last = arr[1];

    if(first > last){
        first = arr[1];
        last = arr[0];
    }

    let output = 0;
    for(let i = first; i <= last; i++){
        output += i

    }
    return output;

}
let result = smallAll([1, 4]);
console.log(result);


// challenge one : Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) + 32
    return fahrenheit;
  }
  
  let far = convertCtoF(30);
  console.log(far);

//   Reverse a String
function reverseString(str) {
    let output = "";
    for(let i = str.length - 1; i >= 0; i --){
      output += str[i]
    }
    return output;
  }
  
  let outcome = reverseString("hello");
  console.log(outcome);

//   Factorize a Number
function factorize(num) {
    let product = 1;
     for (let i = 2; i <= num; i++) {
       product *= i;
     }
     return product;
   }
   
   
   let answer = factorize(5);
   console.log(answer);

  //  Truncate a String
  function truncateString(str, num) {
    let output = str.substring(0, num);
    if (output.length < str.length){
      output += '...'
    }
    return output
  }
let res = truncateString("fatema is a programmer", 10);
console.log(res);

// where do the number belong
function getIndexToIns(arr, num) {
  let belong = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < num){
      belong ++
    }
  }
  return belong;
}

let resu = getIndexToIns([40, 30, 20, 60], 50);
console.log(resu);

// chunk array in group
function chunkyArray(arr, size){
  let output = [];
  let subarray = [];
  let subctr = 0;
  for(let i = 0; i < arr.length; i++){
    if(subctr === size){
      subctr = 0;
      output.push(subarray);
      subarray = [];
    }
    subarray.push(arr[i]);
    subctr++;
  }
  output.push(subarray);
  return output;
}
let ans =chunkyArray(["a", "b", "c", "d"], 2);
console.log(ans);

// Seek and Destroy
function destroyer(arr){
  let output = [];
  let input = arguments[0];
  let destroy = [];
  for (let i = 1; i < arguments.length; i++){
    destroy.push(arguments[i])
  }
  for(let i = 0; i < input.length; i++){
    if(destroy.includes(input[i]) === false){
      output.push(input[i]);
    }
  }
  return output
}
 let add = destroyer([1, 2, 3, 4, 5, 6], 4, 5, 6);
 console.log(add);

//   way of altering English Words
function translate(str){
  let firstLetter = str[0];
  let vowel = "aeiou"
  if(vowel.includes(firstLetter)){
    return str + way;
  }
  let i = 0;
  let cluser = "";
  while(vowel.includes(str[i]) && i < str.length){
    cluser += str[i]
    i++;
  }
  return str.substring(i) + cluser + "ay";
}
let reverse = translate('fatema');
console.log(reverse);