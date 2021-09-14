/* eslint-disable */

/* TODO: create a doubleItem function that accepts an array of number and 
returns an array of equal length but with all of its item double  */

let doubleItem = (arr_num) => {
  for (let i = 0; i < arr_num.length; i++) {
    arr_num[i] *= 2;
  }
  // console.log(`The output for ${doubleItem.name} is: ${arr_num}`)
  return arr_num
}

/* TODO: create an invertSign function that accepts an array of number and 
returns an array of equal length but with all of its item sign inverted */

let invertSign = (arr_num) => {
  for (let i=0; i <arr_num.length; i++) {
    arr_num[i] *= -1
  }
  // console.log(`The output for ${invertSign.name} is: ${arr_num}`)
  return arr_num
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: assign idNumber of all participants to idNumbers
  const idNumbers = participants.map((person) => person.idNumber);
  console.log(idNumbers); // ['S7282395H', 'T4689018Z', 'G5512873T', 'T8198514B']
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get the results of multiplication of all the numbers using reduce method
  const mult_total = numbers.reduce((prevResult, value) => prevResult * value, 0);
  console.log(mult_total)

  // TODO: get the results of multiplication of all the numbers using for...of loop
  let mult_total = 1
  for (const value of numbers) {
    mult_total = mult_total * value;
  }
  console.log(mult_total);

}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get all the positive numbers (above or equal to 0)
  const positive_num = numbers.filter((value) => value >= 0)
  console.log(positive_num)

  // TODO: get all the odd numbers
  const odd_num = numbers.filter((value) => value % 2 == 1)
  console.log(odd_num)

  // TODO: get all the numbers that is larger before the number before it
  // (exclude first number)
  const num_larger_prev = numbers.filter((value, index, array) => index > 0 && array[index] > array[index-1])
  console.log(num_larger_prev)
  
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: get the names for all participants
  const name = participants.map((person) => person.name)
  console.log(name)

  // TODO: get the id numbers for female participants only
  const femaleID = participants
    .filter((person) => person.gender === 'female')
    .map((person) => person.idNumber)
  console.log(femaleID)

}
