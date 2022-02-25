import { useState } from "react";
import styled from "styled-components";
import { TextInputType } from "../../../../mock/type";
import { useQuestionContext } from "../../../context/Questions";
import { ActionType } from "../../../context/Questions/types";
import { RenderQuestionProps } from "../types";

export function TextInput({ id, topic }: RenderQuestionProps<TextInputType>) {
  const [_, dispatch] = useQuestionContext();
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState<boolean>(false);

  return (
    <StyledTextInput>
      <h2>{topic}</h2>
      <input
        type="text"
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
      />
      {error && <p className="error">Please enter an answer</p>}
      <button
        onClick={() => {
          if (!answer) {
            setError(true);
            return;
          }

          dispatch({
            type: ActionType.SUBMIT,
            payload: {
              id,
              userAnswer: answer,
            },
          });
        }}
      >
        Submit
      </button>
    </StyledTextInput>
  );
}

const StyledTextInput = styled.div`
  input {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  }

  button {
    display: block;
  }

  p.error {
    color: var(--error-red);
  }
`;
