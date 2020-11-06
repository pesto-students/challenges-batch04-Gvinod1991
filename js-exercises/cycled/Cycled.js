class Cycled {
  constructor(arr) {
    this._index = 0;
    this.gen = this.arrGenerator(arr);
  }

  * arrGenerator(steps) {
    while (true) {
      yield steps[this._index];
      this._index = (this._index + 1) % steps.length;
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
    if (!this._current) {
      this._current = this.gen.next().value;
    }
    this._next = this.gen.next().value;
    this._current = this._next;
    return this._next;
  }

  step(value) {
    let stepValue = value;
    let expectedValue = this.gen.next().value;
    while (stepValue > 0) {
      expectedValue = this.gen.next().value;
      stepValue -= 1;
    }
    return expectedValue;
  }

  set index(value) {
    if (value >= 0) {
      this._index = value;
    }
  }

  get index() {
    return this._index;
  }

  indexOf(value) {
    let expectedValue = this.gen.next().value;
    while (expectedValue !== value) {
      expectedValue = this.gen.next().value;
    }
    return this._index;
  }
}
export { Cycled };
