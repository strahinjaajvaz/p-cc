import styled from "styled-components";
import { useQuestionContext } from "../context/Questions";
import { SummaryTile } from "./SummaryTile";

/**
 * Notes:
 *
 * I decided to just have the summary page be a "summary" of the
 * questions from before. Having the option to have a lot of user
 * interaction when they should be focused and checking their results
 * would distract from the purpose of the component.
 */

export function Summary() {
  const [{ questions, completed }] = useQuestionContext();

  if (!completed) {
    return null;
  }

  const correctAnswers = questions.filter(
    (question) =>
      question.correctAnswer.toLowerCase() ===
      question.userAnswer?.toLowerCase()
  );

  return (
    <div>
      <HeaderContainer>
        <h2>Summary</h2>
        <p>
          You got {correctAnswers.length} out of {questions.length}
        </p>
      </HeaderContainer>
      <div data-testid="summary-container">
        {questions.map(({ topic, correctAnswer, userAnswer }, i) => {
          return (
            <div key={topic}>
              <h3>
                Q{i + 1}. {topic}
              </h3>
              <SummaryTile
                correctAnswer={correctAnswer}
                userAnswer={userAnswer!}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
