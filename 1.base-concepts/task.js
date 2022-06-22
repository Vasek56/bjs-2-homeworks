"use strict"
let d;
let x, x1, x2, x3;
let arr = [];

function solveEquation(a, b, c) {
  d = Math.pow(b, 2) - (4 * a * c)
  if (d < 0) {
    x = "Дискриминант";
   arr[x] = "Корней нет";
    
  }
  if (d == 0){
    x1 = -b/(2*a);
    arr[x1] = "Корень равен";
  }
  if (d > 0){
    x2 = (-b + Math.sqrt(d)) / (2 * a);
    x3 = (-b - Math.sqrt(d)) / (2 * a);
    arr[x2] = "Первый корень";
    arr[x3] = "Второй корень";
  }
 return arr;
}
let result = solveEquation (1, 2, 1)
console.log(result)
console.log(d)


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
