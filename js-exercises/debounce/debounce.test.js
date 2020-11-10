import { debounce } from "./debounce";
// tell jest to mock all timeout functions
jest.useFakeTimers();
describe("debounce", () => {
    test("Debounce function should work",()=>{
        let func=jest.fn();
        const debounceFn=debounce(func,1000);
        debounceFn();
        expect(func).toHaveBeenCalledTimes(0); // func not called
        // Call it several times
        for(let i = 0; i < 10; i++) {
            debounceFn();
        }
        expect(func).toHaveBeenCalledTimes(0); // func not called

        //pas the time
        jest.runAllTimers();
        expect(func).toHaveBeenCalledTimes(1);  // func called
    })
});

