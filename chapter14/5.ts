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
  if (someone.industry === "common") {
    someone;
  }
}

export {};
