import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  uppercase: string = 'Strings can be converted All uppercase';
  lowercase: string = 'Strings can be converted All LOWERCASE';
  myDate: Date = new Date();

  //#region for product section
  products: { name: string; imageUrl: string }[] = [
    {
      name: 'HTML, CSS, Sass, Bootstrap - Beginner to Expert + Bootcamp',
      imageUrl: './assets/products/html-css-tutorials.jpg',
    },
    {
      name: 'JavaScript - Marathon Interview Questions Series',
      imageUrl: './assets/products/JS_Course.png',
    },
    {
      name: 'Mastering TypeScript with Marathon Interview Questions',
      imageUrl: './assets/products/TypeScript_Course.jpg',
    },
    {
      name: 'Mastering React with Interview Questions, eStore Project',
      imageUrl: './assets/products/React_Course.png',
    },
    {
      name: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      imageUrl: './assets/products/RDBMS.png',
    },
    {
      name: 'Mastering Angular with Marathon Interview Quesitons',
      imageUrl: './assets/products/Angular_Course.jpg',
    },
    {
      name: 'NodeJS - Marathon Interview Questions Series',
      imageUrl: './assets/products/NodeJS_Course.jpg',
    },
    {
      name: 'Python - Marathon Interview Questions Series',
      imageUrl: './assets/products/Python_Course.jpg',
    },
  ];
  pgSize: number = 4;
  startIndex: number = 0;
  endIndex: number = this.pgSize;

  previousPage() {
    this.startIndex -= this.pgSize;
    this.endIndex -= this.pgSize;
  }

  nextPage() {
    this.startIndex += this.pgSize;
    this.endIndex += this.pgSize;
  }
  //#endregion

  employees = [
    { name: 'jason smith', state: 'california', salary: 50000 },
    { name: 'anderson brooke', state: 'new york', salary: 75000 },
    { name: 'alex costa', state: 'texas', salary: 60000 },
    { name: 'sean parker', state: 'pennsylvania', salary: 85000 },
  ];

  showJson = false;
  toggleJson() {
    this.showJson = !this.showJson;
  }
}
