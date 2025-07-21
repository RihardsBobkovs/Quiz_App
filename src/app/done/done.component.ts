import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-done',
  imports: [],
  templateUrl: './done.component.html',
  styleUrl: './done.component.css',
  standalone: true
})
export class DoneComponent {

  constructor(public global: GlobalService, private router: Router) {}

  async ngOnInit() {
    if(this.global.Quiz == null || this.global.Quiz.length == 0) {
      console.log("No quiz data available. Please start a new quiz.");
      await this.router.navigate(['/']);
    }
  }

  async retry(){
    await this.router.navigate(['/']);
  }
}
