import { describe, it, expect } from "@jest/globals";
import faker from "faker";

import { createChunks } from "./chunks";

describe("Chunk challenger", () => {
  it("should return 'chunk' if passed 1", () => {
    const response = createChunks(1);

    expect(response).toBe("chunk");
  });

  it("should return 'chunk-chunk' if passed 2", () => {
    const response = createChunks(2);

    expect(response).toBe("chunk-chunk");
  });

  it("should return n 'chunk's separeted with '-' if passed n", () => {
    const input = faker.datatype.number();
    const response = createChunks(input);

    const expected = Array.from({ length: input })
      .map(() => "chunk")
      .join("-");

    expect(response).toBe(expected);
  });
});
