import { Summary } from "./Summary";
import { render, screen } from "../../test/utils/renderer";
import { useQuestionContext } from "../context/Questions/Questions";
import { QuestionType } from "../context/Questions/types";

jest.mock("../context/Questions/Questions", () => ({
  __esModule: true,
  useQuestionContext: jest.fn(),
}));

const questions: QuestionType[] = [
  {
    id: "1",
    correctAnswer: "a",
    topic: "test",
    type: "TextInput",
    userAnswer: "a",
  },
];

describe("Summary Component", () => {
  it("should render null if completed is false", () => {
    (useQuestionContext as jest.Mock).mockImplementation(() => [
      {
        questions,
        completed: false,
      },
    ]);

    const { container } = render(<Summary />);

    expect(container.children.length).toBe(0);
  });
  it("render the Summary component if completed is true", () => {
    (useQuestionContext as jest.Mock).mockImplementation(() => [
      {
        questions,
        completed: true,
      },
    ]);

    render(<Summary />);
    expect(screen.getByText("Summary")).toBeInTheDocument();
    expect(screen.getByText("You got 1 out of 1")).toBeInTheDocument();
    expect(screen.getByTestId("summary-container").children.length).toBe(1);
  });
});
