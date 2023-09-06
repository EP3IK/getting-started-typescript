interface Person {
  name: string;
  age: number;
}

let joo = {};
joo.name = "형주";
joo.age = 31;

let jooo: Person = {
  name: "형주",
  age: 31,
};

let joooo: Person = {};
joooo.name = "형주";
joooo.age = 31;

let jooooo = {} as Person;
jooooo.name = "형주";
jooooo.age = 31;

export {};
