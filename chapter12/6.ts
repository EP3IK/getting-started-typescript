interface Dropdown<T> {
  title: string;
  value: T;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  tag: string;
  description: string;
}

let shoppingDetailItem: DetailedDropdown<number> = {
  // title: "",
  // value: 1,
  // tag: "",
  // description: "",
};

export {};
