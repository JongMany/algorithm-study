function checkIsValid(str) {
  const stack = []
  const opens = ["(", "{", "["];

  for (const s of str) {
    if (opens.includes(s)) { // 여는 괄호
      stack.push(s);
    } else { // 닫는 괄호
      if (stack.length === 0) {
        return false
      }
      const topItem = stack.pop();
      if (topItem !== s) {
        return false;
      }
    }
    if (stack.length === 0) {
      return true;
    } else {
      return false
    }

  }
}

const s = "{(([]))[]}(}"
console.log(checkIsValid(s))