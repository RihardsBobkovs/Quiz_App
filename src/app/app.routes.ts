import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { DoneComponent } from './done/done.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "quiz", component: QuizComponent},
    {path: "done", component: DoneComponent},
];
