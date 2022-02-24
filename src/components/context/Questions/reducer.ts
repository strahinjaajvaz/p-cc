import { Action, ActionType, State } from "./types";
import { BaseQuestionType } from "../../../mock/type";

export function reducer<T extends BaseQuestionType = BaseQuestionType>(
  state: State<T>,
  action: Action
): State<T> {
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
        completed: state.currentIndex === state.questions.length,
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
