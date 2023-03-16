import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getMessage(): string {
    return "Hello, World!"
  }
}
