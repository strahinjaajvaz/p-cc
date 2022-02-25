import { TextInput } from "./TextInput";
import { render, screen, fireEvent } from "@testing-library/react";
import { useQuestionContext } from "../../../context/Questions";
import { Action, ActionType } from "../../../context/Questions/types";

jest.mock("../../../context/Questions/Questions", () => ({
  __esModule: true,
  useQuestionContext: jest.fn(),
}));
const mockedDispatch = jest.fn();

const args = {
  id: "1",
  topic: "test",
};

describe("Text Input", () => {
  beforeEach(() => {
    mockedDispatch.mockReset();
    (useQuestionContext as jest.Mock).mockImplementation(() => [
      args,
      mockedDispatch,
    ]);
  });
  it("should render the Text Input component", () => {
    (useQuestionContext as jest.Mock).mockImplementation(() => [
      args,
      mockedDispatch,
    ]);
    render(<TextInput {...args} />);

    expect(screen.getByText(args.topic)).toBeInTheDocument();
  });
  it("should render an error if not value was entered and a submit is dispatched", () => {
    render(<TextInput {...args} />);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("Please enter an answer")).toBeInTheDocument();
  });

  it("should call dispatch once when the answer is submitted", () => {
    render(<TextInput {...args} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });

    fireEvent.click(screen.getByRole("button"));

    expect(mockedDispatch).toBeCalledTimes(1);
    expect(mockedDispatch).toBeCalledWith({
      type: ActionType.SUBMIT,
      payload: {
        id: args.id,
        userAnswer: "test",
      },
    } as Action);
  });
});
