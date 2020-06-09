//1

function toInt(int) {
  //function that returns string to int and convert X to 10
}

const validateISBN = (isbn) => {
  const cleanISBN = isbn.replace(/-/gi, "");
  if (cleanISBN.length !== 10){
    return false
  }
  const sum = 0;
  for(let i=0; i<cleanISBN; i++){
    sum = sum + toInt(cleanISBN[i]) * (10 - i);
  }
  const remainder = sum % 11;
  return remainder === 0;
}


//factorial
const factorial = (num) => {
  if (num < 1) {
    return false
  }
  let sum = num;
  for (let i = 1; num > i; num--) {
    sum = sum * (num - i)
  }

  return sum
}

const cubes = (num) => {
  let total = 1;
  let rims = 4;
  let prev1 = 0;
  let prev2 = 0;
  for (let i = 1; num >= i; i++) {
    if(i>1) {
      total = (prev1 - prev2 + rims) + total
      prev2 = prev1;
      prev1 = total;
    }
  }

  return total;
}