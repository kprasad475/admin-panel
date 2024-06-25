import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admin-panel';

  id: '';
  name: ''
  username: ''
  email: '';
  address: {
    street: ''
    suite: ''
    city: ''
    zipcode: ''
  };
  phone: ''
  website: ''
  company: {
    name: ''
    catchPhrase: ''
    bs: ''
  };
}
