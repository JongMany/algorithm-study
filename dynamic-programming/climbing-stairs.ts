const n = 45;

function solution(n: number) {
  const dpTable = { 1: 1, 2: 2 } as { [key: number]: number };
  const calculate = (n: number) => {
    if (dpTable[n]) return dpTable[n];
    dpTable[n] = calculate(n - 1) + calculate(n - 2);
    return dpTable[n];
  };
  calculate(n);
  return dpTable[n];
}

function solutionBU(n: number) {
  const dpTable = { 1: 1, 2: 2 } as { [key: number]: number };
  for (let i = 3; i <= n; i++) {
    dpTable[i] = dpTable[i - 1] + dpTable[i - 2];
  }
  return dpTable[n];
}

console.log(solution(5));
console.log(solutionBU(5));
