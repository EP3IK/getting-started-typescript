// 15.1

{
  let a: string = 'hi';
  let b: number = 10;

  b = a;
}

{
  let a: string = 'hi';
  let b: 'hi' = 'hi';

  a = b;
  b = a;
}

// 15.2

{
  interface Ironman {
    name: string;
  }

  class Avengers {
    name: string;
  }

  let i: Ironman;
  i = new Avengers();
}

{
  type Captain = {
    name: string;
  };

  interface Antman {
    name: string;
  }

  let a: Captain = {
    name: '캡틴',
  };
  let b: Antman = {
    name: '앤트맨',
  };

  b = a;
}

{
  type Captain = {
    name: string;
  };

  interface Antman {
    nickname: string;
  }

  let a: Captain = {
    name: '캡틴',
  };
  let b: Antman = {
    nickname: '앤트맨',
  };

  b = a;
}

// 15.3

{
  type Person = {
    name: string;
  };

  interface Developer {
    name: string;
  }

  let joo: Person = {
    name: '형주',
  };
  let capt: Developer = {
    name: '캡틴',
  };

  joo = capt;
  capt = joo;
}

{
  type Person = {
    name: string;
  };

  interface Developer {
    name: string;
    skill: string;
  }

  let joo: Person = {
    name: '형주',
  };
  let capt: Developer = {
    name: '캡틴',
    skill: '방패 던지기',
  };

  joo = capt;
  capt = joo;
}

{
  type Person = {
    name: string;
    skill: string;
  };

  interface Developer {
    name: string;
    skill: string;
  }

  let joo: Person = {
    name: '형주',
    skill: '웹 개발',
  };
  let capt: Developer = {
    name: '캡틴',
    skill: '방패 던지기',
  };

  joo = capt;
  capt = joo;
}

{
  type Person = {
    name: string;
  };

  interface Developer {
    name: string;
    skill?: string;
  }

  let joo: Person = {
    name: '형주',
  };
  let capt: Developer = {
    name: '캡틴',
    skill: '방패 던지기',
  };

  joo = capt;
  capt = joo;
}

// 15.4

{
  let getNumber = (num: number) => num;
  let sum = (x: number, y: number) => x + y;

  getNumber = sum;
  sum = getNumber;
}

// 15.5

{
  enum Language {
    C, // 0
    Java, // 1
    TypeScript, // 2
  }

  let a: number = 10;
  a = Language.C;
}

{
  enum Language {
    C, // 0
    Java, // 1
    TypeScript, // 2
  }
  enum Programming {
    C, // 0
    Java, // 1
    TypeScript, // 2
  }

  let langC: Language.C;
  langC = Programming.C;
}

// 15.6

{
  interface Empty<T> {}

  let empty1: Empty<string> = '';
  let empty2: Empty<number> = 0;

  empty2 = empty1;
  empty1 = empty2;
}

{
  interface NotEmpty<T> {
    data: T;
  }

  let notEmpty1: NotEmpty<string> = { data: '' };
  let notEmpty2: NotEmpty<number> = { data: 0 };

  notEmpty1 = notEmpty2;
  notEmpty2 = notEmpty1;
}
