import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    netid: new FormControl(''),
    haslo: new FormControl(''),
  });

  badge = 'Użyj badge';

  onSubmit() {
    console.log(this.LoginForm.value); 
  }

  onBadge() {
    console.log('wyslane');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
