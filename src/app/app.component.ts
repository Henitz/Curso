import { Component } from '@angular/core';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCodeBranch=faCodeBranch;
  faUsers=faUsers;


  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    console.log("Situação Login antes: " + this.isLoggedIn)
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log("Situação Login: " + this.isLoggedIn)
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


}

