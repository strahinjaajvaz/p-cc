export interface BaseQuestionType {
  topic: string;
  type: string;
  correctAnswer: string;
  id: string;
  usersAnswer?: string;
}

export interface SingleSelectType extends BaseQuestionType {
  answerOptions: string[];
}

export interface TextInputType extends BaseQuestionType {}
