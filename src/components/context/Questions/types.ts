import { Dispatch } from "react";
import { SingleSelectType, TextInputType } from "../../../mock/type";

export type QuestionType = TextInputType | SingleSelectType;

export type QuestionContextType<T> = [
  state: State<T>,
  dispatch: Dispatch<Action>
];

export const enum ActionType {
  SUBMIT = "SUBMIT",
  NEXT_QUESTION = "NEXT_QUESTION",
  PREVIOUS_QUESTION = "PREVIOUS_QUESTION",
}

export type Action =
  | {
      type: ActionType.SUBMIT;
      payload: {
        id: string;
        userAnswer: string;
      };
    }
  | {
      type: ActionType.NEXT_QUESTION | ActionType.PREVIOUS_QUESTION;
    };

export type State<T> = {
  questions: T[];
  currentIndex: number;
  completed: boolean;
};
