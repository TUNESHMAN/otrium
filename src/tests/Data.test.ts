import { createDataTree } from "../utils/data";
import response from "../data/response";

describe("createDataTree", () => {
  test("createDataTree function should return an array of data nodes", () => {
    const result = createDataTree(response.data.categories, "0");
    expect(Array.isArray(result)).toBe(true);
  });
});
