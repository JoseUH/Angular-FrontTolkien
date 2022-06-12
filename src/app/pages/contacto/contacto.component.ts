import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/models/userInterface';
import { comparePassword } from './validators/passwordValidator';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public userRegisterForm: FormGroup;
  public submitted: boolean = false;


  constructor(private formBuilder: FormBuilder) {
    this.userRegisterForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9 ]*')]],
      comarca: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
      passwordRepeat: ['', [Validators.required, Validators.maxLength(10)]]
    },
      {
        validator: comparePassword('password', 'passwordRepeat')
      })
   }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    
    this.submitted = true
    
    if (this.userRegisterForm.valid) {
       
      const user: UserInterface = {
        
        username: this.userRegisterForm.get("username")?.value,
        comarca: this.userRegisterForm.get("comarca")?.value,
        password: this.userRegisterForm.get("password")?.value,
        passwordRepeat: this.userRegisterForm.get("passwordRepeat")?.value
      };
      
      console.log("USER ->", user)
      
      this.userRegisterForm.reset();
      
      this.submitted = false
    }

  }

}
