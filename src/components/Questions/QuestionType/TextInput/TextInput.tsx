import { useQuestionContext } from "../../../context/Questions";
import { ActionType } from "../../../context/Questions/types";

export function TextInput() {
  const [_, dispatch] = useQuestionContext();
  return (
    <div>
      <p>Text</p>
      <button
        onClick={() => {
          dispatch({
            type: ActionType.NEXT_QUESTION,
          });
        }}
      >
        next
      </button>
    </div>
  );
}
