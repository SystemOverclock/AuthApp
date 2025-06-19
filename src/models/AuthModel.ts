export interface AuthState {
  email: string;
  code: string;
  isAuthenticated: boolean;
}

export class AuthModel {
  private state: AuthState;

  constructor() {
    this.state = {
      email: '',
      code: '',
      isAuthenticated: false
    };
  }

  getEmail() {
    return this.state.email;
  }

  getCode() {
    return this.state.code;
  }

  isAuth() {
    return this.state.isAuthenticated;
  }

  setEmail(email: string) {
    this.state.email = email;
  }

  setCode(code: string) {
    this.state.code = code;
  }

  authenticate() {
    this.state.isAuthenticated = true;
  }

  reset() {
    this.state = {
      email: '',
      code: '',
      isAuthenticated: false
    };
  }
}
