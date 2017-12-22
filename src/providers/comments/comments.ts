import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommentsProvider {

  mainUrl: string = 'https://limitless-woodland-73873.herokuapp.com/comments';
  // mainUrl: string = 'http://localhost:3000/comments';

  constructor(public http: HttpClient) {
    console.log('Hello CommentsProvider Provider');
  }

  getPostComments(postId: number) {
    let localUrl: string = this.mainUrl+'/'+postId;
    return this.http.get(localUrl)
  }

  postNewComment(comment: string, userId: number, postId: number) {
    let localUrl: string = this.mainUrl+'/incomming';
    let body = {
      comment,
      postId,
      userId
    };
    console.log('req body:', body);
    return this.http.post(localUrl, body)
  }

  getPostAttributesCount(postId: number) {
    let localUrl: string = this.mainUrl+'/counts/'+postId;
    return this.http.get(localUrl)
  }

}
