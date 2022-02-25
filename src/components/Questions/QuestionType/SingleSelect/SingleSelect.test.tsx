import { SingleSelect } from "./SingleSelect";
import { render, screen, fireEvent } from "../../../../test/utils/renderer";
import { useQuestionContext } from "../../../context/Questions";
import { Action, ActionType } from "../../../context/Questions/types";

jest.mock("../../../context/Questions/Questions", () => ({
  __esModule: true,
  useQuestionContext: jest.fn(),
}));
const mockedDispatch = jest.fn();

const args = {
  answerOptions: ["a", "b", "c", "d"],
  id: "1",
  topic: "test",
};

describe("Single Select", () => {
  beforeEach(() => {
    mockedDispatch.mockReset();
    (useQuestionContext as jest.Mock).mockImplementation(() => [
      args,
      mockedDispatch,
    ]);
  });
  it("should render the Single Select component", () => {
    (useQuestionContext as jest.Mock).mockImplementation(() => [
      args,
      mockedDispatch,
    ]);
    render(<SingleSelect {...args} />);

    expect(screen.getByText(args.topic)).toBeInTheDocument();
    expect(screen.queryAllByRole("radio").length).toBe(4);
  });
  it("should render an error if no radio is selected and a submit is dispatched", () => {
    render(<SingleSelect {...args} />);

    fireEvent.click(screen.getByRole("button"));

    expect(
      screen.getByText("Please select an option from above")
    ).toBeInTheDocument();
  });

  it("should call dispatch once when the answer is submitted", () => {
    render(<SingleSelect {...args} />);

    fireEvent.click(
      screen.getByRole("radio", {
        name: "a",
      })
    );

    fireEvent.click(screen.getByRole("button"));

    expect(mockedDispatch).toBeCalledTimes(1);
    expect(mockedDispatch).toBeCalledWith({
      type: ActionType.SUBMIT,
      payload: {
        id: args.id,
        userAnswer: "a",
      },
    } as Action);
  });
});
