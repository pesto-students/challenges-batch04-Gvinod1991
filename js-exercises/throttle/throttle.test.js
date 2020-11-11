import { throttle } from "./throttle";

jest.useFakeTimers();
describe("throttle", () => {
    test("Throttle function should work",()=>{
        let func=jest.fn();
        const throttledFn=throttle(func,5000);
        throttledFn();
        expect(func).toHaveBeenCalledTimes(1);
        jest.advanceTimersByTime(5000);
        throttledFn();
        throttledFn();
        throttledFn();
        throttledFn();
        throttledFn();
        throttledFn();
        throttledFn();
        throttledFn();
        jest.advanceTimersByTime(5000);
        throttledFn();
        expect(func).toHaveBeenCalledTimes(3);
    })
});
