import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logError(message: string, fileName: string, line: number) {
    console.error(`Error: ${message} at ${fileName}:${line}`);
  }
}
