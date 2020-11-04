import { accessorProperties } from "./accessorProperties";

describe("accessorProperties ", () => {
  test("accessorProperties set decimal number but get should return binary number", () => {
    const obj = accessorProperties();
    obj.number = 36;
    expect(obj.number).toBe(100100);
    obj.number = 21;
    expect(obj.number).toBe(10101);
  });
  test("accessorProperties should throw an error when set other then number", () => {
    const obj = accessorProperties();
    expect(() => obj.number = "36").toThrow();
    expect(() => obj.number = null).toThrow();
    expect(() => obj.number = []).toThrow();
    expect(() => obj.number = {}).toThrow();
    expect(() => obj.number = undefined).toThrow();
  });
});
