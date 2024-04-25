import { Component } from '@angular/core';

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrl: './user-portfolio.component.css',
})
export class UserPortfolioComponent {
  nm = '';
  em = '';
  ph = '';
  add = '';

  submitted: boolean = false;
  showheading: boolean = true;

  qualifications = [{ school: '', degree: '', year: '' }];

  addQualification() {
    this.qualifications.push({ school: 'a', degree: 'a', year: 'a' });
  }

  submit() {
    this.submitted = true;
    this.showheading = false;
  }

  edit() {
    this.submitted = false;
    this.showheading = true;
  }
}
