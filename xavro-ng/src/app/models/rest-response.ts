import { Error } from './error';

export interface RestResponse<T> {
  success?: boolean;
  status?: number;
  pagination?: any;
  error?: Error;
  data?: T;
}
