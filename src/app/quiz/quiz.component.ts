import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DecodeHtmlPipe } from '../decode-html.pipe';

@Component({
  selector: 'app-quiz',
  imports: [FormsModule, CommonModule, DecodeHtmlPipe],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  standalone: true
})
export class QuizComponent {
  constructor(public global: GlobalService, private router: Router) {}

  async ngOnInit() {
    if(this.global.Quiz == null || this.global.Quiz.length == 0) {
      console.log("No quiz data available. Please start a new quiz.");
      await this.router.navigate(['/']);
    }
  }

  submit(answer: string){
    if(this.global.currentQuestionIndex >= this.global.Quiz.length - 1) {
      this.router.navigate(['/done']);
      return;
    }

    if(this.global.Quiz[this.global.currentQuestionIndex].correct_answer == answer){
      this.global.score.score++;
    }

    this.global.currentQuestionIndex++;
  }
}
