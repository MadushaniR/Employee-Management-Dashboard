import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-client-management',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule,
    FormsModule // Include FormsModule
  ],
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
})
export class ClientManagementComponent {
  employees = [
    {
      id: 1,
      name: 'Sanjaya Perera',
      position: 'UI UX Designer',
      category: 'Permanent',
      joinDate: '01 Sep 2023',
      location: 'Onsite',
      locationIcon: 'location_on',
      gender: 'male',
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png',
    },
    {
      id: 2,
      name: 'Kamal Perera',
      position: 'Software Engineer',
      category: 'Contract',
      joinDate: '01 Sep 2023',
      location: 'Offsite',
      locationIcon: 'location_off',
      gender: 'male',
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png',
    },
    {
      id: 3,
      name: 'Nimal Perera',
      position: 'Software Engineer',
      category: 'Permanent',
      joinDate: '01 Sep 2023',
      location: 'Onsite',
      locationIcon: 'location_on',
      gender: 'female',
      image: 'https://freepngimg.com/download/icon/thoughts/10268-woman-user-circle.png',
    },
    {
      id: 4,
      name: 'Sunil Perera',
      position: 'Software Engineer',
      category: 'Contract',
      joinDate: '01 Sep 2023',
      location: 'Offsite',
      locationIcon: 'location_off',
      gender: 'female',
      image: 'https://freepngimg.com/download/icon/thoughts/10268-woman-user-circle.png',
    },
    {
      id: 5,
      name: 'Kasun Perera',
      position: 'Software Engineer',
      category: 'Permanent',
      joinDate: '01 Sep 2023',
      location: 'Onsite',
      locationIcon: 'location_on',
      gender: 'male',
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png',
    },
    {
      id: 6,
      name: 'Saman Perera',
      position: 'Software Engineer',
      category: 'Contract',
      joinDate: '01 Sep 2023',
      location: 'Offsite',
      locationIcon: 'location_off',
      gender: 'male',
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png',
    },
    {
      id: 7,
      name: 'Chamara Perera',
      position: 'Software Engineer',
      category: 'Permanent',
      joinDate: '01 Sep 2023',
      location: 'Onsite',
      locationIcon: 'location_on',
      gender: 'female',
      image: 'https://freepngimg.com/download/icon/thoughts/10268-woman-user-circle.png',
    },
    {
      id: 8,
      name: 'Kasuni Perera',
      position: 'Software Engineer',
      category: 'Contract',
      joinDate: '01 Sep 2023',
      location: 'Offsite',
      locationIcon: 'location_off',
      gender: 'female',
      image: 'https://freepngimg.com/download/icon/thoughts/10268-woman-user-circle.png',
    },
    {
      id: 9,
      name: 'Dhanuka Perera',
      position: 'Project Manager',
      category: 'Permanent',
      joinDate: '01 Aug 2023',
      location: 'Onsite',
      locationIcon: 'location_on',
      gender: 'male',
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-circle-icon.png',
    },
    {
      id: 10,
      name: 'Ayesha Perera',
      position: 'Business Analyst',
      category: 'Permanent',
      joinDate: '01 Jul 2023',
      location: 'Remote',
      locationIcon: 'location_off',
      gender: 'female',
      image: 'https://freepngimg.com/download/icon/thoughts/10268-woman-user-circle.png',
    },
  ];

  searchTerm: string = '';
  displayedEmployees: any[] = [];
  pageSize: number = 10;
  currentPage: number = 0;
  sortOrder: 'asc' | 'desc' = 'asc'; // Default sort order

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.updateDisplayedEmployees();
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updateDisplayedEmployees();
  }

  updateDisplayedEmployees() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedEmployees = this.employees.slice(startIndex, endIndex);
  }

  filterEmployees() {
    const filteredEmployees = this.employees.filter(employee => 
      employee.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    this.displayedEmployees = this.sortEmployees(filteredEmployees).slice(0, this.pageSize);
  }

  toggleSort() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.filterEmployees(); // Re-filter employees after sorting
  }

  sortEmployees(employees: any[]) {
    return employees.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a.name.localeCompare(b.name); // Ascending
      } else {
        return b.name.localeCompare(a.name); // Descending
      }
    });
  }
}
