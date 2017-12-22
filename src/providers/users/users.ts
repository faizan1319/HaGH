import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  // private mainUrl: string = 'https://limitless-woodland-73873.herokuapp.com/users/';
  mainUrl: string = 'http://localhost:3000/users/';

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  loginUser(username: string, password: string) {
    let localUrl: string = this.mainUrl + 'login';

    let body = {
      username,
      password
    };

    return this.http.post(localUrl, body);
  }

  newUser(body: any) {
    let localUrl: string = this.mainUrl + 'signup';

    return this.http.post(localUrl, body)
  }

  checkForDuplicateUsername(username: string) {
    let localUrl: string = this.mainUrl + 'checkDuplicateUsername/' + username;

    return this.http.get(localUrl)
  }

  checkForEmailAlreadyExist(email: string) {
    let localUrl: string = this.mainUrl + 'checkForEmailAlreadyExist/' + email;

    return this.http.get(localUrl)
  }

  // getEmployeeCategory(userId: number){
  //   let localUrl: string = this.mainUrl+'getEmployeeCategory/'+userId;

  //   return this.http.get(localUrl)
  //   .map((res: Response) => res.json())
  // }

  getUserSubscriptions(userId: number) {
    let localUrl: string = this.mainUrl + 'userSubscriptions/' + userId;

    return this.http.get(localUrl)
  }

  changePassword(userId: number, password: string) {
    let localUrl: string = this.mainUrl + 'changePassword';

    let body = {
      userId,
      password
    }

    return this.http.post(localUrl, body)
  }

}
