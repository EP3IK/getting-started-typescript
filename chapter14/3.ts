function printText(text: string | number) {
  if (typeof text === "string") {
    console.log(text.trim());
    return;
  }

  console.log(text);
}

function PersonFn(name, age) {
  this.name = name;
  this.age = age;
}

let captain = new PersonFn('캡틴', 100);
let hulk = { name: '헐크', age: 79 };

captain instanceof PersonFn;
hulk instanceof PersonFn;

class Person {
  name: string;
  age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function fetchInfoByProfile(profile: Person | string) {
  if (profile instanceof Person) {
    profile;
  }
}

interface Book {
  name: string;
  rank: number;
}

interface OnlineLecture {
  name: string;
  url: string;
}

function learnCourse(material: Book | OnlineLecture) {
  material.url
}

export {};
