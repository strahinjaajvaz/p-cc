import { useState } from "react";
import styled from "styled-components";
import { SingleSelectType } from "../../../../mock/type";
import { useQuestionContext } from "../../../context/Questions";
import { ActionType } from "../../../context/Questions/types";

/**
 * Notes:
 *
 * I chose to house all the logic here as local state. Having it be anything else
 * seems like a complexity that is unneeded.
 *
 * If this form was something more complicated, then id opt in and use react-hoom-form
 * with zod validation.
 *
 * The way the onChange works is that we want to set the state of the selected
 * answer but at the same time remove the error. With react, if the function wasn't
 * async, then it will automatically batch the state updates and rerender once.
 * If this was an async function, then you could use something else, to batch the calls
 * manually.
 */

interface Props
  extends Omit<SingleSelectType, "usersAnswer" | "correctAnswer" | "type"> {}

export function SingleSelect({ answerOptions, id, topic }: Props) {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState<boolean>(false);
  const [_, dispatch] = useQuestionContext();

  return (
    <StyledSingleSelect>
      <h2>{topic}</h2>
      <div className="container">
        {answerOptions.map((option) => (
          <div key={option}>
            <input
              type="radio"
              name={id}
              id={option}
              checked={option === selected}
              onChange={() => {
                setSelected(option);
                setError(false);
              }}
              value={selected}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
      {error && <p className="error">Please select an option from above</p>}
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
    </StyledSingleSelect>
  );
}

const StyledSingleSelect = styled.div`
  white-space: normal;

  div.container {
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 640px) {
      grid-template-columns: 1fr 1fr;
    }

    & > div {
      margin-bottom: 1rem;

      label {
        margin-left: 1rem;
      }
    }
  }

  p.error {
    color: var(--error-red);
  }
`;
