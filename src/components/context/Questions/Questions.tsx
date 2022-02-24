import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { Action, QuestionContextType, QuestionType, State } from "./types";

const QuestionsContext = createContext<QuestionContextType<QuestionType>>([
  {} as State<QuestionType>,
  () => {},
]);

interface Props {
  children: React.ReactNode;
  questions: QuestionType[];
}

export function QuestionsProvider({ children, questions, ...props }: Props) {
  const [state, dispatch] = useReducer<
    React.Reducer<State<QuestionType>, Action>
  >(reducer, {
    completed: false,
    currentIndex: 0,
    questions,
  });

  return (
    <QuestionsContext.Provider value={[state, dispatch]} {...props}>
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuestionContext() {
  return useContext(QuestionsContext);
}
