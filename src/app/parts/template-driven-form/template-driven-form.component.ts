import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  formSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const formValues = JSON.stringify(myForm.value);
      console.log(formValues);
      console.log('Submit  Success');
    } else {
      alert('fill the required fields');
    }
  }
}
