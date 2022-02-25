import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { QuestionContextType, QuestionType, State } from "./types";

const QuestionsContext = createContext<QuestionContextType>([
  {} as State,
  () => {},
]);

interface Props {
  children: React.ReactNode;
  questions: QuestionType[];
}

export function QuestionsProvider({ children, questions, ...props }: Props) {
  const [state, dispatch] = useReducer(reducer, {
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
