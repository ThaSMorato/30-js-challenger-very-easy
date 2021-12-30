import { describe, it, expect } from "@jest/globals";
import { reverseWordsInString } from "./reverseWordsInString";

describe("Reverse words in a string", () => {
  it("should reverse 'Lorem ipsum dolore sec avic' as 'merol muspi erolod ces civa'", () => {
    const content = "Lorem ipsum dolore sec avic";
    const result = reverseWordsInString(content);
    const expected = "merol muspi erolod ces civa";

    expect(result).toEqual(expected);
  });

  it("should reverse 'merol muspi erolod ces civa' as 'lorem ipsum dolore sec avic'", () => {
    const content = "merol muspi erolod ces civa";
    const result = reverseWordsInString(content);
    const expected = "lorem ipsum dolore sec avic";

    expect(result).toEqual(expected);
  });

  it("should reverse 'May the force be with you' as 'yam eht ecrof eb htiw uoy'", () => {
    const content = "May the force be with you";
    const result = reverseWordsInString(content);
    const expected = "yam eht ecrof eb htiw uoy";

    expect(result).toEqual(expected);
  });

  it("should reverse 'yam eht ecrof eb htiw uoy' as 'May the force be with you'", () => {
    const content = "yam eht ecrof eb htiw uoy";
    const result = reverseWordsInString(content);
    const expected = "may the force be with you";

    expect(result).toEqual(expected);
  });
});
