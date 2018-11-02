import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FingerprintAIO,FingerprintOptions } from "@ionic-native/fingerprint-aio";
import { ToastController } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fingerprintOptions : FingerprintOptions;

  constructor(public navCtrl: NavController, public faio:FingerprintAIO, public toast:ToastController) {
    this.fingerprintOptions = {
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', //Only necessary for Android
      disableBackup:false,  //Only for Android(optional)
    }
  }
  

  showFingerprint(){
    let result = this.faio.isAvailable().then((res)=>{
      alert("success - " + res);
      this.faio.show(this.fingerprintOptions).then((res)=>{
        this.navCtrl.push(ListPage)
      }).catch((err)=>{
        alert("error - " + err);
      });
    }).catch((err)=>{
      alert('error '+ err)
  });
    
  }

  

}
