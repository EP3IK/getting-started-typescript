// 17.2.1
{
  interface Profile {
    id: string;
    address: string;
  }

  type ProfileId = Pick<Profile, 'id'>; // { id: string }

  interface UserProfile {
    id: string;
    name: string;
    address: string;
  }
  type HulkProfile = Pick<UserProfile, 'id' | 'name'>; // { id: string; name: string }
  const hulk: HulkProfile = {
    id: '1',
    name: '헐크',
  };
}

// 17.3.2
{
  interface UserProfile {
    id: string;
    name: string;
    address: string;
  }

  type User = Omit<UserProfile, 'address'>; // { id: string; name: string }
}

// 17.3.3
{
  interface UserProfile {
    id: string;
    name: string;
    address: string;
  }

  type User1 = Omit<UserProfile, 'address'>; // { id: string; name: string }
  type User2 = Pick<UserProfile, 'id' | 'name'>; // { id: string; name: string }
}

// 17.4.2
{
  interface Todo {
    id: string;
    title: string;
    checked: boolean;
  }

  function updateTodo(todo: Partial<Todo>) {
    // { id?: string; title?: string; checked?: boolean }
  }

  updateTodo({ id: '1' }); // ✅
  updateTodo({ id: '1', title: 'Partial 학습' }); // ✅
  updateTodo({ id: '1', title: 'Partial 학습', checked: true }); // ✅
}

// 17.5.2
{
  type Languages = 'C' | 'Java' | 'TypeScript' | 'React';
  type TrueLanguages = Exclude<Languages, 'React'>; // 'C'|'Java'|'TypeScript'
  type WebLanguages = Exclude<Languages, 'C' | 'Java' | 'React'>; // 'TypeScript'
}

// 17.6.1
{
  type HeroProfile = { skill: string; age: number };
  type HeroNames = 'thor' | 'hulk' | 'capt';

  type Heroes = Record<HeroNames, HeroProfile>; // { thor: HeroProfile; hulk: HeroProfile; capt: HeroProfile }

  const avengers: Heroes = {
    capt: { skill: '방패', age: 100 },
    thor: { skill: '해머', age: 3000 },
    hulk: { skill: '괴성', age: 47 },
  };
}

// 17.6.2
{
  type PhoneBook = Record<string, string>; // { [x: string]: string }

  const familyPhones: PhoneBook = {
    dad: '010-2837-105x',
    mom: '010-1774-492x',
  };
  const myPhone: PhoneBook = {
    me: '010-9383-823x',
  };
  const companyPhones: PhoneBook = {
    ceo: '010-2727-488x',
    hr: '010-5960-348x',
    engineering: '010-9624-848x',
  };
}
