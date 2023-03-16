import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../_models/configuration';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  #config: Observable<Configuration>;

  constructor(private http: HttpClient) {
    this.#config = this.getConfig();
  }

  getMessage(): Observable<string> {
    return this.#config.pipe(map(config => config.message));
  }

  getConfig(): Observable<Configuration> {
    return this.http.get<Configuration>("assets/config.json");
  }
}
