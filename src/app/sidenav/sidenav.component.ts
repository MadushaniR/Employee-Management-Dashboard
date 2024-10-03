import { Component, Renderer2, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  selectedTheme: string = 'light';  
  isCollapsed: boolean = false; 

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const storedTheme = localStorage.getItem('selectedTheme') || 'light';
    this.applyTheme(storedTheme);
  }

  onSidebarItemClick(event: Event) {
    event.stopPropagation();
  }

  changeTheme(theme: string) {
    this.selectedTheme = theme;
    localStorage.setItem('selectedTheme', theme);
    this.applyTheme(theme);
  }

  // applyTheme(theme: string) {
  //   const sidenavElement = document.querySelector('.sidenav');
  //   if (theme === 'dark') {
  //     this.renderer.addClass(sidenavElement, 'dark');
  //   } else {
  //     this.renderer.removeClass(sidenavElement, 'dark');
  //   }
  // }

  applyTheme(theme: string) {
    const body = document.body;
    if (theme === 'dark') {
      this.renderer.addClass(body, 'dark-theme');
    } else {
      this.renderer.removeClass(body, 'dark-theme');
    }
  }
  

  toggleSidenav() {
    this.isCollapsed = !this.isCollapsed; 
  }
}
