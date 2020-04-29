import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab-angular-forms';
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){ }

  ngOnInit(){ 
    this.registerForm = this.formBuilder.group(
      {
        firstname: ['', Validators.required, Validators.minLength(3)],
        lastname: ['', Validators.required, Validators.minLength(3)],
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required, Validators.minLength(8)]
      },
    );
  }

  get f() { return this.registerForm.controls;}

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log('Okk in if');
      return;
    }

    else{
      alert('Success.!! \n\n'+JSON.stringify(this.registerForm.value, null, 3));
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
