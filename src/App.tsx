import { QuestionsProvider } from "./components/context/Questions";
import { GlobalStyle } from "./layout/GlobalStyle";
import { QuestionType } from "./components/context/Questions/types";

// importing normalize to give the same layout accross the different browsers
import "./styles/normalize.css";

import questions from "./mock/data.json";
import { Questions } from "./components/Questions";
import { Container } from "./components/Container";
import { Summary } from "./components/Summary";

/**
 * Notes:
 *
 * Normally, I'd use url based routing but since this is a simple
 * application, I chose it wasn't needed.
 *
 * Normally this would be an api fetch or something where we would
 * expect it to return a specific type. Due to us importing the file
 * we have to type cast as QuestionType.
 */

function App() {
  return (
    <>
      <GlobalStyle />
      <QuestionsProvider questions={questions as unknown as QuestionType[]}>
        <Container>
          <h1>Star Wars Quiz</h1>
          <Questions />
          <Summary />
        </Container>
      </QuestionsProvider>
    </>
  );
}

export default App;
