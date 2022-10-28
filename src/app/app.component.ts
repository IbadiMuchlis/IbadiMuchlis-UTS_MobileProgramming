import { Component, ViewChild } from '@angular/core';
import { AlertController, Platform, IonRouterOutlet } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static : true }) routerOutlet: IonRouterOutlet;
  constructor(
    private alertController: AlertController,
    private platform: Platform,
    private location: Location
  ) {
    this.backButtonEvent();
  }

  backButtonEvent(){
    this.platform.backButton.subscribeWithPriority(10, ()=> {
      if (!this.routerOutlet.canGoBack()) {
        this.backButtonAlert();
      } else {
        this.location.back();
      }
    });
  }
  
  async backButtonAlert(){
    const alert = await this.alertController.create({
      message: 'Anda Keluar',
      buttons: [{
        text: 'cancel',
        role: 'cancel'
      },{
        text: 'Çlose App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });

    await alert.present();
  }

}
