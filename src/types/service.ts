export interface Res<T> {
  statusCode: number;
  message: string;
  data: T;
}
