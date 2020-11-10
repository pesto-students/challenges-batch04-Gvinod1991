import { allSettled } from './allSettled';

describe('allSettled', () => {
  
    test('allSettled call should return fulfilled or rejected statuses', () => {
        const p1 = Promise.resolve(33);
        const p2 = new Promise(resolve => setTimeout(() => resolve(66), 0));
        const p3 = 99;
        const p4 = Promise.reject('an error');
        return expect(allSettled([p1, p2, p3,p4])).resolves.toEqual([
            {status: "fulfilled", value: 33},
            {status: "fulfilled", value: 66},
            {status: "fulfilled", value: 99},
            {status: "rejected",  reason: 'an error'}
        ]);
    });
    test('allSettled call should return fulfilled or rejected statuses for async functions', () => {
        const p1 = new Promise(resolve => setTimeout(() => resolve(16), 1000));
        const p2 = new Promise(resolve => setTimeout(() => resolve(106), 4000));
        const p3 = new Promise(resolve => setTimeout(() => resolve(6), 3000));;
        const p4 = new Promise((resolve,reject) => setTimeout(() => reject('Error occurred'), 2000));
        return expect(allSettled([p1, p2, p3,p4])).resolves.toEqual([
            {status: "fulfilled", value: 16},
            {status: "fulfilled", value: 106},
            {status: "fulfilled", value: 6},
            {status: "rejected",  reason: 'Error occurred'}
        ]);
    });
    test('The function should throw error if non iterable argument passed', () => {
        expect(()=>allSettled(undefined)).toThrow();
        expect(()=>allSettled({})).toThrow();
    });
});
