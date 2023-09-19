// 18.1
{
  type HeroNames = 'thor' | 'hulk' | 'capt';
  type HeroAttendance = { [name in HeroNames]: boolean }; // { capt: boolean; hulk: boolean; thor: boolean }
}

// 18.2
{
  const arr = [1, 2, 3];
  const doubleArr = arr.map((num) => num * 2); // [2, 4, 6]

  const heroes = ['capt', 'hulk', 'thor'];
  const heroAttendance = heroes.map((hero) => ({ [hero]: true })); // [{ capt: true }, { hulk: true }, { thor: true }];
}

// 18.3
{
  interface Hero {
    name: string;
    skill: string;
  }

  type HeroPropCheck = { [h in keyof Hero]: boolean }; // { name: boolean; skill: boolean }
}

// 18.5
{
  type Hero = {
    name: string;
    skill: string;
  };

  type HeroOptional = { [h in keyof Hero]?: string }; // { name?: string; skill?: string }
  type HeroRequired<T> = { [P in keyof T]-?: T[P] };
}

// 18.6
{
  type MyPartial<T> = {
    [P in keyof T]?: T[P];
  };
}
