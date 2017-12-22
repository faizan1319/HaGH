export interface User {
  loggedInUserId?          : number
  username?                : string
  userPass?                : string
  userType?                : number
  firstname?               : string
  lastname?                : string
  email?                   : string
  dpUrl?                   : string
  phone?                   : string
  postCount?               : number
  userSubscriptions?       : Array<Subscription>
  employeePostCategoryId?  : number
  checkFlag?               : number
}

export interface Subscription {
  categoryId    : number,
  categoryName  : string
}
