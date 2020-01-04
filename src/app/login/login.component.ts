import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:Http) {

   }

  ngOnInit() {
  }
  message:any =[];
  submit(f){
    this.http.post('http://localhost:3000/user/login/',f.value)
    .subscribe(res=>{
      this.message = res.json();
      console.log(this.message);
      alert(this.message.message);
      
    })
  }
}
