interface IUser{
  email:string,
  name:string,
  id: number
}
export const USER_ME = "USER_ME";
export function actionUserMe(user:IUser = null) {
  return {
    type: USER_ME,
    user
  };
}

