export interface User {
  id: string;
  fullName: string;
  phone: string;
}

export interface LoginUserPayload {
  token: string;
  user: User;
}
