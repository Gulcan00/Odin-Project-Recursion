function fibs(num) {
  let num1 = 0,
    num2 = 1,
    sum = 0;
  const arr = [0, 1];
  for (let i = 2; i < num; i++) {
    sum = num1 + num2;
    arr.push(sum);
    num1 = num2;
    num2 = sum;
  }
  return arr;
}

console.log(fibs(8));
