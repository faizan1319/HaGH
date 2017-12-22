import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { User } from '../../structures';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  localPassword: string;
  realPassword: string;
  userData: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UsersProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  userLogin() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent'
    });

    loading.present();

    this.userService.loginUser(this.username, this.localPassword)
      .subscribe((userData: User[]) => {
        console.log('this is the login data: ', userData);
        if (userData[0].checkFlag == 2) {
          let toast = this.toastCtrl.create({
            message: 'Incorrect credentials! Please check your username or password.',
            duration: 3000
          })
          loading.dismiss();
          toast.present();
        }
        else if (userData[0].checkFlag == 1) {
          console.log('i am here helloooo');
          this.userData = userData[0];
          if (this.userData.userType == 1) {
            loading.dismiss();
            this.navCtrl.setRoot('MainPage', {
              userData: this.userData
            }, {}, () => {
              let toast = this.toastCtrl.create({
                message: 'See whats happeing and show others what might help them :)',
                duration: 3000
              })
              toast.present();
            })
          }
          else if (this.userData.userType == 3) {
            loading.dismiss();
            this.navCtrl.setRoot('RelatedNews', {
              userData: this.userData
            }, {}, () => {
              let toast = this.toastCtrl.create({
                message: 'See whats happeing and do something about it!',
                duration: 3000
              })
              toast.present();
            })
          }
          // })
        }
        else {
          loading.dismiss();
          let toast = this.toastCtrl.create({
            message: "There is no account associated with this username.",
            duration: 3000
          })
          toast.present();
        }

      }, (error) => {
        loading.dismiss();
        console.log('errorjee: ', error);
        let toast = this.toastCtrl.create({
          message: "Server Problem! Please try later.",
          showCloseButton: true,
          closeButtonText: "Ok"
        })
        toast.present();
      })
  }

}
