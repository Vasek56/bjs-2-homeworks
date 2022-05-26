"use strict"
let discriminant;
let x;

function solveEquation(a, b, c) {
  let arr;
  discriminant = (b** - 4*a*c);
  if (discriminant < 0) {
    x = "Корней нет"
  }
  if (discriminant == 0){
    x = -b/(2*a);
  }
  if (discriminant > 0){
    x = (-b + Math.sqrt(d) )/(2*a);
    x = (-b - Math.sqrt(d) )/(2*a);
  }

  return arr; // array
}
solveEquation (1, 2, 10)


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
