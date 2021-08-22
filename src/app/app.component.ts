import { Component } from '@angular/core';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCodeBranch=faCodeBranch;
  faUsers=faUsers;
}

