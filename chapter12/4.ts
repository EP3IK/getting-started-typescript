function getA(a) {
  return a;
}

function getB(b: number) {
  return b;
}

function getC(c = 10) {
  return c;
}

function getD(d: number) {
  let e = "hi";

  return d + e;
}

let result = getD(10);
let precisedResult = result.toPrecision();

export {};
