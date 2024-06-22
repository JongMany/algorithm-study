// Longest Consecutive Sequence

const numbers = [100, 4, 200, 1, 3, 2];

function solution(numbers: number[]) {
  const numMap = numbers.reduce((acc, cur) => ({
    ...acc,
    [cur]: true
  }), {} as { [key: number]: boolean });
  let max = 0;

  const numKeys = Object.keys(numMap).map(Number)

  for (const num of numKeys) {
    if (numMap[num - 1] === undefined) { // 1, 2, 3, 4를 찾은 경우 2, 3, 4를 한 번 더 찾지 않도록 (부분 탐색을 하지 않도록) => 조건문이 핵심!
      let cnt = 0;
      let next = num;
      while (numMap[next]) {
        cnt += 1;
        next += 1;
        max = Math.max(max, cnt)
      }
    }
  }
  return max;
}


function solutionWithHashSet(numbers: number[]) {
  const numHash = new Set(numbers);
  let max = 0;
  for (const number of numHash) {
    let count = 0;
    if(!numHash.has(number-1)) {
      let target = number;
      while(numHash.has(target)) {
        target += 1;
        count += 1;
        max = Math.max(max, count);
      }
    }
  }
  return max;
}


function solutionWithNextNumber(numbers: number[]) {
  const numberHash = numbers.reduce((acc, cur) => ({
    ...acc,
    [cur]: cur + 1,
  }), {} as {[key: number]: number});

  const numKeys = Object.keys(numberHash).map(Number);
  let max = 0;
  for(const number of numKeys) {
    let count = 0;
    if(!(number - 1 in numberHash)) { // 시작점인지 파악하는 조건문
      let target = number;
      while (target in numberHash) {
        count += 1;
        target = numberHash[target];
        max = Math.max(count, max);
      }
    }
  }
  return max;
}


function sortedSolution(numbers: number[]) {
  const sortedNumbers: number[] = Array(...new Set(numbers)).sort((a, b) => a - b);
  let cnt = 0;
  let max = 0;
  for (let i = 0; i < sortedNumbers.length; i++) {
    const prevNum = i === 0 ? null : sortedNumbers[i - 1];
    if (prevNum === null) {
      cnt += 1;
      continue;
    }
    const currentNum = sortedNumbers[i];

    if (currentNum - prevNum === 1) {
      cnt += 1;
      max = Math.max(max, cnt)
    } else {
      cnt = 0;
    }
  }
  return max;
}

// 빈 리스트가 들어올 때에 대한 조건을 처리해야함.
console.log(solution(numbers))
console.log(sortedSolution(numbers))
console.log(solutionWithHashSet(numbers))
console.log(solutionWithNextNumber(numbers))