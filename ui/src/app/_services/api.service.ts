import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private base = environment.apiBaseUrl;
  private httpOptions = environment.apiHttpOptions;

  constructor(private $http: HttpClient) { }

  get(url: string, options?): Observable<any> {
    return this.$http.get(`${environment.api.base}${url}`, options);
  }

  post(url: string, body: any | null, options?): Observable<any> {
    return this.$http.post(`${environment.api.base}${url}`, body, options);
  }

  put(url: string, body: any | null, options?): Observable<any> {
    return this.$http.put(`${environment.api.base}${url}`, body, options);
  }

  patch(url: string, body: any | null, options?): Observable<any> {
    return this.$http.patch(`${environment.api.base}${url}`, body, options);
  }

  delete(url: string, options?): Observable<any> {
    return this.$http.delete(`${environment.api.base}${url}`, options);
  }

  resetHomebridgeAccessory() {
    return this.$http.get(`${this.base}/api/settings`, this.httpOptions);
  }

  restartServer() {
    return this.$http.get(`${this.base}/api/settings`, this.httpOptions);
  }

  dockerGetStartupScript(layout) {
    return this.$http.get(`${this.base}/api/settings`, this.httpOptions);
  }

  dockerSaveStartupScript(payload) {
    return this.$http.get(`${this.base}/api/settings`, this.httpOptions);
  }

  dockerRestartContainer() {
    return this.$http.get(`${this.base}/api/settings`, this.httpOptions);
  }

  dockerGetEnv() {
    return this.$http.get(`${this.base}/api/settings`, this.httpOptions);
  }

  dockerSaveEnv(payload) {
    return this.$http.get(`${this.base}/api/settings`, this.httpOptions);
  }

  linuxRestartServer() {
    return this.$http.get(`${this.base}/api/settings`, this.httpOptions);
  }

  linuxShutdownServer() {
    return this.$http.get(`${this.base}/api/settings`, this.httpOptions);
  }
}
