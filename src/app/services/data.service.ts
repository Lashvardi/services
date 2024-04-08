import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  quotes: string[] = [
    "ჭკვიანი კაცის სიტყვები 1",
    "ჭკვიანი კაცის სიტყვები 2",
    "ჭკვიანი კაცის სიტყვები 3",
    "ჭკვიანი კაცის სიტყვები 4",
    "ჭკვიანი კაცის სიტყვები 5",
    "ჭკვიანი კაცის სიტყვები 6",
  ]

  getData() {
    return this.quotes;
  }

  addData(quote: string) {
    this.quotes.push(quote);
  }

}
