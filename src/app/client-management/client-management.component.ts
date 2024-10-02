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
    MatBadgeModule
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
      image: 'path_to_image',
    },
    {
      id: 2,
      name: 'Kamal Perera',
      position: 'Software Engineer',
      category: 'Contract',
      joinDate: '01 Sep 2023',
      location: 'Offsite',
      locationIcon: 'location_off',
      image: 'path_to_image',
    },
    {
      id: 3,
      name: 'Nimal Perera',
      position: 'Software Engineer',
      category: 'Permanent',
      joinDate: '01 Sep 2023',
      location: 'Onsite',
      locationIcon: 'location_on',
      image: 'path_to_image',
    },
    {
      id: 4,
      name: 'Sunil Perera',
      position: 'Software Engineer',
      category: 'Contract',
      joinDate: '01 Sep 2023',
      location: 'Offsite',
      locationIcon: 'location_off',
      image: 'path_to_image',
    },
    {
      id: 5,
      name: 'Kasun Perera',
      position: 'Software Engineer',
      category: 'Permanent',
      joinDate: '01 Sep 2023',
      location: 'Onsite',
      locationIcon: 'location_on',
      image: 'path_to_image',
    },
    {
      id: 6,
      name: 'Saman Perera',
      position: 'Software Engineer',
      category: 'Contract',
      joinDate: '01 Sep 2023',
      location: 'Offsite',
      locationIcon: 'location_off',
      image: 'path_to_image',
    },
    {
      id: 7,
      name: 'Chamara Perera',
      position: 'Software Engineer',
      category: 'Permanent',
      joinDate: '01 Sep 2023',
      location: 'Onsite',
      locationIcon: 'location_on',
      image: 'path_to_image',
    },
    {
      id: 8,
      name: 'Kasun Perera',
      position: 'Software Engineer',
      category: 'Contract',
      joinDate: '01 Sep 2023',
      location: 'Offsite',
      locationIcon: 'location_off',
      image: 'path_to_image',
    },
    
  ];

  // Pagination properties
  displayedEmployees: any[] = []; // Employees to display on the current page
  pageSize: number = 10; // Default page size
  currentPage: number = 0; // Current page index

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.updateDisplayedEmployees();
  }

  // Method to handle page changes
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updateDisplayedEmployees();
  }

  // Update displayed employees based on pagination
  updateDisplayedEmployees() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedEmployees = this.employees.slice(startIndex, endIndex);
  }
}
