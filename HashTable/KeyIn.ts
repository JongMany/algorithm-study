const nums = [4, 1, 9, 7, 5, 3, 16];
const target = 14;



function findNum(nums:number[]) {
  const numMap = nums.reduce((acc, cur) => ({
    ...acc,
    [cur]: true,
  }), {});

  for (const num of nums) {
    const wantNum = target - num;
    if (wantNum in numMap) {
      return true;
    }
  }

  return false;
}
console.log(nums)

console.log(findNum(nums))
