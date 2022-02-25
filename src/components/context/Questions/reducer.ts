import { Action, ActionType, State } from "./types";
import { BaseQuestionType } from "../../../mock/type";

/**
 *
 * Notes:
 *
 * I initially planned on having the user be able to view the summary
 * questions unsing the next and back functionality. I decided against it
 * as i wanted them to have all the information infront of them at once.
 * I'm leaving this in here based on the fact that it could come in handy
 * for a different flow.
 */

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.SUBMIT: {
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        questions: state.questions.map((question) => {
          if (question.id === action.payload.id) {
            return { ...question, userAnswer: action.payload.userAnswer };
          }
          return question;
        }),
        completed: state.currentIndex === state.questions.length - 1,
      };
    }
    case ActionType.NEXT_QUESTION: {
      return { ...state, currentIndex: state.currentIndex + 1 };
    }
    case ActionType.PREVIOUS_QUESTION: {
      return { ...state, currentIndex: state.currentIndex - 1 };
    }
    default: {
      return state;
    }
  }
}
