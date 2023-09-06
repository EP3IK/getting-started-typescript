interface Person {
  name: string;
  age: number;
  industry: "common";
}

interface Developer {
  name: string;
  age: string;
  industry: "tech";
}

function greet(someone: Person | Developer) {
  switch (someone.industry) {
    case "common":
      console.log(someone.age);
      break;
    case "tech":
      console.log(someone.age);
      break;
  }
}

function sayHi(message: string | null) {
  if (!message) {
    return;
  }

  console.log(message);
}

export {};
