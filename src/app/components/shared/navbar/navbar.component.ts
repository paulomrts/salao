import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  public user: User | undefined;

  constructor(private router: Router) { }

  ngOnInit() {

    this.user = Security.getUser(); // Le o usuario do Local Storage
  }

  logout(){
    Security.clear(); //Remove os itens do local Storage
    this.router.navigate(['/login']);
  }

}
