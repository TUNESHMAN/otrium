import React from "react";
import { render, screen } from "@testing-library/react";
import RenderTree from "../components/RenderTree";
import { createDataTree } from "../utils/data";
import response from "../data/response";
import userEvent from "@testing-library/user-event";

describe("RenderTree", () => {
  test("renders checkbox tree component", () => {
    const { getByText } = render(<RenderTree />);
    const heading = getByText("Checkbox Tree");
    expect(heading).toBeInTheDocument();
  });

  test("renders parent node initially ", () => {
    render(<RenderTree />);
    // Check that the parent nodes are present
    const dames = screen.getByText("Dames");
    expect(dames).toBeInTheDocument();

    const heren = screen.getByText("Heren");
    expect(heren).toBeInTheDocument();

    const kids = screen.getByText("Kids");
    expect(kids).toBeInTheDocument();
  });
});
