import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
form!: FormGroup 
alertMsg = ''
  constructor(private fb: FormBuilder, private apiService: ApiService){}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }


  login(){
    this.apiService.LoginService(this.form.value).subscribe(res =>{

      if((res as any).message){
        this.alertMsg = (res as any).message

        setTimeout(() => {
          this.alertMsg=''
        }, 3000);
      }else{
        this.alertMsg = 'Invalid Credentials'
      }

    })
  }
}
