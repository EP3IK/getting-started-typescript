function sumWithExplicitReturnType(a: number, b: number): number {
  return a + b;
}

let result1 = sumWithExplicitReturnType(1, 2);

function sumWithImplicitReturnType(a: number, b: number) {
  return a + b;
}

let result2 = sumWithImplicitReturnType(1, 2);

function isEqual(a: number, b: number) {
  return a === b;
}

let result3 = isEqual(1, 2);

export {};
