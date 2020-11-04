import { map, filter, invert, merge, all, some } from './objectUtils';

describe('map',()=>{
    test('map function should iterate through object key and values',()=>{
        const obj={
            name:"Vinod",
            age:26
        }
        const transformedObject=map(obj,([key, val]) => [key.toUpperCase(), val + 10]);
        expect(transformedObject.AGE).toBeDefined();
        expect(transformedObject.AGE).toBe(36)
        expect(transformedObject.NAME).toBeDefined();
    });
    test('map function should iterate through nested object key and values',()=>{
        const obj={
            name:"Vinod",
            age:26,
            address:{
                city:"Bengaluru"
            }
        }
        const transformedObject=map(obj,([key, val]) => [key.toUpperCase(), val]);
        expect(transformedObject.ADDRESS.CITY).toBeDefined();
        expect(transformedObject.ADDRESS.CITY).toBe("Bengaluru");
    });
    test('filter function should work for the object and callback passed',()=>{
        const obj={
            name:"Vinod",
            age:26,
            hobby:['Reading books']
        }
        const transformedObject=filter(obj,([key, val]) => key === 'name');
        expect(Object.values(transformedObject).length).toBe(1);
    });
    test('invert function should return inverted key and value',()=>{
        const obj={
            name:"Vinod"
        }
        const obj2={
            name:"Vinod",
            address:{
                city:"Bengaluru"
            }
        }
        const invertedObject=invert(obj);
        const invertedObject2=invert(obj2);
        expect(invertedObject.Vinod).toBe('name');
        expect(invertedObject2.address.city).toBe('Bengaluru');
    });
    test('merge function should take n number of objects and return merged object of n objects',()=>{
        const obj1={
            name:"Vinod"
        }
        const obj2={
            age:29
        }
        const obj3={
            percentage:'65%'
        }
        const mergedObject=merge(obj1,obj2,obj3);
        expect(mergedObject.name).toBe('Vinod');
        expect(mergedObject.age).toBe(29);
        expect(mergedObject.percentage).toBe('65%');
    });
    test('all function tests whether all key or values in the object pass the test implemented by the provided function',()=>{
        const obj={
            name:"Vinod",
            age:"26",
            likes:"Playing game"
        }
        const obj2={
            name:"Vinod",
            likes:"Playing game"
        }
        expect(all(obj,(key)=> key.length >=3)).toBe(true);
        expect(all(obj2,(key)=> key.length ===3)).toBe(false);
    });
    test('some function tests whether at least one key or value in the object passes the test implemented by the provided function.',()=>{
        const obj={
            name:"Vinod",
            age:"26",
            likes:"Playing game"
        }
        const obj2={
            name:"Vinod",
            likes:"Playing game"
        }
        expect(some(obj,(key)=> key.length >=3)).toBe(true);
        expect(some(obj2,(key)=> key.length ===3)).toBe(true);
    });
})
// write your own test cases