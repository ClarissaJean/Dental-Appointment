import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private afFirestore: AngularFirestore,
    private alertCtrl: AlertController
  ) {}
  
  add(){
    this.alertCtrl.create({
      message: "Create Appointment",
      inputs: [
        { type: 'text', name:'name'},
        { type: 'text', name: 'sched'},
        { type: 'text', name: 'reason'},
        { type: 'text', name: 'day'},
        { type: 'text', name: 'time'}],
      buttons: [
        { text: 'Add', handler:async (res) => {
          console.log(res); 
          this.afFirestore.collection((await this.auth.currentUser).uid).add({
            name:res.name,
            sched:res.sched,
            reason:res.reason,
            day:res.day,
            time:res.time,
            createdAt: Date.now(),
          });
        }       
      }, {
          text: 'Cancel'
        }
      ]
    }).then(a => a.present());
  }

  logout(){
    this.auth.signOut().then( ()=>{
      this.router.navigateByUrl('/login');
    }).catch(er=>{
      console.log(er);
    })
  }
}
