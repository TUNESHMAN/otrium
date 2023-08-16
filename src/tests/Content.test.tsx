import { render, screen } from "@testing-library/react";
import Content from "../components/Content";

describe("Content", () => {
  test("renders content", () => {
    render(<Content />);
    const otriumHeading = screen.getByText(/otrium/i);
    expect(otriumHeading).toBeInTheDocument();
  });

  test("renders facet on side bar", () => {
    render(<Content />);
    const facet = screen.getByText(/facets/i);
    expect(facet).toBeInTheDocument();
  });

  test("renders icon on sidebar", () => {
    render(<Content />);
    const iconDescription = screen.getByTestId("UnfoldMoreDoubleIcon");
    expect(iconDescription).toBeInTheDocument();
  });
});
