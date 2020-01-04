import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
      
  }
  message:any =[];
  submit(f){
    console.log(f.value);
    this.http.post('http://localhost:3000/user/',f.value)
    .subscribe(res=>{
      this.message = res.json();
      console.log(this.message);
      alert(this.message.message);
          })
    
  }
}