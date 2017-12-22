import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  mainUrl: string = 'https://limitless-woodland-73873.herokuapp.com/posts';
  // mainUrl: string = 'http://localhost:3000/posts';
  
  constructor(public http: HttpClient) {
    console.log('Hello PostProvider Provider');
  }

  getTrending(){
    let localUrl: string = this.mainUrl+'/trending';
    return this.http.get(localUrl)
  }

  getPostByUserId(userId: number) {
    let localUrl: string = this.mainUrl+'/getPostByUserId/'+userId;
    return this.http.get(localUrl)
  }

  getUserSubscribtionPosts(userId: number){
    let localUrl: string = this.mainUrl+'/getUserSubscriptionPosts/'+userId;
    return this.http.get(localUrl)
  }

  getPostForEmployee(category: number){
    let localUrl: string = this.mainUrl+'/getPostForEmployee/'+category;
    return this.http.get(localUrl)
  }

  getAllPost(){
    let localUrl: string = this.mainUrl+'/getAllPost';
    return this.http.get(localUrl)
  }

  getPostForSearch(searchString: string){
    let localUrl: string = this.mainUrl+'/getPostForSearch/'+searchString;
    return this.http.get(localUrl)
  }

}
