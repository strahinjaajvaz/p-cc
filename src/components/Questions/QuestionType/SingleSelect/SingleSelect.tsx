import { useState } from "react";
import { SingleSelectType } from "../../../../mock/type";
import { useQuestionContext } from "../../../context/Questions";
import { ActionType } from "../../../context/Questions/types";

interface Props
  extends Omit<SingleSelectType, "usersAnswer" | "correctAnswer" | "type"> {}

export function SingleSelect({ answerOptions, id, topic }: Props) {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [_, dispatch] = useQuestionContext();

  return (
    <div>
      <p>{topic}</p>
      {answerOptions.map((option) => (
        <div key={option}>
          <input
            type="radio"
            name={id}
            id={option}
            checked={option === selected}
            onChange={() => setSelected(option)}
            value={selected}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
      {error && <p>Please select an option from above</p>}
      <button
        onClick={() => {
          if (!selected) {
            setError(true);
            return;
          }
          dispatch({
            type: ActionType.SUBMIT,
            payload: {
              id,
              userAnswer: selected,
            },
          });
        }}
      >
        Submit
      </button>
    </div>
  );
}
