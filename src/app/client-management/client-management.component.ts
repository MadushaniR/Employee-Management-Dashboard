import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
  ],
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
})
export class ClientManagementComponent implements OnInit {
  // Employees data with qualifications
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
      qualification: 'Diploma',
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
      qualification: 'Degree',
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
      qualification: 'Higher Diploma',
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
      qualification: 'certificate',
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
      qualification: 'Diploma',
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
      qualification: 'Degree',
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
      qualification: 'Higher Diploma',
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
      qualification: 'certificate',
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
      qualification: 'Degree',
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
      qualification: 'Higher Diploma',
      image: 'https://freepngimg.com/download/icon/thoughts/10268-woman-user-circle.png',
    },
  ];
  
  searchTerm: string = '';
  displayedEmployees: any[] = [];
  pageSize: number = 10;
  currentPage: number = 0;
  sortOrder: 'asc' | 'desc' = 'asc';
  isDialogOpen: boolean = false;
  selectedCategories: { [key: string]: boolean } = {};
  selectedLocations: { [key: string]: boolean } = {};
  selectedQualifications: { [key: string]: boolean } = {}; // Qualification filter

  isExpanded: { [key: string]: boolean } = {
    category: false,
    location: false,
    qualification: false,
  };

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

  clearFilters() {
    this.selectedCategories = {};
    this.selectedLocations = {};
    this.selectedQualifications = {};
    this.searchTerm = ''; // Clear search term
    this.filterEmployees(); // Refresh displayed employees after clearing filters
  }
  
  filterEmployees() {
    const filteredEmployees = this.employees
      .filter(employee => employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .filter(employee => this.isCategorySelected(employee.category))
      .filter(employee => this.isLocationSelected(employee.location))
      .filter(employee => this.isQualificationSelected(employee.qualification)); // Qualification filter

    this.displayedEmployees = this.sortEmployees(filteredEmployees).slice(0, this.pageSize);
  }

  isCategorySelected(category: string): boolean {
    return Object.keys(this.selectedCategories).every(key => !this.selectedCategories[key]) ||
           this.selectedCategories[category];
  }

  isLocationSelected(location: string): boolean {
    return Object.keys(this.selectedLocations).every(key => !this.selectedLocations[key]) ||
           this.selectedLocations[location];
  }

  isQualificationSelected(qualification: string): boolean { // Qualification filter check
    return Object.keys(this.selectedQualifications).every(key => !this.selectedQualifications[key]) ||
           this.selectedQualifications[qualification];
  }

  toggleSort() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.filterEmployees();
  }

  sortEmployees(employees: any[]) {
    return employees.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }

  openDialog() {
    this.isDialogOpen = true;
  }

  applyFilter() {
    this.filterEmployees();
    this.isDialogOpen = false;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  toggleExpand(section: string) {
    this.isExpanded[section] = !this.isExpanded[section];
  }
}
