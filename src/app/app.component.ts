import { Component } from '@angular/core';
import { HeaderNavbarComponent } from './private-components/header-navbar/header-navbar.component';
import { FooterComponent } from './private-components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'Reusable';
}
