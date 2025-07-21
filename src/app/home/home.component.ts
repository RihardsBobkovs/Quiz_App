import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {
  constructor(private global: GlobalService, private router: Router) {}

  ngOnInit(){
    this.resetQuiz()
  }

  public numberOfQuestions: number = 5;

  public selectedCategory: any = { id: 9, name: 'General Knowledge' }; // Default category (General Knowledge)

  public categories: { id: number, name: string }[] = [
    { id: 9, name: 'General Knowledge' },
    { id: 10, name: 'Entertainment: Books' },
    { id: 11, name: 'Entertainment: Film' },
    { id: 12, name: 'Entertainment: Music' },
    { id: 13, name: 'Entertainment: Musicals & Theatres' },
    { id: 14, name: 'Entertainment: Television' },
    { id: 15, name: 'Entertainment: Video Games' },
    { id: 16, name: 'Entertainment: Board Games' },
    { id: 17, name: 'Science & Nature' },
    { id: 18, name: 'Science: Computers' },
    { id: 19, name: 'Science: Mathematics' },
    { id: 21, name: 'Sports' },
    { id: 22, name: 'Geography' },
    { id: 23, name: 'History' },
    { id: 24, name: 'Politics' },
  ];

  public selectedDifficulty: string = 'easy'; // Default difficulty

  public difficulties: string[] = ['easy', 'medium', 'hard']; // Available difficulties

  public selectedType: string = 'multiple'; // Default type of questions

  public types: string[] = ['multiple', 'boolean']; // Available types of questions

  async StartQuiz(){
    this.resetQuiz()

    let ApiUrl: string = `https://opentdb.com/api.php?amount=${this.numberOfQuestions}&category=${this.selectedCategory.id}&difficulty=${this.selectedDifficulty}&type=${this.selectedType}`;

    const response = await fetch(ApiUrl);
    const data = await response.json();
    console.log(data);

    for (let question of data.results) {
      question.incorrect_answers.push(question.correct_answer);
      question.incorrect_answers.sort(() => Math.random() - 0.5); // Shuffle the answers
    }

    this.global.Quiz = data.results;

    await this.router.navigate(['/quiz']);
  }

  resetQuiz() {
    this.global.Quiz = [];
    this.global.currentQuestionIndex = 0;
    this.global.score = { score: 0, total: this.numberOfQuestions };
    console.log("Quiz has been reset.");
  }
}
