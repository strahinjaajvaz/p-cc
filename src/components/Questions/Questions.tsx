import styled from "styled-components";
import { SingleSelectType, TextInputType } from "../../mock/type";

import { useQuestionContext } from "../context/Questions/Questions";
import { Slider } from "../shared/Slider";
import { TextInput, SingleSelect } from "./QuestionType";

/**
 * Notes:
 *
 * In this example the questions component is the direct child of the provider
 * so it doesn't really make sense to use context when local state would be fine.
 *
 * The reson I used context was that if this was nested deep within the DOM tree
 * then doing prop drilling would be tedious and a waste. In this example, you
 * could pass props down one level.
 *
 * If a question type that we weren't expecting is there, we throw an error. This does
 * three things:
 *  1.  it will notify the dev that the data we have is incorrect or that there is a bug
 *      in the rendering logic
 *  2.  it will stop the user from proceeding and potentially breaking something
 *  3.  this error should be handeled at the "Page" level using Error Boundaries with the
 *      information logged as to why it failed.
 */

export function Questions() {
  const [{ currentIndex, completed, questions }] = useQuestionContext();
  const questionsLength = questions.length;

  console.log(completed);

  return (
    <StyledQuestions>
      <p>
        Question {currentIndex + 1} out of {questionsLength}
      </p>
      <Slider numOfItems={questionsLength} offset={currentIndex}>
        {!completed &&
          questions.map((question) => {
            switch (question.type) {
              case "SingleSelect": {
                return (
                  <SingleSelect
                    key={question.id}
                    {...(question as SingleSelectType)}
                  />
                );
              }
              case "TextInput": {
                return (
                  <TextInput
                    key={question.id}
                    {...(question as TextInputType)}
                  />
                );
              }
              default: {
                // mimic logging the response
                console.error("Sending data to monitoring system");
                throw new Error(`Invalid question type: ${question.type}`);
              }
            }
          })}
      </Slider>
    </StyledQuestions>
  );
}

const StyledQuestions = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;
