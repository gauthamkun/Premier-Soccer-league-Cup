import extendsObservable from "mobx";

class UserStore {
  constructor() {
    extendsObservable(this, {
      loading: true,
      isLoggedIn: false,
      username: "",
    });
  }
}
export default new UserStore();
