class Cycled {
  constructor(arr) {
    this.arr = arr;
    this.gen = this.arrGenerator(this.arr);
  }

  *arrGenerator(steps) {
    let index = 0;
    while (true) {
      yield steps[index];
      index = (index + 1) % steps.length;
    }
  }

  current() {
    if (this._current) {
      return this._current;
    }
    this._current = this.gen.next().value;
    return this._current;
  }

  next() {
    this._current = this.gen.next().value;
  }
}
export { Cycled };
