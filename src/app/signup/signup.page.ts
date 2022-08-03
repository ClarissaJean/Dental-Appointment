import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user:any = {};

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private afDB: AngularFireDatabase
  ) { }

  ngOnInit() {
  }
  register(){
    if(this.user.email && this.user.password) {
      this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then((res)=>{
        console.log(res);

        this.afDB.object('users/' + res.user.uid).set({
          name:this.user.name,
          email:this.user.email,
          address:this.user.address,
          birth:this.user.birth,
          sex:this.user.sex,
          contact:this.user.contact,
          createdAt: Date.now(),
        }).then( ()=>{
          alert('Succesfully Register!')
        this.router.navigateByUrl('/login');
        });
      }).catch(e=> {
        console.log(e);
      })
  }
  }
}
