function fibs(num) {
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }

  const arr = fibs(num - 1);
  const num1 = arr[arr.length - 2];
  const num2 = arr[arr.length - 1];
  arr.push(num1 + num2);
  return arr;
}

console.log(fibs(8));
