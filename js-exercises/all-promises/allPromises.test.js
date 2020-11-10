import { allPromises } from './allPromises';

describe('allPromises', () => {
  
  test('The function should return a Promise', () => {
    expect(allPromises("hi") instanceof Promise).toBe(true);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = new Promise(res => res(1));
    const p2 = 2;
    const p3 = Promise.resolve(3);
    return expect(allPromises([p1, p2, p3])).resolves.toEqual([1, 2, 3]);
  });

  test('The function should throw error if non iterable argument passed', () => {
    expect(()=>allPromises(undefined)).toThrow();
    expect(()=>allPromises({})).toThrow();
  });

  test('Promise call should return an array of values from async promises', () => {
    const p1 = new Promise(resolve => setTimeout(() => resolve(1),3000));
    const p2 = new Promise(resolve => setTimeout(() => resolve(10), 5000));
    const p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000));
    return expect(allPromises([p1,p2,p3])).resolves.toEqual([1, 10, 3]);
  });

  test('Promise call should throw error when any one promise got rejected from array of promises', () => {
    const p1 = new Promise(resolve => setTimeout(() => resolve(1),3000));
    const p2 = new Promise((resolve,reject) => reject('error'));
    const p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000));
    return expect(allPromises([p1,p2,p3])).rejects.toMatch('error');
  });
});
