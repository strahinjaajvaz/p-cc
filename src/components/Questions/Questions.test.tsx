import { Questions } from "../Questions/Questions";
import { render, screen } from "../../test/utils/renderer";
import { useQuestionContext } from "../context/Questions";

jest.mock("../context/Questions/Questions", () => ({
  __esModule: true,
  useQuestionContext: jest.fn(),
}));
jest.mock("./QuestionType/SingleSelect/SingleSelect", () => ({
  __esModule: true,
  SingleSelect: () => <p>Single Select Mock</p>,
}));
jest.mock("./QuestionType/TextInput/TextInput", () => ({
  __esModule: true,
  TextInput: () => <p>Text Input Mock</p>,
}));

const mockTextInputQuestion = [
  {
    topic: "Who played Princess Leia?",
    type: "TextInput",
    correctAnswer: "carrie fisher",
    id: "dBkK7mayj9McFUW2WyNwk",
  },
];

const mockSingleSelectQuestion = [
  {
    topic: "In what year the original Star Wars film was first released?",
    type: "SingleSelect",
    answerOptions: ["1975", "1976", "1977", "1978", "1979"],
    correctAnswer: "1977",
    id: "nRgqqQa4065Mo-AhUMp__",
  },
];

describe("Questions", () => {
  it("shoud render null if completed is true", () => {
    (useQuestionContext as jest.Mock).mockImplementation(() => [
      { currentIndex: 0, completed: true, questions: 0 },
    ]);
    const { container } = render(<Questions />);

    expect(container.children.length).toBe(0);
  });
  it("shoud render the Question component if completed is false", () => {
    (useQuestionContext as jest.Mock).mockImplementation(() => [
      { currentIndex: 0, completed: false, questions: mockTextInputQuestion },
    ]);
    render(<Questions />);

    expect(screen.getByText("Question 1 out of 1")).toBeInTheDocument();
  });
  it("should render the Single Select component if type is SingleSelect", () => {
    (useQuestionContext as jest.Mock).mockImplementation(() => [
      {
        currentIndex: 0,
        completed: false,
        questions: mockSingleSelectQuestion,
      },
    ]);
    render(<Questions />);

    expect(screen.getByText("Single Select Mock")).toBeInTheDocument();
  });
  it("should render the Text Input component if type is Text Input", () => {
    (useQuestionContext as jest.Mock).mockImplementation(() => [
      {
        currentIndex: 0,
        completed: false,
        questions: mockTextInputQuestion,
      },
    ]);
    render(<Questions />);

    expect(screen.getByText("Text Input Mock")).toBeInTheDocument();
  });
});
