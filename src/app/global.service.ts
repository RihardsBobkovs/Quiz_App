import { Injectable } from '@angular/core';


export interface TriviaQuestionRaw {
  type: string;                // "multiple", "boolean", etc.
  difficulty: string;          // "easy" | "medium" | "hard" (but keep string for safety)
  category: string;
  question: string;            
  incorrect_answers: string[]; 
  correct_answer: string;      // The correct answer to the question
}

export interface TriviaApiRaw {
  response_code: number;
  results: TriviaQuestionRaw[];
}

export interface Score{
  score: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public Quiz: TriviaQuestionRaw[] = [];

  public currentQuestionIndex: number = 0;

  public score: Score = {
    score: 0,
    total: 0
  };

}

