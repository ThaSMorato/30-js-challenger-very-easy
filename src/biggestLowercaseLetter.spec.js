import { describe, it, expect } from "@jest/globals";
import { biggestLowercaseLetter } from "./biggestLowercaseLetter";

describe("Biggest lowercase letter", () => {
  it("should return v from 'Lorem ipsum dolore sec avic'", () => {
    const content = "Lorem ipsum dolore sec avic";
    const result = biggestLowercaseLetter(content);
    const expected = "v";

    expect(result).toEqual(expected);
  });

  it("should return o from 'Hello'", () => {
    const content = "Hello";
    const result = biggestLowercaseLetter(content);
    const expected = "o";

    expect(result).toEqual(expected);
  });

  it("should return y from 'May the force be with you'", () => {
    const content = "May the force be with you";
    const result = biggestLowercaseLetter(content);
    const expected = "y";

    expect(result).toEqual(expected);
  });

  it("should return v from 'Its over nine thousand'", () => {
    const content = "Its over nine thousand";
    const result = biggestLowercaseLetter(content);
    const expected = "v";

    expect(result).toEqual(expected);
  });

  it("should return p from 'Vaaa p'", () => {
    const content = "Vaaa p";
    const result = biggestLowercaseLetter(content);
    const expected = "p";

    expect(result).toEqual(expected);
  });
});
