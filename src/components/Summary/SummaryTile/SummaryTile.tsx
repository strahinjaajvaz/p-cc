import styled from "styled-components";

interface Props {
  correctAnswer: string;
  userAnswer: string;
}

export function SummaryTile({ correctAnswer, userAnswer }: Props) {
  const correct = correctAnswer.toLowerCase() === userAnswer.toLowerCase();
  return (
    <StyledSummaryTile correct={correct}>
      {!correct && (
        <p data-testid="correct-answer">
          Correct Answer: <span>{correctAnswer}</span>
        </p>
      )}
      <p className="user-answer" data-testid="user-answer">
        Your Answer: <span>{userAnswer}</span>
      </p>
    </StyledSummaryTile>
  );
}

const StyledSummaryTile = styled.div<{ correct: boolean }>`
  display: block;

  @media screen and (min-width: 640px) {
    display: flex;
    gap: 2rem;
  }

  p.user-answer {
    color: ${(props) =>
      props.correct ? "var(--success-green)" : "var(--error-red)"};
  }
`;
