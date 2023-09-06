interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}

function greet(someone: Person | Developer) {
  if ("age" in someone) {
    console.log("사람의 나이는", someone.age);
  } else {
    console.log("개발자의 스킬은", someone.skill);
  }
}

function isPerson(someone: Person | Developer): someone is Person {
  return (someone as Person).age !== undefined;
}

function newGreet(someone: Person | Developer) {
  if (isPerson(someone)) {
    console.log("사람의 나이는", someone.age);
  } else {
    console.log("개발자의 스킬은", someone.skill);
  }
}

interface A {
  name: string;
  nickname: string;
}

interface B {
  name: string;
  age: number;
}

interface C {
  name: string;
  age: string;
  skill: string;
}

function greetAgain(someone: A | B | C) {
  if ("age" in someone) {
    console.log(someone.age);
  }
}

function isB(someone: A | B | C): someone is B {
  return typeof (someone as B).age === "number";
}

function greetAtTheEnd(someone: A | B | C) {
  if (isB(someone)) {
    console.log(someone.age);
  }
}

export {};
