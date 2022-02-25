import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { QuestionsProvider } from "../../components/context/Questions";
import { QuestionType } from "../../components/context/Questions/types";

function renderWithQuestionProvider(
  children: React.ReactNode,
  questions: QuestionType[]
) {
  return render(
    <QuestionsProvider questions={questions}>{children}</QuestionsProvider>
  );
}

export { renderWithQuestionProvider, render, screen, fireEvent };
