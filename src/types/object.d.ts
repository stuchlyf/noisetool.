interface ObjectConstructor {
  keys<T>(o: T): Array<keyof T>;
}

const test: Record<'a', string> = {
  a: 'a'
};

Object.keys(test)