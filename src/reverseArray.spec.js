import { describe, it, expect } from "@jest/globals";
import faker from "faker";

import { reverseArray } from "./reverseArray";

describe("Reverse challenger", () => {
  it("should return [1,0] if passed [0,1]", () => {
    const response = reverseArray([0, 1]);

    expect(response).toEqual([1, 0]);
  });

  it("should return [Thales,am,I] if passed [I, am, Thales]", () => {
    const response = reverseArray(["I", "am", "Thales"]);

    expect(response).toEqual(["Thales", "am", "I"]);
  });

  it("should return a reversed array", () => {
    const input = faker.lorem.sentence().split(" ");

    const response = reverseArray(input);

    const expected = input.reverse();

    expect(response).toEqual(expected);
  });
});
