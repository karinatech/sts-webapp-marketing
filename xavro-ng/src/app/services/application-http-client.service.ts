import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestResponse } from '../models/rest-response';

// Angular CLI configuration.
export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: any;
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

export function applicationHttpClientCreator(http: HttpClient) {
  return new ApplicationHttpClient(http);
}

@Injectable()
export class ApplicationHttpClient {

  /**
   * If you don't want to use the extended versions in some cases you can access the public property and use the original one.
   * for ex. this.httpClient.http.get(...)
   *
   * @param http extending the HttpClient through the Angular DI.
   */
  public constructor(public http: HttpClient) {
  }

  /**
   * GET request
   * @param endpoint as string
   * @param options of the request like headers, body, etc.
   * @returns Observable<RestResponse<T>> response
   */
  public get<T>(endpoint: string, options?: IRequestOptions): Observable<RestResponse<T>> {
    return this.http.get<RestResponse<T>>(endpoint, options);
  }

  /**
   * POST request
   * @param endpoint as string
   * @param params (body) of the request.
   * @param options of the request like headers, body, etc.
   * @returns Observable<RestResponse<T>> response
   */
  public post<T>(endpoint: string, params: any, options?: IRequestOptions): Observable<RestResponse<T>> {
    return this.http.post<RestResponse<T>>(endpoint, params, options);
  }

  /**
   * PUT request
   * @param endpoint as string
   * @param params (body) of the request.
   * @param options of the request like headers, body, etc.
   * @returns Observable<RestResponse<T>> response
   */
  public put<T>(endpoint: string, params: any, options?: IRequestOptions): Observable<RestResponse<T>> {
    return this.http.put<RestResponse<T>>(endpoint, params, options);
  }

  /**
   * DELETE request
   * @param endpoint as string
   * @param options of the request like headers, body, etc.
   * @returns Observable<RestResponse<T>> response
   */
  public delete<T>(endpoint: string, options?: IRequestOptions): Observable<RestResponse<T>> {
    return this.http.delete<RestResponse<T>>(endpoint, options);
  }

  /**
   * DELETE request
   * @param endpoint as string
   * @param options of the request like headers, body, etc.
   * @returns Observable<RestResponse<T>> response
   */
  public head<T>(endpoint: string, options?: IRequestOptions): Observable<RestResponse<T>> {
    return this.http.head<RestResponse<T>>(endpoint, options);
  }
}
