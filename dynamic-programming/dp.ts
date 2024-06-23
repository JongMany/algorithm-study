// 문제에 대한 정답이 될 가능성이 있는 모든 해결책을 체계적이고 효율적으로 탐색하는 풀이법
// 완전탐색 => 체계적이고 효율적이지 않음
// 동적계획법 => 체계적이고 효율적인 방법

// 크고 복잡하 문제를 작은 문제들로 나눔(Subproblem)
// 하위 문제의 답을 계산
// 중복 계산해야 하는 하위 문제 존재 (Overlapping Subproblem)
//  => 한 번 계산한 결과는 메모리에 저장하여 재계산하지 않도록 함 (Memoization, DP Table)

// 하위 문제에 대한 답을 통해 문제에 대한 답을 계산 (Optimal Substructure)
// => 최적 부분 구조: 하위 부분 문제에서 구한 최적의 답이 합쳐진 큰 문제의 최적의 답을 구할 수 있는 구조

function solution(n: number) {
  const dpTable = { 1: 1, 2: 1 } as { [key: number]: number };

  function fibonacci(n: number) {
    if (dpTable[n]) return dpTable[n];
    dpTable[n] = fibonacci(n - 1)! + fibonacci(n - 2)!;
    return dpTable[n];
  }
  fibonacci(n);

  return dpTable[n];
}

console.log(solution(7));
