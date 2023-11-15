import {Injectable} from '@angular/core';
import {ApplicationHttpClient} from './application-http-client.service';
import {appendQueryParams} from '../constants/util';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private endpoint: string;

  constructor(private appHttp: ApplicationHttpClient) {
  }

  setEndpoint(endpoint: string) {
    if (!endpoint) {
      return;
    }

    this.endpoint = endpoint;
  }

  getEndpoint(): string {
    return this.endpoint;
  }

  getAppHttp(): ApplicationHttpClient {
    return this.appHttp;
  }

  get<T>(id?: number | string, includes?: any[], headers?: any) {

    const endpoint = appendQueryParams(this.endpoint + (id ? ('/' + id) : ''), includes);

    return this.appHttp.get<T>(endpoint, headers);
  }

  getAll<T>(includes?: any[], headers?: any) {

    const endpoint = appendQueryParams(this.endpoint, includes);

    return this.appHttp.get<T[]>(endpoint, headers);
  }

  create<T>(body?: any, headers?: any) {
    return this.appHttp.post<T>(this.endpoint, body, headers);
  }

  update<T>(id?: number | string, body?: any, headers?: any) {
    const endpoint = this.endpoint + (id ? ('/' + id) : '');

    return this.appHttp.put<T>(endpoint, body, headers);
  }

  delete<T>(id?: number | string, headers?: any) {
    const endpoint = this.endpoint + (id ? ('/' + id) : '');

    return this.appHttp.delete<T>(endpoint, headers);
  }
}
