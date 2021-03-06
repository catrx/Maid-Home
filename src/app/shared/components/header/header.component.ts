import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title;
  isMaid = JSON.parse(localStorage.getItem('isMaid')).isMaid;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  getLogin() {
    return JSON.parse(localStorage.getItem('user')).login;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }

}
