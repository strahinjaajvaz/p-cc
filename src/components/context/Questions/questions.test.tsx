import { reducer } from "./reducer";
import { ActionType, Action, State } from "./types";

/**
 * Notes:
 *
 * I dont think that testing the component would be valid as its just
 * rendering the children.
 *
 * The functionality thats encapsulated in the component is covered, anything
 * else would be testing react code itself.
 */

describe("Questions Context", () => {
  describe("Reducer", () => {
    it("should increment the current index by one", () => {
      const ACTION: Action = {
        type: ActionType.NEXT_QUESTION,
      };

      const result = reducer(
        { questions: [], completed: false, currentIndex: 0 },
        ACTION
      );
      expect(result.currentIndex).toBe(1);
    });
    it("should decrement the current index by one", () => {
      const ACTION: Action = {
        type: ActionType.PREVIOUS_QUESTION,
      };

      const result = reducer(
        { questions: [], completed: false, currentIndex: 1 },
        ACTION
      );
      expect(result.currentIndex).toBe(0);
    });
    it("should save the users answer", () => {
      const ACTION: Action = {
        type: ActionType.SUBMIT,
        payload: {
          id: "1",
          userAnswer: "test",
        },
      };

      const result = reducer(
        {
          questions: [
            {
              id: "1",
              correctAnswer: "test",
              topic: "TESTING",
              type: "TextInput",
            },
          ],
          completed: false,
          currentIndex: 0,
        } as State,
        ACTION
      );
      expect(result.questions[0].userAnswer).toBe("test");
    });
    it("should mark the questions as completed", () => {
      const ACTION: Action = {
        type: ActionType.SUBMIT,
        payload: {
          id: "1",
          userAnswer: "test",
        },
      };

      const result = reducer(
        {
          questions: [
            {
              id: "1",
              correctAnswer: "test",
              topic: "TESTING",
              type: "TextInput",
            },
          ],
          completed: false,
          currentIndex: 0,
        } as State,
        ACTION
      );
      expect(result.completed).toBe(true);
    });
  });
});
