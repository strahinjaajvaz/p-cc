import { render, screen } from "@testing-library/react";
import { SummaryTile } from "./SummaryTile";

describe("Summary Tile", () => {
  it("shoulder render the correct answer only", () => {
    render(<SummaryTile correctAnswer="test" userAnswer="test" />);

    expect(screen.queryByTestId("correct-answer")).not.toBeInTheDocument();
    expect(screen.getByTestId("user-answer")).toBeInTheDocument();
  });
  it("shoulder render the correct and the users answer", () => {
    render(<SummaryTile correctAnswer="test" userAnswer="test1" />);

    expect(screen.getByTestId("correct-answer")).toBeInTheDocument();
    expect(screen.getByTestId("user-answer")).toBeInTheDocument();
  });
});
