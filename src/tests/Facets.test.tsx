import { render } from "@testing-library/react";
import Facets from "../components/Facets";

describe("Facets", () => {
  test("renders facet component correctly", () => {
    render(<Facets />);
  });
});
