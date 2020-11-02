import { bind} from './bindMethod.js';

describe('bind method', () => {
  // Feel free to add more test cases
  test('should return a function', () => {
    const foo = function (x) {
      return x;
    };
    const obj = { a: 10 };
    expect(typeof bind(foo, obj)).toBe('function');
  });
  test('should hard bind a function to new context', () => {
    const foo = function (x) {
      return this.y + x;
    };
    const obj = { y: 10 };
    var y = 100;
    const bar = bind(foo, obj);
    expect(bar(10)).toBe(20);
  });
  test('should hard bind a function to new context object', () => {
    const foo = function (x) {
      return this.y + x + this.z;
    };
    const obj = { y: 10, z: 5 };
    var y = 100;
    var z = 25;
    const bar = bind(foo, obj);
    expect(bar(10)).toBe(25);
  });
  test('should hard bind a function with multiple paramter to new context ', () => {
    const foo = function (x,y) {
      return this.z + x + y;
    };
    const obj = { z: 10 };
    var z = 100;
    const bar = bind(foo, obj);
    expect(bar(10,20)).toBe(40);
  });
  test('should hard bind works even if extra arguments passed other then function and content object', () => {
    const foo = function (x,y,z) {
      return this.i + x + y + z;
    };
    const obj = { i: 10 };
    var i = 100;
    const bar = bind(foo, obj,4);
    expect(bar(10,20)).toBe(44);
  });
  test('should throws an error on invalid parameters', () => {
    const foo = function (x,y,z) {
      return this.i + x + y + z;
    };
    const obj = { i: 10 };
    
    expect(() => {bind()}).toThrow();
    expect(() => {bind(foo,1)}).toThrow();
    expect(() => {bind(obj,obj)}).toThrow();
  });
});
