import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})


export class SidenavComponent implements OnInit {
  selectedTheme: string = 'light';  // Default to light theme

  constructor(private renderer: Renderer2) {}

  // OnInit lifecycle hook to apply the saved theme on initialization
  ngOnInit() {
    // Retrieve the saved theme from local storage, or default to 'light'
    const storedTheme = localStorage.getItem('selectedTheme') || 'light';
    this.applyTheme(storedTheme);
  }

  // Handle sidebar item click, but no theme change happens here
  onSidebarItemClick(event: Event) {
    event.stopPropagation();
  }

  // Change theme and store it in local storage
  changeTheme(theme: string) {
    this.selectedTheme = theme;
    localStorage.setItem('selectedTheme', theme);  // Persist the selected theme
    this.applyTheme(theme);  // Apply the theme class to the sidenav
  }

  // Apply the theme to the sidenav element
  applyTheme(theme: string) {
    const sidenavElement = document.querySelector('.sidenav');
    if (theme === 'dark') {
      this.renderer.addClass(sidenavElement, 'dark');
    } else {
      this.renderer.removeClass(sidenavElement, 'dark');
    }
  }
}