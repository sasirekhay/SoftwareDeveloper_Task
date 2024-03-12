function getChange(x, y) {
  const coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
  const result = [];

  for (let i = 0; i < coins.length; i++) {
    let count = 0;
    while (y <= x) {
      x -= coins[i];
      y += coins[i];
      count++;
    }
    y -= coins[i];
    result.push(count);
  }

  return result;
}

console.log(getChange(5, 0.99)); // must return [1,0,0,0,0,4]
console.log(getChange(3.14, 1.99)); // must return [0,1,1,0,0,1]
console.log(getChange(4, 3.14)); // must return [1,0,1,1,1,0]
console.log(getChange(0.45, 0.34)); // must return [1,0,1,0,0,0]