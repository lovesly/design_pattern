function each(data) {
  const iterator = data[Symbol.iterator]();
  let next;
  while (!next || !next.done) {
    next = iterator.next();
    if (!next.done) {
      console.log(next.value);
    }
  }
}

each([1,2,3]);
each(new Map([["key1", "value1"], ["key2", "value2"]]));
each(new Set([4,5,6]));
