export type RenderQuestionProps<T> = Omit<
  T,
  "usersAnswer" | "correctAnswer" | "type"
>;
