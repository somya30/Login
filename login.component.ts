import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      uname: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(5)
      ])),
      passwd: new FormControl("", this.passwordvalidation)
   });

  };
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"passwd" : true};
    }
  }
    onClickSubmit(data){
      console.log(data.uname);
      if (data.uname=="nitesh" && data.passwd=="nitesh") {
         alert("Login Successful");
         this.router.navigate(['app-home'])
      } else {
         alert("Invalid Login");
         return false;
      }
    }
 }


