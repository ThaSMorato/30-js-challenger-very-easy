import { describe, it, expect } from "@jest/globals";
import { spaceTraveling } from "./spaceTraveling";

describe("Space treveling", () => {
  it("should return 4 when passed 2", () => {
    const content = 2;
    const result = spaceTraveling(content);
    const expected = 4;

    expect(result).toEqual(expected);
  });

  it("should return 9 when passed 3", () => {
    const content = 3;
    const result = spaceTraveling(content);
    const expected = 9;

    expect(result).toEqual(expected);
  });

  it("should return 925116 when passed 3514", () => {
    const content = 3514;
    const result = spaceTraveling(content);
    const expected = 925116;

    expect(result).toEqual(expected);
  });

  it("should return 81811625491 when passed 994571", () => {
    const content = 994571;
    const result = spaceTraveling(content);
    const expected = 81811625491;

    expect(result).toEqual(expected);
  });

  it("should return 416 when passed 24", () => {
    const content = 24;
    const result = spaceTraveling(content);
    const expected = 416;

    expect(result).toEqual(expected);
  });

  it("should return 4916256441368164 when passed 745821698", () => {
    const content = 745821698;
    const result = spaceTraveling(content);
    const expected = 4916256441368164;

    expect(result).toEqual(expected);
  });
});
