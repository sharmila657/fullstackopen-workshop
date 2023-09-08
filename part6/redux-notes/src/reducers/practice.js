console.log("hello");
let array = [1, 2, 3, 4, 5];

let newvariable = array.map((newone) => {
//   const sum = newone + 1;
//   let var1 = [newone]

  let obj = {
      val: newone,
    };
    
    //   console.log("hello");
    //   console.log(newone);
    return obj
    
});
console.log(newvariable);
// console.log(array);

// // let anotherarray = array.filter(() => {
// //     return true;
// // })
// // console.log(anotherarray);
// // console.log(newvariable)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumber = numbers.filter((num, index) => num > 5);

const newNumber = numbers.filter((num, index) => {
  if (num > 5) {
    return num;
  }
});
// console.log(newNumber, "newnumber");
// const newNumber = numbers.map((num) => num * 5);
// console.log(newNumber, "newnumber");
console.log(newNumber)

// const newNumber = numbers.reduce((accumulator, currentvalue, index) => {
//   console.log(
//     `${accumulator}=> acc, ${currentvalue}=> currvalue, ${index}=> index`
//   );
//   return accumulator + currentvalue;
// }, 0);
// console.log(newNumber, "newnumber");

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// debugger;
// function forloop(string) {
//   console.log(string, "string");
//   let result = [];
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] > 5) {
//       result.push(string[i]);
//     }
//   }
//   return result;
// }

// console.log(forloop(numbers));
