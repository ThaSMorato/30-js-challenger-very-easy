import { describe, it, expect } from "@jest/globals";
import faker from "faker";

import { calculateArithmeticAverage } from "./academic";

describe("Academic Challenger", () => {
  it("should return 10 with input [10,10]", () => {
    const result = calculateArithmeticAverage(10, 10);

    expect(result).toEqual(10);
  });

  it("should return 9 with input [10,8]", () => {
    const result = calculateArithmeticAverage(10, 8);

    expect(result).toEqual(9);
  });

  it("should calculate with any arguments", () => {
    const input = Array.from({ length: faker.datatype.number() }).map(() =>
      faker.datatype.number(10)
    );

    const result = calculateArithmeticAverage(...input);

    const expected = input.reduce((acc, numb) => acc + numb, 0) / input.length;

    expect(result).toEqual(expected);
  });
});
