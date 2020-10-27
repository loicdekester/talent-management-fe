import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.css']
})
export class TheHeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  name: string = "";

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.isAuthenticated.subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
    });
    this.userService.currentUser.subscribe((user) => {
      this.name = `${user.firstName} ${user.lastName}`;
    });
  }

  onLogout() {
    this.userService.logout().subscribe((message) => {
      console.log(message);
    });
    this.router.navigate(['sign-up'])
  }

}
