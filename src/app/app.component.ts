import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'services';

  // ჩვენს მიერ შექმნილი loggerService რო გამოვიყენოთ
  // გვესაჭიროება Dependency Injection
  // დამოკიდებულებების შემოტანა
  constructor(
    public loggerService: LoggerService,
    public dataService: DataService,
    private router: Router
  ) {
    // constructor-ში შეგვიძლია
    // გამოვიძახოთ ჩვენს მიერ შექმნილი ფუნქციები
    loggerService.logError('მესიჯი', 'ფაილის სახელი', 400);
  }

  addData() {
    // ან იმუშავებს მაშინ როდესაც prompt-ის შედეგი იქნება null
    let quote = prompt('შეიყვანეთ ტექსტი') || '';

    this.dataService.addData(quote);
  }

  authorisedEmail: string = 'admin@admin.com';

  auth() {
    let email = prompt('შეიყვანეთ ელ-ფოსტა');

    if (email === this.authorisedEmail) {
      this.router.navigate(['/test']);
    } else {
      alert('რაშობი');
    }
  }
}
